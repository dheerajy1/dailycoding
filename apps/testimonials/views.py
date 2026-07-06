from django.db.models import Count, Q, Sum
from rest_framework import generics
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.permissions import IsAdminOrReadOnly
from apps.team.models import TeamMember

from .models import VideoTestimonial
from .serializers import (
    TestimonialAdminSerializer,
    TestimonialReadSerializer,
    TestimonialReportSerializer,
    TestimonialWriteSerializer,
)


def _is_staff(request):
    return bool(
        request.user
        and request.user.is_authenticated
        and (request.user.is_staff or request.user.is_superuser)
    )


# ── Public + Employee-management endpoints ─────────────────────

class TestimonialListCreateView(generics.GenericAPIView):
    """
    GET  /api/testimonials/            — public. Only live (published + approved) testimonials.
                                          Optional filters: ?employee=<id>  ?company=<text>  ?featured=true
                                          Staff users additionally get ?status=draft|published and see everything.
    POST /api/testimonials/            — admin/staff only. Creates a new testimonial (Draft by default).
    """

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return TestimonialReadSerializer
        return TestimonialWriteSerializer

    def get_queryset(self):
        qs = VideoTestimonial.objects.select_related('employee').all()
        request = self.request

        if not _is_staff(request):
            qs = qs.filter(status='published', is_approved=True)
        else:
            status_param = request.query_params.get('status')
            if status_param in ('draft', 'published'):
                qs = qs.filter(status=status_param)

        employee_param = request.query_params.get('employee')
        if employee_param:
            qs = qs.filter(employee_id=employee_param)

        company_param = request.query_params.get('company')
        if company_param:
            qs = qs.filter(company_name__icontains=company_param)

        featured_param = request.query_params.get('featured')
        if featured_param is not None:
            qs = qs.filter(is_featured=featured_param.lower() == 'true')

        return qs

    def get(self, request, *args, **kwargs):
        ser = self.get_serializer(self.get_queryset(), many=True, context={'request': request})
        return Response(ser.data)

    def post(self, request, *args, **kwargs):
        if not _is_staff(request):
            raise PermissionDenied('Admin only.')
        ser = TestimonialWriteSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        obj = ser.save()
        return Response(
            TestimonialAdminSerializer(obj, context={'request': request}).data,
            status=201,
        )


class TestimonialDetailView(generics.GenericAPIView):
    """
    GET    /api/testimonials/<pk>/     — public if live, else admin-only (404 for everyone else).
    PUT/PATCH/DELETE                    — admin/staff only.
    """
    queryset = VideoTestimonial.objects.select_related('employee').all()

    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_object(self):
        try:
            obj = VideoTestimonial.objects.select_related('employee').get(pk=self.kwargs['pk'])
        except VideoTestimonial.DoesNotExist:
            raise NotFound('Testimonial not found.')

        if self.request.method == 'GET' and not obj.is_live and not _is_staff(self.request):
            raise NotFound('Testimonial not found.')
        return obj

    def get(self, request, *args, **kwargs):
        obj = self.get_object()
        serializer_cls = TestimonialAdminSerializer if _is_staff(request) else TestimonialReadSerializer
        return Response(serializer_cls(obj, context={'request': request}).data)

    def _write(self, request, partial):
        if not _is_staff(request):
            raise PermissionDenied('Admin only.')
        obj = self.get_object()
        ser = TestimonialWriteSerializer(obj, data=request.data, partial=partial)
        ser.is_valid(raise_exception=True)
        obj = ser.save()
        return Response(TestimonialAdminSerializer(obj, context={'request': request}).data)

    def put(self, request, *args, **kwargs):
        return self._write(request, partial=False)

    def patch(self, request, *args, **kwargs):
        return self._write(request, partial=True)

    def delete(self, request, *args, **kwargs):
        if not _is_staff(request):
            raise PermissionDenied('Admin only.')
        obj = self.get_object()
        obj.delete()
        return Response(status=204)


class EmployeeTestimonialListView(APIView):
    """
    GET /api/testimonials/employee/<employee_id>/  — public.
    Live testimonials for one team member's portfolio page.
    """
    permission_classes = [AllowAny]

    def get(self, request, employee_id):
        if not TeamMember.objects.filter(pk=employee_id).exists():
            raise NotFound('Employee not found.')
        qs = VideoTestimonial.objects.filter(
            employee_id=employee_id, status='published', is_approved=True
        ).order_by('order', '-created_at')
        ser = TestimonialReadSerializer(qs, many=True, context={'request': request})
        return Response(ser.data)


class TestimonialReportView(APIView):
    """POST /api/testimonials/<pk>/report/ — public. Flags a testimonial for admin review."""
    permission_classes = [AllowAny]

    def post(self, request, pk):
        try:
            obj = VideoTestimonial.objects.get(pk=pk)
        except VideoTestimonial.DoesNotExist:
            raise NotFound('Testimonial not found.')

        ser = TestimonialReportSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        reason = ser.validated_data.get('reason', '')

        obj.is_reported = True
        obj.reported_count += 1
        if reason:
            obj.report_reason = (
                f'{obj.report_reason}\n---\n{reason}'.strip('\n-') if obj.report_reason else reason
            )
        obj.save(update_fields=['is_reported', 'reported_count', 'report_reason'])
        return Response({'detail': 'Thanks — this testimonial has been flagged for review.'}, status=201)


# ── Admin moderation endpoints ──────────────────────────────────

class TestimonialApproveView(APIView):
    """PATCH /api/testimonials/<pk>/approve/ — admin only."""
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not _is_staff(request):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            obj = VideoTestimonial.objects.get(pk=pk)
        except VideoTestimonial.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)
        obj.is_approved = True
        obj.status = 'published'
        obj.save(update_fields=['is_approved', 'status'])
        return Response({'id': obj.id, 'is_approved': True, 'status': obj.status})


class TestimonialRejectView(APIView):
    """PATCH /api/testimonials/<pk>/reject/ — admin only."""
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not _is_staff(request):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            obj = VideoTestimonial.objects.get(pk=pk)
        except VideoTestimonial.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)
        obj.is_approved = False
        obj.status = 'draft'
        obj.save(update_fields=['is_approved', 'status'])
        return Response({'id': obj.id, 'is_approved': False, 'status': obj.status})


class TestimonialFeatureView(APIView):
    """PATCH /api/testimonials/<pk>/feature/ — admin only. Toggles is_featured."""
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not _is_staff(request):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            obj = VideoTestimonial.objects.get(pk=pk)
        except VideoTestimonial.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)
        obj.is_featured = not obj.is_featured
        obj.save(update_fields=['is_featured'])
        return Response({'id': obj.id, 'is_featured': obj.is_featured})


class TestimonialAdminListView(APIView):
    """
    GET /api/testimonials/admin/all/ — admin only. Every testimonial, any status.
    Filters: ?employee=<id>  ?company=<text>  ?reported=true  ?status=draft|published
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not _is_staff(request):
            return Response({'detail': 'Admin only.'}, status=403)

        qs = VideoTestimonial.objects.select_related('employee').all()

        employee_param = request.query_params.get('employee')
        if employee_param:
            qs = qs.filter(employee_id=employee_param)

        company_param = request.query_params.get('company')
        if company_param:
            qs = qs.filter(company_name__icontains=company_param)

        reported_param = request.query_params.get('reported')
        if reported_param is not None:
            qs = qs.filter(is_reported=reported_param.lower() == 'true')

        status_param = request.query_params.get('status')
        if status_param in ('draft', 'published'):
            qs = qs.filter(status=status_param)

        ser = TestimonialAdminSerializer(qs, many=True, context={'request': request})
        return Response(ser.data)


class TestimonialStatsView(APIView):
    """GET /api/testimonials/admin/stats/ — admin only. Storage + moderation overview."""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not _is_staff(request):
            return Response({'detail': 'Admin only.'}, status=403)

        qs = VideoTestimonial.objects.all()
        total_storage_bytes = qs.aggregate(total=Sum('file_size'))['total'] or 0

        by_company = (
            qs.exclude(company_name='')
            .values('company_name')
            .annotate(count=Count('id'))
            .order_by('-count')[:20]
        )
        by_employee = (
            qs.values('employee_id', 'employee__name')
            .annotate(count=Count('id'))
            .order_by('-count')[:20]
        )

        data = {
            'total_testimonials':     qs.count(),
            'published_count':       qs.filter(status='published', is_approved=True).count(),
            'pending_approval_count': qs.filter(status='published', is_approved=False).count(),
            'draft_count':            qs.filter(status='draft').count(),
            'featured_count':         qs.filter(is_featured=True).count(),
            'reported_count':         qs.filter(is_reported=True).count(),
            'mp4_upload_count':       qs.filter(video_source='mp4').count(),
            'youtube_count':          qs.filter(video_source='youtube').count(),
            'total_storage_bytes':    total_storage_bytes,
            'total_storage_mb':       round(total_storage_bytes / (1024 * 1024), 2),
            'by_company':             list(by_company),
            'by_employee':            list(by_employee),
        }
        return Response(data)

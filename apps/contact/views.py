from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import ContactInfo, ContactSubmission
from .serializers import (
    ContactInfoSerializer,
    ContactFormSerializer,
    ContactSubmissionSerializer,
    ContactSubmissionStatusUpdateSerializer,
    SiteStatsSerializer,
)


# ── Public / shared ──────────────────────────────────────────

class ContactInfoView(APIView):
    """
    GET  /api/contact/  — public, returns singleton ContactInfo (id=1).
    PUT  /api/contact/  — admin only, full update.
    PATCH /api/contact/ — admin only, partial update.
    """
    def get_permissions(self):
        if self.request.method in ('PUT', 'PATCH'):
            return [IsAuthenticated(), IsAdminOrReadOnly()]
        return [AllowAny()]

    def get(self, request):
        obj, _ = ContactInfo.objects.get_or_create(pk=1)
        return Response(ContactInfoSerializer(obj).data)

    def put(self, request):
        obj, _ = ContactInfo.objects.get_or_create(pk=1)
        ser = ContactInfoSerializer(obj, data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)

    def patch(self, request):
        obj, _ = ContactInfo.objects.get_or_create(pk=1)
        ser = ContactInfoSerializer(obj, data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data)


class ContactSubmitView(APIView):
    """
    POST /api/contact/submit/ — public.
    Accepts: name, email, phone, description, budget.
    Saves submission and returns 201.
    """
    permission_classes = [AllowAny]

    def post(self, request):
        ser = ContactFormSerializer(data=request.data)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(
            {'detail': 'Message received. We will get back to you soon.'},
            status=201,
        )


class SiteStatsView(APIView):
    """GET /api/stats/ — public. Returns aggregate counts for hero section."""
    permission_classes = [AllowAny]

    def get(self, request):
        from apps.team.models import TeamMember
        from apps.projects.models import Project
        from apps.services.models import Service
        from apps.courses.models import Course
        from apps.reviews.models import Review
        from apps.testimonials.models import VideoTestimonial

        data = {
            'team_count':              TeamMember.objects.count(),
            'project_count':           Project.objects.count(),
            'service_count':           Service.objects.filter(is_active=True).count(),
            'course_count':            Course.objects.filter(is_active=True).count(),
            'review_count':            Review.objects.filter(is_approved=True).count(),
            'testimonial_count':       VideoTestimonial.objects.filter(status='published', is_approved=True).count(),
            'for_sale_count':          Project.objects.filter(is_featured=True).count(),
            'submission_count':        ContactSubmission.objects.count(),
            'unread_submission_count': ContactSubmission.objects.filter(is_read=False).count(),
        }
        return Response(data)


# ── Admin-protected submission management ─────────────────────

class ContactSubmissionsListView(APIView):
    """
    GET /api/contact/submissions/ — admin only.
    Returns all contact form submissions ordered by newest first.
    Query params:
      ?is_read=true|false  — filter by read status
      ?ordering=created_at|-created_at
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if not (request.user.is_staff or request.user.is_superuser):
            return Response({'detail': 'Admin only.'}, status=403)

        qs = ContactSubmission.objects.all()

        # Optional filter by read status
        is_read_param = request.query_params.get('is_read')
        if is_read_param is not None:
            qs = qs.filter(is_read=is_read_param.lower() == 'true')

        # Optional ordering (default: -created_at)
        ordering = request.query_params.get('ordering', '-created_at')
        allowed_orderings = ('created_at', '-created_at', 'name', '-name')
        if ordering not in allowed_orderings:
            ordering = '-created_at'
        qs = qs.order_by(ordering)

        ser = ContactSubmissionSerializer(qs, many=True)
        return Response(ser.data)


class ContactSubmissionDetailView(APIView):
    """
    DELETE /api/contact/submissions/<pk>/ — admin only.
    Permanently deletes a contact form submission.
    """
    permission_classes = [IsAuthenticated]

    def _get_object(self, pk):
        try:
            return ContactSubmission.objects.get(pk=pk)
        except ContactSubmission.DoesNotExist:
            return None

    def delete(self, request, pk):
        if not (request.user.is_staff or request.user.is_superuser):
            return Response({'detail': 'Admin only.'}, status=403)
        obj = self._get_object(pk)
        if obj is None:
            return Response({'detail': 'Not found.'}, status=404)
        obj.delete()
        return Response(status=204)


class ContactSubmissionReadView(APIView):
    """
    PATCH /api/contact/submissions/<pk>/read/ — admin only.
    Toggles the is_read flag on the submission (no request body needed).
    Returns: { "id": <pk>, "is_read": <new_value> }
    """
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not (request.user.is_staff or request.user.is_superuser):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            submission = ContactSubmission.objects.get(pk=pk)
        except ContactSubmission.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)

        submission.is_read = not submission.is_read
        submission.save(update_fields=['is_read'])
        return Response({'id': submission.id, 'is_read': submission.is_read})


class ContactSubmissionStatusView(APIView):
    """
    PATCH /api/contact/submissions/<pk>/status/ — admin only.
    Body: { "status": "new" | "reviewed" | "confirmed" }
    Moves the enquiry through the review pipeline. Actual client email is
    sent manually by the admin from their own inbox — this only tracks
    where the enquiry stands.
    """
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not (request.user.is_staff or request.user.is_superuser):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            submission = ContactSubmission.objects.get(pk=pk)
        except ContactSubmission.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)

        ser = ContactSubmissionStatusUpdateSerializer(submission, data=request.data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ContactSubmissionSerializer(submission).data)

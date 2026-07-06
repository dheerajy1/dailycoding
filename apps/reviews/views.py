from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import Review
from .serializers import ReviewReadSerializer, ReviewWriteSerializer, ReviewAdminSerializer


class ReviewListCreateView(generics.GenericAPIView):
    def get_permissions(self):
        if self.request.method == 'GET':
            return [AllowAny()]
        return [IsAuthenticated()]

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ReviewReadSerializer
        return ReviewWriteSerializer

    def get_queryset(self):
        return Review.objects.filter(is_approved=True).order_by('-created_at')

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        ser = ReviewReadSerializer(qs, many=True)
        return Response(ser.data)

    def post(self, request, *args, **kwargs):
        ser = ReviewWriteSerializer(data=request.data, context={'request': request})
        ser.is_valid(raise_exception=True)
        ser.save()
        return Response(ser.data, status=201)


class ReviewDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = Review.objects.all()
    serializer_class   = ReviewAdminSerializer
    permission_classes = [IsAdminOrReadOnly]


class ReviewApproveView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        if not (request.user.is_staff or request.user.is_superuser):
            return Response({'detail': 'Admin only.'}, status=403)
        try:
            review = Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)
        review.is_approved = True
        review.save()
        return Response({'id': review.id, 'is_approved': True})

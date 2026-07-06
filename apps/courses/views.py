from rest_framework import generics

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import Course
from .serializers import CourseSerializer


class CourseListCreateView(generics.ListCreateAPIView):
    serializer_class   = CourseSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        return Course.objects.filter(is_active=True).order_by('order', '-created_at')

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx


class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = Course.objects.all()
    serializer_class   = CourseSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx

from rest_framework import generics

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import Project
from .serializers import ProjectSerializer


class ProjectListCreateView(generics.ListCreateAPIView):
    serializer_class   = ProjectSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        # Featured first, then by order
        return Project.objects.all().order_by('-is_featured', 'order', '-created_at')

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx


class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = Project.objects.all()
    serializer_class   = ProjectSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_serializer_context(self):
        ctx = super().get_serializer_context()
        ctx['request'] = self.request
        return ctx

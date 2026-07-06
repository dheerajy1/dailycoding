from rest_framework import generics

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import Service
from .serializers import ServiceSerializer


class ServiceListCreateView(generics.ListCreateAPIView):
    serializer_class   = ServiceSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        # Only active services for public; admin can see all via detail
        return Service.objects.filter(is_active=True).order_by('order', 'id')


class ServiceDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset           = Service.objects.all()
    serializer_class   = ServiceSerializer
    permission_classes = [IsAdminOrReadOnly]

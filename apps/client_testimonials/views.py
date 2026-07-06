from rest_framework import generics

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import ClientTestimonial
from .serializers import ClientTestimonialSerializer


class ClientTestimonialListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/client-testimonials/   — public (active only for non-admins).
    POST /api/client-testimonials/   — admin only.
    """
    serializer_class   = ClientTestimonialSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        qs = ClientTestimonial.objects.all()
        if not (self.request.user and self.request.user.is_authenticated
                and (self.request.user.is_staff or self.request.user.is_superuser)):
            qs = qs.filter(is_active=True)
        return qs


class ClientTestimonialDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET/PUT/PATCH/DELETE /api/client-testimonials/<pk>/ — read public, write admin only.
    """
    queryset           = ClientTestimonial.objects.all()
    serializer_class   = ClientTestimonialSerializer
    permission_classes = [IsAdminOrReadOnly]

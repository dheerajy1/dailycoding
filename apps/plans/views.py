from rest_framework import generics
from rest_framework.permissions import AllowAny

from apps.accounts.permissions import IsAdminOrReadOnly
from .models import PricingPlan
from .serializers import PricingPlanSerializer


class PricingPlanListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/plans/            — public. Optional ?category=frontend|backend filter.
    POST /api/plans/            — admin only.
    """
    serializer_class   = PricingPlanSerializer
    permission_classes = [IsAdminOrReadOnly]

    def get_queryset(self):
        qs = PricingPlan.objects.all()
        if not (self.request.user and self.request.user.is_authenticated
                and (self.request.user.is_staff or self.request.user.is_superuser)):
            qs = qs.filter(is_active=True)
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs


class PricingPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET/PUT/PATCH/DELETE /api/plans/<pk>/ — read public, write admin only.
    """
    queryset           = PricingPlan.objects.all()
    serializer_class   = PricingPlanSerializer
    permission_classes = [IsAdminOrReadOnly]

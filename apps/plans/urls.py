from django.urls import path

from . import views

urlpatterns = [
    path('plans/',          views.PricingPlanListCreateView.as_view(), name='plans-list'),
    path('plans/<int:pk>/', views.PricingPlanDetailView.as_view(),     name='plans-detail'),
]

from django.urls import path

from . import views

urlpatterns = [
    path('client-testimonials/',          views.ClientTestimonialListCreateView.as_view(), name='client-testimonials-list'),
    path('client-testimonials/<int:pk>/', views.ClientTestimonialDetailView.as_view(),     name='client-testimonials-detail'),
]

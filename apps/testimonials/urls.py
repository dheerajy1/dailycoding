from django.urls import path

from . import views

urlpatterns = [
    # ── Admin moderation (must come before <int:pk> routes) ──
    path('testimonials/admin/all/',
         views.TestimonialAdminListView.as_view(),  name='testimonial-admin-list'),
    path('testimonials/admin/stats/',
         views.TestimonialStatsView.as_view(),       name='testimonial-admin-stats'),

    # ── Employee portfolio page ───────────────────────────────
    path('testimonials/employee/<int:employee_id>/',
         views.EmployeeTestimonialListView.as_view(), name='testimonial-employee-list'),

    # ── Public + core CRUD ─────────────────────────────────────
    path('testimonials/',
         views.TestimonialListCreateView.as_view(),  name='testimonial-list'),
    path('testimonials/<int:pk>/',
         views.TestimonialDetailView.as_view(),       name='testimonial-detail'),

    # ── Actions ─────────────────────────────────────────────────
    path('testimonials/<int:pk>/approve/',
         views.TestimonialApproveView.as_view(),      name='testimonial-approve'),
    path('testimonials/<int:pk>/reject/',
         views.TestimonialRejectView.as_view(),        name='testimonial-reject'),
    path('testimonials/<int:pk>/feature/',
         views.TestimonialFeatureView.as_view(),       name='testimonial-feature'),
    path('testimonials/<int:pk>/report/',
         views.TestimonialReportView.as_view(),        name='testimonial-report'),
]

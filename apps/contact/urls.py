from django.urls import path

from . import views

urlpatterns = [
    # Public endpoints
    path('contact/',         views.ContactInfoView.as_view(),   name='contact-info'),
    path('contact/submit/',  views.ContactSubmitView.as_view(), name='contact-submit'),
    path('stats/',           views.SiteStatsView.as_view(),     name='site-stats'),

    # Admin-protected submission management
    path('contact/submissions/',
         views.ContactSubmissionsListView.as_view(),
         name='contact-submissions-list'),
    path('contact/submissions/<int:pk>/',
         views.ContactSubmissionDetailView.as_view(),
         name='contact-submission-detail'),
    path('contact/submissions/<int:pk>/read/',
         views.ContactSubmissionReadView.as_view(),
         name='contact-submission-read'),
    path('contact/submissions/<int:pk>/status/',
         views.ContactSubmissionStatusView.as_view(),
         name='contact-submission-status'),
]

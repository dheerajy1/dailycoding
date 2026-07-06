from django.urls import path

from . import views

urlpatterns = [
    # Note: 'team/mentor/' must come BEFORE 'team/<int:pk>/' to avoid
    # Django trying to cast 'mentor' as an integer.
    path('team/mentor/',   views.MentorView.as_view(),             name='team-mentor'),
    path('team/',          views.TeamMemberListCreateView.as_view(), name='team-list'),
    path('team/<int:pk>/', views.TeamMemberDetailView.as_view(),    name='team-detail'),
]

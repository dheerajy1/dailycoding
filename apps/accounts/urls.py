from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from . import views

urlpatterns = [
    path('auth/login/',         views.LoginView.as_view(),    name='auth-login'),
    path('auth/register/',      views.RegisterView.as_view(), name='auth-register'),
    path('auth/token/refresh/', TokenRefreshView.as_view(),   name='token-refresh'),
    path('auth/profile/',       views.ProfileView.as_view(),  name='auth-profile'),
    path('auth/logout/',        views.LogoutView.as_view(),   name='auth-logout'),
]

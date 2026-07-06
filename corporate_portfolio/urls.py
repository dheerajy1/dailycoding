from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('django-admin/', admin.site.urls),
    path('api/', include('apps.accounts.urls')),
    path('api/', include('apps.team.urls')),
    path('api/', include('apps.projects.urls')),
    path('api/', include('apps.services.urls')),
    path('api/', include('apps.courses.urls')),
    path('api/', include('apps.reviews.urls')),
    path('api/', include('apps.contact.urls')),
    path('api/', include('apps.testimonials.urls')),
    path('api/', include('apps.plans.urls')),
    path('api/', include('apps.documents.urls')),
    path('api/', include('apps.client_testimonials.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

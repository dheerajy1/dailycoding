from django.urls import path

from . import views

urlpatterns = [
    path('documents/company-pdf/', views.CompanyDocumentView.as_view(), name='company-pdf'),
]

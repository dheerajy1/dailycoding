from django.contrib import admin

from .models import Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display  = ['title', 'icon', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['title', 'description']
    list_filter   = ['is_active']

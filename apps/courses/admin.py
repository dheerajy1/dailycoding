from django.contrib import admin

from .models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display  = ['title', 'type', 'price', 'duration', 'is_active', 'order', 'created_at']
    list_editable = ['is_active', 'order']
    search_fields = ['title', 'description']
    list_filter   = ['type', 'is_active']

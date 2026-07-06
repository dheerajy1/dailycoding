from django.contrib import admin

from .models import VideoTestimonial


@admin.register(VideoTestimonial)
class VideoTestimonialAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'client_name', 'company_name', 'employee',
        'video_source', 'status', 'is_approved', 'is_featured',
        'is_reported', 'rating', 'order', 'created_at',
    ]
    list_editable   = ['is_approved', 'is_featured', 'order']
    list_filter     = ['status', 'is_approved', 'is_featured', 'is_reported', 'video_source', 'rating']
    search_fields   = ['title', 'client_name', 'company_name', 'project_name', 'employee__name']
    readonly_fields = ['file_size', 'reported_count', 'created_at', 'updated_at']
    autocomplete_fields = ['employee']

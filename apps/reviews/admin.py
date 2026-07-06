from django.contrib import admin

from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display  = ['user_name', 'location', 'rating', 'is_approved', 'created_at']
    list_editable = ['is_approved']
    search_fields = ['user_name', 'comment', 'location']
    list_filter   = ['is_approved', 'rating']
    readonly_fields = ['created_at', 'updated_at']

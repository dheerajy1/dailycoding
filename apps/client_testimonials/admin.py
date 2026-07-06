from django.contrib import admin

from .models import ClientTestimonial


@admin.register(ClientTestimonial)
class ClientTestimonialAdmin(admin.ModelAdmin):
    list_display  = ['client_name', 'company_name', 'rating', 'is_active', 'order']
    list_filter   = ['is_active', 'rating']
    search_fields = ['client_name', 'company_name', 'quote']
    list_editable = ['order', 'is_active']

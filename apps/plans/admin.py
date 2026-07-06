from django.contrib import admin

from .models import PricingPlan


@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display  = ['name', 'category', 'price', 'currency', 'billing_period', 'is_highlighted', 'is_active', 'order']
    list_filter   = ['category', 'is_active', 'is_highlighted']
    search_fields = ['name', 'best_for']
    list_editable = ['order', 'is_active', 'is_highlighted']
    ordering      = ['category', 'order', 'id']

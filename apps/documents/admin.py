from django.contrib import admin

from .models import CompanyDocument


@admin.register(CompanyDocument)
class CompanyDocumentAdmin(admin.ModelAdmin):
    list_display   = ['original_filename', 'uploaded_at', 'updated_at']
    readonly_fields = ['uploaded_at', 'updated_at']

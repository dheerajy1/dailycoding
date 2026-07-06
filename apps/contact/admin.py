from django.contrib import admin

from .models import ContactInfo, ContactSubmission


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display  = ['address', 'phone', 'email', 'website', 'updated_at']
    readonly_fields = ['updated_at']

    def has_add_permission(self, request):
        return not ContactInfo.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display   = ['name', 'email', 'phone', 'company_name', 'plan', 'team_member', 'status', 'is_read', 'created_at']
    list_filter    = ['status', 'is_read', 'created_at', 'plan__category']
    search_fields  = ['name', 'email', 'description', 'company_name']
    readonly_fields = ['name', 'email', 'phone', 'company_name', 'description', 'budget',
                        'project_timeline', 'team_member', 'plan', 'created_at']
    list_editable  = ['status', 'is_read']
    ordering       = ['-created_at']

    def has_add_permission(self, request):
        return False

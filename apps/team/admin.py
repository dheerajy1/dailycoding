from django.contrib import admin

from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display  = ['name', 'role', 'is_mentor', 'order', 'created_at']
    list_editable = ['is_mentor', 'order']
    search_fields = ['name', 'role']
    list_filter   = ['is_mentor']

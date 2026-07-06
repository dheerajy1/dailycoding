from rest_framework import serializers

from .models import ContactInfo, ContactSubmission


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ContactInfo
        fields = '__all__'


class ContactFormSerializer(serializers.ModelSerializer):
    """
    Write-only serializer used by the public contact-form submit endpoint.
    Covers both a general enquiry and a Pricing Plan enquiry (when `plan`
    is supplied) using the same form/table.
    """
    class Meta:
        model  = ContactSubmission
        fields = [
            'name', 'email', 'phone', 'company_name',
            'description', 'budget', 'project_timeline',
            'team_member', 'plan',
        ]


class ContactSubmissionSerializer(serializers.ModelSerializer):
    """
    Full read serializer for admin-protected submission list/detail.
    Returns all fields including status, is_read, and related names.
    """
    team_member_name = serializers.CharField(source='team_member.name', read_only=True, default=None)
    plan_name         = serializers.CharField(source='plan.name', read_only=True, default=None)
    plan_category     = serializers.CharField(source='plan.category', read_only=True, default=None)

    class Meta:
        model  = ContactSubmission
        fields = [
            'id', 'name', 'email', 'phone', 'company_name',
            'description', 'budget', 'project_timeline',
            'team_member', 'team_member_name',
            'plan', 'plan_name', 'plan_category',
            'status', 'is_read', 'created_at',
        ]
        read_only_fields = fields


class ContactSubmissionStatusUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ContactSubmission
        fields = ['status']


class SiteStatsSerializer(serializers.Serializer):
    team_count              = serializers.IntegerField()
    project_count           = serializers.IntegerField()
    service_count           = serializers.IntegerField()
    course_count            = serializers.IntegerField()
    review_count            = serializers.IntegerField()
    for_sale_count          = serializers.IntegerField()
    submission_count        = serializers.IntegerField()
    unread_submission_count = serializers.IntegerField()

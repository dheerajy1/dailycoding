from rest_framework import serializers

from .models import VideoTestimonial


def _abs_url(context, file_field):
    if file_field and hasattr(file_field, 'url') and file_field.name:
        request = context.get('request')
        return request.build_absolute_uri(file_field.url) if request else file_field.url
    return None


class TestimonialReadSerializer(serializers.ModelSerializer):
    """Public-facing serializer — only what a visitor needs to see."""
    employee_id   = serializers.IntegerField(source='employee.id', read_only=True)
    employee_name = serializers.CharField(source='employee.name', read_only=True)
    video_file      = serializers.SerializerMethodField()
    video_thumbnail = serializers.SerializerMethodField()
    profile_photo   = serializers.SerializerMethodField()
    company_logo    = serializers.SerializerMethodField()

    class Meta:
        model = VideoTestimonial
        fields = [
            'id', 'employee_id', 'employee_name',
            'title', 'client_name', 'designation', 'company_name',
            'project_name', 'project_duration',
            'video_source', 'video_url', 'video_file', 'video_thumbnail',
            'profile_photo', 'company_logo',
            'rating', 'written_feedback',
            'is_featured', 'order', 'created_at',
        ]

    def get_video_file(self, obj):
        return _abs_url(self.context, obj.video_file)

    def get_video_thumbnail(self, obj):
        return _abs_url(self.context, obj.video_thumbnail)

    def get_profile_photo(self, obj):
        return _abs_url(self.context, obj.profile_photo)

    def get_company_logo(self, obj):
        return _abs_url(self.context, obj.company_logo)


class TestimonialWriteSerializer(serializers.ModelSerializer):
    """Used for create/update by an admin/staff user (multipart for file uploads)."""

    clear_video_thumbnail = serializers.BooleanField(write_only=True, required=False, default=False)
    clear_profile_photo   = serializers.BooleanField(write_only=True, required=False, default=False)
    clear_company_logo    = serializers.BooleanField(write_only=True, required=False, default=False)

    class Meta:
        model = VideoTestimonial
        fields = [
            'id', 'employee',
            'title', 'client_name', 'designation', 'company_name',
            'project_name', 'project_duration',
            'video_source', 'video_url', 'video_file', 'video_thumbnail',
            'profile_photo', 'company_logo',
            'rating', 'written_feedback',
            'status', 'is_featured', 'order',
            'clear_video_thumbnail', 'clear_profile_photo', 'clear_company_logo',
        ]

    def validate(self, attrs):
        # Apply the same YouTube/MP4 rule as the model's clean(), using the
        # effective value (new attrs, falling back to the existing instance
        # on partial updates).
        video_source = attrs.get('video_source', getattr(self.instance, 'video_source', None))
        video_url    = attrs.get('video_url', getattr(self.instance, 'video_url', None))
        video_file   = attrs.get('video_file', getattr(self.instance, 'video_file', None))

        if video_source == 'youtube' and not video_url:
            raise serializers.ValidationError(
                {'video_url': 'A YouTube URL is required when video source is YouTube.'}
            )
        if video_source == 'mp4' and not video_file:
            raise serializers.ValidationError(
                {'video_file': 'An MP4 file is required when video source is MP4 Upload.'}
            )
        return attrs

    def update(self, instance, validated_data):
        clears = {
            'video_thumbnail': validated_data.pop('clear_video_thumbnail', False),
            'profile_photo':   validated_data.pop('clear_profile_photo', False),
            'company_logo':    validated_data.pop('clear_company_logo', False),
        }
        for field_name, should_clear in clears.items():
            if should_clear and not validated_data.get(field_name):
                current = getattr(instance, field_name)
                if current and current.name:
                    current.delete(save=False)
                setattr(instance, field_name, None)

        return super().update(instance, validated_data)


class TestimonialAdminSerializer(serializers.ModelSerializer):
    """Full serializer for admin moderation views (all fields, read+write)."""
    employee_name = serializers.CharField(source='employee.name', read_only=True)
    video_file      = serializers.SerializerMethodField()
    video_thumbnail = serializers.SerializerMethodField()
    profile_photo   = serializers.SerializerMethodField()
    company_logo    = serializers.SerializerMethodField()
    file_size_mb    = serializers.SerializerMethodField()

    class Meta:
        model = VideoTestimonial
        fields = '__all__'

    def get_video_file(self, obj):
        return _abs_url(self.context, obj.video_file)

    def get_video_thumbnail(self, obj):
        return _abs_url(self.context, obj.video_thumbnail)

    def get_profile_photo(self, obj):
        return _abs_url(self.context, obj.profile_photo)

    def get_company_logo(self, obj):
        return _abs_url(self.context, obj.company_logo)

    def get_file_size_mb(self, obj):
        return round(obj.file_size / (1024 * 1024), 2) if obj.file_size else None


class TestimonialReportSerializer(serializers.Serializer):
    """Public 'report inappropriate content' endpoint payload."""
    reason = serializers.CharField(max_length=1000, required=False, allow_blank=True)

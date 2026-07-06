from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    # Thumbnail: read = merged (uploaded file wins, else thumbnail_url).
    # Write: file uploads go through `thumbnail_file`, URLs through `thumbnail_url`
    # directly — keeping `thumbnail` itself read-only avoids the previous bug
    # where a SerializerMethodField silently swallowed URL writes.
    thumbnail      = serializers.SerializerMethodField()
    thumbnail_file = serializers.ImageField(source='thumbnail', write_only=True, required=False, allow_null=True)
    clear_thumbnail = serializers.BooleanField(write_only=True, required=False, default=False)

    class Meta:
        model  = Project
        fields = '__all__'

    def get_thumbnail(self, obj):
        if obj.thumbnail and hasattr(obj.thumbnail, 'url') and obj.thumbnail.name:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.thumbnail.url) if request else obj.thumbnail.url
        return obj.thumbnail_url or None

    def update(self, instance, validated_data):
        clear_thumbnail = validated_data.pop('clear_thumbnail', False)

        if clear_thumbnail and not validated_data.get('thumbnail') and not validated_data.get('thumbnail_url'):
            if instance.thumbnail and instance.thumbnail.name:
                instance.thumbnail.delete(save=False)
            instance.thumbnail = None
            instance.thumbnail_url = None

        return super().update(instance, validated_data)

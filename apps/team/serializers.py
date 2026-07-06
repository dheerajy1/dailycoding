from rest_framework import serializers

from .models import TeamMember


def _abs_url(context, file_field):
    if file_field and hasattr(file_field, 'url') and file_field.name:
        request = context.get('request')
        return request.build_absolute_uri(file_field.url) if request else file_field.url
    return None


class TeamMemberSerializer(serializers.ModelSerializer):
    # ── Avatar: read = merged (uploaded file wins, else avatar_url) ──
    avatar      = serializers.SerializerMethodField()
    avatar_file = serializers.ImageField(source='avatar', write_only=True, required=False, allow_null=True)
    clear_avatar = serializers.BooleanField(write_only=True, required=False, default=False)

    # ── Banner: same upload-or-URL pattern ──
    banner_image      = serializers.SerializerMethodField()
    banner_image_file = serializers.ImageField(source='banner_image', write_only=True, required=False, allow_null=True)
    clear_banner_image = serializers.BooleanField(write_only=True, required=False, default=False)

    class Meta:
        model  = TeamMember
        fields = '__all__'

    def get_avatar(self, obj):
        return _abs_url(self.context, obj.avatar) or obj.avatar_url or None

    def get_banner_image(self, obj):
        return _abs_url(self.context, obj.banner_image) or obj.banner_image_url or None

    def update(self, instance, validated_data):
        clear_avatar = validated_data.pop('clear_avatar', False)
        clear_banner = validated_data.pop('clear_banner_image', False)

        if clear_avatar and not validated_data.get('avatar') and not validated_data.get('avatar_url'):
            if instance.avatar and instance.avatar.name:
                instance.avatar.delete(save=False)
            instance.avatar = None
            instance.avatar_url = None

        if clear_banner and not validated_data.get('banner_image') and not validated_data.get('banner_image_url'):
            if instance.banner_image and instance.banner_image.name:
                instance.banner_image.delete(save=False)
            instance.banner_image = None
            instance.banner_image_url = None

        return super().update(instance, validated_data)

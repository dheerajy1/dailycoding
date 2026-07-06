from rest_framework import serializers

from .models import ClientTestimonial


class ClientTestimonialSerializer(serializers.ModelSerializer):
    # Photo: read = merged (uploaded file wins, else photo_url).
    photo      = serializers.SerializerMethodField()
    photo_file = serializers.ImageField(source='photo', write_only=True, required=False, allow_null=True)
    clear_photo = serializers.BooleanField(write_only=True, required=False, default=False)

    class Meta:
        model  = ClientTestimonial
        fields = '__all__'

    def get_photo(self, obj):
        if obj.photo and hasattr(obj.photo, 'url') and obj.photo.name:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.photo.url) if request else obj.photo.url
        return obj.photo_url or None

    def update(self, instance, validated_data):
        clear_photo = validated_data.pop('clear_photo', False)

        if clear_photo and not validated_data.get('photo') and not validated_data.get('photo_url'):
            if instance.photo and instance.photo.name:
                instance.photo.delete(save=False)
            instance.photo = None
            instance.photo_url = None

        return super().update(instance, validated_data)

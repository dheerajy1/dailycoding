from rest_framework import serializers

from .models import Course


class CourseSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()

    class Meta:
        model  = Course
        fields = '__all__'

    def get_thumbnail(self, obj):
        if obj.thumbnail and hasattr(obj.thumbnail, 'url') and obj.thumbnail.name:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.thumbnail.url) if request else obj.thumbnail.url
        return None

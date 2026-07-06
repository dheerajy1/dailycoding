from rest_framework import serializers

from .models import CompanyDocument


class CompanyDocumentSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()
    file_size = serializers.SerializerMethodField()

    class Meta:
        model  = CompanyDocument
        fields = ['id', 'file_url', 'original_filename', 'file_size', 'uploaded_at', 'updated_at']

    def get_file_url(self, obj):
        if obj.file and hasattr(obj.file, 'url') and obj.file.name:
            request = self.context.get('request')
            return request.build_absolute_uri(obj.file.url) if request else obj.file.url
        return None

    def get_file_size(self, obj):
        try:
            return obj.file.size if obj.file and obj.file.name else None
        except (ValueError, OSError):
            return None

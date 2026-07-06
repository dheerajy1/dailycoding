from rest_framework import serializers

from .models import Review


class ReviewReadSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Review
        fields = ['id', 'user_name', 'location', 'rating', 'comment', 'created_at']


class ReviewWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Review
        fields = ['rating', 'comment', 'location']

    def create(self, validated_data):
        request = self.context.get('request')
        user = request.user if request and request.user.is_authenticated else None
        user_name = user.username if user else 'Anonymous'
        return Review.objects.create(
            user=user,
            user_name=user_name,
            is_approved=False,
            **validated_data
        )


class ReviewAdminSerializer(serializers.ModelSerializer):
    """Full serializer for admin reads/writes (all fields)."""
    class Meta:
        model  = Review
        fields = '__all__'

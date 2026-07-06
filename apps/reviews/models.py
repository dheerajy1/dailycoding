from django.conf import settings
from django.db import models


class Review(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True, blank=True,
        related_name='reviews'
    )
    user_name   = models.CharField(max_length=100)
    location    = models.CharField(max_length=100, blank=True)
    rating      = models.IntegerField(default=5)
    comment     = models.TextField()
    is_approved = models.BooleanField(default=False)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'reviews_review'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.user_name} – {self.rating}★'

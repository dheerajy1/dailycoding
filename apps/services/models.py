from django.db import models


class Service(models.Model):
    title       = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    icon        = models.CharField(max_length=50, blank=True)
    icon_color  = models.CharField(max_length=20, default='#a855f7')
    bg_color    = models.CharField(max_length=60, default='rgba(168,85,247,.15)')
    order       = models.IntegerField(default=0)
    is_active   = models.BooleanField(default=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'services_service'
        ordering = ['order', 'id']

    def __str__(self):
        return self.title

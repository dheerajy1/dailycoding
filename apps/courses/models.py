from django.db import models


class Course(models.Model):
    TYPE_CHOICES = [('online', 'Online'), ('physical', 'Physical')]

    title       = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    type        = models.CharField(max_length=20, choices=TYPE_CHOICES, default='online')
    price       = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    duration    = models.CharField(max_length=100, blank=True)
    thumbnail   = models.ImageField(upload_to='courses/', blank=True, null=True)
    enroll_url  = models.URLField(max_length=2000, blank=True, null=True)
    is_active   = models.BooleanField(default=True)
    order       = models.IntegerField(default=0)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'courses_course'
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title

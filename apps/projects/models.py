from django.db import models


class Project(models.Model):
    title       = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack  = models.CharField(max_length=500, blank=True)
    github_url  = models.URLField(max_length=2000, blank=True, null=True)
    preview_url = models.URLField(max_length=2000, blank=True, null=True)
    thumbnail     = models.ImageField(upload_to='projects/', blank=True, null=True)
    thumbnail_url = models.URLField(max_length=2000, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order       = models.IntegerField(default=0)
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'projects_project'
        ordering = ['order', '-created_at']

    def __str__(self):
        return self.title

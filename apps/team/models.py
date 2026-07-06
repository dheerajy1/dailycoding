from django.db import models


class TeamMember(models.Model):
    name          = models.CharField(max_length=100)
    role          = models.CharField(max_length=200)
    skills        = models.JSONField(default=list)
    github_url    = models.URLField(max_length=2000, blank=True, null=True)
    portfolio_url = models.URLField(max_length=2000, blank=True, null=True)
    preview_url   = models.URLField(max_length=2000, blank=True, null=True)

    # Avatar: either an uploaded file OR an external URL. Whichever is set
    # is what the API returns as `avatar`.
    avatar        = models.ImageField(upload_to='team/avatars/', blank=True, null=True)
    avatar_url    = models.URLField(max_length=2000, blank=True, null=True)

    # Banner: same upload-or-URL pattern.
    banner_image     = models.ImageField(upload_to='team/banners/', blank=True, null=True)
    banner_image_url = models.URLField(max_length=2000, blank=True, null=True)
    banner_color  = models.TextField(blank=True, null=True)

    is_mentor     = models.BooleanField(default=False)
    order         = models.IntegerField(default=0)

    # ── Team Profile page fields (previously hardcoded on the frontend) ──
    bio                    = models.TextField(blank=True)
    location               = models.CharField(max_length=200, blank=True, default='Remote · Available Worldwide')
    experience_company     = models.CharField(max_length=150, blank=True, default='Fusion5')
    experience_period      = models.CharField(max_length=100, blank=True, default='Present')
    experience_description = models.TextField(blank=True)
    education_degree       = models.CharField(max_length=200, blank=True)
    education_school       = models.CharField(max_length=200, blank=True)
    education_period       = models.CharField(max_length=100, blank=True)
    followers_count        = models.PositiveIntegerField(default=0)
    following_count        = models.PositiveIntegerField(default=0)

    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'team_teammember'
        ordering = ['order', 'id']

    def __str__(self):
        return self.name

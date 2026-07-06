from django.db import models


class ContactInfo(models.Model):
    """
    Singleton — only one row ever exists (id=1).
    Enforced in views via get_or_create(pk=1).
    """
    address         = models.TextField(blank=True)
    website         = models.CharField(max_length=2000, blank=True)
    phone           = models.CharField(max_length=20, blank=True)
    email           = models.CharField(max_length=254, blank=True)   # ← NEW
    whatsapp_number = models.CharField(max_length=20, blank=True)
    maps_embed      = models.TextField(blank=True)
    facebook_url    = models.CharField(max_length=2000, blank=True)
    youtube_url     = models.CharField(max_length=2000, blank=True)
    tiktok_url      = models.CharField(max_length=2000, blank=True)
    snapchat_url    = models.CharField(max_length=2000, blank=True)
    updated_at      = models.DateTimeField(auto_now=True)

    class Meta:
        db_table     = 'contact_contactinfo'
        verbose_name = 'Contact Info'

    def __str__(self):
        return 'Site Contact Info'


class ContactSubmission(models.Model):
    """Stores contact form submissions from the public-facing form.

    Also doubles as the Pricing Plan enquiry record: when a visitor picks a
    plan from the Pricing Plans section, `plan` is set and the submission
    flows through the same admin review pipeline (status field below).
    """

    STATUS_CHOICES = (
        ('new',       'New'),
        ('reviewed',  'Reviewed'),
        ('confirmed', 'Confirmed'),
    )

    name             = models.CharField(max_length=200)
    email            = models.EmailField()
    phone            = models.CharField(max_length=20, blank=True)
    company_name     = models.CharField(max_length=200, blank=True)          # ← NEW
    description      = models.TextField()                                    # ← renamed from message
    budget           = models.CharField(max_length=100, blank=True)          # ← NEW
    project_timeline = models.CharField(max_length=100, blank=True)          # ← NEW
    team_member      = models.ForeignKey(
        'team.TeamMember', on_delete=models.SET_NULL,
        null=True, blank=True, related_name='contact_submissions',
    )                                                                        # ← NEW
    plan             = models.ForeignKey(
        'plans.PricingPlan', on_delete=models.SET_NULL,
        null=True, blank=True, related_name='enquiries',
    )                                                                        # ← NEW
    status           = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='new',
    )                                                                        # ← NEW: enquiry pipeline
    is_read          = models.BooleanField(default=False)                    # ← NEW
    created_at       = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'contact_submission'
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} <{self.email}>'

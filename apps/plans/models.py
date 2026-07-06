from django.db import models


class PricingPlan(models.Model):
    """
    Subscription-style pricing plan shown on the public Pricing Plans section.
    Two categories (frontend / backend), each with its own set of tiers,
    sourced from the Fusion5 subscription plan sheets.
    """

    CATEGORY_CHOICES = (
        ('frontend', 'Frontend Development'),
        ('backend', 'Backend Development'),
    )

    category          = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    name              = models.CharField(max_length=100)          # e.g. "Basic", "Standard"
    price             = models.DecimalField(max_digits=10, decimal_places=2)
    currency          = models.CharField(max_length=10, default='INR')
    billing_period    = models.CharField(max_length=30, default='month')  # e.g. "month"
    best_for          = models.CharField(max_length=255, blank=True)
    features          = models.JSONField(default=list, blank=True)   # list[str] — "Services Included"
    suitable_projects = models.JSONField(default=list, blank=True)   # list[str]
    task_hours        = models.CharField(max_length=100, blank=True) # e.g. "Up to 20 task hours/month"
    is_highlighted     = models.BooleanField(default=False)          # "Most Popular" ribbon
    order             = models.IntegerField(default=0)
    is_active         = models.BooleanField(default=True)
    created_at        = models.DateTimeField(auto_now_add=True)
    updated_at        = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'plans_pricingplan'
        ordering = ['category', 'order', 'id']

    def __str__(self):
        return f'{self.get_category_display()} — {self.name}'

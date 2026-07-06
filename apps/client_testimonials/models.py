from django.db import models


class ClientTestimonial(models.Model):
    """
    Admin-curated client testimonial shown in the Home page's
    'Client Testimonials' section. Unlike the `reviews` app (public,
    self-submitted star ratings) these are entered only by the admin —
    no public submission form.
    """
    client_name  = models.CharField(max_length=150)
    client_role  = models.CharField(max_length=150, blank=True)   # e.g. "CEO"
    company_name = models.CharField(max_length=150, blank=True)
    location     = models.CharField(max_length=150, blank=True)
    quote        = models.TextField()
    rating       = models.PositiveSmallIntegerField(default=5)

    # Photo: upload OR URL, same pattern as Team avatar / Project thumbnail.
    photo        = models.ImageField(upload_to='client_testimonials/', blank=True, null=True)
    photo_url    = models.URLField(max_length=2000, blank=True, null=True)

    order        = models.IntegerField(default=0)
    is_active    = models.BooleanField(default=True)
    created_at   = models.DateTimeField(auto_now_add=True)
    updated_at   = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'client_testimonials_clienttestimonial'
        ordering = ['order', '-created_at']

    def __str__(self):
        return f'{self.client_name} — {self.company_name or "—"}'

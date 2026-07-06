from django.core.exceptions import ValidationError
from django.core.validators import (
    FileExtensionValidator,
    MaxValueValidator,
    MinValueValidator,
)
from django.db import models

# Max size for a directly-uploaded MP4 testimonial (local disk storage).
MAX_VIDEO_FILE_SIZE_BYTES = 100 * 1024 * 1024  # 100 MB


def validate_video_file_size(file):
    if file and file.size > MAX_VIDEO_FILE_SIZE_BYTES:
        raise ValidationError(
            f'Video file too large ( {file.size / (1024 * 1024):.1f} MB ). '
            f'Max allowed size is {MAX_VIDEO_FILE_SIZE_BYTES / (1024 * 1024):.0f} MB.'
        )


class VideoTestimonial(models.Model):
    """
    A video testimonial given by a client/manager about a specific
    team member (employee), shown on that employee's portfolio page.
    """

    VIDEO_SOURCE_CHOICES = [
        ('youtube', 'YouTube'),
        ('mp4', 'MP4 Upload'),
    ]

    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    # ── Ownership ────────────────────────────────────────────
    employee = models.ForeignKey(
        'team.TeamMember',
        on_delete=models.CASCADE,
        related_name='testimonials',
    )

    # ── Testimonial info ─────────────────────────────────────
    title             = models.CharField(max_length=200)
    client_name       = models.CharField(max_length=150)
    designation       = models.CharField(max_length=150, blank=True, default='')
    company_name      = models.CharField(max_length=150)
    project_name      = models.CharField(max_length=200, blank=True, default='')
    project_duration  = models.CharField(max_length=100, blank=True, default='')

    # ── Video ────────────────────────────────────────────────
    video_source = models.CharField(max_length=10, choices=VIDEO_SOURCE_CHOICES)
    video_url    = models.URLField(max_length=2000, blank=True, null=True)
    video_file   = models.FileField(
        upload_to='testimonials/videos/',
        blank=True, null=True,
        validators=[
            FileExtensionValidator(allowed_extensions=['mp4']),
            validate_video_file_size,
        ],
    )
    video_thumbnail = models.ImageField(
        upload_to='testimonials/thumbnails/', blank=True, null=True
    )

    # ── Optional media ───────────────────────────────────────
    profile_photo = models.ImageField(
        upload_to='testimonials/profiles/', blank=True, null=True
    )
    company_logo = models.ImageField(
        upload_to='testimonials/logos/', blank=True, null=True
    )

    # ── Rating / feedback ────────────────────────────────────
    rating = models.PositiveSmallIntegerField(
        default=5,
        validators=[MinValueValidator(1), MaxValueValidator(5)],
    )
    written_feedback = models.TextField(blank=True, default='')

    # ── Publishing / moderation ──────────────────────────────
    status       = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')
    is_approved  = models.BooleanField(default=False)
    is_featured  = models.BooleanField(default=False)

    # ── Reported content (admin moderation) ──────────────────
    is_reported     = models.BooleanField(default=False)
    report_reason   = models.TextField(blank=True, default='')
    reported_count  = models.PositiveIntegerField(default=0)

    # ── Storage monitoring (admin) ───────────────────────────
    file_size = models.PositiveBigIntegerField(blank=True, null=True)

    # ── Display ──────────────────────────────────────────────
    order = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'testimonials_videotestimonial'
        ordering = ['order', '-created_at']

    def __str__(self):
        return f'{self.client_name} → {self.employee.name} ({self.title})'

    def clean(self):
        errors = {}
        if self.video_source == 'youtube':
            if not self.video_url:
                errors['video_url'] = 'A YouTube URL is required when video source is YouTube.'
            elif not any(
                domain in self.video_url
                for domain in ('youtube.com', 'youtu.be')
            ):
                errors['video_url'] = 'This does not look like a valid YouTube URL.'
        elif self.video_source == 'mp4':
            if not self.video_file:
                errors['video_file'] = 'An MP4 file is required when video source is MP4 Upload.'
        if errors:
            raise ValidationError(errors)

    def save(self, *args, **kwargs):
        # Keep file_size in sync for storage-usage monitoring (local disk).
        if self.video_file and self.video_source == 'mp4':
            try:
                self.file_size = self.video_file.size
            except (ValueError, OSError):
                pass
        elif self.video_source == 'youtube':
            self.file_size = None
        super().save(*args, **kwargs)

    @property
    def is_live(self):
        """Visible to the public: published + approved."""
        return self.status == 'published' and self.is_approved

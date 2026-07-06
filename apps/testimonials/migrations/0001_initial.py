import django.core.validators
import apps.testimonials.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='VideoTestimonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('client_name', models.CharField(max_length=150)),
                ('designation', models.CharField(blank=True, default='', max_length=150)),
                ('company_name', models.CharField(max_length=150)),
                ('project_name', models.CharField(blank=True, default='', max_length=200)),
                ('project_duration', models.CharField(blank=True, default='', max_length=100)),
                ('video_source', models.CharField(choices=[('youtube', 'YouTube'), ('mp4', 'MP4 Upload')], max_length=10)),
                ('video_url', models.URLField(blank=True, max_length=500, null=True)),
                ('video_file', models.FileField(
                    blank=True, null=True, upload_to='testimonials/videos/',
                    validators=[
                        django.core.validators.FileExtensionValidator(allowed_extensions=['mp4']),
                        apps.testimonials.models.validate_video_file_size,
                    ],
                )),
                ('video_thumbnail', models.ImageField(blank=True, null=True, upload_to='testimonials/thumbnails/')),
                ('profile_photo', models.ImageField(blank=True, null=True, upload_to='testimonials/profiles/')),
                ('company_logo', models.ImageField(blank=True, null=True, upload_to='testimonials/logos/')),
                ('rating', models.PositiveSmallIntegerField(
                    default=5,
                    validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)],
                )),
                ('written_feedback', models.TextField(blank=True, default='')),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=10)),
                ('is_approved', models.BooleanField(default=False)),
                ('is_featured', models.BooleanField(default=False)),
                ('is_reported', models.BooleanField(default=False)),
                ('report_reason', models.TextField(blank=True, default='')),
                ('reported_count', models.PositiveIntegerField(default=0)),
                ('file_size', models.PositiveBigIntegerField(blank=True, null=True)),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='testimonials', to='team.teammember')),
            ],
            options={
                'db_table': 'testimonials_videotestimonial',
                'ordering': ['order', '-created_at'],
            },
        ),
    ]

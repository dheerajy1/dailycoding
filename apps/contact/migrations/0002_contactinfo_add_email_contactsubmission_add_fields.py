from django.db import migrations, models


class Migration(migrations.Migration):
    """
    Changes in this migration:
    1. ContactInfo   → add email field
    2. ContactSubmission → rename message → description
    3. ContactSubmission → add budget field
    4. ContactSubmission → add is_read field
    """

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        # ── ContactInfo: add email ──────────────────────────
        migrations.AddField(
            model_name='contactinfo',
            name='email',
            field=models.CharField(blank=True, max_length=254),
        ),

        # ── ContactSubmission: rename message → description ─
        migrations.RenameField(
            model_name='contactsubmission',
            old_name='message',
            new_name='description',
        ),

        # ── ContactSubmission: add budget ───────────────────
        migrations.AddField(
            model_name='contactsubmission',
            name='budget',
            field=models.CharField(blank=True, max_length=100),
        ),

        # ── ContactSubmission: add is_read ──────────────────
        migrations.AddField(
            model_name='contactsubmission',
            name='is_read',
            field=models.BooleanField(default=False),
        ),
    ]

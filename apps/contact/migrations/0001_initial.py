from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='ContactInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField(blank=True)),
                ('website', models.CharField(blank=True, max_length=500)),
                ('phone', models.CharField(blank=True, max_length=20)),
                ('whatsapp_number', models.CharField(blank=True, max_length=20)),
                ('maps_embed', models.TextField(blank=True)),
                ('facebook_url', models.CharField(blank=True, max_length=500)),
                ('youtube_url', models.CharField(blank=True, max_length=500)),
                ('tiktok_url', models.CharField(blank=True, max_length=500)),
                ('snapchat_url', models.CharField(blank=True, max_length=500)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'Contact Info',
                'db_table': 'contact_contactinfo',
            },
        ),
        migrations.CreateModel(
            name='ContactSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(blank=True, max_length=20)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'contact_submission',
                'ordering': ['-created_at'],
            },
        ),
    ]

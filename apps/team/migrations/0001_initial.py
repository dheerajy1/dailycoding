from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('role', models.CharField(max_length=200)),
                ('skills', models.JSONField(default=list)),
                ('github_url', models.URLField(blank=True, max_length=500, null=True)),
                ('portfolio_url', models.URLField(blank=True, max_length=500, null=True)),
                ('preview_url', models.URLField(blank=True, max_length=500, null=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='team/avatars/')),
                ('banner_image', models.ImageField(blank=True, null=True, upload_to='team/banners/')),
                ('banner_color', models.TextField(blank=True, null=True)),
                ('is_mentor', models.BooleanField(default=False)),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'team_teammember',
                'ordering': ['order', 'id'],
            },
        ),
    ]

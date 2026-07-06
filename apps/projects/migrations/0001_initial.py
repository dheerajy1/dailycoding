from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('tech_stack', models.CharField(blank=True, max_length=500)),
                ('github_url', models.URLField(blank=True, max_length=500, null=True)),
                ('preview_url', models.URLField(blank=True, max_length=500, null=True)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='projects/')),
                ('is_featured', models.BooleanField(default=False)),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'projects_project',
                'ordering': ['order', '-created_at'],
            },
        ),
    ]

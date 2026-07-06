from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('type', models.CharField(choices=[('online', 'Online'), ('physical', 'Physical')], default='online', max_length=20)),
                ('price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('duration', models.CharField(blank=True, max_length=100)),
                ('thumbnail', models.ImageField(blank=True, null=True, upload_to='courses/')),
                ('enroll_url', models.URLField(blank=True, max_length=500, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('order', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'courses_course',
                'ordering': ['order', '-created_at'],
            },
        ),
    ]

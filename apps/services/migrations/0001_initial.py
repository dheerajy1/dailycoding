from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True)),
                ('icon', models.CharField(blank=True, max_length=50)),
                ('icon_color', models.CharField(default='#a855f7', max_length=20)),
                ('bg_color', models.CharField(default='rgba(168,85,247,.15)', max_length=60)),
                ('order', models.IntegerField(default=0)),
                ('is_active', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'services_service',
                'ordering': ['order', 'id'],
            },
        ),
    ]

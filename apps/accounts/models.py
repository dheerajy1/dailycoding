from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """
    Custom user model. Extend here later (avatar, bio, etc.).
    email is already on AbstractUser but make it unique.
    """
    email = models.EmailField(unique=True)

    class Meta:
        db_table = 'accounts_user'
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username

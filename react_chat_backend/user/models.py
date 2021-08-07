from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """ Custom User Model"""
    first_name = None
    last_name = None
    avatar = models.ImageField(upload_to='user/avatar/', blank=True, null=True)
    status = models.CharField(max_length=1024, blank=True, null=True)

    def __str__(self):
        return self.username

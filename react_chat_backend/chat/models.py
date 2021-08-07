import json

import requests
from django.db import models
from django.conf import settings
from django.db.models import Q
from django.core import serializers
from user.models import User
from user.serializers import Base64ImageField, GetUserPublicSerializer


class ThreadManager(models.Manager):
    def by_user(self, user):
        qlookup = Q(first_user=user) | Q(second_user=user)
        qlookup2 = Q(first_user=user) & Q(second_user=user)
        qs = self.get_queryset().filter(qlookup).exclude(qlookup2).distinct()
        return qs

    def get_rooms(self, user):
        username = user.username
        print('username', username)
        qlookup = Q(first_user__username=username) | Q(second_user__username=username)
        rooms = self.get_queryset().filter(qlookup).distinct()
        users_data = {"users": []}

        for room in rooms:

            if room.first_user.username == username:
                user = GetUserPublicSerializer(room.second_user).data
                if user["avatar"] is not None:
                    user["avatar"] = settings.DOMAIN_NAME + user["avatar"]
                users_data["users"].append(user)
            else:
                user = GetUserPublicSerializer(room.first_user).data
                if user["avatar"] is not None:
                    user["avatar"] = settings.DOMAIN_NAME + user["avatar"]
                users_data["users"].append(user)

        return json.dumps(users_data)

    def get_room(self, username, other_username):

        if username == other_username:
            return None
        qlookup1 = Q(first_user__username=username) & Q(second_user__username=other_username)
        qlookup2 = Q(first_user__username=other_username) & Q(second_user__username=username)
        qs = self.get_queryset().filter(qlookup1 | qlookup2).distinct()

        if qs.count() == 1:

            return qs.first(), False
        elif qs.count() > 1:

            return qs.order_by('timestamp').first(), False
        else:
            return None

    def get_or_new(self, user, other_username):

        username = user.username

        if username == other_username:
            return None
        qlookup1 = Q(first_user__username=username) & Q(second_user__username=other_username)
        qlookup2 = Q(first_user__username=other_username) & Q(second_user__username=username)
        qs = self.get_queryset().filter(qlookup1 | qlookup2).distinct()

        if qs.count() == 1:

            return qs.first(), False
        elif qs.count() > 1:

            return qs.order_by('timestamp').first(), False
        else:

            Klass = user.__class__
            user2 = Klass.objects.get(username=other_username)

            if user != user2:
                obj = self.model(
                    first_user=user,
                    second_user=user2
                )

                obj.save()

                return obj, True
            return None, False


class Room(models.Model):
    first_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='first_user')
    second_user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='second_user')
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    objects = ThreadManager()

    @property
    def room_group_name(self):
        return f'chat_{self.id}'


class Message(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='author_message', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    room = models.ForeignKey(Room, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.author.__str__()

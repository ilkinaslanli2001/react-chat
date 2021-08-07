import datetime

from rest_framework import serializers

from .models import Message,Room
from rest_framework.serializers import ModelSerializer
from user.serializers import GetUserPublicSerializer
class MessageSerializer(ModelSerializer):
    author = GetUserPublicSerializer()
    timestamp = serializers.DateTimeField(format="%H:%M %d-%m-%Y")
    class Meta:
        model = Message

        fields ='__all__'

class RoomSerializer(ModelSerializer):
    class Meta:
        model =Room

        fields =['id']
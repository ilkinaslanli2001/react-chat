from django.core import serializers

from .models import Message, Room
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .serializers import MessageSerializer

class MessageView(ModelViewSet):
    serializer_class = MessageSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        print(self.kwargs['username'])
        print(self.request.query_params['other'])
        room = Room.objects.get_room(self.kwargs['username'], self.request.query_params['other'])
        if room is not None:
            print(room[0].id)
            return Message.objects.filter(room=room[0].id)

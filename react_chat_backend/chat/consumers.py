import json
from datetime import datetime

from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async
from django.core import serializers

from react_chat_backend import settings
from .models import Room, Message


class ChatConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        other_user = self.scope['url_route']['kwargs']['username']
        me = self.scope['user']
        room_obj = await self.get_thread(me, other_user)
        self.room_obj = room_obj[0]
        chat_room = f"room_{self.room_obj.id}"
        self.chat_room = chat_room
        await  self.channel_layer.group_add(
            chat_room,
            self.channel_name
        )

        await self.send({
            "type": "websocket.accept",
        })

    async def send_rooms(self, event):
        print(event, 'event')
        await self.send({
            "type": "websocket.send",
            "text": event['text']
        })

    async def websocket_disconnect(self, event):
        print("disconnect", event)

        await self.channel_layer.group_discard(
            self.chat_room,
            self.channel_name
        )

    async def websocket_receive(self, event):

        text = event.get('text', None)
        if text is not None:
            user = self.scope['user']
            username = 'default'
            if user.is_authenticated:
                username = user.username
                print(username, 'username')
            await self.create_message(text)

            print('hello')
            avatar = None
            try:
                avatar = settings.DOMAIN_NAME + user.avatar.url if user.avatar is not None else None
            except ValueError:
                avatar = None
            now = datetime.now()
            myResponse = {
                "content": text,
                'author': {
                    'username': username,
                    'avatar': avatar
                },
                "timestamp": now.strftime("%H:%M %d-%m-%Y")
            }

            await self.channel_layer.group_send(
                self.chat_room,
                {
                    "type": "chat_message",
                    "text": json.dumps(myResponse)
                }
            )
            print('Success')

    async def chat_message(self, event):
        print(event)
        await self.send({
            "type": "websocket.send",
            "text": event['text']
        })

    @database_sync_to_async
    def get_thread(self, user, other_username):
        return Room.objects.get_or_new(user, other_username)

    @database_sync_to_async
    def create_message(self, message):
        return Message.objects.create(room=self.room_obj, author=self.scope['user'], content=message)

    @database_sync_to_async
    def get_user_rooms(self, user):
        return Room.objects.get_rooms(user)


class RoomsConsumer(AsyncConsumer):

    async def websocket_connect(self, event):
        me = self.scope['user']

        users = await self.get_user_rooms(me)

        await self.send({
            "type": "websocket.accept",

        })
        await self.send({
            "type": "websocket.send",
            "text": str(users)
        })

    async def websocket_disconnect(self, event):
        print("disconnect", event)

    @database_sync_to_async
    def get_user_rooms(self, user):
        return Room.objects.get_rooms(user)

from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('ws/chat/<username>/', consumers.ChatConsumer.as_asgi()),
    path('ws/chat/', consumers.RoomsConsumer.as_asgi()),
]

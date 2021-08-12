"""
ASGI config for react_chat_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""

import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.contrib.auth.models import AnonymousUser
from channels.routing import get_default_application
import chat.routing
from channels.db import database_sync_to_async
import django
from user.models import User
import os


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "react_chat_backend.settings")
django.setup()


@database_sync_to_async
def get_user(user_id):
    print(user_id)
    try:
        return User.objects.get(id=user_id)
    except User.DoesNotExist:
        return AnonymousUser()



class QueryAuthMiddleware:
    """
    Custom middleware (insecure) that takes user IDs from the query string.
    """

    def __init__(self, app):
        self.app = app

    async def __call__(self, scope, receive, send):
        scope['user'] = await get_user(int(scope["query_string"]))
        return await self.app(scope, receive, send)


application = ProtocolTypeRouter({
    "http": get_default_application(),
    "websocket": QueryAuthMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    ),
})

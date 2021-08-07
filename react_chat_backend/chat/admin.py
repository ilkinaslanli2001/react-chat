from django.contrib import admin

from .models import Room, Message


class ChatMessage(admin.TabularInline):
    model = Message


class RoomAdmin(admin.ModelAdmin):
    inlines = [ChatMessage]

    class Meta:
        model = Room


admin.site.register(Room, RoomAdmin)

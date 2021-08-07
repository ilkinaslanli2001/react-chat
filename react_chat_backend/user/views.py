import django.contrib.auth.password_validation as validators
import generics as generics

from .models import User
from .serializers import GetUserSerializer, GetUserPublicSerializer
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import RetrieveAPIView, ListAPIView
from rest_framework import filters


class UserPublicView(RetrieveAPIView):
    serializer_class = GetUserPublicSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()


class UserView(ModelViewSet):
    serializer_class = GetUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return User.objects.filter(id=self.request.user.id)


class UserFindView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = GetUserPublicSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']


from django.urls import path, include
from .views import UserView,UserPublicView,UserFindView
urlpatterns = [

    path('profile/<int:pk>/',  UserView.as_view({'get':'retrieve','put':'update'})),
    path('<int:pk>/',  UserPublicView.as_view()),
    path('', UserFindView.as_view())
]

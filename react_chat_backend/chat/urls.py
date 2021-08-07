from django.urls import path, include
from .views import MessageView

urlpatterns = [
    path('<username>/', MessageView.as_view({'get': 'list'})),

]

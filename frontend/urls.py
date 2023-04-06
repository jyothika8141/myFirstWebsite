from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('select', index),
    path('display', index),
    # path('loginprofile', index),
    path('loginprofile/<str:id>', index),
]
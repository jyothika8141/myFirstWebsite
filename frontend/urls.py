from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('select', index),
    path('display', index),
]
from django.urls import path
from .views import UserView, CreateUserView, GetUser

urlpatterns = [
    path('/view', UserView.as_view()),
    path('/create', CreateUserView.as_view()),
    path('/get', GetUser.as_view())
]
from django.urls import path
from .views import UserView, CreateUserView, GetAllUser

urlpatterns = [
    path('/view', UserView.as_view()),
    path('/create', CreateUserView.as_view()),
    path('/get', GetAllUser.as_view())
]
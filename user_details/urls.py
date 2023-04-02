from django.urls import path
from .views import UserView, CreateUserView

urlpatterns = [
    path('/view', UserView.as_view()),
    path('/create', CreateUserView.as_view()),
]
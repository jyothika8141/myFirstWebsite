"""
this page converts the data from the database into json format
""""""
this page converts the data from the database into json format
"""

from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name_place', 'district', 'state',  'name_person', 'email', 'phone', 'price')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name_place', 'district', 'state',  'name_person', 'email', 'phone', 'price')
        

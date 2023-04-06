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
        fields = ('id', 'token', 'available', 'name_person', 'email', 'phone', 'name_place', 'place_speciality', 'address', 'district', 'state', 'pincode', 'created_at')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name_person', 'email', 'phone', 'name_place', 'place_speciality', 'address', 'district', 'state', 'pincode', 'available')
        

"""
this page converts the data from the database into json format
""""""
this page converts the data from the database into json format
"""

from rest_framework import serializers
from .models import UserDet

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDet
        fields = ('id', 'name_place', 'district', 'state',  'name_person', 'email', 'phone', 'price', 'image')

class CreateUserSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True)
    class Meta:
        model = UserDet
        fields = ('name_place', 'district', 'state',  'name_person', 'email', 'phone', 'price', 'image')
        

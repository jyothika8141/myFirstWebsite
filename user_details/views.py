"""
this page uses the json format data and displays it in ListCreateapiView
"""
from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CreateUserView(APIView):
    serializer_class = CreateUserSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            token = self.request.session.session_key
            available = serializer.data.get('available')
            queryset = User.objects.filter(token=token)
            if queryset.exists():
                user = queryset[0]
                user.available = available
                user.save(update_fields=['available'])
            else:
                name_person = serializer.data.person_name
                email = serializer.data.email
                phone = serializer.data.phone
                name_place = serializer.data.name_place
                place_specialitity = serializer.data.place_specialitity
                accommodation = serializer.data.accommodation
                address = serializer.data.address
                district = serializer.data.district
                state = serializer.data.state
                pincode = serializer.data.pincode
                user = User(token=token, available=available, name_person=name_person, email=email, phone=phone, name_place=name_place, place_specialitity=place_specialitity, accommodation=accommodation, address=address, district=district, state=state, pincode=pincode)
                user.save()
            return Response(UserSerializer(user).data, status=201)
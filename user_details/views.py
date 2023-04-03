"""
this page uses the json format data and displays it in ListCreateapiView
"""
from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer, CreateUserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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
        print(serializer)
        
        if serializer.is_valid():
            print("yo")
            token = serializer.data.get('token')
            name_person = serializer.data.get('name_person')
            available = serializer.data.get('available')
            email = serializer.data.get('email')
            phone = serializer.data.get('phone')
            name_place = serializer.data.get('name_place')
            place_speciality = serializer.data.get('place_speciality')
            accommodation = serializer.data.get('accommodation')
            address = serializer.data.get('address')
            district = serializer.data.get('district')
            state = serializer.data.get('state')
            pincode = serializer.data.get('pincode')
            
            token = self.request.session.session_key
          
            # queryset = User.objects.filter(token=token)
            # if queryset.exists():
            #     user = queryset[0]
            #     user.available = available
            #     user.save(update_fields=['available'])
            #     return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            # else:
            user = User(token=token, available=available, name_person=name_person, email=email, phone=phone, name_place=name_place, place_speciality=place_speciality, accommodation=accommodation, address=address, district=district, state=state, pincode=pincode)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
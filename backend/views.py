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
from django.core.serializers import serialize

# Create your views here.
class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GetAllUser(APIView):
    serializer_class = UserSerializer
    def get(self, request, format=None):
        output = []
        queryset = User.objects.all()
        # print(queryset)
        for query in queryset:
            output.append({'name_place': query.name_place, 'district': query.district, 'state': query.state, 'name_person': query.name_person, 'email': query.email, 'phone': query.phone, 'price': query.price})

        print(output)

        if output:
            return Response(output, status=status.HTTP_200_OK)
        else:
            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


# class GetUser(APIView):
#     serializer_class = UserSerializer

#     def get(self, request, format=None):
#             user_data= User.objects.all()
#             if user_data:
#                 return Response(user_data, status=status.HTTP_200_OK)
#             else:
#                 return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
       
        if serializer.is_valid():
            available = serializer.data.get('available')
            name_place = serializer.data.get('name_place')
            district = serializer.data.get('district')
            state = serializer.data.get('state')
            # place_speciality = serializer.data.get('place_speciality')

            name_person = serializer.data.get('name_person')
            email = serializer.data.get('email')
            phone = serializer.data.get('phone') 
            price = serializer.data.get('price')

            # queryset = User.objects.filter(id=id)
            # if queryset.exists():
            #     user = queryset[0]
            #     user.available = available
            #     user.save(update_fields=['available'])
            #     return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
            # else:
            user = User(available=available, name_place=name_place, district=district, state=state,name_person=name_person, email=email, phone=phone, price=price)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
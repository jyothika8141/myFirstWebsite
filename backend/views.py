"""
this page uses the json format data and displays it in ListCreateapiView
"""
from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import UserSerializer, CreateUserSerializer
from .models import UserDet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.serializers import serialize
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
class UserView(generics.ListCreateAPIView):
    queryset = UserDet.objects.all()
    serializer_class = UserSerializer

class GetAllUser(APIView):
    serializer_class = UserSerializer
    def get(self, request, format=None):
        output = []
        queryset = UserDet.objects.all()
        print(queryset)
        for query in queryset:
            output.append({'name_place': query.name_place, 'district': query.district, 'state': query.state, 'name_person': query.name_person, 'email': query.email, 'phone': query.phone, 'price': query.price, 'image': query.image.url})

        print(output)

        if output:
            return Response(output, status=status.HTTP_200_OK)
        else:
            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


class CreateUserView(APIView):
    serializer_class = CreateUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    @csrf_exempt
    def post(self, request, format=None):
        print(request.data)
       
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            image_file = request.FILES['image']
            if image_file:
                filename = default_storage.save(image_file,ContentFile(image_file.read()))
                image_url = default_storage.url(filename)
                serializer.validated_data['image'] = image_url
            name_place = serializer.data.get('name_place')
            district = serializer.data.get('district')
            state = serializer.data.get('state')
            price = serializer.data.get('price')
            # image = serializer.data.get('image')
        
            name_person = serializer.data.get('name_person')
            email = serializer.data.get('email')
            phone = serializer.data.get('phone') 

            user = UserDet(name_place=name_place, district=district, state=state, price=price, name_person=name_person, email=email, phone=phone)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
    







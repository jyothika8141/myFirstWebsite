from django.db import models

def generate_unique_token():
    import random
    import string
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(8))

# Create your models here.
class User(models.Model):
    token = models.CharField(max_length=8, default=generate_unique_token)
    available = models.BooleanField(null=False, default=False)
    name_person = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    name_place = models.CharField(max_length=50)
    place_specialitity = models.CharField(max_length=500)
    accommodation = models.CharField(max_length=100)
    address = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
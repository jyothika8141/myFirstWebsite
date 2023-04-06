from django.db import models

def generate_unique_token():
    import random
    import string
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, 7))
        if User.objects.filter(code=code).count() == 0:
            break
    return code

# Create your models here.
class User(models.Model):
    token = models.CharField(max_length=50)
    available = models.BooleanField(null=False, default=False)
    name_person = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    name_place = models.CharField(max_length=50)
    place_speciality = models.CharField(max_length=500)
    address = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name_person
    
from django.db import models

# Create your models here.
class User(models.Model):
    # token = models.CharField(max_length=50)
    available = models.BooleanField(null=True, default=True)
    
    name_place = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    price = models.CharField(max_length=15)

    name_person = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    

    def __str__(self):
        return self.name_person
    
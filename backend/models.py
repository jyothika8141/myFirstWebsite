from django.db import models
from django.utils.translation import gettext_lazy as _


def upload_to(instance,filename):
    return 'posts/{filename}'.format(filename=filename)

class UserDet(models.Model):
    # token = models.CharField(max_length=50)
    available = models.BooleanField(null=True, default=True)

    name_person = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    
    name_place = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    price = models.CharField(max_length=15)
    image = models.ImageField(_("Image"),upload_to=upload_to,default='posts/default.jpg')


    def __str__(self):
        return self.name_person 
# Generated by Django 4.1.7 on 2023-04-11 11:55

import backend.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_alter_userdet_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdet',
            name='image',
            field=models.ImageField(default='posts/default.jpg', upload_to=backend.models.upload_to, verbose_name='Image'),
        ),
    ]

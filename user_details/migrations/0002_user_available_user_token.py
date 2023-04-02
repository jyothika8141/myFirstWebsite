# Generated by Django 4.1.7 on 2023-04-01 18:26

from django.db import migrations, models
import user_details.models


class Migration(migrations.Migration):

    dependencies = [
        ('user_details', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='available',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='user',
            name='token',
            field=models.CharField(default=user_details.models.generate_unique_token, max_length=8, unique=True),
        ),
    ]

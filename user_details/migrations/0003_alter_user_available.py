# Generated by Django 4.1.7 on 2023-04-02 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_details', '0002_user_available_user_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='available',
            field=models.BooleanField(default=False),
        ),
    ]

# Generated by Django 3.1 on 2020-11-16 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0005_user_user_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='user_description',
            field=models.TextField(null=True),
        ),
    ]

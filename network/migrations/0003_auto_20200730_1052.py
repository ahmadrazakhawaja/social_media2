# Generated by Django 3.0.8 on 2020-07-30 10:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0002_auto_20200730_1050'),
    ]

    operations = [
        migrations.RenameField(
            model_name='likes',
            old_name='like',
            new_name='post',
        ),
    ]
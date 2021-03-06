# Generated by Django 3.0.8 on 2020-07-30 10:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('network', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='follower',
            field=models.IntegerField(default=0),
        ),
        migrations.CreateModel(
            name='posts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('likes', models.IntegerField(default=0)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('User', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='User', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='likes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('User', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='User1', to=settings.AUTH_USER_MODEL)),
                ('like', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post1', to='network.posts')),
            ],
        ),
        migrations.CreateModel(
            name='followers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('follower_id', models.IntegerField()),
                ('User', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='User2', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

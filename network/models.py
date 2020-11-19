from django.contrib.auth.models import AbstractUser
from django.core.files.storage import FileSystemStorage
from django.db import models


class User(AbstractUser):
    follower = models.IntegerField(default=0)
    user_image = models.ImageField(null=True,blank=True,upload_to="user_profile_images/")
    user_description = models.TextField(null=True)

class posts(models.Model):
    User = models.ForeignKey(User,on_delete=models.CASCADE,related_name="User")
    content = models.TextField()
    likes = models.IntegerField(default=0)
    post_image = models.ImageField(null=True,blank=True,upload_to="images/")
    timestamp = models.DateTimeField(auto_now_add=True)


class likes(models.Model):
    User = models.ForeignKey(User,on_delete=models.CASCADE,related_name="User1")
    post = models.ForeignKey(posts,on_delete=models.CASCADE,related_name="post1")

class followers(models.Model):
    User = models.ForeignKey(User,on_delete=models.CASCADE,related_name="User2")
    follower_id = models.IntegerField() 



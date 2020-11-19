from django.contrib import admin
from .models import User,posts,likes,followers

# Register your models here.

admin.site.register(User)
admin.site.register(posts)
admin.site.register(likes)
admin.site.register(followers)
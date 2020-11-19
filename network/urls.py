
from django.urls import path

from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("profile/<str:id>", views.profile, name="profile"),
    path("follow", views.follow, name="follow"),
    path("following/posts", views.following, name="following"),
    path("edit", views.edit, name="edit"),
    path("like", views.likesx, name="likes"),
    path("profile/<str:id>/followers", views.follower, name="followers"),
    path("profile/<str:id>/following", views.following2, name="following2")
]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

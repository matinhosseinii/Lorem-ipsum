from django.urls import path
from . import views

app_name = "MainApp"

urlpatterns = [
    path('', views.Home, name="Home"),
    path('entry/', views.Home, name="Login"),
    path('login/', views.Home, name="SignUp"),
    path('user/', views.Home, name="Dashboard"),
    path('contact/', views.Home, name="ContactUs"),
    path('subscribe/', views.Home, name="Subscription"),
]
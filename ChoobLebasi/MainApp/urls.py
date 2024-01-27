from django.urls import path
from . import views

app_name = "MainApp"

urlpatterns = [
    path('', views.Home, name="Home"),
    path('entry/', views.Home, name="Login"),
    path('login/', views.Home, name="SignUp"),
    path('contactus/', views.Home, name="ContactUs"),
    path('subscribe/', views.Home, name="Subscription"),
]
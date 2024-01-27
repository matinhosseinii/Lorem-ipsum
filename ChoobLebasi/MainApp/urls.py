from django.urls import path
from . import views

app_name = "MainApp"

urlpatterns = [
    path('', views.Home, name="Home"),
    path('entry/', views.Home, name="Login"),
    path('Login/', views.Home, name="SignUp"),
    path('Contact/', views.Home, name="ContactUs"),
    path('Subscribe/', views.Home, name="Subscription"),
]
from django.contrib.auth.models import AbstractUser
from django.db import models
import os

# Create your models here.

class User(AbstractUser):
    Subscription = (('regular', 'regular'),
                    ('economy', 'economy'),
                    ('special', 'special'),
                    ('golden' , 'golden'))
    
    phonenumber = models.IntegerField(primary_key=True)
    status = models.CharField(max_length=20, choices=Subscription, default='regular')
    
    def __str__(self):
        return self.username
    
def GenerateName(FilePath):
    ExName = os.path.basename(FilePath)
    Name, Ext = os.path.splitext(ExName)
    return Name, Ext

def ChangeName(WholeProduct, FileName):
    from random import randint
    NewName = randint(1,1001)
    Name, Ext = GenerateName(FileName)
    return f"Products/{NewName}-{WholeProduct}{Ext}"
class Manager(models.Manager):
    def GetByTitle(self,PrTitle):
        FoundPr = self.get_queryset().filter(Title=PrTitle)
        if FoundPr.count() == 1 : return FoundPr
        return None

class Product(models.Model):
    objects = Manager()
    Title = models.CharField(max_length=100)
    Description = models.TextField()
    City = models.CharField(max_length=100)
    Price = models.DecimalField(max_digits=15,decimal_places=0, null=False)
    Image = models.ImageField(upload_to=ChangeName, null=False)
    Matadata = models.CharField(max_length=2000)


class Subscription(models.Model):
    Type = models.CharField(max_length=100)
    Price = models.DecimalField(max_digits=15,decimal_places=0, null=False)
    Benefits = models.CharField(max_length=255)

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import json
from .models import Product

def Home(request, *args, **kwargs):
    #AllProduct = Product.objects.get(pk=1)
    #test = {'One':{'Title':AllProduct.Title, 'Price':str(AllProduct.Price)}}
    return render(request, "index.html",  {'DasteBandi': json.dumps('کاتالوگ'), 'header':'چوب‌ لباسی | مرکز اجاره پوشاک'})
# Create your views here.

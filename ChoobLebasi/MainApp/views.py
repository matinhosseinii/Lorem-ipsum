from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import json

def Home(request):
    return render(request, "templates/MainApp/lorem/index.html",{'CeremonyWinter1': json.dumps('Kapsahn')})
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

def Home(request):
    return render(request, "MainApp/PasteHtmlFilesHere.html")
# Create your views here.

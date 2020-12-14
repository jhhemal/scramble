from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import WordSerializers
from .models import Word

# Create your views here.

class WordListAPI(ListAPIView):
    serializer_class = WordSerializers
    queryset = Word.objects.all()
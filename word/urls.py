from django.urls import path
from .views import WordListAPI

urlpatterns = [
    path('word-list/', WordListAPI.as_view(), name='word-list'),
]
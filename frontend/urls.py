from django.urls import path
from .views import home, WordCreate, WordList

urlpatterns = [
    path('', home, name='home'),
    path('word/create/', WordCreate.as_view(), name='create-word'),
    path('word/list/', WordList.as_view(), name='list-word'),
]
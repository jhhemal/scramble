from django.shortcuts import render
from word.models import Word
from django.views.generic import CreateView, ListView
from django.urls import reverse_lazy
from .forms import CreateWordForm
# Create your views here.
def home(request):
    return render(request, 'frontend/index.html')

class WordCreate(CreateView):
    model = Word
    form_class = CreateWordForm
    template_name = 'frontend/create.html'
    success_url = reverse_lazy('list-word')

class WordList(ListView):
    model = Word
    context_object_name = 'words'
    template_name = 'frontend/word_list.html'
    ordering = 'word'
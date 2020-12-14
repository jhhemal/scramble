from django import forms
from word.models import Word

class CreateWordForm(forms.ModelForm):
    class Meta:
        model = Word
        fields = ['word']

        widgets = {
            'word' : forms.TextInput(attrs={
                'placeholder' : "Enter Your Word",
            })
        }
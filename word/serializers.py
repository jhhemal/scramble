from rest_framework import serializers
from .models import Word

class WordSerializers(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = '__all__'
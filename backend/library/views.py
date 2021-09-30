from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import AuthorSerializer, BookSerializer, GenreSerializer

from .models import Author, Book, Genre


def home(request):
    return HttpResponse("Hello from your favorite server!")

class AuthorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Author to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class GenreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Genres to be viewed or edited.
    """
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer
    

class BookViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Books to be viewed or edited.
    """
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    



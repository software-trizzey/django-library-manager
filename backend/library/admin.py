from django.contrib import admin

from .models import Author, Book, Genre

# Register your models here.
class LibraryAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'genre', 'description', 'completed')

library_models = [Author, Book, Genre]

admin.site.register( library_models )
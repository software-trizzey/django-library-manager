from django.contrib import admin

from .models import Author, Book, Genre


@admin.register(Author)
class LibraryAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name')
    search_fields = ['first_name__istartswith', 'last_name__istartswith']



@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    autocomplete_fields = ['author', 'genre']
    prepopulated_fields= {
        'slug': ['title']
    }
    list_display = ['title', 'author', 'genre', 'completed', 'purchase_date']
    list_editable = ['completed']
    list_filter = ['genre', 'author']
    list_select_related = ['author', 'genre']
    search_fields = ['title']

    @admin.display(ordering='author')
    def author(self, author):
        return f"{author.first_name} {author.last_name}"


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name__istartswith']
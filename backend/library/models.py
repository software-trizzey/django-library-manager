from django.db import models

# Create your models here.

class Author(models.Model):
    first_name = models.CharField(max_length=35)
    last_name = models.CharField(max_length=35)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Genre(models.Model):
    genre_name = models.CharField(max_length=50)

    def __str__(self):
        return self.genre_name

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    description = models.TextField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    purchase_date = models.DateTimeField()


    def __str__(self):
        return self.title
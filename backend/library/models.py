from django.db import models


class Author(models.Model):
    first_name = models.CharField(max_length=35)
    last_name = models.CharField(max_length=35)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"



class Book(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    isbn = models.CharField(max_length=30, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    completed = models.BooleanField(default=False)
    purchase_date = models.DateField(null=True, blank=True)
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
    genre = models.ForeignKey('Genre', on_delete=models.PROTECT)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['title']


class Genre(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
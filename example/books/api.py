
from tastypie.resources import ModelResource
from tastypie import fields

from models import Author, Book, Publisher


class AuthorResource(ModelResource):
    class Meta:
        queryset = Author.objects.all()
        resource_name = 'author'


class PublisherResource(ModelResource):
    class Meta:
        queryset = Publisher.objects.all()
        resource_name = 'publisher'

class BookResource(ModelResource):
    publisher = fields.ForeignKey(PublisherResource, 'publisher')
    authors = fields.ToManyField(AuthorResource, 'authors', full=True)
    
    class Meta:
        queryset = Book.objects.all()
        resource_name = 'book'



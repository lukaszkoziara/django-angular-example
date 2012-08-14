from django.conf.urls import patterns, include, url

from django.views.generic.simple import direct_to_template

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

import views

from example.books.api import AuthorResource, PublisherResource, BookResource
from example.projects.api import ProjectResource
from example.quiz.api import LocationResource, QuickStatsResource, UserAttributeResource
from tastypie.api import Api
from django.conf import settings

v1_api = Api(api_name='v1')
v1_api.register(AuthorResource())
v1_api.register(PublisherResource())
v1_api.register(BookResource())
v1_api.register(ProjectResource())
v1_api.register(LocationResource())
v1_api.register(QuickStatsResource())
v1_api.register(UserAttributeResource())


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'example.views.home', name='home'),
    # url(r'^example/', include('example.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', direct_to_template, {'template': 'homepage.html'}, name='homepage'),
#    url(r'^books/', include('example.books.urls')),
    
    url(r'^quiz/', include('example.quiz.urls')),
    url(r'^api/', include(v1_api.urls)),
    url(r'^projects/$', direct_to_template, {'template': 'index.html'}, name='projects'),
    url(r'^static/partials/(?P<template_name>.*)$', views.load_partial),
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT})
)

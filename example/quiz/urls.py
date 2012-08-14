
from django.conf.urls.defaults import patterns, include, url
from django.views.generic.simple import direct_to_template
import views
from forms import QuickStatsForm


urlpatterns = patterns('',
    url(r'^quickstats/$', views.show_template,
        {'template_name': 'quickstats.html', 'formclass': QuickStatsForm},
        name='quickstats'),
    
    
#    url(r'^quickstats/$', direct_to_template, {'template': 'quickstats.html'}, name='quickstats'),
)

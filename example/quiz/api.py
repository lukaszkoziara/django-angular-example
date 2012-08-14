
from tastypie.resources import ModelResource
from tastypie import fields
from tastypie.authorization import Authorization

from models import QuickStats, Location

import pdb

def HydrateSessionKey(bundle):
    if not bundle.request.session or not bundle.request.session.session_key:
        bundle.request.session.cycle_key()
    
    bundle.data['session_key'] = bundle.request.session.session_key


class QuickStatsResource(ModelResource):
    
    class Meta:
        queryset = QuickStats.objects.all()
        resource_name = 'quickstats'
        authorization= Authorization()
        always_return_data = True
    
    def hydrate(self, bundle):
        HydrateSessionKey(bundle)
        return bundle


class LocationResource(ModelResource):
    class Meta:
        queryset = Location.objects.all()
        resource_name = 'location'
        authorization= Authorization()
        always_return_data = True
    
    def hydrate(self, bundle):
        HydrateSessionKey(bundle)
        return bundle


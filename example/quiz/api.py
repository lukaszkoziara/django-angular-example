
from tastypie.resources import ModelResource
from tastypie import fields
from tastypie.authorization import Authorization

from models import QuickStats, Location, UserAttribute

import pdb

def HydrateSessionKey(bundle):
    if not bundle.request.session or not bundle.request.session.session_key:
        bundle.request.session.cycle_key()
    bundle.data['session_key'] = bundle.request.session.session_key

class UserAttributeResource(ModelResource):
    class Meta:
        queryset = UserAttribute.objects.all()
        resource_name = 'userattributes'
        authorization= Authorization()
        always_return_data = True
#        allowed_methods = ['get', 'post', 'put', 'delete']


class QuickStatsResource(ModelResource):
    userattributes = fields.ToManyField(UserAttributeResource, 'userattributes', full=False, null=True)
    
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


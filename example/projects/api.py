
from tastypie.resources import ModelResource
from tastypie import fields
from tastypie.authorization import Authorization

from models import Project

import pdb

class ProjectResource(ModelResource):
    class Meta:
        queryset = Project.objects.all()
        resource_name = 'project'
        authorization= Authorization()
        always_return_data = True
    
    def hydrate(self, bundle):
        print 'hydrating project resource'
#        pdb.set_trace()
        return bundle
    
    def hydrate_name(self, bundle):
        print 'hydrating name'
#        pdb.set_trace()
        
        bundle.data['name'] = 'NEW NAME'
#        bundle.obj.name = 'NEW NAME'
#        bundle.obj.save()
        
#        pdb.set_trace()
        
        return bundle


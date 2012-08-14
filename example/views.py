
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import Template, RequestContext, Context
from django.views.decorators.http import require_GET, require_http_methods
from django.conf import settings
from django.template.loader import get_template

import pdb

@require_GET
def load_partial(request, template_name=''):
    print 'load_partial view'
    
    if template_name:
        path = 'partials/%s' % template_name
        t = get_template(path)
        ctx = Context({})
        
        print 'loading template: %s' % template_name
        
        return HttpResponse(t.render(ctx))
    else:
        return HttpResponse('unknown partial template')



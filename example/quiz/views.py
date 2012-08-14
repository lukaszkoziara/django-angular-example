# Create your views here.

from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.views.decorators.http import require_GET


@require_GET
def show_template(request, template_name, formclass):
    return render_to_response(template_name,
                              {'form': formclass()},
                              context_instance=RequestContext(request))


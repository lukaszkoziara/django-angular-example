
from django.contrib import admin
from models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'website', 'description',)
    search_fields = ('name', 'website', 'description',)


admin.site.register(Project, ProjectAdmin)

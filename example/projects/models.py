
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100, blank=False)
    website = models.URLField(blank=False)
    description = models.TextField(blank=False)
    
    
    def __unicode__(self):
        return self.name


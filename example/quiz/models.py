from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class QuizSection(models.Model):
    user = models.ForeignKey(User, null=True)
    session_key = models.CharField(max_length=40, blank=True)
    
    def save(self, *args, **kwargs):
        super(QuizSection, self).save(*args, **kwargs)
    
    class Meta:
        abstract = True


class QuickStats(QuizSection):
    age = models.IntegerField(null=False, default=25)
    height_inches = models.IntegerField(null=False, default=70)


class Location(QuizSection):
    address = models.CharField(max_length=150, blank=False, default='1707 w roscoe, chicago il')


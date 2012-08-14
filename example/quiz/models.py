from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from datetime import datetime

class UserAttribute(models.Model):
    name = models.CharField(max_length=250, blank=False)
    timestamp = models.DateTimeField(null=False, default=datetime.now())


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
    userattributes = models.ManyToManyField(UserAttribute, null=True)


class Location(QuizSection):
    address = models.CharField(max_length=150, blank=False, default='1707 w roscoe, chicago il')


from django import forms
from django.forms import ModelForm

import models

class QuickStatsForm(ModelForm):
    class Meta:
        model = models.QuickStats

class UserAttributesForm(ModelForm):
    class Meta:
        model = models.UserAttribute


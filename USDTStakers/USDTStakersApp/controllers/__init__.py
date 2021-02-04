from django.urls import re_path
from django.views.generic import TemplateView
from django.conf import settings

urlpatterns = [
    re_path(r"^.*$", TemplateView.as_view(
        template_name="USDTStakersApp/%s.html" %("index" if not settings.DEBUG else "debug")
    ))
]

from django.urls import path

from tesla.views import index

urlpatterns = [
    path('', index),
]
from django.urls import path
from .views import signin_view

urlpatterns = [
    path('signin/', signin_view, name='signin'),
]

from django.shortcuts import render

# Create your views here.
# myapp/views.py

def home(request):
    return render(request, 'home.html')

def login(request):
    return render(request, 'login.html')

def dashboard(request):
    return render(request, 'dash.html')

def submitForm(request):
    return render(request, 'form.html')

def certificate_validation(request):
    return render(request, 'success.html' )

def invalid(request):
    return render (request, 'invalid.html')

def aboutUs(request):
    return render (request, 'aboutus.html')


def help(request):
    return render (request, 'help.html')


def feedback(request):
    return render (request, 'feedback.html')

# views.py
from django.shortcuts import render
from .models import Candidate_details
from django.http import JsonResponse
from django.core.serializers import serialize
import json


def candidate_data(request):
    # Retrieve all objects from the YourModel table
    candidate_data = Candidate_details.objects.all()
    # Retrieve objects with specific conditions
    # filtered_data = Candidate_details.objects.filter(candidate_ID=True)
    
    parsed_data = []
    for candidate in candidate_data:
        candidate_dict = {
            'candidate_ID': candidate.candidate_ID,
            'candidate_name': candidate.candidate_name,
            'University_name': candidate.University_name,
            'degree': candidate.degree,
            'YOP': candidate.YOP,
            'status': candidate.status
        }
        parsed_data.append(candidate_dict)
    # Parse the serialized data to convert it into a list of dictionaries
    # parsed_data = [item['fields'] for item in json.loads(serialized_data)]
    return JsonResponse({'candidate': parsed_data})





# from django.http import JsonResponse

# def candidate_Data(request):
#     data = YourModel.objects.all()
#     msg = {'msg':'hello from django'}
#     return JsonResponse(data)

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages

def signin_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/dashboard')
            else:
                messages.error(request, 'Invalid username or password.')
        else:
            messages.error(request, 'Invalid username or password.')
    else:
        form = AuthenticationForm()
    return render(request, 'signup.html', {'form': form})

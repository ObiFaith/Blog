from .forms import SignupForm
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.
@ensure_csrf_cookie
def token_view(request):
  return JsonResponse({'csrf_token': request.META.get('CSRF_COOKIE')})

def index(request):
  return render(request, 'index.html')

def signup_view(request):
  if request.method == 'POST':
    form = SignupForm(request.POST)
    if form.is_valid():
      email = form.cleaned_data['email']
      password = form.cleaned_data['password']

      user = User.objects.create_user(username=email, email=email, password=password)
      login(request, user)
      return JsonResponse({'message': 'User created successfully!'}, status=201)
    else:
      return JsonResponse({'errors': form.errors}, status=400)
  return JsonResponse({'error': 'Invalid request method'}, status=405)

def login_view(request):
  pass
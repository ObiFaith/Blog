import json
from .forms import SignupForm
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup_view(request):
  if request.method == 'POST':
    try:
      # Parse JSON data from request body
      data = json.loads(request.body)
    except json.JSONDecodeError:
      return JsonResponse({'error': 'Invalid JSON'}, status=400)

    # Initialize form with parsed data
    form = SignupForm(data)
    if form.is_valid():
      email = form.cleaned_data['email']
      password = form.cleaned_data['password']

      # Create user and log them in
      user = User.objects.create_user(username=email, email=email, password=password)
      login(request, user)
      return JsonResponse({'message': 'User created successfully!'}, status=201)
    else:
      return JsonResponse({'errors': form.errors}, status=400)
  return JsonResponse({'error': 'Invalid request method'}, status=405)

def login_view(request):
  pass
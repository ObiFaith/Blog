from django import forms
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

class SignupForm(forms.Form):
  email = forms.EmailField(required=True, max_length=254)
  password = forms.CharField(widget=forms.PasswordInput, required=True, validators=[MinLengthValidator(8)])
  confirm_password = forms.CharField(widget=forms.PasswordInput, required=True, validators=[MinLengthValidator(8)])

  def clean_email(self):
    email = self.cleaned_data.get('email')
    if User.objects.filter(email=email).exists():
      raise forms.ValidationError('Email already exists!')
    return email

  def clean(self):
    cleaned_data = super().clean()
    password = cleaned_data.get('password')
    confirm_password = cleaned_data.get('confirm_password')

    if password and confirm_password and password != confirm_password:
      self.add_error('confirm_password', 'Passwords do not match!')

    return cleaned_data

class LoginForm(forms.Form):
  email = forms.EmailField(required=True, max_length=254)
  password = forms.CharField(widget=forms.PasswordInput, required=True, min_length=8)
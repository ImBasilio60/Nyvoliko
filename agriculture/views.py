from django.shortcuts import render
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from .models import ProfilUtilisateur, ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
class AdminRequiredMixin(UserPassesTestMixin):
    def test_func(self):
        try:
            return self.request.user.is_superuser or self.request.user.profilutilisateur.role == ADMINISTRATEUR
        except ProfilUtilisateur.DoesNotExist:
            return self.request.user.is_superuser

class AgriculteurTechRequiredMixin(UserPassesTestMixin):
    def test_func(self):
        try:
            return self.request.user.is_superuser or self.request.user.profilutilisateur.role in (ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN)
        except ProfilUtilisateur.DoesNotExist:
            return self.request.user.is_superuser

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'agriculture/dashboard.html'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['parcelles_libres'] = 5
        context['plantations_total'] = 20
        return context
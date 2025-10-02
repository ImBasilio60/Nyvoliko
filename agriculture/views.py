from django.shortcuts import render
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from .models import ProfilUtilisateur, ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN, Culture, Unite
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q, Count
from django.shortcuts import get_object_or_404, redirect
from django.contrib import  messages
from .models import Parcelle, ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN, Corbeille

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

class ParcelleListView(LoginRequiredMixin, ListView):
    model = Parcelle
    template_name = 'agriculture/parcelle_list.html'
    context_object_name = 'parcelles'
    paginate_by = 5

    def get_queryset(self):
        queryset = Parcelle.objects.filter(parcelle_supprime=False).order_by('nom_parcelle')

        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(nom_parcelle__icontains=query) |
                Q(type_sol__icontains=query) |
                Q(superficie_parcelle__icontains=query)
            )

        statut = self.request.GET.get('statut')
        if statut == 'disponible':
            queryset = queryset.filter(disponible=True)
        elif statut == 'occupée':
            queryset = queryset.filter(disponible=False)

        return queryset

class ParcelleCreateView(AdminRequiredMixin, CreateView):
    model = Parcelle
    template_name = 'agriculture/parcelle_form.html'
    fields = ['nom_parcelle', 'superficie_parcelle', 'type_sol', 'disponible']
    success_url = reverse_lazy('parcelle_list')

    def form_valid(self, form):
        messages.success(self.request, "La parcelle a été ajoutée avec succès.")
        return super().form_valid(form)

class ParcelleUpdateView(AdminRequiredMixin, UpdateView):
    model = Parcelle
    template_name = 'agriculture/parcelle_form.html'
    fields = ['nom_parcelle', 'superficie_parcelle', 'type_sol', 'disponible']
    success_url = reverse_lazy('parcelle_list')

    def form_valid(self, form):
        messages.info(self.request, "La parcelle a été modifiée avec succès.")
        return super().form_valid(form)

class ParcelleDeleteView(AdminRequiredMixin, DeleteView):
    model = Parcelle
    success_url = reverse_lazy('parcelle_list')

    def post(self, request, *args, **kwargs):
        parcelle = self.get_object()

        parcelle.parcelle_supprime = True
        parcelle.save()

        Corbeille.objects.create(
            nom_table='Parcelle',
            ID_enregistrement=parcelle.pk
        )

        messages.warning(request, f"La parcelle '{parcelle.nom_parcelle}' a été déplacée dans la corbeille.")
        return redirect(self.success_url)

class CorbeilleListView(AdminRequiredMixin, ListView):
    model = Corbeille
    template_name = 'agriculture/corbeille_list.html'
    context_object_name = 'elements_supprimes'

def restaurer_element(request, table_name, pk):
    if not request.user.is_authenticated or request.user.profilutilisateur.role != ADMINISTRATEUR:
        messages.error(request, "Permission refusée.")
        return redirect('corbeille_list')

    if table_name == 'Parcelle':
        model = Parcelle
        champ_supprime = 'parcelle_supprime'
    elif table_name == 'Culture':
        model = Culture
        champ_supprime = 'culture_supprime'
    #elif table_name == 'Plantation':
    else:
        messages.error(request, f"Type de donnée {table_name} inconnu pour la restauration.")
        return redirect('corbeille_list')

    try:
        element = get_object_or_404(model, pk=pk)

        setattr(element, champ_supprime, False)
        element.save()

        corbeille_item = Corbeille.objects.filter(nom_table=table_name, ID_enregistrement=pk).first()
        if corbeille_item:
            corbeille_item.delete()

        messages.success(request, f"L'élément {table_name} restauré avec succès.")

    except Exception as e:
        messages.error(request, f"Erreur lors de la restauration: {e}")

    return redirect('corbeille_list')

class CultureListView(LoginRequiredMixin, ListView):
    model = Culture
    template_name = 'agriculture/culture_list.html'
    context_object_name = 'cultures'
    paginate_by = 5

    def get_queryset(self):
        queryset = Culture.objects.filter(culture_supprime=False).order_by("nom_culture")
        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(nom_culture__icontains=query) |
                Q(variete_culture__icontains=query) |
                Q(saisonnalite_culture__icontains=query)
            )

        saison = self.request.GET.get('saison')
        if saison:
            queryset = queryset.filter(
                saisonnalite_culture__icontains=saison
            )

        return queryset
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        cultures_stats = Culture.objects.filter(culture_supprime=False).annotate(
            nb_plantations=Count('plantation')
        ).order_by('-nb_plantations')

        context['cultures_stats'] = cultures_stats
        return context

class CultureCreateView(AdminRequiredMixin, CreateView):
    model = Culture
    template_name = 'agriculture/culture_form.html'
    fields = ['nom_culture', 'variete_culture', 'cycle_culture', 'saisonnalite_culture']
    success_url = reverse_lazy('culture_list')

    def form_valid(self, form):
        messages.success(self.request, "La culture a été ajoutée avec succès.")
        return super().form_valid(form)

class CultureUpdateView(AdminRequiredMixin, UpdateView):
    model = Culture
    template_name = 'agriculture/culture_form.html'
    fields = ['nom_culture', 'variete_culture', 'cycle_culture', 'saisonnalite_culture']
    success_url = reverse_lazy('culture_list')

    def form_valid(self, form):
        messages.success(self.request, "La culture a été modifiée avec succès.")
        return super().form_valid(form)

class CultureDeleteView(AdminRequiredMixin, DeleteView):
    model = Culture
    success_url = reverse_lazy('culture_list')

    def post(self, request, *args, **kwargs):
        culture = self.get_object()

        culture.parcelle_supprime = True
        culture.save()

        Corbeille.objects.create(
            nom_table='Culture',
            ID_enregistrement=culture.pk
        )

        messages.warning(request, f"La culture '{culture.nom_culture}' a été déplacée dans la corbeille.")
        return redirect(self.success_url)

class UniteListView(AdminRequiredMixin, ListView):
    model = Unite
    template_name = 'agriculture/unite_list.html'
    context_object_name = 'unites'

class UniteCreativeView(AdminRequiredMixin, CreateView):
    model = Unite
    template_name = 'agriculture/unite_form.html'
    fields = ['unite']
    success_url = reverse_lazy('unite_list')

    def form_valid(self, form):
        messages.success(self.request, "L'unité a été ajoutée avec succès.")
        return super().form_valid(form)

class UniteUpdateView(AdminRequiredMixin, UpdateView):
    model = Unite
    template_name = 'agriculture/unite_form.html'
    fields = ['unite']
    success_url = reverse_lazy('unite_list')

    def form_valid(self, form):
        messages.success(self.request, "L'unité a été modifiée avec succès.")
        return super().form_valid(form)

class UniteDeleteView(AdminRequiredMixin, DeleteView):
    model = Unite
    template_name = 'agriculture/unite_confirm_delete.html'
    success_url = reverse_lazy('unite_list')

    def delete(self, request, *args, **kwargs):
        try:
            response =super().delete(request, *args, **kwargs)
            messages.success(request, "L'unité a été supprimée définitivement.")
            return response
        except models.ProtectedError:
            messages.error(request,"Impossible de supprimer cette unité car elle est utilisée dans une ou plusieurs plantations.")
            return redirect(self.success_url)

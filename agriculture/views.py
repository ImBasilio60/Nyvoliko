import datetime
import json

from django.shortcuts import render
from django.contrib.auth.mixins import UserPassesTestMixin, LoginRequiredMixin
from .models import ProfilUtilisateur, ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN, Culture, Unite, Plantation, Suivi
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Q, Count, Sum, F
from django.shortcuts import get_object_or_404, redirect
from django.contrib import  messages
from .models import Parcelle, ADMINISTRATEUR, AGRICULTEUR_TECHNICIEN, Corbeille

from .forms import PlantationForm, ParcelleForm, CultureForm, SuiviForm


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

        total_parcelles = Parcelle.objects.filter(parcelle_supprime=False).count()
        parcelles_disponibles = Parcelle.objects.filter(parcelle_supprime=False, disponible=True).count()
        parcelles_occupées = total_parcelles - parcelles_disponibles

        context['total_parcelles'] = total_parcelles
        context['parcelles_disponibles'] = parcelles_disponibles
        context['parcelles_occupées'] = parcelles_occupées

        plantations_par_culture = Plantation.objects.filter(plantation_supprime=False).values(
            'ID_culture__nom_culture'
        ).annotate(
            total=Count('ID_culture')
        ).order_by('-total')

        context['chart_cultures_labels'] = [item['ID_culture__nom_culture'] for item in plantations_par_culture]
        context['chart_cultures_data'] = [item['total'] for item in plantations_par_culture]

        plantations_par_parcelle = Plantation.objects.filter(plantation_supprime=False).values(
            'ID_parcelle__nom_parcelle'
        ).annotate(
            surface_occupée=Sum('ID_parcelle__superficie_parcelle')
        ).order_by('-surface_occupée')

        context['chart_parcelles_labels'] = [item['ID_parcelle__nom_parcelle'] for item in plantations_par_parcelle]
        context['chart_parcelles_data'] = [float(item['surface_occupée']) for item in plantations_par_parcelle]


        plantations = Plantation.objects.filter(plantation_supprime=False)
        suivis = Suivi.objects.filter(suivi_supprime=False)

        calendar_events = []

        for p in plantations:
            calendar_events.append({
                'title': f"PLANTÉ: {p.ID_culture.nom_culture} ({p.ID_parcelle.nom_parcelle})",
                'start': p.date_plantation_terre.isoformat(),
                'allDay': True,
                'color': '#007bff'
            })

            if p.ID_culture.cycle_culture:
                recolte_date = p.date_plantation_terre + datetime.timedelta(days=p.ID_culture.cycle_culture)

                calendar_events.append({
                    'title': f"RÉCOLTE ESTIMÉE: {p.ID_culture.nom_culture}",
                    'start': recolte_date.isoformat(),
                    'allDay': True,
                    'color': '#28a745'
                })

        for s in suivis:
            calendar_events.append({
                'title': f"SUIVI: {s.details_suivi} ({s.ID_plantation.ID_parcelle.nom_parcelle})",
                'start': s.date_suivi.isoformat(),
                'allDay': True,
                'color': '#ffc107',
            })

        context['calendar_events'] = json.dumps(calendar_events)

        context['suivis_recents'] = Suivi.objects.filter(suivi_supprime=False).order_by('-date_suivi')[:5]

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
    form_class = ParcelleForm
    template_name = 'agriculture/parcelle_form.html'
    success_url = reverse_lazy('parcelle_list')

    def form_valid(self, form):
        messages.success(self.request, "La parcelle a été ajoutée avec succès.")
        return super().form_valid(form)

class ParcelleUpdateView(AdminRequiredMixin, UpdateView):
    model = Parcelle
    template_name = 'agriculture/parcelle_form.html'
    form_class = ParcelleForm
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
    if table_name == 'Parcelle':
        model = Parcelle
        champ_supprime = 'parcelle_supprime'
    elif table_name == 'Culture':
        model = Culture
        champ_supprime = 'culture_supprime'
    elif table_name == 'Plantation':
        model = Plantation
        champ_supprime = 'plantation_supprime'
    elif table_name == 'Suivi':
        model = Suivi
        champ_supprime = 'suivi_supprime'
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

def restaurer_tout(request):
    corbeille_items = Corbeille.objects.all()
    restored_count = 0

    for item in corbeille_items:
        table_name = item.nom_table
        pk = item.ID_enregistrement

        try:
            if table_name == 'Parcelle':
                model = Parcelle
                champ_supprime = 'parcelle_supprime'
            elif table_name == 'Culture':
                model = Culture
                champ_supprime = 'culture_supprime'
            elif table_name == 'Plantation':
                model = Plantation
                champ_supprime = 'plantation_supprime'
            elif table_name == 'Suivi':
                model = Suivi
                champ_supprime = 'suivi_supprime'
            else:
                continue

            element = get_object_or_404(model, pk=pk)
            setattr(element, champ_supprime, False)
            element.save()
            item.delete()
            restored_count += 1

        except Exception as e:
            messages.error(request, f"Erreur pour {table_name} id={pk}: {e}")

    messages.success(request, f"{restored_count} élément(s) restauré(s) avec succès.")
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
    form_class = CultureForm
    success_url = reverse_lazy('culture_list')

    def form_valid(self, form):
        messages.success(self.request, "La culture a été ajoutée avec succès.")
        return super().form_valid(form)

class CultureUpdateView(AdminRequiredMixin, UpdateView):
    model = Culture
    template_name = 'agriculture/culture_form.html'
    form_class = CultureForm
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


class PlantationListView(AgriculteurTechRequiredMixin, ListView):
    model = Plantation
    template_name = 'agriculture/plantation_list.html'
    context_object_name = 'plantations'
    paginate_by = 4

    def get_queryset(self):
        queryset = Plantation.objects.filter(plantation_supprime=False).order_by('-date_plantation_terre')

        parcelle_id = self.request.GET.get('parcelle')
        culture_id = self.request.GET.get('culture')

        if parcelle_id:
            queryset = queryset.filter(ID_parcelle_id=parcelle_id)
        if culture_id:
            queryset = queryset.filter(ID_culture_id=culture_id)

        query = self.request.GET.get('q')
        if query:
            queryset = queryset.filter(
                Q(ID_parcelle__nom_parcelle__icontains=query) |
                Q(ID_culture__nom_culture__icontains=query)
            )
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['parcelles'] = Parcelle.objects.filter(parcelle_supprime=False)
        context['cultures'] = Culture.objects.filter(culture_supprime=False)
        return context

class PlantationCreateView(AgriculteurTechRequiredMixin, CreateView):
    model = Plantation
    form_class = PlantationForm
    template_name = 'agriculture/plantation_form.html'
    success_url = reverse_lazy('plantation_list')

    def form_valid(self, form):
        messages.success(self.request, "La nouvelle plantation a été enregistrée avec succès.")
        return super().form_valid(form)

class PlantationUpdateView(AgriculteurTechRequiredMixin, UpdateView):
    model = Plantation
    form_class = PlantationForm
    template_name = 'agriculture/plantation_form.html'
    success_url = reverse_lazy('plantation_list')

    def form_valid(self, form):
        messages.success(self.request, "La plantation a été modifiée avec succès.")
        return super().form_valid(form)

class PlantationDeleteView(AgriculteurTechRequiredMixin, DeleteView):
    model = Plantation
    success_url = reverse_lazy('plantation_list')

    def post(self, request, *args, **kwargs):
        plantation = self.get_object()
        parcelle = plantation.ID_parcelle

        plantation.plantation_supprime = True
        plantation.save()

        parcelle.disponible = True
        parcelle.save()

        Corbeille.objects.create(
            nom_table='Plantation',
            ID_enregistrement=plantation.pk
        )
        messages.warning(request, f"La plantation sur {parcelle.nom_parcelle} a été déplacée dans la corbeille.")
        return redirect(self.success_url)

class SuiviListView(AgriculteurTechRequiredMixin, CreateView, ListView):
    model = Suivi
    form_class = SuiviForm
    template_name = 'agriculture/suivi_list.html'
    context_object_name = 'suivis'
    paginate_by = 5

    def get_initial(self):
        initial = super().get_initial()

        plantation_pk = self.kwargs.get('pk_plantation')
        if plantation_pk:
            initial['ID_plantation'] = plantation_pk
        return initial

    def get_queryset(self):
        plantation_pk = self.kwargs.get('pk_plantation')
        if plantation_pk:
            self.plantation = get_object_or_404(Plantation, pk=plantation_pk, plantation_supprime=False)
            return Suivi.objects.filter(ID_plantation=self.plantation, suivi_supprime=False).order_by('-date_suivi')
        return Suivi.objects.none()

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if hasattr(self, 'plantation'):
            context['plantation'] = self.plantation
        return context

    def form_valid(self, form):
        if not form.instance.ID_plantation:
            plantation_pk = self.kwargs.get('pk_plantation')
            form.instance.ID_plantation = get_object_or_404(Plantation, pk=plantation_pk)

        messages.success(self.request, "Le suivi a été ajouté avec succès.")
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy('suivi_list', kwargs={'pk_plantation': self.object.ID_plantation.pk})

class SuiviUpdateView(AgriculteurTechRequiredMixin, UpdateView):
    model = Suivi
    fields = ['details_suivi']
    template_name = 'agriculture/suivi_form.html'

    def get_success_url(self):
        messages.info(self.request, "Le suivi a été modifié avec succès.")
        return reverse_lazy('suivi_list', kwargs={'pk_plantation': self.object.ID_plantation.pk})

class SuiviDeleteView(AgriculteurTechRequiredMixin, DeleteView):
    model = Suivi

    def post(self, request, *args, **kwargs):
        suivi = self.get_object()
        success_url = reverse_lazy('suivi_list', kwargs={'pk_plantation': suivi.ID_plantation.pk})

        suivi.suivi_supprime = True
        suivi.save()

        Corbeille.objects.create(
            nom_table='Suivi',
            ID_enregistrement=suivi.pk,
        )
        messages.warning(request, "Le suivi a été déplacé dans la corbeille.")
        return redirect(success_url)

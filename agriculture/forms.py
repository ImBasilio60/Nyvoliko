from django import forms
from .models import Plantation, Parcelle, Culture, Unite, Suivi

class PlantationForm(forms.ModelForm):
    ID_parcelle = forms.ModelChoiceField(
        queryset=Parcelle.objects.filter(parcelle_supprime=False, disponible=True),
        label="Parcelle (Disponible)",
        widget=forms.Select(attrs={'class': 'form-select'}),
    )

    ID_culture = forms.ModelChoiceField(
        queryset=Culture.objects.filter(culture_supprime=False),
        label="Culture",
        widget=forms.Select(attrs={'class': 'form-select'}),
    )

    ID_unite = forms.ModelChoiceField(
        queryset=Unite.objects.all(),
        label="Unité de Mesure",
        widget=forms.Select(attrs={'class': 'form-select'})
    )

    class Meta:
        model = Plantation
        fields = [
            'ID_parcelle',
            'ID_culture',
            'quantite_plantee',
            'ID_unite',
            'date_plantation_terre',
            'methode_culture'
        ]
        widgets = {
            'date_plantation_terre': forms.DateInput(attrs={
                'type': 'date',
                'class': 'form-control',
            }),
            'quantite_plantee': forms.NumberInput(attrs={
                'class': 'form-control',
                'step': '0.01'
            }),
            'methode_culture': forms.TextInput(attrs={
                'class': 'form-control',
            })
        }

    def save(self, commit=True):
        instance = super().save(commit=False)

        if instance.pk is None:
            parcelle = self.cleaned_data.get('ID_parcelle')
            if parcelle:
                parcelle.disponible = False
                parcelle.save()

        if commit:
            instance.save()
        return instance


class ParcelleForm(forms.ModelForm):
    class Meta:
        model = Parcelle
        fields = ['nom_parcelle', 'superficie_parcelle', 'type_sol', 'disponible']
        widgets = {
            'nom_parcelle': forms.TextInput(attrs={'class': 'form-control'}),
            'superficie_parcelle': forms.NumberInput(attrs={'class': 'form-control'}),
            'type_sol': forms.Select(attrs={'class': 'form-control'}),
            'disponible': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
        }

class CultureForm(forms.ModelForm):
    class Meta:
        model = Culture
        fields = ['nom_culture', 'variete_culture', 'cycle_culture', 'saisonnalite_culture']
        widgets = {
            'nom_culture': forms.TextInput(attrs={'class': 'form-control'}),
            'variete_culture': forms.TextInput(attrs={'class': 'form-control'}),
            'cycle_culture': forms.NumberInput(attrs={'class': 'form-control'}),
            'saisonnalite_culture': forms.Select(attrs={'class': 'form-control'}),
        }

class SuiviForm(forms.ModelForm):
    class Meta:
        model = Suivi
        fields = ['details_suivi', 'ID_plantation']
        widgets = {
            'details_suivi': forms.Textarea(attrs={'class': 'form-control', 'rows': 5}),
            'ID_plantation': forms.Select(attrs={'class': 'form-control'}),
        }
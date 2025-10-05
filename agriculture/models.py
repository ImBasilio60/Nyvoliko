from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User, Group

ADMINISTRATEUR = 1
AGRICULTEUR_TECHNICIEN = 2

ROLE_CHOICES = (
    (ADMINISTRATEUR, 'Administrateur'),
    (AGRICULTEUR_TECHNICIEN, 'Agriculteur / Technicien'),
)

class ProfilUtilisateur(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.PositiveSmallIntegerField(
        choices=ROLE_CHOICES,
        default=AGRICULTEUR_TECHNICIEN,
    )
    def __str__(self):
        return f"Profil de {self.user.username}"

class Unite(models.Model):
    unite = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.unite

    class Meta:
        verbose_name = "Unité de mesure"
        verbose_name_plural = "Unités de mesure"

class Parcelle(models.Model):
    TYPE_SOL_CHOICES = [
        ('argileux', 'Argileux'),
        ('sableux', 'Sableux'),
        ('limoneux', 'Limoneux'),
        ('humifère', 'Humifère'),
        ('calcaire', 'Calcaire'),
    ]
    nom_parcelle = models.CharField(max_length=50, unique=True)
    superficie_parcelle = models.DecimalField(max_digits=10, decimal_places=2, help_text="Superficie en hectare (ha)")
    type_sol = models.CharField(max_length=20, choices=TYPE_SOL_CHOICES)
    disponible = models.BooleanField(default=True)
    parcelle_supprime = models.BooleanField(default=False)
    def __str__(self):
        return self.nom_parcelle

    class Meta:
        verbose_name = "Parcelle agricole"
        verbose_name_plural = "Parcelles agricoles"

class Culture(models.Model):
    SAISON_CHOICES = [
        ('pluvieuse', 'Saison pluvieuse'),
        ('seche', 'Saison sèche'),
        ('toute_annee', 'Toute l’année'),
    ]

    nom_culture = models.CharField(max_length=50, unique=True)
    variete_culture = models.CharField(max_length=50, null=True, blank=True)
    cycle_culture = models.IntegerField(null=True, blank=True, help_text="Durée du cycle en jours")
    saisonnalite_culture = models.CharField(
        max_length=20,
        choices=SAISON_CHOICES,
        default='pluvieuse'
    )
    culture_supprime = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.nom_culture} ({self.variete_culture})"

    class Meta:
        verbose_name = "Culture"
        verbose_name_plural = "Cultures"

class Corbeille(models.Model):
    nom_table = models.CharField(max_length=50)
    ID_enregistrement = models.IntegerField()
    date_suppression = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Corbeille: {self.nom_table} - ID {self.ID_enregistrement}"

    class Meta:
        verbose_name = "Corbeille"
        verbose_name_plural = "Corbeilles"

class Plantation(models.Model):
    date_plantation_terre = models.DateField()
    methode_culture = models.CharField(max_length=50, null=True, blank=True)
    quantite_plantee = models.DecimalField(max_digits=10, decimal_places=2)
    plantation_supprime = models.BooleanField(default=False)

    ID_unite = models.ForeignKey(Unite, on_delete=models.PROTECT)
    ID_culture = models.ForeignKey(Culture, on_delete=models.PROTECT)
    ID_parcelle = models.ForeignKey(Parcelle, on_delete=models.PROTECT)
    def __str__(self):
        return f"{self.ID_culture.nom_culture} sur {self.ID_parcelle.nom_parcelle}"

    class Meta:
        verbose_name = "Plantation"
        verbose_name_plural = "Plantations"

class Suivi(models.Model):
    date_suivi = models.DateField(auto_now_add=True)
    details_suivi = models.TextField(max_length=2000 ,null=True, blank=True)
    suivi_supprime = models.BooleanField(default=False)

    ID_plantation = models.ForeignKey(Plantation, on_delete=models.CASCADE)

    def __str__(self):
        return  f"Suivi du {self.date_suivi} pour la Plantation ID {self.ID_plantation.id}"

    class Meta:
        verbose_name = "Suivi de plantation"
        verbose_name_plural = "Suivis de plantations"
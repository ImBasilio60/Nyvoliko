from django.contrib import admin
from .models import Unite, Parcelle, Plantation, Suivi, Corbeille, ProfilUtilisateur, Culture

# Register your models here.
admin.site.register(Unite)
admin.site.register(Parcelle)
admin.site.register(Culture)
admin.site.register(Plantation)
admin.site.register(Suivi)
admin.site.register(Corbeille)
admin.site.register(ProfilUtilisateur)

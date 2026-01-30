from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class LocalisationViewSet(viewsets.ModelViewSet):
	serializer_class = LocalisationSerializer
	queryset = Localisation.objects.all()
	permission_classes = [IsAuthenticated]

class TerrainViewSet(viewsets.ModelViewSet):
	serializer_class = TerrainSerializer
	queryset = Terrain.objects.all()
	permission_classes = [IsAuthenticated]

class TypeSolViewSet(viewsets.ModelViewSet):
	serializer_class = TypeSolSerializer
	queryset = TypeSol.objects.all()
	permission_classes = [IsAuthenticated]

class ParcelleViewSet(viewsets.ModelViewSet):
	serializer_class = ParcelleSerializer
	queryset = Parcelle.objects.all()
	permission_classes = [IsAuthenticated]

class SaisonnaliteViewSet(viewsets.ModelViewSet):
	serializer_class = SaisonnaliteSerializer
	queryset = Saisonnalite.objects.all()
	permission_classes = [IsAuthenticated]

class CultureViewSet(viewsets.ModelViewSet):
	serializer_class = CultureSerializer
	queryset = Culture.objects.all()
	permission_classes = [IsAuthenticated]

class TypeIntrantViewSet(viewsets.ModelViewSet):
	serializer_class = TypeIntrantSerializer
	queryset = TypeIntrant.objects.all()
	permission_classes = [IsAuthenticated]

class UniteViewSet(viewsets.ModelViewSet):
	serializer_class = UniteSerializer
	queryset = Unite.objects.all()
	permission_classes = [IsAuthenticated]

class IntrantViewSet(viewsets.ModelViewSet):
	serializer_class = IntrantSerializer
	queryset = Intrant.objects.all()
	permission_classes = [IsAuthenticated]

class MethodeCultureViewSet(viewsets.ModelViewSet):
	serializer_class = MethodeCultureSerializer
	queryset = MethodeCulture.objects.all()
	permission_classes = [IsAuthenticated]

class PlantationViewSet(viewsets.ModelViewSet):
	serializer_class = PlantationSerializer
	queryset = Plantation.objects.all()
	permission_classes = [IsAuthenticated]

class RecolteViewSet(viewsets.ModelViewSet):
	serializer_class = RecolteSerializer
	queryset = Recolte.objects.all()
	permission_classes = [IsAuthenticated]

class SuiviViewSet(viewsets.ModelViewSet):
	serializer_class = SuiviSerializer
	queryset = Suivi.objects.all()
	permission_classes = [IsAuthenticated]

class ContenirPlantationIntrantViewSet(viewsets.ModelViewSet):
	permission_classes = ContenirPlantationIntrantSerializer
	queryset = ContenirPlantationIntrant.objects.all()
	permission_classes = [IsAuthenticated]
	
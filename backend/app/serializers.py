from rest_framework import serializers
from .models import *

class LocalisationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Localisation
		fields = '__all__'

class TerrainSerializer(serializers.ModelSerializer):
	class Meta:
		model = Terrain
		fields = '__all__'

class TypeSolSerializer(serializers.ModelSerializer):
	class Meta:
		model = TypeSol
		fields = '__all__'

class ParcelleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Parcelle
		fields = '__all__'

class SaisonnaliteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Saisonnalite
		fields = '__all__'

class CultureSerializer(serializers.ModelSerializer):
	class Meta:
		model = Culture
		fields = '__all__'

class TypeIntrantSerializer(serializers.ModelSerializer):
	class Meta:
		model = TypeIntrant
		fields = '__all__'

class UniteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Unite
		fields = '__all__'

class IntrantSerializer(serializers.ModelSerializer):
	class Meta:
		model = Intrant
		fields = '__all__'

class MethodeCultureSerializer(serializers.ModelSerializer):
	class Meta:
		model = MethodeCulture
		fields = '__all__'

class PlantationSerializer(serializers.ModelSerializer):
	class Meta:
		model = Plantation
		fields = '__all__'

class RecolteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Recolte
		fields = '__all__'

class SuiviSerializer(serializers.ModelSerializer):
	class Meta:
		model = Suivi
		fields = '__all__'

class ContenirPlantationIntrantSerializer(serializers.ModelSerializer):
	class Meta:
		model = ContenirPlantationIntrant
		fields = '__all__'
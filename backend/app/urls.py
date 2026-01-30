from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'localisation', LocalisationViewSet, basename="localisation")
router.register(r'terrain', TerrainViewSet, basename="terrain")
router.register(r'typesol', TypeSolViewSet, basename="typesol")
router.register(r'parcelle', ParcelleViewSet, basename="parcelle")
router.register(r'saisonnalite', SaisonnaliteViewSet, basename="saisonnalite")
router.register(r'culture', CultureViewSet, basename="culture")
router.register(r'typeintrant', TypeIntrantViewSet, basename="typeintrant")
router.register(r'unite', UniteViewSet, basename="unite")
router.register(r'intrant', IntrantViewSet, basename="intrant")
router.register(r'methodeculture', MethodeCultureViewSet, basename="methodeculture")
router.register(r'plantation', PlantationViewSet, basename="plantation")
router.register(r'recolte', RecolteViewSet, basename="recolte")
router.register(r'suivi', SuiviViewSet, basename="suivi")
router.register(r'plantation-intrant', ContenirPlantationIntrantViewSet, basename="plantation-intrant")

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
]


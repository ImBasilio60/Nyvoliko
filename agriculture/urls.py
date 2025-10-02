from django.urls import path
from . import views

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),

    # PARCELLES
    path('parcelles/', views.ParcelleListView.as_view(), name='parcelle_list'),
    path('parcelles/ajouter/', views.ParcelleCreateView.as_view(), name='parcelle_create'),
    path('parcelles/modifier/<int:pk>/', views.ParcelleUpdateView.as_view(), name='parcelle_update'),
    path('parcelles/supprimer/<int:pk>/', views.ParcelleDeleteView.as_view(), name='parcelle_delete'),

    # CORBEILLE
    path('corbeille/', views.CorbeilleListView.as_view(), name='corbeille_list'),
    path('corbeille/restaurer/<str:table_name>/<int:pk>/', views.restaurer_element, name='restaurer_element'),
]
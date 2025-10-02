from django.urls import path
from . import views

urlpatterns = [
    path('', views.DashboardView.as_view(), name='dashboard'),

    # PARCELLES
    path('parcelles/', views.ParcelleListView.as_view(), name='parcelle_list'),
    path('parcelles/ajouter/', views.ParcelleCreateView.as_view(), name='parcelle_create'),
    path('parcelles/modifier/<int:pk>/', views.ParcelleUpdateView.as_view(), name='parcelle_update'),
    path('parcelles/supprimer/<int:pk>/', views.ParcelleDeleteView.as_view(), name='parcelle_delete'),

    # CULTURES
    path('cultures/', views.CultureListView.as_view(), name='culture_list'),
    path('cultures/ajouter/', views.CultureCreateView.as_view(), name='culture_create'),
    path('cultures/modifier/<int:pk>/', views.CultureUpdateView.as_view(), name='culture_update'),
    path('cultures/supprimer/<int:pk>/', views.CultureDeleteView.as_view(), name='culture_delete'),

    #UNITES
    path('unites/', views.UniteListView.as_view(), name='unite_list'),
    path('unites/ajouter/', views.UniteCreativeView.as_view(), name='unite_create'),
    path('unites/modifier/<int:pk>/', views.UniteUpdateView.as_view(), name='unite_update'),
    path('unites/supprimer/<int:pk>/', views.UniteDeleteView.as_view(), name='unite_delete'),

    # CORBEILLE
    path('corbeille/', views.CorbeilleListView.as_view(), name='corbeille_list'),
    path('corbeille/restaurer/<str:table_name>/<int:pk>/', views.restaurer_element, name='restaurer_element'),
]
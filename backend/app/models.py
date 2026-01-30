from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager

# Create your models here.

class UserManager(BaseUserManager):
	def create_user(self, username, password):
		if not username:
			raise ValueError("Users must have an username")
		if not password:
			raise ValueError("Users must have a password")

		user = self.model(
			username = username,
		)
		user.set_password(password)
		user.save(using=self._db)
		return user

	def create_superuser(self, username, password):
		user = self.create_user(
			username=username,
			password=password,
		)
		user.is_staff = True
		user.is_superuser = True
		user.save(using=self._db)
		return user

class User(AbstractBaseUser):
	username = models.CharField(max_length=50, unique=True)
	is_active = models.BooleanField(default=True)
	is_staff = models.BooleanField(default=False)
	is_superuser = models.BooleanField(default=False)

	objects = UserManager()

	USERNAME_FIELD = "username"
	REQUIRED_FIELDS = []
	
	def __str__(self):
		return self.username

	def has_perm(self, perm, obj=None):
		return self.is_superuser

	def has_module_perms(self, app_label):
		return self.is_superuser

class Localisation(models.Model):
	localisation = models.CharField(max_length=50)

	def __str__(self):
		return self.localisation

class Terrain(models.Model):
	localisation = models.ForeignKey(Localisation, on_delete=models.PROTECT)
	libelle = models.CharField(max_length=50)

	def __str__(self):
		return self.libelle

class TypeSol(models.Model):
	type_sol = models.CharField(max_length=50)

	def __str__(self):
		return self.type_sol

class Parcelle(models.Model):
	terrain = models.ForeignKey(Terrain, on_delete=models.PROTECT)
	type_sol = models.ForeignKey(TypeSol, on_delete=models.PROTECT)
	libelle = models.CharField(max_length=50)
	superficie = models.DecimalField(max_digits=10, decimal_places=2)
	disponible = models.BooleanField(default=True)

	def __str__(self):
		return self.libelle

class Saisonnalite(models.Model):
	saison = models.CharField(max_length=50)

	def __str__(self):
		return self.saison

class Culture(models.Model):
	saisonnalite = models.ForeignKey(Saisonnalite, on_delete=models.PROTECT)
	libelle = models.CharField(max_length=50)
	variete = models.CharField(max_length=50)
	cycle = models.PositiveIntegerField()

	def __str__(self):
		return self.libelle

class TypeIntrant(models.Model):
	type_intrant = models.CharField(max_length=50)

	def __str__(self):
		return self.type_intrant

class Unite(models.Model):
	abbr = models.CharField(max_length=10)
	unite = models.CharField(max_length=50)

	def __str__(self):
		return self.unite

class Intrant(models.Model):
	unite = models.ForeignKey(Unite, on_delete=models.PROTECT)
	type_intrant = models.ForeignKey(TypeIntrant, on_delete=models.PROTECT)
	libelle = models.CharField(max_length=50)
	provenance = models.CharField(max_length=155, blank=True)

	def __str__(self):
		return self.libelle

class MethodeCulture(models.Model):
	methode = models.CharField(max_length=50)

	def __str__(self):
		return self.methode

class Plantation(models.Model):
	parcelle = models.ForeignKey(Parcelle, on_delete=models.PROTECT)
	culture = models.ForeignKey(Culture, on_delete=models.PROTECT)
	methode_culture = models.ForeignKey(MethodeCulture, on_delete=models.PROTECT)
	date_plantation = models.DateField()
	quantite = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f'{self.parcelle} {self.culture}'

class Recolte(models.Model):
	unite = models.ForeignKey(Unite, on_delete=models.PROTECT)
	date_recolte = models.DateField()
	quantite = models.DecimalField(max_digits=10, decimal_places=2)
	plantation = models.ForeignKey(Plantation, on_delete=models.PROTECT)

	def __str__(self):
		return self.plantation

class TypeSuivi(models.Model):
	type_suivi = models.CharField(max_length=50)

	def __str__(self):
		return self.type_suivi

class Suivi(models.Model):
	type_suivi = models.ForeignKey(TypeSuivi, on_delete=models.PROTECT)
	date = models.DateField(auto_now_add=True)
	details = models.TextField()
	plantation = models.ForeignKey(Plantation, on_delete=models.PROTECT)

	def __str__(self):
		return self.details

class ContenirPlantationIntrant(models.Model):
	plantation = models.ForeignKey(Plantation, on_delete=models.PROTECT)
	intrant = models.ForeignKey(Intrant, on_delete=models.PROTECT)
	date_application = models.DateField()
	cout = models.DecimalField(max_digits=12, decimal_places=2)
	quantite = models.DecimalField(max_digits=10, decimal_places=2)

	def __str__(self):
		return f'{self.plantation} {self.intrant}'


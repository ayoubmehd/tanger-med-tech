# Tanger med tech

## index
- [Tanger med tech](#tanger-med-tech)
	- [index](#index)
	- [run the project](#run-the-project)
	- [Cahier de charges](#cahier-de-charges)
		- [Fonctionalite principale](#fonctionalite-principale)
		- [Problématique](#problématique)
		- [Entités](#entités)
		- [Diagramme de classe](#diagramme-de-classe)

## run the project

1. clone this repo

	```copy
	git clone https://github.com/ayoubmehd/tanger-med-tech
	```
1. be sure that
   - your MongoDB server is running
   - you have yarn is installed globally run:
	```
	npm install -g yarn
	```

1. install dependencies

	```copy
	yarn
	```
1. start the development server
   ```copy
   yarn dev
   ```

## Cahier de charges

### Fonctionalite principale

- Manage la communication entre la cour/les entrepôt de port et les navires (ou cette container doit être dans un section de cour, ou dans cette entrepôt).
- Crée des rendez-vous pour un navire ou un camion

### Problématique
	
- gestion des quais
    - Un quais a des sections, chaque section doit être pour un catégorie spécifique.
    - Le container doit être présente dans un espace 3d avec les cordonnés X, Y et Z.
    - Les quais et les Entrepôts peut être d'importation ou d'exportation Chaque container passer une période de temps (24 heur), le client va payer un montant par heurs (500 $ / h).

- Rendez vous
    - Une navire sont responsable des containers d'exportation.
	- Une navire prendre un rendez vous, pour exporter les containers.
	- Un camion est responsable des containers d'importation Un camion prend une rendez vous, pour livrée les containers.

### Entités

- Global Setting
	- Max Période
	- Montant par heur
- Users
	- Username
	- Password
	- Rôle(Admin, Quai commander, cour manager, entrepôt manager )
- Entrepôts
    - Size
        - X en mètre
        - Y en mètre
        - Z en mètre
	- Containers
	- Catégorie
- Cour
	- Size avec unit m^2
- Sections
	- Catégorie
	- Containers
- Transporteurs
	- Client Name
	- Matricule
	- Type(camion, navire)
- Containers
	- Catégories
	- Location
	    - X
		- Y
		- Z
	- Section
	- Origin
	- Company
	- Type(exportation, importation)
	- Size
		- X en mètre
		- Y en mètre
		- Z en mètre
- Rendez-vous
	- Date
	- Container
	- Transporter
	- Done
- Catégories
    - Label

### Diagramme de classe

![Diagramme de classe](/TANGER%20MED%20TECH%20-%20Gestion%20des%20quais%20et%20prise%20de%20RDV.jpg)
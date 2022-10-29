# Présentation
Ce programme permet de rechercher (en récursive et sans limite de profondeur) les images dans le répertoire courant afin d'y remplacer une couleur.

Il est développé en Js peut être executé avec la commande node.

Libraries utilisées:
- findit-2 : pour rechercher les images dans le dossier courant
- replace-color: pour remplacer une couleur de l'image
- dotenv: pour recharger les variables d'environnement dans le process `node`

# Installation
## Nodejs
Ce programme a été développé et testé sur node server vresion LTS 18.12
### Installation sur windows
Télécharger à partir du site officiel: 
[Télécharger Nodejs](https://nodejs.org/en/download/)
### Installation sur Linux
```
sudo apt-get install nodejs
``` 
## Dépendences
Pour installer les différentes librairie du projet, il faudra exécuter les commandes suivantes:
```
npm install -g yarn
yarn install
```
# Lancement du programme
## Configuration des variables d'environnement
Créer le fichier `.env` dans le répertoire du projet et renseigner la liste des extensions des images comme suit:
```
IMAGE_EXSTENSIONS='.png'
```
/!\ Cette configuration permet traiter uniquement les images avec l'extension `.png`. Si par exemple vous que le programme traite les images `.png` et `.jpg`, alors il faut renseigner les valeurs comme suit:
```
'.png, .jpg`
```

Avant d'exécuter le programme, assurez-vous que le répertoire sur lequel est installé contient bien les images à traiter.
Pour exécuter le programme, lancer la commande suivante
```
yarn replacer
```
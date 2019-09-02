# transportor

### Informations sur les déplacements en région lausannoise

Cette application a été crée au cours de l'année 2019 afin d'être présentée pour le cours de *Visualisation de données* donné par Isaac Pante à l'Université de Lausanne.

## Comment se déplacer à Lausanne ?

Transportor est une service de planification des déplacements en transports publics, en voiture et à vélo dans la région lausannoise de manière interactive en fonction d'une date et d'une heure choisies.

-> image application générale

Une application de cartographie s'articule évidemment autour d'une carte qui représente la majorité de l'écran. A cela s'ajoutent différentes fonctions selon la nature du problème et du public cible. Trois fond de cartes sont disponibles selon les besoins. Il peuvent être affichés en appuyant sur le bouton en haut à droite de la carte. Il est aussi possible d'afficher ou non les marqueurs représentant des arrêts en cliquant sur le menu gris "Liste des lignes TL" en haut à gauche. Ce menu déroulant permet aussi d'afficher sur la cartes les différentes lignes des TL (dont le nom s'affiche en cliquant dessus).

Le but de l'application est le calcul d'itinéraires (transports public, voiture et vélo selon la date et l'heure). Les paramètres de calcul permettent de sélectionner des points de départ et d'arrivée de la manière suivante :

-  En choissisant le nom d'un arrêt de départ et d'arrivée (des Transports Lausannois)
-  En entrant une adresse de départ et d'arrivée. Il est possible d'écrire une adresse précise ou simplement le nom d'une localité par exemple.
-  En cliquant sur la carte ou en entrant des coordonnées. Un fois un marqueur placé, il est possible de le déplacer en le glissant sur la carte. Il est aussi possible de sélectionner un arrêt en cliquant sur l'icone du bus, celle-ci deviendra verte une fois sélectionnée.

Les différents trajets s'affichent sur la carte en couleur. Le bleu représente les transports publics, le rouge la marche, le jaune la voiture et le vert le vélo. La position actuelle de l'utilisateur est représentée sur la carte par un marqueur rouge "ici".

--> image avec 1 trajet 3 couleurs

### Tiroir "informations"

Une fois un itinéraire choisi et calculé, le tiroir informations donne des indications sur le trajet.

--> image boutons "infos sur..."

Les informations suivantes sont disponibles :

-  Heure de départ
-  Heure d'arrivée
-  Temps de trajet
-  Nombre de changements
-  Distance à pied
-  Liste des étapes
-  Barre qui représente la durée par étape (le temps de chaque étape s'affiche en passant la souris sur la barre)

### Isochrones

Une autre fonction est l'affichages d'isochrones. Un isochrone est un ligne qui détermine la distance réalisable en un temps donné. Il est possible d'afficher deux isochrones en choississant le temps de parcours maximal. Le point de départ se sélectionne comme pour les déplacements.

--> image exemple isochrone

## Fonctionnement

## 

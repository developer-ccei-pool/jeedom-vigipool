<p align="center">
  <a href="https://market.jeedom.com/index.php?v=d&p=market_display&id=4437/">
    <img src="https://market.jeedom.com/filestore/market/plugin/images/vigipool_icon.png" alt="Vigipool Jeedom Logo" width="150">
  </a>
</p>

<h3 align="center">Plugin Jeedom - Vigipool</h3>

<p align="center">
  Vigipool, l'appli innovante pour contrôler et piloter votre piscine à distance.
  <!-- <br>
  <a href="https://getbootstrap.com/docs/5.3/"><strong>Explore Bootstrap docs »</strong></a>
  <br>
  <br>
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/twbs/bootstrap/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
  ·
  <a href="https://themes.getbootstrap.com/">Themes</a>
  ·
  <a href="https://blog.getbootstrap.com/">Blog</a> -->
</p>

# Tutoriel pour utiliser le plugin Vigipool pour Jeedom

Lien vers le plugin : https://market.jeedom.com/index.php?v=d&p=market_display&id=4437

![Capture d’écran du 2024-04-09 10-40-44](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/4c7c2138-d1ce-4c43-a430-23591a7f6879)

## Ajouter un équipement

Après installer le Plugin Jeedom Vigipool
Vous allez recevoir un message disant "Voulez-vous aller sur la page de configuration de votre nouveau plugin ?" 
Cliquez sur OK

![Capture d’écran du 2024-04-09 10-40-59](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/6a457c3d-5d6e-44aa-a309-71f1a56a0ef5)

Ensuite, dans la fenêtre "État", à côté du label "Action", cliquez sur le bouton "Activer". 

![Capture d’écran du 2024-04-09 10-41-05](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/e1247bd8-2ff9-4480-8b7a-f48323f7ec6f)

Normalement, le bandeau de la fenêtre "État" est devenu vert et son "Status" est "Actif"

![Capture d’écran du 2024-04-09 10-41-14](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/62bbe62e-1211-411d-8a54-32ef3348e99e)

Aller dans le menu "Plugins" puis "Objets Connectés" puis "Vigipool"

![Capture d’écran du 2024-04-09 10-41-27](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/f9ccea3c-95fe-4da4-a4b6-7e9b86823823)

Cliquer sur "Ajouter"

![Capture d’écran du 2024-04-09 10-41-35](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/d6a7afbd-a4f3-4782-b55a-60d152d5cbcd)

Entrer le nom de l'équipement que vous voulez.
Si vous ne connaissez pas le nom de l'équipement, cela n'empêchera pas le plugin de fonctionner.
Dans notre exemple, ce sera un Tild
Cliquez sur OK.

![Capture d’écran du 2024-04-09 10-41-44](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/44a40d91-bc5f-4f59-a43a-0a1854b9193c)

Une fois dans le menu des "Paramètres généraux"
Pensez à choisir un Objet parent si vous voulez
Penser à activer les cases "Activer" et "Visible"

Pour que le Plugin se connecte à votre périphérique Vigipool, il faudra remplir obligatoirement les deux Paramètres suivants
- "Adresse IP de cet équipement"
- "ID de cet équipement"

Il y a plusieurs moyens pour le faire

- Automatiquement

Vous avez un bouton "Rechercher les produits Vigipool" qui va scanner toutes les adresses IP de votre réseau et va afficher dans la liste "Périphériques Vigipool détectés" ses résultats.

Le bouton "Rapide" est moins exhaustif que le bouton "Lent".

Vous pouvez ensuite cliquer sur le résultat pour compléter automatiquement "Adresse IP de cet équipement" et "ID de cet équipement".

- Manuellement

Vous pouvez trouver par vous-même l'IP et trouver l'ID sur l'application Mobile Vigipool

Si vous avez l'adresse IP de votre périphérique, mais pas l'ID, vous pouvez utiliser "Récupérer l'ID à partir de l'IP " après avoir rempli le paramètre Adresse IP de cet équipement

À la fin, n'oubliez pas de cliquer sur "Sauvegarder".

![Capture d’écran du 2024-04-09 10-44-06](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/69b46876-fb3f-48d2-b9cb-c1532624bb40)

## Redimensionner le Plugin

Une fois le plugin configuré, vous allez pouvoir le retrouver dans votre tableau de bord

Il y a de fortes chances que la taille de la fenêtre par défaut soit trop petite. Si c'est le cas, un message s'affichera pour vous prévenir.

Pour régler ce problème utilisé le crayon en haut a droit de la fenêtre pour l'agrandir

## Utiliser le plugin

Vous pouvez voir
- En haut à droite : la version de votre équipement
- À gauche : vous pouvez cliquer sur la roue dentée pour accéder à certaines options
- En bas à gauche : L'icône de connexion est verte, jaune, rouge ou grise en fonction de la qualité de la connexion avec le périphérique Vigipool

En dessous vont apparaitre en fonction des périphériques connecter les fonctionnalités similaires à l'application mobile Vigipool

![Capture d’écran du 2024-04-09 11-16-20](https://github.com/developer-ccei-pool/jeedom-vigipool/assets/127429327/897aea95-5448-4b7e-ab9c-5c151fffd7af)

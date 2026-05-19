# Produit

SAP Travel est une application compacte pour parcourir des voyages.

## Parcours Utilisateur Principaux

- L'utilisateur voit une liste de destinations avec ville, pays, description et prix.
- L'utilisateur filtre les destinations avec le champ de recherche.
- L'utilisateur selectionne une destination et arrive sur une page de detail.
- L'utilisateur revient de la page de detail vers la liste.

## Criteres D'Acceptation

- La liste affiche toutes les entrees de `webapp/model/travel.json`.
- La recherche correspond a la ville, au pays ou a la description.
- La selection du premier item navigue vers `#/detail/0`.
- La page de detail affiche ville, pays, date, prix et description.
- La navigation retour revient a la liste sans perdre le shell de l'application.

## Gout Produit

- Garder une UI simple et proche de Fiori.
- Preferer des flux liste/detail lisibles aux mises en page decoratives.
- Ajouter de nouveaux champs seulement s'ils ameliorent la decision de voyage.

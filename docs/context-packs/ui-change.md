# Pack De Contexte: Changement UI

Utiliser ce pack pour les vues XML, les libelles, le comportement de recherche et la mise en page visuelle.

## Charger

- fichier concerne dans `webapp/view/`
- controleur correspondant dans `webapp/controller/`
- `webapp/i18n/i18n.properties`
- bundles traduits pertinents lors de l'ajout ou du renommage de cles

## Forme UI Actuelle

- `App.view.xml` affiche le champ de recherche et la liste des destinations.
- `Detail.view.xml` affiche les champs de la destination selectionnee.
- Les libelles viennent des bundles i18n.

## Invariants

- Garder une interface simple et proche de Fiori.
- Preferer les controles SAPUI5 au HTML personnalise.
- Les nouveaux textes visibles par l'utilisateur doivent utiliser des cles i18n.
- Faire correspondre chaque vue avec son controleur prevu.

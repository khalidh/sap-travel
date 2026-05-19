# Pack De Contexte: Navigation

Utiliser ce pack pour le routing, la selection dans la liste, le binding de detail et la navigation retour.

## Charger

- `webapp/manifest.json`
- `webapp/view/App.view.xml`
- `webapp/controller/App.controller.js`
- `webapp/view/Detail.view.xml`
- `webapp/controller/Detail.controller.js`

## Flux Actuel

1. `App.view.xml` possede le `sap.m.App` avec l'id `app`.
2. La page de liste est deja presente dans la vue racine.
3. `itemPress` sur la liste appelle `App.controller.onItemPress`.
4. Le controleur lit le chemin de binding selectionne et navigue vers `detail/{travelId}`.
5. `Detail.controller` lie la vue a `/travels/{travelId}`.
6. La navigation retour revient dans l'historique ou vers la route vide.

## Invariants

- Ne pas ajouter de target de route qui recharge `App.view.xml` a l'interieur du `sap.m.App` racine.
- Les arguments de la route detail doivent rester compatibles avec `/travels/{index}`.
- La selection dans la liste doit naviguer via le router, pas avec des changements manuels de DOM ou d'URL.

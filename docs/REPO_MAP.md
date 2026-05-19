# Carte Du Depot

Utiliser ce document comme premier point de repere avant de modifier le projet.

## Surface Applicative

- `index.html` charge SAPUI5 depuis `https://ui5.sap.com`, associe le namespace `travel` a `./webapp` et place le composant dans `#content`.
- `webapp/Component.js` initialise le composant UI5, le modele JSON par defaut, le modele device et le router.
- `webapp/manifest.json` est la source de verite pour l'id de l'application, les modeles, les dependances, la vue racine et les routes.

## Flux UI

1. La vue racine est `travel.view.App`.
2. `App.view.xml` contient le `sap.m.App`, la page de liste des voyages, le champ de recherche et les items de liste.
3. `App.controller.js` filtre les items et navigue vers `detail/{travelId}`.
4. `Detail.view.xml` affiche les champs du voyage selectionne.
5. `Detail.controller.js` lie la vue de detail a `/travels/{travelId}` et gere le retour.

## Donnees Et Textes

- Modele par defaut: `webapp/model/travel.json`.
- Bundle principal: `webapp/i18n/i18n.properties`.
- Bundles anglais: `webapp/i18n/i18n_en.properties` et `webapp/i18n/i18n_en_US.properties`.

## Harnais

- `SKILL.md`: point d'entree Open Skills pour les outils qui consomment ce format.
- `AGENTS.md`: guide operationnel court pour les agents.
- `docs/ARCHITECTURE.md`: limites et regles de dependances.
- `docs/QUALITY.md`: checklist de validation et de revue.
- `docs/PRODUCT.md`: intention produit et criteres d'acceptation.
- `docs/DECISIONS/`: decisions durables.
- `tools/validate-repo.mjs`: controles executables.

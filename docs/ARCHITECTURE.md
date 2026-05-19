# Architecture

SAP Travel conserve la structure standard SAPUI5 et ajoute des regles de harnais autour.

## Couches

L'application est petite, donc les couches sont exprimees par repertoires:

- Entree: `index.html`
- Configuration applicative: `webapp/manifest.json`
- Cycle de vie du composant: `webapp/Component.js`
- Vues: `webapp/view/*.view.xml`
- Controleurs: `webapp/controller/*.controller.js`
- Donnees: `webapp/model/*.json`
- Textes: `webapp/i18n/*.properties`

## Direction Des Dependances

- Les vues declarent la structure et se lient aux modeles.
- Les controleurs gerent les evenements UI, le filtrage, le routing et le binding de vue.
- Les controleurs peuvent lire les arguments de route et les contextes de binding.
- Les controleurs ne doivent pas dupliquer les donnees de voyage deja presentes dans `travel.json`.
- Les textes visibles par l'utilisateur doivent rester dans les bundles i18n, sauf texte purement technique ou de test.

## Regles De Routing

- La vue racine contient le `sap.m.App` avec l'id `app`.
- La route vide represente la page de liste deja presente dans la vue racine.
- La navigation de detail utilise la route `detail/{travelId}`.
- Les targets de route dans `manifest.json` doivent pointer vers des vues XML existantes.

## Frontiere De Donnees

Le modele JSON local doit exposer:

```json
{
  "travels": [
    {
      "city": "...",
      "country": "...",
      "description": "...",
      "date": "...",
      "price": "..."
    }
  ]
}
```

Valider cette frontiere avec `npm run check`.

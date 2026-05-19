# Pack De Contexte: Changement De Donnees

Utiliser ce pack pour ajouter, supprimer ou remodeler les donnees de voyage.

## Charger

- `webapp/model/travel.json`
- vues qui se lient aux champs modifies
- controleurs qui filtrent, trient ou routent avec les champs modifies

## Contrat De Donnees Actuel

`webapp/model/travel.json` expose un tableau racine `travels`. Chaque entree de voyage doit contenir:

- `city`
- `country`
- `description`
- `date`
- `price`

## Invariants

- Garder les champs sous forme de chaines, sauf si l'UI et les validateurs sont mis a jour ensemble.
- Si un nouveau champ est affiche, ajouter les libelles dans i18n.
- Si la forme des donnees change, mettre a jour `tools/validate-repo.mjs` et `docs/ARCHITECTURE.md`.

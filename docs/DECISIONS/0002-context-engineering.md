# 0002 - Combiner Harness Engineering Et Context Engineering

## Statut

Acceptee.

## Contexte

Le harness engineering a rendu le depot verifiable, mais les agents ont aussi besoin d'une facon de choisir le bon sous-ensemble d'informations pour une tache. Charger toutes les docs pour chaque changement gaspille le contexte et peut distraire du code vraiment important.

## Decision

Ajouter une couche de context engineering:

- `docs/CONTEXT.md` definit comment le contexte est selectionne.
- `docs/context-packs/` stocke les lots de contexte propres a chaque tache.
- `AGENTS.md` dirige les agents vers le selecteur de contexte avant les docs plus profondes.
- `tools/validate-repo.mjs` verifie que les fichiers de contexte requis existent.

## Consequences

- Harness engineering et context engineering sont complementaires.
- Les futurs travaux d'agent doivent mettre a jour les packs de contexte quand un contexte manquant cree de la friction.
- Le projet doit preferer de petits packs de contexte a un grand manuel unique.

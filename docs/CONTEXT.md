# Context Engineering

Le context engineering controle ce qu'un agent lit avant d'agir. Le harness engineering fournit les rails et les controles du projet; le context engineering donne a chaque tache le plus petit contexte utile.

## Regle De Chargement Du Contexte

Ne pas lire tous les documents. Choisir un seul pack dans `docs/context-packs/`, puis ajouter uniquement les fichiers directement touches par la tache.

## Matrice Des Taches

| Tache | Lire D'abord | Lire Ensuite | Valider |
| --- | --- | --- | --- |
| Corriger la navigation ou le routing | `docs/context-packs/navigation.md` | `webapp/manifest.json`, vue/controleur concernes | `npm run check` |
| Modifier la liste, la recherche ou l'UI de detail | `docs/context-packs/ui-change.md` | vue XML concernee, controleur, bundle i18n | `npm run check` |
| Modifier les donnees de voyage | `docs/context-packs/data-change.md` | `webapp/model/travel.json`, vues qui lient les nouveaux champs | `npm run check` |
| Modifier les regles ou controles du depot | `docs/context-packs/harness-change.md` | `AGENTS.md`, `docs/QUALITY.md`, `tools/validate-repo.mjs` | `npm run check` |
| Modifier l'entree Open Skills | `docs/context-packs/harness-change.md` | `SKILL.md`, `AGENTS.md`, `docs/QUALITY.md`, `tools/validate-repo.mjs` | `npm run check` |

## Budget De Contexte

- Commencer avec un seul pack.
- Ajouter les fichiers applicatifs exacts necessaires au changement.
- Ajouter `docs/ARCHITECTURE.md` seulement si le changement traverse les limites vue, controleur, routing ou modele.
- Ajouter `docs/PRODUCT.md` seulement si le comportement ou les parcours utilisateur changent.
- Ajouter une decision quand une regle doit survivre aux futurs changements.

## Contrat De Sortie

Tout changement non trivial doit laisser au moins un de ces elements:

- code mis a jour avec `npm run check` passant;
- pack de contexte mis a jour quand l'agent avait besoin d'un contexte manquant;
- controle de harnais mis a jour quand le probleme peut etre detecte mecaniquement;
- decision enregistree quand le projet choisit une regle durable.

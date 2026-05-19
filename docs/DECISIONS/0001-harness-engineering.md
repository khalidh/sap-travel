# 0001 - Harness Engineering Pour SAP Travel

## Statut

Acceptee.

## Contexte

Le projet est petit, mais les futurs changements doivent rester faciles a comprendre et a verifier pour un agent. Un grand fichier d'instructions deviendrait vite obsolete; la connaissance du depot est donc separee en fichiers courts et focalises.

## Decision

Utiliser un harnais leger:

- `AGENTS.md` reste court et pointe vers les docs durables.
- `docs/` stocke la connaissance produit, architecture, qualite et carte du depot.
- `tools/validate-repo.mjs` applique les invariants qui ne doivent pas dependre de la memoire.
- `npm run check` est la boucle de feedback par defaut.

## Consequences

- Le travail futur doit ameliorer le harnais quand il revele un contexte manquant.
- L'application garde sa structure SAPUI5 dans `webapp/`.
- Les changements doivent rester assez petits pour etre valides rapidement.

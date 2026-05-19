# Pack De Contexte: Changement De Harnais

Utiliser ce pack pour modifier les regles du depot, les controles, la documentation ou le guidage des agents.

## Charger

- `SKILL.md`
- `AGENTS.md`
- `docs/CONTEXT.md`
- `docs/QUALITY.md`
- `tools/validate-repo.mjs`
- decision pertinente dans `docs/DECISIONS/`

## Harnais Actuel

- `SKILL.md` expose le depot comme une skill compatible Open Skills.
- `AGENTS.md` est le point d'entree court.
- `docs/CONTEXT.md` selectionne le contexte propre a chaque tache.
- `docs/context-packs/` contient des lots de contexte focalises.
- `tools/validate-repo.mjs` applique les invariants mecaniques.
- `npm run check` est la boucle de feedback par defaut.

## Invariants

- Garder `AGENTS.md` court.
- Placer la connaissance durable dans `docs/`.
- Preferer les controles executables aux rappels.
- Si un controle devient trop bruyant, l'ameliorer plutot que supprimer silencieusement la regle.

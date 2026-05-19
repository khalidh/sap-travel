# 0003 - Ajouter Un Point D'Entree Open Skills

## Statut

Acceptee.

## Contexte

Le depot etait deja organise pour les agents avec `AGENTS.md`, `docs/CONTEXT.md`, des packs de contexte et un harnais executable. Certains outils suivent toutefois le format Open Skills et cherchent un fichier `SKILL.md` avec un frontmatter minimal pour decider quand charger les instructions.

## Decision

Ajouter `SKILL.md` a la racine du depot comme point d'entree compatible Open Skills:

- le frontmatter expose `name` et `description`;
- le corps reste court et renvoie vers les packs de contexte existants;
- `AGENTS.md` reste le guide operationnel court pour les agents du depot;
- `tools/validate-repo.mjs` verifie la presence et le frontmatter minimal de `SKILL.md`.

## Consequences

- Le projet peut etre compris par les outils qui consomment Open Skills sans dupliquer toute la documentation.
- La connaissance durable continue de vivre dans `docs/`.
- Toute evolution des regles agentiques doit garder `SKILL.md`, `AGENTS.md` et `docs/CONTEXT.md` alignes.

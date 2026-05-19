# SAP Travel

Petite application de demonstration SAPUI5 pour parcourir des destinations de voyage.

## Lancer

```bash
npm start
```

Ouvrir `http://localhost:8080`.

Si le port `8080` est deja utilise, le serveur de developpement choisit automatiquement le prochain port disponible et affiche l'URL.

## Verifier

```bash
npm run check
```

Le script de verification valide le harnais du depot: structure de l'application, routing du manifest, liens vues/controleurs, couverture i18n et forme du modele de voyages.

## Harness Engineering Et Context Engineering

Ce depot est organise pour qu'un agent de code puisse le comprendre, le modifier et le valider rapidement:

- `SKILL.md` expose le projet comme une skill compatible Open Skills pour les outils qui utilisent ce format.
- `AGENTS.md` est le point d'entree court.
- `docs/CONTEXT.md` indique aux agents quel contexte charger pour chaque tache.
- `docs/context-packs/` contient de petits lots de contexte specialises par type de tache.
- `docs/REPO_MAP.md` est la carte de navigation.
- `docs/ARCHITECTURE.md` definit les limites durables.
- `docs/QUALITY.md` definit ce que "bon" signifie ici.
- `docs/DECISIONS/` enregistre les decisions qui doivent survivre aux futurs changements.
- `tools/validate-repo.mjs` transforme les regles importantes en controles executables.

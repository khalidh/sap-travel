# Qualite

Dans ce depot, la qualite signifie que l'application reste comprehensible pour les humains et les agents.

## Controles Requis

Lancer:

```bash
npm run check
```

Le harnais verifie actuellement:

- `package.json`, `manifest.json` et `travel.json` sont du JSON valide.
- `SKILL.md` existe avec un frontmatter Open Skills minimal (`name` et `description`).
- Les fichiers et repertoires SAPUI5 requis existent.
- Les noms de controleurs declares dans les vues XML resolvent vers des fichiers controleurs.
- Les targets de route du manifest resolvent vers des vues existantes.
- Les cles i18n utilisees dans les vues XML existent dans le bundle de base.
- Les entrees du modele de voyages ont les champs attendus.
- Les fichiers JavaScript sont analyses syntaxiquement sans executer l'application UI5.

## Checklist De Revue

- Le changement preserve-t-il les parcours liste, recherche, detail et retour?
- Les nouveaux textes passent-ils par i18n?
- Une nouvelle vue a-t-elle un controleur correspondant quand c'est necessaire?
- Une nouvelle route a-t-elle une vue cible?
- Le changement ajoute-t-il ou met-il a jour un controle de harnais s'il introduit un nouvel invariant?
- `SKILL.md` reste-t-il concis et aligne avec `docs/CONTEXT.md`?

## Regle De Nettoyage

Quand le meme type de bug apparait deux fois, ajouter un controle mecanique ou documenter l'invariant. Ne pas compter sur la memoire.

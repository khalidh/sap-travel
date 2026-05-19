# Guide Agent SAP Travel

Ce fichier est le point d'entree pour les agents qui travaillent dans ce depot. Il doit rester court: la connaissance durable vit dans `docs/`.

## Mission

SAP Travel est une petite application SAPUI5 de liste et de detail de voyages. Les changements doivent preserver une experience simple de style Fiori: afficher les destinations, les rechercher, naviguer vers une page de detail, puis revenir proprement.

## Carte Du Depot

- `index.html`: point d'entree local dans le navigateur et bootstrap UI5.
- `webapp/manifest.json`: metadonnees de l'application, modeles, routing et dependances UI5.
- `webapp/Component.js`: initialisation du composant, modele device, modele de donnees et router.
- `webapp/view/`: vues XML. Les vues doivent avoir un controleur correspondant dans `webapp/controller/`.
- `webapp/controller/`: controleurs UI. Ils gerent les interactions utilisateur et le routing.
- `webapp/model/travel.json`: donnees locales utilisees par le modele JSON par defaut.
- `webapp/i18n/`: textes visibles par l'utilisateur.
- `docs/`: intention produit, contraintes d'architecture, notes qualite et decisions.
- `tools/validate-repo.mjs`: controles mecaniques du depot.

## Regles De Contexte

- Les outils compatibles Open Skills peuvent commencer par `SKILL.md`; ce fichier pointe vers les memes packs de contexte.
- Commencer par lire `docs/CONTEXT.md`, puis charger uniquement le pack de contexte qui correspond a la tache.
- Utiliser `docs/REPO_MAP.md` seulement quand il faut naviguer dans des fichiers inconnus.
- Ne pas charger tous les documents par defaut. Le contexte doit etre selectionne, pas accumule.

## Regles De Travail

- Ne pas ajouter de grandes instructions ici. Ajouter la connaissance durable dans `docs/`.
- Garder le code SAPUI5 de l'application dans `webapp/`.
- Preferer les changements petits et verifiables mecaniquement.
- Lancer `npm run check` apres tout changement de structure, routing, vues, controleurs, i18n ou donnees modele.
- Si un agent bloque, ameliorer le harnais: ajouter un controle, mettre a jour une doc ou capturer la decision.

## Invariants D'Architecture

- Une vue cible de route dans `manifest.json` doit exister dans `webapp/view/`.
- Toute vue XML avec `controllerName` doit avoir un fichier controleur correspondant.
- Les libelles visibles par l'utilisateur doivent venir de `webapp/i18n/i18n.properties`.
- `webapp/model/travel.json` doit exposer un tableau racine `travels`.
- Chaque voyage doit contenir `city`, `country`, `description`, `date` et `price`.

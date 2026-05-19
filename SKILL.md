---
name: sap-travel
description: Use this skill when working on the SAP Travel SAPUI5 sample application, including travel list UI, search, detail navigation, local travel data, i18n labels, repository harness checks, or project context engineering.
---

# SAP Travel Skill

SAP Travel is a small SAPUI5 application for browsing travel destinations. Preserve the simple Fiori-style flow: list destinations, search them, open a detail page, and return cleanly.

## First Steps

1. Read `docs/CONTEXT.md`.
2. Load exactly one context pack from `docs/context-packs/` that explicitly addresses the type of change being made (for example UI, data, or navigation).
3. Add only the specific application files needed for the change.
4. Run `npm run check` after structural, routing, view, controller, i18n, model, documentation, or harness changes.

## Context Packs

- Navigation or routing: read `docs/context-packs/navigation.md`, then `webapp/manifest.json` and the affected view/controller.
- List, search, or detail UI: read `docs/context-packs/ui-change.md`, then the affected XML view, controller, and `webapp/i18n/i18n.properties`.
- Travel data: read `docs/context-packs/data-change.md`, then `webapp/model/travel.json` and any views binding new fields.
- Repository rules, docs, validation, or this skill: read `docs/context-packs/harness-change.md`.
- Then review the relevant files, such as `AGENTS.md`, `docs/QUALITY.md`, or `tools/validate-repo.mjs`.

Use `docs/REPO_MAP.md` only when you need help navigating unfamiliar files.

## Project Map

- `index.html`: local browser entry point and UI5 bootstrap.
- `webapp/manifest.json`: application metadata, models, dependencies, root view, and routing.
- `webapp/Component.js`: component lifecycle, device model, data model, and router initialization.
- `webapp/view/`: XML views. Views with `controllerName` must have matching controllers.
- `webapp/controller/`: UI event handling, search filtering, routing, and view binding.
- `webapp/model/travel.json`: local JSON model with a top-level `travels` array.
- `webapp/i18n/`: user-visible labels.
- `docs/`: product intent, architecture, quality, context packs, and decisions.
- `tools/validate-repo.mjs`: mechanical repository checks.

## Invariants

- Route targets in `webapp/manifest.json` must resolve to XML views in `webapp/view/`.
- XML views with `controllerName` must resolve to controller files in `webapp/controller/`.
- User-visible labels belong in `webapp/i18n/i18n.properties`.
- `webapp/model/travel.json` must expose a top-level `travels` array.
- Each travel entry must include non-empty string values for `city`, `country`, `description`, `date`, and `price`.
- Keep durable knowledge in `docs/`; keep `AGENTS.md` and this `SKILL.md` concise.

## Validation

Run:

```bash
npm run check
```

The harness checks required files, manifest route targets, XML view/controller links, i18n keys, travel model shape, basic JavaScript syntax, and the presence of this Open Skills entry point.

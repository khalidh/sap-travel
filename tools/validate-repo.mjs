import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const errors = [];

function fail(message) {
    errors.push(message);
}

function readText(relativePath) {
    return readFileSync(join(root, relativePath), "utf8");
}

function readJson(relativePath) {
    try {
        return JSON.parse(readText(relativePath));
    } catch (error) {
        fail(`${relativePath} is not valid JSON: ${error.message}`);
        return null;
    }
}

function assertExists(relativePath) {
    if (!existsSync(join(root, relativePath))) {
        fail(`Missing required path: ${relativePath}`);
    }
}

function parseProperties(relativePath) {
    const content = readText(relativePath);
    const keys = new Set();

    for (const line of content.split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#") || trimmed.startsWith("!")) {
            continue;
        }

        const match = trimmed.match(/^([^:=\s]+)\s*[:=]/);

        if (match) {
            keys.add(match[1]);
        }
    }

    return keys;
}

function findI18nKeys(relativePath) {
    const content = readText(relativePath);
    const keys = new Set();
    const pattern = /\{i18n>(?:\/)?([^}]+)\}/g;
    let match;

    while ((match = pattern.exec(content)) !== null) {
        keys.add(match[1]);
    }

    return keys;
}

function parseSkillFrontmatter(relativePath) {
    const content = readText(relativePath);
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);

    if (!match) {
        fail(`${relativePath} must start with Open Skills frontmatter.`);
        return {};
    }

    const metadata = {};

    for (const line of match[1].split(/\r?\n/)) {
        const propertyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.+)$/);

        if (propertyMatch) {
            metadata[propertyMatch[1]] = propertyMatch[2].trim();
        }
    }

    return metadata;
}

for (const path of [
    "SKILL.md",
    "AGENTS.md",
    "README.md",
    "docs/REPO_MAP.md",
    "docs/CONTEXT.md",
    "docs/ARCHITECTURE.md",
    "docs/PRODUCT.md",
    "docs/QUALITY.md",
    "docs/context-packs/navigation.md",
    "docs/context-packs/ui-change.md",
    "docs/context-packs/data-change.md",
    "docs/context-packs/harness-change.md",
    "docs/DECISIONS/0001-harness-engineering.md",
    "docs/DECISIONS/0002-context-engineering.md",
    "docs/DECISIONS/0003-open-skills-entrypoint.md",
    "index.html",
    "package.json",
    "webapp/Component.js",
    "webapp/manifest.json",
    "webapp/view/App.view.xml",
    "webapp/view/Detail.view.xml",
    "webapp/controller/App.controller.js",
    "webapp/controller/Detail.controller.js",
    "webapp/model/travel.json",
    "webapp/i18n/i18n.properties",
    "tools/serve.mjs"
]) {
    assertExists(path);
}

const packageJson = readJson("package.json");
const manifest = readJson("webapp/manifest.json");
const travelModel = readJson("webapp/model/travel.json");

if (packageJson?.scripts?.check !== "npm run check:harness") {
    fail("package.json must expose `npm run check` as the default harness check.");
}

const agentGuide = readText("AGENTS.md");

if (!agentGuide.includes("docs/CONTEXT.md")) {
    fail("AGENTS.md must point agents to docs/CONTEXT.md.");
}

const contextGuide = readText("docs/CONTEXT.md");
const skillMetadata = parseSkillFrontmatter("SKILL.md");

for (const field of ["name", "description"]) {
    if (!skillMetadata[field]) {
        fail(`SKILL.md frontmatter must define ${field}.`);
    }
}

for (const contextPack of [
    "docs/context-packs/navigation.md",
    "docs/context-packs/ui-change.md",
    "docs/context-packs/data-change.md",
    "docs/context-packs/harness-change.md"
]) {
    if (!contextGuide.includes(contextPack)) {
        fail(`docs/CONTEXT.md must reference ${contextPack}.`);
    }
}

if (manifest) {
    const rootViewName = manifest["sap.ui5"]?.rootView?.viewName;

    if (rootViewName !== "travel.view.App") {
        fail("manifest rootView.viewName must be travel.view.App.");
    }

    const targets = manifest["sap.ui5"]?.routing?.targets ?? {};

    for (const [targetName, target] of Object.entries(targets)) {
        const viewName = target.viewName;

        if (!viewName) {
            fail(`Route target ${targetName} is missing viewName.`);
            continue;
        }

        assertExists(`webapp/view/${viewName}.view.xml`);
    }
}

for (const viewPath of ["webapp/view/App.view.xml", "webapp/view/Detail.view.xml"]) {
    const xml = readText(viewPath);
    const controllerMatch = xml.match(/controllerName="([^"]+)"/);

    if (!controllerMatch) {
        continue;
    }

    const controllerPath = controllerMatch[1]
        .replace(/^travel\.controller\./, "webapp/controller/")
        .replace(/\./g, "/") + ".controller.js";

    assertExists(controllerPath);

    const i18nKeys = parseProperties("webapp/i18n/i18n.properties");

    for (const key of findI18nKeys(viewPath)) {
        if (!i18nKeys.has(key)) {
            fail(`${viewPath} references missing i18n key: ${key}`);
        }
    }
}

if (!Array.isArray(travelModel?.travels)) {
    fail("webapp/model/travel.json must contain a top-level travels array.");
} else {
    travelModel.travels.forEach((travel, index) => {
        for (const field of ["city", "country", "description", "date", "price"]) {
            if (typeof travel[field] !== "string" || travel[field].trim() === "") {
                fail(`travels[${index}].${field} must be a non-empty string.`);
            }
        }
    });
}

for (const controllerPath of [
    "webapp/Component.js",
    "webapp/controller/App.controller.js",
    "webapp/controller/Detail.controller.js"
]) {
    try {
        new Function(readText(controllerPath));
    } catch (error) {
        fail(`${controllerPath} failed JavaScript syntax check: ${error.message}`);
    }
}

if (errors.length > 0) {
    console.error("Harness validation failed:");

    for (const error of errors) {
        console.error(`- ${error}`);
    }

    process.exit(1);
}

console.log("Harness validation passed.");

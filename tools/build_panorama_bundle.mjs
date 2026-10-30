import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const sourceRoot = path.join(repoRoot, "web_src");
const outputPath = path.join(repoRoot, "web", "panorama_suite.js");
const entryModuleId = "./main.js";
const externalSpecs = new Set([
  "../../scripts/app.js",
  "../../scripts/api.js",
]);

const moduleCache = new Map();
const orderedModuleIds = [];
const visiting = new Set();

function normalizeModuleId(moduleId) {
  const normalized = path.posix.normalize(moduleId);
  return normalized.startsWith(".") ? normalized : `./${normalized}`;
}

function resolveImport(specifier, importerId) {
  if (!specifier.startsWith(".")) return null;
  const importerDir = importerId ? path.posix.dirname(importerId) : ".";
  return normalizeModuleId(path.posix.join(importerDir, specifier));
}

function parseImportClause(clauseRaw) {
  const clause = String(clauseRaw || "").trim();
  if (!clause) return { kind: "side-effect" };
  if (clause.startsWith("* as ")) {
    return { kind: "namespace", local: clause.slice(5).trim() };
  }
  if (clause.startsWith("{")) {
    return {
      kind: "named",
      bindings: clause
        .slice(1, -1)
        .split(",")
        .map((part) => part.trim())
        .filter(Boolean)
        .map((part) => {
          const [imported, local] = part.split(/\s+as\s+/);
          return {
            imported: imported.trim(),
            local: (local || imported).trim(),
          };
        }),
    };
  }
  throw new Error(`Unsupported import clause: ${clause}`);
}

function parseExportClause(clauseRaw) {
  return String(clauseRaw || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [local, exported] = part.split(/\s+as\s+/);
      return {
        local: local.trim(),
        exported: (exported || local).trim(),
      };
    });
}

async function collectModule(moduleId) {
  if (moduleCache.has(moduleId)) return moduleCache.get(moduleId);
  if (visiting.has(moduleId)) {
    throw new Error(`Circular dependency detected while bundling ${moduleId}`);
  }
  visiting.add(moduleId);

  const absPath = path.join(sourceRoot, moduleId.slice(2));
  const source = await fs.readFile(absPath, "utf-8");
  const imports = [];
  const exports = [];

  let code = source.replace(
    /^import\s+([\s\S]*?)\s+from\s+["']([^"']+)["'];?\s*$/gm,
    (_, clauseRaw, specifierRaw) => {
      imports.push({
        specifier: String(specifierRaw).trim(),
        importInfo: parseImportClause(clauseRaw),
      });
      return "";
    },
  );

  code = code.replace(
    /^import\s+["']([^"']+)["'];?\s*$/gm,
    (_, specifierRaw) => {
      imports.push({
        specifier: String(specifierRaw).trim(),
        importInfo: { kind: "side-effect" },
      });
      return "";
    },
  );

  code = code.replace(/\bexport\s+function\s+([A-Za-z0-9_$]+)\s*\(/g, (_, name) => {
    exports.push({ local: name, exported: name });
    return `function ${name}(`;
  });
  code = code.replace(/\bexport\s+const\s+([A-Za-z0-9_$]+)\s*=/g, (_, name) => {
    exports.push({ local: name, exported: name });
    return `const ${name} =`;
  });
  code = code.replace(/\bexport\s+\{([^}]+)\};?/g, (_, clauseRaw) => {
    exports.push(...parseExportClause(clauseRaw));
    return "";
  });

  for (const imported of imports) {
    if (externalSpecs.has(imported.specifier)) continue;
    const targetId = resolveImport(imported.specifier, moduleId);
    if (!targetId) {
      throw new Error(`Unsupported import "${imported.specifier}" in ${moduleId}`);
    }
    await collectModule(targetId);
  }

  const record = {
    id: moduleId,
    imports,
    exports,
    code: code.trimEnd(),
  };
  moduleCache.set(moduleId, record);
  orderedModuleIds.push(moduleId);
  visiting.delete(moduleId);
  return record;
}

function renderImportLine(imported) {
  const { specifier, importInfo } = imported;
  const sourceExpr = externalSpecs.has(specifier)
    ? `__pano_external[${JSON.stringify(specifier)}]`
    : `__pano_require(${JSON.stringify(resolveImport(specifier, imported.ownerId))})`;
  if (importInfo.kind === "side-effect") return `${sourceExpr};`;
  if (importInfo.kind === "namespace") return `const ${importInfo.local} = ${sourceExpr};`;
  const fields = importInfo.bindings
    .map(({ imported: importedName, local }) => (importedName === local ? importedName : `${importedName}: ${local}`))
    .join(", ");
  return `const { ${fields} } = ${sourceExpr};`;
}

function renderModule(record) {
  const importLines = record.imports.map((imported) => renderImportLine({ ...imported, ownerId: record.id }));
  const exportLines = record.exports.map(({ local, exported }) => `  __exports.${exported} = ${local};`);
  const codeLines = record.code
    ? record.code.split("\n").map((line) => `  ${line}`)
    : [];
  return [
    `__pano_modules[${JSON.stringify(record.id)}] = (__exports, __pano_require) => {`,
    ...importLines.map((line) => `  ${line}`),
    ...(importLines.length && codeLines.length ? [""] : []),
    ...codeLines,
    ...(codeLines.length && exportLines.length ? [""] : []),
    ...exportLines,
    "};",
    "",
  ].join("\n");
}

await collectModule(entryModuleId);

const moduleRecords = orderedModuleIds.map((moduleId) => moduleCache.get(moduleId));
const bundle = [
  'import * as __pano_app from "../../scripts/app.js";',
  'import * as __pano_api from "../../scripts/api.js";',
  "",
  "const __pano_external = {",
  '  "../../scripts/app.js": __pano_app,',
  '  "../../scripts/api.js": __pano_api,',
  "};",
  "const __pano_modules = Object.create(null);",
  "const __pano_cache = Object.create(null);",
  "",
  "function __pano_require(moduleId) {",
  "  if (__pano_cache[moduleId]) return __pano_cache[moduleId];",
  "  const factory = __pano_modules[moduleId];",
  "  if (!factory) throw new Error(`Unknown Panorama module: ${moduleId}`);",
  "  const exports = {};",
  "  __pano_cache[moduleId] = exports;",
  "  factory(exports, __pano_require);",
  "  return exports;",
  "}",
  "",
  ...moduleRecords.map((record) => renderModule(record)),
  `__pano_require(${JSON.stringify(entryModuleId)});`,
  "",
].join("\n");

await fs.writeFile(outputPath, bundle, "utf-8");
console.log(`Wrote ${path.relative(repoRoot, outputPath)}`);

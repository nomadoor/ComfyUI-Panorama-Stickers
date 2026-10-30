import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// The static imports between the modules of web_src, read from their text. Tests of the import structure use it.
export const SRC = fileURLToPath(new URL("../web_src/", import.meta.url));
const STATIC_IMPORT = /^\s*(?:import|export)\s+(?:[^'";]*?\s+from\s+)?["']([^"']+)["']/gm;

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) return walk(file);
  return /\.(js|vue)$/.test(entry.name) ? [file] : [];
});

function scriptOf(file) {
  const text = readFileSync(file, "utf8");
  if (!file.endsWith(".vue")) return text;
  return [...text.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]).join("\n");
}

// Each module's absolute path to the modules it imports. import() is not an edge: it is the lazy chunk boundary.
export function importGraph() {
  const files = walk(SRC);
  const graph = new Map(files.map((file) => [file, []]));
  for (const file of files) {
    for (const [, from] of scriptOf(file).matchAll(STATIC_IMPORT)) {
      if (!from.startsWith(".")) continue;
      const target = [".js", ".vue", ""].map((ext) => path.resolve(path.dirname(file), from) + ext).find((f) => graph.has(f));
      if (target && !graph.get(file).includes(target)) graph.get(file).push(target);
    }
  }
  return graph;
}

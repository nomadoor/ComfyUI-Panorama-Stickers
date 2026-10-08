import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const SRC = fileURLToPath(new URL("../web_src/", import.meta.url));
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

// The static imports between the modules of web_src. import() is not an edge: it is the lazy chunk boundary.
function importGraph() {
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

function findCycle(graph) {
  const state = new Map();
  const trail = [];
  const visit = (node) => {
    state.set(node, "open");
    trail.push(node);
    for (const next of graph.get(node)) {
      if (state.get(next) === "open") return [...trail.slice(trail.indexOf(next)), next];
      if (!state.has(next)) {
        const cycle = visit(next);
        if (cycle) return cycle;
      }
    }
    trail.pop();
    state.set(node, "done");
    return null;
  };
  for (const node of graph.keys()) {
    const cycle = !state.has(node) && visit(node);
    if (cycle) return cycle;
  }
  return null;
}

test("findCycle finds a cycle and accepts a DAG", () => {
  assert.deepEqual(findCycle(new Map([["a", ["b"]], ["b", ["c"]], ["c", ["a"]]])), ["a", "b", "c", "a"]);
  assert.equal(findCycle(new Map([["a", ["b", "c"]], ["b", ["c"]], ["c", []]])), null);
});

test("the modules of web_src import each other without a cycle", () => {
  const graph = importGraph();
  const edges = [...graph.values()].reduce((count, targets) => count + targets.length, 0);
  assert.ok(graph.size > 100 && edges > 400, `parsed ${graph.size} modules and ${edges} imports`);
  const cycle = findCycle(graph);
  assert.equal(cycle, null, `import cycle: ${cycle?.map((file) => path.relative(SRC, file)).join(" -> ")}`);
});

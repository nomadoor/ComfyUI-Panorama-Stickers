import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { SRC, importGraph } from "./web_src_imports.mjs";

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

// The structural rules of web_src and web/*.css: the import graph, name lists, and what the UI code must not do.
// Each rule names the spec that owns it. The rules read the source as a graph or a list of names, never as the
// exact text of an implementation.
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const SRC = fileURLToPath(new URL("../web_src/", import.meta.url));
const WEB = fileURLToPath(new URL("../web/", import.meta.url));

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(dir, entry.name);
  if (entry.isDirectory()) return walk(file);
  return /\.(js|vue)$/.test(entry.name) ? [file] : [];
});
const FILES = walk(SRC);
const rel = (file) => path.relative(SRC, file).split(path.sep).join("/");
const text = (name) => readFileSync(path.join(SRC, name), "utf8");
const scriptOf = (file) => {
  const source = readFileSync(file, "utf8");
  if (!file.endsWith(".vue")) return source;
  return [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]).join("\n");
};

// Each module's static imports: the specifier, the module it resolves to (relative ones), and the names it binds.
// import() is not an import here: it is the lazy chunk boundary.
const STATIC_IMPORT = /^\s*(?:import|export)\s+(?:([^'";]*?)\s+from\s+)?["']([^"']+)["']/gm;
const IMPORTS = new Map(FILES.map((file) => [rel(file), [...scriptOf(file).matchAll(STATIC_IMPORT)].map(([, clause = "", spec]) => {
  const target = spec.startsWith(".")
    ? [".js", ".vue", ""].map((ext) => path.resolve(path.dirname(file), spec) + ext).find((f) => FILES.includes(f))
    : null;
  const names = [...(clause.match(/\{([^}]*)\}/)?.[1] ?? "").matchAll(/([\w$]+)(?:\s+as\s+[\w$]+)?/g)].map((m) => m[1]);
  return { spec, target: target && rel(target), names };
})]));
const graph = new Map([...IMPORTS].map(([file, list]) => [file, [...new Set(list.map((i) => i.target).filter(Boolean))]]));

function findCycle(edges) {
  const state = new Map();
  const trail = [];
  const visit = (node) => {
    state.set(node, "open");
    trail.push(node);
    for (const next of edges.get(node)) {
      if (state.get(next) === "open") return [...trail.slice(trail.indexOf(next)), next];
      const cycle = !state.has(next) && visit(next);
      if (cycle) return cycle;
    }
    trail.pop();
    state.set(node, "done");
    return null;
  };
  for (const node of edges.keys()) {
    const cycle = !state.has(node) && visit(node);
    if (cycle) return cycle;
  }
  return null;
}

// docs/editor-architecture.md "Dependency rules": the static imports of web_src have no cycle.
test("the modules of web_src import each other without a cycle", () => {
  const edges = [...graph.values()].reduce((count, targets) => count + targets.length, 0);
  assert.ok(graph.size > 100 && edges > 400, `parsed ${graph.size} modules and ${edges} imports`);
  assert.equal(findCycle(graph)?.join(" -> ") ?? null, null);
});

// ADR 0044 "新旧の境": the new UI and the old UI do not import each other (web_src/main.js imports both).
const OLD_UI_FILES = [
  "pano_editor.js",
  "pano_editor_ui_state.js",
  "modal_shell_presets.js",
  ...[
    "PanoModal", "PanoToolRail", "PanoFrameRail", "PanoFrameRollKnob", "PanoPaintDock", "PanoPaintOverlays",
    "PanoSidePanel", "PanoSelectionMenu", "PanoSegments", "PanoConfirmDialog", "PanoTooltip", "PanoImageFilePicker",
    "PanoFloatingRight", "PanoViewToggle", "PanoUpstreamOrigin", "PanoEasingGraph", "PanoTimeline",
    "PanoTimelineGroup", "PanoCutoutAspectPicker",
  ].map((name) => `components/${name}.vue`),
];
test("the new UI and the old UI do not import each other", () => {
  for (const name of OLD_UI_FILES) assert.ok(existsSync(path.join(SRC, name)), `${name} is gone: update ADR 0044's list`);
  const isOld = (name) => OLD_UI_FILES.includes(name) || /^editor\/[^/]+\.js$/.test(name);
  const isNew = (name) => /^(studio|components\/studio)\//.test(name);
  const crossings = [...graph].flatMap(([from, targets]) => targets
    .filter((to) => (isNew(from) && isOld(to)) || (isOld(from) && isNew(to)))
    .map((to) => `${from} -> ${to}`));
  assert.deepEqual(crossings, []);
});

// docs/editor-architecture.md "Dependency rules": editor/*.js import neither pano_editor.js, ComfyUI's app / api,
// nor each other, except the modules without behavior.
const EDITOR_SHARED = new Set(["editor/constants.js", "editor/helpers.js", "editor/ui_settings.js", "editor/video_thumbnail_cache.js"]);
const EDITOR_MODULES = [...IMPORTS.keys()].filter((name) => /^editor\/[^/]+\.js$/.test(name));
test("the editor modules depend on the libraries of web_src, never on pano_editor.js, ComfyUI or each other", () => {
  assert.ok(EDITOR_MODULES.length > 20);
  for (const file of EDITOR_MODULES) {
    for (const { spec, target } of IMPORTS.get(file)) {
      assert.ok(!spec.startsWith("../../"), `${file} imports ${spec}: ComfyUI's app and api come through deps`);
      assert.notEqual(target, "pano_editor.js", file);
      if (target?.startsWith("editor/")) assert.ok(EDITOR_SHARED.has(target), `${file} imports ${target}: modules call each other through connect()`);
    }
  }
});

// docs/editor-architecture.md "Module rules": showEditor makes every editor factory once, through createEditorModules.
test("every editor factory is in pano_editor.js's createEditorModules list once", () => {
  const made = text("pano_editor.js").match(/createEditorModules\(\{[\s\S]*?\}, \[([\s\S]*?)\]\)/)[1].split(/[\s,]+/).filter(Boolean);
  const factories = EDITOR_MODULES.flatMap((file) => [...text(file).matchAll(/^export function (create\w+)\(deps\)/gm)].map((m) => m[1]));
  assert.ok(factories.length > 20);
  assert.deepEqual([...made].sort(), [...factories].sort());
});

// docs/threejs-spark-integration.md (遅延読み込みのチャンク): three.js and Spark load lazily, so no module that the
// entry reaches through static imports imports them.
test("three.js and Spark are not reached from web_src/main.js through static imports", () => {
  const reached = new Set();
  const visit = (name) => {
    if (reached.has(name)) return;
    reached.add(name);
    for (const next of graph.get(name)) visit(next);
  };
  visit("main.js");
  assert.ok(reached.has("pano_editor.js") && reached.has("studio/editor.js"));
  const eager = [...reached].flatMap((name) => IMPORTS.get(name)
    .filter(({ spec }) => /^(three|@sparkjsdev\/spark)(\/|$)/.test(spec))
    .map(({ spec }) => `${name} imports ${spec}`));
  assert.deepEqual(eager, []);
});

// docs/editor-architecture.md "Paint layers": the old editor, the new UI, the node surface and the upstream Scene's
// layers show paint through createPaintDisplay (pano_paint_display.js), which alone orders it with the one
// skyPaintLayers of pano_paint_layers.js.
const SHOWS_PAINT = ["editor/paint_layers.js", "studio/paint.js", "pano_surface_paint.js", "pano_upstream_layers.js"];
const SHOWS_PAINT_DIRECTLY = ["editor/paint_layers.js"];
test("every place that lays paint on the Sky does it through createPaintDisplay, the one caller of skyPaintLayers", () => {
  const callers = [...IMPORTS].filter(([, imports]) => imports.some(({ names, target }) => target === "pano_paint_layers.js" && names.includes("skyPaintLayers"))).map(([file]) => file).sort();
  assert.deepEqual(callers, ["pano_paint_display.js", ...SHOWS_PAINT_DIRECTLY].sort());
  for (const file of SHOWS_PAINT.filter((item) => !SHOWS_PAINT_DIRECTLY.includes(item))) {
    const from = IMPORTS.get(file).find(({ names }) => names.includes("createPaintDisplay"));
    assert.equal(from?.target, "pano_paint_display.js", file);
  }
});

// AGENTS.md Non-negotiables 6 and docs/vue-ui-boundary.md: the editors' JS (old: pano_editor.js, editor/*.js;
// new: studio/*.js) builds no DOM UI. It may make the host Vue mounts into and hand a VIDEO element to the page.
const UI_JS = [...IMPORTS.keys()].filter((name) => /^(pano_editor\.js|editor\/[^/]+\.js|studio\/[^/]+\.js)$/.test(name));
const DOM_ALLOWED = [
  // The host each editor's Vue app mounts into.
  "pano_editor.js: document.createElement(\"div\")",
  "pano_editor.js: document.body.appendChild(mountHost)",
  "studio/editor.js: document.createElement(\"div\")",
  "studio/editor.js: document.body.appendChild(mountHost)",
  "studio/preview_window.js: document.createElement(\"div\")",
  "studio/preview_window.js: document.body.appendChild(mountHost)",
  // The background VIDEO stays in the page, hidden, so it keeps presenting frames (docs/timeline-ui.md).
  "studio/editor.js: mountHost.appendChild(backgroundVideoElement)",
  "studio/preview_window.js: mountHost.appendChild(videoElement)",
];
const DOM_BUILD = /[\w$.]*\.(?:createElement|createElementNS|appendChild|append|prepend|insertBefore|insertAdjacentElement|replaceChildren|replaceWith)\([^)]*\)/g;
const FORBIDDEN = [
  [/\.(?:innerHTML|outerHTML)\s*[+]?=(?!=)|\.insertAdjacentHTML\(/, "writes HTML"],
  [/\.on(?:click|dblclick|change|input|submit)\s*=(?!=)/, "wires a control through an on-property"],
  [/\bselectionMenu\.addEventListener\(/, "wires the Vue selection menu by hand"],
];
test("the editors' JS builds no DOM UI: no HTML strings, no control wiring, DOM nodes only from the allowed list", () => {
  assert.ok(UI_JS.includes("pano_editor.js") && UI_JS.includes("studio/editor.js") && UI_JS.length > 60);
  const found = [];
  for (const file of UI_JS) {
    const source = text(file);
    for (const [pattern, why] of FORBIDDEN) assert.doesNotMatch(source, pattern, `${file} ${why}`);
    for (const [call] of source.matchAll(DOM_BUILD)) found.push(`${file}: ${call}`);
  }
  assert.deepEqual(found.filter((entry) => !DOM_ALLOWED.includes(entry)), [], "build the UI as a Vue component in web_src/components/");
  assert.deepEqual(DOM_ALLOWED.filter((entry) => !found.includes(entry)), [], "drop entries that are gone from DOM_ALLOWED");
});

// docs/editor-architecture.md (node bridge): a node's runtime state lives in pano_node_bridge.js. A `__pano*`
// property may stay on an object only for the reason given here.
const ALLOWED_PANO_PROPERTIES = {
  // Node flags: set once from the node type when the editor button is installed, read by identity across
  // the editor, the node surface and pano_editor_state.js, whose callers and tests pass plain objects.
  __panoSceneStateV2: "node flag: the node keeps state v2 in state_json",
  __panoStudio: "node flag: the node is Panorama Studio",
  // Not on a node.
  __panoHidden: "widget: hidden by hideWidget",
  __panoComputeSizeBeforeHide: "widget: its computeSize before hideWidget",
  __panoQueueBarrierInstalled: "widget: state_json waits for state producers before it serializes",
  __panoLoadState: "image: load state (pano_image_state.js)",
  __panoLoadSource: "image: the source the load state is for",
  __panoSrc: "image: the source of a UI image (pano_comfy_media.js)",
  __panoFrameIdx: "canvas: frames drawn into a VIDEO still",
  __panoLifecyclePatched_: "node type: patchNodeLifecycle ran for a key",
};
test("no __pano property outside the allowed list is kept on a node or other frontend object", () => {
  const found = new Map();
  for (const file of FILES) {
    for (const [name] of readFileSync(file, "utf8").matchAll(/__pano[A-Za-z0-9_]*/g)) if (!found.has(name)) found.set(name, rel(file));
  }
  assert.deepEqual([...found].filter(([name]) => !(name in ALLOWED_PANO_PROPERTIES)), [], "keep a node's runtime state in pano_node_bridge.js");
  assert.deepEqual(Object.keys(ALLOWED_PANO_PROPERTIES).filter((name) => !found.has(name)), [], "drop properties that are gone from the allowed list");
});

const COMPONENTS = FILES.filter((file) => file.endsWith(".vue")).map(rel);
const STUDIO_CSS = readFileSync(path.join(WEB, "pano_studio.css"), "utf8");
const EDITOR_CSS = readFileSync(path.join(WEB, "pano_editor.css"), "utf8");
const uncomment = (css) => css.replace(/\/\*[\s\S]*?\*\//g, "");

// docs/design.md: ComfyUI's Tailwind utilities live on the same document (`.hidden { display: none }`), so a state
// class is never a bare utility name.
test("Vue components do not bind bare Tailwind utility names as state classes", () => {
  assert.ok(COMPONENTS.includes("components/shared/SvgIcon.vue"));
  for (const name of COMPONENTS) {
    const source = text(name);
    for (const utility of ["hidden", "block", "flex", "grid", "invisible", "visible", "contents"]) {
      assert.doesNotMatch(source, new RegExp(`:class="[^"]*[{,]\\s*['\\x60]?${utility}['\\x60]?\\s*:`), `${name} binds the class "${utility}"`);
    }
  }
});

// docs/design.md: the Vue components carry no <style>; the new UI's classes live in web/pano_studio.css
// ("新しい UI の見た目").
test("Vue components have no <style>, and every pano-studio-* class of the new UI is defined in web/pano_studio.css", () => {
  for (const name of COMPONENTS) assert.doesNotMatch(text(name), /<style[\s>]/, name);
  const studio = COMPONENTS.filter((name) => name.startsWith("components/studio/"));
  assert.ok(studio.length > 10);
  for (const name of studio) {
    for (const [cls] of text(name).matchAll(/pano-studio-[a-z0-9-]+/g)) assert.ok(STUDIO_CSS.includes(`.${cls}`), `${name} uses .${cls}, not defined in web/pano_studio.css`);
  }
});

// docs/design.md "共有の部品" (no blur) and "新しい UI の見た目" (no shadow).
test("the stylesheets use no blur, and the new UI's uses no shadow", () => {
  for (const css of [STUDIO_CSS, EDITOR_CSS]) assert.doesNotMatch(uncomment(css), /backdrop-filter|filter\s*:[^;]*blur\(/);
  assert.doesNotMatch(uncomment(STUDIO_CSS), /box-shadow\s*:(?!\s*none)/);
});

// docs/design.md (stylesheet): web/pano_studio.css is joined by hand when branches merge; a lost brace breaks every
// rule after it.
test("web/pano_studio.css's braces balance", () => {
  const css = uncomment(STUDIO_CSS).replace(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, "\"\"");
  let depth = 0;
  css.split("\n").forEach((line, index) => {
    for (const ch of line) {
      depth += ch === "{" ? 1 : ch === "}" ? -1 : 0;
      assert.ok(depth >= 0, `a brace closes more than it opened at line ${index + 1}`);
    }
  });
  assert.equal(depth, 0);
});

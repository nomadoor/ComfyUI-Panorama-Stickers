// Records what the Panorama Studio UI looks like in a running ComfyUI: every element's computed style and a
// screenshot of the node surface and of the editor, so a change that must not change the look can be compared
// before and after (node tools/ui_snapshot.mjs <out-dir> [--web <dir>] [--url <url>] [--vue-nodes on|off]).
// --web serves this package's web/ files from <dir> instead of the running server's copy, so a worktree can be
// checked without restarting ComfyUI. --vue-nodes fixes ComfyUI's Node 2.0 setting for the page, since the node
// surfaces' size depends on it and the server's settings are shared with whoever else uses that ComfyUI; the page
// never writes the server's settings. Only the main session runs it (docs/agents/workflow.md, Verification).
import { chromium } from "playwright";
import { mkdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const args = process.argv.slice(2);
if (!args[0] || args[0].startsWith("--")) {
  console.error("usage: node tools/ui_snapshot.mjs <out-dir> [--web <dir>] [--url <url>] [--vue-nodes on|off]");
  process.exit(2);
}
const out = resolve(args[0]);
const option = (name, fallback) => {
  const at = args.indexOf(name);
  return at >= 0 ? args[at + 1] : fallback;
};
const url = option("--url", "http://127.0.0.1:8199/");
const web = option("--web", null);
const vueNodes = option("--vue-nodes", "on") === "on";
mkdirSync(out, { recursive: true });

const PROPERTIES = [
  "display", "position", "width", "height", "padding", "margin", "gap", "color", "background-color", "background-image",
  "border-top", "border-right", "border-bottom", "border-left", "border-radius", "outline", "box-shadow", "opacity",
  "font-family", "font-size", "font-weight", "line-height", "letter-spacing", "text-transform", "z-index",
  "transition-duration", "transition-property", "cursor", "stroke", "stroke-width", "fill", "backdrop-filter",
  "grid-template-columns", "top", "right", "bottom", "left", "transform", "visibility", "min-width", "max-width",
  "min-height", "font-variant-numeric", "pointer-events", "white-space", "overflow",
];

const browser = await chromium.launch({ args: ["--ignore-gpu-blocklist"] });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1 });
const problems = [];
let served = 0;
page.on("pageerror", (error) => problems.push(`pageerror: ${error.message}`));
// Keep the page from changing anything outside it: every request that is not a GET to this ComfyUI is answered in
// the page (settings, userdata, uploads, prompts, and any other extension's writes), and other origins are not
// contacted.
const origin = new URL(url).origin;
await page.route("**/*", (route) => {
  const request = route.request();
  if (new URL(request.url()).origin !== origin) return route.fulfill({ status: 204, body: "" });
  if (request.method() !== "GET" && request.method() !== "HEAD") return route.fulfill({ status: 200, contentType: "application/json", body: "{}" });
  return route.fallback();
});
// Read the server's settings with Node 2.0 fixed, and keep every settings write in the page.
await page.route("**/api/settings**", async (route) => {
  const request = route.request();
  if (request.method() !== "GET") return route.fulfill({ status: 200, contentType: "application/json", body: "{}" });
  const response = await route.fetch();
  const url = new URL(request.url());
  if (url.pathname.endsWith("/api/settings")) {
    const settings = await response.json();
    settings["Comfy.VueNodes.Enabled"] = vueNodes;
    return route.fulfill({ response, json: settings });
  }
  if (url.pathname.endsWith("/Comfy.VueNodes.Enabled")) return route.fulfill({ response, json: vueNodes });
  return route.fulfill({ response });
});
if (web) {
  await page.route("**/extensions/ComfyUI-Panorama-Stickers/**", async (route) => {
    const path = new URL(route.request().url()).pathname.split("/extensions/ComfyUI-Panorama-Stickers/")[1];
    const file = join(web, path);
    if (!existsSync(file) || !statSync(file).isFile()) return route.continue();
    const type = file.endsWith(".css") ? "text/css" : file.endsWith(".js") ? "text/javascript" : undefined;
    served += 1;
    await route.fulfill({ body: readFileSync(file), contentType: type });
  });
}
await page.goto(url);
await page.waitForFunction(() => (window.app ?? window.comfyAPI?.app?.app)?.graph && window.LiteGraph?.registered_node_types?.PanoramaStudio, null, { timeout: 60_000 });

const snapshot = (rootSelector) => page.evaluate(({ rootSelector, PROPERTIES }) => {
  const root = document.querySelector(rootSelector);
  if (!root) return null;
  // Running animations (the loading shimmer) would make values depend on when the snapshot is taken.
  for (const animation of document.getAnimations()) {
    animation.pause();
    animation.currentTime = 0;
  }
  const pathOf = (el) => {
    const parts = [];
    for (let at = el; at && at !== root.parentElement; at = at.parentElement) {
      const index = at.parentElement ? [...at.parentElement.children].indexOf(at) : 0;
      parts.unshift(`${at.tagName.toLowerCase()}${[...at.classList].map((c) => `.${c}`).join("")}:${index}`);
    }
    return parts.join(" > ");
  };
  const result = {};
  for (const el of [root, ...root.querySelectorAll("*")]) {
    const style = getComputedStyle(el);
    const values = {};
    for (const name of PROPERTIES) values[name] = style.getPropertyValue(name);
    for (const pseudo of ["::before", "::after"]) {
      const p = getComputedStyle(el, pseudo);
      if (p.content && p.content !== "none") values[pseudo] = PROPERTIES.map((name) => `${name}:${p.getPropertyValue(name)}`).join(";");
    }
    result[pathOf(el)] = values;
  }
  return result;
}, { rootSelector, PROPERTIES });

// A fresh Panorama Studio node on an empty graph. The default workflow loads after the app starts, so wait for it and
// replace it, or it would push the node off screen.
await page.waitForTimeout(2000);
await page.evaluate(async () => {
  const app = window.app ?? window.comfyAPI.app.app;
  await app.loadGraphData({ last_node_id: 0, last_link_id: 0, nodes: [], links: [], groups: [], config: {}, extra: { ds: { offset: [0, 0], scale: 1 } }, version: 0.4 });
  // Panorama Studio and the legacy nodes, whose surfaces share the stylesheet.
  for (const [type, pos] of [["PanoramaStudio", [40, 80]], ["PanoramaStickers", [440, 80]], ["PanoramaCutout", [840, 80]], ["PanoramaPreview", [1240, 80]]]) {
    const node = window.LiteGraph.createNode(type);
    node.pos = pos;
    app.graph.add(node);
  }
  app.graph.setDirtyCanvas(true, true);
});
const SURFACES = [
  ["node-surface", ".pano-studio-node-surface"],
  ["node-stickers", ".pano-stickers-node-surface"],
  ["node-cutout", ".pano-cutout-node-surface"],
  ["node-preview", ".pano-preview-node-surface"],
];
await page.waitForSelector(".pano-studio-node-surface", { timeout: 30_000 });
await page.waitForTimeout(2500);
for (const [name, selector] of SURFACES) {
  const element = await page.$(selector);
  if (!element) {
    problems.push(`surface ${name}: no ${selector}`);
    continue;
  }
  writeFileSync(join(out, `${name}.json`), JSON.stringify(await snapshot(selector), null, 1));
  await element.screenshot({ path: join(out, `${name}.png`) });
}

// The editor, opened from the node surface.
await page.locator(".pano-studio-node-surface").getByRole("button", { name: /Open Editor/i }).first().click();
await page.waitForSelector(".pano-modal", { timeout: 30_000 });
await page.waitForTimeout(2500);
writeFileSync(join(out, "editor.json"), JSON.stringify(await snapshot(".pano-modal"), null, 1));
await page.screenshot({ path: join(out, "editor.png") });

// More states of the editor, each recorded after the step before it: a step whose control is missing is noted
// and skipped, so a run still compares the states it reached.
const STEPS = [
  ["timeline", ".pano-timeline-toggle"],
  ["ui-settings", ".pano-ui-settings > summary"],
  ["paint", ".pano-floating-left button >> nth=1"],
  ["unwrap", ".pano-view-toggle [data-view] >> nth=1"],
];
for (const [name, selector] of STEPS) {
  const target = page.locator(selector).first();
  if (!(await target.count())) {
    problems.push(`step ${name}: no ${selector}`);
    continue;
  }
  await target.click();
  await page.waitForTimeout(1000);
  writeFileSync(join(out, `editor-${name}.json`), JSON.stringify(await snapshot(".pano-modal"), null, 1));
  await page.screenshot({ path: join(out, `editor-${name}.png`) });
}
writeFileSync(join(out, "meta.json"), JSON.stringify({ vueNodes, web: web ? "worktree" : "server", served }, null, 1));
writeFileSync(join(out, "problems.json"), JSON.stringify(problems, null, 1));
console.log(`snapshot: ${out} (${problems.length} page errors)`);
await browser.close();

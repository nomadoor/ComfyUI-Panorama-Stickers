import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

import { PerspectiveCamera, Vector3 } from "three";

import { cameraBasis, DEG2RAD } from "../web_src/pano_camera_math.js";
import { createSharedView, previewNodeCamera } from "../web_src/pano_preview_view.js";
import { applyViewportCamera } from "../web_src/pano_three_view.js";
import { readEditorSource } from "./editor_source.mjs";

const source = (name) => readFileSync(new URL(`../web_src/${name}`, import.meta.url), "utf8");

// The ERP coordinates the three.js view samples for a pixel center: the camera ray through the
// dome, then pano_three_view.js ERP_FRAGMENT (360 coverage).
function threeErpUv(camera, width, height, x, y) {
  const ndc = new Vector3((x + 0.5) / width * 2 - 1, 1 - (y + 0.5) / height * 2, 0.5);
  const world = ndc.unproject(camera).sub(camera.position).normalize();
  const dir = new Vector3(world.x, world.y, -world.z);
  return {
    u: Math.atan2(dir.x, dir.z) / (2 * Math.PI) + 0.5,
    v: 0.5 - Math.asin(Math.max(-1, Math.min(1, dir.y))) / Math.PI,
  };
}

// The ERP coordinates the previous WebGL renderer sampled for a point of the Preview node's view
// (its screenToErpUv for a 360 ERP): fov spans the view width, and the ray is built on
// pano_camera_math like core/math.py.
function referenceErpUv(view, width, height, x, y) {
  const { right, up, fwd } = cameraBasis(view.yaw, view.pitch, 0);
  const tanX = Math.tan(view.fov * DEG2RAD * 0.5);
  const nx = ((x - width * 0.5) / (width * 0.5)) * tanX;
  const ny = ((height * 0.5 - y) / (height * 0.5)) * tanX * (height / width);
  const dir = new Vector3(
    fwd.x + right.x * nx + up.x * ny,
    fwd.y + right.y * nx + up.y * ny,
    fwd.z + right.z * nx + up.z * ny,
  ).normalize();
  return {
    u: ((Math.atan2(dir.x, dir.z) / (2 * Math.PI)) + 1.5) % 1,
    v: 0.5 - Math.asin(Math.max(-1, Math.min(1, dir.y))) / Math.PI,
  };
}

test("Preview node samples the same ERP coordinates as the previous renderer per pixel", () => {
  const views = [
    { yaw: 0, pitch: 0, fov: 100 },
    { yaw: 137, pitch: -35, fov: 35 },
    { yaw: -179.5, pitch: 89.9, fov: 140 },
    { yaw: 64, pitch: -89.9, fov: 72 },
  ];
  const camera = new PerspectiveCamera();
  for (const view of views) {
    for (const [width, height] of [[640, 360], [300, 500], [3840, 2160]]) {
      applyViewportCamera(camera, previewNodeCamera(view, width, height));
      for (const fx of [0, 0.25, 0.5, 0.8, 1]) {
        for (const fy of [0, 0.4, 0.5, 1]) {
          const x = Math.min(width - 1, Math.floor(fx * width));
          const y = Math.min(height - 1, Math.floor(fy * height));
          const expected = referenceErpUv(view, width, height, x + 0.5, y + 0.5);
          const actual = threeErpUv(camera, width, height, x, y);
          const du = Math.abs(actual.u - expected.u);
          const where = `${JSON.stringify(view)} ${width}x${height} pixel ${x},${y}`;
          assert.ok(Math.min(du, 1 - du) < 1e-7, `${where}: u ${actual.u} vs ${expected.u}`);
          assert.ok(Math.abs(actual.v - expected.v) < 1e-7, `${where}: v ${actual.v} vs ${expected.v}`);
        }
      }
    }
  }
});

test("nothing but the GPU limits the size the views render at", async () => {
  const { fitRenderSize } = await import("../web_src/pano_three_view.js");
  assert.deepEqual(fitRenderSize(3840, 2160, 16384), { width: 3840, height: 2160 });
  assert.deepEqual(fitRenderSize(5120, 2880, 4096), { width: 4096, height: 2304 });
  assert.deepEqual(fitRenderSize(0.4, 0.2, 4096), { width: 1, height: 1 });
  const view = source("pano_three_view.js");
  assert.doesNotMatch(view, /MAX_RENDER_SIDE/);
  assert.match(view, /const maxSide = Math\.min\(renderer\.capabilities\.maxTextureSize, gl\.getParameter\(gl\.MAX_RENDERBUFFER_SIZE\)\);/);
  assert.doesNotMatch(source("pano_editor_view.js"), /MAX_RENDER_SIDE/);
});

function fakeLoader() {
  const loads = [];
  const load = () => new Promise((resolve, reject) => {
    const view = {
      renders: [],
      released: [],
      disposed: false,
      render(input) {
        this.renders.push(input);
        return { canvas: "canvas" };
      },
      renderLiveErp(input) {
        this.renders.push(input);
        return { faces: true, pass: true };
      },
      release(owner) {
        this.released.push(owner);
      },
      dispose() {
        this.disposed = true;
      },
    };
    loads.push({ view, resolve: () => resolve(view), reject });
  });
  return { load, loads };
}

const settle = () => new Promise((resolve) => setImmediate(resolve));

test("on-node Previews share one view that loads on the first frame and goes with the last node", async () => {
  const { load, loads } = fakeLoader();
  const acquire = createSharedView(load);
  const changes = [];
  const a = acquire(() => changes.push("a"));
  const b = acquire(() => changes.push("b"));
  assert.equal(loads.length, 0, "nothing loads before a node has media to draw");

  assert.equal(a.render({ width: 1 }), null);
  assert.equal(b.render({ width: 2 }), null);
  assert.equal(loads.length, 1);
  loads[0].resolve();
  await settle();
  assert.deepEqual(changes, ["a", "b"]);

  const view = loads[0].view;
  assert.deepEqual(a.render({ width: 3 }), { canvas: "canvas" });
  assert.deepEqual(b.render({ width: 4 }), { canvas: "canvas" });
  assert.notEqual(view.renders[0].owner, view.renders[1].owner, "each node keeps its own textures");
  assert.equal(view.renders[0].width, 3);

  a.release();
  assert.deepEqual(view.released, [view.renders[0].owner], "a node without media frees its textures");
  a.dispose();
  assert.equal(view.released.length, 2);
  assert.equal(a.render({}), null, "a disposed handle does not render or load");
  assert.equal(view.disposed, false);
  b.dispose();
  b.dispose();
  assert.equal(view.released.length, 3);
  assert.equal(view.disposed, true, "the last node releases the WebGL context");

  const c = acquire(() => {});
  assert.equal(c.render({}), null);
  assert.equal(loads.length, 2, "a later node loads a new view");
  c.dispose();
  loads[1].resolve();
  await settle();
  assert.equal(loads[1].view.disposed, true, "a view that arrives after every node left is dropped");
});

test("a node draws its live ERP through the shared view as its own owner, and nothing before the view loads", async () => {
  const { load, loads } = fakeLoader();
  const acquire = createSharedView(load);
  const a = acquire(() => {});
  assert.equal(a.renderLiveErp({ width: 8, canvas: "erp" }), null);
  loads[0].resolve();
  await settle();
  assert.deepEqual(a.renderLiveErp({ width: 8, canvas: "erp", owner: "ignored" }), { faces: true, pass: true });
  const [drawn] = loads[0].view.renders;
  assert.equal(drawn.canvas, "erp");
  assert.notEqual(drawn.owner, "ignored");
  a.release();
  assert.deepEqual(loads[0].view.released, [drawn.owner], "releasing the node releases its live ERP with its textures");
  a.dispose();
  assert.equal(a.renderLiveErp({}), null);
});

// A Scene drawn on a node (docs/preview-node.md "`PANO_SCENE` を見る") loads its items and Spark sorts its splats after
// the frame that asked for them. Only the nodes that draw 3D items are told; the other on-node views draw as before.
test("an item loaded or splats sorted in the shared view are told only to the nodes that draw 3D items", async () => {
  let hooks = null;
  const view = { render: (input) => ({ owner: input.owner }), release() {}, dispose() {} };
  const acquire = createSharedView((given) => {
    hooks = given;
    return Promise.resolve(view);
  });
  const changes = [];
  const scene = acquire(() => changes.push("scene"), { items: true });
  const other = acquire(() => changes.push("other"));
  const scene2 = acquire(() => changes.push("scene2"), { items: true });
  scene.render({});
  await settle();
  changes.length = 0;
  hooks.onUpdate();
  assert.deepEqual(changes, ["scene", "scene2"]);
  changes.length = 0;
  hooks.onSplats(scene2.render({}).owner);
  hooks.onSplats(other.render({}).owner);
  assert.deepEqual(changes, ["scene2"]);
  [scene, other, scene2].forEach((handle) => handle.dispose());
});

test("a failed load marks every node failed until every node has gone", async (t) => {
  t.mock.method(console, "error", () => {});
  const { load, loads } = fakeLoader();
  const acquire = createSharedView(load);
  let changes = 0;
  const a = acquire(() => { changes += 1; });
  const b = acquire(() => { changes += 1; });
  a.render({});
  loads[0].reject(new Error("no WebGL"));
  await settle();
  assert.equal(a.failed, true);
  assert.equal(b.failed, true);
  assert.equal(changes, 2);
  assert.equal(b.render({}), null);
  assert.equal(loads.length, 1, "no retry while the nodes that saw the failure remain");

  a.dispose();
  b.dispose();
  const c = acquire(() => {});
  assert.equal(c.failed, false);
  c.render({});
  assert.equal(loads.length, 2, "a later node tries again");
  loads[1].resolve();
  await settle();
  assert.deepEqual(c.render({}), { canvas: "canvas" });
});

test("the on-node Preview draws through the shared three.js view and its Vue surface shows a failed view", () => {
  const preview = source("pano_preview_previewnode.js");
  assert.ok(preview.includes('from "./pano_preview_view.js"'));
  const draw = preview.slice(preview.indexOf("function drawPreview("), preview.indexOf("function isPointInRect("));
  assert.match(draw, /if \(previewView\.failed\) \{\s*drawGrid\(ctx, width, height\);\s*return;/);
  assert.match(preview, /reactive\(\{ fullscreen: false, viewUnavailable: false \}\)/);
  assert.match(preview, /this\.surfaceModel\.viewUnavailable = this\.previewView\.failed/);
  assert.match(source("components/PanoPreviewNodeSurface.vue"), /<PanoViewUnavailable v-if="model\.viewUnavailable" \/>/);
});

test("the on-node Stickers and Cutout surfaces draw through the same shared view and show a failed view in Vue", () => {
  const runtime = source("pano_preview_runtime.js");
  assert.match(runtime, /const surfaceView = acquirePreviewView\(requestDraw, \{ items: studioSurface \}\)/);
  assert.match(runtime, /if \(node\.flags\?\.collapsed \|\| editorOpen\(node\)\) surfaceView\.release\(\);/);
  assert.match(runtime, /\} else drawCanvas\(node, canvas, surfaceView\);\s*nodeSurfaceUiModel\.viewUnavailable = surfaceView\.failed;/);
  assert.match(runtime, /surfaceView\.dispose\(\)/);
  for (const name of ["PanoStickersNodeSurface.vue", "PanoCutoutNodeSurface.vue"]) {
    assert.match(source(`components/${name}`), /<PanoViewUnavailable v-if="model\.viewUnavailable" \/>/, name);
  }
  // One message for every node surface.
  assert.match(source("components/shared/PanoViewUnavailable.vue"), /VIEW_UNAVAILABLE_MESSAGE/);
  const files = readdirSync(new URL("../web_src/", import.meta.url)).filter((name) => name.endsWith(".js"));
  assert.deepEqual(files.filter((name) => source(name).includes("3D view unavailable")), ["pano_preview_view.js"]);
});

test("an on-node Stickers surface with nothing to draw shows the grid without loading the view", () => {
  const runtime = source("pano_preview_runtime.js");
  const draw = runtime.slice(runtime.indexOf("function drawCanvas("), runtime.indexOf("\nfunction drawLineOnSphere("));
  const stickers = draw.slice(draw.indexOf("  if (!surface.view) surface.view = { yaw: 0, pitch: 0, fov: DEFAULT_VIEW_HFOV };\n  let panoramaDrawn"));
  assert.match(stickers, /if \(!input\.background && !input\.layers\.length\) \{\s*surfaceView\.release\(\);\s*panoramaDrawn = true;\s*\} else \{\s*panoramaDrawn = drawView\(/);
  assert.match(stickers, /if \(!bgImg && panoramaDrawn\) drawPanoGrid\(/);
});

test("no module draws with the previous WebGL renderer", () => {
  const files = readdirSync(new URL("../web_src/", import.meta.url)).filter((name) => name.endsWith(".js"));
  for (const name of ["pano_render_core.js", "pano_gl_renderer.js", "pano_gl_scene.js", "pano_scene_camera.js", "pano_cutout_camera.js"]) {
    assert.ok(!files.includes(name), `${name} is gone`);
  }
  for (const name of files) {
    assert.doesNotMatch(source(name), /pano_(?:render_(?:core|state|targets|descriptors|layer_descriptors|object_pass)|gl_(?:renderer|scene)|scene_camera(?:_dom|_export)?|cutout_camera)\.js/, name);
  }
});

test("the Stickers and Cutout editors and the read-only Preview modal draw with three.js", () => {
  const editor = readEditorSource();
  assert.match(editor, /const editorView = createEditorView\(/);
  assert.match(editor, /if \(editorView\.failed\) return \{ status: IMAGE_FAILED, detail: "renderer" \}/);
  assert.match(source("components/PanoModal.vue"), /detail === "renderer"/);
});

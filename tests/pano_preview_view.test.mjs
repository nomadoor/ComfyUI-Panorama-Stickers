import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { PerspectiveCamera, Vector3 } from "three";

import { MAX_RENDER_SIDE } from "../web_src/pano_editor_view.js";
import { createPanoGlRenderer } from "../web_src/pano_gl_renderer.js";
import { buildPreviewNodeViewParams } from "../web_src/pano_gl_scene.js";
import { createSharedView, previewNodeCamera } from "../web_src/pano_preview_view.js";
import { applyViewportCamera } from "../web_src/pano_three_view.js";

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

// The previous renderer's screenToErpUv is the JavaScript form of its projectCameraUv shader for a
// 360 ERP, so the Preview node's ERP lookup is compared with the previous renderer directly.
test("Preview node samples the same ERP coordinates as the previous renderer per pixel", () => {
  const legacy = createPanoGlRenderer({ targetCanvas: {} });
  const views = [
    { yaw: 0, pitch: 0, fov: 100 },
    { yaw: 137, pitch: -35, fov: 35 },
    { yaw: -179.5, pitch: 89.9, fov: 140 },
    { yaw: 64, pitch: -89.9, fov: 72 },
  ];
  const camera = new PerspectiveCamera();
  for (const view of views) {
    for (const [width, height] of [[640, 360], [300, 500], [MAX_RENDER_SIDE, 1152]]) {
      applyViewportCamera(camera, previewNodeCamera(view, width, height));
      const params = { ...buildPreviewNodeViewParams(view, 360), viewportWidth: width, viewportHeight: height };
      for (const fx of [0, 0.25, 0.5, 0.8, 1]) {
        for (const fy of [0, 0.4, 0.5, 1]) {
          const x = Math.min(width - 1, Math.floor(fx * width));
          const y = Math.min(height - 1, Math.floor(fy * height));
          const expected = legacy.screenToErpUv(params, x + 0.5, y + 0.5);
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

test("the chunk renders at the same size limit as the eager side", () => {
  assert.ok(source("pano_three_view.js").includes(`const MAX_RENDER_SIDE = ${MAX_RENDER_SIDE};`));
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

test("a failed load switches every node to the previous renderer until every node has gone", async (t) => {
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

test("the on-node Preview draws through the shared three.js view", () => {
  const preview = source("pano_preview_previewnode.js");
  assert.ok(preview.includes('from "./pano_preview_view.js"'));
  assert.ok(!preview.includes("drawErpBackground"));
  // The previous renderer remains only as the fallback when three.js cannot load (#69 removes it).
  const draw = preview.slice(preview.indexOf("function drawPreview("), preview.indexOf("function isPointInRect("));
  assert.match(draw, /previewView\.failed\s*\?\s*renderWithPreviousRenderer\(/);
  assert.ok(!draw.includes("createPanoramaRenderCore"));
  assert.ok(!source("pano_preview_node_surface.js").includes("pano_gl_renderer"));
  assert.ok(!source("pano_preview_view.js").match(/pano_(?:render_core|gl_scene|gl_renderer)/));
});

test("the read-only Preview modal draws its panorama view with three.js too", () => {
  const editor = source("pano_editor.js");
  assert.match(editor, /const editorView = type === "stickers" \|\| type === "cutout"\n\s*\? createEditorView\(/);
});

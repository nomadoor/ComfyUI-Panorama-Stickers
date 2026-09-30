import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

import { Mesh, PerspectiveCamera, PlaneGeometry, Vector3 } from "three";

import { cameraBasis, DEG2RAD } from "../web_src/pano_camera_math.js";
import { skyLayers, viewportCamera } from "../web_src/pano_editor_view.js";
import { editorSceneState, parsePanoEditorState } from "../web_src/pano_editor_state.js";
import { HIDDEN_PREVIEW_OPACITY } from "../web_src/pano_gl_scene.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { applyViewportCamera, placeSticker } from "../web_src/pano_three_view.js";
import { worldToPano } from "../web_src/pano_world.js";

const fixture = (name) => readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8");

// The previous renderer's ray for the pixel center (x + 0.5, y + 0.5): pano_gl_renderer.js
// dirFromProjectedView and pano_editor.js projectDir, built on pano_camera_math.
function legacyRay(view, width, height, x, y) {
  const { right, up, fwd } = cameraBasis(view.yaw_deg, view.pitch_deg, view.roll_deg);
  const hFov = view.hFOV_deg * DEG2RAD;
  const vFov = 2 * Math.atan(Math.tan(hFov / 2) * (height / width));
  const nx = ((x + 0.5) / width * 2 - 1) * Math.tan(hFov / 2);
  const ny = (1 - (y + 0.5) / height * 2) * Math.tan(vFov / 2);
  const dir = new Vector3(
    fwd.x + right.x * nx + up.x * ny,
    fwd.y + right.y * nx + up.y * ny,
    fwd.z + right.z * nx + up.z * ny,
  );
  return dir.normalize();
}

function threeRay(camera, width, height, x, y) {
  const ndc = new Vector3((x + 0.5) / width * 2 - 1, 1 - (y + 0.5) / height * 2, 0.5);
  const world = ndc.unproject(camera).sub(camera.position).normalize();
  const pano = worldToPano(world);
  return new Vector3(pano.x, pano.y, pano.z);
}

test("three.js viewport camera rays match pano_camera_math per pixel", () => {
  const views = [
    { yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 100 },
    { yaw_deg: 137, pitch_deg: -35, roll_deg: 0, hFOV_deg: 70 },
    { yaw_deg: -250, pitch_deg: 62, roll_deg: 0, hFOV_deg: 140 },
    { yaw_deg: 30, pitch_deg: 90, roll_deg: 0, hFOV_deg: 90 },
    { yaw_deg: -80, pitch_deg: -90, roll_deg: 0, hFOV_deg: 25 },
    { yaw_deg: 12, pitch_deg: 20, roll_deg: 33, hFOV_deg: 60 },
  ];
  const sizes = [[1600, 800], [640, 960], [333, 331]];
  const camera = new PerspectiveCamera();
  for (const view of views) {
    for (const [width, height] of sizes) {
      applyViewportCamera(camera, viewportCamera(view, width, height));
      for (const fx of [0, 0.13, 0.5, 0.77, 1]) {
        for (const fy of [0, 0.31, 0.5, 0.9, 1]) {
          const x = Math.min(width - 1, Math.floor(fx * width));
          const y = Math.min(height - 1, Math.floor(fy * height));
          const angle = threeRay(camera, width, height, x, y).angleTo(legacyRay(view, width, height, x, y));
          assert.ok(angle < 1e-6, `${JSON.stringify(view)} ${width}x${height} pixel ${x},${y}: ${angle} rad`);
        }
      }
    }
  }
});

// Where the previous sticker shader samples the sticker for a view ray (pano_gl_renderer.js
// STICKER_FRAGMENT_SHADER): normalized frame coordinates, top-left origin.
function legacyStickerUv(value, dir) {
  const { right, up, fwd } = cameraBasis(value.yaw_deg, value.pitch_deg, value.roll_deg);
  const dz = dir.x * fwd.x + dir.y * fwd.y + dir.z * fwd.z;
  const px = (dir.x * right.x + dir.y * right.y + dir.z * right.z) / dz;
  const py = (dir.x * up.x + dir.y * up.y + dir.z * up.z) / dz;
  return {
    u: px / Math.tan(value.hFOV_deg * 0.5 * DEG2RAD) * 0.5 + 0.5,
    v: 0.5 - py / Math.tan(value.vFOV_deg * 0.5 * DEG2RAD) * 0.5,
  };
}

function skyState(stickers) {
  return loadSceneState({ version: 2, stickers });
}

test("sky Sticker planes cover the rays of the previous sticker shader", () => {
  const value = { yaw_deg: 150, pitch_deg: -40, roll_deg: 25, hFOV_deg: 70, vFOV_deg: 40 };
  const crop = { x0: 0.1, y0: 0.2, x1: 0.8, y1: 0.95 };
  const state = skyState([{ id: "a", source: { kind: "port" }, crop, transform: { value } }]);
  const [layer] = skyLayers(state, 0, { media: () => ({ media: {}, revision: "" }), zIndex: () => 0, paintLayers: [] });
  const mesh = new Mesh(new PlaneGeometry(1, 1, 3, 3));
  placeSticker(mesh, layer);
  mesh.updateMatrixWorld();
  const { position, uv } = mesh.geometry.attributes;
  for (let index = 0; index < position.count; index += 1) {
    const world = new Vector3().fromBufferAttribute(position, index).applyMatrix4(mesh.matrixWorld).normalize();
    const full = legacyStickerUv(value, worldToPano(world));
    // Textures load with flipY, so the plane's uv.y = 1 edge shows the image's top row.
    const expected = { u: crop.x0 + uv.getX(index) * (crop.x1 - crop.x0), v: crop.y0 + (1 - uv.getY(index)) * (crop.y1 - crop.y0) };
    assert.ok(Math.abs(full.u - expected.u) < 1e-6 && Math.abs(full.v - expected.v) < 1e-6, `vertex ${index}`);
  }
});

test("sky layers keep the editor's z order with paint and show hidden port Stickers faintly", () => {
  const media = { tag: "image" };
  const state = skyState([
    { id: "front", source: { kind: "file", filename: "a.png" } },
    { id: "hidden", source: { kind: "file", filename: "b.png" }, visible: false },
    { id: "port", source: { kind: "port" }, visible: false },
    { id: "unloaded", source: { kind: "file", filename: "c.png" } },
    { id: "world", placement: "world", source: { kind: "file", filename: "d.png" } },
  ]);
  const zIndex = { front: 5, hidden: 0, port: 1, unloaded: 2, world: 3 };
  const layers = skyLayers(state, 0, {
    media: (sticker) => (sticker.id === "unloaded" ? null : { media, revision: "" }),
    zIndex: (sticker) => zIndex[sticker.id],
    paintLayers: [{ id: "paint_group:g", media, revision: "r", opacity: 1, zIndex: 3 }],
  });
  assert.deepEqual(layers.map((layer) => [layer.kind, layer.id, layer.opacity]), [
    ["sticker", "port", HIDDEN_PREVIEW_OPACITY],
    ["erp", "paint_group:g", 1],
    ["sticker", "front", 1],
  ]);
});

test("the state v2 derived from the editor's v1 working state has the shape of the fixtures", () => {
  const editorState = parsePanoEditorState(fixture("v1_stickers"), { coverage: 180, backgroundColor: "#ffffff" });
  assert.deepEqual(editorSceneState(editorState), JSON.parse(fixture("v1_stickers.v2")));

  editorState.stickers.push({ id: "st_new", asset_id: "asset_a", yaw_deg: 10, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0, z_index: 9 });
  const saved = editorSceneState(editorState);
  const canonical = JSON.parse(fixture("v2_canonical"));
  assert.deepEqual(Object.keys(saved), Object.keys(canonical));
  for (const sticker of saved.stickers) assert.deepEqual(Object.keys(sticker), Object.keys(canonical.stickers[0]));
  assert.deepEqual(loadSceneState(JSON.parse(JSON.stringify(saved))), saved);
});

test("three.js stays out of the eagerly loaded bundle", () => {
  const bundle = readFileSync(new URL("../web/panorama_suite.js", import.meta.url), "utf8");
  const [chunkName] = readdirSync(new URL("../web/.lazy/", import.meta.url)).filter((name) => name.startsWith("pano_three_view-"));
  const chunk = readFileSync(new URL(`../web/.lazy/${chunkName}`, import.meta.url), "utf8");
  assert.ok(!bundle.includes("Three.js Authors"));
  assert.ok(bundle.includes(`import("./.lazy/${chunkName}")`));
  assert.ok(chunk.includes("Three.js Authors"));
  assert.ok(!/^import\s/m.test(chunk));
});

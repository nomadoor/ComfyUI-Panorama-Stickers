import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

import { Mesh, PerspectiveCamera, PlaneGeometry, Vector3 } from "three";

import { cameraBasis, DEG2RAD } from "../web_src/pano_camera_math.js";
import {
  canvasToFilmTangent,
  contextHalfExtentsPx,
  cutoutFilmPointToWorldDir,
  fitFocalPx,
  gateRectFromFocal,
  getCutoutCameraParams,
} from "../web_src/pano_cutout_view_math.js";
import {
  HIDDEN_PREVIEW_OPACITY,
  frameViewContext,
  shotCamera,
  skyLayers,
  viewInputKey,
  viewportCamera,
  viewProjection,
  workingSkyLayers,
} from "../web_src/pano_editor_view.js";
import { editorSceneState, parsePanoEditorState } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { applyViewportCamera, placeSticker, unwrapStickerUniforms } from "../web_src/pano_three_view.js";
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

test("the view projection places points where the three.js camera draws them, for any camera setup", () => {
  const camera = new PerspectiveCamera();
  const setups = [
    [viewportCamera({ yaw_deg: 25, pitch_deg: -15, roll_deg: 0, hFOV_deg: 95 }, 1200, 700), 1200, 700],
    [viewportCamera({ yaw_deg: -140, pitch_deg: 70, roll_deg: 30, hFOV_deg: 60 }, 500, 800), 500, 800],
    // A shot spans its FOVs over the rect whatever the rect's pixel aspect.
    [shotCamera({ yaw_deg: 80, pitch_deg: 5, roll_deg: -20, hFOV_deg: 70, vFOV_deg: 50 }), 300, 420],
  ];
  for (const [setup, width, height] of setups) {
    applyViewportCamera(camera, setup);
    const projection = viewProjection(setup, width, height);
    for (const [x, y] of [[0, 0], [width * 0.5, height * 0.5], [width * 0.2, height * 0.9], [width, height * 0.3]]) {
      const ndc = new Vector3(x / width * 2 - 1, 1 - y / height * 2, 0.5).unproject(camera).sub(camera.position).normalize();
      const expected = worldToPano(ndc);
      const ray = projection.ray(x, y);
      const angle = new Vector3(ray.x, ray.y, ray.z).angleTo(new Vector3(expected.x, expected.y, expected.z));
      assert.ok(angle < 1e-6, `${x},${y}: ${angle} rad`);
      const point = projection.project(expected);
      assert.ok(Math.hypot(point.x - x, point.y - y) < 1e-6, `${x},${y} -> ${point.x},${point.y}`);
    }
  }
});

// The previous cutout view's ray (pano_gl_renderer.js projectCameraUv in cutout mode): hFOV and
// vFOV span the drawn rect whatever its pixel aspect.
function legacyShotRay(shot, width, height, x, y) {
  const camera = getCutoutCameraParams(shot);
  const { right, up, fwd } = cameraBasis(camera.yawDeg, camera.pitchDeg, camera.rollDeg);
  const nx = ((x + 0.5) / width * 2 - 1) * camera.tanHalfX;
  const ny = (1 - (y + 0.5) / height * 2) * camera.tanHalfY;
  return new Vector3(
    fwd.x + right.x * nx + up.x * ny,
    fwd.y + right.y * nx + up.y * ny,
    fwd.z + right.z * nx + up.z * ny,
  ).normalize();
}

test("the shot camera casts the previous cutout view's rays, roll included", () => {
  const shots = [
    { yaw_deg: 30, pitch_deg: 10, roll_deg: 15, hFOV_deg: 90, vFOV_deg: 60 },
    { yaw_deg: -170, pitch_deg: 75, roll_deg: -120, hFOV_deg: 40, vFOV_deg: 110 },
    { yaw_deg: 400, pitch_deg: -90, rot_deg: 33, hFOV_deg: 170, vFOV_deg: 20 },
    { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 0, vFOV_deg: 0 },
  ];
  const camera = new PerspectiveCamera();
  for (const shot of shots) {
    applyViewportCamera(camera, shotCamera(shot));
    // A different pixel aspect than the shot's: the FOVs still span the view.
    for (const [width, height] of [[300, 200], [128, 400]]) {
      for (const [x, y] of [[0, 0], [37, 151], [150, 100], [width - 1, height - 1]]) {
        const angle = threeRay(camera, width, height, x, y).angleTo(legacyShotRay(shot, width, height, x, y));
        assert.ok(angle < 1e-6, `${JSON.stringify(shot)} ${width}x${height} pixel ${x},${y}: ${angle} rad`);
      }
    }
  }
});

test("the Frame view draws each canvas pixel along the ray the Frame tools use there", () => {
  const shot = { yaw_deg: 30, pitch_deg: 10, roll_deg: 15, hFOV_deg: 90, vFOV_deg: 60 };
  const camera = new PerspectiveCamera();
  // Sweep the canvas width so both the width- and the height-limited gates are covered (ADR 0021).
  for (const [width, height] of [[500, 700], [900, 600], [1600, 600], [2400, 800]]) {
    const safeRect = { x: 24, y: 24, w: width - 48, h: height - 48 };
    const gate = gateRectFromFocal(safeRect, shot, fitFocalPx(safeRect, shot));
    const context = frameViewContext(shot, gate, { width, height });
    const { halfW, halfH } = contextHalfExtentsPx({ width, height }, gate.focalPx);
    assert.deepEqual(context.rect, { x: gate.x + gate.w / 2 - halfW, y: gate.y + gate.h / 2 - halfH, w: halfW * 2, h: halfH * 2 });
    applyViewportCamera(camera, shotCamera(context.shot));
    const center = { x: gate.x + gate.w / 2, y: gate.y + gate.h / 2 };
    for (const [fx, fy] of [[0, 0], [0.5, 0.5], [0.13, 0.9], [1, 0.25], [-0.2, 1.1]]) {
      const point = { x: gate.x + fx * gate.w, y: gate.y + fy * gate.h };
      const ndc = new Vector3((point.x - context.rect.x) / context.rect.w * 2 - 1, 1 - (point.y - context.rect.y) / context.rect.h * 2, 0.5);
      const drawn = worldToPano(ndc.unproject(camera).sub(camera.position).normalize());
      const tool = cutoutFilmPointToWorldDir(shot, canvasToFilmTangent(center, gate.focalPx, point));
      const angle = new Vector3(drawn.x, drawn.y, drawn.z).angleTo(new Vector3(tool.x, tool.y, tool.z));
      assert.ok(angle < 1e-6, `${width}x${height} gate point ${fx},${fy}: ${angle} rad`);
    }
  }
});

test("the Frame view context stops at 85 degrees off axis for an extreme shot FOV", () => {
  const shot = { yaw_deg: 10, pitch_deg: 0, roll_deg: 0, hFOV_deg: 175, vFOV_deg: 30 };
  const [width, height] = [1600, 600];
  const safeRect = { x: 24, y: 24, w: width - 48, h: height - 48 };
  const gate = gateRectFromFocal(safeRect, shot, fitFocalPx(safeRect, shot));
  const { rect, shot: contextShot } = frameViewContext(shot, gate, { width, height });
  const reach = gate.focalPx * Math.tan(85 * DEG2RAD);
  // The gate is wider than 85 degrees reaches, so the context is narrower than the gate and its
  // height is bounded by the canvas.
  assert.ok(reach * 2 < gate.w);
  const close = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} != ${expected}`);
  close(rect.w, reach * 2);
  close(rect.h, height);
  close(rect.x + rect.w / 2, gate.x + gate.w / 2);
  close(rect.y + rect.h / 2, gate.y + gate.h / 2);
  close(contextShot.hFOV_deg, 170);
  close(Math.tan(contextShot.vFOV_deg * 0.5 * DEG2RAD), height / 2 / gate.focalPx);
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

test("the Unwrap sticker uniforms sample the previous unwrap sticker shader's texels", () => {
  const value = { yaw_deg: -120, pitch_deg: 35, roll_deg: -40, hFOV_deg: 80, vFOV_deg: 50 };
  const crop = { x0: 0.05, y0: 0.3, x1: 0.9, y1: 0.75 };
  const state = skyState([{ id: "a", source: { kind: "port" }, crop, transform: { value } }]);
  const [layer] = skyLayers(state, 0, { media: () => ({ media: {}, revision: "" }), zIndex: () => 0, paintLayers: [] });
  const { toSticker, rect } = unwrapStickerUniforms(layer);
  for (const [lon, lat] of [[-120, 35], [-95, 50], [-140, 20], [-110, 55]]) {
    // UNWRAP_STICKER_FRAGMENT for the ERP pixel at lon/lat.
    const lonRad = lon * DEG2RAD;
    const latRad = lat * DEG2RAD;
    const pano = { x: Math.cos(latRad) * Math.sin(lonRad), y: Math.sin(latRad), z: Math.cos(latRad) * Math.cos(lonRad) };
    const local = new Vector3(pano.x, pano.y, -pano.z).applyMatrix3(toSticker);
    const plane = { x: local.x / -local.z, y: local.y / -local.z };
    const uv = { x: (plane.x - rect.x) / (rect.z - rect.x), y: (plane.y - rect.y) / (rect.w - rect.y) };
    // The previous shader's texel: the crop of the full frame, top-left origin; the sticker texture
    // loads with flipY, so uv.y = 1 is the image's top row.
    const full = legacyStickerUv(value, pano);
    const expected = { x: (full.u - crop.x0) / (crop.x1 - crop.x0), y: 1 - (full.v - crop.y0) / (crop.y1 - crop.y0) };
    assert.ok(local.z < 0);
    assert.ok(Math.abs(uv.x - expected.x) < 1e-6 && Math.abs(uv.y - expected.y) < 1e-6, `${lon},${lat}: ${JSON.stringify(uv)} ${JSON.stringify(expected)}`);
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

test("working Stickers with a numeric, missing or repeated id are left out instead of breaking the frame", () => {
  const sticker = (id, z) => ({ id, asset_id: `asset_${z}`, yaw_deg: z * 10, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0, z_index: z });
  const stickers = [sticker(5, 0), sticker("a", 1), sticker("a", 2), sticker("", 3), sticker("b", 4)];
  const assets = Object.fromEntries(stickers.map((item) => [item.asset_id, { type: "comfy_image", filename: `${item.asset_id}.png` }]));
  const editorState = parsePanoEditorState(JSON.stringify({ version: 1, assets, stickers }), {});
  const sceneState = editorSceneState(editorState);
  // Loading keeps the first "a" and "b" and renames the others.
  assert.deepEqual(sceneState.stickers.map((item) => item.id).sort(), ["a", "b", "sticker_1", "sticker_2", "sticker_3"]);
  const seen = [];
  const layers = workingSkyLayers(sceneState, 0, editorState.stickers, {
    media: (item) => {
      seen.push(item);
      return { media: {}, revision: item.asset_id };
    },
    paintLayers: [],
  });
  assert.deepEqual(layers.map((layer) => [layer.id, layer.revision, layer.zIndex]), [["a", "asset_1", 1], ["b", "asset_4", 4]]);
  assert.ok(seen.every((item) => item === editorState.stickers[1] || item === editorState.stickers[4]));
});

test("the view input key changes only with what the view draws", () => {
  const image = {};
  const paint = {};
  const input = (overrides = {}) => ({
    background: { media: image, revision: "bg:1", coverage: 360 },
    layers: [
      { kind: "erp", id: "paint", media: paint, revision: "p:1", opacity: 1, zIndex: 0 },
      { kind: "sticker", id: "s", media: image, revision: "s:1", opacity: 1, zIndex: 1, quaternion: { x: 0, y: 0, z: 0, w: 1 }, rect: { x0: -1, x1: 1, y0: -1, y1: 1 } },
    ],
    ...overrides,
  });
  const key = viewInputKey(input());
  assert.equal(viewInputKey(input()), key);
  assert.notEqual(viewInputKey(input({ background: { media: {}, revision: "bg:1", coverage: 360 } })), key);
  assert.notEqual(viewInputKey(input({ background: { media: image, revision: "bg:2", coverage: 360 } })), key);
  assert.notEqual(viewInputKey(input({ background: null })), key);
  const moved = input();
  moved.layers[1].rect = { x0: -1, x1: 1, y0: -1, y1: 0.5 };
  assert.notEqual(viewInputKey(moved), key);
  const painted = input();
  painted.layers[0].revision = "p:2";
  assert.notEqual(viewInputKey(painted), key);
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

test("only the background follows a 180 coverage; paint layers cover the whole sphere", () => {
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /addErp\(owned, projection, projection\.background, \{ id: "background", opacity: 1, \.\.\.background \}, background\.coverage === 180\)/);
  assert.match(view, /layer\.kind === "erp"\s*\? addErp\(owned, projection, pooled\(projection\.erp, erpIndex\+\+, projection\.createErp\), layer, false\)/);
});

test("the editor hit tests and draws its overlays with the camera its three.js view renders", () => {
  const editor = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
  const body = (name) => editor.slice(editor.indexOf(`  function ${name}(`), editor.indexOf("\n  }\n", editor.indexOf(`  function ${name}(`)));
  assert.match(body("currentViewProjection"), /viewProjection\(currentViewCamera\(\), canvas\.width, canvas\.height\)/);
  assert.match(body("projectDir"), /currentViewProjection\(\)\.project\(dir\)/);
  assert.match(body("screenToWorldDir"), /return currentViewProjection\(\)\.ray\(x, y\);/);
  assert.match(body("projectSceneItemDir"), /currentViewProjection\(\)\.project\(dir, nearZ\)/);
  assert.match(body("renderEditorView"), /camera: currentViewCamera\(\),/);
  assert.doesNotMatch(editor, /currentViewBasis/);
});

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
  deviceLens,
  frameViewContext,
  shotLensImage,
  shotCamera,
  skyLayers,
  viewportCamera,
  viewProjection,
  workingSkyLayers,
} from "../web_src/pano_editor_view.js";
import { parsePanoEditorState } from "../web_src/pano_editor_state.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { portMediaSource } from "../web_src/pano_port_media.js";
import { buildModalShellPreset } from "../web_src/modal_shell_presets.js";
import { applyViewportCamera, createLayerTextures, placeSticker, unwrapStickerUniforms } from "../web_src/pano_three_view.js";
import { worldToPano } from "../web_src/pano_world.js";
import { readEditorSource } from "./editor_source.mjs";

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

function poseLanes({ yaw_deg, pitch_deg, roll_deg, hFOV_deg, vFOV_deg }) {
  return { direction: { value: { yaw_deg, pitch_deg } }, roll: { value: roll_deg }, size: { value: { hFOV_deg, vFOV_deg } } };
}

test("sky Sticker planes cover the rays of the previous sticker shader", () => {
  const value = { yaw_deg: 150, pitch_deg: -40, roll_deg: 25, hFOV_deg: 70, vFOV_deg: 40 };
  const crop = { x0: 0.1, y0: 0.2, x1: 0.8, y1: 0.95 };
  const state = skyState([{ id: "a", source: { kind: "port" }, crop, ...poseLanes(value) }]);
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
  const state = skyState([{ id: "a", source: { kind: "port" }, crop, ...poseLanes(value) }]);
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

// core/math.py vfov_from_hfov, which the run uses for a port Sticker (core/render.py `derive_vfov`).
const derivedVfov = (hfov, width, height) => 2 * Math.atan(Math.tan(hfov * DEG2RAD / 2) * height / width) / DEG2RAD;

test("a port Sticker is drawn at the vFOV its media's aspect gives, as the run derives it", () => {
  const lanes = poseLanes({ yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 60, vFOV_deg: 60 });
  const state = skyState([
    { id: "port", source: { kind: "port" }, ...lanes },
    { id: "file", source: { kind: "file", filename: "a.png" }, ...lanes },
  ]);
  const halfHeight = (media) => Object.fromEntries(skyLayers(state, 0, { media: () => ({ media, revision: "" }), zIndex: () => 0, paintLayers: [] })
    .map((layer) => [layer.id, layer.rect.y1]));

  const image = halfHeight({ naturalWidth: 200, naturalHeight: 100 });
  assert.ok(Math.abs(image.port - Math.tan(derivedVfov(60, 200, 100) * DEG2RAD / 2)) < 1e-12);
  assert.ok(Math.abs(image.file - Math.tan(30 * DEG2RAD)) < 1e-12);
  const video = halfHeight({ videoWidth: 100, videoHeight: 300 });
  assert.ok(Math.abs(video.port - Math.tan(derivedVfov(60, 100, 300) * DEG2RAD / 2)) < 1e-12);
  // Media without a size yet: the stored vFOV stands in.
  assert.ok(Math.abs(halfHeight({ videoWidth: 0, videoHeight: 0 }).port - Math.tan(30 * DEG2RAD)) < 1e-12);
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
  assert.deepEqual(loadSceneState(editorState), JSON.parse(fixture("v1_stickers.v2")));

  editorState.stickers.push({ id: "st_new", asset_id: "asset_a", yaw_deg: 10, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0, z_index: 9 });
  const saved = loadSceneState(editorState);
  const canonical = JSON.parse(fixture("v2_canonical"));
  assert.deepEqual(Object.keys(saved), Object.keys(canonical));
  for (const sticker of saved.stickers) {
    const keys = Object.keys(canonical.stickers[0]);
    assert.deepEqual(Object.keys(sticker), sticker.source.kind === "port" ? [...keys, "handoff_overrides"] : keys);
  }
  assert.deepEqual(loadSceneState(JSON.parse(JSON.stringify(saved))), saved);
});

test("working Stickers with a numeric, missing or repeated id are left out instead of breaking the frame", () => {
  const sticker = (id, z) => ({ id, asset_id: `asset_${z}`, yaw_deg: z * 10, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0, z_index: z });
  const stickers = [sticker(5, 0), sticker("a", 1), sticker("a", 2), sticker("", 3), sticker("b", 4)];
  const assets = Object.fromEntries(stickers.map((item) => [item.asset_id, { type: "comfy_image", filename: `${item.asset_id}.png` }]));
  const editorState = parsePanoEditorState(JSON.stringify({ version: 1, assets, stickers }), {});
  const sceneState = loadSceneState(editorState);
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

test("three.js stays out of the eagerly loaded bundle", () => {
  const bundle = readFileSync(new URL("../web/panorama_suite.js", import.meta.url), "utf8");
  const [chunkName] = readdirSync(new URL("../web/.lazy/", import.meta.url)).filter((name) => name.startsWith("pano_three_view-"));
  const chunk = readFileSync(new URL(`../web/.lazy/${chunkName}`, import.meta.url), "utf8");
  assert.ok(!bundle.includes("Three.js Authors"));
  assert.ok(bundle.includes(`import("./.lazy/${chunkName}")`));
  assert.ok(chunk.includes("Three.js Authors"));
  assert.ok(!/^import\s/m.test(chunk));
});

test("a background VIDEO uploads through a VideoTexture, which sizes its storage from the video", () => {
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /media instanceof HTMLVideoElement \? new VideoTexture\(media\) : new Texture\(media\)/);
});

function withVideoElement(run) {
  const previous = globalThis.HTMLVideoElement;
  globalThis.HTMLVideoElement = class { static HAVE_CURRENT_DATA = 2; };
  try {
    run();
  } finally {
    globalThis.HTMLVideoElement = previous;
  }
}

// One draw of `owner`: run(draw) with draw.drawable and draw.texture, then the draw ends.
function drawWith(textures, owner, run) {
  const draw = textures.draw(owner);
  const result = run(draw);
  draw.end();
  return result;
}

function countDisposes(texture) {
  const counter = { count: 0 };
  texture.addEventListener("dispose", () => { counter.count += 1; });
  return counter;
}

// The editor's background switches between its still canvas and the playing <video> of one source. A
// <video> that is loading or seeking has nothing to upload, so the texture of the frame before stays
// until it has.
test("a layer keeps its texture until new media of the same source has a picture", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 1 });
  const still = { width: 64, height: 32 };
  const textures = createLayerTextures();
  const stillTexture = drawWith(textures, "stage", (draw) => draw.texture({ id: "background", media: still, revision: "1", source: "bg.mp4" }, 0, false));
  const disposed = countDisposes(stillTexture);
  drawWith(textures, "stage", (draw) => {
    assert.equal(draw.drawable({ id: "background", media: video, source: "bg.mp4" }), true);
    assert.equal(draw.texture({ id: "background", media: video, revision: "v", source: "bg.mp4" }, 0, false), stillTexture);
  });
  assert.equal(disposed.count, 0);
  video.readyState = 2;
  const videoTexture = drawWith(textures, "stage", (draw) => draw.texture({ id: "background", media: video, revision: "v", source: "bg.mp4" }, 0, false));
  assert.notEqual(videoTexture, stillTexture);
  assert.equal(videoTexture.isVideoTexture, true);
  assert.equal(disposed.count, 1);
  assert.equal(textures.size, 1);
}));

test("a port Sticker's VIDEO keeps its frame while it seeks or loops", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 2 });
  const still = { width: 64, height: 32 };
  const textures = createLayerTextures();
  const playing = drawWith(textures, "stage", (draw) => draw.texture({ id: "sticker_1", media: video, revision: "a", source: "port.mp4" }, 0, true));
  // The playhead seeks: the follower shows its still, then the VIDEO again, which is still seeking.
  const seeking = drawWith(textures, "stage", (draw) => draw.texture({ id: "sticker_1", media: still, revision: "b", source: "port.mp4" }, 0, true));
  video.readyState = 1;
  drawWith(textures, "stage", (draw) => {
    assert.equal(draw.drawable({ id: "sticker_1", media: video, source: "port.mp4" }), true);
    assert.equal(draw.texture({ id: "sticker_1", media: video, revision: "c", source: "port.mp4" }, 0, true), seeking);
  });
  assert.notEqual(seeking, playing);
}));

// A VIDEO on the port Sticker is swapped for an IMAGE without a run. The node surface makes the port
// Sticker again under the same id, and the IMAGE's first frame may not have loaded yet: the frame of
// the VIDEO must not stand in for it.
test("other media on a layer never shows the frame of the media before", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 2 });
  const textures = createLayerTextures();
  const videoTexture = drawWith(textures, "stage", (draw) => draw.texture({ id: "sticker_1", media: video, revision: "a", source: "port.mp4" }, 0, true));
  const disposed = countDisposes(videoTexture);
  const loading = { naturalWidth: 0, naturalHeight: 0 };
  const image = { naturalWidth: 32, naturalHeight: 32 };
  const imageTexture = drawWith(textures, "stage", (draw) => {
    assert.equal(draw.drawable({ id: "sticker_1", media: loading, source: loading }), false);
    assert.equal(draw.drawable({ id: "sticker_1", media: loading }), false);
    return draw.texture({ id: "sticker_1", media: image, revision: "i" }, 0, true);
  });
  assert.notEqual(imageTexture, videoTexture);
  assert.equal(imageTexture.image, image);
  assert.equal(disposed.count, 1);
  // The same <video> element given another source drops the frame of the one before too.
  const again = drawWith(textures, "stage", (draw) => draw.texture({ id: "sticker_1", media: video, revision: "a", source: "other.mp4" }, 0, true));
  assert.notEqual(again, videoTexture);
  video.readyState = 1;
  drawWith(textures, "stage", (draw) => {
    assert.equal(draw.drawable({ id: "sticker_1", media: video, source: "next.mp4" }), false);
  });
}));

// The editor's stage and its camera preview draw the same 1080p background on one view: it uploads once,
// and a playing VIDEO has one VideoTexture, which goes when neither draws it any more.
test("owners of a view that show the same media share one texture until none uses it", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 1920, videoHeight: 960, readyState: 2 });
  const background = { id: "background", media: video, revision: "1", source: "bg.mp4" };
  const textures = createLayerTextures();
  const stage = drawWith(textures, undefined, (draw) => draw.texture(background, 0, false));
  const preview = drawWith(textures, "camera_preview", (draw) => draw.texture(background, 0, false));
  assert.equal(preview, stage);
  assert.equal(textures.size, 1);
  const disposed = countDisposes(stage);
  // A new frame of a still: one upload for both owners.
  const still = { width: 64, height: 32 };
  const both = (owner, revision) => drawWith(textures, owner, (draw) => {
    draw.texture(background, 0, false);
    return draw.texture({ id: "s", media: still, revision }, 0, true);
  });
  const first = both(undefined, "1");
  first.version = 0;
  both("camera_preview", "2");
  both(undefined, "2");
  assert.equal(first.version, 1);
  // The stage draws something else; the preview still draws the VIDEO.
  drawWith(textures, undefined, () => {});
  assert.equal(disposed.count, 0);
  textures.release("camera_preview");
  assert.equal(disposed.count, 1);
  assert.equal(textures.size, 0);
}));

test("a texture another owner still draws stays when one owner releases", () => withVideoElement(() => {
  const image = { naturalWidth: 32, naturalHeight: 32 };
  const textures = createLayerTextures();
  const shared = drawWith(textures, "a", (draw) => draw.texture({ id: "x", media: image, revision: "1" }, 0, true));
  drawWith(textures, "b", (draw) => draw.texture({ id: "y", media: image, revision: "1" }, 0, true));
  const disposed = countDisposes(shared);
  textures.release("a");
  assert.equal(disposed.count, 0);
  textures.release("b");
  assert.equal(disposed.count, 1);
  // A flipped upload of the same media is a texture of its own.
  const flipped = drawWith(textures, "a", (draw) => [draw.texture({ id: "x", media: image, revision: "1" }, 0, true), draw.texture({ id: "z", media: image, revision: "1" }, 0, false)]);
  assert.notEqual(flipped[0], flipped[1]);
  assert.equal(textures.size, 2);
}));

// The camera preview hides (releaseSplats drops its marks): what only it drew is disposed, what the stage
// draws too stays.
test("the camera preview's hide disposes the textures only it drew", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 1920, videoHeight: 960, readyState: 2 });
  const background = { id: "background", media: video, revision: "1", source: "bg.mp4" };
  const sticker = { id: "s", media: { naturalWidth: 32, naturalHeight: 32 }, revision: "1" };
  const textures = createLayerTextures();
  const shared = drawWith(textures, undefined, (draw) => draw.texture(background, 0, false));
  const own = drawWith(textures, "camera_preview", (draw) => [draw.texture(background, 0, false), draw.texture(sticker, 0, true)])[1];
  const disposed = [countDisposes(shared), countDisposes(own)];
  textures.release("camera_preview");
  assert.deepEqual(disposed.map((each) => each.count), [0, 1]);
  assert.equal(textures.size, 1);
  // Shown again, the preview draws with the stage's texture.
  assert.equal(drawWith(textures, "camera_preview", (draw) => draw.texture(background, 0, false)), shared);
}));

// One <video> element of both owners loads another source: the owner that has not drawn the new source's
// picture yet must not take the texture of it as the picture of its source before.
test("an owner switching a shared media's source does not make it drawable for another owner", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 2 });
  const textures = createLayerTextures();
  const layer = (source) => ({ id: "background", media: video, revision: "1", source });
  const before = drawWith(textures, "a", (draw) => draw.texture(layer("a.mp4"), 0, false));
  drawWith(textures, "b", (draw) => draw.texture(layer("a.mp4"), 0, false));
  const disposed = countDisposes(before);
  const next = drawWith(textures, "a", (draw) => draw.texture(layer("b.mp4"), 0, false));
  assert.notEqual(next, before);
  // b still draws with the texture of a.mp4 until it moves on.
  assert.equal(disposed.count, 0);
  video.readyState = 1;
  drawWith(textures, "b", (draw) => {
    assert.equal(draw.drawable(layer("b.mp4")), false);
  });
  assert.equal(disposed.count, 1);
  video.readyState = 2;
  assert.equal(drawWith(textures, "b", (draw) => draw.texture(layer("b.mp4"), 0, false)), next);
  assert.equal(textures.size, 1);
}));

// The stage moves from the still to the playing VIDEO first; the preview, whose VIDEO is seeking when it
// draws, keeps the still until the VIDEO has a picture.
test("the stage advanced to the VIDEO, the preview keeps its still until the VIDEO has a picture", () => withVideoElement(() => {
  const video = Object.assign(new globalThis.HTMLVideoElement(), { videoWidth: 64, videoHeight: 32, readyState: 2 });
  const still = { width: 64, height: 32 };
  const textures = createLayerTextures();
  const stillLayer = { id: "background", media: still, revision: "1", source: "bg.mp4" };
  const videoLayer = { id: "background", media: video, revision: "v", source: "bg.mp4" };
  const stillTexture = drawWith(textures, undefined, (draw) => draw.texture(stillLayer, 0, false));
  drawWith(textures, "camera_preview", (draw) => draw.texture(stillLayer, 0, false));
  const disposed = countDisposes(stillTexture);
  const videoTexture = drawWith(textures, undefined, (draw) => draw.texture(videoLayer, 0, false));
  assert.notEqual(videoTexture, stillTexture);
  video.readyState = 1;
  drawWith(textures, "camera_preview", (draw) => {
    assert.equal(draw.drawable(videoLayer), true);
    assert.equal(draw.texture(videoLayer, 0, false), stillTexture);
  });
  assert.equal(disposed.count, 0);
  video.readyState = 2;
  assert.equal(drawWith(textures, "camera_preview", (draw) => draw.texture(videoLayer, 0, false)), videoTexture);
  assert.equal(disposed.count, 1);
  assert.equal(textures.size, 1);
}));

// wrapS is a sampler state of the texture: a 360 and a 180 ERP of one media are textures of their own, so
// owners drawing both do not re-upload it on each draw.
test("one media drawn with two wraps has a texture for each", () => withVideoElement(() => {
  const image = { naturalWidth: 32, naturalHeight: 16 };
  const textures = createLayerTextures();
  const [repeat, clamp] = drawWith(textures, "a", (draw) => [
    draw.texture({ id: "x", media: image, revision: "1" }, 1000, false),
    draw.texture({ id: "y", media: image, revision: "1" }, 1001, false),
  ]);
  assert.notEqual(repeat, clamp);
  assert.deepEqual([repeat.wrapS, clamp.wrapS], [1000, 1001]);
  const versions = [repeat.version, clamp.version];
  drawWith(textures, "a", (draw) => [
    draw.texture({ id: "x", media: image, revision: "1" }, 1000, false),
    draw.texture({ id: "y", media: image, revision: "1" }, 1001, false),
  ]);
  assert.deepEqual([repeat.version, clamp.version], versions);
}));

// A draw that throws still marks what it used, so nothing is left without an owner.
test("a draw that throws ends with its marks", () => {
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /const owned = layerTextures\.draw\(input\.owner\);\s*try \{[\s\S]*?\} finally \{\s*owned\.end\(\);\s*\}/);
});

test("the port Sticker's source is its media, so a swap on the port changes it", () => {
  const first = { naturalWidth: 32, naturalHeight: 32 };
  assert.equal(portMediaSource({ src: "a.mp4", meta: {} }, first), "a.mp4");
  assert.equal(portMediaSource({ frames: ["0.png", "1.png"], meta: {} }, first), "0.png\n1.png");
  assert.equal(portMediaSource(null, first), first);
  assert.notEqual(portMediaSource({ src: "a.mp4", meta: {} }, first), portMediaSource(null, { naturalWidth: 32 }));
});

test("the editor hit tests and draws its overlays with the camera its three.js view renders", () => {
  const editor = readEditorSource();
  const body = (name) => editor.slice(editor.indexOf(`  function ${name}(`), editor.indexOf("\n  }\n", editor.indexOf(`  function ${name}(`)));
  assert.match(body("currentViewProjection"), /viewProjection\(currentViewCamera\(\), canvas\.width, canvas\.height\)/);
  assert.match(body("projectDir"), /currentViewProjection\(\)\.project\(dir\)/);
  assert.match(body("screenToWorldDir"), /return currentViewProjection\(\)\.ray\(x, y\);/);
  assert.match(body("projectSceneItemDir"), /currentViewProjection\(\)\.project\(dir, nearZ\)/);
  // In space the same angles stand at the Viewport camera's position (pano_space.js spaceCamera).
  assert.match(body("renderEditorView"), /camera: space \? spaceCamera\(spaceViewState\(\), width, height, space\.sphere\) : currentViewCamera\(\),/);
  assert.doesNotMatch(editor, /currentViewBasis/);
});

// The Timeline under the stage changes the stage's height. The view keeps its width's field of
// view and its center, so a shorter stage only crops the top and bottom: nothing zooms or slides
// sideways, and every direction keeps its distance from the stage's center.
test("a viewport camera keeps the content's scale and center when the stage gets shorter", () => {
  const view = { yaw_deg: 40, pitch_deg: 12, roll_deg: 0, hFOV_deg: 100 };
  const tall = viewProjection(viewportCamera(view, 1200, 760), 1200, 760);
  const short = viewProjection(viewportCamera(view, 1200, 480), 1200, 480);
  for (const [x, y] of [[600, 380], [100, 300], [1100, 500], [640, 200]]) {
    const dir = tall.ray(x, y);
    const point = short.project(dir);
    assert.ok(Math.abs(point.x - x) < 1e-6, `${x},${y}: x ${point.x}`);
    assert.ok(Math.abs(point.y - 240 - (y - 380)) < 1e-6, `${x},${y}: y ${point.y}`);
  }
});

// A canvas left at its old size for one painted frame shows its frame stretched; the stage resizes
// and draws from a ResizeObserver, which runs after layout and before paint, instead of polling.
test("the editor resizes and redraws the stage in the frame its layout changes", () => {
  const editor = readEditorSource();
  // It only resizes and draws, through the same error guard as the tick, and leaves the animations
  // and the tick's clock to the next tick.
  assert.match(editor, /const stageResizeObserver = new ResizeObserver\(redrawNow\);/);
  const redraw = editor.slice(editor.indexOf("  function redrawNow() {"), editor.indexOf("\n  }\n", editor.indexOf("  function redrawNow() {")));
  assert.match(redraw, /if \(!runtime\.running \|\| !syncCanvasSize\(\)\) return;\s*runGuardedFrame\(\(\) => \{\s*runtime\.dirty = false;\s*drawScene\(new Set\(\[DRAW_REASON\.RESIZE\]\)\);/);
  assert.doesNotMatch(redraw, /tickFrame/);
  assert.match(editor, /function tick\(ts = performance\.now\(\), reasons = new Set\(\)\) \{\s*if \(!runtime\.running\) return;\s*const frameStart = diagnosticsFrameStart\(\);\s*runGuardedFrame\(\(\) => tickFrame\(ts, reasons\)\);/);
  assert.match(editor, /stageResizeObserver\.observe\(canvas\);/);
  assert.doesNotMatch(editor, /lastSizeCheckTs/);
  const timeline = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.doesNotMatch(timeline, /v-show="model\.expanded"/);
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.match(css, /\.pano-timeline-body \{[^}]*transition: height 180ms/);
  assert.match(css, /\.pano-timeline-body\.open \{\s*height: min\(var\(--pano-timeline-rows\), 34vh\);/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\) \{\s*\.pano-timeline-body \{\s*transition: none;/);
  // A transition cut short (the Timeline toggled again mid-slide) ends the slide too.
  assert.match(timeline, /@transitionend\.self="sliding = false"\s*@transitioncancel\.self="sliding = false"/);
});

test("the space view draws the world Stickers shown at the playhead as planes of their cropped media", async () => {
  const { worldStickerLayers } = await import("../web_src/pano_editor_view.js");
  const world = (id, extra = {}) => ({
    id,
    placement: "world",
    source: { kind: "file", filename: `${id}.png` },
    position: { value: [1, 2, -3], keyframes: [] },
    rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, keyframes: [] },
    scale: { value: 2, keyframes: [] },
    opacity: { value: 0.5, keyframes: [] },
    ...extra,
  });
  const state = loadSceneState({
    version: 2,
    stickers: [
      world("w1", { crop: { x0: 0, y0: 0, x1: 1, y1: 0.5 } }),
      world("w2", { clip: { start: 10, in: 0, duration: null } }),
      world("w3", { visible: false }),
      { id: "s1", placement: "sky", source: { kind: "file", filename: "s1.png" } },
      world("w4"),
    ],
  });
  const image = { naturalWidth: 400, naturalHeight: 200 };
  const layers = worldStickerLayers(state, 0, state.stickers, { media: (item) => (item.id === "w4" ? null : { media: image, revision: 1 }) });
  assert.deepEqual(layers.map((layer) => layer.id), ["w1"]);
  assert.deepEqual(layers[0].position, [1, 2, -3]);
  assert.equal(layers[0].width, 2);
  assert.equal(layers[0].height, 0.5);
  assert.equal(layers[0].opacity, 0.5);
  assert.deepEqual(layers[0].crop, { x0: 0, y0: 0, x1: 1, y1: 0.5 });
  assert.deepEqual(worldStickerLayers(state, 12, state.stickers, { media: () => ({ media: image, revision: 1 }) }).map((layer) => layer.id), ["w1", "w2", "w4"]);
});

// docs/threejs-spark-integration.md: a 3D file Sticker draws its item, never a plane, and is not read as an image.
test("a Sticker whose Source is a 3D file is neither a plane nor a Sky layer, and its media is never asked for", async () => {
  const { skyLayers, worldStickerLayers } = await import("../web_src/pano_editor_view.js");
  const state = loadSceneState({
    version: 2,
    stickers: [
      { id: "w1", placement: "world", source: { kind: "file", filename: "chair.glb", subfolder: "3d" } },
      { id: "w2", placement: "world", source: { kind: "file", filename: "a.png" } },
      // A sky Sticker with a 3D file (a hand-written state) is not drawn, as the node does not draw it.
      { id: "s1", placement: "sky", source: { kind: "file", filename: "points.ply", subfolder: "3d" } },
      { id: "s2", placement: "sky", source: { kind: "file", filename: "b.png" } },
    ],
  });
  const asked = [];
  const media = (item) => {
    asked.push(item.id);
    return { media: { naturalWidth: 4, naturalHeight: 2 }, revision: 1 };
  };
  assert.deepEqual(worldStickerLayers(state, 0, state.stickers, { media }).map((layer) => layer.id), ["w2"]);
  assert.deepEqual(skyLayers(state, 0, { media, zIndex: () => 0, paintLayers: [] }).map((layer) => layer.id), ["s2"]);
  assert.deepEqual(asked, ["w2", "s2"]);
});

test("the three.js view picks the World content it last drew, not its guides", () => {
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  // What is seen is picked: meshes on the GPU, a SPLAT on its box (Spark's own raycast is off).
  assert.match(view, /if \(content\.splat && !Spark\) continue;\s*if \(content\.splat\) sparkViews\.splat\(owner, content\.object\);\s*children\.push\(content\.group\);/);
  assert.match(view, /if \(!\(opacity > 0\)\) continue;\s*if \(content\.splat\) pickBoxes\.push\(\{ object: content\.object, box: content\.box, stickerId: content\.stickerId \}\);\s*else pickable\.push\(\{ object: content\.group, stickerId: content\.stickerId, plane: false \}\);/);
  assert.match(view, /if \(!\(layer\.opacity > 0\)\) continue;\s*pickable\.push\(\{ object: mesh, stickerId: layer\.id, plane: true \}\);/);
  assert.match(view, /return pickAt\(camera, x, y, width, height\)\?\.point \?\? null;/);
  // A SPLAT's box is marked, and the navigation pick leaves it out (pickSurface).
  assert.match(view, /if \(depth !== null\) hits\.push\(\{ depth, stickerId, box: true \}\);/);
  assert.match(view, /box: nearest\.box === true,/);
  assert.match(view, /return hit && !hit\.box \? hit\.point : null;/);
  assert.match(view, /return pickPass\(world, pickable, pickMaterial, /);
  // A failed draw switches from the float target to RGBA8, then gives up, and is not kept as a pick.
  assert.match(view, /if \(float\) pickFloat = false;\s*else pickFailed = true;\s*return false;/);
  assert.match(view, /renderer\.setRenderTarget\(target\);\s*try \{\s*renderer\.render\(world, pickCamera\);\s*\} finally \{\s*renderer\.setRenderTarget\(null\);/);
  assert.match(view, /if \(drawn !== false\) lastPick = \{ key, hit \};/);
  const loaders = readFileSync(new URL("../web_src/pano_scene_loaders.js", import.meta.url), "utf8");
  assert.match(loaders, /new SplatMesh\(\{ fileBytes: bytes, fileType: "ply", raycastable: false \}\)/);
  // Its content revision changes with the items drawn and their transforms, and with the Sticker planes;
  // a pick is reused while it, the view and the pixel stay.
  assert.match(view, /parts\.push\(\[content\.object\.uuid, content\.transform\]\);/);
  assert.match(view, /if \(!sameValue\(parts, contentParts\)\) \{\s*contentParts = parts;\s*contentRevision \+= 1;\s*\}/);
  assert.match(view, /const key = pickCacheKey\(camera, x, y, width, height, contentRevision\);\s*if \(lastPick\.key === key\) return lastPick\.hit;/);
  // Spark's LoD worker is not started.
  assert.match(view, /new Spark\.SparkRenderer\(\{ renderer, onDirty, enableLod: false \}\)/);
});

test("a 3D world port Sticker (#63) has no plane: the space view draws its item instead", async () => {
  const { worldStickerLayers } = await import("../web_src/pano_editor_view.js");
  const state = loadSceneState({ version: 2, stickers: [{ id: "sticker_image_1", placement: "world", source: { kind: "port" }, position: { value: [0, 0, -2], keyframes: [] } }] });
  // The node gives a 3D port Sticker no image (pano_sticker_input_images), so the editor has no media.
  assert.deepEqual(worldStickerLayers(state, 0, state.stickers, { media: () => null }), []);
  const editor = readEditorSource();
  // Its files are used while the `sticker` input comes from where the run's did.
  assert.match(editor, /isNodeOutputMediaCurrent\(node, "external-sticker"\)\) return null;\s*return sceneFilesOf\(getNodeUiList\("pano_sticker_files"\), getNodeUiList\("pano_sticker_meta"\), mediaSource\);/);
  assert.match(editor, /const sticker = withColors\("sticker", stickerContentRequest\(portFiles, sceneState, evaluated\)\);/);
  assert.match(editor, /stickerUrls: stickerContentUrls\(portFiles, sceneState\),/);
  // A see-through GLB does not write depth, and writes it again at full opacity.
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /material\.transparent = opacity < 1;\s*material\.depthWrite = opacity >= 1;/);
});

test("in the space view a press picks the gizmo first, then a world Sticker, then the sky Stickers", () => {
  const editor = readEditorSource();
  const down = editor.slice(editor.indexOf("  function onCanvasPointerDown(e) {"), editor.indexOf("  // A left drag on empty space of the panorama view looks around;"));
  const press = down.indexOf('if (editor.primaryTool === "cursor" && sceneV2 && isSpaceView() && startWorldStickerPress(e, p)) return;');
  assert.ok(press > down.indexOf('kind: "marquee_select"'));
  assert.ok(press < down.indexOf("if (selectedItems.length > 1 && selGeom?.visible) {"));
  assert.ok(press < down.indexOf("const hit = hitObjectAt(p);"));
  const start = editor.slice(editor.indexOf("  function startWorldStickerPress(e, p) {"), editor.indexOf("  // The gizmo highlights the handle under the pointer"));
  assert.ok(start.indexOf('worldGizmoPointer("down", p)') < start.indexOf("editorView.pickSticker("));
  // Only a world Sticker is selected by its id, the node's own or an upstream element's (ADR 0030); the `scene`
  // content leaves the press to the Sky.
  assert.match(start, /if \(stickerById\(id\)\?\.placement !== "world"\) return false;/);
  assert.match(editor, /function stickerById\(id\) \{\s*return state\.stickers\.find\(\(item\) => item\.id === id\) \|\| upstreamStickers\(\)\.find\(\(item\) => item\.id === id\) \|\| null;/);
  assert.match(start, /selectWorldSticker\(id\);/);
  // Selecting does not stop playback; a gizmo drag stops it on its first move and starts over from that frame.
  assert.match(editor, /if \(!\["view", "marquee_select", "space_pan", "space_orbit", "world_select"\]\.includes\(it\.kind\)\) restartEditAtStoppedFrame\(it, down\);/);
  const restart = editor.slice(editor.indexOf("  function restartEditAtStoppedFrame(it, down) {"));
  assert.match(restart, /playback\.stop\(\);\s*if \(it\.kind === "frame_pan"\) return;\s*if \(it\.kind === "frame_orbit"\) \{[\s\S]*?\n    \}\n\s*if \(it\.kind === "world_gizmo"\) \{\s*const sticker = stickerById\(it\.id\);\s*if \(it\.camera\) it\.base = cutoutCamera\(\);\s*else if \(sticker\) it\.base = evaluateSticker\(sticker, editor\.frame\);/);
  // The drag writes the gizmo mode's Lane by the recording rule, and a changed drag is one Undo step.
  assert.match(editor, /setWorldStickerTransform\(sticker, editor\.frame, gizmoDragLanes\(it\.mode, it\.base, it\.start, moved\)\);/);
  assert.match(editor, /if \(ended\.changed\) \{\s*pushHistory\(\);\s*commitAndRefreshNode\(\);/);
  // The inspector edits the same Lanes.
  assert.match(editor, /setWorldStickerField\(worldInspected, editor\.frame, key, out\);/);
});

test("a Move | Rotate | Scale segmented control in the world Sticker's selection menu picks the gizmo mode; no key or toggle button flips it", () => {
  assert.equal("gizmoButtons" in buildModalShellPreset("stickers"), false);
  const menu = readFileSync(new URL("../web_src/components/PanoSelectionMenu.vue", import.meta.url), "utf8");
  assert.match(menu, /<PanoSegments\s+v-else-if="item\.kind === 'segments'"\s+:buttons="item\.buttons \|\| \[\]"\s+:attr="item\.attr"/);
  const modal = readFileSync(new URL("../web_src/components/PanoModal.vue", import.meta.url), "utf8");
  assert.doesNotMatch(modal, /gizmo-buttons/);
  const editor = readEditorSource();
  assert.match(editor, /editor\.gizmoMode = gizmoModeTarget\.getAttribute\("data-gizmo-mode"\);/);
  // W and R are ComfyUI's own shortcuts (workflows, refresh), so the editor binds no gizmo keys.
  assert.doesNotMatch(editor, /gizmoMode = (?!gizmoModeTarget)/);
  // The gizmo is three.js TransformControls in the lazily loaded view, drawn in the World pass.
  const view = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(view, /import \{ TransformControls \} from "three\/examples\/jsm\/controls\/TransformControls\.js";/);
  assert.match(view, /return \[target, controls\.getHelper\(\)\];/);
  assert.doesNotMatch(editor, /TransformControls/);
});

test("the world Sticker's selection menu shows exactly while its gizmo does, and follows it", () => {
  const editor = readEditorSource();
  // A selected world Sticker takes the menu instead of the canvas selection's.
  const update = editor.slice(editor.indexOf("  function updateSelectionMenu() {"), editor.indexOf("  function showSelectionMenu(model) {"));
  const takes = 'if (editor.worldSelectedId || (isCameraSelected() && isFreeSpaceView())) {';
  assert.ok(update.indexOf('if (editor.mode === "frame")') < update.indexOf(takes));
  assert.ok(update.indexOf(takes) < update.indexOf("const selected = getSelected();"));
  // It is the gizmo's own condition (worldGizmo: shown, editable, i.e. not locked and not read-only, and
  // active at the playhead), in the space view, hidden during a press or a drag like the canvas menu.
  const world = update.slice(update.indexOf("  function worldSelectionMenuModel() {"));
  assert.match(world, /const space = isSpaceView\(\) && !editor\.interaction \? editorViewInput\(\)\.space : null;\s*if \(!space\?\.gizmo\) return \{ visible: false \};/);
  assert.match(editor, /if \(!worldStickerEditable\(sticker\) \|\| !value\?\.active\) return null;/);
  // An upstream element of a layer that is only inherited is locked (ADR 0030).
  assert.match(editor, /function worldStickerEditable\(sticker\) \{\s*return !!sticker && !readOnly && !isItemLocked\(sticker\);/);
  assert.match(editor, /if \(isUpstreamSticker\(item\) && !upstreamStickerEditable\(item\)\) return true;\s*return item\.locked === true;/);
  // A world selection is a single Sticker: selecting one clears the canvas selection, and the reverse.
  assert.match(editor, /function selectWorldSticker\(id\) \{\s*setSelectedItem\(null\);/);
  assert.match(editor, /function setSelectedItems\(items, primaryId = null\) \{[\s\S]*?clearWorldSelection\(\);/);
  // Each frame of the view keeps it under the Sticker (view, playhead) and takes it away with the gizmo.
  assert.match(editor, /syncFloatingViewButtonState\(\);\s*\/\/ [^\n]*\n\s*if \(editor\.worldSelectedId \|\| isCameraSelected\(\) \|\| isWorldMenuShown\(\)\) updateSelectionMenu\(\);/);
  // Both menus are placed by selectionMenuPlacement, which never hides them (also after measuring).
  const show = editor.slice(editor.indexOf("  function showSelectionMenu(model) {"), editor.indexOf("  function hideTooltip() {"));
  assert.match(show, /selectionMenuPlacement\(model\.anchor, menuW, menuH, canvas\.width, canvas\.height\)/);
  assert.doesNotMatch(show, /uiState\.selectionMenu\.visible = false/);
  // A segment marks its mode at once.
  assert.match(editor, /editor\.gizmoMode = gizmoModeTarget\.getAttribute\("data-gizmo-mode"\);\s*runtime\.backgroundDirty = true;\s*updateSelectionMenu\(\);/);
});

test("Panorama Studio's editor edits its Camera: the shot follows it, the Frame view moves it in space, the gizmo moves it in 6DoF", () => {
  const editor = readEditorSource();
  // The shot is the Camera at the playhead; an edit goes back to its Lanes before the playhead moves.
  assert.match(editor, /function setTimelineFrame\(frame\) \{[\s\S]*?syncCutoutShot\(\);\s*editor\.frame = next;\s*timelinePlayhead\.frame\.value = next;\s*syncCutoutShot\(\);/);
  assert.match(editor, /if \(keep && shot && cutoutShotBase\) setCameraShot\(state\.camera, editor\.frame, shot, cutoutShotBase\);/);
  // With World content the Frame view's drags of the 3D view controls orbit and pan the Camera (its wheel:
  // tests/editor_frame_wheel.test.mjs).
  assert.match(editor, /if \(freeFrame && spaceAction\) \{[\s\S]*?startFrameDrag\(spaceAction, p, e\.pointerId\);/);
  // The frame and the camera preview see the World from the Camera's position.
  assert.match(editor, /return placedCamera\(shotCamera\(shot\), shot\.position, frameViewDistance\(\), content\.sphere\);/);
  // In 6DoF the gizmo writes the Camera's Lane of its mode by the recording rule.
  assert.match(editor, /setLaneValue\(state\.camera, name, editor\.frame, value\)/);
  assert.match(editor, /if \(cameraV2 && isShotItem\(item\) && isFreeSpaceView\(\)\) return \{ visible: false \};/);
  // A Frame view orbit that stops playback picks its point again on the stopped frame, as a gizmo drag
  // takes its base; a pan keeps its depth, which does not depend on where the Camera is.
  assert.match(editor, /if \(it\.kind === "frame_orbit"\) \{[\s\S]*?if \(context\) it\.pivot = frameTarget\(context, frameSpaceView\(context\), down\);/);
  // A Frame view pan moves at the pivot's depth, the content's size whatever the zooms before, and an
  // orbit or a wheel step works on the point under the pointer off a SPLAT's box.
  assert.match(editor, /: \{ kind: "frame_pan", last: p, depth: panDepth\(view, spaceScale\(\)\), changed: false \};/);
  assert.match(editor, /function frameViewDistance\(\) \{\s*return contentSphere\(\)\?\.radius \|\| DEFAULT_DISTANCE;\s*\}/);
  assert.doesNotMatch(editor, /frameDistance/);
  assert.match(editor, /return editorView\.pickSurface\(shotViewCamera\(context\.shot\), p\.x - rect\.x, p\.y - rect\.y, rect\.w, rect\.h\);/);
  // Closing the editor without an edit leaves state_json as it is, though the editor rebased it.
  assert.match(editor, /editorStateWrite\(node, stored, String\(stateWidget\.value \?\? ""\), \{ rebased: cameraV2 \}\)/);
});

test("Panorama Studio's editor adds and deletes its one Camera without moving the view at once (#89)", () => {
  const editor = readEditorSource();
  // The Stickers editor of state v2 with the Cutout's Camera, which the node marks.
  assert.match(editor, /const studio = sceneV2 && node\.__panoStudio === true;/);
  assert.match(editor, /const shellPreset = buildModalShellPreset\(studio \? "studio" : type\);/);
  // Add Camera: where the view stands and looks, disabled while there is one.
  assert.match(editor, /state\.camera = newStudioCamera\(spaceViewState\(\)\);/);
  assert.match(editor, /patchUiButton\(uiState\.toolButtons, "value", "add-camera", \{ disabled: hasCamera\(\) \}\);/);
  // Delete saves no Camera, and the shot goes with it.
  assert.match(editor, /function deleteStudioCamera\(\) \{[\s\S]*?state\.camera = null;/);
  assert.match(editor, /if \(studio && isShotItem\(selected\)\) \{\s*deleteStudioCamera\(\);/);
  assert.match(editor, /if \(!cameraShoots\(\)\) \{\s*cutoutShotBase = null;\s*if \(state\.shots\?\.length\) state\.shots = \[\];\s*if \(before\) followCameraChange\(before, null\);/);
  // 3DoF moves to where it stands now over a transition, which enters 3DoF when it arrives.
  assert.match(editor, /applySpaceMode\(\{ mode: "6dof", position: from, moved: true \}\);[\s\S]*?transitionView\(\{ \.\.\.view, position: to \}, \{ mode: "3dof", moved: false \}\);/);
  // The Frame tab is always there; without a frame to show it is disabled, and Studio leaves it for the panorama.
  assert.match(editor, /if \(editor\.mode === "frame" && frameButton\.disabled\) \{\s*if \(studio\) leaveFrameView\(getActiveCutoutShot\(\)\);/);
  assert.match(editor, /button\.visible = !\(button\.key === "frame" && !shotEditor\);/);
});

test("every three view draw leaves the unpack flags off, so Spark's raw integer upload never runs premultiplied", () => {
  // Chrome crashes the tab on texSubImage2D(RGBA_INTEGER, UNSIGNED_INT) with UNPACK_PREMULTIPLY_ALPHA set,
  // which Spark issues for its sort order after three uploaded a premultiplied Sky layer.
  const source = readFileSync(new URL("../web_src/pano_three_view.js", import.meta.url), "utf8");
  assert.match(source, /function settleUnpack\(\) \{[\s\S]*?UNPACK_PREMULTIPLY_ALPHA_WEBGL, false\)[\s\S]*?UNPACK_FLIP_Y_WEBGL, false\)/);
  assert.match(source, /settleUnpack\(\);\s*return \{ canvas, x: at\.x/);
});

// ADR 0042: the Frame view draws a lens Camera's image over the whole canvas, centered on the gate with the gate's f,
// in the three.js canvas's device pixels.
test("a lens Camera's Frame view centers its image on the gate at the gate's f, in device pixels", () => {
  const shot = { yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: 200, vFOV_deg: 150, curve: 0.4, position: [0, 0, 0] };
  const gate = { x: 100, y: 60, w: 400, h: 300, focalPx: 180 };
  const context = frameViewContext(shot, gate, { width: 700, height: 420 });
  // The canvas is covered, the gate's center is the image's.
  assert.ok(context.rect.x <= 0 && context.rect.y <= 0 && context.rect.x + context.rect.w >= 700 && context.rect.y + context.rect.h >= 420);
  assert.deepEqual([context.rect.x + context.lens.centerX, context.rect.y + context.lens.centerY], [300, 210]);
  const image = shotLensImage(shot, context.rect.w * 2, context.rect.h * 2, 0x112233, deviceLens(context.lens, 2));
  assert.deepEqual([image.curve, image.focal, image.centerX, image.centerY, image.background], [0.4, 360, context.lens.centerX * 2, context.lens.centerY * 2, 0x112233]);
  // A pinhole has no lens.
  assert.equal(frameViewContext({ ...shot, curve: 1, hFOV_deg: 60, vFOV_deg: 40 }, gate, { width: 700, height: 420 }).lens, undefined);
  assert.equal(shotLensImage({ ...shot, curve: 1 }, 100, 100, 0), null);
});

import assert from "node:assert/strict";
import test from "node:test";

import { readdirSync, readFileSync } from "node:fs";

import {
  duplicateSceneSticker,
  editorActive,
  editorStateText,
  makePanoEditorHistorySnapshot,
  normalizeCoverageValue,
  parsePanoEditorState,
  paintingLayerNeedsSync,
  parseSceneEditorState,
  restoredHistoryState,
  retainActiveCutoutShot,
  sameEditorStateText,
  cameraFields,
  sceneStickerLabel,
  setCameraField,
  setEditorActive,
  setStickerOpacity,
  setStickerPose,
  stickerPose,
} from "../web_src/pano_editor_state.js";
import { applyStickersNodeSurfaceAction } from "../web_src/pano_stickers_node_surface.js";
import { evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";

const readFixture = (name) => readFileSync(new URL(`./fixtures/scene_state/${name}.json`, import.meta.url), "utf8");
const sceneNode = () => ({ __panoSceneStateV2: true });

test("coverage accepts only the supported front or full panorama values", () => {
  assert.equal(normalizeCoverageValue(180), 180);
  assert.equal(normalizeCoverageValue("180"), 180);
  assert.equal(normalizeCoverageValue(360), 360);
  assert.equal(normalizeCoverageValue(90), 360);
  assert.equal(normalizeCoverageValue(null), 360);
});

test("empty or invalid JSON produces the current editor defaults", () => {
  const options = {
    outputPreset: "1024 x 512",
    backgroundColor: "#123456",
    coverage: "180",
    sharedUiSettings: {
      invert_view_x: true,
      invert_view_y: false,
      preview_quality: "high",
    },
  };
  const expected = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 180,
    bg_color: "#123456",
    output_preset: "1024 x 512",
    assets: {},
    stickers: [],
    shots: [],
    painting: {
      version: 1,
      groups: [],
      paint: { strokes: [] },
      mask: { strokes: [] },
      raster_objects: [],
    },
    painting_layer: null,
    ui_settings: {
      invert_view_x: true,
      invert_view_y: false,
    },
    active: { selected_sticker_id: null, selected_shot_id: null },
  };

  assert.deepEqual(parsePanoEditorState("", options), expected);
  assert.deepEqual(parsePanoEditorState("{", options), expected);
});

test("loaded state is normalized while widget and shared settings remain authoritative", () => {
  const text = JSON.stringify({
    version: 99,
    projection_model: "legacy",
    alpha_mode: "premultiplied",
    coverage: 360,
    bg_color: "#abcdef",
    output_preset: 512,
    assets: { asset_1: { name: "source.png" } },
    stickers: [
      {
        id: "visible_default",
        asset_id: "asset_1",
        crop: { x: 0.1 },
        initial_pose: { yaw_deg: 12 },
        locked: 1,
      },
      { id: "hidden", visible: false, locked: true },
    ],
    shots: [{ id: "shot_1", hFOV_deg: 90, vFOV_deg: 90, out_w: 1920, out_h: 1080, locked: 1 }],
    painting: null,
    painting_layer: { token: "temporary" },
    ui_settings: {
      invert_view_x: false,
      invert_view_y: true,
      preview_quality: "draft",
    },
    active: { selected_sticker_id: "visible_default", selected_shot_id: "shot_1" },
    editor_history: { entries: ["runtime-only"] },
  });

  const state = parsePanoEditorState(text, {
    outputPreset: "4096 x 2048",
    backgroundColor: "#123456",
    coverage: 180,
    sharedUiSettings: {
      invert_view_x: true,
      invert_view_y: false,
      preview_quality: "high",
    },
  });

  assert.equal(state.version, 1);
  assert.equal(state.projection_model, "pinhole_rectilinear");
  assert.equal(state.alpha_mode, "straight");
  assert.equal(state.output_preset, 4096);
  assert.equal(state.bg_color, "#123456");
  assert.equal(state.coverage, 180);
  // A saved preview_quality from before #69 is an unknown key and is dropped.
  assert.deepEqual(state.ui_settings, {
    invert_view_x: true,
    invert_view_y: false,
  });
  assert.equal("editor_history" in state, false);
  assert.deepEqual(state.stickers, [
    {
      id: "visible_default",
      asset_id: "asset_1",
      crop: { x: 0.1 },
      initial_pose: { yaw_deg: 12 },
      locked: false,
      visible: true,
    },
    { id: "hidden", visible: false, locked: true },
  ]);
  assert.deepEqual(state.shots, [{
    id: "shot_1",
    hFOV_deg: 90,
    vFOV_deg: 90,
    locked: false,
    aspect_id: "1:1",
  }]);

  state.assets.asset_1.name = "mutated";
  state.stickers[0].crop.x = 0.9;
  state.active.selected_sticker_id = null;
  const reparsed = parsePanoEditorState(text, {
    outputPreset: 4096,
    backgroundColor: "#123456",
    coverage: 180,
    sharedUiSettings: { preview_quality: "high" },
  });
  assert.equal(reparsed.assets.asset_1.name, "source.png");
  assert.equal(reparsed.stickers[0].crop.x, 0.1);
  assert.equal(reparsed.active.selected_sticker_id, "visible_default");
});

test("history snapshots are detached and exclude runtime-only state", () => {
  const state = {
    version: 1,
    assets: { asset_1: { name: "source.png" } },
    stickers: [{ id: "sticker_1", crop: { x: 0.25 } }],
    editor_history: { entries: ["previous"] },
    painting_layer: { token: "uploaded-preview" },
  };

  const snapshot = makePanoEditorHistorySnapshot(state);

  assert.deepEqual(snapshot, {
    version: 1,
    assets: { asset_1: { name: "source.png" } },
    stickers: [{ id: "sticker_1", crop: { x: 0.25 } }],
  });
  snapshot.assets.asset_1.name = "changed";
  snapshot.stickers[0].crop.x = 0.75;
  assert.equal(state.assets.asset_1.name, "source.png");
  assert.equal(state.stickers[0].crop.x, 0.25);
});

test("clearing Cutout content retains the active frame and legacy empty state stays empty", () => {
  const shots = [{ id: "frame_a" }, { id: "frame_b" }];

  assert.deepEqual(retainActiveCutoutShot(shots, "frame_b"), {
    shots: [{ id: "frame_b" }],
    selectedShotId: "frame_b",
  });
  assert.deepEqual(retainActiveCutoutShot([], "missing"), {
    shots: [],
    selectedShotId: null,
  });
});

test("omitted parse options retain the existing widget defaults", () => {
  const state = parsePanoEditorState(JSON.stringify({
    output_preset: 512,
    bg_color: "#abcdef",
    coverage: 180,
  }));

  assert.equal(state.output_preset, 2048);
  assert.equal(state.bg_color, "#00ff00");
  assert.equal(state.coverage, 360);
});

test("state v2 round trips through the editor's working state without loss", () => {
  for (const name of ["v2_canonical", "v2_interpolation", "v2_half_turns", "v2_invalid_fields", "v1_stickers"]) {
    const text = readFixture(name);
    const state = parseSceneEditorState(text);
    assert.deepEqual(JSON.parse(editorStateText(sceneNode(), state)), loadSceneState(text), name);
    // Undo restores the working state from a history snapshot.
    const restored = JSON.parse(JSON.stringify(makePanoEditorHistorySnapshot(state)));
    assert.deepEqual(JSON.parse(editorStateText(sceneNode(), restored)), { ...loadSceneState(text), painting_layer: null }, name);
  }
});

test("the editor's working state for PanoramaStickersNode is state v2 itself", () => {
  const text = readFixture("v2_canonical");
  const state = parseSceneEditorState(text, { coverage: 180, backgroundColor: "#ffffff", active: { selected_sticker_id: "st_sky" } });
  const { coverage, bg_color: bgColor, output_preset: outputPreset, ui_settings: uiSettings, active, ...scene } = state;

  assert.deepEqual(scene, loadSceneState(text));
  assert.deepEqual(
    [coverage, bgColor, outputPreset, uiSettings, active],
    [180, "#ffffff", 2048, { invert_view_x: false, invert_view_y: false }, { selected_sticker_id: "st_sky", selected_shot_id: null }],
  );
  assert.equal("scene_state" in state, false);
  assert.equal("assets" in state, false);
  assert.deepEqual(parseSceneEditorState("{not json").stickers, []);
  assert.equal(parseSceneEditorState(readFixture("v1_stickers")).version, 2);
});

test("editing a sky Sticker changes its static value, or keys it once it has Keyframes", () => {
  const text = readFixture("v2_canonical");
  const state = parseSceneEditorState(text);
  const [keyed, world, plain] = state.stickers;

  setStickerPose(plain, 30, { yaw_deg: 50, rot_deg: 12 });
  setStickerOpacity(plain, 30, 0.25);
  setStickerOpacity(keyed, 22, 0.75);
  setStickerPose(keyed, 22, { hFOV_deg: 33 });

  const saved = JSON.parse(editorStateText(sceneNode(), state));
  const loaded = loadSceneState(text);
  assert.deepEqual([saved.timeline, saved.camera, saved.scene], [loaded.timeline, loaded.camera, loaded.scene]);
  assert.deepEqual(saved.stickers[1], loaded.stickers[1]);
  assert.equal(world, state.stickers[1]);
  assert.deepEqual(saved.stickers[2].direction, { value: { ...loaded.stickers[2].direction.value, yaw_deg: 50 }, keyframes: [] });
  assert.deepEqual(saved.stickers[2].roll, { value: 12, keyframes: [] });
  assert.deepEqual(saved.stickers[2].size, loaded.stickers[2].size);
  assert.deepEqual(saved.stickers[2].opacity, { value: 0.25, keyframes: [] });
  // st_sky's material starts at frame 10 - 5 = 5, so Timeline frame 22 is its Clip frame 17.
  assert.deepEqual(saved.stickers[0].opacity.keyframes.map((key) => [key.frame, key.value]), [[5, 0], [15, 0.5], [17, 0.75], [25, 1]]);
  assert.deepEqual(saved.stickers[0].size, { value: { ...loaded.stickers[0].size.value, hFOV_deg: 33 }, keyframes: [] });
  assert.deepEqual([saved.stickers[0].direction, saved.stickers[0].roll], [loaded.stickers[0].direction, loaded.stickers[0].roll]);
  assert.deepEqual(stickerPose(plain, 0), { yaw_deg: 50, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 12 });
});

test("the pose the editor shows is the evaluator's value at the Timeline frame", () => {
  const state = parseSceneEditorState(readFixture("v2_interpolation"));
  const loaded = loadSceneState(readFixture("v2_interpolation"));
  const sky = state.stickers.filter((sticker) => sticker.placement === "sky");
  assert.ok(sky.some((sticker) => sticker.direction.keyframes.length > 1 && sticker.size.keyframes.length > 1));
  for (let frame = -5; frame <= 80; frame += 1.5) {
    const evaluated = evaluateSceneState(loaded, frame).stickers;
    for (const sticker of sky) {
      const value = evaluated[loaded.stickers.findIndex((item) => item.id === sticker.id)];
      const pose = stickerPose(sticker, frame);
      assert.deepEqual(pose, {
        yaw_deg: value.yaw_deg, pitch_deg: value.pitch_deg, hFOV_deg: value.hFOV_deg, vFOV_deg: value.vFOV_deg, rot_deg: value.roll_deg,
      }, `${sticker.id} at ${frame}`);
    }
  }
});

test("a duplicated Sticker keeps its Clip range, Keyframes and opacity", () => {
  const state = parseSceneEditorState(readFixture("v2_canonical"));
  const source = state.stickers[0];
  source.direction.value.yaw_deg = 175;
  source.direction.keyframes = [{ frame: 40, value: { ...source.direction.value }, easing: [0.42, 0, 0.58, 1] }];
  setStickerPose(source, 20, { yaw_deg: 40 });
  setStickerPose(source, 5, { yaw_deg: 20 });
  setStickerPose(source, 5, { yaw_deg: 20, rot_deg: 3 });
  // Only the Lanes an edit changes are keyed: the roll has no Keyframes, so its static value changes.
  assert.deepEqual(source.roll, { value: 3, keyframes: [] });

  const copy = duplicateSceneSticker(source, "st_copy", 7);
  state.stickers.push(copy);

  assert.deepEqual(copy.clip, source.clip);
  assert.deepEqual(copy.opacity, source.opacity);
  assert.notEqual(copy.opacity, source.opacity);
  assert.deepEqual(copy.direction.keyframes.map((key) => key.value.yaw_deg), source.direction.keyframes.map((key) => key.value.yaw_deg + 8));
  assert.equal(copy.direction.keyframes.at(-1).value.yaw_deg, 183, "Keyframes keep their turns");
  assert.equal(copy.direction.value.yaw_deg, -177, "the static yaw wraps into -180..180");
  const saved = JSON.parse(editorStateText(sceneNode(), state)).stickers.at(-1);
  assert.deepEqual(saved, { ...copy, id: "st_copy", z_index: 7 });
  assert.equal(sceneStickerLabel(copy), "logo.png");
  assert.equal(sceneStickerLabel(state.stickers[1]), "Sticker input");
});

test("the editor's selection is kept on the node and not in state v2", () => {
  const node = sceneNode();
  const state = parseSceneEditorState(readFixture("v2_canonical"));
  state.active.selected_sticker_id = "st_sky";

  setEditorActive(node, state.active);
  const text = editorStateText(node, state);

  assert.equal("active" in JSON.parse(text), false);
  assert.deepEqual(node.properties, { pano_editor_active: { selected_sticker_id: "st_sky", selected_shot_id: null } });
  assert.equal(parseSceneEditorState(text, { active: editorActive(node) }).active.selected_sticker_id, "st_sky");
  assert.equal(editorActive({ properties: node.properties }), undefined);
});

test("the legacy node keeps its state_json in v1", () => {
  const node = { properties: {} };
  const state = parsePanoEditorState(readFixture("v1_stickers"));

  assert.equal(editorStateText(node, state), JSON.stringify(state));
  assert.deepEqual(node.properties, {});
  assert.equal(state.version, 1);
});

test("changing only the selection keeps the saved state_json text", () => {
  const node = sceneNode();
  const state = parseSceneEditorState(readFixture("v2_canonical"));
  const before = editorStateText(node, state);

  state.active.selected_sticker_id = "st_hidden";
  setEditorActive(node, state.active);

  assert.equal(editorStateText(node, state), before);
  assert.equal(node.properties.pano_editor_active.selected_sticker_id, "st_hidden");
});

test("a sky Sticker with Keyframes can be locked and edited on the node", () => {
  const text = readFixture("v2_canonical");
  const state = parseSceneEditorState(text);
  assert.deepEqual(state.stickers.map((item) => item.locked), [false, true, false]);

  const selected = applyStickersNodeSurfaceAction(state, { type: "select-sticker", id: "st_sky" }).state;
  const locked = applyStickersNodeSurfaceAction(selected, { type: "toggle-lock" });
  assert.equal(locked.changed, true);
  assert.equal(JSON.parse(editorStateText(sceneNode(), locked.state)).stickers[0].locked, true);

  const moved = applyStickersNodeSurfaceAction(selected, { type: "set-transform", value: { yaw_deg: 90 } });
  assert.equal(moved.changed, true);
  assert.deepEqual(moved.state.stickers[0].direction.value, { ...loadSceneState(text).stickers[0].direction.value, yaw_deg: 90 });
  assert.equal(applyStickersNodeSurfaceAction(moved.state, { type: "set-transform", value: { yaw_deg: 90 } }).changed, false);
  assert.equal(state.stickers[0].direction.value.yaw_deg, 30, "the reducer does not change the state it was given");
});

test("the editor has no Render Quality setting", () => {
  const dir = new URL("../web_src/", import.meta.url);
  const sources = [
    ...readdirSync(dir).filter((name) => name.endsWith(".js")),
    ...readdirSync(new URL("components/", dir)).map((name) => `components/${name}`),
  ].map((name) => [name, readFileSync(new URL(name, dir), "utf8")]);
  for (const [name, text] of sources) {
    assert.ok(!text.includes("preview_quality") && !text.includes("Render Quality"), name);
  }
});

test("the inspector edits the Camera's Lanes by the recording rule", () => {
  const state = parseSceneEditorState(readFixture("v2_canonical"));
  const { camera } = state;
  assert.deepEqual(cameraFields(camera, 24), { position_x: 2, position_y: 1.6, position_z: -3, yaw_deg: -120, pitch_deg: -20, roll_deg: 15, hFOV_deg: 60 });

  // A keyed Lane updates the Keyframe at the playhead or adds one; other Lanes are not touched.
  setCameraField(camera, 24, "position_y", 2);
  setCameraField(camera, 30, "hFOV_deg", 50);
  setCameraField(camera, 30, "roll_deg", 5);
  assert.deepEqual(camera.position.keyframes[1].value, [2, 2, -3]);
  assert.deepEqual(camera.fov.keyframes.map((key) => [key.frame, key.value]), [[0, 90], [24, 60], [30, 50]]);
  assert.deepEqual(camera.rotation.keyframes.map((key) => key.frame), [0, 24, 30, 48]);
  assert.equal(camera.rotation.keyframes[2].value.roll_deg, 5);
  assert.deepEqual(camera.position.keyframes.map((key) => key.frame), [0, 24, 48]);

  // A Lane without Keyframes changes its static value.
  const plain = parseSceneEditorState(null).camera;
  setCameraField(plain, 12, "position_z", -4);
  setCameraField(plain, 12, "yaw_deg", 30);
  assert.deepEqual([plain.position, plain.rotation.value.yaw_deg], [{ value: [0, 0, -4], keyframes: [] }, 30]);
});

test("the node leaves Lanes with Keyframes to the Timeline and edits only the others", () => {
  const state = parseSceneEditorState(readFixture("v2_canonical"));
  const sticker = state.stickers[0];
  sticker.direction.keyframes = [{ frame: 0, value: { yaw_deg: 30, pitch_deg: 10 }, easing: [0.42, 0, 0.58, 1] }];
  const selected = applyStickersNodeSurfaceAction(state, { type: "select-sticker", id: "st_sky" }).state;

  assert.equal(applyStickersNodeSurfaceAction(selected, { type: "set-transform", value: { yaw_deg: 90, pitch_deg: 0 } }).changed, false);
  const scaled = applyStickersNodeSurfaceAction(selected, { type: "set-transform", value: { yaw_deg: 90, hFOV_deg: 40 } });
  assert.equal(scaled.changed, true);
  const next = scaled.state.stickers[0];
  assert.deepEqual(next.direction, sticker.direction);
  assert.deepEqual(next.size, { value: { ...sticker.size.value, hFOV_deg: 40 }, keyframes: [] });
});

// ComfyUI's execution cache compares state_json's text: opening and closing the editor without an edit
// must not rewrite it, or the next run computes everything again.
test("opening and closing the editor leaves an unedited state_json text alone", () => {
  const node = { __panoSceneStateV2: true };
  const options = { coverage: 360, backgroundColor: "#00ff00", active: {} };
  for (const current of ["", JSON.stringify(loadSceneState(null), null, 2), JSON.stringify(loadSceneState(null))]) {
    const text = editorStateText(node, parseSceneEditorState(current, options));
    assert.equal(sameEditorStateText(node, text, current), true, JSON.stringify(current.slice(0, 20)));
  }
});

test("an edit, an unreadable text, or the legacy node's other text is written", () => {
  const node = { __panoSceneStateV2: true };
  const edited = loadSceneState(null);
  edited.timeline.fps = 30;

  assert.equal(sameEditorStateText(node, JSON.stringify(edited), ""), false);
  assert.equal(sameEditorStateText(node, JSON.stringify(loadSceneState(null)), "{not json"), false);
  assert.equal(sameEditorStateText({}, "{\"version\":1}", "{ \"version\": 1 }"), false);
  assert.equal(sameEditorStateText({}, "{}", "{}"), true);
});

// The painting_layer's revision counts changes within one editor session and starts again at 0 in the next.
// Opening and closing the editor without touching the painting must leave state_json as it is: rewriting
// the layer with this session's revision makes ComfyUI run the node again.
test("a painting layer saved in an earlier editor session stays current until its target size changes", () => {
  const paint = { type: "comfy_image", filename: "pano_paint_1.png", subfolder: "panorama_stickers", storage: "input" };
  const saved = { paint, mask: null, groups: [], revision: "0:22:2048x1024" };
  const painted = { paintCount: 1, maskCount: 0, width: 2048, height: 1024, nodeId: "1" };

  assert.equal(paintingLayerNeedsSync(saved, painted), false);
  assert.equal(paintingLayerNeedsSync(saved, { ...painted, width: 4096, height: 2048 }), true);
  assert.equal(paintingLayerNeedsSync(null, painted), true);
  assert.equal(paintingLayerNeedsSync(saved, { ...painted, maskCount: 1 }), true);
  assert.equal(paintingLayerNeedsSync(null, { ...painted, paintCount: 0 }), false);
  // A pasted node (new id) still references the source node's files, which that node keeps overwriting.
  assert.equal(paintingLayerNeedsSync(saved, { ...painted, nodeId: "7" }), true);

  const editor = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
  assert.match(editor, /function needsPaintingLayerSync\(\) \{\n[^\n]*\n[^\n]*\n\s*return paintingLayerNeedsSync\(state\.painting_layer, /);
});

// An undo or redo step restores a snapshot without the painting_layer. Undoing an edit that left the painting
// as it was must keep the layer: dropping it uploads the same PNG again and rewrites state_json, which makes
// ComfyUI run the node again.
test("an undo keeps the painting layer while the painting is the same, and drops it once the painting differs", () => {
  const layer = { paint: { type: "comfy_image", filename: "pano_paint_1.png" }, mask: null, groups: [], revision: "0:3:2048x1024" };
  const painting = { strokes: [], groups: [{ id: "g1", z_index: 0 }], raster_objects: [{ id: "r1", transform: { du: 0.4, dv: 0 } }] };
  const current = { stickers: [{ id: "a", yaw_deg: 10 }], painting, painting_layer: layer };
  const before = makePanoEditorHistorySnapshot({ ...current, stickers: [{ id: "a", yaw_deg: 0 }] });

  const undone = restoredHistoryState(current, JSON.stringify(before));
  assert.equal(undone.paintingChanged, false);
  assert.deepEqual(undone.state.stickers, [{ id: "a", yaw_deg: 0 }]);
  assert.deepEqual(undone.state.painting_layer, layer);

  const moved = structuredClone(before);
  moved.painting.raster_objects[0].transform.du = 0.3;
  const repainted = restoredHistoryState(current, JSON.stringify(moved));
  assert.equal(repainted.paintingChanged, true);
  assert.equal(repainted.state.painting_layer, undefined);

  const editor = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
  assert.match(editor, /const restored = restoredHistoryState\(state, snapshot\);[\s\S]*?if \(restored\.paintingChanged\) markPaintStrokeVisualsDirty\(\);\s*else markObjectVisualsDirty\(\);/);
});

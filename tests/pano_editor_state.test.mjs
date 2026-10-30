import assert from "node:assert/strict";
import test from "node:test";

import { readdirSync, readFileSync } from "node:fs";

import {
  CAMERA_SHOT_ID,
  cameraLensFields,
  cameraShot,
  duplicateSceneSticker,
  editorActive,
  editorStateText,
  editorStateWrite,
  makePanoEditorHistorySnapshot,
  newStudioCamera,
  newSceneId,
  newWorldSceneSticker,
  normalizeCoverageValue,
  parsePanoEditorState,
  paintingLayerNeedsSync,
  parseSceneEditorState,
  readableStateText,
  restoredHistoryState,
  retainActiveCutoutShot,
  sameEditorStateText,
  cameraFields,
  deleteWorldSticker,
  sceneStickerLabel,
  setCameraField,
  setCameraShot,
  setEditorActive,
  setStickerOpacity,
  setStickerPose,
  setTimelineFps,
  setWorldStickerField,
  setWorldStickerTransform,
  stickerPose,
  takeStickerId,
  worldStickerFields,
} from "../web_src/pano_editor_state.js";
import { applyStickersNodeSurfaceAction } from "../web_src/pano_stickers_node_surface.js";
import { cutoutFilmPointToWorldDir, worldDirToCutoutFilmPoint } from "../web_src/pano_cutout_view_math.js";
import { evaluateCamera, evaluateSceneState } from "../web_src/pano_scene_eval.js";
import { defaultCamera, loadSceneState, rebaseSceneState } from "../web_src/pano_scene_state.js";
import { readEditorSource } from "./editor_source.mjs";

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
  // A saved preview_quality from before the preview quality setting was removed is an unknown key and is dropped.
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
    assert.deepEqual(loadSceneState(editorStateText(sceneNode(), state)), loadSceneState(text), name);
    // Undo restores the working state from a history snapshot.
    const restored = JSON.parse(JSON.stringify(makePanoEditorHistorySnapshot(state)));
    assert.deepEqual(loadSceneState(editorStateText(sceneNode(), restored)), { ...loadSceneState(text), painting_layer: null }, name);
  }
});

test("the editor's working state for Panorama Studio is state v2 itself", () => {
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

  const saved = loadSceneState(editorStateText(sceneNode(), state));
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
  assert.deepEqual(stickerPose(plain, 0), { yaw_deg: 50, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 12, curve: 1 });
});

test("a port Sticker's vFOV follows its media and is never written to the state", () => {
  const state = parseSceneEditorState(JSON.stringify({
    version: 2,
    stickers: [
      { id: "port", source: { kind: "port" }, size: { value: { hFOV_deg: 60, vFOV_deg: 60 } } },
      { id: "file", source: { kind: "file", filename: "a.png" }, size: { value: { hFOV_deg: 60, vFOV_deg: 60 } } },
    ],
  }));
  const [port, file] = state.stickers;
  const vfov = 2 * Math.atan(Math.tan(Math.PI / 6) * 100 / 200) * 180 / Math.PI;

  // The editor hit tests and draws the overlay of the pose at the media's size.
  assert.ok(Math.abs(stickerPose(port, 0, { width: 200, height: 100 }).vFOV_deg - vfov) < 1e-12);
  assert.equal(stickerPose(port, 0).vFOV_deg, 60);
  assert.equal(stickerPose(port, 0, { width: 0, height: 0 }).vFOV_deg, 60);
  assert.equal(stickerPose(file, 0, { width: 200, height: 100 }).vFOV_deg, 60);

  setStickerPose(port, 0, { hFOV_deg: 40, vFOV_deg: 20 });
  setStickerPose(file, 0, { hFOV_deg: 40, vFOV_deg: 20 });
  assert.deepEqual(port.size.value, { hFOV_deg: 40, vFOV_deg: 60 });
  assert.deepEqual(file.size.value, { hFOV_deg: 40, vFOV_deg: 20 });
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
        yaw_deg: value.yaw_deg, pitch_deg: value.pitch_deg, hFOV_deg: value.hFOV_deg, vFOV_deg: value.vFOV_deg, rot_deg: value.roll_deg, curve: value.curve,
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
  const saved = loadSceneState(editorStateText(sceneNode(), state)).stickers.at(-1);
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
  assert.equal(loadSceneState(editorStateText(sceneNode(), locked.state)).stickers[0].locked, true);

  const moved = applyStickersNodeSurfaceAction(selected, { type: "set-transform", value: { yaw_deg: 90 } });
  assert.equal(moved.changed, true);
  assert.deepEqual(moved.state.stickers[0].direction.value, { ...loadSceneState(text).stickers[0].direction.value, yaw_deg: 90 });
  assert.equal(applyStickersNodeSurfaceAction(moved.state, { type: "set-transform", value: { yaw_deg: 90 } }).changed, false);
  assert.equal(state.stickers[0].direction.value.yaw_deg, 30, "the reducer does not change the state it was given");
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
  const plain = parseSceneEditorState(JSON.stringify({ version: 2, camera: {} })).camera;
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

// docs/timeline-ui.md: a state_json that cannot be read opens as the empty state in the old editor and the node
// surface; writing it back would replace the user's text with the empty state.
test("a state_json that cannot be read is not replaced by the empty state; an edited state is written over it", () => {
  const node = { __panoSceneStateV2: true };
  const options = { coverage: 360, backgroundColor: "#00ff00", active: {} };
  for (const current of ["{not json", '{"version":3,"stickers":[]}', "[]"]) {
    assert.equal(readableStateText(current), false, current);
    for (const fps of [undefined, 30]) {
      const state = parseSceneEditorState(current, { ...options, fps });
      assert.equal(editorStateWrite(node, state, current), null, current);
      assert.equal(editorStateWrite(node, state, current, { rebased: true }), null, current);
    }
    const edited = parseSceneEditorState(current, options);
    edited.stickers.push(newWorldSceneSticker("sticker_1", { kind: "file", filename: "a.glb" }, { position: [0, 0, -3], rotation: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 }, scale: 1 }));
    assert.equal(JSON.parse(editorStateWrite(node, edited, current)).stickers.length, 1);
  }
  assert.equal(readableStateText(""), true);
  assert.equal(readableStateText(JSON.stringify(loadSceneState(null))), true);
});

// ADR 0030: Panorama Studio's state gets its Scene id when it is written, and keeps it after.
test("a written Studio state gets a Scene id once and keeps it; an unedited one is not written for it", () => {
  const node = { __panoSceneStateV2: true };
  const options = { coverage: 360, backgroundColor: "#00ff00", active: {} };
  for (const current of ["", JSON.stringify(loadSceneState(null))]) {
    const state = parseSceneEditorState(current, options);
    assert.equal(editorStateWrite(node, state, current), null);
    assert.equal(editorStateWrite(node, state, current, { rebased: true }), null);
    assert.equal(state.id, null);
  }
  const state = parseSceneEditorState("", options);
  setTimelineFps(state, 30);
  const text = editorStateWrite(node, state, "");
  const { id } = JSON.parse(text);
  assert.match(id, /^[A-Za-z0-9_-]{16}$/);
  assert.equal(state.id, id);
  assert.equal(loadSceneState(text).timeline.fps, 30);
  // Written again, the same state is the same text; an edit keeps the id.
  assert.equal(editorStateWrite(node, parseSceneEditorState(text, options), text), null);
  setTimelineFps(state, 60);
  assert.equal(JSON.parse(editorStateWrite(node, state, text)).id, id);
  // A saved id is kept as it is.
  const saved = JSON.stringify({ ...loadSceneState(null), id: "kept" });
  const edited = parseSceneEditorState(saved, options);
  setTimelineFps(edited, 12);
  assert.equal(JSON.parse(editorStateWrite(node, edited, saved)).id, "kept");
});

test("an undo to a step from before the Scene id was given keeps the id", () => {
  const before = JSON.stringify(loadSceneState(null));
  const current = { ...loadSceneState(null), id: "given" };
  assert.equal(restoredHistoryState(current, before).state.id, "given");
  assert.equal(restoredHistoryState({ ...current, id: null }, before).state.id, null);
});

test("the legacy nodes' state never gets a Scene id", () => {
  const state = { version: 1, stickers: [] };
  const text = editorStateWrite({}, state, "");
  assert.equal(text, JSON.stringify({ version: 1, stickers: [] }));
  assert.equal("id" in state, false);
  assert.equal(editorStateWrite({}, state, text), null);
});

test("Scene ids are random, URL-safe and 16 characters", () => {
  const ids = new Set(Array.from({ length: 200 }, newSceneId));
  assert.equal(ids.size, 200);
  for (const id of ids) assert.match(id, /^[A-Za-z0-9_-]{16}$/);
});

// A v2 state saved before the Camera had a projection reads as a Camera that shoots in perspective;
// saving it again writes the same text, so the node's execution cache still hits.
// The same holds for the lens curve (ADR 0042), for the fields of ADR 0030 (`id`, `next_sticker_id`, `upstream`, `handoff_overrides`) and for the
// background's Clip range (`background`).
test("a state saved before the Camera had a projection and before the visibility fields is saved as the same text", () => {
  const node = { __panoSceneStateV2: true };
  for (const name of ["v2_canonical", "v2_interpolation"]) {
    const { painting_visible: paintingVisible, id, next_sticker_id: nextStickerId, upstream, background, ...loaded } = loadSceneState(readFixture(name));
    const { projection, erp_range: erpRange, visible, locked, curve, ...camera } = loaded.camera;
    const { visible: sceneVisible, ...scene } = loaded.scene;
    const stickers = loaded.stickers.map(({ handoff_overrides: handoffOverrides, curve: stickerCurve, ...item }) => item);
    const before = JSON.stringify({ ...loaded, camera, scene, stickers });
    const state = parseSceneEditorState(before);
    assert.equal(state.camera.projection, "perspective");
    assert.equal(editorStateText(node, state), before, name);
  }
  const erp = loadSceneState(readFixture("v2_erp_camera"));
  assert.equal(JSON.parse(editorStateText(node, parseSceneEditorState(JSON.stringify(erp)))).camera.projection, "erp");
});

// ADR 0048: the Camera is always there. A state saved without one reads as the default Camera, and saving it again
// writes the same `"camera":null`, so the node's execution cache still hits.
test("the editor reads a state without a Camera as the default Camera and saves it as before", () => {
  const node = { __panoSceneStateV2: true };
  const text = readFixture("v2_no_camera");
  const state = parseSceneEditorState(text);
  assert.deepEqual(state.camera, defaultCamera());
  assert.equal(JSON.parse(editorStateText(node, state)).camera, null);
  setTimelineFps(state, 60);
  const saved = loadSceneState(editorStateText(node, state));
  assert.deepEqual(saved, rebaseSceneState(loadSceneState(text), 60));
  assert.deepEqual(saved.camera, defaultCamera());
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

  const editor = readEditorSource();
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

  const editor = readEditorSource();
  assert.match(editor, /const restored = restoredHistoryState\(state, snapshot\);[\s\S]*?if \(restored\.paintingChanged\) markPaintStrokeVisualsDirty\(\);\s*else markObjectVisualsDirty\(\);/);
});

test("opening the editor rebases the state to the fps a video sets, keeping its times in seconds", () => {
  const text = readFixture("v2_canonical");
  const scene = (state) => {
    const { coverage, bg_color: bgColor, output_preset: outputPreset, ui_settings: uiSettings, active, ...rest } = state;
    return rest;
  };

  assert.deepEqual(scene(parseSceneEditorState(text, { fps: 24 })), rebaseSceneState(loadSceneState(text), 24));
  assert.deepEqual(scene(parseSceneEditorState(text, { fps: 30 })), loadSceneState(text));
  assert.deepEqual(scene(parseSceneEditorState(text)), loadSceneState(text));
});

test("changing the Timeline fps in the editor keeps every time in seconds and the working objects", () => {
  const text = readFixture("v2_canonical");
  const state = parseSceneEditorState(text);
  const [first] = state.stickers;
  const uploading = { ...structuredClone(first), id: "st_uploading", source: { kind: "file", filename: "" } };
  state.stickers.push(uploading);

  setTimelineFps(state, 24);

  const saved = loadSceneState(editorStateText(sceneNode(), state));
  assert.deepEqual(saved, rebaseSceneState(loadSceneState(text), 24));
  assert.equal(state.stickers[0], first, "the Sticker objects the editor holds stay the same");
  assert.equal(state.stickers[3], uploading, "a Sticker still uploading stays");
  assert.equal(state.coverage, 360);
});

test("a run's video fps applied to an open state matches opening the editor with it", () => {
  const text = readFixture("v2_canonical");
  const open = parseSceneEditorState(text);
  setTimelineFps(open, 25);
  assert.deepEqual(loadSceneState(editorStateText(sceneNode(), open)), loadSceneState(editorStateText(sceneNode(), parseSceneEditorState(text, { fps: 25 }))));
});

const worldSticker = (overrides = {}) => loadSceneState({
  version: 2,
  stickers: [{
    id: "w",
    placement: "world",
    source: { kind: "file", filename: "a.png" },
    clip: { start: 10, in: 4, duration: null },
    position: { value: [1, 2, -3] },
    rotation: { value: { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 } },
    scale: { value: 2 },
    ...overrides,
  }],
}).stickers[0];

test("the inspector edits a world Sticker's Lanes by the recording rule, in its clip frames", () => {
  const sticker = worldSticker({
    rotation: { value: { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 }, keyframes: [{ frame: 0, value: { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 } }, { frame: 20, value: { yaw_deg: 50, pitch_deg: 5, roll_deg: 0 } }] },
  });
  // Timeline frame 16 is clip frame 10 (start 10, in 4), halfway between the rotation Keyframes.
  const fields = worldStickerFields(sticker, 16);
  assert.deepEqual([fields.position_x, fields.position_y, fields.position_z, fields.scale, fields.opacity], [1, 2, -3, 2, 100]);
  assert.ok(fields.yaw_deg > 10 && fields.yaw_deg < 50);

  // A Lane without Keyframes changes its static value; one with Keyframes gets a Keyframe at the playhead.
  setWorldStickerField(sticker, 16, "position_y", 4);
  setWorldStickerField(sticker, 16, "scale", 3);
  setWorldStickerField(sticker, 16, "opacity", 40);
  setWorldStickerField(sticker, 16, "roll_deg", 15);
  assert.deepEqual(sticker.position, { value: [1, 4, -3], keyframes: [] });
  assert.deepEqual(sticker.scale, { value: 3, keyframes: [] });
  assert.equal(sticker.opacity.value, 0.4);
  assert.deepEqual(sticker.rotation.keyframes.map((key) => key.frame), [0, 10, 20]);
  assert.equal(sticker.rotation.keyframes[1].value.roll_deg, 15);
  assert.equal(sticker.rotation.keyframes[1].value.yaw_deg, fields.yaw_deg);
  assert.deepEqual(sticker.rotation.value, { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 });
});

test("a gizmo edit changes only the Lanes it has, and a drag updates the Keyframe it added", () => {
  const sticker = worldSticker({
    position: { value: [1, 2, -3], keyframes: [{ frame: 0, value: [1, 2, -3] }] },
  });
  setWorldStickerTransform(sticker, 16, { position: [5, 5, 5] });
  setWorldStickerTransform(sticker, 16, { position: [6, 5, 5] });
  assert.deepEqual(sticker.position.keyframes.map((key) => [key.frame, key.value]), [[0, [1, 2, -3]], [10, [6, 5, 5]]]);
  assert.deepEqual(sticker.position.value, [1, 2, -3]);
  assert.deepEqual(sticker.rotation, { value: { yaw_deg: 10, pitch_deg: 5, roll_deg: 0 }, keyframes: [] });
  assert.deepEqual(sticker.scale, { value: 2, keyframes: [] });
  setWorldStickerTransform(sticker, 16, { rotation: { yaw_deg: -30, pitch_deg: 0, roll_deg: 2 }, scale: 0.5 });
  assert.deepEqual(sticker.rotation.value, { yaw_deg: -30, pitch_deg: 0, roll_deg: 2 });
  assert.equal(sticker.scale.value, 0.5);
  assert.equal(sticker.placement, "world");
});

test("a new world Sticker keeps its transform through state v2", () => {
  const transform = { position: [0.5, 1, -2], rotation: { yaw_deg: 20, pitch_deg: -10, roll_deg: 0 }, scale: 1.2 };
  const sticker = newWorldSceneSticker("st_1", { kind: "file", filename: "a.png", subfolder: "", storage: "input" }, transform);
  const loaded = loadSceneState({ version: 2, stickers: [sticker] }).stickers[0];
  assert.deepEqual(loaded, sticker);
  assert.equal(loaded.placement, "world");
  assert.equal("z_index" in loaded, false);
  transform.position[0] = 9;
  assert.equal(sticker.position.value[0], 0.5, "the transform is copied");
});

test("the editor has no way to switch a Sticker's Placement between sky and world", () => {
  const dir = new URL("../web_src/", import.meta.url);
  const sources = [
    ...readdirSync(dir).filter((name) => name.endsWith(".js")),
    ...readdirSync(new URL("components/", dir), { recursive: true }).filter((name) => name.endsWith(".vue")).map((name) => `components/${name}`),
  ].map((name) => [name, readFileSync(new URL(name, dir), "utf8")]);
  // Nothing assigns a Placement after a Sticker is made, and no UI shows one.
  for (const [name, text] of sources) {
    assert.doesNotMatch(text, /\.placement\s*=[^=]/, name);
    if (name.startsWith("components/")) assert.doesNotMatch(text, /placement/i, name);
  }
  // A Placement is written only where a Sticker is made: loading state v2, the evaluated copy, the
  // editor's new Stickers, the port Sticker the node replaces by a world one, and the port Sticker
  // the Pose handoff places (ADR 0030), and an upstream element's override, which takes its Placement (ADR 0030).
  const writers = sources.filter(([, text]) => /placement\s*:/.test(text.replace(/^\s*\/\/.*$/gm, ""))).map(([name]) => name).sort();
  assert.deepEqual(writers, ["pano_editor_state.js", "pano_port_handoff.js", "pano_scene_eval.js", "pano_scene_state.js", "pano_stickers_node_surface.js", "pano_upstream.js"]);

  // The edits the editor makes keep each Sticker's Placement, as the saved state reads it back: the
  // inspector and the gizmo on world Stickers, Delete, and Undo and Redo.
  const state = parseSceneEditorState(JSON.stringify({
    version: 2,
    stickers: [
      { id: "s", placement: "sky", source: { kind: "file", filename: "s.png" } },
      { id: "w", placement: "world", source: { kind: "file", filename: "w.png" } },
      { id: "p", placement: "world", source: { kind: "port" } },
    ],
  }));
  const saved = () => Object.fromEntries(loadSceneState(JSON.parse(JSON.stringify(state))).stickers.map((item) => [item.id, [item.placement, item.visible]]));
  const before = JSON.stringify(makePanoEditorHistorySnapshot(state));
  for (const id of ["w", "p"]) {
    const sticker = state.stickers.find((item) => item.id === id);
    for (const field of ["position_x", "position_y", "position_z", "yaw_deg", "pitch_deg", "roll_deg", "scale", "opacity"]) {
      setWorldStickerField(sticker, 12, field, 50);
    }
    setWorldStickerTransform(sticker, 12, { position: [0, 0, -1], rotation: { yaw_deg: 1, pitch_deg: 2, roll_deg: 3 }, scale: 2 });
  }
  assert.deepEqual(saved(), { s: ["sky", true], w: ["world", true], p: ["world", true] });
  assert.deepEqual(state.stickers.find((item) => item.id === "w").position.value, [0, 0, -1]);
  const edited = JSON.stringify(makePanoEditorHistorySnapshot(state));
  // Delete takes the world Sticker away and hides the port one; a sky Sticker is not its to delete.
  deleteWorldSticker(state, "w");
  deleteWorldSticker(state, "p");
  deleteWorldSticker(state, "s");
  assert.deepEqual(saved(), { s: ["sky", true], p: ["world", false] });
  // Undo and Redo bring back the snapshots with their Placements.
  Object.assign(state, restoredHistoryState(state, edited).state);
  assert.deepEqual(saved(), { s: ["sky", true], w: ["world", true], p: ["world", true] });
  Object.assign(state, restoredHistoryState(state, before).state);
  assert.deepEqual(saved(), { s: ["sky", true], w: ["world", true], p: ["world", true] });
  assert.deepEqual(state.stickers.find((item) => item.id === "w").position.value, [0, 0, 0]);
});

// --- The editor edits the Camera of state v2 as its shot (Panorama Studio).

function cameraState(camera = {}, fps = 24) {
  return loadSceneState({ version: 2, timeline: { fps }, camera });
}

test("the shot is the Camera at a Timeline frame, by the evaluator the node uses", () => {
  const state = cameraState({
    aspect: 1.5,
    position: { value: [1, 2, 3], keyframes: [] },
    rotation: { value: {}, keyframes: [{ frame: 0, value: { yaw_deg: 0 } }, { frame: 10, value: { yaw_deg: 40, roll_deg: 10 } }] },
    fov: { value: 60, keyframes: [] },
  });

  const shot = cameraShot(state.camera, 5);
  const camera = evaluateCamera(state.camera, 5);

  assert.equal(shot.id, CAMERA_SHOT_ID);
  assert.deepEqual([shot.yaw_deg, shot.pitch_deg, shot.roll_deg, shot.hFOV_deg], [camera.yaw_deg, camera.pitch_deg, camera.roll_deg, 60]);
  assert.deepEqual(shot.position, [1, 2, 3]);
  // The vertical FOV follows the Camera's aspect, as the node's output size does.
  assert.ok(Math.abs(Math.tan(shot.hFOV_deg * Math.PI / 360) / Math.tan(shot.vFOV_deg * Math.PI / 360) - 1.5) < 1e-9);
  assert.equal(shot.locked, false);
});

test("an edited shot writes only its changed fields to the Camera's Lanes by the recording rule", () => {
  const state = cameraState({ rotation: { value: {}, keyframes: [{ frame: 0, value: { yaw_deg: 0 } }, { frame: 20, value: { yaw_deg: 90 } }] } });
  const base = cameraShot(state.camera, 10);

  setCameraShot(state.camera, 10, { ...base, pitch_deg: 15 }, base);

  // The rotation Lane has Keyframes, so the edit keys frame 10; the FOV and position Lanes keep their static values.
  assert.deepEqual(state.camera.rotation.keyframes.map((key) => key.frame), [0, 10, 20]);
  assert.equal(state.camera.rotation.keyframes[1].value.pitch_deg, 15);
  assert.equal(state.camera.fov.keyframes.length, 0);
  assert.equal(state.camera.position.keyframes.length, 0);

  // Without Keyframes the static value changes.
  const plain = cameraState();
  const shot = cameraShot(plain.camera, 0);
  setCameraShot(plain.camera, 0, { ...shot, position: [0, 1, 0] }, shot);
  assert.deepEqual(plain.camera.position.value, [0, 1, 0]);
  assert.equal(plain.camera.position.keyframes.length, 0);
});

test("a yaw wrapped across 180 degrees keeps the Camera's turn", () => {
  const state = cameraState({ rotation: { value: { yaw_deg: 170 }, keyframes: [] } });
  const base = cameraShot(state.camera, 0);

  setCameraShot(state.camera, 0, { ...base, yaw_deg: -170 }, base);

  assert.equal(state.camera.rotation.value.yaw_deg, 190);
});

test("opening and closing the editor on another fps without an edit leaves state_json as it is", () => {
  const own = JSON.stringify(loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    camera: { rotation: { value: {}, keyframes: [{ frame: 0, value: { yaw_deg: 0 } }, { frame: 1, value: { yaw_deg: 5 } }, { frame: 25, value: { yaw_deg: 90 } }] } },
  }));
  const node = sceneNode();
  const state = parseSceneEditorState(own, { fps: 12 });
  const text = editorStateText(node, state);

  // The editor works at 12 fps with its Keyframes rounded there; without an edit the text is not rewritten.
  assert.notEqual(text, own);
  assert.equal(sameEditorStateText(node, text, own, { rebased: true }), true);
  // Without `rebased` the rebased text is not the same, and an edit is written.
  assert.equal(sameEditorStateText(node, text, own), false);
  state.camera.fov.value = 50;
  assert.equal(sameEditorStateText(node, editorStateText(node, state), own, { rebased: true }), false);
});

// Panorama Studio opens on its state as it is: without a Camera it has none, with
// one it edits it through the shot. Opening and closing without an edit, on the fps a video sets too,
// leaves the text alone.
test("opening and closing Panorama Studio without an edit leaves its state_json as it is, with or without a Camera", () => {
  const node = { __panoSceneStateV2: true, __panoStudio: true };
  const keyed = JSON.stringify(loadSceneState({
    version: 2,
    timeline: { fps: 24 },
    camera: { rotation: { value: {}, keyframes: [{ frame: 0, value: { yaw_deg: 0 } }, { frame: 1, value: { yaw_deg: 5 } }, { frame: 25, value: { yaw_deg: 90 } }] } },
  }));
  const texts = ["", readFixture("v2_no_camera"), readFixture("v2_canonical"), readFixture("v2_erp_camera"), keyed];
  for (const current of texts) {
    for (const fps of [null, 12]) {
      const state = parseSceneEditorState(current, { fps });
      if (state.camera) {
        // The editor derives the shot and writes back what changed in it: nothing.
        for (const frame of [0, 7]) {
          const base = cameraShot(state.camera, frame);
          setCameraShot(state.camera, frame, { ...base, position: [...base.position] }, base);
        }
      }
      const text = editorStateText(node, state);
      assert.equal(sameEditorStateText(node, text, current, { rebased: true }), true, `${current.slice(0, 30)} at ${fps}`);
    }
  }
});

// Add Camera puts the one Camera where the Viewport camera stands and looks; deleting it saves `camera: null`.
test("Panorama Studio adds its Camera at the view and saves none once it is deleted", () => {
  const node = { __panoSceneStateV2: true, __panoStudio: true };
  const state = parseSceneEditorState(readFixture("v2_no_camera"));
  const view = { position: [1, 2, 3], yaw_deg: 200, pitch_deg: -10, hFOV_deg: 100, distance: 2 };

  state.camera = newStudioCamera(view);

  assert.deepEqual(state.camera, loadSceneState({ version: 2, camera: state.camera }).camera, "a normalized Camera");
  assert.deepEqual(evaluateCamera(state.camera, 0), { position: [1, 2, 3], yaw_deg: -160, pitch_deg: -10, roll_deg: 0, hFOV_deg: 90, curve: 1, aspect: 16 / 9 });
  assert.equal(state.camera.projection, "perspective");
  assert.deepEqual(["position", "rotation", "fov"].map((name) => state.camera[name].keyframes), [[], [], []]);
  const added = loadSceneState(editorStateText(node, state));
  assert.deepEqual(added.camera, state.camera);
  assert.equal(sameEditorStateText(node, editorStateText(node, state), readFixture("v2_no_camera"), { rebased: true }), false);
  // The shot frames 16:9 at 90 degrees.
  assert.ok(Math.abs(cameraShot(state.camera, 0).vFOV_deg - 58.7155) < 1e-3);

  state.camera = null;
  const text = editorStateText(node, state);
  assert.equal(JSON.parse(text).camera, null);
  assert.equal(sameEditorStateText(node, text, readFixture("v2_no_camera"), { rebased: true }), true);
  // Deleting a Camera the state had is an edit too.
  const had = parseSceneEditorState(readFixture("v2_canonical"));
  had.camera = null;
  const deleted = editorStateText(node, had);
  assert.equal(JSON.parse(deleted).camera, null);
  assert.equal(sameEditorStateText(node, deleted, readFixture("v2_canonical"), { rebased: true }), false);
});

// A VIDEO faster than the fastest fps a state keeps (TIMELINE_FPS_MAX) rebases the state once: the fps
// compared on each result is brought into range first, so a later result changes nothing.
test("a VIDEO above the fps limit rebases the state once and never again", () => {
  const text = readFixture("v2_canonical");
  const state = parseSceneEditorState(text, { fps: 2400 });
  assert.equal(state.timeline.fps, 1000);
  assert.deepEqual(loadSceneState(editorStateText({ __panoSceneStateV2: true }, state)), rebaseSceneState(loadSceneState(text), 1000));
  const before = structuredClone(state);
  setTimelineFps(state, 2400);
  assert.deepEqual(state, before, "rebasing to the same fps after bringing it into range changes nothing");
  assert.deepEqual(parseSceneEditorState(text, { fps: 300 }).timeline.fps, 300, "a VIDEO within the limits keeps its fps");
});

// The same cases test_scene_state.py (normalizing) and the node's _take_sticker_id read.
test("Sticker ids are numbered and taken as the fixture shared with Python says, past 2^53 too", () => {
  const { normalize, take } = JSON.parse(readFileSync(new URL("./fixtures/scene_state/sticker_ids.json", import.meta.url), "utf8"));
  for (const { state, ids, next_sticker_id: next } of normalize) {
    const loaded = loadSceneState(state);
    assert.deepEqual([loaded.stickers.map((item) => item.id), loaded.next_sticker_id], [ids, next]);
  }
  for (const { state, ids, next_sticker_id: next } of take) {
    const loaded = loadSceneState(state);
    const taken = ids.map(() => {
      const id = takeStickerId(loaded);
      loaded.stickers.push({ ...loaded.stickers[0], id });
      return id;
    });
    assert.deepEqual([taken, loaded.next_sticker_id], [ids, next]);
  }
});

test("a new Sticker id comes from the counter, which only goes up, also through undo", () => {
  const state = parseSceneEditorState(JSON.stringify({ version: 2, stickers: [{ id: "sticker_4", source: { kind: "port" } }] }));
  const before = JSON.stringify(state);
  assert.equal(takeStickerId(state), "sticker_5");
  assert.equal(takeStickerId(state), "sticker_6");
  assert.equal(state.next_sticker_id, 7);
  // Undoing to a step before the new Stickers keeps the counter, so their ids are not given out again.
  assert.equal(restoredHistoryState(state, before).state.next_sticker_id, 7);
  assert.equal(restoredHistoryState(JSON.parse(before), JSON.stringify(state)).state.next_sticker_id, 7);
});

// ADR 0042: the editor's shot of a lens Camera keeps its κ, its hFOV past 179° below κ ≈ 0.497, and the aspect as
// the ratio of its image radii; a Frame view point maps to its ray by the lens.
test("a lens Camera's shot keeps its curve, an hFOV past 179 degrees and its aspect in image radii", () => {
  const camera = loadSceneState({ version: 2, camera: { aspect: 2, fov: { value: 300 }, curve: { value: 0.3 } } }).camera;
  const shot = cameraShot(camera, 0);
  assert.deepEqual([shot.curve, shot.hFOV_deg], [0.3, 300]);
  const radius = (fov) => Math.tan(0.3 * fov * Math.PI / 360) / 0.3;
  assert.ok(Math.abs(radius(shot.hFOV_deg) / radius(shot.vFOV_deg) - 2) < 1e-9);
  // A wider angle of view keeps the image's aspect.
  setCameraField(camera, 0, "hFOV_deg", 320);
  const wider = cameraShot(camera, 0);
  assert.deepEqual([wider.hFOV_deg, camera.aspect], [320, 2]);
  assert.ok(Math.abs(radius(wider.hFOV_deg) / radius(wider.vFOV_deg) - 2) < 1e-9);
  // A point of its image goes to its ray and back.
  const film = { x: 1.7, y: -0.4 };
  const back = worldDirToCutoutFilmPoint(shot, cutoutFilmPointToWorldDir(shot, film));
  assert.ok(Math.abs(back.x - film.x) < 1e-9 && Math.abs(back.y - film.y) < 1e-9);
});

// docs/editor-interaction.md (the owner, 2026-10-11): the editor writes only the Camera's own fields; its shot is
// computed from them.
test("the Camera's shot is computed from the state and writes back only its pose", () => {
  for (const curve of [1, 0.4]) {
    const camera = loadSceneState({ version: 2, camera: { aspect: 16 / 9, fov: { value: 90 }, curve: { value: curve } } }).camera;
    const base = cameraShot(camera, 0);
    // Its V FOV is the one the aspect makes, in the lens's image radii.
    const radius = (fov) => (curve === 1 ? Math.tan(fov * Math.PI / 360) : Math.tan(curve * fov * Math.PI / 360) / curve);
    assert.ok(Math.abs(radius(base.hFOV_deg) / radius(base.vFOV_deg) - 16 / 9) < 1e-9);
    // A changed pair on the shot is not written back; its pose is.
    setCameraShot(camera, 0, { ...base, hFOV_deg: 120, vFOV_deg: 20, yaw_deg: 30, position: [0, 1, 0] }, base);
    assert.deepEqual([camera.fov.value, camera.aspect, camera.rotation.value.yaw_deg, camera.position.value], [90, 16 / 9, 30, [0, 1, 0]]);
    // The angle of view and the aspect are written as the state's own fields.
    setCameraField(camera, 0, "hFOV_deg", 70);
    setCameraField(camera, 0, "aspect", 1.25);
    assert.deepEqual([camera.fov.value, camera.aspect], [70, 1.25]);
    assert.deepEqual([cameraShot(camera, 0).hFOV_deg, cameraLensFields(camera, 0).aspect], [70, 1.25]);
  }
});

test("an aspect written to the Camera is held to the range the state keeps, as the saved text has it", () => {
  const { camera } = loadSceneState({ version: 2, camera: {} });
  for (const [value, expected] of [[1e9, 2048], [1e-9, 1 / 2048], [1.5, 1.5]]) {
    setCameraField(camera, 0, "aspect", value);
    assert.equal(camera.aspect, expected);
  }
});

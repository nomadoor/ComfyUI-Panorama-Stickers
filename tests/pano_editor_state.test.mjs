import assert from "node:assert/strict";
import test from "node:test";

import { readFileSync } from "node:fs";

import {
  editorActive,
  editorSceneState,
  editorStateText,
  makePanoEditorHistorySnapshot,
  normalizeCoverageValue,
  parsePanoEditorState,
  retainActiveCutoutShot,
  setEditorActive,
  stickerHasKeyframes,
} from "../web_src/pano_editor_state.js";
import { applyStickersNodeSurfaceAction } from "../web_src/pano_stickers_node_surface.js";
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
      preview_quality: "high",
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
  assert.deepEqual(state.ui_settings, {
    invert_view_x: true,
    invert_view_y: false,
    preview_quality: "high",
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
  for (const name of ["v2_canonical", "v2_interpolation", "v2_half_turns", "v2_invalid_fields"]) {
    const text = readFixture(name);
    const saved = editorStateText(sceneNode(), parsePanoEditorState(text));
    assert.deepEqual(JSON.parse(saved), loadSceneState(text), name);
  }
});

test("the editor works on the sky Stickers of state v2 in the v1 shape", () => {
  const state = parsePanoEditorState(readFixture("v2_canonical"));

  assert.deepEqual(state.stickers, [
    {
      id: "st_sky", yaw_deg: 30, pitch_deg: 10, hFOV_deg: 20, vFOV_deg: 15, rot_deg: 5, z_index: 2,
      visible: true, locked: true, crop: { x0: 0, y0: 0, x1: 1, y1: 1 }, asset_id: "st_sky",
    },
    {
      id: "st_hidden", yaw_deg: -45, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0, z_index: 0,
      visible: false, locked: false, crop: { x0: 0, y0: 0, x1: 1, y1: 1 }, asset_id: "st_hidden",
    },
  ]);
  assert.deepEqual(state.assets, {
    st_sky: { type: "comfy_image", filename: "logo.png", subfolder: "panorama_stickers", storage: "input", name: "logo.png" },
    st_hidden: { type: "comfy_image", filename: "old.png", subfolder: "", storage: "output", name: "old.png" },
  });
});

test("editor changes are saved as state v2 and keep what the editor does not edit", () => {
  const text = readFixture("v2_canonical");
  const loaded = loadSceneState(text);
  const state = parsePanoEditorState(text);
  Object.assign(state.stickers[1], { yaw_deg: 50, z_index: 5 });
  state.stickers.splice(0, 1);
  state.stickers.push({ id: "st_new", asset_id: "asset_new", yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 20, rot_deg: 0, z_index: 6, visible: true });
  state.assets.asset_new = { type: "comfy_image", filename: "new.png", subfolder: "panorama_stickers", storage: "input" };

  const saved = JSON.parse(editorStateText(sceneNode(), state));

  assert.equal(saved.version, 2);
  assert.deepEqual([saved.timeline, saved.camera, saved.scene], [loaded.timeline, loaded.camera, loaded.scene]);
  assert.deepEqual(saved.stickers.map((item) => item.id), ["st_world", "st_hidden", "st_new"]);
  const [world, sky, added] = saved.stickers;
  assert.deepEqual(world, loaded.stickers[1]);
  assert.deepEqual(sky, {
    ...loaded.stickers[2],
    transform: { ...loaded.stickers[2].transform, value: { ...loaded.stickers[2].transform.value, yaw_deg: 50 } },
    z_index: 5,
  });
  assert.deepEqual(added.source, { kind: "file", filename: "new.png", subfolder: "panorama_stickers", storage: "input" });
  assert.equal(added.z_index, 6);
  assert.deepEqual(editorSceneState(state), saved);
});

test("the editor's selection is kept on the node and not in state v2", () => {
  const node = sceneNode();
  const state = parsePanoEditorState(readFixture("v2_canonical"));
  state.active.selected_sticker_id = "st_sky";

  setEditorActive(node, state.active);
  const text = editorStateText(node, state);

  assert.equal("active" in JSON.parse(text), false);
  assert.deepEqual(node.properties, { pano_editor_active: { selected_sticker_id: "st_sky", selected_shot_id: null } });
  assert.equal(parsePanoEditorState(text, { active: editorActive(node) }).active.selected_sticker_id, "st_sky");
  assert.equal(editorActive({ properties: node.properties }), undefined);
});

test("the legacy node keeps its state_json in v1", () => {
  const node = { properties: {} };
  const state = parsePanoEditorState(readFixture("v1_stickers"));

  assert.equal(editorStateText(node, state), JSON.stringify(state));
  assert.deepEqual(node.properties, {});
  assert.equal(state.version, 1);
  assert.equal("scene_state" in state, false);
});

test("changing only the selection keeps the saved state_json text", () => {
  const node = sceneNode();
  const state = parsePanoEditorState(readFixture("v2_canonical"));
  const before = editorStateText(node, state);

  state.active.selected_sticker_id = "st_hidden";
  setEditorActive(node, state.active);

  assert.equal(editorStateText(node, state), before);
  assert.equal(node.properties.pano_editor_active.selected_sticker_id, "st_hidden");
});

test("a sky Sticker with Keyframes shows locked and the lock is not saved", () => {
  const text = readFixture("v2_canonical");
  const loaded = loadSceneState(text);
  const state = parsePanoEditorState(text);

  assert.equal(stickerHasKeyframes(state, "st_sky"), true);
  assert.equal(stickerHasKeyframes(state, "st_hidden"), false);
  assert.equal(stickerHasKeyframes(parsePanoEditorState(readFixture("v1_stickers")), "st_a"), false);
  assert.deepEqual(state.stickers.map((item) => item.locked), [true, false]);
  assert.equal(JSON.parse(editorStateText(sceneNode(), state)).stickers[0].locked, loaded.stickers[0].locked);

  const selected = applyStickersNodeSurfaceAction(state, { type: "select-sticker", id: "st_sky" }).state;
  assert.equal(applyStickersNodeSurfaceAction(selected, { type: "toggle-lock" }).changed, false);
  assert.equal(applyStickersNodeSurfaceAction(selected, { type: "set-transform", value: { yaw_deg: 90 } }).changed, false);
});

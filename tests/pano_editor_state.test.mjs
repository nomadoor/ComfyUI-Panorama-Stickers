import assert from "node:assert/strict";
import test from "node:test";

import {
  makePanoEditorHistorySnapshot,
  normalizeCoverageValue,
  parsePanoEditorState,
} from "../web_src/pano_editor_state.js";

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

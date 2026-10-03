import assert from "node:assert/strict";
import test from "node:test";

import { readFileSync } from "node:fs";

import { buildEasingModel, buildSelectionMenuModel, buildTimelineModel, buildWorldSelectionMenuModel, floatingRightState, selectionMenuPlacement, worldFieldRange } from "../web_src/pano_editor_ui_state.js";
import { buildModalShellPreset } from "../web_src/modal_shell_presets.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { setSegmentEasing } from "../web_src/pano_timeline.js";

const canonical = () => loadSceneState(readFileSync(new URL("./fixtures/scene_state/v2_canonical.json", import.meta.url), "utf8"));

test("the sole Cutout frame exposes an explicit delete action", () => {
  const shot = { id: "frame_1", locked: false };
  const model = buildSelectionMenuModel({
    type: "cutout",
    selected: shot,
    selectedItems: [shot],
    selectedKind: "shot",
    geom: {
      visible: true,
      corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }],
    },
    allLocked: false,
    selectedLocked: false,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
  });

  assert.equal(model.visible, true);
  assert.ok(model.items.some((item) => item.action === "delete"));
});

test("locked modal selections disable destructive and ordering actions", () => {
  const selected = { id: "sticker_1", locked: true };
  const model = buildSelectionMenuModel({
    type: "stickers",
    selected,
    selectedItems: [selected],
    selectedKind: "image",
    geom: {
      visible: true,
      corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }],
    },
    allLocked: true,
    anyLocked: true,
    selectedLocked: true,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
  });

  for (const action of ["bring-front", "send-back", "delete"]) {
    assert.equal(model.items.find((item) => item.action === action)?.disabled, true);
  }
});

test("the Timeline of Stickers has no Camera row, though its state keeps the Camera (ADR 0028)", () => {
  const state = canonical();
  const before = structuredClone(state.camera);
  const options = { frame: 24, span: 120, selection: null, selectedId: "st_sky", expanded: true, openRows: new Set(), playing: false, label: "" };

  const model = buildTimelineModel(state, options);

  assert.deepEqual(model.rows.map((row) => row.id), ["st_sky", "st_hidden", "st_world"]);
  assert.deepEqual(state.camera, before);
});

test("the Timeline has one row per object: the Camera with `camera`, then the Stickers from front to back", () => {
  const state = canonical();
  const options = { frame: 24, span: 120, selection: null, selectedId: "st_sky", expanded: true, openRows: new Set(), playing: false, label: "", camera: true };
  const model = buildTimelineModel(state, options);

  assert.deepEqual(model.rows.map((row) => [row.id, row.label, row.selected, row.open]), [
    ["camera", "Camera", false, false],
    ["st_sky", "logo.png", true, false],
    ["st_hidden", "old.png", false, false],
    ["st_world", "Sticker input", false, false],
  ]);
  const [camera, sky, , world] = model.rows;
  assert.equal(camera.clip, null);
  // One pin per frame: full where every Lane has a Keyframe, partial where only some do.
  assert.deepEqual(camera.keys, [{ frame: 0, full: true }, { frame: 24, full: true }, { frame: 48, full: false }]);
  assert.equal(camera.keyed, true, "every Camera Lane has a Keyframe at the playhead");
  assert.deepEqual(camera.lanes.map((lane) => [lane.lane, lane.label, lane.frames]), [
    ["position", "Position", [0, 24, 48]],
    ["rotation", "Rotation", [0, 24, 48]],
    ["fov", "FOV", [0, 24]],
  ]);
  assert.deepEqual(sky.clip, { start: 10, end: 50 });
  // st_sky's material starts at 10 - 5 = 5; only its opacity has Keyframes.
  assert.deepEqual(sky.keys, [{ frame: 10, full: false }, { frame: 20, full: false }, { frame: 30, full: false }]);
  assert.deepEqual(sky.lanes.map((lane) => lane.label), ["Direction", "Roll", "Size", "Opacity"]);
  assert.deepEqual(world.lanes.map((lane) => lane.label), ["Position", "Rotation", "Scale", "Opacity"]);
  assert.deepEqual(world.clip, { start: 0, end: null });

  const selected = buildTimelineModel(state, { ...options, frame: 20, selection: { owner: "st_sky", lane: null, frames: [5, 15] }, openRows: new Set(["st_sky"]) });
  assert.deepEqual([selected.rows[1].open, selected.rows[1].selectedFrames, selected.rows[1].lanes[3].selectedFrames], [true, [10, 20], []]);
  const lane = buildTimelineModel(state, { ...options, selection: { owner: "st_sky", lane: "opacity", frames: [5] } });
  assert.deepEqual([lane.rows[1].selectedFrames, lane.rows[1].lanes[3].selectedFrames], [[], [10]]);
});

test("the Easing panel shows the selected segments, and Mixed when they differ", () => {
  const camera = canonical().camera;
  const names = ["position", "rotation", "fov"];
  assert.deepEqual(buildEasingModel(camera, names, [0], 0), { label: "Frame 0", easing: "hold", mixed: false });
  // From 24 the position and rotation are auto; the fov's Keyframe at 24 is its last, whose Easing is not used.
  assert.deepEqual(buildEasingModel(camera, names, [24], 0), { label: "Frame 24", easing: "auto", mixed: false });
  setSegmentEasing(camera, ["rotation"], [24], [0, 0, 1, 1]);
  assert.deepEqual(buildEasingModel(camera, names, [0, 48], 0), { label: "0 – 48", easing: null, mixed: true });
  setSegmentEasing(camera, names, [0, 48], "hold");
  assert.deepEqual(buildEasingModel(camera, names, [0, 48], 0).easing, "hold", "choosing one aligns every segment");
  assert.equal(buildEasingModel(camera, ["fov"], [24], 0), null, "a Lane's last Keyframe has no segment");
  const sticker = canonical().stickers[0];
  assert.equal(buildEasingModel(sticker, ["opacity"], [5, 15], 5).label, "10 – 20");
});

test("the Timeline shows a mute toggle only when the background VIDEO has audio", () => {
  const options = { frame: 0, span: 10, selection: null, selectedId: null, expanded: false, openRows: new Set(), playing: false, label: "" };
  assert.deepEqual([buildTimelineModel(canonical(), options).hasAudio, buildTimelineModel(canonical(), options).muted], [false, false]);
  const muted = buildTimelineModel(canonical(), { ...options, audio: { muted: true } });
  assert.deepEqual([muted.hasAudio, muted.muted], [true, true]);
});

test("the Timeline bar shows the Timeline fps, locked when a video sets it, and the length override", () => {
  const state = canonical();
  const options = { frame: 0, span: 120, selection: null, selectedId: null, expanded: false, openRows: new Set(), playing: false, label: "" };

  assert.deepEqual(
    (({ fps, fpsLocked, length }) => ({ fps, fpsLocked, length }))(buildTimelineModel(state, options)),
    { fps: 30, fpsLocked: false, length: 120 },
  );
  state.timeline.length = null;
  const locked = buildTimelineModel(state, { ...options, fpsLocked: true });
  assert.deepEqual([locked.fpsLocked, locked.length], [true, null]);
});

test("a world Sticker's position and scale sliders reach past any value, which has no limit", () => {
  assert.equal(worldFieldRange(0), 100);
  assert.equal(worldFieldRange(-100), 100);
  assert.equal(worldFieldRange(150), 1000);
  assert.equal(worldFieldRange(-2500), 10000);
  assert.equal(worldFieldRange(1000), 1000);
  const editor = readFileSync(new URL("../web_src/pano_editor.js", import.meta.url), "utf8");
  // Typed values are not clamped to the slider; the scale only stays above 0.
  assert.match(editor, /if \(worldInspected && WORLD_UNLIMITED_FIELDS\.has\(key\)\) out = key === "scale" \? Math\.max\(out, WORLD_MIN_SCALE\) : out;/);
});

test("a world Sticker's selection menu holds the Move | Rotate | Scale segments, below its corners", () => {
  const model = buildWorldSelectionMenuModel({ corners: [{ x: 20, y: 30 }, { x: 80, y: 30 }, { x: 80, y: 70 }, { x: 20, y: 70 }], gizmoMode: "rotate" });
  assert.equal(model.visible, true);
  assert.deepEqual(model.anchor, { minX: 20, maxX: 80, minY: 30, maxY: 70 });
  assert.equal(model.items.length, 1);
  const [segments] = model.items;
  assert.equal(segments.kind, "segments");
  assert.equal(segments.attr, "data-gizmo-mode");
  assert.deepEqual(segments.buttons.map((button) => [button.key, button.label, button.pressed]), [
    ["translate", "Move", "false"],
    ["rotate", "Rotate", "true"],
    ["scale", "Scale", "false"],
  ]);
  // Without a corner in front of the view there is nowhere to put it.
  assert.equal(buildWorldSelectionMenuModel({ corners: [], gizmoMode: "translate" }).visible, false);
});

test("a selection menu goes below its target, above it when it does not fit, and inside the canvas otherwise", () => {
  // 400 x 300 canvas, a 100 x 40 menu; 14px from the edges, 18px from the target.
  const place = (anchor) => selectionMenuPlacement(anchor, 100, 40, 400, 300);
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 100, maxY: 150 }), { left: 150, top: 168 });
  // Near the bottom it goes above the target.
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 200, maxY: 260 }), { left: 150, top: 142 });
  // A target filling the canvas: neither fits, so the menu stays at the bottom edge inside it.
  assert.deepEqual(place({ minX: 0, maxX: 400, minY: 20, maxY: 290 }), { left: 150, top: 246 });
  // A target off the canvas below or above still gets a menu inside it.
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: 600, maxY: 700 }), { left: 150, top: 246 });
  assert.deepEqual(place({ minX: 150, maxX: 250, minY: -300, maxY: -200 }), { left: 150, top: 14 });
  // And sideways it stays inside too.
  assert.deepEqual(place({ minX: 380, maxX: 500, minY: 100, maxY: 150 }), { left: 286, top: 168 });
  assert.equal(place({ minX: NaN, maxX: 1, minY: 1, maxY: 1 }), null);
});

test("a world Sticker's menu stays clear of both the Sticker and its gizmo's handles", () => {
  const overlaps = (a, b) => a.minX < b.maxX && b.minX < a.maxX && a.minY < b.maxY && b.minY < a.maxY;
  const menuW = 160;
  const menuH = 35;
  const place = (corners, gizmoBox) => {
    const model = buildWorldSelectionMenuModel({ corners, gizmoBox, gizmoMode: "translate" });
    const { left, top } = selectionMenuPlacement(model.anchor, menuW, menuH, 800, 450);
    return { minX: left, maxX: left + menuW, minY: top, maxY: top + menuH };
  };
  const plane = (minX, minY, maxX, maxY) => [{ x: minX, y: minY }, { x: maxX, y: minY }, { x: maxX, y: maxY }, { x: minX, y: maxY }];
  const cases = [
    // A small Sticker whose gizmo reaches far past it: below the gizmo.
    [plane(380, 200, 420, 230), { minX: 330, maxX: 470, minY: 145, maxY: 285 }],
    // Near the bottom: above the gizmo.
    [plane(380, 330, 420, 360), { minX: 330, maxX: 470, minY: 275, maxY: 415 }],
    // A large Sticker around its gizmo: below the Sticker.
    [plane(250, 60, 550, 260), { minX: 330, maxX: 470, minY: 90, maxY: 230 }],
    // A 3D Sticker's origin only.
    [[{ x: 600, y: 120 }], { minX: 530, maxX: 670, minY: 50, maxY: 190 }],
  ];
  for (const [corners, gizmoBox] of cases) {
    const menu = place(corners, gizmoBox);
    const xs = corners.map((point) => point.x);
    const ys = corners.map((point) => point.y);
    const target = { minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
    assert.equal(overlaps(menu, gizmoBox), false, JSON.stringify(menu));
    assert.equal(overlaps(menu, target), false, JSON.stringify(menu));
    // With the gap of the selection menu between them.
    assert.ok(menu.minY >= gizmoBox.maxY + 18 || menu.maxY <= gizmoBox.minY - 18, JSON.stringify(menu));
  }
  // Without the gizmo on screen it goes by the Sticker as before.
  assert.deepEqual(place(plane(380, 200, 420, 230), null), { minX: 320, maxX: 480, minY: 248, maxY: 283 });
});

test("no bottom-right button moves when another one shows, hides or changes", () => {
  const states = [];
  for (const spaceView of [false, true]) {
    for (const spaceMode of ["3dof", "6dof"]) {
      for (const readOnly of [false, true]) {
        for (const frameMode of [false, true]) {
          for (const showGrid of [false, true]) states.push({ spaceView, spaceMode, readOnly, frameMode, showGrid });
        }
      }
    }
  }
  for (const preset of [buildModalShellPreset("stickers"), buildModalShellPreset("cutout")]) {
    for (const state of states) {
      const floating = floatingRightState(state);
      // The buttons right of the space group always show: nothing here hides one.
      for (const patch of Object.values(floating.buttons)) assert.equal("visible" in patch, false);
      assert.deepEqual(Object.keys(floating.buttons).filter((action) => !preset.floatingButtons.some((button) => button.action === action)), []);
      assert.equal(preset.floatingButtons.some((button) => "visible" in button), false);
      // The space group shows as a whole with World content; Frame Selected in it is only disabled outside 6DoF.
      assert.equal(floating.space.visible, state.spaceView);
      assert.equal(floating.space.frameDisabled, state.readOnly || !state.spaceView || state.spaceMode !== "6dof");
      assert.equal(floating.space.mode, state.spaceMode);
    }
  }
  // The group's buttons carry no visibility of their own.
  const preset = buildModalShellPreset("stickers");
  assert.equal([...preset.spaceButtons, preset.spaceFrameButton].some((button) => "visible" in button), false);
  // The group is at the left end of the row, which is anchored on the right, so it grows away from the
  // other buttons. Only the group shows or hides.
  const floatingRight = readFileSync(new URL("../web_src/components/PanoFloatingRight.vue", import.meta.url), "utf8");
  const row = floatingRight.slice(floatingRight.indexOf('<div class="pano-floating-right">'), floatingRight.indexOf('<div\n    v-show="preview.visible"'));
  assert.ok(row.indexOf('class="pano-floating-space"') < row.indexOf('v-for="button in buttons"'));
  assert.deepEqual(row.match(/v-show="[^"]*"|v-if="[^"]*"/g), ['v-if="space"', 'v-show="space.visible"']);
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.match(css, /\.pano-floating-right \{\s*position: absolute;\s*right: var\(--pano-space-xl\);/);
});

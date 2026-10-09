import assert from "node:assert/strict";
import test from "node:test";

import { readFileSync } from "node:fs";

import { ERP_ASPECT, PAINTING_ROW, cameraParamEnabled, stickerParamEnabled, buildEasingModel, buildSelectionMenuModel, buildTimelineModel, buildWorldSelectionMenuModel, cameraAspectChoices, floatingRightState, frameViewButton, inspectorRows, selectionMenuPlacement, upstreamInspectorModel, worldFieldRange } from "../web_src/pano_editor_ui_state.js";
import { ICON } from "../web_src/icons.js";
import { buildModalShellPreset } from "../web_src/modal_shell_presets.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { keyedAt, setSegmentEasing } from "../web_src/pano_timeline.js";
import { upstreamLayersOf, upstreamWorkingLayers } from "../web_src/pano_upstream.js";
import { readEditorSource } from "./editor_source.mjs";

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
  assert.equal(keyedAt(camera.keys, 24), true, "every Camera Lane has a Keyframe at the playhead");
  assert.equal("keyed" in camera || "frame" in model || "playing" in model || "label" in model, false, "the playhead is not in the model");
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

test("every Timeline row has the eye's place; the eye shows and hides what can be hidden", () => {
  const state = canonical();
  const options = { frame: 24, span: 120, selection: null, selectedId: null, expanded: true, openRows: new Set(), playing: false, label: "", camera: true, scene: true };
  const eyes = (model) => model.rows.map((row) => [row.id, row.hideable, row.visible]);

  // The Cutout's Camera always shoots, so only Panorama Studio's has an eye.
  assert.deepEqual(eyes(buildTimelineModel(state, options)), [
    ["camera", false, true],
    ["st_sky", true, true],
    ["st_hidden", true, false],
    ["st_world", true, true],
    ["scene", true, true],
  ]);
  state.camera.visible = false;
  state.scene.visible = false;
  assert.deepEqual(eyes(buildTimelineModel(state, { ...options, cameraHideable: true })).filter(([id]) => id === "camera" || id === "scene"), [
    ["camera", true, false],
    ["scene", true, false],
  ]);

  // The painting has a row after the Stickers while it has something to show, or is hidden.
  const ids = (next) => buildTimelineModel(next, options).rows.map((row) => row.id);
  assert.equal(ids(state).includes(PAINTING_ROW), false);
  state.painting.mask.strokes.push({ id: "m" });
  assert.deepEqual(ids(state).slice(-2), [PAINTING_ROW, "scene"]);
  state.painting.mask.strokes = [];
  state.painting_visible = false;
  const paint = buildTimelineModel(state, options).rows.find((row) => row.id === PAINTING_ROW);
  assert.deepEqual([paint.label, paint.hideable, paint.visible, paint.keyable, paint.clip, paint.keys], ["Paint", true, false, false, null, []]);
  assert.equal(ids({ ...state, painting_visible: true }).includes(PAINTING_ROW), false);
});

test("the eye keeps its place in every row, and only the hideable rows have a button there", () => {
  const timeline = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timeline, /<button\s+v-if="row\.hideable"\s+class="pano-timeline-eye"[\s\S]*?:aria-pressed="row\.visible \? 'true' : 'false'"[\s\S]*?<SvgIcon :icon="row\.visible \? ICON\.eye : ICON\.eye_dashed" \/>\s*<\/button>\s*<span v-else class="pano-timeline-eye" aria-hidden="true" \/>/);
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.match(css, /\.pano-timeline-eye,\s*\.pano-timeline-open,\s*\.pano-timeline-key \{[^}]*width: 20px;/);
  // Showing and hiding is one history step and does not stop playback.
  const editor = readEditorSource();
  const toggle = editor.slice(editor.indexOf('if (action.type === "toggle-visible") {'), editor.indexOf('if (action.type === "select-row") {'));
  assert.match(toggle, /releaseHiddenSelection\(\);\s*commitTimelineEdit\(\);/);
  assert.equal(toggle.includes("stopTimelinePlayback"), false);
});

test("the inspector puts grouped fields side by side in one row and the others alone with a slider", () => {
  const param = (key, label) => ({ key, label, value: 0, displayValue: "0" });
  const rows = inspectorRows([
    param("position_x", "X"), param("position_y", "Y"), param("position_z", "Z"),
    param("yaw_deg", "Yaw"), param("pitch_deg", "Pitch"), param("rot_deg", "Roll"),
    param("hFOV_deg", "H FOV"), param("vFOV_deg", "V FOV"),
    param("scale", "Scale"), param("opacity", "Opacity"),
  ]);
  assert.deepEqual(rows.map((row) => [row.label, row.grouped, row.fields.map((field) => field.short ?? field.label)]), [
    ["Position", true, ["X", "Y", "Z"]],
    ["Rotation", true, ["Y", "P", "R"]],
    ["FOV", true, ["H", "V"]],
    ["Scale", false, ["Scale"]],
    ["Opacity", false, ["Opacity"]],
  ]);
  assert.deepEqual(rows[1].fields.map((field) => [field.key, field.label, field.drag]), [["yaw_deg", "Yaw", 0.5], ["pitch_deg", "Pitch", 0.5], ["rot_deg", "Roll", 0.5]]);
  // The grouped fields share three equal columns, whatever their digits.
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.match(css, /\.pano-field-group-values \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
  assert.match(css, /\.pano-field\.pano-field-group input\[type="number"\] \{[^}]*width: 100%;/);
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

test("a port Sticker's bar without a duration ends with its media, and a one-frame Timeline does not play", () => {
  const state = loadSceneState({ version: 2, stickers: [
    { id: "p", source: { kind: "port" }, clip: { start: 6, in: 2 } },
    { id: "f", source: { kind: "file", filename: "a.png" }, clip: { start: 3, in: 0 } },
    { id: "d", source: { kind: "file", filename: "b.png" }, clip: { start: 1, in: 0, duration: 4 } },
  ] });
  const options = { span: 120, selection: null, selectedId: null, expanded: true, openRows: new Set() };
  const ends = (model) => Object.fromEntries(model.rows.map((row) => [row.id, row.clip.end]));
  // portBarEnd gives where a port Sticker's media ends (editor/timeline.js), null while it is not known.
  const portBarEnd = (sticker) => (sticker.source.kind === "port" && sticker.clip.duration === null ? 40 : null);
  assert.deepEqual(ends(buildTimelineModel(state, { ...options, portBarEnd })), { p: 40, f: null, d: 5 });
  assert.deepEqual(ends(buildTimelineModel(state, options)), { p: null, f: null, d: 5 }, "a media end not known yet: the Timeline's end");
  assert.equal(buildTimelineModel(state, options).playable, true);
  assert.equal(buildTimelineModel(state, { ...options, span: 1 }).playable, false);
  const timeline = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timeline, /class="pano-btn pano-btn-icon pano-timeline-play"\s*type="button"\s*:disabled="!model\.playable"/);
  // The length field always shows a number: the set length, or the derived one the Timeline spans. No "Auto".
  assert.match(timeline, /const lengthText = computed\(\(\) => String\(props\.model\.length \?\? span\.value\)\);/);
  assert.match(timeline, /:value="lengthText" aria-label="Output length in frames"/);
  assert.doesNotMatch(timeline, /Auto/);
  // The reset button right of it keeps its slot: disabled without a set length.
  assert.match(timeline, /class="pano-btn pano-btn-icon pano-timeline-length-reset"\s*type="button"\s*:disabled="model\.length == null"/);
  // What lies past the output's end is not on the Timeline: no pins, Clip ranges cut at the end.
  assert.match(timeline, /const shown = keys\.filter\(\(key\) => key\.frame < span\.value\);/);
  assert.match(timeline, /v-if="row\.clip && row\.clip\.start < span"/);
  assert.match(timeline, /Math\.min\(clip\.end, span\.value\)/);
});

test("a world Sticker's position and scale sliders reach past any value, which has no limit", () => {
  assert.equal(worldFieldRange(0), 100);
  assert.equal(worldFieldRange(-100), 100);
  assert.equal(worldFieldRange(150), 1000);
  assert.equal(worldFieldRange(-2500), 10000);
  assert.equal(worldFieldRange(1000), 1000);
  const editor = readEditorSource();
  // Typed values are not clamped to the slider; the scale only stays above 0.
  assert.match(editor, /if \(\(worldInspected \|\| cameraV2\) && WORLD_UNLIMITED_FIELDS\.has\(key\)\) out = key === "scale" \? Math\.max\(out, WORLD_MIN_SCALE\) : out;/);
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

test("the Camera has Move | Rotate in its gizmo menu, and its frame menu has no lock", () => {
  const menu = buildWorldSelectionMenuModel({ corners: [{ x: 10, y: 10 }], gizmoMode: "rotate", camera: true });
  assert.deepEqual(menu.items[0].buttons.map((button) => [button.key, button.tip, button.pressed]), [
    ["translate", "Move the camera", "false"],
    ["rotate", "Rotate the camera", "true"],
  ]);

  const shot = { id: "camera", locked: false };
  const model = buildSelectionMenuModel({
    type: "cutout",
    selected: shot,
    selectedItems: [shot],
    selectedKind: "frame",
    geom: { visible: true, corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }] },
    selectedLocked: false,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
    cameraShot: true,
  });
  assert.deepEqual(model.items.map((item) => item.key), ["aspect", "rotate-90", "delete"]);
});

// docs/editor-interaction.md: a 3D Sticker's row has the box of the `scene` row, an image's the image.
test("the rows of the 3D Stickers, the port's and the 3D files', have the box icon", () => {
  const world = (id, source) => ({ id, placement: "world", source });
  const state = loadSceneState({
    version: 2,
    stickers: [
      { id: "s1", placement: "sky", source: { kind: "file", filename: "a.png" } },
      { id: "s2", placement: "sky", source: { kind: "file", data_url: "data:image/png;base64,AAAA" } },
      world("w1", { kind: "file", filename: "a.png" }),
      world("w2", { kind: "port" }),
      world("w3", { kind: "file", filename: "chair.glb", subfolder: "3d" }),
      world("w4", { kind: "file", filename: "points.PLY", subfolder: "3d" }),
    ],
  });
  const options = { span: 120, selection: null, selectedId: null, expanded: true, openRows: new Set() };
  const icons = (model) => Object.fromEntries(model.rows.map((row) => [row.id, row.icon]));
  assert.deepEqual(icons(buildTimelineModel(state, options)), { s1: ICON.image, s2: ICON.image, w1: ICON.image, w2: ICON.box, w3: ICON.box, w4: ICON.box });
  // A 3D file still uploading has no file name yet; the editor names it among the 3D Stickers.
  const uploading = loadSceneState({ version: 2, stickers: [world("w5", { kind: "file", filename: "chair.glb" })] });
  uploading.stickers[0].source = { kind: "file", filename: "" };
  assert.equal(icons(buildTimelineModel(uploading, options)).w5, ICON.image);
  assert.equal(icons(buildTimelineModel(uploading, { ...options, loading3d: new Set(["w5"]) })).w5, ICON.box);
});

test("Panorama Studio's Add to World takes an image or a 3D model", () => {
  const add = buildModalShellPreset("studio").toolButtons.find((button) => button.key === "add-world");
  assert.deepEqual([add.value, add.label, add.tip, add.icon], ["add-world", "Add to World", "Add an image or 3D model in space", ICON.globe]);
});

// --- Panorama Studio (#89): the Stickers editor of state v2 with the Cutout's Camera.

test("Panorama Studio's editor has the Stickers tools with Add Camera, and always shows the Frame tab", () => {
  const studio = buildModalShellPreset("studio");
  const stickers = buildModalShellPreset("stickers");
  assert.deepEqual(studio.viewButtons.map((button) => button.key), ["pano", "unwrap", "frame"]);
  assert.deepEqual(studio.viewButtons.map((button) => button.key), buildModalShellPreset("cutout").viewButtons.map((button) => button.key));
  const keys = (preset) => preset.toolButtons.map((button) => button.key);
  assert.deepEqual(keys(studio), ["cursor", "paint", "mask", "add", "add-world", "add-camera", "clear", "undo", "redo"]);
  assert.equal(keys(stickers).includes("add-camera"), false);
  assert.equal(keys(buildModalShellPreset("cutout")).includes("add-camera"), false);
  // Add Camera is an action, not a mode: it is never pressed, and it is never hidden (only disabled).
  const add = studio.toolButtons.find((button) => button.key === "add-camera");
  assert.deepEqual([add.attr, add.value, add.pressed, "visible" in add, add.label, add.tip], ["data-tool-ui-action", "add-camera", null, false, "Add Camera", "Add camera"]);
  assert.equal(add.icon, "camera_plus");
});

test("the Frame tab stays in place, disabled with the reason while Panorama Studio has no frame to show", () => {
  assert.deepEqual(frameViewButton({ hasShot: false, studio: true }), { disabled: true, tip: "Add a camera to use the Frame view" });
  assert.deepEqual(frameViewButton({ hasShot: true, studio: true }), { disabled: false, tip: null });
  assert.deepEqual(frameViewButton({ hasShot: true, erp: true, studio: true }), { disabled: true, tip: "A 360° camera has no frame" });
  assert.deepEqual(frameViewButton({ hasShot: false, hidden: true, studio: true }), { disabled: true, tip: "The camera is hidden" });
  // The Cutout keeps its tab as before.
  assert.deepEqual(frameViewButton({ hasShot: false }), { disabled: true, tip: null });
  assert.deepEqual(frameViewButton({ hasShot: true }), { disabled: false, tip: null });
  // A disabled tab keeps its tooltip: it is aria-disabled, and the editor ignores its clicks.
  const toggle = readFileSync(new URL("../web_src/components/PanoViewToggle.vue", import.meta.url), "utf8");
  assert.match(toggle, /:aria-disabled="button\.disabled === true \? 'true' : null"/);
  assert.match(toggle, /:data-tip="button\.tip \|\| null"/);
  assert.doesNotMatch(toggle, /:disabled=/);
  const editor = readEditorSource();
  assert.match(editor, /if \(viewTarget\.getAttribute\("aria-disabled"\) === "true"\) return;/);
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.match(css, /\.pano-view-btn\[aria-disabled="true"\] \{/);
});

test("Panorama Studio's Timeline shows the Camera, the Stickers and the `scene` on one Timeline, and its bar stays as it is", () => {
  const state = canonical();
  const options = { frame: 24, span: 120, selection: null, selectedId: null, expanded: true, openRows: new Set(), playing: false, label: "" };
  const rows = (model) => model.rows.map((row) => [row.id, row.icon]);

  const withoutCamera = buildTimelineModel(state, options);
  const withCamera = buildTimelineModel(state, { ...options, camera: true });
  const withScene = buildTimelineModel(state, { ...options, camera: true, scene: true });

  // The world port Sticker is 3D media: the box, as the `scene` row.
  assert.deepEqual(rows(withoutCamera), [["st_sky", "image"], ["st_hidden", "image"], ["st_world", "box"]]);
  assert.deepEqual(rows(withCamera), [["camera", "camera"], ["st_sky", "image"], ["st_hidden", "image"], ["st_world", "box"]]);
  assert.deepEqual(rows(withScene).at(-1), ["scene", "box"]);
  // The Camera row only adds a row: the bar above the rows is the same.
  const bar = ({ rows: _rows, ...rest }) => rest;
  assert.deepEqual(bar(withCamera), bar(withoutCamera));

  // The `scene` row has its Clip range and Keyframes in the Timeline frames of its material.
  const scene = withScene.rows.at(-1);
  assert.deepEqual([scene.label, scene.clip], ["Scene", { start: state.scene.clip.start, end: state.scene.clip.duration === null ? null : state.scene.clip.start + state.scene.clip.duration }]);
  // Nothing in the editor moves the `scene` yet: its row has only its Clip range, no key button and no Lanes.
  assert.deepEqual([scene.keyable, scene.lanes, scene.open], [false, [], false]);
  assert.equal(buildTimelineModel(state, { ...options, scene: true, openRows: new Set(["scene"]) }).rows.at(-1).open, false);
  assert.equal(withScene.rows[0].keyable, true);
  const timelineVue = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timelineVue, /v-if="row\.keyable"\s*class="pano-timeline-key"/);
  const editorJs = readEditorSource();
  assert.match(editorJs, /if \(action\.owner === "scene" \|\| action\.owner === BACKGROUND_ROW \|\| !timelineEditable\(action\.owner\)\) return;/);
  // Without its input, the `scene` row shows only while the `scene` changes over time.
  const still = loadSceneState({ version: 2 });
  assert.equal(buildTimelineModel(still, options).rows.some((row) => row.id === "scene"), false);
  still.scene.clip.start = 5;
  assert.equal(buildTimelineModel(still, options).rows.some((row) => row.id === "scene"), true);
  const timeline = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timeline, /<SvgIcon :icon="row\.icon" \/>/);
});

test("Panorama Studio's Camera menu has the 360° preset and Delete, and a 360° Camera has no frame to turn", () => {
  const shot = { id: "camera", locked: false };
  const menu = (options) => buildSelectionMenuModel({
    type: "stickers",
    selected: shot,
    selectedItems: [shot],
    selectedKind: "frame",
    geom: { visible: true, corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }] },
    selectedLocked: false,
    activeAspect: "16:9",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
    cameraShot: true,
    ...options,
  });

  const perspective = menu({});
  assert.deepEqual(perspective.items.map((item) => item.key), ["aspect", "rotate-90", "delete"]);
  assert.deepEqual(perspective.items[0].choices.map((choice) => [choice.value, choice.label, choice.active]), [
    ["1:1", "1:1", false], ["4:3", "4:3", false], ["3:2", "3:2", false], ["16:9", "16:9", true], [ERP_ASPECT, "360°", false],
  ]);
  assert.equal(perspective.items[1].disabled, false);
  const erp = menu({ activeAspect: ERP_ASPECT, coverage: 180 });
  assert.deepEqual(erp.items[0].choices.at(-1), { value: ERP_ASPECT, label: "180°", active: true });
  assert.equal(erp.items[1].disabled, true);
  // The legacy Cutout's frame has neither.
  assert.deepEqual(cameraAspectChoices("1:1").map((choice) => choice.value), ["1:1", "4:3", "3:2", "16:9"]);

  // In 6DoF its gizmo menu has Delete after Move | Rotate.
  const gizmo = buildWorldSelectionMenuModel({ corners: [{ x: 10, y: 10 }], gizmoMode: "translate", camera: true });
  assert.deepEqual(gizmo.items.map((item) => [item.key, item.action]), [["gizmo-mode", undefined], ["delete", "delete"]]);
  assert.equal(buildWorldSelectionMenuModel({ corners: [{ x: 10, y: 10 }], gizmoMode: "translate" }).items.length, 1);
});

test("a 360° Camera's FOV fields are disabled, and the others stay as they are (#89)", () => {
  for (const key of ["hFOV_deg", "vFOV_deg"]) {
    assert.equal(cameraParamEnabled(key, { erp: true }), false);
    assert.equal(cameraParamEnabled(key), true);
  }
  for (const key of ["yaw_deg", "pitch_deg", "roll_deg", "position_x"]) assert.equal(cameraParamEnabled(key, { erp: true }), true);
  // The disabled tab is left out of the Tab order, and keeps its colour under the pointer.
  const toggle = readFileSync(new URL("../web_src/components/PanoViewToggle.vue", import.meta.url), "utf8");
  assert.match(toggle, /:tabindex="button\.disabled === true \? -1 : null"/);
  const css = readFileSync(new URL("../web/pano_editor.css", import.meta.url), "utf8");
  assert.doesNotMatch(css, /\.pano-view-btn\[data-view="frame"\]:hover/);
});

test("a port Sticker's V FOV shows the value its media gives, disabled; its other fields stay as they are", () => {
  assert.equal(stickerParamEnabled("vFOV_deg", { port: true }), false);
  assert.equal(stickerParamEnabled("vFOV_deg"), true);
  for (const key of ["yaw_deg", "pitch_deg", "rot_deg", "hFOV_deg", "opacity"]) assert.equal(stickerParamEnabled(key, { port: true }), true);
  const panels = readFileSync(new URL("../web_src/editor/panels.js", import.meta.url), "utf8");
  assert.match(panels, /if \(isSceneSticker\(inspectorSelected\) && !shotInspected\) params\.forEach\(\(param\) => \{ param\.enabled = param\.enabled && stickerParamEnabled\(param\.key, \{ port: isExternalSticker\(inspectorSelected\) \}\); \}\);/);
});


// ADR 0030 T8: a selected upstream element.
test("an upstream element's menu keeps every button in place and leaves only Lock on, while its layer keeps overrides", () => {
  const selected = { id: "upstream:scene_a:sticker_1", locked: false };
  const menu = (upstream) => buildSelectionMenuModel({
    type: "stickers",
    selected,
    selectedItems: [selected],
    selectedKind: "image",
    geom: { visible: true, corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }] },
    allLocked: false,
    selectedLocked: false,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => false,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
    upstream,
  });
  const own = menu(null);
  const editable = menu({ editable: true });
  assert.deepEqual(editable.items.map((item) => item.key), own.items.map((item) => item.key));
  assert.deepEqual(editable.items.filter((item) => !item.disabled).map((item) => item.key), ["toggle-lock", "delete"]);
  assert.deepEqual(menu({ editable: false }).items.filter((item) => !item.disabled), []);
});

test("an upstream port Sticker's menu has Delete (ADR 0030), the node's own port Sticker's has not", () => {
  const selected = { id: "upstream:scene_a:sticker_1", locked: false };
  const menu = (upstream, selectedLocked = false) => buildSelectionMenuModel({
    type: "stickers",
    selected,
    selectedItems: [selected],
    selectedKind: "image",
    geom: { visible: true, corners: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 20, y: 60 }] },
    allLocked: selectedLocked,
    selectedLocked,
    activeAspect: "1:1",
    cutoutAspectOpen: false,
    isExternalSticker: () => true,
    isStickerHidden: () => false,
    canRestoreSelectedToInitial: () => false,
    iconSet: new Proxy({}, { get: (_, key) => String(key) }),
    upstream,
  });
  assert.equal(menu(null).items.some((item) => item.key === "delete"), false);
  assert.equal(menu({ editable: true }).items.find((item) => item.key === "delete").disabled, false);
  assert.equal(menu({ editable: true }, true).items.find((item) => item.key === "delete").disabled, true);
});

test("every Panorama Studio Sticker has the same inspector rows, Revert to upstream without Visible and Lock: an upstream one's buttons, the own one's disabled", () => {
  const rows = (model) => Object.keys(model).sort();
  const override = { id: "sticker_1", placement: "sky", visible: true, roll: { value: 3, keyframes: [] } };
  const upstream = upstreamInspectorModel({ layer: "scene_a", editable: true, locked: false, readOnly: false, placement: "sky", override });
  const own = upstreamInspectorModel({ layer: null, editable: false, locked: true, readOnly: false, placement: "world" });
  const inherited = upstreamInspectorModel({ layer: "#1", editable: false, locked: true, readOnly: false, placement: "sky" });
  // The same rows for each, so selecting one after another does not move the panel.
  assert.deepEqual(rows(own), rows(upstream));
  assert.deepEqual(rows(inherited), rows(upstream));
  const enabled = (model) => model.lanes.filter((lane) => !lane.disabled).map((lane) => lane.name);
  assert.deepEqual(upstream, {
    origin: "Upstream · scene_a",
    note: "",
    revertAll: { disabled: false },
    lanes: [
      { name: "direction", label: "Direction", action: "revert-upstream", disabled: true },
      { name: "roll", label: "Roll", action: "revert-upstream", disabled: false },
      { name: "size", label: "Size", action: "revert-upstream", disabled: true },
      { name: "opacity", label: "Opacity", action: "revert-upstream", disabled: true },
    ],
  });
  // The own Sticker's rows are there with its placement's Lanes, all disabled.
  assert.deepEqual(own.lanes.map((lane) => [lane.label, lane.disabled]), [["Position", true], ["Rotation", true], ["Scale", true], ["Opacity", true]]);
  assert.equal(own.revertAll.disabled, true);
  assert.equal(inherited.origin, "Upstream · #1 · inherited only");
  assert.match(inherited.note, /^Inherited only/);
  assert.deepEqual([inherited.revertAll.disabled, enabled(inherited)], [true, []]);
  const readOnly = upstreamInspectorModel({ layer: "scene_a", editable: true, locked: false, readOnly: true, placement: "sky", override });
  assert.deepEqual([readOnly.revertAll.disabled, enabled(readOnly)], [true, []]);
  // Nothing to revert or restore; a locked element is not reverted, but its layer's deleted are restored; an
  // override made for the other placement is reverted whole only.
  const bare = upstreamInspectorModel({ layer: "scene_a", editable: true, locked: false, readOnly: false, placement: "sky", override: null });
  assert.deepEqual([bare.revertAll.disabled, enabled(bare)], [true, []]);
  const locked = upstreamInspectorModel({ layer: "scene_a", editable: true, locked: true, readOnly: false, placement: "sky", override });
  assert.deepEqual([locked.revertAll.disabled, enabled(locked)], [true, []]);
  const other = upstreamInspectorModel({ layer: "scene_a", editable: true, locked: false, readOnly: false, placement: "world", override });
  assert.deepEqual([other.revertAll.disabled, enabled(other)], [false, []]);
  // The node's own port Sticker shown with the Pose handoff reverts its handoff Lanes in the same row: Opacity,
  // which the handoff does not give, and All stay disabled.
  const handoff = [{ name: "direction", overridden: true }, { name: "roll", overridden: false }, { name: "size", overridden: true }];
  const port = upstreamInspectorModel({ layer: null, editable: false, locked: false, readOnly: false, placement: "sky", handoff });
  assert.deepEqual(rows(port), rows(upstream));
  assert.deepEqual(port.lanes.map((lane) => [lane.name, lane.action, lane.disabled]), [
    ["direction", "revert-handoff-lane", false],
    ["roll", "revert-handoff-lane", true],
    ["size", "revert-handoff-lane", false],
    ["opacity", "revert-handoff-lane", true],
  ]);
  assert.equal(port.revertAll.disabled, true);
  const lockedPort = upstreamInspectorModel({ layer: null, editable: false, locked: true, readOnly: false, placement: "sky", handoff });
  assert.deepEqual(enabled(lockedPort), []);
  const worldPort = upstreamInspectorModel({ layer: null, editable: false, locked: false, readOnly: false, placement: "world", handoff: [{ name: "position", overridden: true }, { name: "rotation", overridden: false }, { name: "scale", overridden: false }] });
  assert.deepEqual(enabled(worldPort), ["position"]);
  // Every kind of Sticker has the same number of Lane buttons.
  for (const model of [upstream, own, inherited, port, worldPort]) assert.equal(model.lanes.length, 4);
  // The inspector gives the rows for any Sticker of Panorama Studio, own or upstream, sky or world; the panel
  // always renders them and the origin's slot in the Transform title.
  const editor = readEditorSource();
  assert.match(editor, /upstream: studio && target && \(target === worldInspected \|\| isSceneSticker\(target\)\) \? upstreamInspectorModel\(\{\s*layer: isUpstreamSticker\(target\) \? target\.origin\.layer : null,/);
  const panel = readFileSync(new URL("../web_src/components/PanoSidePanel.vue", import.meta.url), "utf8");
  assert.match(panel, /<span class="meta">\{\{ model\.upstream\?\.origin \|\| "" \}\}<\/span>/);
  const origin = readFileSync(new URL("../web_src/components/PanoUpstreamOrigin.vue", import.meta.url), "utf8");
  assert.doesNotMatch(origin, /v-if="model\.note"/);
  // One "Revert to upstream" row for upstream elements and the Pose handoff alike, with no rows of its own
  // that come and go with the selection.
  assert.doesNotMatch(panel, /PanoHandoffRevert/);
  assert.match(origin, /:data-action="lane\.action"/);
  assert.doesNotMatch(origin, /v-if="model\.(lanes|revertAll)/);
  // Restore deleted is the layer's, on its Timeline header only.
  assert.doesNotMatch(origin, /restore-upstream-deleted/);
  // The eye is on the Timeline row and the lock in the selection menu: the inspector has no Visible or Lock row.
  assert.doesNotMatch(origin, /Visible|Lock|upstream-visible|upstream-locked/);
  assert.equal(Object.hasOwn(upstream, "visible") || Object.hasOwn(upstream, "locked"), false);
  assert.match(editor, /handoff: isUpstreamSticker\(target\) \? null : portHandoffLanes\(target\)/);
});

// ADR 0030 T9: the upstream layers' rows, below the node's own.
test("each upstream layer has a group below the node's own rows: its header, its Stickers, its painting and its scene", () => {
  const state = canonical();
  const options = { span: 120, selection: null, selectedId: "upstream:scene_a:sticker_2", expanded: true, openRows: new Set(["upstream:scene_a:sticker_1"]), camera: true, scene: true };
  const raw = [
    {
      id: "scene_a",
      timeline: { fps: 30 },
      scene: { clip: { start: 30, in: 0, duration: 60 } },
      stickers: [
        { id: "sticker_1", placement: "sky", source: { kind: "file", filename: "a.png" }, z_index: 1, clip: { start: 15, in: 3 },
          roll: { value: 0, keyframes: [{ frame: 0, value: 0 }, { frame: 30, value: 10 }] } },
        { id: "sticker_2", placement: "sky", source: { kind: "file", filename: "b.png" }, z_index: 2, visible: false },
        { id: "sticker_3", placement: "world", source: { kind: "port" } },
      ],
      painting_visible: false,
    },
    { stickers: [{ id: "sticker_1", placement: "sky", source: { kind: "file", filename: "c.png" } }] },
  ];
  const records = loadSceneState({ version: 2, upstream: [{ layer: "scene_a", fps: 24, stickers: [{ id: "sticker_2", placement: "sky", visible: false }], scene: { visible: true } }] }).upstream;
  const working = upstreamWorkingLayers(upstreamLayersOf(raw.map((layer) => ({ state: { version: 2, ...layer } }))), records, 24);
  const upstream = working.map(({ key, sceneState }, index) => ({
    key, sceneState, editable: index === 0, record: index === 0 ? records[0] : null, scene: index === 0, deleted: 0,
  }));
  const model = buildTimelineModel(state, { ...options, upstream });

  // The node's own rows are the same as without upstream layers.
  assert.deepEqual(model.rows, buildTimelineModel(state, options).rows);
  assert.equal(buildTimelineModel(state, options).groups.length, 0);
  assert.deepEqual(model.groups.map((group) => [group.key, group.label]), [["scene_a", "Upstream · scene_a"], ["#1", "Upstream · #1 · inherited only"]]);
  const [a, b] = model.groups;
  assert.deepEqual(a.rows.map((row) => [row.id, row.label, row.hideable, row.visible, row.keyable, row.upstream, row.overridden, row.editable, row.selected]), [
    ["upstream:scene_a:sticker_2", "b.png", true, false, true, true, true, true, true],
    ["upstream:scene_a:sticker_1", "a.png", true, true, true, true, false, true, false],
    ["upstream:scene_a:sticker_3", "Sticker input", true, true, true, true, false, true, false],
    ["upstream:scene_a:painting", "Paint", true, false, false, true, false, true, false],
    ["upstream:scene_a:scene", "Scene", true, true, false, true, true, true, false],
  ]);
  // Frames are the editor's (24 fps): the 30 fps layer's Clip range and Keyframes rebased.
  const sticker1 = a.rows[1];
  assert.deepEqual(sticker1.clip, { start: 12, end: null });
  assert.deepEqual(sticker1.keys.map((key) => key.frame), [10, 34]);
  assert.equal(sticker1.open, true);
  assert.deepEqual(sticker1.lanes.find((lane) => lane.lane === "roll").frames, [10, 34]);
  assert.deepEqual(a.rows[4].clip, { start: 24, end: 72 });
  // A layer that is only inherited shows its rows, none of them editable or overridden; no painting or scene to show.
  assert.deepEqual(b.rows.map((row) => [row.id, row.editable, row.overridden]), [["upstream:#1:sticker_1", false, false]]);
  // The node's own rows are editable and not upstream.
  assert.ok(model.rows.every((row) => row.editable && !row.upstream && !row.overridden));
});

// ADR 0030 T10: the layer actions of an upstream group's header, always there, disabled while they do nothing.
test("an upstream group's header has Revert of the layer's scene and paint overrides and Restore deleted, disabled while they do nothing", () => {
  const state = canonical();
  const options = { span: 120, selection: null, selectedId: null, expanded: true, openRows: new Set() };
  const sceneState = loadSceneState({ version: 2, id: "scene_a" });
  const group = (layer) => buildTimelineModel(state, { ...options, upstream: [{ key: "scene_a", sceneState, editable: true, record: null, scene: false, deleted: 0, ...layer }] }).groups[0];
  const record = (extra) => loadSceneState({ version: 2, upstream: [{ layer: "scene_a", fps: 24, ...extra }] }).upstream[0];
  assert.deepEqual([group({}).revert, group({}).restore], [{ disabled: true }, { label: "Restore deleted (0)", disabled: true }]);
  assert.deepEqual(group({ deleted: 2, record: record({ deleted: ["s1", "s2"] }) }).restore, { label: "Restore deleted (2)", disabled: false });
  // Revert is of the layer's own overrides (its `scene` and painting), not of its elements'.
  assert.equal(group({ record: record({ stickers: [{ id: "s1", placement: "sky", visible: false }] }) }).revert.disabled, true);
  assert.equal(group({ record: record({ scene: { visible: false } }) }).revert.disabled, false);
  assert.equal(group({ record: record({ painting_visible: true }) }).revert.disabled, false);
  // A layer that is only inherited has both, disabled.
  const inherited = buildTimelineModel(state, { ...options, upstream: [{ key: "#0", sceneState, editable: false, record: null, scene: false, deleted: 0 }] }).groups[0];
  assert.deepEqual([inherited.revert.disabled, inherited.restore.disabled], [true, true]);
  // The header renders both buttons always, and hands their actions to the Timeline.
  const header = readFileSync(new URL("../web_src/components/PanoTimelineGroup.vue", import.meta.url), "utf8");
  assert.doesNotMatch(header, /v-if/);
  assert.match(header, /type: 'revert-upstream-layer', key: group\.key/);
  assert.match(header, /type: 'restore-upstream-deleted', key: group\.key/);
  const timeline = readFileSync(new URL("../web_src/components/PanoTimeline.vue", import.meta.url), "utf8");
  assert.match(timeline, /<PanoTimelineGroup v-if="group" :group="group" @action="emit\('action', \$event\)" \/>/);
});

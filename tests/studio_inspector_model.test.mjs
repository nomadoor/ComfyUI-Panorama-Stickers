import assert from "node:assert/strict";
import test from "node:test";

import { ICON } from "../web_src/icons.js";
import { loadSceneState } from "../web_src/pano_scene_state.js";
import { upstreamWorkingLayers } from "../web_src/pano_upstream.js";
import {
  EASING_MIN_ABOVE,
  buildCameraCard,
  buildInspectorModel,
  easingGraphSide,
  formatBezier,
  parseBezier,
} from "../web_src/studio/inspector_model.js";

// docs/studio-ui.md "インスペクタ" (what each selection shows, the same in both tabs, the rows of each kind, the Camera card, reset,
// the override mark, the Easing panel) and docs/timeline-ui.md "インスペクタの Keyframe のポチ" (which Lanes a row's dot
// covers and its three states), on web_src/studio/inspector_model.js.

const file = (filename) => ({ kind: "file", filename, subfolder: "", storage: "input" });

function sky(id, extra = {}) {
  return {
    id,
    placement: "sky",
    source: file(`${id}.png`),
    direction: { value: { yaw_deg: 30, pitch_deg: 10 } },
    roll: { value: 5 },
    size: { value: { hFOV_deg: 40, vFOV_deg: 30 } },
    opacity: { value: 0.5 },
    ...extra,
  };
}

function world(id, extra = {}) {
  return {
    id,
    placement: "world",
    source: file(`${id}.glb`),
    position: { value: [1, 2, 3] },
    rotation: { value: { yaw_deg: 10, pitch_deg: 0, roll_deg: 0 } },
    scale: { value: 1 },
    opacity: { value: 1 },
    ...extra,
  };
}

function load(raw = {}) {
  return loadSceneState({ version: 2, ...raw });
}

function model(state, options = {}) {
  return buildInspectorModel({ state, selection: { ids: [] }, tab: "3d", playhead: 0, ...options });
}

const row = (card, id) => card.rows.find((item) => item.id === id);
// The Scene card's Ground part (nothing selected: the Camera's card over it).
const sceneOf = (m) => m.cards.find((card) => card.kind === "scene");
const values = (r) => r.fields.map((field) => field.value);

test("nothing selected shows the Scene card: the Camera's card over Ground at -1.6 by default, its Set ground and a reserved seat", () => {
  const m = model(load());
  assert.deepEqual(m.cards.map((card) => card.kind), ["camera", "scene"]);
  const card = sceneOf(m);
  assert.equal(card.title, "Scene");
  assert.deepEqual(card.rows.map((item) => item.id), ["ground"]);
  const ground = row(card, "ground");
  assert.equal(ground.control, "ground");
  assert.deepEqual(values(ground), [-1.6]);
  assert.equal(ground.keyState, null);
  assert.equal(ground.atDefault, true);
  assert.equal(ground.seat, true);
  assert.equal(m.easing, null);
});

test("a Ground the state holds is shown and is not at its default", () => {
  const state = load();
  state.ground = -0.8;
  const ground = row(sceneOf(model(state)), "ground");
  assert.deepEqual(values(ground), [-0.8]);
  assert.equal(ground.atDefault, false);
});

test("without a Ground of its own, the Scene card shows the most downstream upstream layer's that has one", () => {
  const state = load();
  const layers = [load({ ground: -3 }), load({ ground: -0.5 }), load()].map((sceneState) => ({ sceneState, ui: {} }));
  const upstream = upstreamWorkingLayers(layers, [], state.timeline.fps);
  const inherited = row(sceneOf(model(state, { upstream })), "ground");
  assert.deepEqual(values(inherited), [-0.5]);
  assert.equal(inherited.atDefault, true, "the state holds none: reset has nothing to remove");
  state.ground = -0.8;
  assert.deepEqual(values(row(sceneOf(model(state, { upstream })), "ground")), [-0.8], "its own Ground wins");
});

test("the Ground row takes edits (the state keeps `ground`), its seat kept", () => {
  const ground = row(sceneOf(model(load())), "ground");
  assert.equal(ground.disabled, false);
  assert.equal(ground.fields[0].disabled, false);
  assert.equal(ground.tip, "");
  assert.equal(ground.seat, true);
});

test("a sky Sticker shows Rotation (Y P R), FOV (H V) and Opacity, with the Sky icon and its name", () => {
  const state = load({ stickers: [sky("sticker_1")] });
  const [card] = model(state, { selection: { ids: ["sticker_1"] } }).cards;
  assert.equal(card.kind, "sky");
  assert.equal(card.title, "sticker_1.png");
  assert.equal(card.note, "Sky");
  assert.deepEqual(card.rows.map((item) => item.id), ["rotation", "fov", "opacity"]);
  const rotation = row(card, "rotation");
  assert.deepEqual(rotation.fields.map((field) => field.axis), ["Y", "P", "R"]);
  assert.deepEqual(values(rotation), [30, 10, 5]);
  assert.deepEqual(rotation.lanes, ["direction", "roll"]);
  const fov = row(card, "fov");
  assert.deepEqual(fov.fields.map((field) => field.axis), ["H", "V"]);
  assert.deepEqual(values(fov), [40, 30]);
  assert.deepEqual(fov.lanes, ["size"]);
  const opacity = row(card, "opacity");
  assert.equal(opacity.layout, "single");
  assert.deepEqual(values(opacity), [50]);
  assert.deepEqual([opacity.slider.min, opacity.slider.max], [0, 100]);
  assert.equal(rotation.atDefault, false);
});

test("a port sky Sticker's V FOV follows its media: shown, disabled", () => {
  const state = load({ stickers: [sky("sticker_1", { source: { kind: "port" } })] });
  const fov = row(model(state, { selection: { ids: ["sticker_1"] } }).cards[0], "fov");
  assert.deepEqual(fov.fields.map((field) => field.disabled), [false, true]);
});

test("a world image shows Position, Rotation, Scale and Opacity; a 3D with clips adds Animation, Clip and Speed", () => {
  const state = load({ stickers: [world("sticker_1"), world("sticker_2", { animation: { clip: "Run", speed: 2 } })] });
  const plain = model(state, { selection: { ids: ["sticker_1"] } }).cards[0];
  assert.equal(plain.kind, "world");
  assert.equal(plain.note, "World");
  assert.deepEqual(plain.rows.map((item) => item.id), ["position", "rotation", "scale", "opacity"]);
  assert.deepEqual(values(row(plain, "position")), [1, 2, 3]);
  assert.deepEqual(row(plain, "rotation").fields.map((field) => field.axis), ["Y", "P", "R"]);
  assert.equal(row(plain, "scale").layout, "single");

  const animations = { sticker_2: [{ name: "Idle" }, { name: "Run" }] };
  const animated = model(state, { selection: { ids: ["sticker_2"] }, animations }).cards[0];
  assert.deepEqual(animated.rows.map((item) => item.id), ["position", "rotation", "scale", "opacity", "animation", "anim_clip", "anim_speed"]);
  assert.equal(row(animated, "animation").control, "heading");
  const clip = row(animated, "anim_clip");
  assert.equal(clip.control, "select");
  assert.deepEqual(clip.options.map((option) => option.label), ["Idle", "Run"]);
  assert.equal(clip.value, 1);
  assert.equal(clip.keyState, null);
  const speed = row(animated, "anim_speed");
  assert.deepEqual(values(speed), [2]);
  assert.equal(speed.keyState, null);
  assert.equal(speed.atDefault, false);
});

test("the Scale slider reaches past the value it holds, and never below the smallest scale", () => {
  const state = load({ stickers: [world("sticker_1", { scale: { value: 7 } })] });
  const scale = row(model(state, { selection: { ids: ["sticker_1"] } }).cards[0], "scale");
  assert.ok(scale.slider.max >= 7);
  assert.equal(scale.slider.min, 0.01);
  assert.equal(scale.fields[0].min, 0.01);
});

test("each row's dot covers its own Lanes and shows none / has / now at the playhead, in the Sticker's material frames", () => {
  const state = load({
    stickers: [world("sticker_1", {
      clip: { start: 10, in: 0, duration: null },
      position: { value: [0, 0, 0], keyframes: [{ frame: 0, value: [0, 0, 0] }, { frame: 20, value: [1, 0, 0] }] },
      scale: { value: 1, keyframes: [{ frame: 5, value: 2 }] },
    })],
  });
  const at = (playhead) => model(state, { selection: { ids: ["sticker_1"] }, playhead }).cards[0];
  // Timeline frame 30 is material frame 20.
  let card = at(30);
  assert.equal(row(card, "position").keyState, "now");
  assert.equal(row(card, "scale").keyState, "has");
  assert.equal(row(card, "rotation").keyState, "none");
  assert.equal(row(card, "opacity").keyState, "none");
  card = at(20);
  assert.equal(row(card, "position").keyState, "has");
  assert.equal(row(card, "scale").keyState, "has");
  card = at(15);
  assert.equal(row(card, "scale").keyState, "now");
});

test("a sky Rotation dot is 'has' when either of its two Lanes has a Keyframe, and 'now' when either is at the playhead", () => {
  const state = load({ stickers: [sky("sticker_1", { roll: { value: 0, keyframes: [{ frame: 4, value: 10 }] } })] });
  const at = (playhead) => row(model(state, { selection: { ids: ["sticker_1"] }, playhead }).cards[0], "rotation");
  assert.equal(at(0).keyState, "has");
  assert.equal(at(4).keyState, "now");
});

test("rows of a locked Sticker or a read-only editor are disabled; the dot and the reset with them", () => {
  const state = load({ stickers: [world("sticker_1", { locked: true }), world("sticker_2")] });
  const locked = model(state, { selection: { ids: ["sticker_1"] } }).cards[0];
  assert.ok(locked.rows.every((item) => item.disabled));
  const readOnly = model(state, { selection: { ids: ["sticker_2"] }, readOnly: true }).cards[0];
  assert.ok(readOnly.rows.every((item) => item.disabled));
  const free = model(state, { selection: { ids: ["sticker_2"] } }).cards[0];
  assert.ok(free.rows.every((item) => !item.disabled));
});

test("a row at the value its reset returns to says so; the Sticker's Rotation and Position defaults are zero", () => {
  const state = load({ stickers: [world("sticker_1", { position: { value: [0, 0, 0] }, rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } } })] });
  const card = model(state, { selection: { ids: ["sticker_1"] } }).cards[0];
  assert.equal(row(card, "position").atDefault, true);
  assert.equal(row(card, "rotation").atDefault, true);
  assert.equal(row(card, "scale").atDefault, true);
  assert.equal(row(card, "opacity").atDefault, true);
});

test("a state without a Camera shows the default Camera: Panorama, 360°, 16:9, 90°, κ 1, at the origin, every row at its default", () => {
  const state = load();
  assert.equal(state.camera.projection, "erp");
  const card = model(state, { selection: { ids: ["camera"] } }).cards[0];
  assert.equal(card.kind, "camera");
  assert.deepEqual(card.rows.map((item) => item.id), ["mode", "range", "aspect", "hfov", "lens", "position", "rotation"]);
  assert.equal(row(card, "mode").value, "erp");
  assert.deepEqual(row(card, "mode").options.map((option) => option.label), ["Panorama", "Frame"]);
  // The mode is two tiles under the heading, not a row of the grid (docs/studio-ui.md "Camera のカード").
  assert.equal(row(card, "mode").control, "mode");
  assert.equal(row(card, "range").control, "choice");
  assert.equal(row(card, "range").value, 360);
  assert.equal(row(card, "aspect").fields[0].value, 16 / 9);
  assert.equal(row(card, "hfov").fields[0].value, 90);
  assert.equal(row(card, "lens").fields[0].value, 1);
  assert.deepEqual(values(row(card, "position")), [0, 0, 0]);
  assert.deepEqual(values(row(card, "rotation")), [0, 0, 0]);
  for (const id of ["aspect", "hfov", "lens", "position", "rotation"]) assert.equal(row(card, id).atDefault, true, id);
});

test("the Camera card grays the rows its mode does not use and keeps them in place", () => {
  const panorama = model(load(), { selection: { ids: ["camera"] } }).cards[0];
  assert.deepEqual(panorama.rows.filter((item) => item.disabled).map((item) => item.id), ["aspect", "hfov", "lens"]);
  const frameState = load({ camera: { projection: "perspective", aspect: 4 / 3, fov: { value: 60 } } });
  const frame = model(frameState, { selection: { ids: ["camera"] } }).cards[0];
  assert.deepEqual(frame.rows.filter((item) => item.disabled).map((item) => item.id), ["range"]);
  assert.deepEqual(frame.rows.map((item) => item.id), panorama.rows.map((item) => item.id));
  assert.equal(row(frame, "mode").value, "perspective");
  assert.equal(row(frame, "hfov").fields[0].value, 60);
  assert.equal(row(frame, "aspect").atDefault, false);
});

test("the Camera's rows without a Lane have no dot; its H FOV, Lens, Position and Rotation dots cover fov, curve, position, rotation", () => {
  const card = model(load(), { selection: { ids: ["camera"] } }).cards[0];
  assert.deepEqual(card.rows.map((item) => item.keyState), [null, null, null, "none", "none", "none", "none"]);
  assert.deepEqual(card.rows.map((item) => item.lanes), [[], [], [], ["fov"], ["curve"], ["position"], ["rotation"]]);
  assert.equal(row(card, "mode").resettable, false);
});

test("the inspector follows the selection; the Camera tab keeps the Camera's card on top over the selected object's (ADR 0051)", () => {
  const state = load({ stickers: [world("sticker_1"), sky("sticker_2")] });
  const cases = [
    [[], ["camera", "scene"], ["camera", "scene"]],
    [["sticker_1"], ["world"], ["camera", "world"]],
    [["sticker_2"], ["sky"], ["camera", "sky"]],
    [["camera"], ["camera"], ["camera"]],
    [["sticker_1", "sticker_2"], ["multi"], ["camera", "multi"]],
  ];
  for (const [ids, inSpace, inCamera] of cases) {
    assert.deepEqual(model(state, { tab: "3d", selection: { ids } }).cards.map((card) => card.kind), inSpace, `3d ${ids}`);
    assert.deepEqual(model(state, { tab: "camera", selection: { ids } }).cards.map((card) => card.kind), inCamera, `camera ${ids}`);
  }
  assert.deepEqual(model(state, { tab: "camera", selection: { ids: [], paint: true } }).cards.map((card) => card.kind), ["camera", "paint"]);
  // The Camera's card is the same everywhere it shows.
  const alone = model(state, { selection: { ids: ["camera"] } }).cards[0];
  for (const tab of ["3d", "camera"]) assert.deepEqual(model(state, { tab }).cards[0], alone);
  assert.deepEqual(model(state, { tab: "camera", selection: { ids: ["sticker_1"] } }).cards[0], alone);
  assert.deepEqual(model(state, { tab: "camera", selection: { ids: ["sticker_1"] } }).cards[1], model(state, { selection: { ids: ["sticker_1"] } }).cards[0]);
  assert.deepEqual(buildCameraCard({ state, playhead: 0 }), alone);
});

test("a locked Camera and a read-only editor gray the Camera rows in the Scene card too, Mode included", () => {
  const locked = load({ camera: { locked: true } });
  const camera = model(locked).cards[0];
  assert.ok(camera.rows.every((item) => item.disabled), "every Camera row is off");
  assert.equal(row(camera, "mode").tip, "Locked");
  assert.equal(row(sceneOf(model(locked)), "ground").disabled, false, "Ground is not the Camera's");
  const readOnly = model(load(), { readOnly: true });
  assert.ok(readOnly.cards[0].rows.every((item) => item.disabled));
  assert.equal(row(readOnly.cards[0], "mode").tip, "Read-only");
  assert.equal(row(sceneOf(readOnly), "ground").disabled, true);
});

test("Set ground works in the 3D tab and the Frame mode Camera tab, and is off in the Panorama mode Camera tab", () => {
  const setGround = (raw, tab) => row(sceneOf(model(load(raw), { tab })), "ground").setGround;
  const frame = { camera: { projection: "perspective" } };
  const panorama = { camera: { projection: "erp" } };
  assert.deepEqual(setGround(frame, "3d"), { disabled: false, tip: "Click a surface to make it the ground" });
  assert.deepEqual(setGround(panorama, "3d"), { disabled: false, tip: "Click a surface to make it the ground" });
  assert.deepEqual(setGround(frame, "camera"), { disabled: false, tip: "Click a surface to make it the ground" });
  assert.deepEqual(setGround(panorama, "camera"), { disabled: true, tip: "Not available in Panorama mode" });
  // The value itself still takes edits there.
  assert.equal(row(sceneOf(model(load(panorama), { tab: "camera" })), "ground").fields[0].disabled, false);
  assert.deepEqual(row(sceneOf(model(load(), { readOnly: true })), "ground").setGround, { disabled: true, tip: "Read-only" });
});

test("a multiple selection and a paint selection show a heading only", () => {
  const state = load({ stickers: [world("sticker_1"), sky("sticker_2"), sky("sticker_3")] });
  const multi = model(state, { selection: { ids: ["sticker_1", "sticker_2", "sticker_3"] } }).cards[0];
  assert.equal(multi.kind, "multi");
  assert.equal(multi.title, "3 stickers");
  assert.deepEqual(multi.rows, []);
  const paint = model(state, { selection: { ids: [], paint: true } }).cards[0];
  assert.equal(paint.kind, "paint");
  assert.equal(paint.title, "Paint");
  assert.deepEqual(paint.rows, []);
});

function upstreamFixture({ override = null, id = "scene_up" } = {}) {
  const layerState = load({ id, stickers: [world("sticker_1"), sky("sticker_2")] });
  const records = override ? load({ upstream: [{ layer: id, fps: 24, deleted: [], stickers: [override] }] }).upstream : [];
  const state = load();
  state.upstream = records;
  const upstream = upstreamWorkingLayers([{ sceneState: layerState, ui: {} }], records, state.timeline.fps);
  return { state, upstream };
}

test("an upstream element's overridden rows carry the mark, and their reset is on (it returns to the upstream value)", () => {
  const { state, upstream } = upstreamFixture({ override: { id: "sticker_1", placement: "world", position: { value: [5, 5, 5], keyframes: [] } } });
  const card = model(state, { selection: { ids: ["upstream:scene_up:sticker_1"] }, upstream }).cards[0];
  assert.equal(card.kind, "world");
  assert.match(card.note, /Upstream/);
  assert.deepEqual(values(row(card, "position")), [5, 5, 5]);
  assert.equal(row(card, "position").marked, true);
  assert.equal(row(card, "position").atDefault, false);
  // Rows not overridden are at the upstream value (not at the plain default) and carry no mark.
  assert.equal(row(card, "rotation").marked, false);
  assert.equal(row(card, "rotation").atDefault, true);
  assert.equal(row(card, "rotation").disabled, false);
});

test("an upstream element without a file name is titled by its own id, as its Timeline row is, not its working id", () => {
  const layerState = load({ id: "scene_up", stickers: [{ ...sky("sticker_2"), source: { kind: "file", data_url: "data:image/png;base64,AA==" } }] });
  const state = load();
  const upstream = upstreamWorkingLayers([{ sceneState: layerState, ui: {} }], [], state.timeline.fps);
  const card = model(state, { selection: { ids: ["upstream:scene_up:sticker_2"] }, upstream }).cards[0];
  assert.equal(card.title, "sticker_2");
});

test("an element of an upstream layer whose overrides cannot be kept is shown with its rows disabled", () => {
  const { state, upstream } = upstreamFixture({ id: null });
  const card = model(state, { selection: { ids: ["upstream:#0:sticker_1"] }, upstream }).cards[0];
  assert.ok(card.rows.length > 0);
  assert.ok(card.rows.every((item) => item.disabled));
});

test("the Easing panel shows only while Keyframes are selected: the shared Easing, or mixed, and which preset is on", () => {
  const keyframes = (easings) => easings.map((easing, index) => ({ frame: index * 10, value: [index, 0, 0], easing }));
  const state = load({ stickers: [world("sticker_1", { position: { value: [0, 0, 0], keyframes: keyframes([[0, 0, 1, 1], "hold", [0, 0, 1, 1]]) } })] });
  assert.equal(model(state, { selection: { ids: ["sticker_1"] } }).easing, null);
  const one = model(state, { selection: { ids: ["sticker_1"], keyframes: { owner: "sticker_1", lane: null, frames: [0] } } }).easing;
  assert.deepEqual(one.easing, [0, 0, 1, 1]);
  assert.equal(one.mixed, false);
  assert.equal(one.segment, true);
  assert.equal(one.text, "0, 0, 1, 1");
  assert.deepEqual(one.presets.map((preset) => preset.label), ["Hold", "Linear", "Ease in-out", "Ease in", "Ease out"]);
  // docs/studio-ui.md "Easing のパネル": each preset shows its own icon, the name goes to the tooltip.
  assert.deepEqual(one.presets.map((preset) => preset.icon), [ICON.ease_hold, ICON.ease_linear, ICON.ease_in_out, ICON.ease_in, ICON.ease_out]);
  assert.ok(one.presets.every((preset) => typeof preset.icon === "string" && preset.icon));
  assert.deepEqual(one.presets.filter((preset) => preset.active).map((preset) => preset.label), ["Linear"]);
  assert.equal(one.atDefault, false);

  const mixed = model(state, { selection: { ids: [], keyframes: { owner: "sticker_1", lane: null, frames: [0, 20] } } }).easing;
  assert.equal(mixed.mixed, true);
  assert.equal(mixed.easing, null);
  assert.equal(mixed.text, "");
  assert.ok(mixed.presets.every((preset) => !preset.active));

  // The last Keyframe alone has no segment: the panel shows, its controls off.
  const last = model(state, { selection: { ids: [], keyframes: { owner: "sticker_1", lane: "position", frames: [20] } } }).easing;
  assert.equal(last.segment, false);
});

test("the Easing panel reads a Camera's Keyframes, and is at its default on ease-in-out", () => {
  const state = load({ camera: { fov: { value: 90, keyframes: [{ frame: 0, value: 90 }, { frame: 12, value: 40 }] } } });
  const easing = model(state, { tab: "camera", selection: { ids: [], keyframes: { owner: "camera", lane: "fov", frames: [0] } } }).easing;
  assert.deepEqual(easing.easing, [0.42, 0, 0.58, 1]);
  assert.equal(easing.atDefault, true);
  assert.deepEqual(easing.presets.filter((preset) => preset.active).map((preset) => preset.label), ["Ease in-out"]);
});

test("the bezier text reads four numbers (or cubic-bezier(...)) with every value in 0..1, and writes them back", () => {
  assert.deepEqual(parseBezier("0.42, 0, 0.58, 1"), [0.42, 0, 0.58, 1]);
  assert.deepEqual(parseBezier("cubic-bezier(.25,.1,.25,1)"), [0.25, 0.1, 0.25, 1]);
  assert.deepEqual(parseBezier(" 0 0 1 1 "), [0, 0, 1, 1]);
  assert.equal(parseBezier("0.42, -0.2, 0.58, 1"), null);
  assert.equal(parseBezier("1.2, 0, 0.58, 1"), null);
  assert.equal(parseBezier("0.42, 0, 0.58"), null);
  assert.equal(parseBezier("ease"), null);
  assert.equal(formatBezier([0.42, 0, 0.58, 1]), "0.42, 0, 0.58, 1");
  assert.equal(formatBezier([1 / 3, 0, 2 / 3, 1]), "0.33, 0, 0.67, 1");
});

test("the Easing graph is square and as wide as the inspector, and shrinks to keep EASING_MIN_ABOVE above it", () => {
  assert.equal(EASING_MIN_ABOVE, 180);
  // Enough height: the full width.
  assert.equal(easingGraphSide({ width: 292, height: 900, chrome: 120 }), 292);
  // 900 - 120 - 180 = 600 > 292; at 500 high: 500 - 120 - 180 = 200.
  assert.equal(easingGraphSide({ width: 292, height: 500, chrome: 120 }), 200);
  // Never negative.
  assert.equal(easingGraphSide({ width: 292, height: 200, chrome: 120 }), 0);
});

test("the Camera card's Range row shows the Camera's erp_range, 360 or 180", () => {
  const rangeOf = (raw) => row(model(load(raw)).cards.find((card) => card.kind === "camera"), "range").value;
  assert.equal(rangeOf({ camera: { projection: "erp" } }), 360);
  assert.equal(rangeOf({ camera: { projection: "erp", erp_range: 180 } }), 180);
  assert.equal(rangeOf({ camera: { projection: "erp", erp_range: 360 } }), 360);
});

test("an upstream element's row shows its card in the inspector (found in its layer)", () => {
  const state = load();
  const layers = [{ sceneState: load({ id: "up", stickers: [world("st_1")] }), ui: {} }];
  const upstream = upstreamWorkingLayers(layers, [], state.timeline.fps);
  const id = upstream[0].sceneState.stickers[0].id;
  const m = model(state, { upstream, selection: { ids: [id] } });
  assert.deepEqual(m.cards.map((card) => card.target?.id), [id], "an upstream element's row shows its card");
});

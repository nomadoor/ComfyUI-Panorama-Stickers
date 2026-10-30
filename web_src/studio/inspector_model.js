// The inspector of the new UI (docs/studio-ui.md "インスペクタ"): what it shows for a tab and a selection, as plain
// data for components/studio/StudioInspector.vue. Pure: it reads the working state v2 and never changes it. Each
// row holds its values at the playhead, whether it is enabled, its Keyframe dot (docs/timeline-ui.md "インスペクタの
// Keyframe のポチ"), whether it is at the value its reset returns to, and the mark of an overridden upstream value.
// The edits the rows send are applied by inspector_actions.js.
import { ICON } from "../icons.js";
import { CAMERA_ASPECT_MAX, CAMERA_ASPECT_MIN, WORLD_MIN_SCALE, skyStickerVfov, stickerVfovFromAspect } from "../pano_editor_state.js";
import { NEW_STICKER_HFOV } from "../pano_space.js";
import { LENS_CURVE_MAX, LENS_CURVE_MIN, lensFovLimit } from "../pano_lens.js";
import { FRAME_EPSILON, evaluateCamera, evaluateLane, evaluateSticker } from "../pano_scene_eval.js";
import {
  ANIMATION_DEFAULT,
  ANIMATION_SPEED_MAX,
  ANIMATION_SPEED_MIN,
  CAMERA_LANES,
  DEFAULT_EASING,
  SCENE_LANES,
  rebaseSceneState,
  stickerLanes,
} from "../pano_scene_state.js";
import { EASING_PRESETS, rowLaneNames, selectedEasing } from "../pano_timeline.js";
import { isUpstreamSticker, upstreamOverrideOf, upstreamStickerEditable } from "../pano_upstream.js";
import { animationClipIndex } from "../pano_animation.js";
import { DEFAULT_CAMERA_RAW, cameraOf, groundOf } from "./defaults.js";
import { objectLabel } from "./timeline_model.js";

// The least height (px) left above the Easing panel for the rows (docs/design.md "大きさ" EASING_MIN_ABOVE).
export const EASING_MIN_ABOVE = 180;

// The side of the square Easing graph: as wide as the inspector (`width`), smaller when the inspector (`height`,
// less the rest of the panel and the header, `chrome`) would leave less than EASING_MIN_ABOVE above the panel.
export function easingGraphSide({ width, height, chrome }) {
  return Math.max(0, Math.min(width, height - chrome - EASING_MIN_ABOVE));
}

// The Easing presets of the panel in their order (docs/studio-ui.md "Easing のパネル"); the values are
// pano_timeline.js EASING_PRESETS'.
// Each shows its icon only, its name in the tooltip.
const PANEL_PRESETS = [
  ["Hold", ICON.ease_hold],
  ["Linear", ICON.ease_linear],
  ["Ease in-out", ICON.ease_in_out],
  ["Ease in", ICON.ease_in],
  ["Ease out", ICON.ease_out],
].map(([label, icon]) => ({ ...EASING_PRESETS.find((preset) => preset.label === label), icon }));

const BEZIER_NUMBER = /^[+-]?(\d+\.?\d*|\.\d+)$/;

// The cubic-bezier typed or pasted as "0.42, 0, 0.58, 1" (or "cubic-bezier(...)", spaces for commas), each value in
// 0..1 (docs/timeline-ui.md "Easing"), or null.
export function parseBezier(text) {
  const inner = String(text ?? "").trim().replace(/^cubic-bezier\s*\(\s*/i, "").replace(/\s*\)\s*$/, "");
  const parts = inner.split(/[\s,]+/).filter(Boolean);
  if (parts.length !== 4 || !parts.every((part) => BEZIER_NUMBER.test(part))) return null;
  const values = parts.map(Number);
  return values.every((value) => value >= 0 && value <= 1) ? values : null;
}

// The text of a cubic-bezier: two decimals at most, without trailing zeros.
export function formatBezier(easing) {
  return easing.map((value) => String(Math.round(value * 100) / 100)).join(", ");
}

const sameJson = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const NEAR = 1e-9;
function near(a, b) {
  if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) <= NEAR;
  if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every((value, index) => near(value, b[index]));
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = Object.keys(b);
    return keys.length === Object.keys(a).length && keys.every((key) => near(a[key], b[key]));
  }
  return a === b;
}

// The default value of each Lane of an owner, as the loader reads a missing one.
function laneDefault(owner, name) {
  const list = owner.placement ? stickerLanes(owner) : owner.clip ? SCENE_LANES : CAMERA_LANES;
  const valueOf = list.find(([lane]) => lane === name)?.[1];
  return valueOf ? valueOf(undefined) : undefined;
}

// The frame of an owner's own time base at a Timeline frame: a Sticker's material starts at start - in.
export function ownerFrame(owner, playhead) {
  return owner.clip ? playhead - (owner.clip.start - owner.clip.in) : playhead;
}

// The Keyframe dot of a row over the Lanes `names` at the owner's frame: "none", "has" or "now".
export function keyState(owner, names, frame) {
  let has = false;
  for (const name of names) {
    const keys = owner[name].keyframes;
    if (keys.some((key) => Math.abs(key.frame - frame) <= FRAME_EPSILON)) return "now";
    if (keys.length) has = true;
  }
  return has ? "has" : "none";
}

// The working Sticker, own or upstream (pano_upstream.js upstreamWorkingLayers), with the id `id`.
export function findSticker(state, upstream, id) {
  return state.stickers.find((item) => item.id === id)
    ?? upstream.flatMap((layer) => layer.sceneState.stickers).find((item) => item.id === id)
    ?? null;
}

// The Sticker an upstream element `sticker` (a working copy) is without this node's overrides, at the editor's fps.
export function inheritedSticker(upstream, sticker, fps) {
  const layer = upstream.find((item) => item.key === sticker.origin.layer);
  if (!layer) return null;
  const received = layer.received.timeline.fps === fps ? layer.received : rebaseSceneState(layer.received, fps);
  return received.stickers.find((item) => item.id === sticker.origin.id) ?? null;
}

// The owner of a Keyframe selection's Lanes (selection.keyframes.owner): "camera", "scene", or a Sticker's id.
export function keyframeOwner(state, upstream, id) {
  if (id === "camera") return cameraOf(state);
  if (id === "scene") return state.scene;
  return findSticker(state, upstream, id);
}

// The Lanes of each row of each card (docs/timeline-ui.md "インスペクタの Keyframe のポチ"): its dot keys them, its
// reset returns them. A row not here has no Lane, and no dot.
export const ROW_LANES = Object.freeze({
  sky: { rotation: ["direction", "roll"], fov: ["size"], opacity: ["opacity"] },
  world: { position: ["position"], rotation: ["rotation"], scale: ["scale"], opacity: ["opacity"] },
  camera: { hfov: ["fov"], lens: ["curve"], position: ["position"], rotation: ["rotation"] },
});

const AXES = ["X", "Y", "Z"];
const POSITION_FIELDS = ["position_x", "position_y", "position_z"];
const ROTATION = [["yaw_deg", "Y"], ["pitch_deg", "P"], ["roll_deg", "R"]];
const PITCH = { min: -90, max: 90 };

function positionFields(position) {
  return POSITION_FIELDS.map((field, axis) => ({ field, axis: AXES[axis], value: position[axis], step: 0.01, precision: 2 }));
}

function rotationFields(value, rollField = "roll_deg") {
  return ROTATION.map(([field, axis]) => ({
    field: field === "roll_deg" ? rollField : field,
    axis,
    value: field === "roll_deg" ? value.roll_deg : value[field],
    unit: "°",
    step: 0.5,
    precision: 1,
    ...(field === "pitch_deg" ? PITCH : {}),
  }));
}

// The slider of a value without an upper limit (a world Sticker's scale) reaches this far, or past the value it
// holds. docs/design.md leaves the value open ("スライダーを付ける値の上限"); this is a provisional one.
export const SCALE_SLIDER_MAX = 4;
function scaleSliderMax(value) {
  return Math.max(SCALE_SLIDER_MAX, 2 ** Math.ceil(Math.log2(Math.max(value, 1))));
}

function opacityRow(percent) {
  return {
    id: "opacity",
    name: "Opacity",
    layout: "single",
    control: "slider",
    lanes: ROW_LANES.world.opacity, // the same as ROW_LANES.sky.opacity
    slider: { field: "opacity", min: 0, max: 100, step: 1 },
    fields: [{ field: "opacity", value: percent, unit: "%", step: 0.5, precision: 0, min: 0, max: 100 }],
  };
}

// The rows of a sky Sticker at the playhead.
function skyRows(sticker, playhead, portSize) {
  const value = evaluateSticker(sticker, playhead);
  const limit = lensFovLimit(value.curve);
  const port = sticker.source.kind === "port";
  const vfov = skyStickerVfov(sticker, value, portSize);
  return [
    { id: "rotation", name: "Rotation", layout: "multi", control: "fields", lanes: ROW_LANES.sky.rotation, fields: rotationFields(value, "rot_deg") },
    {
      id: "fov",
      name: "FOV",
      layout: "multi",
      control: "fields",
      lanes: ROW_LANES.sky.fov,
      fields: [
        { field: "hFOV_deg", axis: "H", value: value.hFOV_deg, unit: "°", step: 0.25, precision: 1, min: 0.1, max: limit },
        // A port Sticker's vFOV follows its media (docs/scene-state-v2.md): shown, not edited.
        { field: "vFOV_deg", axis: "V", value: vfov, unit: "°", step: 0.25, precision: 1, min: 0.1, max: limit, disabled: port },
      ],
    },
    opacityRow(value.opacity * 100),
  ];
}

// The rows of a world Sticker at the playhead, with its Animation rows when its file has clips (`clips`).
function worldRows(sticker, playhead, clips) {
  const value = evaluateSticker(sticker, playhead);
  const rows = [
    { id: "position", name: "Position", layout: "multi", control: "fields", lanes: ROW_LANES.world.position, fields: positionFields(value.position) },
    { id: "rotation", name: "Rotation", layout: "multi", control: "fields", lanes: ROW_LANES.world.rotation, fields: rotationFields(value) },
    {
      id: "scale",
      name: "Scale",
      layout: "single",
      control: "slider",
      lanes: ROW_LANES.world.scale,
      slider: { field: "scale", min: WORLD_MIN_SCALE, max: scaleSliderMax(value.scale), step: 0.01 },
      fields: [{ field: "scale", value: value.scale, step: 0.01, precision: 2, min: WORLD_MIN_SCALE }],
    },
    opacityRow(value.opacity * 100),
  ];
  if (clips?.length) {
    const animation = sticker.animation ?? ANIMATION_DEFAULT;
    rows.push(
      { id: "animation", name: "Animation", control: "heading", lanes: [], resettable: false },
      {
        id: "anim_clip",
        name: "Clip",
        layout: "wide",
        control: "select",
        lanes: [],
        options: clips.map((clip, index) => ({ value: index, label: clip.name })),
        value: animationClipIndex(clips, animation),
        atDefault: animation.clip === null,
      },
      {
        id: "anim_speed",
        name: "Speed",
        layout: "single",
        control: "slider",
        lanes: [],
        slider: { field: "anim_speed", min: ANIMATION_SPEED_MIN, max: ANIMATION_SPEED_MAX, step: 0.1 },
        fields: [{ field: "anim_speed", value: animation.speed, unit: "×", step: 0.01, precision: 2, min: ANIMATION_SPEED_MIN, max: ANIMATION_SPEED_MAX }],
        atDefault: animation.speed === ANIMATION_DEFAULT.speed,
      },
    );
  }
  return rows;
}

const MODE_OPTIONS = [{ value: "erp", label: "Panorama" }, { value: "perspective", label: "Frame" }];
const RANGE_OPTIONS = [{ value: 360, label: "360°" }, { value: 180, label: "180°" }];
const FRAME_ONLY_TIP = "Used in Frame mode";
const PANORAMA_ONLY_TIP = "Used in Panorama mode";

// The Camera card's rows (docs/studio-ui.md "Camera のカード"): the same rows in both modes, the ones the mode does
// not use grayed.
function cameraRows(camera, playhead) {
  const value = evaluateCamera(camera, playhead);
  const erp = camera.projection === "erp";
  const frameOnly = erp ? { disabled: true, tip: FRAME_ONLY_TIP } : {};
  return [
    // The mode is not a row of the grid: two tiles under the heading (docs/studio-ui.md "Camera のカード").
    { id: "mode", name: "Mode", control: "mode", lanes: [], options: MODE_OPTIONS, value: camera.projection, resettable: false },
    {
      id: "range",
      name: "Range",
      layout: "wide",
      control: "choice",
      lanes: [],
      options: RANGE_OPTIONS,
      value: camera.erp_range === 180 ? 180 : 360,
      resettable: false,
      ...(erp ? {} : { disabled: true, tip: PANORAMA_ONLY_TIP }),
    },
    {
      id: "aspect",
      name: "Aspect",
      layout: "single",
      control: "aspect",
      lanes: [],
      fields: [{ field: "aspect", value: camera.aspect, step: 0.005, min: CAMERA_ASPECT_MIN, max: CAMERA_ASPECT_MAX }],
      atDefault: near(camera.aspect, DEFAULT_CAMERA_RAW.aspect),
      ...frameOnly,
    },
    {
      id: "hfov",
      name: "H FOV",
      layout: "single",
      control: "slider",
      lanes: ROW_LANES.camera.hfov,
      slider: { field: "hFOV_deg", min: 1, max: lensFovLimit(value.curve), step: 1 },
      fields: [{ field: "hFOV_deg", value: value.hFOV_deg, unit: "°", step: 0.25, precision: 1, min: 1, max: lensFovLimit(value.curve) }],
      ...frameOnly,
    },
    {
      id: "lens",
      name: "Lens",
      layout: "single",
      control: "slider",
      lanes: ROW_LANES.camera.lens,
      slider: { field: "curve", min: LENS_CURVE_MIN, max: LENS_CURVE_MAX, step: 0.01 },
      fields: [{ field: "curve", value: value.curve, step: 0.005, precision: 2, min: LENS_CURVE_MIN, max: LENS_CURVE_MAX }],
      // The κ edit keeps the image's center scale (pano_editor_state.js setCameraCurveKeepingCenter): the edit carries
      // the lens fields where it began.
      lensStart: { hFOV_deg: value.hFOV_deg, aspect: camera.aspect, curve: value.curve },
      ...(erp ? frameOnly : { tip: "0 is a fisheye. Keeps the center's size; the H FOV follows." }),
    },
    { id: "position", name: "Position", layout: "multi", control: "fields", lanes: ROW_LANES.camera.position, fields: positionFields(value.position) },
    { id: "rotation", name: "Rotation", layout: "multi", control: "fields", lanes: ROW_LANES.camera.rotation, fields: rotationFields(value) },
  ];
}

// Whether a row's Lanes hold the value its reset returns to: the upstream value `base` (an owner) for an upstream
// element, else each Lane's default, compared where the owner is at the playhead.
function laneRowAtDefault(owner, names, frame, base) {
  if (base) return names.every((name) => sameJson(owner[name], base[name]));
  return names.every((name) => near(evaluateLane(owner, name, frame), laneDefault(owner, name)));
}

// The size a sky image's FOV reset returns to (docs/studio-ui.md "種類ごとの中身"): the size it was placed at, H
// NEW_STICKER_HFOV and V from its image's aspect (`imageSize`, { width, height } px). Before the image has a size, the
// aspect it is drawn at now (`size`, its size Lane's value) stands in, so the reset does not stretch it.
export function skyPlacedSize(size, imageSize) {
  const half = (fov) => Math.tan(fov * 0.5 * Math.PI / 180);
  let aspect = imageSize?.width > 0 && imageSize?.height > 0 ? [imageSize.width, imageSize.height] : [half(size.hFOV_deg), half(size.vFOV_deg)];
  if (!aspect.every((value) => Number.isFinite(value) && value > 0)) aspect = [1, 1];
  // stickerVfovFromAspect reads pixel sizes of at least one.
  const scale = 1000 / Math.min(...aspect);
  return { hFOV_deg: NEW_STICKER_HFOV, vFOV_deg: stickerVfovFromAspect(NEW_STICKER_HFOV, aspect[0] * scale, aspect[1] * scale) };
}

// A port sky Sticker's size reset returns its hFOV only; its vFOV follows its media. Another sky image's returns the
// size it was placed at.
function skyFovAtDefault(sticker, frame, imageSize) {
  const size = evaluateLane(sticker, "size", frame);
  if (sticker.source.kind === "port") return near(size.hFOV_deg, laneDefault(sticker, "size").hFOV_deg);
  return near(size, skyPlacedSize(size, imageSize));
}

function finishRows(rows, owner, { frame, disabled, disabledTip, base, override, keyable = true, imageSize = null }) {
  return rows.map((row) => {
    const lanes = row.lanes ?? [];
    const off = disabled || !!row.disabled;
    let atDefault = row.atDefault;
    if (atDefault === undefined && lanes.length) {
      atDefault = owner.placement === "sky" && row.id === "fov" && !base ? skyFovAtDefault(owner, frame, imageSize) : laneRowAtDefault(owner, lanes, frame, base);
    }
    const fields = (row.fields ?? []).map((field) => ({ unit: "", step: 0.01, precision: 2, min: -Infinity, max: Infinity, ...field, disabled: off || !!field.disabled }));
    return {
      layout: "multi",
      resettable: true,
      ...row,
      lanes,
      fields,
      disabled: off,
      tip: disabled ? disabledTip : row.tip ?? "",
      keyState: keyable && lanes.length ? keyState(owner, lanes, frame) : null,
      keyDisabled: off,
      atDefault: !!atDefault,
      marked: !!override && lanes.some((name) => Object.hasOwn(override, name)),
    };
  });
}

function stickerCard(state, sticker, { playhead, readOnly, upstream, animations, portSize, imageSizes }) {
  const frame = ownerFrame(sticker, playhead);
  const isWorld = sticker.placement === "world";
  const fromUpstream = isUpstreamSticker(sticker);
  const editable = !fromUpstream || upstreamStickerEditable(sticker);
  const rows = isWorld ? worldRows(sticker, playhead, animations[sticker.id]) : skyRows(sticker, playhead, portSize);
  let disabledTip = "";
  if (readOnly) disabledTip = "Read-only";
  else if (!editable) disabledTip = "Inherited only: edit it in its own Panorama Studio";
  else if (sticker.locked) disabledTip = "Locked";
  const override = fromUpstream ? upstreamOverrideOf(state.upstream ?? [], sticker.origin) : null;
  return {
    kind: sticker.placement,
    title: objectLabel(sticker),
    icon: isWorld ? ICON.box : ICON.pano,
    note: fromUpstream ? `Upstream · ${sticker.origin.layer}` : isWorld ? "World" : "Sky",
    target: { kind: "sticker", id: sticker.id },
    rows: finishRows(
      // An upstream element's animation is shown, not overridden (docs/editor-interaction.md "アニメーションの行").
      rows.map((row) => (fromUpstream && row.id.startsWith("anim_") ? { ...row, disabled: true } : row)),
      sticker,
      {
        frame,
        disabled: readOnly || !editable || !!sticker.locked,
        disabledTip,
        base: fromUpstream ? inheritedSticker(upstream, sticker, state.timeline.fps) : null,
        override: override && override.placement === sticker.placement ? override : null,
        imageSize: imageSizes[sticker.id] ?? null,
      },
    ),
  };
}

function cameraCard(state, { playhead, readOnly }) {
  const camera = cameraOf(state);
  const locked = camera.locked === true;
  return {
    kind: "camera",
    title: "Camera",
    icon: ICON.camera,
    note: "",
    target: { kind: "camera", id: "camera" },
    rows: finishRows(cameraRows(camera, playhead), camera, {
      frame: playhead,
      disabled: readOnly || locked,
      disabledTip: readOnly ? "Read-only" : "Locked",
    }),
  };
}

// Until the state keeps `ground` (defaults.js), an edited ground height would not be saved: `groundSaved` false grays
// the row with the reason instead of taking an edit that closing would lose.
export const GROUND_NOT_SAVED_TIP = "The ground height is not saved yet: the node does not keep it";

function sceneCard(state, { readOnly, groundSaved }) {
  const ground = groundOf(state);
  const off = readOnly || !groundSaved;
  return {
    kind: "scene",
    title: "Scene",
    icon: "",
    note: "",
    target: { kind: "scene", id: "scene" },
    rows: [{
      id: "ground",
      name: "Ground",
      layout: "multi",
      control: "ground",
      lanes: [],
      fields: [{ field: "ground", value: ground, unit: "", step: 0.01, precision: 2, min: -Infinity, max: Infinity, disabled: off }],
      // The seat for the ground's estimate button (docs/studio-ui.md "種類ごとの中身"); nothing is placed in it yet.
      seat: true,
      keyState: null,
      keyDisabled: true,
      resettable: true,
      atDefault: !Number.isFinite(state.ground),
      disabled: off,
      marked: false,
      tip: readOnly ? "Read-only" : groundSaved ? "" : GROUND_NOT_SAVED_TIP,
    }],
  };
}

function headingCard(kind, title, icon) {
  return { kind, title, icon, note: "", target: null, rows: [] };
}

// The Easing panel of a Keyframe selection (`keyframes`: { owner, lane, frames } with frames in the owner's own
// time base), or null without one. `segment` is false when the selection has no segment (the last Keyframe alone).
function easingModel(state, upstream, keyframes) {
  if (!keyframes?.frames?.length) return null;
  const owner = keyframeOwner(state, upstream, keyframes.owner);
  if (!owner) return null;
  const names = keyframes.lane ? [keyframes.lane] : rowLaneNames(owner);
  const selected = selectedEasing(owner, names, keyframes.frames);
  const easing = selected?.easing ?? null;
  const mixed = !!selected?.mixed;
  return {
    // The selection the panel's edits send back (inspector_actions.js "easing").
    keyframes: { owner: keyframes.owner, lane: keyframes.lane ?? null, frames: [...keyframes.frames] },
    names,
    segment: !!selected,
    easing,
    mixed,
    text: Array.isArray(easing) ? formatBezier(easing) : "",
    atDefault: !!selected && !mixed && sameJson(easing, DEFAULT_EASING),
    presets: PANEL_PRESETS.map((preset) => ({ label: preset.label, icon: preset.icon, easing: preset.easing, active: !mixed && sameJson(preset.easing, easing) })),
  };
}

// The inspector for the working `state` (state v2), the editor's `selection` ({ ids: [...], paint?: true,
// keyframes?: { owner, lane, frames } }; ids are "camera" or Sticker ids, an upstream element's working id
// `upstream:<key>:<id>`), the `tab` ("3d" | "camera") and the Timeline frame `playhead`. `upstream` is the working
// layers (pano_upstream.js upstreamWorkingLayers), `animations` the clips of the 3D files by Sticker id
// ([{ name }]), `portSize` the size of the port Sticker's media ({ width, height }), `imageSizes` the sizes of the
// Stickers' images by Sticker id ({ width, height } px, once loaded), `groundSaved` whether an edited ground height
// is saved (GROUND_NOT_SAVED_TIP).
// Returns { cards: [{ kind, title, icon, note, target, rows }], easing }.
export function buildInspectorModel({ state, selection = {}, tab = "3d", playhead = 0, readOnly = false, upstream = [], animations = {}, portSize = null, imageSizes = {}, groundSaved = true }) {
  const options = { playhead, readOnly, upstream, animations, portSize, imageSizes, groundSaved };
  const ids = selection.ids ?? [];
  let cards;
  if (tab === "camera") cards = [cameraCard(state, options)];
  else if (ids.length > 1) {
    const stickers = ids.filter((id) => id !== "camera").length;
    cards = [headingCard("multi", stickers === ids.length ? `${ids.length} stickers` : `${ids.length} objects`, ICON.box)];
  } else if (ids[0] === "camera") cards = [cameraCard(state, options)];
  else if (ids.length === 1) {
    const sticker = findSticker(state, upstream, ids[0]);
    cards = sticker ? [stickerCard(state, sticker, options)] : [sceneCard(state, options)];
  } else if (selection.paint) cards = [headingCard("paint", "Paint", ICON.palette_tool)];
  else cards = [sceneCard(state, options)];
  return { cards, easing: easingModel(state, upstream, selection.keyframes) };
}

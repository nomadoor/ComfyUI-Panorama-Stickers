// The inspector of the new UI (docs/studio-ui.md "インスペクタ"): what it shows for a selection and a tab, as plain
// data for components/studio/StudioInspector.vue. Pure: it reads the working state v2 and never changes it. Each
// row holds its values at the playhead, whether it is enabled, its Keyframe dot (docs/timeline-ui.md "インスペクタの
// Keyframe のポチ"), whether it is at the value its reset returns to, and the mark of an overridden upstream value.
// The edits the rows send are applied by inspector_actions.js.
import { ICON } from "../icons.js";
import { CAMERA_ASPECT_MAX, CAMERA_ASPECT_MIN, WORLD_MIN_SCALE, skyStickerVfov, stickerVfovFromAspect } from "../pano_editor_state.js";
import { NEW_STICKER_HFOV } from "../pano_space.js";
import { LENS_CURVE_DIGITS, LENS_CURVE_MAX, LENS_CURVE_MIN, lensFovLimit } from "../pano_lens.js";
import { FRAME_EPSILON, clipFrame, clipOrigin, evaluateCamera, evaluateLane, evaluateSticker, laneView, ownerPeriod, segmentLength, segmentProgress, smoothEasing } from "../pano_scene_eval.js";
import {
  ANIMATION_DEFAULT,
  ANIMATION_SPEED_MAX,
  ANIMATION_SPEED_MIN,
  CAMERA_LANES,
  DEFAULT_EASING,
  PORT_OFFSET_LANES,
  SCENE_LANES,
  rebaseSceneState,
  stickerLanes,
} from "../pano_scene_state.js";
import { EASING_PRESETS, easingSegments, rowLaneNames } from "../pano_timeline.js";
import { UPSTREAM_INHERITED_TIP, isUpstreamSticker, upstreamOverrideOf, upstreamStickerInherited } from "../pano_upstream.js";
import { animationClipIndex } from "../pano_animation.js";
import { PORT_ZOOM_MIN, handedOff } from "./port_offset.js";
import { lookTargetName, shownLookTarget } from "./look_at.js";
import { findSticker, keyframeOwner, ownerLength } from "./row_object.js";
import { defaultCamera, groundOf } from "./defaults.js";
import { objectLabel, upstreamFromLabel } from "./timeline_model.js";

// The least height (px) left above the Easing panel for the rows (docs/design.md "大きさ" EASING_MIN_ABOVE).
export const EASING_MIN_ABOVE = 180;

// The side of the square Easing graph: as wide as the inspector (`width`), smaller when the inspector (`height`,
// less the rest of the panel and the header, `chrome`) would leave less than EASING_MIN_ABOVE above the panel.
export function easingGraphSide({ width, height, chrome }) {
  return Math.max(0, Math.min(width, height - chrome - EASING_MIN_ABOVE));
}

// The Easing presets of the panel in their order (docs/studio-ui.md "Easing のパネル"); the values are
// pano_timeline.js EASING_PRESETS'.
// Each shows its icon only, its name in the tooltip (Smooth says what it does too).
const PANEL_PRESETS = [
  ["Smooth", ICON.ease_smooth, "Smooth · passes through Keyframes"],
  ["Hold", ICON.ease_hold],
  ["Linear", ICON.ease_linear],
  ["Ease in-out", ICON.ease_in_out],
  ["Ease in", ICON.ease_in],
  ["Ease out", ICON.ease_out],
].map(([label, icon, tip = label]) => ({ ...EASING_PRESETS.find((preset) => preset.label === label), icon, tip }));
// The points a range of Smooth segments is drawn with, per segment.
const RANGE_STEPS = 24;

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
  const sticker = owner.placement ? [...stickerLanes(owner), ...(owner.source?.kind === "port" ? PORT_OFFSET_LANES : [])] : null;
  const list = sticker ?? (owner.clip ? SCENE_LANES : CAMERA_LANES);
  const valueOf = list.find(([lane]) => lane === name)?.[1];
  return valueOf ? valueOf(undefined) : undefined;
}

// The frame of an owner's own time base at a Timeline frame: a Sticker's material starts at start - in.
export function ownerFrame(owner, playhead) {
  return owner.clip ? clipFrame(owner.clip, playhead) : playhead;
}

// The Keyframe dot of a row over the Lanes `names` at the owner's frame: "none", "has" or "now".
function keyState(owner, names, frame) {
  let has = false;
  for (const name of names) {
    const keys = owner[name].keyframes;
    if (keys.some((key) => Math.abs(key.frame - frame) <= FRAME_EPSILON)) return "now";
    if (keys.length) has = true;
  }
  return has ? "has" : "none";
}

// The Sticker an upstream element `sticker` (a working copy) is without this node's overrides, at the editor's fps.
function inheritedSticker(upstream, sticker, fps) {
  const layer = upstream.find((item) => item.key === sticker.origin.layer);
  if (!layer) return null;
  const received = layer.received.timeline.fps === fps ? layer.received : rebaseSceneState(layer.received, fps);
  return received.stickers.find((item) => item.id === sticker.origin.id) ?? null;
}

// The Lanes of each row of each card (docs/timeline-ui.md "インスペクタの Keyframe のポチ"): its dot keys them, its
// reset returns them. A row not here has no Lane, and no dot.
export const ROW_LANES = Object.freeze({
  sky: { rotation: ["direction", "roll"], fov: ["size"], opacity: ["opacity"] },
  // The port Sticker a sticker_state places (docs/studio-ui.md "種類ごとの中身"): its offset from the Camera that shot it.
  port: { offset: ["offset_rotation"], zoom: ["offset_fov"], opacity: ["opacity"] },
  world: { position: ["position"], rotation: ["rotation"], scale: ["scale"], opacity: ["opacity"] },
  camera: { hfov: ["fov"], lens: ["curve"], position: ["position"], rotation: ["rotation"], look_at: ["look_at"] },
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
const SCALE_SLIDER_MAX = 4;
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
function skyRows(sticker, playhead, portSize, length = null) {
  const value = evaluateSticker(sticker, playhead, length);
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

// The rows of the port Sticker a sticker_state places, at the playhead (docs/studio-ui.md "種類ごとの中身"): its offset
// from the Camera that shot it (Offset: Y, P, R in degrees; Zoom: the factor on that Camera's angle of view) and its
// opacity. No Rotation and FOV rows: the Camera that shot it places it.
function handoffRows(sticker, playhead, length = null) {
  const frame = clipFrame(sticker.clip, playhead);
  const period = ownerPeriod(sticker, length);
  const offset = evaluateLane(sticker, "offset_rotation", frame, period);
  return [
    {
      id: "offset",
      name: "Offset",
      layout: "multi",
      control: "fields",
      lanes: ROW_LANES.port.offset,
      fields: rotationFields(offset).map((field) => ({ ...field, field: `offset_${field.field}` })),
    },
    {
      id: "zoom",
      name: "Zoom",
      layout: "multi",
      control: "fields",
      lanes: ROW_LANES.port.zoom,
      // Shown in percent (100% is the angle of view it was shot at); the state keeps the factor.
      fields: [{ field: "offset_fov", value: evaluateLane(sticker, "offset_fov", frame, period) * 100, unit: "%", step: 1, precision: 0, min: PORT_ZOOM_MIN * 100 }],
    },
    opacityRow(evaluateLane(sticker, "opacity", frame, period) * 100),
  ];
}


// The rows of a world Sticker at the playhead, with its Animation rows when its file has clips (`clips`).
function worldRows(sticker, playhead, clips, length = null) {
  const value = evaluateSticker(sticker, playhead, length);
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
// The Look at row's tooltips (docs/studio-ui.md "Look at").
export const LOOK_AT_TIPS = Object.freeze({
  pick: "Pick a spot to look at",
  offsetNone: "Offset · No target",
  offsetPoint: "Offset · Looking at a point",
  rotation: "Yaw and Pitch · Set by Look at",
});

function cameraRows(state, playhead, { length = null, boxes = null, lookPicking = false } = {}) {
  const { camera } = state;
  const value = evaluateCamera(camera, playhead, length, { stickers: state.stickers, boxes });
  const target = lookTargetName(state, playhead, length);
  // While the Camera looks at a target, its Yaw and Pitch are the target's (shown, not edited); Roll stays.
  const rotation = rotationFields(value).map((field) => (target && field.field !== "roll_deg" ? { ...field, disabled: true, tip: LOOK_AT_TIPS.rotation } : field));
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
      value: camera.erp_range,
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
      atDefault: near(camera.aspect, defaultCamera().aspect),
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
      fields: [{ field: "curve", value: value.curve, step: 0.005, precision: LENS_CURVE_DIGITS, min: LENS_CURVE_MIN, max: LENS_CURVE_MAX }],
      // The κ edit keeps the image's center scale (pano_editor_state.js setCameraCurveKeepingCenter): the edit carries
      // the lens fields where it began.
      lensStart: { hFOV_deg: value.hFOV_deg, aspect: camera.aspect, curve: value.curve },
      ...(erp ? frameOnly : { tip: "0 is a fisheye. Keeps the center's size; the H FOV follows." }),
    },
    { id: "position", name: "Position", layout: "multi", control: "fields", lanes: ROW_LANES.camera.position, fields: positionFields(value.position) },
    { id: "rotation", name: "Rotation", layout: "multi", control: "fields", lanes: ROW_LANES.camera.rotation, fields: rotation },
    // Look at (docs/studio-ui.md "Look at"): the target's name (None), Pick, the Keyframe dot of the look_at Lane (it keys
    // the target shown, its offset in it) and the reset, which takes the target off.
    {
      id: "look_at",
      name: "Look at",
      layout: "wide",
      control: "look",
      lanes: ROW_LANES.camera.look_at,
      // Its reset takes the target off (docs/studio-ui.md "Look at"): at its default without a target shown.
      atDefault: !target,
      look: { target, picking: lookPicking, pickTip: LOOK_AT_TIPS.pick },
    },
    lookOffsetRow(camera, playhead, length),
  ];
}

// The Look at's Offset row (docs/studio-ui.md "Look at"): the shown target's offset from the center of its content box,
// a share of the box's size on each axis; it is always there, off without a target or with a point. No Keyframe dot.
function lookOffsetRow(camera, playhead, length) {
  const { target } = shownLookTarget(camera, playhead, length);
  const offset = target?.sticker ? target.offset : [0, 0, 0];
  let why = "";
  if (!target) why = LOOK_AT_TIPS.offsetNone;
  else if (!target.sticker) why = LOOK_AT_TIPS.offsetPoint;
  return {
    id: "look_offset",
    name: "Offset",
    // Shown as the Look at row's own: indented under it (docs/design.md "インスペクタ").
    sub: true,
    layout: "multi",
    control: "fields",
    lanes: [],
    atDefault: offset.every((value) => value === 0),
    disabled: !!why,
    tip: why,
    fields: ["X", "Y", "Z"].map((axis, index) => ({ field: `look_offset_${axis.toLowerCase()}`, axis, value: offset[index], step: 0.01, precision: 2 })),
  };
}

// Whether a row's Lanes hold the value its reset returns to: the upstream value `base` (an owner) for an upstream
// element, else each Lane's default, compared where the owner is at the playhead.
function laneRowAtDefault(owner, names, frame, base, period = null) {
  if (base) return names.every((name) => sameJson(owner[name], base[name]));
  return names.every((name) => near(evaluateLane(owner, name, frame, period), laneDefault(owner, name)));
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
function skyFovAtDefault(sticker, frame, imageSize, period = null) {
  const size = evaluateLane(sticker, "size", frame, period);
  if (sticker.source.kind === "port") return near(size.hFOV_deg, laneDefault(sticker, "size").hFOV_deg);
  return near(size, skyPlacedSize(size, imageSize));
}

function finishRows(rows, owner, { frame, disabled, disabledTip, base, override, keyable = true, imageSize = null, period = null }) {
  return rows.map((row) => {
    const lanes = row.lanes ?? [];
    const off = disabled || !!row.disabled;
    let atDefault = row.atDefault;
    if (atDefault === undefined && lanes.length) {
      atDefault = owner.placement === "sky" && row.id === "fov" && !base ? skyFovAtDefault(owner, frame, imageSize, period) : laneRowAtDefault(owner, lanes, frame, base, period);
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

function stickerCard(state, sticker, { playhead, readOnly, upstream, animations, portSize, imageSizes, handoff = null, length = null }) {
  const frame = ownerFrame(sticker, playhead);
  const isWorld = sticker.placement === "world";
  const fromUpstream = isUpstreamSticker(sticker);
  const editable = !upstreamStickerInherited(sticker);
  const own = ownerLength(upstream, sticker, length);
  const handed = handedOff(sticker, handoff);
  let rows;
  if (handed) rows = handoffRows(sticker, playhead, own);
  else rows = isWorld ? worldRows(sticker, playhead, animations[sticker.id], own) : skyRows(sticker, playhead, portSize, own);
  let disabledTip = "";
  if (readOnly) disabledTip = "Read-only";
  else if (!editable) disabledTip = UPSTREAM_INHERITED_TIP;
  else if (sticker.locked) disabledTip = "Locked";
  const override = fromUpstream ? upstreamOverrideOf(state.upstream ?? [], sticker.origin) : null;
  return {
    kind: sticker.placement,
    title: objectLabel(sticker),
    icon: isWorld ? ICON.box : ICON.pano,
    note: fromUpstream ? upstreamFromLabel(upstream.find((layer) => layer.key === sticker.origin.layer)?.name, sticker.origin.layer) : isWorld ? "World" : "Sky",
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
        period: ownerPeriod(sticker, own),
      },
    ),
  };
}

// The ids of the rows of the Sticker `sticker`'s card that are away from where their reset returns them (resettable,
// not `atDefault`): what the bar's Back to source of an input's object puts back, and whether it is lit
// (docs/studio-ui.md "下の中央のバー"). `options` as the card's: { playhead, upstream, animations, portSize, imageSizes,
// handoff (the sticker_state that places the port Sticker, the one the inspector's reset and the bar's press get) }.
export function stickerChangedRows(state, sticker, { playhead, upstream, animations, portSize, imageSizes, handoff, length = null } = {}) {
  const card = stickerCard(state, sticker, {
    playhead: playhead ?? 0,
    readOnly: false,
    upstream: upstream ?? [],
    animations: animations ?? {},
    portSize: portSize ?? null,
    imageSizes: imageSizes ?? {},
    handoff: handoff ?? null,
    length,
  });
  // A returned shot's Back to source takes its offset back to the defaults, Keyframes too (docs/editor-interaction.md):
  // the offset rows count while their Lanes are not just the default value.
  if (handedOff(sticker, handoff)) {
    const pristine = (name) => !sticker[name].keyframes.length && near(sticker[name].value, laneDefault(sticker, name));
    return ["offset", "zoom"].filter((id) => !ROW_LANES.port[id].every(pristine));
  }
  return card.rows.filter((row) => row.resettable && !row.atDefault).map((row) => row.id);
}

function cameraCard(state, { playhead, readOnly, length = null, boxes = null, lookPicking = false }) {
  const { camera } = state;
  const locked = camera.locked === true;
  return {
    kind: "camera",
    title: "Camera",
    icon: ICON.camera,
    note: "",
    target: { kind: "camera", id: "camera" },
    rows: finishRows(cameraRows(state, playhead, { length, boxes, lookPicking }), camera, {
      frame: playhead,
      disabled: readOnly || locked,
      disabledTip: readOnly ? "Read-only" : "Locked",
      period: ownerPeriod(camera, length),
    }),
  };
}

// The Scene card's Ground (docs/studio-ui.md "種類ごとの中身"): its value, with its second and third columns kept for the
// Set ground button, which is not made yet (ADR 0062).
function sceneCard(state, { readOnly, upstream }) {
  const ground = groundOf(state, upstream);
  const off = readOnly;
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
      tip: readOnly ? "Read-only" : "",
    }],
  };
}

function headingCard(kind, title, icon) {
  return { kind, title, icon, note: "", target: null, rows: [] };
}

// The progress over a range of Smooth segments of one Lane (docs/studio-ui.md "Easing のパネル"): points [x, y] with x
// the time across the range and y the share of the length along the shape gone, both 0..1, and the x of the Keyframes
// inside the range.
function rangeCurve(owner, name, indices, period, scene = null) {
  const view = laneView(owner[name].keyframes, period);
  const start = view.at(indices[0]).frame;
  const span = view.at(indices[indices.length - 1] + 1).frame - start;
  const lengths = indices.map((index) => segmentLength(owner, name, index, period, scene));
  const total = lengths.reduce((sum, value) => sum + value, 0);
  const points = [[0, 0]];
  let gone = 0;
  indices.forEach((index, i) => {
    const from = view.at(index).frame;
    const to = view.at(index + 1).frame;
    for (let step = 1; step <= RANGE_STEPS; step += 1) {
      const u = step / RANGE_STEPS;
      const share = total > 1e-12 ? (gone + lengths[i] * segmentProgress(owner, name, index, u, period, scene)) / total : (from - start + (to - from) * u) / span;
      points.push([(from - start + (to - from) * u) / span, share]);
    }
    gone += lengths[i];
  });
  return { points, keys: indices.slice(1).map((index) => (view.at(index).frame - start) / span) };
}

// The Easing panel of a Keyframe selection (`groups`: [{ owner, lane, frames }] with frames in each owner's own time
// base), or null without one; `length` is the output length (the loop period). It reads every group, as its edit
// reaches them all (docs/timeline-ui.md "Easing"). `segment` is false when no group has a segment (only Lanes' last
// Keyframes). `range` is the Timeline frames the edit sets, `curve` the cubic-bezier the graph draws with its control
// points (a Smooth segment's current one), `progress` the curve of a range of Smooth segments, which only shows (the
// first group's first Lane with a segment).
// The groups of an owner whose Easing cannot change (locked, an upstream object of a layer that keeps no overrides) do
// not count among others (docs/studio-ui.md "Easing のパネル"); selected alone, they show, `disabled` with `tip` the
// reason, as does every selection in a read-only editor.
function easingModel(state, upstream, groups, length, boxes = null, readOnly = false) {
  const found = (groups ?? []).filter((keyframes) => keyframes?.frames?.length && keyframeOwner(state, upstream, keyframes.owner));
  if (!found.length) return null;
  const blockedOf = (keyframes) => {
    const owner = keyframeOwner(state, upstream, keyframes.owner);
    if (upstreamStickerInherited(owner)) return UPSTREAM_INHERITED_TIP;
    return owner.locked === true ? "Locked" : "";
  };
  const editable = found.filter((keyframes) => !blockedOf(keyframes));
  const kept = editable.length ? editable : found;
  const tip = readOnly ? "Read-only" : editable.length ? "" : blockedOf(found[0]);
  const segments = kept.flatMap((keyframes) => {
    const owner = keyframeOwner(state, upstream, keyframes.owner);
    const ownLength = ownerLength(upstream, owner, length);
    // The Camera's Look at Lane moves by the turns toward its targets: the panel reads them with the state's Stickers.
    const scene = { stickers: state.stickers, boxes, length: ownLength };
    const names = keyframes.lane ? [keyframes.lane] : rowLaneNames(owner);
    const period = ownerPeriod(owner, ownLength);
    const origin = owner.clip ? clipOrigin(owner.clip) : 0;
    return easingSegments(owner, names, keyframes.frames, ownLength).map(({ name, index }) => {
      const view = laneView(owner[name].keyframes, period);
      return { owner, name, index, period, scene, span: [view.at(index).frame + origin, view.at(index + 1).frame + origin] };
    });
  });
  const spans = segments.map((item) => item.span);
  const count = new Set(spans.map((item) => item.join(":"))).size;
  const easings = segments.map(({ owner, name, index }) => owner[name].keyframes[index].easing);
  const mixed = easings.some((item) => !sameJson(item, easings[0]));
  const easing = segments.length && !mixed ? easings[0] : null;
  let curve = null;
  let progress = null;
  if (Array.isArray(easing)) curve = easing;
  else if (easing === DEFAULT_EASING && count === 1) {
    const { owner, name, index, period, scene } = segments[0];
    curve = smoothEasing(owner, name, index, period, scene);
  } else if (easing === DEFAULT_EASING) {
    const { owner, name, period, scene } = segments[0];
    // Two groups can reach the same segments (a closed row's pin and an open Lane's Keyframes): each once, in time order.
    const indices = [...new Set(segments.filter((item) => item.owner === owner && item.name === name).map((item) => item.index))].sort((a, b) => a - b);
    progress = rangeCurve(owner, name, indices, period, scene);
  }
  const start = spans.length ? Math.min(...spans.map((item) => item[0])) : null;
  const end = spans.length ? Math.max(...spans.map((item) => item[1])) : null;
  let placeholder = "";
  if (!segments.length) placeholder = "No segment after the last Keyframe";
  else if (mixed) placeholder = "Mixed";
  else if (easing === DEFAULT_EASING) placeholder = "Smooth";
  else if (easing === "hold") placeholder = "Hold";
  return {
    // The selection the panel's edits send back (inspector_actions.js "easing").
    keyframes: kept.map((keyframes) => ({ owner: keyframes.owner, lane: keyframes.lane ?? null, frames: [...keyframes.frames] })),
    disabled: !!tip,
    tip,
    segment: segments.length > 0,
    range: segments.length ? `f ${formatFrame(start)} → ${formatFrame(end)}${count > 1 ? ` · ${count} segments` : ""}` : "",
    easing,
    mixed,
    curve,
    progress,
    text: Array.isArray(easing) ? formatBezier(easing) : "",
    placeholder,
    presets: PANEL_PRESETS.map((preset) => ({ label: preset.label, icon: preset.icon, tip: preset.tip, easing: preset.easing, active: !mixed && segments.length > 0 && sameJson(preset.easing, easing) })),
  };
}

// A Timeline frame as the panel prints it: whole, or to two decimals when the material's start is not whole.
function formatFrame(frame) {
  return String(Math.round(frame * 100) / 100);
}

// The Camera's card (docs/studio-ui.md "Camera のカード") for the working `state` at the Timeline frame `playhead`: the
// inspector's when the Camera is selected or nothing is, and the Camera tab's edge rulers' (frame_layout.js
// cameraRulers).
export function buildCameraCard({ state, playhead = 0, readOnly = false, length = null, boxes = null, lookPicking = false }) {
  return cameraCard(state, { playhead, readOnly, length, boxes, lookPicking });
}

// The inspector for the working `state` (state v2), the editor's `selection` ({ ids: [...], paint?: true,
// keyframes?: [{ owner, lane, frames }] }; ids are "camera" or Sticker ids, an upstream element's working id
// `upstream:<key>:<id>`) and the Timeline frame `playhead`. What it shows follows the selection (docs/studio-ui.md
// "インスペクタ", ADR 0051): nothing selected shows the Scene card, the Camera's card over the Ground's. In the Camera
// tab (`tab` "camera") the Camera's card is always on top, the selected object's under it. `upstream` is the
// working layers (pano_upstream.js upstreamWorkingLayers; each with the `name` of the Studio it came from, or none,
// studio/upstream.js working()), `animations` the clips of the 3D files by Sticker id
// ([{ name }]), `portSize` the size of the port Sticker's media ({ width, height }), `imageSizes` the sizes of the
// Stickers' images by Sticker id ({ width, height } px, once loaded).
// Returns { cards: [{ kind, title, icon, note, target, rows }], easing }.
export function buildInspectorModel({ state, selection = {}, tab = "3d", playhead = 0, readOnly = false, upstream = [], animations = {}, portSize = null, imageSizes = {}, handoff = null, length = null, boxes = null, lookPicking = false }) {
  const options = { playhead, readOnly, upstream, animations, portSize, imageSizes, tab, handoff, length, boxes, lookPicking };
  const ids = selection.ids ?? [];
  const scene = () => [cameraCard(state, options), sceneCard(state, options)];
  let cards;
  if (ids.length > 1) {
    const stickers = ids.filter((id) => id !== "camera").length;
    cards = [headingCard("multi", stickers === ids.length ? `${ids.length} stickers` : `${ids.length} objects`, ICON.box)];
  } else if (ids[0] === "camera") cards = [cameraCard(state, options)];
  else if (ids.length === 1) {
    const sticker = findSticker(state, upstream, ids[0]);
    cards = sticker ? [stickerCard(state, sticker, options)] : scene();
  } else if (selection.paint) cards = [headingCard("paint", "Paint", ICON.palette_tool)];
  else cards = scene();
  // The Camera tab: the Camera's card always on top, the selected object's under it (owner, 2026-10-31).
  if (tab === "camera" && cards[0].kind !== "camera") cards = [cameraCard(state, options), ...cards];
  return { cards, easing: easingModel(state, upstream, selection.keyframes, length, boxes, readOnly) };
}

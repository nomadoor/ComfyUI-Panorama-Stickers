// The Camera tab's layout (docs/studio-ui.md "Camera タブ"; values: docs/design.md "大きさ"): where the frame sits in the
// stage, where the edge rulers' tick strips sit on it, and their marks, drag, resets. Pure functions;
// components/studio/StudioCameraFrame.vue and StudioEdgeRuler.vue use them.
import { CAMERA_ROLL_DEFAULT } from "./inspector_actions.js";
import { FINE_FACTOR } from "./ui_drag.js";

// The stage's margins around the area the frame is fitted into, in CSS px. The top keeps 30px clear under the tabs
// (16 + 42 + 30); left and right keep the edge rulers' numbers clear of the left column and the view knobs
// (docs/design.md "大きさ": 16 + 46 + 12 + 61 + 14, rounded up to 150).
export const CAMERA_FRAME_MARGIN = Object.freeze({ left: 150, right: 150, top: 88, bottom: 84 });

// The edge rulers' scales: px per unit, the units between two small ticks, between two numbered ticks, and the
// decimals of the numbers (provisional, chosen against frame-4.html: a small tick every 8px, a number every 80px);
// `length` the tick strip's fixed length in px, and `valueChars` the width of the value text in digits, enough for
// the widest value (FOV "360°", Lens "0.00", Roll "-180°"), so the head never changes width (docs/design.md "大きさ").
export const CAMERA_RULERS = Object.freeze({
  fov: Object.freeze({ unitPx: 4, minor: 2, major: 20, precision: 0, length: 200, valueChars: 4 }),
  lens: Object.freeze({ unitPx: 400, minor: 0.02, major: 0.2, precision: 2, length: 200, valueChars: 4 }),
  roll: Object.freeze({ unitPx: 8, minor: 1, major: 10, precision: 0, length: 320, valueChars: 5 }),
});
// A vertical ruler's two heads, in px (docs/design.md "大きさ"): above the strip, the name over the value (at most 30px
// tall) 8px from it; below the strip, the Keyframe dot over the reset (18 + 2 + 22 = 42px) 4px from it. Values the CSS
// (web/pano_studio.css .pano-studio-edge-ruler-head, -acts) lays out; the browser test checks the heads fit them.
export const RULER_HEADS = Object.freeze({
  label: Object.freeze({ height: 30, gap: 8 }),
  acts: Object.freeze({ height: 42, gap: 4 }),
});
// The room a vertical strip leaves at both ends of the frame's edge: the larger head with its gap (46px), so the strip's
// middle stays the edge's middle and both heads stay inside the frame's height (clear of the tabs above and the
// stage's bottom below).
export const RULER_HEAD_ROOM = Math.max(...Object.values(RULER_HEADS).map((head) => head.height + head.gap));

// The frame's box in a stage of width x height: the largest box of `aspect` (width / height) inside the stage less
// the margins, centered in that area, in whole px. Empty (zero size) when the area is.
export function frameRect(width, height, aspect, margin = CAMERA_FRAME_MARGIN) {
  const areaW = width - margin.left - margin.right;
  const areaH = height - margin.top - margin.bottom;
  const ratio = aspect > 0 && Number.isFinite(aspect) ? aspect : 1;
  if (!(areaW > 0 && areaH > 0)) return { x: Math.round(margin.left), y: Math.round(margin.top), width: 0, height: 0 };
  const w = Math.min(areaW, areaH * ratio);
  const h = w / ratio;
  const x = margin.left + (areaW - w) / 2;
  const y = margin.top + (areaH - h) / 2;
  return { x: Math.round(x), y: Math.round(y), width: Math.round(w), height: Math.round(h) };
}

// Where the edge rulers' tick strips sit on the frame `rect` (frameRect's): each strip is its fixed length
// (CAMERA_RULERS), centered on the edge, shorter only when the edge is (a vertical strip also leaves RULER_HEAD_ROOM at
// both ends, for its heads above and below). `offset` is the strip's start from the frame's top (vertical) or left (Roll), in px, so the strip's
// middle is the edge's middle. The scale (px per unit) does not change with the length.
export function rulerStrips(rect, rulers = CAMERA_RULERS, headRoom = RULER_HEAD_ROOM) {
  // `room`: what the strip may not take at each end of the edge.
  const fit = (length, edge, room = 0) => {
    const size = Math.max(0, Math.min(length, edge - 2 * room));
    // Whole px, so the ticks stay sharp: the strip's middle is within half a px of the edge's.
    return { length: size, offset: Math.round((edge - size) / 2) };
  };
  return {
    vertical: fit(Math.max(rulers.fov.length, rulers.lens.length), rect.height, headRoom),
    roll: fit(rulers.roll.length, rect.width),
  };
}

const EPSILON = 1e-6;

// The text of a ruler number: `precision` decimals, no "-0".
export function rulerLabel(value, precision = 0) {
  const text = value.toFixed(precision);
  return Number(text) === 0 ? (0).toFixed(precision) : text;
}

// The marks of a ruler `length` px long whose middle shows `value`: values grow toward the end (right, or down), a
// unit is `unitPx` px. Small ticks every `minor` units, numbered (major) ones every `major`, none past [min, max].
// Each mark's `at` is its px from the ruler's start.
export function rulerMarks({ value, length, unitPx, minor, major, precision = 0, min = -Infinity, max = Infinity }) {
  const ticks = [];
  const labels = [];
  if (!(length > 0 && unitPx > 0 && minor > 0)) return { ticks, labels };
  const half = length / 2 / unitPx;
  const low = Math.max(min, value - half);
  const high = Math.min(max, value + half);
  const first = Math.ceil(low / minor - EPSILON);
  const last = Math.floor(high / minor + EPSILON);
  for (let k = first; k <= last; k += 1) {
    const unit = k * minor;
    const at = length / 2 + (unit - value) * unitPx;
    const ratio = unit / major;
    const isMajor = major > 0 && Math.abs(ratio - Math.round(ratio)) < 1e-6;
    ticks.push({ at, major: isMajor });
    if (isMajor) labels.push({ at, text: rulerLabel(Math.round(ratio) * major, precision) });
  }
  return { ticks, labels };
}

// The value a drag of the ruler shows: the ruler moves with the pointer under the fixed middle mark, so moving it
// `deltaPx` toward the end brings smaller values to the middle. Shift (`fine`) keeps FINE_FACTOR of the movement, as a
// dragged field does (ui_drag.js).
export function rulerDragValue(start, deltaPx, unitPx, { fine = false, min = -Infinity, max = Infinity, fineFactor = FINE_FACTOR } = {}) {
  const next = start - (deltaPx / unitPx) * (fine ? fineFactor : 1);
  return Math.min(max, Math.max(min, next));
}

// The edge rulers of the Camera tab from the Camera card (inspector_model.js buildInspectorModel with tab "camera"): the
// FOV ruler is its H FOV row, Lens its Lens row, Roll the Roll of its Rotation row, so their values, ranges, the
// Keyframe dots' states (docs/timeline-ui.md "インスペクタの Keyframe のポチ": `fov`, `curve`, `rotation`) and what is
// grayed (Panorama mode, a locked Camera, a read-only editor) are the card's. Each ruler: { name, row, field, value,
// min, max, precision, valueText, keyState, disabled, tip, scale (CAMERA_RULERS'), reset (the row its reset sends:
// the inspector's H FOV and Lens rows; Roll's own "roll", which leaves Yaw and Pitch), atDefault (its reset is grayed) };
// `lensStart` is the Lens row's (a κ edit keeps the image's center scale from where it began). Null without the
// Camera card.
export const ROLL_RULER_RANGE = Object.freeze({ min: -180, max: 180 });

export function cameraRulers(card) {
  if (card?.kind !== "camera") return null;
  const row = (id) => card.rows.find((item) => item.id === id);
  const ruler = (name, source, field, extra) => {
    const box = source.fields.find((item) => item.field === field);
    return {
      name,
      row: source.id,
      field,
      value: box.value,
      min: box.min,
      max: box.max,
      keyState: source.keyState ?? "",
      disabled: !!source.disabled,
      tip: source.disabled ? source.tip : "",
      reset: source.id,
      atDefault: !!source.disabled || !!source.atDefault,
      ...extra,
    };
  };
  const hfov = row("hfov");
  const lens = row("lens");
  const rotation = row("rotation");
  const roll = ruler("Roll", rotation, "roll_deg", { ...ROLL_RULER_RANGE, precision: 1, scale: CAMERA_RULERS.roll, reset: "roll" });
  roll.atDefault = roll.disabled || Math.abs(roll.value - CAMERA_ROLL_DEFAULT) < 1e-9;
  return {
    target: card.target,
    fov: ruler("FOV", hfov, "hFOV_deg", { precision: 1, scale: CAMERA_RULERS.fov, valueText: `${rulerLabel(hfov.fields[0].value, 0)}°` }),
    lens: ruler("Lens", lens, "curve", { precision: 3, scale: CAMERA_RULERS.lens, valueText: rulerLabel(lens.fields[0].value, 2), lensStart: lens.lensStart }),
    roll: { ...roll, valueText: `${rulerLabel(roll.value, 0)}°` },
  };
}

// The inspector edit (inspector_actions.js applyInspectorEdit) of a ruler's event: "input" (a value on the way),
// "change" (the drag or the key press ended: one Undo step), "cancel" (Escape, or a press that moved nothing), "key"
// (its Keyframe dot), "reset" (its reset: one Undo step). `lensStart` is the Lens row's lensStart where the drag began.
export function rulerEdit(rulers, which, event, value, lensStart = null) {
  const ruler = rulers[which];
  const target = rulers.target;
  if (event === "key") return { type: "key", target, row: ruler.row };
  if (event === "reset") return { type: "reset", target, row: ruler.reset };
  const phase = { input: "input", change: "commit", cancel: "cancel" }[event];
  if (!phase) return null;
  const edit = { type: "field", target, field: ruler.field, value, phase };
  if (ruler.field === "curve") edit.start = lensStart ?? ruler.lensStart;
  return edit;
}

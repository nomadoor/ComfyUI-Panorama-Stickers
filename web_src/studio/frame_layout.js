// The Camera tab's layout (docs/studio-ui.md "Camera タブ"; values: docs/design.md "大きさ"): where the frame sits in the
// stage, how wide the Roll ruler is, and the edge rulers' marks and drag. Pure functions;
// components/studio/StudioCameraFrame.vue and StudioEdgeRuler.vue use them.
import { FINE_FACTOR } from "./ui_drag.js";

// The stage's margins around the area the frame is fitted into, in CSS px.
export const CAMERA_FRAME_MARGIN = Object.freeze({ left: 120, right: 120, top: 60, bottom: 84 });
// The Roll ruler under the frame: this fraction of the frame's width, at least ROLL_RULER_MIN px.
export const ROLL_RULER_FRACTION = 0.7;
export const ROLL_RULER_MIN = 380;

// The edge rulers' scales: px per unit, the units between two small ticks, between two numbered ticks, and the
// decimals of the numbers. Provisional (chosen against frame-4.html: a small tick every 8px, a number every 80px).
export const CAMERA_RULERS = Object.freeze({
  fov: Object.freeze({ unitPx: 4, minor: 2, major: 20, precision: 0 }),
  lens: Object.freeze({ unitPx: 400, minor: 0.02, major: 0.2, precision: 2 }),
  roll: Object.freeze({ unitPx: 8, minor: 1, major: 10, precision: 0 }),
});

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

export function rollRulerWidth(frameWidth) {
  return Math.max(ROLL_RULER_MIN, frameWidth * ROLL_RULER_FRACTION);
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

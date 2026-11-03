// The ground grid of the new UI (docs/space-and-view.md "地面のグリッド"): what is drawn and where. The grid lies on
// y = ground, its 1-unit lines fade over GRID_MINOR_FADE and its 10-unit lines over GRID_MAJOR_FADE of horizontal
// distance from the view; the X and Z axes do not fade (the sky grid carries them on past the plane to the horizon).
// The sky grid (docs/space-and-view.md "空のグリッド", ADR 0058): a graticule on the Sky's sphere at infinity, shown and
// hidden with the ground grid. The origin has no mark: the axes cross there. The Hide Grid switch hides it. pano_ground_grid.js draws what groundGrid() returns (a render's `space.ground`).
import { GROUND_DEFAULT } from "./defaults.js";
import { GIZMO_COLORS } from "./gizmo_overlay.js";
import { SKY_AXIS_RISE_DEG, SKY_GRID_STEP_DEG, SKY_LINE_FADE_DEG, SKY_POLE_DOT_DEG, SKY_POLE_NEAR_DEG, eyeHeight, eyeLengths } from "./view_scale.js";

// A CSS hex color "#rrggbb" with `alpha` as sRGB [r, g, b, a] in 0..1.
const rgba = (hex, alpha) => [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16) / 255).concat(alpha);

// The colors, as sRGB [r, g, b, a] in 0..1. The axes take the gizmo's colors of the same axes (docs/design.md
// "新しい UI の見た目" 地面のグリッドの軸: X coral, Z ice, gizmo_overlay.js GIZMO_COLORS, at 75%). The rest are provisional
// (docs/design.md "まだ決めていないこと"): white lines, the 10-unit ones fainter.
export const GRID_COLORS = Object.freeze({
  minor: Object.freeze([1, 1, 1, 0.22]),
  major: Object.freeze([1, 1, 1, 0.14]),
  axisX: Object.freeze(rgba(GIZMO_COLORS.x, 0.75)),
  axisZ: Object.freeze(rgba(GIZMO_COLORS.z, 0.75)),
});

// What a render draws for the ground at height `ground`, or null while the grid is hidden.
export function groundGrid({ ground = GROUND_DEFAULT, hidden = false } = {}) {
  if (hidden) return null;
  const { GRID_MINOR_FADE, GRID_MAJOR_FADE } = eyeLengths(eyeHeight(ground));
  return {
    y: ground,
    minorFade: [...GRID_MINOR_FADE],
    majorFade: [...GRID_MAJOR_FADE],
    colors: GRID_COLORS,
  };
}

// How the sky grid looks (docs/design.md "大きさ" 空のグリッド): widths in device pixels, colors as sRGB [r, g, b, a] in
// 0..1. Its angles are view_scale.js's SKY_* quantities.
export const SKY_GRID = Object.freeze({
  // The meridians and parallels.
  linePx: 1,
  lineColor: Object.freeze([1, 1, 1, 0.16]),
  // The axis meridians through +X / -X (coral) and +Z / -Z (ice).
  axisPx: 1.5,
  axisX: Object.freeze(rgba(GIZMO_COLORS.x, 0.6)),
  axisZ: Object.freeze(rgba(GIZMO_COLORS.z, 0.6)),
  // The ground's axes carried on past the ground grid's plane (in GRID_COLORS' axis colors).
  groundAxisPx: 1.5,
  // The horizon: a plain thin neutral line.
  horizonPx: 1,
  horizonColor: Object.freeze([1, 1, 1, 0.3]),
  // The pole's dot.
  poleColor: Object.freeze([1, 1, 1, 0.3]),
});

// What a render draws for the Sky's grid, or null while the grid is hidden: SKY_GRID and the angles, and from the eye
// (`eye`, the World position the half and the carried axes go by; null without one) and the ground height `ground`:
// `side` 1 to draw the upper half (the eye at or above the ground), -1 the lower; `groundAxes` whether the ground's
// axes are carried on past the plane (not with the eye exactly at the ground's height, nor without an eye), from
// `groundReach` (the half side of the ground grid's plane, its 10-unit lines' fade end) in `groundAxisColors`.
export function skyGrid({ hidden = false, ground = GROUND_DEFAULT, eye = null } = {}) {
  if (hidden) return null;
  const { GRID_MAJOR_FADE } = eyeLengths(eyeHeight(ground));
  return {
    ...SKY_GRID,
    stepDeg: SKY_GRID_STEP_DEG,
    lineFadeDeg: [...SKY_LINE_FADE_DEG],
    axisRiseDeg: [...SKY_AXIS_RISE_DEG],
    poleNearDeg: [...SKY_POLE_NEAR_DEG],
    poleDotDeg: SKY_POLE_DOT_DEG,
    eye: eye ? [...eye] : null,
    ground,
    side: eye && eye[1] < ground ? -1 : 1,
    groundAxes: !!eye && eye[1] !== ground,
    groundReach: GRID_MAJOR_FADE[1],
    groundAxisColors: { x: GRID_COLORS.axisX, z: GRID_COLORS.axisZ },
  };
}

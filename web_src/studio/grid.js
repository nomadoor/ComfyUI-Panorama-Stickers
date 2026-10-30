// The ground grid and the origin mark of the new UI (docs/space-and-view.md "地面のグリッドと原点の印"): what is drawn
// and where. The grid lies on y = ground, its 1-unit lines fade over GRID_MINOR_FADE and its 10-unit lines and axes
// over GRID_MAJOR_FADE of horizontal distance from the view, and a ring of ORIGIN_MARK_RADIUS marks (0, ground, 0).
// The Hide Grid switch hides both. pano_ground_grid.js draws what groundGrid() returns (a render's `space.ground`).
import { GROUND_DEFAULT } from "./defaults.js";
import { GIZMO_COLORS } from "./gizmo_overlay.js";
import { ORIGIN_MARK_RADIUS, eyeHeight, eyeLengths } from "./view_scale.js";

// A CSS hex color "#rrggbb" with `alpha` as sRGB [r, g, b, a] in 0..1.
const rgba = (hex, alpha) => [1, 3, 5].map((at) => parseInt(hex.slice(at, at + 2), 16) / 255).concat(alpha);

// The colors, as sRGB [r, g, b, a] in 0..1. The axes take the gizmo's colors of the same axes (docs/design.md
// "新しい UI の見た目" 地面のグリッドの軸: X coral, Z ice, gizmo_overlay.js GIZMO_COLORS, at 75%). The rest are provisional
// (docs/design.md "まだ決めていないこと"): white lines, the 10-unit ones fainter, the origin ring a strong white.
export const GRID_COLORS = Object.freeze({
  minor: Object.freeze([1, 1, 1, 0.22]),
  major: Object.freeze([1, 1, 1, 0.14]),
  axisX: Object.freeze(rgba(GIZMO_COLORS.x, 0.75)),
  axisZ: Object.freeze(rgba(GIZMO_COLORS.z, 0.75)),
  origin: Object.freeze([1, 1, 1, 0.85]),
});

// What a render draws for the ground at height `ground`, or null while the grid is hidden.
export function groundGrid({ ground = GROUND_DEFAULT, hidden = false } = {}) {
  if (hidden) return null;
  const { GRID_MINOR_FADE, GRID_MAJOR_FADE } = eyeLengths(eyeHeight(ground));
  return {
    y: ground,
    minorFade: [...GRID_MINOR_FADE],
    majorFade: [...GRID_MAJOR_FADE],
    originRadius: ORIGIN_MARK_RADIUS,
    colors: GRID_COLORS,
  };
}

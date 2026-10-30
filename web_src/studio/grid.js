// The ground grid and the origin mark of the new UI (docs/space-and-view.md "地面のグリッドと原点の印"): what is drawn
// and where. The grid lies on y = ground, its 1-unit lines fade over GRID_MINOR_FADE and its 10-unit lines and axes
// over GRID_MAJOR_FADE of horizontal distance from the view, and a ring of ORIGIN_MARK_RADIUS marks (0, ground, 0).
// The Hide Grid switch hides both. pano_ground_grid.js draws what groundGrid() returns (a render's `space.ground`).
import { GROUND_DEFAULT } from "./defaults.js";
import { ORIGIN_MARK_RADIUS, eyeHeight, eyeLengths } from "./view_scale.js";

// The colors, as sRGB [r, g, b, a] in 0..1. Provisional values (docs/design.md "まだ決めていないこと": the grid's
// color, width and strength are decided on the real screen): white lines, the 10-unit ones fainter, the X axis red
// and the Z axis blue, the origin ring a strong white.
export const GRID_COLORS = Object.freeze({
  minor: Object.freeze([1, 1, 1, 0.22]),
  major: Object.freeze([1, 1, 1, 0.14]),
  axisX: Object.freeze([0.93, 0.33, 0.31, 0.75]),
  axisZ: Object.freeze([0.33, 0.55, 0.95, 0.75]),
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

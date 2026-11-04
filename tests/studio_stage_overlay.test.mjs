import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_VIEW_HFOV, spaceCamera } from "../web_src/pano_space.js";
import { MARKER_DOT_RADIUS, MARKER_LOOKS, MARKER_TOP_FILL, MARKER_UNDER } from "../web_src/studio/camera_marker.js";
import { GIZMO_LOOK, gizmoColor } from "../web_src/studio/gizmo_overlay.js";
import { LOAD_LOOK } from "../web_src/studio/load_reveal.js";
import { ORBIT_MARK_LOOK } from "../web_src/studio/orbit_marker.js";
import { BRUSH_RING } from "../web_src/studio/paint.js";
import { drawStageOverlay } from "../web_src/studio/stage_overlay.js";
import { GUIDE_LOOKS, GUIDE_UNDER_EXTRA, UPSTREAM_SELECTED_DASH } from "../web_src/studio/world_guides.js";

const W = 400;
const H = 300;
const camera = spaceCamera({ position: [0, 0, 0], yaw_deg: 0, pitch_deg: 0, roll_deg: 0, hFOV_deg: DEFAULT_VIEW_HFOV, distance: 5 }, W, H, { center: [0, 0, 0], radius: 50 });

// Path2D: each path keeps its operations.
class FakePath {
  constructor() {
    this.ops = [];
  }

  moveTo(x, y) {
    this.ops.push(["moveTo", x, y]);
  }

  lineTo(x, y) {
    this.ops.push(["lineTo", x, y]);
  }

  arc(x, y, r) {
    this.ops.push(["arc", x, y, r]);
  }

  closePath() {
    this.ops.push(["closePath"]);
  }
}
globalThis.Path2D = FakePath;

// A 2D context that logs its calls and the style it has at each fill and stroke.
function recordingContext() {
  const log = [];
  const style = { strokeStyle: null, fillStyle: null, lineWidth: 1, globalAlpha: 1, lineCap: "butt", lineJoin: "miter", dash: [] };
  const snapshot = () => ({ ...style, dash: [...style.dash] });
  const ctx = {
    canvas: { width: 800, height: 600 },
    log,
    setTransform: (...args) => log.push(["setTransform", ...args]),
    clearRect: (...args) => log.push(["clearRect", ...args]),
    save: () => log.push(["save"]),
    restore: () => log.push(["restore"]),
    beginPath: () => log.push(["beginPath"]),
    moveTo: (x, y) => log.push(["moveTo", x, y]),
    lineTo: (x, y) => log.push(["lineTo", x, y]),
    arc: (x, y, r) => log.push(["arc", x, y, r]),
    rect: (...args) => log.push(["rect", ...args]),
    roundRect: (x, y, w, h, r) => log.push(["roundRect", x, y, w, h, r]),
    clip: () => log.push(["clip"]),
    setLineDash: (dash) => {
      style.dash = [...dash];
    },
    stroke: (path) => log.push(["stroke", path ?? null, snapshot()]),
    fill: (path) => log.push(["fill", path ?? null, snapshot()]),
    createLinearGradient: (...args) => {
      const gradient = { args, stops: [] };
      gradient.addColorStop = (t, color) => gradient.stops.push([t, color]);
      return gradient;
    },
  };
  for (const key of ["strokeStyle", "fillStyle", "lineWidth", "globalAlpha", "lineCap", "lineJoin"]) {
    Object.defineProperty(ctx, key, { get: () => style[key], set: (value) => { style[key] = value; } });
  }
  return ctx;
}

const strokes = (ctx) => ctx.log.filter((entry) => entry[0] === "stroke");
const fills = (ctx) => ctx.log.filter((entry) => entry[0] === "fill");
const arcs = (ctx) => ctx.log.filter((entry) => entry[0] === "arc");

test("the overlay clears the canvas, then draws in CSS px at the ratio from the view's origin", () => {
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, ratio: 2, origin: { x: 10, y: 20 }, scene: null });
  assert.deepEqual(ctx.log, [
    ["setTransform", 1, 0, 0, 1, 0, 0],
    ["clearRect", 0, 0, 800, 600],
    ["setTransform", 2, 0, 0, 2, 20, 40],
  ]);
  const plain = recordingContext();
  drawStageOverlay(plain, { camera, width: W, height: H });
  assert.deepEqual(plain.log.at(-1), ["setTransform", 1, 0, 0, 1, 0, 0]);
});

const ahead = [[-1, 0, -4], [1, 0, -4]];
const behindCamera = [[-1, 0, 4], [1, 0, 4]];
const guideSegment = (() => {
  // Whichever of the two segments is in front of the camera (the test does not depend on the axis convention).
  const probe = recordingContext();
  drawStageOverlay(probe, { camera, width: W, height: H, scene: { guides: [{ look: "normal", segments: [ahead] }] } });
  return strokes(probe)[0][1].ops.length ? ahead : behindCamera;
})();

test("guides are stroked twice, dark and wider under light, normal first, then hover, then selected", () => {
  const ctx = recordingContext();
  const scene = {
    guides: [
      { look: "selected", segments: [guideSegment] },
      { look: "normal", segments: [guideSegment] },
      { look: "hover", segments: [guideSegment] },
    ],
  };
  drawStageOverlay(ctx, { camera, width: W, height: H, scene });
  const drawn = strokes(ctx).map(([, path, style]) => [path.ops.length > 0, style.strokeStyle, style.lineWidth, style.lineCap, style.dash]);
  const expected = ["normal", "hover", "selected"].flatMap((look) => [
    [true, GUIDE_LOOKS[look].dark, GUIDE_LOOKS[look].width + GUIDE_UNDER_EXTRA, "round", []],
    [true, GUIDE_LOOKS[look].light, GUIDE_LOOKS[look].width, "round", []],
  ]);
  assert.deepEqual(drawn, expected);
  // A guide's two strokes go along the same path.
  const paths = strokes(ctx).map(([, path]) => path);
  assert.equal(paths[0], paths[1]);
});

test("an upstream object's guide is dashed and square-cut, and the dashes end after it", () => {
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [{ look: "selected", segments: [guideSegment], dashed: true }, { look: "selected", segments: [guideSegment] }] } });
  const [under, over, plainUnder] = strokes(ctx).map(([, , style]) => style);
  assert.deepEqual([under.dash, under.lineCap], [[...UPSTREAM_SELECTED_DASH], "butt"]);
  assert.deepEqual([over.dash, over.lineCap], [[...UPSTREAM_SELECTED_DASH], "butt"]);
  assert.deepEqual([plainUnder.dash, plainUnder.lineCap], [[], "round"]);
});

test("a loading guide gets the band of light: a gradient fill over its hull and a wider gradient stroke", () => {
  const z = guideSegment[0][2];
  const corners = [[-1, -1, z], [1, -1, z], [1, 1, z], [-1, 1, z]];
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [{ look: "normal", segments: [guideSegment], shimmer: 1, phase: 0.5, corners }] } });
  const [fill] = fills(ctx);
  assert.ok(fill, "the faces are filled");
  assert.ok(Array.isArray(fill[2].fillStyle.stops) && fill[2].fillStyle.stops.length > 0);
  // The middle of the band is the brightest stop: fillAlpha at full strength.
  assert.ok(fill[2].fillStyle.stops.some(([, color]) => color === `rgba(255, 255, 255, ${LOAD_LOOK.fillAlpha.toFixed(4)})`));
  const shimmerStroke = strokes(ctx).at(-1)[2];
  assert.equal(shimmerStroke.lineWidth, GUIDE_LOOKS.normal.width + LOAD_LOOK.extraWidth);
  assert.ok(shimmerStroke.strokeStyle.stops.some(([, color]) => color === `rgba(255, 255, 255, ${LOAD_LOOK.lineAlpha.toFixed(4)})`));

  const none = recordingContext();
  drawStageOverlay(none, { camera, width: W, height: H, scene: { guides: [{ look: "normal", segments: [guideSegment], shimmer: 0, phase: 0.5, corners }] } });
  assert.equal(fills(none).length, 0);
  assert.equal(strokes(none).length, 2);
});

test("the Camera's mark: fills, hidden lines faint, the outline and lines over their underlay, the up triangle and the white dot", () => {
  const ctx = recordingContext();
  const screen = {
    circle: { x: 50, y: 60, r: 8 },
    fills: [[{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }]],
    lines: [{ a: { x: 0, y: 0 }, b: { x: 5, y: 5 }, hidden: true }, { a: { x: 1, y: 1 }, b: { x: 9, y: 9 } }],
    top: [{ x: 0, y: -5 }, { x: 5, y: -10 }, { x: 10, y: -5 }],
    dot: { x: 50, y: 60 },
  };
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], camera: { screen, look: "selected" } } });
  const look = MARKER_LOOKS.selected;
  assert.deepEqual(strokes(ctx).map(([, , style]) => [style.strokeStyle, style.lineWidth]), [
    [MARKER_UNDER.hiddenColor, MARKER_UNDER.width],
    [look.hiddenLine, look.width],
    [MARKER_UNDER.color, MARKER_UNDER.width],
    [MARKER_UNDER.color, MARKER_UNDER.width],
    [MARKER_UNDER.color, MARKER_UNDER.width],
    [look.line, look.width],
    [look.line, look.width],
    [look.line, look.width],
  ]);
  assert.deepEqual(fills(ctx).map(([, , style]) => style.fillStyle), [look.fill, look.fill, MARKER_TOP_FILL, "#ffffff"]);
  assert.deepEqual(arcs(ctx).map((entry) => entry.slice(1)), [[50, 60, 8], [50, 60, MARKER_DOT_RADIUS]]);
});

const SKY = GUIDE_LOOKS.skySelected;

test("the selected sky image: its frame, and with handles its stem, edge, corner and rotate dots", () => {
  const geometry = {
    boundaryEdges: [[{ x: 0, y: 0 }, { x: 10, y: 0 }], [{ x: 10, y: 10 }, { x: 0, y: 10 }]],
    rotateStemBase: { x: 5, y: 0 },
    rotateHandle: { x: 5, y: -20 },
    edgeMidpoints: [{ x: 5, y: 0 }, { x: 10, y: 5 }],
    corners: [{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, { x: 0, y: 10 }],
  };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], sky: { geometry, handles: true } } });
  const frame = strokes(ctx)[0][1];
  assert.deepEqual(frame.ops, [["moveTo", 0, 0], ["lineTo", 10, 0], ["lineTo", 10, 10], ["lineTo", 0, 10], ["closePath"]]);
  assert.deepEqual(arcs(ctx).map(([, , , r]) => r), [3.5, 3.5, 5, 5, 5, 5, 6]);
  assert.ok(fills(ctx).every(([, , style]) => style.fillStyle === SKY.light));
  // Frame and stem, two strokes each, then one dark rim per dot.
  assert.equal(strokes(ctx).length, 4 + 7);

  const bare = recordingContext();
  drawStageOverlay(bare, { camera, width: W, height: H, scene: { guides: [], sky: { geometry, handles: false, dashed: true } } });
  assert.equal(arcs(bare).length, 0);
  assert.deepEqual(strokes(bare).map(([, , style]) => style.dash), [[...UPSTREAM_SELECTED_DASH], [...UPSTREAM_SELECTED_DASH]]);
});

test("the selected paint group: its outline, and with handles its corner and rotate dots, no edge dots", () => {
  const paint = {
    outline: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 20 }, { x: 0, y: 20 }],
    corners: [{ x: 0, y: 0 }, { x: 20, y: 0 }, { x: 20, y: 20 }, { x: 0, y: 20 }],
    rotateStemBase: { x: 10, y: 0 },
    rotateHandle: { x: 10, y: -15 },
    handles: true,
  };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], paint } });
  assert.deepEqual(strokes(ctx)[0][1].ops.at(-1), ["closePath"]);
  assert.deepEqual(arcs(ctx).map(([, , , r]) => r), [5, 5, 5, 5, 6]);
  const bare = recordingContext();
  drawStageOverlay(bare, { camera, width: W, height: H, scene: { guides: [], paint: { ...paint, handles: false } } });
  assert.equal(arcs(bare).length, 0);
  assert.equal(strokes(bare).length, 2);
});

const center = { x: 100, y: 100 };

test("the Move gizmo: far axes first, each bar over its underlay, a ball at its end, the lit one bigger, then the center dot", () => {
  const handles = {
    mode: "move",
    center,
    axes: [
      { name: "x", shown: true, depth: 1, end: { x: 150, y: 100 } },
      { name: "y", shown: true, depth: 3, end: { x: 100, y: 50 } },
      { name: "z", shown: false, depth: 2, end: { x: 80, y: 120 } },
    ],
    planes: [],
  };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], gizmo: { handles, active: "x" } } });
  const bars = strokes(ctx).filter(([, path]) => path);
  assert.deepEqual(bars.map(([, , style]) => [style.strokeStyle, style.lineWidth]), [
    [GIZMO_LOOK.under, GIZMO_LOOK.lineWidth + GIZMO_LOOK.underExtra],
    [gizmoColor("y", false), GIZMO_LOOK.lineWidth],
    [GIZMO_LOOK.under, GIZMO_LOOK.activeLineWidth + GIZMO_LOOK.underExtra],
    [gizmoColor("x", true), GIZMO_LOOK.activeLineWidth],
  ]);
  assert.deepEqual(arcs(ctx).map((entry) => entry.slice(1)), [
    [100, 50, GIZMO_LOOK.ballRadius + 1],
    [100, 50, GIZMO_LOOK.ballRadius],
    [150, 100, GIZMO_LOOK.activeBallRadius + 1],
    [150, 100, GIZMO_LOOK.activeBallRadius],
    [100, 100, GIZMO_LOOK.centerRadius],
  ]);
  assert.equal(fills(ctx).at(-1)[2].fillStyle, "#ffffff");
  assert.deepEqual(strokes(ctx).at(-1)[2].lineWidth, GIZMO_LOOK.centerRim);
});

test("the Scale gizmo ends its bars in rounded squares; a lit center is bigger", () => {
  const handles = { mode: "scale", center, axes: [{ name: "x", shown: true, depth: 0, end: { x: 150, y: 100 } }] };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], gizmo: { handles, active: "center" } } });
  const size = GIZMO_LOOK.squareSize;
  assert.deepEqual(ctx.log.filter((entry) => entry[0] === "roundRect").map((entry) => entry.slice(1)), [
    [150 - (size + 2) / 2, 100 - (size + 2) / 2, size + 2, size + 2, GIZMO_LOOK.squareRadius + 1],
    [150 - size / 2, 100 - size / 2, size, size, GIZMO_LOOK.squareRadius],
  ]);
  assert.deepEqual(arcs(ctx).map((entry) => entry.slice(1)), [[100, 100, GIZMO_LOOK.activeCenterRadius]]);
});

test("the Rotate gizmo draws each ring's back half faint first, then its front half", () => {
  const ring = {
    name: "y",
    points: [{ x: 0, y: 0, front: false }, { x: 1, y: 0, front: false }, { x: 2, y: 0, front: true }, { x: 3, y: 0, front: true }],
  };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], gizmo: { handles: { mode: "rotate", center, rings: [ring] }, active: null } } });
  const ringStrokes = strokes(ctx).filter(([, path]) => path);
  assert.deepEqual(ringStrokes.map(([, path, style]) => [path.ops, style.globalAlpha, style.strokeStyle]), [
    [[["moveTo", 0, 0], ["lineTo", 1, 0]], GIZMO_LOOK.ringBackAlpha, GIZMO_LOOK.under],
    [[["moveTo", 0, 0], ["lineTo", 1, 0]], GIZMO_LOOK.ringBackAlpha, gizmoColor("y", false)],
    [[["moveTo", 2, 0], ["lineTo", 3, 0]], 1, GIZMO_LOOK.under],
    [[["moveTo", 2, 0], ["lineTo", 3, 0]], 1, gizmoColor("y", false)],
  ]);
});

test("Move's shown plane squares are filled translucent under the bars; a drag's guides come first", () => {
  const handles = {
    mode: "move",
    center,
    axes: [],
    planes: [
      { name: "xy", normal: "z", shown: true, points: [{ x: 0, y: 0 }, { x: 5, y: 0 }, { x: 5, y: 5 }, { x: 0, y: 5 }] },
      { name: "yz", normal: "x", shown: false, points: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }] },
    ],
  };
  const guides = [{ name: "x", points: [{ x: 0, y: 0 }, { x: 300, y: 0 }] }];
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: { guides: [], gizmo: { handles, active: "xy", guides } } });
  const [guide] = strokes(ctx);
  assert.equal(guide[1], null);
  assert.equal(guide[2].globalAlpha, GIZMO_LOOK.guideAlpha);
  assert.equal(guide[2].lineWidth, GIZMO_LOOK.guideWidth);
  const planeFills = fills(ctx).filter(([, path]) => path);
  assert.deepEqual(planeFills.map(([, , style]) => [style.fillStyle, style.globalAlpha]), [[gizmoColor("z", true), GIZMO_LOOK.planeActiveAlpha]]);
});

test("the brush ring: its fill when it has one, then its line over its underlay", () => {
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene: null, ring: { x: 30, y: 40, radius: 12, fill: "rgba(1, 2, 3, 0.5)" } });
  assert.deepEqual(fills(ctx).map(([, path, style]) => [path.ops, style.fillStyle]), [[[["arc", 30, 40, 12]], "rgba(1, 2, 3, 0.5)"]]);
  assert.deepEqual(strokes(ctx).map(([, , style]) => [style.strokeStyle, style.lineWidth]), [
    [BRUSH_RING.under, BRUSH_RING.underWidth],
    [BRUSH_RING.line, BRUSH_RING.lineWidth],
  ]);
  const empty = recordingContext();
  drawStageOverlay(empty, { camera, width: W, height: H, ring: { x: 0, y: 0, radius: 3, fill: null } });
  assert.equal(fills(empty).length, 0);
});

test("the orbit mark is clipped to its box, at its alpha clamped to 0..1, and the context is restored after", () => {
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, orbit: { x: 5, y: 6, alpha: 2, box: { x: 1, y: 2, width: 30, height: 40 } } });
  const body = ctx.log.slice(3);
  assert.deepEqual(body.slice(0, 4), [["save"], ["beginPath"], ["rect", 1, 2, 30, 40], ["clip"]]);
  assert.deepEqual(body.at(-1), ["restore"]);
  assert.ok(strokes(ctx).every(([, , style]) => style.globalAlpha === 1));
  assert.deepEqual(strokes(ctx).map(([, path, style]) => [path.ops[0][3], style.strokeStyle]), [
    [ORBIT_MARK_LOOK.ringRadius, ORBIT_MARK_LOOK.under],
    [ORBIT_MARK_LOOK.ringRadius, ORBIT_MARK_LOOK.ring],
    [ORBIT_MARK_LOOK.dotRadius, ORBIT_MARK_LOOK.under],
  ]);
  const faint = recordingContext();
  drawStageOverlay(faint, { camera, width: W, height: H, orbit: { x: 5, y: 6, alpha: -1, box: { x: 0, y: 0, width: 1, height: 1 } } });
  assert.ok(strokes(faint).every(([, , style]) => style.globalAlpha === 0));
});

test("the parts are drawn in order: guides, Camera mark, sky, paint, gizmo, then the brush ring and the orbit mark", () => {
  // Each part sits at its own x, which names it in the log.
  const parts = { 901: "camera", 902: "sky", 903: "paint", 904: "gizmo", 905: "ring", 906: "orbit" };
  const scene = {
    guides: [{ look: "normal", segments: [guideSegment] }],
    camera: { screen: { fills: [], lines: [], dot: { x: 901, y: 1 } }, look: "normal" },
    sky: { geometry: { boundaryEdges: [[{ x: 902, y: 0 }, { x: 1, y: 0 }]], corners: [] }, handles: false },
    paint: { outline: [{ x: 903, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }], handles: false },
    gizmo: { handles: { mode: "move", center: { x: 904, y: 0 }, axes: [], planes: [] }, active: null },
  };
  const ctx = recordingContext();
  drawStageOverlay(ctx, { camera, width: W, height: H, scene, ring: { x: 905, y: 0, radius: 3, fill: null }, orbit: { x: 906, y: 0, alpha: 1, box: { x: 0, y: 0, width: 1, height: 1 } } });
  const sequence = [];
  for (const [kind, ...rest] of ctx.log) {
    let part = null;
    if (kind === "arc") part = parts[rest[0]];
    else if (kind === "stroke" && rest[0]) part = rest[1].strokeStyle === GUIDE_LOOKS.normal.light ? "guide" : parts[rest[0].ops[0]?.[1]];
    if (part && sequence.at(-1) !== part) sequence.push(part);
  }
  assert.deepEqual(sequence, ["guide", "camera", "sky", "paint", "gizmo", "ring", "orbit"]);
});

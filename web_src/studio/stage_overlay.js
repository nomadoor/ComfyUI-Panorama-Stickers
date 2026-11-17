// The 2D overlay over the new UI's stage: the World objects' guides, the Camera's mark, the gizmo and the selected sky
// image's or paint group's frame and handles (stage_objects.js overlay()), drawn on a canvas over the three.js one. Drawing only: what
// to draw and how it looks come from stage_objects.js, world_guides.js, camera_marker.js and gizmo_overlay.js.
import { projectPoint } from "../pano_space.js";
import { LOAD_LOOK } from "./load_reveal.js";
import { MARKER_DOT_RADIUS, MARKER_LOOKS, MARKER_TOP_FILL, MARKER_UNDER } from "./camera_marker.js";
import { GIZMO_COLORS, GIZMO_LOOK, gizmoColor } from "./gizmo_overlay.js";
import { GUIDE_LOOKS, GUIDE_UNDER_EXTRA, SELECTED_GUIDE_COLOR, UPSTREAM_SELECTED_DASH, screenLines } from "./world_guides.js";
import { BRUSH_RING } from "./paint.js";
import { ORBIT_MARK_LOOK } from "./orbit_marker.js";

// The sky image's handles (docs/studio-ui.md "下の中央のバー"; pano_sticker_affordance.js hits them): corner and rotate
// dots, edge ticks, in the selected sky image's ice over a dark ring (docs/design.md "色": the color of the Sky).
const CORNER_RADIUS = 5;
const EDGE_RADIUS = 3.5;
// A disabled handle (docs/design.md: a disabled icon button's opacity).
const DISABLED_HANDLE_ALPHA = 0.35;
const ROTATE_RADIUS = 6;

// The path line's look (docs/design.md "大きさ" "軌道の線" and the rows after it).
const PATH_LOOK = Object.freeze({
  color: SELECTED_GUIDE_COLOR,
  under: "rgba(0, 0, 0, 0.55)",
  width: 1.6,
  underWidth: 4,
  holdDash: Object.freeze([4, 4]),
  easedColor: "#ffffff",
  easedWidth: 3,
  easedUnderWidth: 6,
  keyRadius: 4.5,
  keyHotRadius: 6,
  keyEdge: "rgba(0, 0, 0, 0.6)",
  selectedFill: "#ffffff",
  selectedEdge: 2,
  handleColor: "#ffffff",
  handleWidth: 1,
  handleUnderWidth: 3,
  handleDash: Object.freeze([3, 3]),
  tipRadius: 4.5,
  tipHotRadius: 5.5,
  tipFill: "#111112",
  tipEdge: 1.6,
  tickRadius: 2,
  tickFill: "#ffffff",
  tickEdge: "rgba(0, 0, 0, 0.75)",
  labelFont: "600 11px sans-serif",
  labelFill: "rgba(0, 0, 0, 0.7)",
});

// The selected object's path line (docs/studio-ui.md "軌道の線"): the line over its dark underlay (a hold dashed, the
// Easing's segments white and wide), the speed dots, the handles of one Keyframe, the Keyframe points (corners square),
// and the frame under the pointer.
function drawPath(ctx, path) {
  const look = PATH_LOOK;
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  // The original path while Simplify is adjusted: gray and thin, under the new one.
  for (const segment of path.ghost ?? []) {
    const line = new Path2D();
    for (const run of segment.runs) run.forEach((point, index) => (index ? line.lineTo(point.x, point.y) : line.moveTo(point.x, point.y)));
    ctx.strokeStyle = "rgba(255, 255, 255, 0.28)";
    ctx.lineWidth = 1;
    ctx.stroke(line);
  }
  for (const pass of ["under", "over"]) {
    for (const segment of path.segments) {
      const line = new Path2D();
      for (const run of segment.runs) run.forEach((point, index) => (index ? line.lineTo(point.x, point.y) : line.moveTo(point.x, point.y)));
      ctx.setLineDash(segment.hold ? look.holdDash : []);
      if (pass === "under") {
        ctx.strokeStyle = look.under;
        ctx.lineWidth = segment.eased ? look.easedUnderWidth : look.underWidth;
      } else {
        ctx.strokeStyle = segment.eased ? look.easedColor : look.color;
        ctx.lineWidth = segment.eased ? look.easedWidth : look.width;
      }
      ctx.stroke(line);
    }
  }
  ctx.setLineDash([]);
  for (const tick of path.ticks) {
    const disc = new Path2D();
    disc.arc(tick.x, tick.y, look.tickRadius, 0, Math.PI * 2);
    ctx.fillStyle = look.tickFill;
    ctx.fill(disc);
    ctx.lineWidth = 1;
    ctx.strokeStyle = look.tickEdge;
    ctx.stroke(disc);
  }
  for (const handle of path.handles) {
    const arm = new Path2D();
    arm.moveTo(handle.from.x, handle.from.y);
    arm.lineTo(handle.x, handle.y);
    ctx.setLineDash([]);
    ctx.strokeStyle = look.under;
    ctx.lineWidth = look.handleUnderWidth;
    ctx.stroke(arm);
    ctx.setLineDash(handle.written ? [] : look.handleDash);
    ctx.strokeStyle = look.handleColor;
    ctx.lineWidth = look.handleWidth;
    ctx.stroke(arm);
    ctx.setLineDash([]);
    const tip = new Path2D();
    tip.arc(handle.x, handle.y, handle.hot ? look.tipHotRadius : look.tipRadius, 0, Math.PI * 2);
    ctx.fillStyle = look.tipFill;
    ctx.fill(tip);
    ctx.strokeStyle = look.handleColor;
    ctx.lineWidth = look.tipEdge;
    ctx.stroke(tip);
  }
  for (const key of path.keys) {
    if (!key) continue;
    const radius = key.selected || key.hot ? look.keyHotRadius : look.keyRadius;
    const mark = new Path2D();
    if (key.corner) mark.rect(key.x - radius, key.y - radius, radius * 2, radius * 2);
    else mark.arc(key.x, key.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = look.keyEdge;
    ctx.lineWidth = 4;
    ctx.stroke(mark);
    ctx.fillStyle = key.selected ? look.selectedFill : look.color;
    ctx.fill(mark);
    if (key.selected) {
      ctx.strokeStyle = look.color;
      ctx.lineWidth = look.selectedEdge;
      ctx.stroke(mark);
    }
  }
  if (path.frame) {
    const { x, y, frame } = path.frame;
    const text = `f ${frame}`;
    ctx.font = look.labelFont;
    const width = ctx.measureText(text).width;
    ctx.fillStyle = look.labelFill;
    ctx.fillRect(x + 10, y - 22, width + 10, 18);
    ctx.fillStyle = look.tickFill;
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + 15, y - 13);
    const dot2 = new Path2D();
    dot2.arc(x, y, 3.5, 0, Math.PI * 2);
    ctx.fill(dot2);
  }
  ctx.restore();
}

// Look at's mark (docs/design.md "Look at の見ている点の印"): a ring with ticks out of it over a dark underlay, a white dot
// in the middle; the faint one while Pick waits; a dotted line from the Camera to it.
const LOOK_LOOK = Object.freeze({ color: SELECTED_GUIDE_COLOR, under: "rgba(0, 0, 0, 0.7)", width: 1.6, underWidth: 4, ring: 7, tickFrom: 4, tickTo: 12, dot: 1.6, previewAlpha: 0.6, lineWidth: 1.3, lineDash: Object.freeze([2, 5]) });

function drawLookMark(ctx, { x, y }, alpha) {
  const look = LOOK_LOOK;
  ctx.save();
  ctx.globalAlpha = alpha;
  const shape = new Path2D();
  shape.arc(x, y, look.ring, 0, Math.PI * 2);
  for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
    shape.moveTo(x + dx * look.tickFrom, y + dy * look.tickFrom);
    shape.lineTo(x + dx * look.tickTo, y + dy * look.tickTo);
  }
  ctx.strokeStyle = look.under;
  ctx.lineWidth = look.underWidth;
  ctx.stroke(shape);
  ctx.strokeStyle = look.color;
  ctx.lineWidth = look.width;
  ctx.stroke(shape);
  const dot = new Path2D();
  dot.arc(x, y, look.dot, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill(dot);
  ctx.restore();
}

function drawLook(ctx, { mark, from, preview }) {
  if (mark && from) {
    ctx.save();
    ctx.setLineDash(LOOK_LOOK.lineDash);
    ctx.strokeStyle = LOOK_LOOK.color;
    ctx.lineWidth = LOOK_LOOK.lineWidth;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(mark.x, mark.y);
    ctx.stroke();
    ctx.restore();
  }
  if (mark) drawLookMark(ctx, mark, 1);
  if (preview) drawLookMark(ctx, preview, LOOK_LOOK.previewAlpha);
}

// `dashed`: an upstream object's selection frame (UPSTREAM_SELECTED_DASH, both strokes on the same dashes, square-cut;
// the canvas starts the dashes again on each subpath, so each segment of a guide starts with a dash).
function strokeTwice(ctx, path, look, dashed = false) {
  ctx.lineCap = dashed ? "butt" : "round";
  ctx.lineJoin = "round";
  ctx.setLineDash(dashed ? UPSTREAM_SELECTED_DASH : []);
  ctx.strokeStyle = look.dark;
  ctx.lineWidth = look.width + GUIDE_UNDER_EXTRA;
  ctx.stroke(path);
  ctx.strokeStyle = look.light;
  ctx.lineWidth = look.width;
  ctx.stroke(path);
  ctx.setLineDash([]);
}

function segmentsPath(camera, segments, width, height) {
  const path = new Path2D();
  // A lens Camera's picture bends each line (world_guides.js screenLines).
  for (const segment of segments) {
    for (const run of screenLines(camera, segment, width, height)) run.forEach((point, index) => (index ? path.lineTo(point.x, point.y) : path.moveTo(point.x, point.y)));
  }
  return path;
}

// The convex hull of screen points (monotone chain), counter-clockwise.
function hull(points) {
  const sorted = [...points].sort((a, b) => a.x - b.x || a.y - b.y);
  const cross = (o, a, b) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const half = (list) => {
    const out = [];
    for (const p of list) {
      while (out.length >= 2 && cross(out[out.length - 2], out[out.length - 1], p) <= 0) out.pop();
      out.push(p);
    }
    out.pop();
    return out;
  };
  return [...half(sorted), ...half([...sorted].reverse())];
}

// The band of light of a loading guide (load_reveal.js, docs/design.md "読み込み中のガイドの光の帯"): white across the
// screen rectangle of its corners from top left to bottom right, LOAD_LOOK.band of the diagonal wide, at `phase` of its
// crossing, `strength` strong, over its lines (`path`) and the faces it covers.
function drawShimmer(ctx, camera, { corners, phase, shimmer: strength }, path, look, width, height) {
  const points = corners.map((corner) => projectPoint(camera, corner, width, height)).filter(Boolean);
  if (points.length < 3) return;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const left = Math.min(...xs);
  const top = Math.min(...ys);
  const right = Math.max(...xs);
  const bottom = Math.max(...ys);
  if (right - left < 1 && bottom - top < 1) return;
  const band = LOAD_LOOK.band;
  const middle = -band / 2 + phase * (1 + band);
  const alphaAt = (t) => Math.max(0, 1 - Math.abs(t - middle) / (band / 2));
  const gradient = (peak) => {
    const g = ctx.createLinearGradient(left, top, right, bottom);
    const stops = [0, middle - band / 2, middle, middle + band / 2, 1].filter((t) => t >= 0 && t <= 1).sort((a, b) => a - b);
    for (const t of stops) g.addColorStop(t, `rgba(255, 255, 255, ${(peak * strength * alphaAt(t)).toFixed(4)})`);
    return g;
  };
  ctx.fillStyle = gradient(LOAD_LOOK.fillAlpha);
  ctx.fill(polygonPath(hull(points)));
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = gradient(LOAD_LOOK.lineAlpha);
  ctx.lineWidth = look.width + LOAD_LOOK.extraWidth;
  ctx.stroke(path);
}

function dot(ctx, point, radius) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = GUIDE_LOOKS.skySelected.light;
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = GUIDE_LOOKS.skySelected.dark;
  ctx.stroke();
}

function polygonPath(points) {
  const path = new Path2D();
  points.forEach((point, index) => (index ? path.lineTo(point.x, point.y) : path.moveTo(point.x, point.y)));
  path.closePath();
  return path;
}

function linesPath(lines) {
  const path = new Path2D();
  for (const { a, b } of lines) {
    path.moveTo(a.x, a.y);
    path.lineTo(b.x, b.y);
  }
  return path;
}

function whiteDot(ctx, point, radius) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

// The Camera's mark (camera_marker.js cameraMarkerScreen) in `look` ("normal" or "selected"), as the draft
// camera-1.html draws it: the fills, the hidden edges faint, the dark line under the lines, the lines, the up triangle,
// the white dot.
function drawCameraMarker(ctx, screen, lookName) {
  const look = MARKER_LOOKS[lookName];
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.fillStyle = look.fill;
  if (screen.circle) {
    ctx.beginPath();
    ctx.arc(screen.circle.x, screen.circle.y, screen.circle.r, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const face of screen.fills) ctx.fill(polygonPath(face));
  const hidden = linesPath(screen.lines.filter((line) => line.hidden));
  const shown = linesPath(screen.lines.filter((line) => !line.hidden));
  const outline = new Path2D();
  if (screen.circle) outline.arc(screen.circle.x, screen.circle.y, screen.circle.r, 0, Math.PI * 2);
  const top = screen.top ? polygonPath(screen.top) : null;
  ctx.lineWidth = MARKER_UNDER.width;
  ctx.strokeStyle = MARKER_UNDER.hiddenColor;
  ctx.stroke(hidden);
  ctx.lineWidth = look.width;
  ctx.strokeStyle = look.hiddenLine;
  ctx.stroke(hidden);
  ctx.lineWidth = MARKER_UNDER.width;
  ctx.strokeStyle = MARKER_UNDER.color;
  ctx.stroke(outline);
  ctx.stroke(shown);
  if (top) ctx.stroke(top);
  ctx.lineWidth = look.width;
  ctx.strokeStyle = look.line;
  ctx.stroke(outline);
  ctx.stroke(shown);
  if (top) {
    ctx.fillStyle = MARKER_TOP_FILL;
    ctx.fill(top);
    ctx.stroke(top);
  }
  if (screen.dot) whiteDot(ctx, screen.dot, MARKER_DOT_RADIUS);
}

function roundedSquare(ctx, center, size, radius) {
  const half = size / 2;
  ctx.beginPath();
  ctx.roundRect(center.x - half, center.y - half, size, size, radius);
  ctx.fill();
}

// The gizmo (gizmo_overlay.js gizmoHandles) as the draft specimen-11.html draws Move: round-capped bars with a ball
// (Move) or a rounded square (Scale) at the end, or rings whose far half is faint (Rotate), and the white center dot;
// Move's plane squares under its bars.
// The far handles first, each over a dark underlay; `active` (a handle name) is lit: its color toward white, thicker. `guides` ([{ name, points }], bent on a lens Camera's picture) are the axis guide lines
// of a drag (a plane square's two), each in its axis's color under the handles.
function drawGizmo(ctx, handles, active, guides = []) {
  const lit = (name) => name === active;
  const L = GIZMO_LOOK;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const guide of guides) {
    ctx.globalAlpha = L.guideAlpha;
    ctx.lineWidth = L.guideWidth;
    ctx.strokeStyle = GIZMO_COLORS[guide.name];
    ctx.beginPath();
    guide.points.forEach((point, index) => (index ? ctx.lineTo(point.x, point.y) : ctx.moveTo(point.x, point.y)));
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  // A path stroked twice: the dark underlay underExtra wider, then the color.
  const strokeOver = (path, color, width, alpha = 1) => {
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = L.under;
    ctx.lineWidth = width + L.underExtra;
    ctx.stroke(path);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke(path);
    ctx.globalAlpha = 1;
  };
  // Move's plane squares under the bars: the color of the axis across each, translucent, with an edge of it.
  for (const plane of handles.planes ?? []) {
    if (!plane.shown) continue;
    const on = lit(plane.name);
    const color = gizmoColor(plane.normal, on);
    const path = polygonPath(plane.points);
    ctx.strokeStyle = L.under;
    ctx.lineWidth = L.planeLine + L.underExtra;
    ctx.stroke(path);
    ctx.globalAlpha = on ? L.planeActiveAlpha : L.planeAlpha;
    ctx.fillStyle = color;
    ctx.fill(path);
    ctx.globalAlpha = 1;
    ctx.lineWidth = L.planeLine;
    ctx.strokeStyle = color;
    ctx.stroke(path);
  }
  if (handles.mode === "rotate") {
    for (const front of [false, true]) {
      for (const ring of handles.rings) {
        const path = new Path2D();
        ring.points.forEach((point, index) => {
          const next = ring.points[index + 1];
          if (!point || !next || point.front !== front || next.front !== front) return;
          path.moveTo(point.x, point.y);
          path.lineTo(next.x, next.y);
        });
        const on = lit(ring.name);
        strokeOver(path, gizmoColor(ring.name, on), on ? L.activeLineWidth : L.lineWidth, front ? 1 : L.ringBackAlpha);
      }
    }
  } else {
    const axes = handles.axes.filter((axis) => axis.shown).sort((a, b) => b.depth - a.depth);
    for (const axis of axes) {
      const on = lit(axis.name);
      const color = gizmoColor(axis.name, on);
      const bar = new Path2D();
      bar.moveTo(handles.center.x, handles.center.y);
      bar.lineTo(axis.end.x, axis.end.y);
      strokeOver(bar, color, on ? L.activeLineWidth : L.lineWidth);
      ctx.fillStyle = L.under;
      if (handles.mode === "scale") {
        const size = on ? L.activeSquareSize : L.squareSize;
        roundedSquare(ctx, axis.end, size + 2, L.squareRadius + 1);
        ctx.fillStyle = color;
        roundedSquare(ctx, axis.end, size, L.squareRadius);
      } else {
        const radius = on ? L.activeBallRadius : L.ballRadius;
        ctx.beginPath();
        ctx.arc(axis.end.x, axis.end.y, radius + 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(axis.end.x, axis.end.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  // The white center dot with a dark rim (larger while Move's center is dragged).
  const radius = lit("center") ? L.activeCenterRadius : L.centerRadius;
  ctx.beginPath();
  ctx.arc(handles.center.x, handles.center.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.lineWidth = L.centerRim;
  ctx.strokeStyle = L.under;
  ctx.stroke();
}

// Draws `scene` (stage_objects.js overlay()) on the 2D context `ctx` of a canvas covering a width x height CSS px stage
// at `ratio` device px per CSS px, seen from `camera` (stage_view.js stageCamera()). `origin` is where the view of
// width x height starts on the stage (the Camera tab's Frame view spans a box of its own, stage_view.js cameraFrameView).
// `ring` is the paint tools' brush ring at the pointer (studio/paint.js brushRing), or null.
// `orbit` is the orbit center's mark ({ x, y, alpha, box } in the view's CSS px, stage.js orbitMark; drawn within `box`),
// or null.
export function drawStageOverlay(ctx, { camera, width, height, ratio = 1, origin = { x: 0, y: 0 }, scene, ring = null, orbit = null }) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.setTransform(ratio, 0, 0, ratio, ratio * origin.x, ratio * origin.y);
  if (scene) drawScene(ctx, camera, width, height, scene);
  if (ring) drawBrushRing(ctx, ring);
  if (orbit) drawOrbitMarker(ctx, orbit);
}

// The orbit center's mark (orbit_marker.js ORBIT_MARK_LOOK; docs/design.md "大きさ"): a small dot inside a thin ring,
// each over a dark rim.
function drawOrbitMarker(ctx, { x, y, alpha, box }) {
  const M = ORBIT_MARK_LOOK;
  ctx.save();
  // Within its box (the view, or the Camera tab's frame box).
  ctx.beginPath();
  ctx.rect(box.x, box.y, box.width, box.height);
  ctx.clip();
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
  const ring = new Path2D();
  ring.arc(x, y, M.ringRadius, 0, Math.PI * 2);
  ctx.lineWidth = M.underWidth;
  ctx.strokeStyle = M.under;
  ctx.stroke(ring);
  ctx.lineWidth = M.ringWidth;
  ctx.strokeStyle = M.ring;
  ctx.stroke(ring);
  const dot = new Path2D();
  dot.arc(x, y, M.dotRadius, 0, Math.PI * 2);
  ctx.fillStyle = M.dot;
  ctx.fill(dot);
  ctx.lineWidth = M.dotRim;
  ctx.strokeStyle = M.under;
  ctx.stroke(dot);
  ctx.restore();
}

// The paint tools' brush ring at the pointer (studio/paint.js brushRing; its look: BRUSH_RING).
function drawBrushRing(ctx, { x, y, radius, fill }) {
  const path = new Path2D();
  path.arc(x, y, radius, 0, Math.PI * 2);
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill(path);
  }
  ctx.lineWidth = BRUSH_RING.underWidth;
  ctx.strokeStyle = BRUSH_RING.under;
  ctx.stroke(path);
  ctx.lineWidth = BRUSH_RING.lineWidth;
  ctx.strokeStyle = BRUSH_RING.line;
  ctx.stroke(path);
}

function drawScene(ctx, camera, width, height, scene) {
  // Normal ones first, so a hovered or selected outline lies over them.
  const order = { normal: 0, hover: 1, selected: 2 };
  const lines = [...scene.guides].sort((a, b) => order[a.look] - order[b.look]);
  for (const line of lines) {
    const path = segmentsPath(camera, line.segments, width, height);
    strokeTwice(ctx, path, GUIDE_LOOKS[line.look], !!line.dashed);
    if (line.shimmer > 0) drawShimmer(ctx, camera, line, path, GUIDE_LOOKS[line.look], width, height);
  }
  if (scene.camera) drawCameraMarker(ctx, scene.camera.screen, scene.camera.look);
  if (scene.path) drawPath(ctx, scene.path);
  if (scene.look) drawLook(ctx, scene.look);
  if (scene.sky) {
    const { geometry, handles } = scene.sky;
    const frame = new Path2D();
    geometry.boundaryEdges.flat().forEach((point, index) => (index ? frame.lineTo(point.x, point.y) : frame.moveTo(point.x, point.y)));
    frame.closePath();
    strokeTwice(ctx, frame, GUIDE_LOOKS.skySelected, !!scene.sky.dashed);
    if (handles) {
      const stem = new Path2D();
      stem.moveTo(geometry.rotateStemBase.x, geometry.rotateStemBase.y);
      stem.lineTo(geometry.rotateHandle.x, geometry.rotateHandle.y);
      strokeTwice(ctx, stem, GUIDE_LOOKS.skySelected);
      // A returned shot's edge handles stay where they are, disabled (the look of a disabled icon button).
      ctx.save();
      if (scene.sky.edgesDisabled) ctx.globalAlpha = DISABLED_HANDLE_ALPHA;
      for (const mid of geometry.edgeMidpoints ?? []) dot(ctx, mid, EDGE_RADIUS);
      ctx.restore();
      for (const corner of geometry.corners) dot(ctx, corner, CORNER_RADIUS);
      dot(ctx, geometry.rotateHandle, ROTATE_RADIUS);
    }
  }
  // The selected paint group (docs/studio-ui.md "ペイントのまとまり"): its frame through its four corners in the sky
  // image's look, with the corner dots and the rotate handle on its stem as the sky image's (no edge handles).
  if (scene.paint) {
    const paint = scene.paint;
    strokeTwice(ctx, polygonPath(paint.outline), GUIDE_LOOKS.skySelected);
    if (paint.handles) {
      const stem = new Path2D();
      stem.moveTo(paint.rotateStemBase.x, paint.rotateStemBase.y);
      stem.lineTo(paint.rotateHandle.x, paint.rotateHandle.y);
      strokeTwice(ctx, stem, GUIDE_LOOKS.skySelected);
      for (const corner of paint.corners) dot(ctx, corner, CORNER_RADIUS);
      dot(ctx, paint.rotateHandle, ROTATE_RADIUS);
    }
  }
  if (scene.gizmo) drawGizmo(ctx, scene.gizmo.handles, scene.gizmo.active, scene.gizmo.guides);
}

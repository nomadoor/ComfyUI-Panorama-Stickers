// The 2D overlay over the new UI's stage: the World objects' guides, the Camera's mark, the gizmo and the selected sky
// image's frame and handles (stage_objects.js overlay()), drawn on a canvas over the three.js one. Drawing only: what
// to draw and how it looks come from stage_objects.js, world_guides.js, camera_marker.js and gizmo_overlay.js.
import { MARKER_DOT_RADIUS, MARKER_LOOKS, MARKER_TOP_FILL, MARKER_UNDER } from "./camera_marker.js";
import { GIZMO_COLORS, GIZMO_LOOK } from "./gizmo_overlay.js";
import { GUIDE_LOOKS, GUIDE_UNDER_EXTRA, SELECTED_GUIDE_COLOR, screenSegment } from "./world_guides.js";

// The sky image's handles (docs/studio-ui.md "下の中央のバー"; pano_sticker_affordance.js hits them): corner and rotate
// dots, edge ticks, in the selected guide's yellow over a dark ring.
const CORNER_RADIUS = 5;
const EDGE_RADIUS = 3.5;
const ROTATE_RADIUS = 6;

function strokeTwice(ctx, path, look) {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = look.dark;
  ctx.lineWidth = look.width + GUIDE_UNDER_EXTRA;
  ctx.stroke(path);
  ctx.strokeStyle = look.light;
  ctx.lineWidth = look.width;
  ctx.stroke(path);
}

function segmentsPath(camera, segments, width, height) {
  const path = new Path2D();
  for (const segment of segments) {
    const shown = screenSegment(camera, segment, width, height);
    if (!shown) continue;
    path.moveTo(shown[0].x, shown[0].y);
    path.lineTo(shown[1].x, shown[1].y);
  }
  return path;
}

function dot(ctx, point, radius) {
  ctx.beginPath();
  ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = SELECTED_GUIDE_COLOR;
  ctx.fill();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = GUIDE_LOOKS.selected.dark;
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
// (Move) or a rounded square (Scale) at the end, or rings whose far half is faint (Rotate), and the white center dot.
// The far handles first; `active` (a handle name) is white. `guide` ({ name, a, b }) is the axis guide line of a drag,
// in its axis's color under the handles.
function drawGizmo(ctx, handles, active, guide) {
  const colorOf = (name) => (name === active ? GIZMO_COLORS.active : GIZMO_COLORS[name]);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  if (guide) {
    ctx.globalAlpha = GIZMO_LOOK.guideAlpha;
    ctx.lineWidth = GIZMO_LOOK.guideWidth;
    ctx.strokeStyle = GIZMO_COLORS[guide.name];
    ctx.beginPath();
    ctx.moveTo(guide.a.x, guide.a.y);
    ctx.lineTo(guide.b.x, guide.b.y);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  ctx.lineWidth = GIZMO_LOOK.lineWidth;
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
        ctx.globalAlpha = front ? 1 : GIZMO_LOOK.ringBackAlpha;
        ctx.strokeStyle = colorOf(ring.name);
        ctx.stroke(path);
      }
    }
    ctx.globalAlpha = 1;
  } else {
    const axes = handles.axes.filter((axis) => axis.shown).sort((a, b) => b.depth - a.depth);
    for (const axis of axes) {
      const color = colorOf(axis.name);
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(handles.center.x, handles.center.y);
      ctx.lineTo(axis.end.x, axis.end.y);
      ctx.stroke();
      if (handles.mode === "scale") {
        roundedSquare(ctx, axis.end, GIZMO_LOOK.squareSize, GIZMO_LOOK.squareRadius);
      } else {
        ctx.beginPath();
        ctx.arc(axis.end.x, axis.end.y, GIZMO_LOOK.ballRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  whiteDot(ctx, handles.center, GIZMO_LOOK.centerRadius);
}

// Draws `scene` (stage_objects.js overlay()) on the 2D context `ctx` of a canvas covering a width x height CSS px stage
// at `ratio` device px per CSS px, seen from `camera` (stage_view.js stageCamera()). `origin` is where the view of
// width x height starts on the stage (the Camera tab's Frame view spans a box of its own, stage_view.js cameraFrameView).
export function drawStageOverlay(ctx, { camera, width, height, ratio = 1, origin = { x: 0, y: 0 }, scene }) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  if (!scene) return;
  ctx.setTransform(ratio, 0, 0, ratio, ratio * origin.x, ratio * origin.y);
  // Normal ones first, so a hovered or selected outline lies over them.
  const order = { normal: 0, hover: 1, selected: 2 };
  const lines = [...scene.guides].sort((a, b) => order[a.look] - order[b.look]);
  for (const line of lines) strokeTwice(ctx, segmentsPath(camera, line.segments, width, height), GUIDE_LOOKS[line.look]);
  if (scene.camera) drawCameraMarker(ctx, scene.camera.screen, scene.camera.look);
  if (scene.sky) {
    const { geometry, handles } = scene.sky;
    const frame = new Path2D();
    geometry.boundaryEdges.flat().forEach((point, index) => (index ? frame.lineTo(point.x, point.y) : frame.moveTo(point.x, point.y)));
    frame.closePath();
    strokeTwice(ctx, frame, GUIDE_LOOKS.selected);
    if (handles) {
      const stem = new Path2D();
      stem.moveTo(geometry.rotateStemBase.x, geometry.rotateStemBase.y);
      stem.lineTo(geometry.rotateHandle.x, geometry.rotateHandle.y);
      strokeTwice(ctx, stem, GUIDE_LOOKS.selected);
      for (const mid of geometry.edgeMidpoints ?? []) dot(ctx, mid, EDGE_RADIUS);
      for (const corner of geometry.corners) dot(ctx, corner, CORNER_RADIUS);
      dot(ctx, geometry.rotateHandle, ROTATE_RADIUS);
    }
  }
  if (scene.gizmo) drawGizmo(ctx, scene.gizmo.handles, scene.gizmo.active, scene.gizmo.guide);
}

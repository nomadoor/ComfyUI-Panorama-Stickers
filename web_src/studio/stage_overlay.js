// The 2D overlay over the new UI's stage: the World objects' guides, the Camera's mark and the selected sky image's
// frame and handles (stage_objects.js overlay()), drawn on a canvas over the three.js one. Drawing only: what to draw
// and how it looks come from stage_objects.js and world_guides.js.
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

// Draws `scene` (stage_objects.js overlay()) on the 2D context `ctx` of a canvas covering a width x height CSS px stage
// at `ratio` device px per CSS px, seen from `camera` (stage_view.js stageCamera()).
export function drawStageOverlay(ctx, { camera, width, height, ratio = 1, scene }) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  if (!scene) return;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  // Normal ones first, so a hovered or selected outline lies over them.
  const order = { normal: 0, hover: 1, selected: 2 };
  const lines = [...scene.guides, ...(scene.camera ? [scene.camera] : [])].sort((a, b) => order[a.look] - order[b.look]);
  for (const line of lines) strokeTwice(ctx, segmentsPath(camera, line.segments, width, height), GUIDE_LOOKS[line.look]);
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
}

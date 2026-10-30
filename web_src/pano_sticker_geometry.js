import {
  DEG2RAD,
  RAD2DEG,
  add,
  cameraBasis,
  clamp,
  mul,
  norm,
  wrapYaw,
} from "./pano_camera_math.js";
import {
  STICKER_NODE_ROTATE_HANDLE_OFFSET_PX,
  hitStickerSelectionAffordance,
} from "./pano_sticker_affordance.js";
import { lensAxesDirection, lensFovLimit, lensRadius } from "./pano_lens.js";

export { hitStickerSelectionAffordance as hitStickerGeometry } from "./pano_sticker_affordance.js";

// Screen points follow projection, a viewProjection() of the view the stickers are drawn in.
function projectWorldDirection(direction, projection) {
  if (!direction) return null;
  const point = projection.project(direction);
  if (!Number.isFinite(point.z)) return null;
  const guard = Math.max(projection.width, projection.height) * 2;
  return {
    x: clamp(point.x, -guard, projection.width + guard),
    y: clamp(point.y, -guard, projection.height + guard),
    rawZ: point.z,
  };
}

function stickerFrame(item) {
  const basis = cameraBasis(
    Number(item?.yaw_deg || 0),
    Number(item?.pitch_deg || 0),
    Number(item?.rot_deg ?? item?.roll_deg ?? 0),
  );
  // A sky Sticker of a lens curve other than 1 (ADR 0042): its tangents are its lens's image radii.
  const curve = Number.isFinite(item?.curve) ? item.curve : 1;
  if (curve !== 1) {
    const limit = lensFovLimit(curve);
    return {
      centerDir: basis.fwd,
      right: basis.right,
      up: basis.up,
      curve,
      tanX: lensRadius(clamp(Number(item?.hFOV_deg || 20), 0.1, limit) * DEG2RAD * 0.5, curve),
      tanY: lensRadius(clamp(Number(item?.vFOV_deg || 20), 0.1, limit) * DEG2RAD * 0.5, curve),
    };
  }
  return {
    centerDir: basis.fwd,
    right: basis.right,
    up: basis.up,
    tanX: Math.tan(clamp(Number(item?.hFOV_deg || 20), 0.1, 179) * DEG2RAD * 0.5),
    tanY: Math.tan(clamp(Number(item?.vFOV_deg || 20), 0.1, 179) * DEG2RAD * 0.5),
  };
}

function stickerDirection(frame, x, y) {
  if (frame.curve !== undefined) return lensAxesDirection({ fwd: frame.centerDir, right: frame.right, up: frame.up }, x, y, frame.curve);
  return norm(add(
    add(frame.centerDir, mul(frame.right, x)),
    mul(frame.up, y),
  ));
}

export function buildStickerGeometry(item, projection) {
  if (!item || item.visible === false) return { visible: false };
  const frame = stickerFrame(item);
  const center = projectWorldDirection(frame.centerDir, projection);
  if (!center) return { visible: false };
  const corners = [
    stickerDirection(frame, -frame.tanX, frame.tanY),
    stickerDirection(frame, frame.tanX, frame.tanY),
    stickerDirection(frame, frame.tanX, -frame.tanY),
    stickerDirection(frame, -frame.tanX, -frame.tanY),
  ].map((direction) => projectWorldDirection(direction, projection));
  const boundaryEdges = Array.from({ length: 4 }, (_, edge) => {
    const points = [];
    for (let index = 0; index <= 28; index += 1) {
      const t = index / 28;
      let x;
      let y;
      if (edge === 0) { x = -frame.tanX + (2 * frame.tanX * t); y = frame.tanY; }
      else if (edge === 1) { x = frame.tanX; y = frame.tanY - (2 * frame.tanY * t); }
      else if (edge === 2) { x = frame.tanX - (2 * frame.tanX * t); y = -frame.tanY; }
      else { x = -frame.tanX; y = -frame.tanY + (2 * frame.tanY * t); }
      const projected = projectWorldDirection(stickerDirection(frame, x, y), projection);
      if (projected) points.push({ x: projected.x, y: projected.y });
    }
    return points;
  });
  const rotateStemBase = projectWorldDirection(stickerDirection(frame, 0, frame.tanY), projection);
  const rotateHint = projectWorldDirection(
    stickerDirection(frame, 0, frame.tanY + Math.max(frame.tanY * 0.43, 0.053)),
    projection,
  );
  // The middle of each edge, where a frame's edge handle scales one axis (pano_sticker_affordance.js
  // hitFrameAffordance with `edges`).
  const edgeCenters = [
    ["top", 0, frame.tanY, 0, 1],
    ["right", frame.tanX, 0, 1, 2],
    ["bottom", 0, -frame.tanY, 2, 3],
    ["left", -frame.tanX, 0, 3, 0],
  ].map(([edge, x, y, a, b]) => ({ edge, point: projectWorldDirection(stickerDirection(frame, x, y), projection), a, b }));
  const projected = [center, ...corners, rotateStemBase, rotateHint];
  if (projected.some((point) => !point || !Number.isFinite(point.x) || !Number.isFinite(point.y))) {
    return { visible: false };
  }
  if (!projected.some((point) => point.rawZ > 1e-4)) return { visible: false };
  const handleDx = rotateHint.x - rotateStemBase.x;
  const handleDy = rotateHint.y - rotateStemBase.y;
  const handleLength = Math.hypot(handleDx, handleDy) || 1;
  return {
    center: { x: center.x, y: center.y },
    corners: corners.map((point) => ({ x: point.x, y: point.y })),
    boundaryEdges,
    edgeMidpoints: edgeCenters.filter((entry) => entry.point).map(({ edge, point, a, b }) => ({
      edge,
      x: point.x,
      y: point.y,
      a: { x: corners[a].x, y: corners[a].y },
      b: { x: corners[b].x, y: corners[b].y },
    })),
    rotateStemBase: { x: rotateStemBase.x, y: rotateStemBase.y },
    rotateHandle: {
      x: rotateStemBase.x + (handleDx / handleLength) * STICKER_NODE_ROTATE_HANDLE_OFFSET_PX,
      y: rotateStemBase.y + (handleDy / handleLength) * STICKER_NODE_ROTATE_HANDLE_OFFSET_PX,
    },
    visible: true,
  };
}

export function pickStickerAtPoint(items, selectedId, point, projection) {
  const entries = (Array.isArray(items) ? items : [])
    .filter((item) => item && item.visible !== false)
    .map((item) => ({ item, geometry: buildStickerGeometry(item, projection) }))
    .filter((entry) => entry.geometry.visible)
    .sort((a, b) => Number(b.item?.z_index || 0) - Number(a.item?.z_index || 0));
  const selected = entries.find((entry) => String(entry.item?.id || "") === String(selectedId || ""));
  if (selected) {
    const hit = hitStickerSelectionAffordance(selected.geometry, point);
    if (hit.kind === "scale" || hit.kind === "rotate") return { ...selected, hit };
  }
  for (const entry of entries) {
    const hit = hitStickerSelectionAffordance(entry.geometry, point);
    if (hit.kind !== "none") return { ...entry, hit };
  }
  return null;
}

export function moveStickerToScreenPoint(item, point, projection) {
  const direction = projection.ray(point.x, point.y);
  return {
    ...item,
    yaw_deg: wrapYaw(Math.atan2(direction.x, direction.z) * RAD2DEG),
    pitch_deg: Math.asin(clamp(direction.y, -1, 1)) * RAD2DEG,
  };
}

export function scaleStickerFromPointer(item, startDistance, currentDistance) {
  const ratio = Math.max(1, Number(currentDistance || 0)) / Math.max(1, Number(startDistance || 1));
  return {
    ...item,
    hFOV_deg: clamp(Number(item?.hFOV_deg || 20) * ratio, 1, 179),
    vFOV_deg: clamp(Number(item?.vFOV_deg || 20) * ratio, 1, 179),
  };
}

// An edge handle's scale ("scale_x" the hFOV, "scale_y" the vFOV) by the pointer's distance from the center against
// where it started, as scaleStickerFromPointer scales both.
export function scaleStickerAxisFromPointer(item, axis, startDistance, currentDistance) {
  const ratio = Math.max(1, Number(currentDistance || 0)) / Math.max(1, Number(startDistance || 1));
  const field = axis === "scale_x" ? "hFOV_deg" : "vFOV_deg";
  return { ...item, [field]: clamp(Number(item?.[field] || 20) * ratio, 1, 179) };
}

// The step a rotation snaps to with Shift held (the new UI's list of shortcuts shows it).
export const ROTATE_SNAP_DEG = 45;

export function rotateStickerFromPointer(item, startAngle, currentAngle, snap = false) {
  const delta = (Number(currentAngle || 0) - Number(startAngle || 0)) * RAD2DEG;
  let rotation = Number(item?.rot_deg ?? item?.roll_deg ?? 0) - delta;
  if (snap) rotation = Math.round(rotation / ROTATE_SNAP_DEG) * ROTATE_SNAP_DEG;
  return { ...item, rot_deg: rotation };
}

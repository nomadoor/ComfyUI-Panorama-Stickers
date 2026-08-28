import {
  DEG2RAD,
  RAD2DEG,
  add,
  cameraBasis,
  clamp,
  cross,
  dot,
  mul,
  norm,
  vec3,
  wrapYaw,
  yawPitchToDir,
} from "./pano_camera_math.js";
import { hitStickerSelectionAffordance } from "./pano_sticker_affordance.js";

export { hitStickerSelectionAffordance as hitStickerGeometry } from "./pano_sticker_affordance.js";

function viewportSize(viewport) {
  return {
    width: Math.max(1, Number(viewport?.width ?? viewport?.w ?? 1)),
    height: Math.max(1, Number(viewport?.height ?? viewport?.h ?? 1)),
  };
}

function viewBasis(camera) {
  return cameraBasis(
    Number(camera?.yawDeg ?? camera?.yaw ?? 0),
    Number(camera?.pitchDeg ?? camera?.pitch ?? 0),
    0,
  );
}

export function screenPointToWorldDirection(point, camera, viewport) {
  const { width, height } = viewportSize(viewport);
  const { right, up, fwd } = viewBasis(camera);
  const horizontalFov = clamp(Number(camera?.fovDeg ?? camera?.fov ?? 100), 1, 179) * DEG2RAD;
  const verticalFov = 2 * Math.atan(Math.tan(horizontalFov * 0.5) * (height / width));
  const nx = ((Number(point?.x || 0) - width * 0.5) / (width * 0.5)) * Math.tan(horizontalFov * 0.5);
  const ny = ((height * 0.5 - Number(point?.y || 0)) / (height * 0.5)) * Math.tan(verticalFov * 0.5);
  return norm(add(add(mul(right, nx), mul(up, ny)), fwd));
}

function projectWorldDirection(direction, camera, viewport) {
  const { width, height } = viewportSize(viewport);
  const { right, up, fwd } = viewBasis(camera);
  const cx = dot(direction, right);
  const cy = dot(direction, up);
  const rawZ = dot(direction, fwd);
  const nearZ = 1e-4;
  if (!Number.isFinite(rawZ)) return null;
  const z = Math.max(rawZ, nearZ);
  const horizontalFov = clamp(Number(camera?.fovDeg ?? camera?.fov ?? 100), 1, 179) * DEG2RAD;
  const verticalFov = 2 * Math.atan(Math.tan(horizontalFov * 0.5) * (height / width));
  const sx = (width * 0.5) / Math.tan(horizontalFov * 0.5);
  const sy = (height * 0.5) / Math.tan(verticalFov * 0.5);
  const guard = Math.max(width, height) * 2;
  return {
    x: clamp(width * 0.5 + (cx / z) * sx, -guard, width + guard),
    y: clamp(height * 0.5 - (cy / z) * sy, -guard, height + guard),
    rawZ,
  };
}

function stickerFrame(item) {
  const centerDir = yawPitchToDir(Number(item?.yaw_deg || 0), Number(item?.pitch_deg || 0));
  let worldUp = vec3(0, 1, 0);
  if (Math.abs(dot(centerDir, worldUp)) > 0.999) worldUp = vec3(0, 0, 1);
  const right = norm(cross(worldUp, centerDir));
  const up = norm(cross(centerDir, right));
  const rotation = Number(item?.rot_deg ?? item?.roll_deg ?? 0) * DEG2RAD;
  return {
    centerDir,
    right,
    up,
    tanX: Math.tan(clamp(Number(item?.hFOV_deg || 20), 0.1, 179) * DEG2RAD * 0.5),
    tanY: Math.tan(clamp(Number(item?.vFOV_deg || 20), 0.1, 179) * DEG2RAD * 0.5),
    cosRotation: Math.cos(rotation),
    sinRotation: Math.sin(rotation),
  };
}

function stickerDirection(frame, x, y) {
  const rotatedX = x * frame.cosRotation - y * frame.sinRotation;
  const rotatedY = x * frame.sinRotation + y * frame.cosRotation;
  return norm(add(
    add(frame.centerDir, mul(frame.right, rotatedX)),
    mul(frame.up, rotatedY),
  ));
}

export function buildStickerGeometry(item, camera, viewport) {
  if (!item || item.visible === false) return { visible: false };
  const frame = stickerFrame(item);
  const center = projectWorldDirection(frame.centerDir, camera, viewport);
  if (!center) return { visible: false };
  const corners = [
    stickerDirection(frame, -frame.tanX, frame.tanY),
    stickerDirection(frame, frame.tanX, frame.tanY),
    stickerDirection(frame, frame.tanX, -frame.tanY),
    stickerDirection(frame, -frame.tanX, -frame.tanY),
  ].map((direction) => projectWorldDirection(direction, camera, viewport));
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
      const projected = projectWorldDirection(stickerDirection(frame, x, y), camera, viewport);
      if (projected) points.push({ x: projected.x, y: projected.y });
    }
    return points;
  });
  const rotateStemBase = projectWorldDirection(stickerDirection(frame, 0, frame.tanY), camera, viewport);
  const rotateHint = projectWorldDirection(
    stickerDirection(frame, 0, frame.tanY + Math.max(frame.tanY * 0.43, 0.053)),
    camera,
    viewport,
  );
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
    rotateStemBase: { x: rotateStemBase.x, y: rotateStemBase.y },
    rotateHandle: {
      x: rotateStemBase.x + (handleDx / handleLength) * 30,
      y: rotateStemBase.y + (handleDy / handleLength) * 30,
    },
    visible: true,
  };
}

export function pickStickerAtPoint(items, selectedId, point, camera, viewport) {
  const entries = (Array.isArray(items) ? items : [])
    .filter((item) => item && item.visible !== false)
    .map((item) => ({ item, geometry: buildStickerGeometry(item, camera, viewport) }))
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

export function moveStickerToScreenPoint(item, point, camera, viewport) {
  const direction = screenPointToWorldDirection(point, camera, viewport);
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

export function rotateStickerFromPointer(item, startAngle, currentAngle, snap = false) {
  const delta = (Number(currentAngle || 0) - Number(startAngle || 0)) * RAD2DEG;
  let rotation = Number(item?.rot_deg ?? item?.roll_deg ?? 0) - delta;
  if (snap) rotation = Math.round(rotation / 45) * 45;
  return { ...item, rot_deg: rotation };
}

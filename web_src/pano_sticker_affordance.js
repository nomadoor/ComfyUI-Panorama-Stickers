export const STICKER_NODE_ROTATE_HANDLE_OFFSET_PX = 24;

export function stickerSelectionAccent(item = {}) {
  if (item?.locked === true) return "#ff4d4f";
  if (String(item?.source_kind || "") === "external_image" || String(item?.id || "") === "sticker_image_1") {
    return "#f59e0b";
  }
  return "#0070f3";
}

function distanceSquared(a, b) {
  const dx = Number(a?.x || 0) - Number(b?.x || 0);
  const dy = Number(a?.y || 0) - Number(b?.y || 0);
  return dx * dx + dy * dy;
}

function pointInPolygon(point, polygon) {
  let inside = false;
  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
    const a = polygon[index];
    const b = polygon[previous];
    const crosses = ((a.y > point.y) !== (b.y > point.y))
      && (point.x < ((b.x - a.x) * (point.y - a.y)) / ((b.y - a.y) || 1e-12) + a.x);
    if (crosses) inside = !inside;
  }
  return inside;
}

export function hitStickerSelectionAffordance(geometry, point) {
  if (!geometry?.visible) return { kind: "none" };
  const cornerIndex = geometry.corners.findIndex((corner) => distanceSquared(corner, point) <= 11 * 11);
  if (cornerIndex >= 0) {
    const corner = geometry.corners[cornerIndex];
    const vx = corner.x - geometry.center.x;
    const vy = corner.y - geometry.center.y;
    return {
      kind: "scale",
      cornerIndex,
      cursor: (vx * vy) >= 0 ? "nwse-resize" : "nesw-resize",
    };
  }
  if (distanceSquared(geometry.rotateHandle, point) <= 12 * 12) {
    return { kind: "rotate", cursor: "grab" };
  }
  if (pointInPolygon(point, geometry.corners)) return { kind: "move", cursor: "default" };
  return { kind: "none" };
}

export function drawStickerSelectionBoundary(ctx, boundaryEdges, { selected = true } = {}) {
  if (!ctx || !Array.isArray(boundaryEdges)) return false;
  ctx.strokeStyle = selected ? "rgba(250, 250, 250, 0.9)" : "#71717a";
  ctx.lineWidth = selected ? 2 : 1;
  ctx.beginPath();
  let started = false;
  boundaryEdges.forEach((edge) => (Array.isArray(edge) ? edge : []).forEach((point) => {
    if (!started) {
      ctx.moveTo(point.x, point.y);
      started = true;
    } else {
      ctx.lineTo(point.x, point.y);
    }
  }));
  if (!started) return false;
  ctx.closePath();
  ctx.stroke();
  return true;
}

export function drawStickerSelectionHandles(ctx, geometry, { accent = "#0070f3" } = {}) {
  if (!ctx || !geometry) return;
  ctx.fillStyle = accent;
  geometry.corners.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5.5, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.strokeStyle = "rgba(250, 250, 250, 0.9)";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(geometry.rotateStemBase.x, geometry.rotateStemBase.y);
  ctx.lineTo(geometry.rotateHandle.x, geometry.rotateHandle.y);
  ctx.stroke();
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(geometry.rotateHandle.x, geometry.rotateHandle.y, 8, 0, Math.PI * 2);
  ctx.fill();
}

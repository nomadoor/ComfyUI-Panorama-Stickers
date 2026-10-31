export function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export function clampSafe(v, lo, hi) {
  const n = Number(v);
  if (!Number.isFinite(n)) return Number(lo);
  return Math.max(Number(lo), Math.min(Number(hi), n));
}

export function wrapYaw(y) {
  return ((y + 180) % 360 + 360) % 360 - 180;
}

export function shortestYawDelta(from, to) {
  let d = wrapYaw(to) - wrapYaw(from);
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

// Whether the point `pt` lies inside the polygon `poly` ([{ x, y }]; even-odd rule).
export function pointInPoly(pt, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x; const yi = poly[i].y;
    const xj = poly[j].x; const yj = poly[j].y;
    const intersect = ((yi > pt.y) !== (yj > pt.y))
      && (pt.x < ((xj - xi) * (pt.y - yi)) / ((yj - yi) || 1e-6) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
// The squared distance between two points.
export function dist2(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}
// The squared distance from the point p to the segment a-b.
export function distToSegment2(p, a, b) {
  const abx = Number(b.x || 0) - Number(a.x || 0);
  const aby = Number(b.y || 0) - Number(a.y || 0);
  const apx = Number(p.x || 0) - Number(a.x || 0);
  const apy = Number(p.y || 0) - Number(a.y || 0);
  const denom = abx * abx + aby * aby;
  if (denom <= 1e-6) return dist2(p, a);
  const t = clamp((apx * abx + apy * aby) / denom, 0, 1);
  const qx = Number(a.x || 0) + abx * t;
  const qy = Number(a.y || 0) + aby * t;
  const dx = Number(p.x || 0) - qx;
  const dy = Number(p.y || 0) - qy;
  return dx * dx + dy * dy;
}

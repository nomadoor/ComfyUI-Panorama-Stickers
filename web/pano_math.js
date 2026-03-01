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

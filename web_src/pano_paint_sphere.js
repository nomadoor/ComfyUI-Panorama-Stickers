// The ERP and the sphere for the paint: an ERP point's direction and back, and the short way round between two u
// values. Below the paint engine (pano_paint_engine.js), the strokes (pano_paint_strokes.js, which give them on) and
// the paint objects.
import { clamp } from "./pano_math.js";

// The difference a - b of two ERP u values the short way round, in [-0.5, 0.5].
export function shortestWrappedDelta(a, b) {
  let d = Number(a || 0) - Number(b || 0);
  while (d > 0.5) d -= 1;
  while (d < -0.5) d += 1;
  return d;
}

// The ERP point of a direction in the panorama convention (pano_editor_view.js viewProjection's rays: the old
// editor's view and the new UI's stage both give one), at time `t`.
export function erpPointOfDirection(d, t = 0) {
  const lon = Math.atan2(d.x, d.z);
  const lat = Math.asin(clamp(d.y, -1, 1));
  return {
    targetKind: "ERP_GLOBAL",
    u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
    v: clamp(0.5 - (lat / Math.PI), 0, 1),
    t: Number(t || 0),
  };
}

// The unit direction of an ERP point in the panorama convention (erpPointOfDirection's inverse).
export function directionOfErpPoint(point) {
  const lon = (Number(point.u || 0) - 0.5) * (2 * Math.PI);
  const lat = (0.5 - Number(point.v || 0)) * Math.PI;
  const cp = Math.cos(lat);
  return { x: cp * Math.sin(lon), y: Math.sin(lat), z: cp * Math.cos(lon) };
}


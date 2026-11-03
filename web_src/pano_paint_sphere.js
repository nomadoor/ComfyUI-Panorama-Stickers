// The ERP and the sphere for the paint: an ERP point's direction and back, the short way round between two u values,
// and how a stroke is drawn on the sphere (its path and a stamp's width). Below the paint engine (pano_paint_engine.js),
// the strokes (pano_paint_strokes.js, which give the first three on) and the paint objects.
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


// --- A stroke drawn on the sphere (docs/render-contract.md "ペイントのストロークの描き方"; Python: core/painting.py
// stroke_erp_path, stamp_half_width_px, held together by tests/fixtures/paint_stroke_sphere.json).

// The points a drawer walks for the stroke points `points`, its base radius radiusPx and an ERP of width x height:
// u continuous across the seam (each next one the short way from the one before), with a great circle's midpoint put
// between two neighbours wherever their ERP line's midpoint lies farther from it than half the brush's vertical
// radius (as an angle), again on each half (depth 16 at most; not between about the same directions, opposite ones,
// or ones under a pixel apart on the ERP). Points put in take the means of their neighbours' t, widthScale and
// pressureLike.
export function strokeErpPath(points, radiusPx, width, height) {
  const list = Array.isArray(points) ? points : [];
  const out = [];
  let prevU = null;
  const continuous = list.map((point) => {
    const raw = Number(point?.u || 0);
    const u = prevU === null ? raw : prevU + shortestWrappedDelta(raw, ((prevU % 1) + 1) % 1);
    prevU = u;
    return { ...point, u, v: Number(point?.v || 0) };
  });
  if (!continuous.length) return out;
  const halfAngle = (Number(radiusPx) / Math.max(1, height)) * Math.PI * 0.5;
  const mean = (a, b, key) => (a[key] === undefined && b[key] === undefined ? undefined : (Number(a[key] ?? 1) + Number(b[key] ?? 1)) * 0.5);
  function between(a, b, depth) {
    if (depth >= 16) return;
    if (Math.hypot((b.u - a.u) * width, (b.v - a.v) * height) < 1) return;
    const da = directionOfErpPoint(a);
    const db = directionOfErpPoint(b);
    if (Math.hypot(da.x - db.x, da.y - db.y, da.z - db.z) < 1e-12) return;
    if (Math.abs(da.x * db.x + da.y * db.y + da.z * db.z + 1) < 1e-12) return;
    const sum = { x: da.x + db.x, y: da.y + db.y, z: da.z + db.z };
    const length = Math.hypot(sum.x, sum.y, sum.z);
    const g = { x: sum.x / length, y: sum.y / length, z: sum.z / length };
    const m = { u: (a.u + b.u) * 0.5, v: (a.v + b.v) * 0.5 };
    const dm = directionOfErpPoint(m);
    const cross = Math.hypot(dm.y * g.z - dm.z * g.y, dm.z * g.x - dm.x * g.z, dm.x * g.y - dm.y * g.x);
    if (Math.atan2(cross, dm.x * g.x + dm.y * g.y + dm.z * g.z) <= halfAngle) return;
    const lat = Math.asin(clamp(g.y, -1, 1));
    const u = Math.abs(lat) >= Math.PI / 2 - 1e-9
      ? m.u
      : m.u + shortestWrappedDelta(Math.atan2(g.x, g.z) / (2 * Math.PI) + 0.5, ((m.u % 1) + 1) % 1);
    const point = { ...a, u, v: 0.5 - lat / Math.PI, t: (Number(a.t || 0) + Number(b.t || 0)) * 0.5 };
    for (const key of ["widthScale", "pressureLike"]) {
      const value = mean(a, b, key);
      if (value === undefined) delete point[key];
      else point[key] = value;
    }
    between(a, point, depth + 1);
    out.push(point);
    between(point, b, depth + 1);
  }
  out.push(continuous[0]);
  for (let i = 1; i < continuous.length; i += 1) {
    between(continuous[i - 1], continuous[i], 0);
    out.push(continuous[i]);
  }
  return out;
}

// A brush stamp's horizontal radius in pixels on an ERP of `width`, for its vertical radius rv and its aspect, at the
// row v: rv · aspect ÷ cos(latitude), the whole width's half where it reaches that (the stamp goes all the way round).
export function stampHalfWidthPx(rv, aspect, v, width) {
  const across = Number(rv) * Number(aspect);
  const cos = Math.cos((0.5 - Number(v)) * Math.PI);
  return across >= cos * width * 0.5 ? width * 0.5 : across / cos;
}

// The eager side of the live ERP of Panorama mode (docs/threejs-spark-integration.md "Panorama モードの ERP の表示"):
// what pano_live_erp.js (in the three.js chunk, which cannot import this side) is given. Pure functions.
import { worldRotation } from "../pano_world.js";

// The ERP's ratio (width / height) for the Camera's erp_range: 360 is 2 : 1, 180 is 1 : 1 (docs/studio-node.md).
export function liveErpRatio(erpRange = 360) {
  return erpRange === 180 ? 1 : 2;
}

// The view setView() takes for an evaluated Camera ({ position [x, y, z] in the World, yaw_deg, pitch_deg, roll_deg })
// and its erp_range: the World position, the World matrix of its turn and the longitude range.
export function liveErpView(camera, erpRange = 360) {
  const position = Array.isArray(camera?.position) ? camera.position.map((v) => Number(v) || 0) : [0, 0, 0];
  return {
    position,
    turn: worldRotation(Number(camera?.yaw_deg) || 0, Number(camera?.pitch_deg) || 0, Number(camera?.roll_deg) || 0),
    coverage: erpRange === 180 ? 180 : 360,
  };
}

// The ERP's size in pixels for a box of width x height CSS px at devicePixelRatio `dpr` (the Output window, or the
// frame of the Camera tab): the box's device pixels at the ERP's ratio, so the ERP is drawn no larger than it shows.
export function liveErpSize(width, height, dpr = 1, erpRange = 360) {
  const ratio = liveErpRatio(erpRange);
  const scale = Number.isFinite(dpr) && dpr > 0 ? dpr : 1;
  const w = Math.max(1, Math.min(width, height * ratio) * scale);
  return { width: Math.max(1, Math.round(w)), height: Math.max(1, Math.round(w / ratio)) };
}

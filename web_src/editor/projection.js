// Where things are on the screen: the panorama view's projection, the Unwrap rect, and the conversions
// between canvas points, view directions, ERP points and the Frame view.
import { cameraBasis } from "../pano_camera_math.js";
import { lensAxesDirection, lensAxesFilm, lensFovLimit, lensRadius } from "../pano_lens.js";
import { viewProjection, viewportCamera } from "../pano_editor_view.js";
import { clamp } from "../pano_math.js";
import { DEG2RAD } from "./constants.js";
import { add, dot, mul, norm, vec3 } from "./helpers.js";

export function createProjection(deps) {
  const {
    backgroundCanvas, canvas, editor, state, studio,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let cameraShoots, getActiveCutoutShot, getFrameViewRect, poseOf, projectSceneItemDir, shortestWrappedDelta;

  // The panorama view's projection, rebuilt when its camera or the canvas size changes.
  let viewProjectionCache = { key: [], projection: null };

  // Whether Panorama Studio's Camera shoots a 360-degree ERP (ADR 0029); the Cutout shoots every Camera
  // through its frame.
  function isErpCamera() {
    return studio && cameraShoots() && state.camera.projection === "erp";
  }

  function stickerCornerOrderSanity() {
    const test = {
      yaw_deg: 0, pitch_deg: 0, hFOV_deg: 20, vFOV_deg: 20, rot_deg: 0,
    };
    const dirs = stickerCornersDir(test);
    if (!dirs || dirs.length !== 4) return false;
    // top-left y should be >= bottom-left y in world-up axis
    return dirs[0].y >= dirs[3].y;
  }

  // The panorama view's three.js camera. The overlays and hit testing use its projection, so they
  // match the drawn frame.
  function currentViewCamera() {
    return viewportCamera({ yaw_deg: editor.viewYaw, pitch_deg: editor.viewPitch, roll_deg: 0, hFOV_deg: editor.viewFov }, canvas.width, canvas.height);
  }

  function currentViewProjection() {
    const key = [editor.viewYaw, editor.viewPitch, editor.viewFov, canvas.width, canvas.height];
    if (key.some((value, index) => value !== viewProjectionCache.key[index])) {
      viewProjectionCache = { key, projection: viewProjection(currentViewCamera(), canvas.width, canvas.height) };
    }
    return viewProjectionCache.projection;
  }

  function projectDir(dir) {
    const point = currentViewProjection().project(dir);
    return point.z > 1e-4 ? point : null;
  }

  function screenToWorldDir(x, y) {
    return currentViewProjection().ray(x, y);
  }

  function getUnwrapRect() {
    const w = canvas.width;
    const h = canvas.height;
    const targetAR = 2.0; // ERP 2:1
    const canvasAR = w / Math.max(h, 1);
    if (canvasAR >= targetAR) {
      const rh = h;
      const rw = rh * targetAR;
      const rx = (w - rw) * 0.5;
      return { x: rx, y: 0, w: rw, h: rh };
    }
    const rw = w;
    const rh = rw / targetAR;
    const ry = (h - rh) * 0.5;
    return { x: 0, y: ry, w: rw, h: rh };
  }

  function dirToLonLat(d) {
    return {
      lon: Math.atan2(d.x, d.z),
      lat: Math.asin(clamp(d.y, -1, 1)),
    };
  }

  function projectDirUnwrap(d, refX = null) {
    const { lon, lat } = dirToLonLat(d);
    const r = getUnwrapRect();
    let x = r.x + ((lon / (2 * Math.PI)) + 0.5) * r.w;
    const y = r.y + (0.5 - (lat / Math.PI)) * r.h;
    if (refX !== null) {
      while (x - refX > r.w / 2) x -= r.w;
      while (x - refX < -r.w / 2) x += r.w;
    }
    return { x, y, z: 1 };
  }

  function getStickerFrame(item) {
    const pose = poseOf(item);
    const basis = cameraBasis(
      Number(pose.yaw_deg || 0),
      Number(pose.pitch_deg || 0),
      Number(pose.rot_deg || pose.roll_deg || 0),
    );

    // A lens curve other than 1 (a Camera's shot, a sky Sticker, ADR 0042): its tangents are its lens's image radii.
    const curve = Number.isFinite(pose.curve) ? pose.curve : 1;
    if (curve !== 1) {
      const limit = lensFovLimit(curve);
      return {
        centerDir: basis.fwd,
        right: basis.right,
        up: basis.up,
        curve,
        tanX: lensRadius(clamp(Number(pose.hFOV_deg || 20), 0.1, limit) * 0.5 * DEG2RAD, curve),
        tanY: lensRadius(clamp(Number(pose.vFOV_deg || 20), 0.1, limit) * 0.5 * DEG2RAD, curve),
      };
    }
    const tanX = Math.tan(clamp(Number(pose.hFOV_deg || 20), 0.1, 179) * 0.5 * DEG2RAD);
    const tanY = Math.tan(clamp(Number(pose.vFOV_deg || 20), 0.1, 179) * 0.5 * DEG2RAD);
    return {
      centerDir: basis.fwd,
      right: basis.right,
      up: basis.up,
      tanX,
      tanY,
    };
  }

  function stickerDirFromFrame(frame, x, y) {
    if (frame.curve !== undefined) return lensAxesDirection({ fwd: frame.centerDir, right: frame.right, up: frame.up }, x, y, frame.curve);
    return norm(add(add(frame.centerDir, mul(frame.right, x)), mul(frame.up, y)));
  }

  function stickerCornersDir(item) {
    const frame = getStickerFrame(item);

    // Corner order is fixed to: top-left, top-right, bottom-right, bottom-left
    const cornersLocal = [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 },
    ];

    return cornersLocal.map(({ u, v }) => {
      return stickerDirFromFrame(frame, u * frame.tanX, v * frame.tanY);
    });
  }

  function stickerSampleDir(item, u, v) {
    const frame = getStickerFrame(item);

    const x = (u * 2 - 1) * frame.tanX;
    const y = (1 - v * 2) * frame.tanY;
    return stickerDirFromFrame(frame, x, y);
  }

  // rect ({ x, y, w, h }) of the 2D overlay in the three.js canvas's device pixels.
  function deviceRect(rect) {
    const sx = backgroundCanvas.width / Math.max(1, canvas.width);
    const sy = backgroundCanvas.height / Math.max(1, canvas.height);
    return { x: rect.x * sx, y: rect.y * sy, w: rect.w * sx, h: rect.h * sy };
  }

  function projectEditorPoints(points, frameShot = null, frameRect = null, unwrapRefU = null) {
    if (editor.mode === "frame") {
      const shot = frameShot || getActiveCutoutShot();
      if (!shot) return [];
      const rect = frameRect || getFrameViewRect(shot);
      return projectErpPointsToFrameRect(points, shot, rect);
    }
    return projectErpPointsToCurrentView(points, unwrapRefU);
  }

  function projectErpPointToEditor(point, refX = null, frameShot = null, frameRect = null, unwrapRefU = null) {
    if (!point) return null;
    if (editor.mode === "unwrap") {
      const projected = projectErpPointsToCurrentView([point], unwrapRefU);
      return projected[0] ? { x: projected[0].x, y: projected[0].y, z: 1 } : null;
    }
    const dir = erpPointToWorldDir(point);
    return dir ? projectSceneItemDir(dir, refX, frameShot, frameRect) : null;
  }

  function frameLocalPointToWorldDir(shot, point) {
    if (!shot || !point) return null;
    const u = Number(point.x || 0);
    const v = Number(point.y || 0);
    return stickerSampleDir(shot, u, v);
  }

  function erpPointToWorldDir(point) {
    if (!point) return null;
    const lon = (Number(point.u || 0) - 0.5) * (2 * Math.PI);
    const lat = (0.5 - Number(point.v || 0)) * Math.PI;
    const cp = Math.cos(lat);
    return vec3(cp * Math.sin(lon), Math.sin(lat), cp * Math.cos(lon));
  }

  function worldDirToFrameLocalPoint(shot, dir) {
    if (!shot || !dir) return null;
    const frame = getStickerFrame(shot);
    if (frame.curve !== undefined) {
      const film = lensAxesFilm({ fwd: frame.centerDir, right: frame.right, up: frame.up }, dir, frame.curve);
      return film && { x: (film.x / Math.max(1e-6, frame.tanX) + 1) * 0.5, y: (1 - (film.y / Math.max(1e-6, frame.tanY))) * 0.5 };
    }
    const cz = dot(dir, frame.centerDir);
    if (!Number.isFinite(cz) || cz <= 1e-6) return null;
    const x = dot(dir, frame.right) / cz;
    const y = dot(dir, frame.up) / cz;
    return {
      x: (x / Math.max(1e-6, frame.tanX) + 1) * 0.5,
      y: (1 - (y / Math.max(1e-6, frame.tanY))) * 0.5,
    };
  }

  function projectLassoPointsToCurrentView(points) {
    if (!Array.isArray(points) || points.length < 3) return [];
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      return points.map((pt) => ({
        x: r.x + (Number(pt.u || 0) * r.w),
        y: r.y + (Number(pt.v || 0) * r.h),
      }));
    }
    const projected = points.map((pt) => projectDir(erpPointToWorldDir(pt))).filter(Boolean);
    return projected.every((pt) => Number(pt.z || 0) > 0)
      ? projected.map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }))
      : [];
  }

  function projectErpPointsToCurrentView(points, unwrapRefU = null) {
    if (!Array.isArray(points) || points.length < 1) return [];
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      return points.map((pt) => {
        const u = ((Number(pt.u || 0) % 1) + 1) % 1;
        const uu = unwrapRefU == null ? u : (Number(unwrapRefU || 0) + shortestWrappedDelta(u, unwrapRefU));
        return {
          x: r.x + (uu * r.w),
          y: r.y + (Number(pt.v || 0) * r.h),
        };
      });
    }
    const projected = points.map((pt) => projectDir(erpPointToWorldDir(pt))).filter(Boolean);
    return projected.every((pt) => Number(pt.z || 0) > 0)
      ? projected.map((pt) => ({ x: Number(pt.x || 0), y: Number(pt.y || 0) }))
      : [];
  }

  function isProjectedPolygonContinuous(projected, maxJump = 160) {
    if (!Array.isArray(projected) || projected.length < 3) return false;
    for (let i = 0; i < projected.length; i += 1) {
      const a = projected[i];
      const b = projected[(i + 1) % projected.length];
      if (!a || !b) return false;
      if (!Number.isFinite(a.x) || !Number.isFinite(a.y) || !Number.isFinite(b.x) || !Number.isFinite(b.y)) return false;
      if (Math.hypot(Number(b.x) - Number(a.x), Number(b.y) - Number(a.y)) > maxJump) return false;
    }
    return true;
  }

  function projectErpLassoPointsToFrameRect(points, shot, rect) {
    if (!Array.isArray(points) || points.length < 3 || !shot || !rect) return [];
    const projected = [];
    for (const pt of points) {
      const dir = erpPointToWorldDir(pt);
      const local = worldDirToFrameLocalPoint(shot, dir);
      if (!local) return [];
      projected.push({
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
      });
    }
    return isProjectedPolygonContinuous(projected, Math.max(80, Math.max(rect.w, rect.h) * 0.75)) ? projected : [];
  }

  function projectErpPointsToFrameRect(points, shot, rect) {
    if (!Array.isArray(points) || points.length < 1 || !shot || !rect) return [];
    const projected = [];
    for (const pt of points) {
      const dir = erpPointToWorldDir(pt);
      const local = worldDirToFrameLocalPoint(shot, dir);
      if (!local) continue;
      projected.push({
        x: Number(rect.x || 0) + (Number(local.x || 0) * Number(rect.w || 0)),
        y: Number(rect.y || 0) + (Number(local.y || 0) * Number(rect.h || 0)),
      });
    }
    return projected;
  }

  function screenPos(evt) {
    const r = canvas.getBoundingClientRect();
    return {
      x: ((evt.clientX - r.left) / r.width) * canvas.width,
      y: ((evt.clientY - r.top) / r.height) * canvas.height,
    };
  }

  function screenPosCss(evt) {
    const r = canvas.getBoundingClientRect();
    return {
      x: Number(evt.clientX) - Number(r.left || 0),
      y: Number(evt.clientY) - Number(r.top || 0),
    };
  }

  function screenPosToErpPoint(pos, ts = performance.now()) {
    if (editor.mode === "unwrap") {
      const r = getUnwrapRect();
      const u = (pos.x - r.x) / Math.max(1, r.w);
      const v = (pos.y - r.y) / Math.max(1, r.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: ((u % 1) + 1) % 1,
        v: clamp(v, 0, 1),
        t: Number(ts || 0),
      };
    }
    const d = screenToWorldDir(pos.x, pos.y);
    const { lon, lat } = dirToLonLat(d);
    return {
      targetKind: "ERP_GLOBAL",
      u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
      v: clamp(0.5 - (lat / Math.PI), 0, 1),
      t: Number(ts || 0),
    };
  }

  // Convert a frame-view screen position to ERP UV coordinates via world direction.
  // This ensures strokes drawn in frame view are world-fixed (painting on the panorama,
  // not on the camera lens). Moving the frame after painting does not affect stroke position.
  function screenPosToFrameAsErpPoint(pos, shot, ts = performance.now()) {
    const rect = getFrameViewRect(shot);
    if (!rect) return null;
    const framePoint = {
      x: (Number(pos.x) - rect.x) / Math.max(1, rect.w),
      y: (Number(pos.y) - rect.y) / Math.max(1, rect.h),
    };
    // Out-of-frame: caller must handle null (do not project outside the frame's FOV)
    if (framePoint.x < 0 || framePoint.x > 1 || framePoint.y < 0 || framePoint.y > 1) return null;
    const dir = frameLocalPointToWorldDir(shot, framePoint);
    if (!dir) return null;
    const { lon, lat } = dirToLonLat(dir);
    return {
      targetKind: "ERP_GLOBAL",
      u: ((lon / (2 * Math.PI)) + 0.5 + 1) % 1,
      v: clamp(0.5 - (lat / Math.PI), 0, 1),
      t: Number(ts || 0),
    };
  }

  return {
    connect(api) {
      ({
        cameraShoots, getActiveCutoutShot, getFrameViewRect, poseOf, projectSceneItemDir, shortestWrappedDelta,
      } = api);
    },
    isErpCamera, currentViewCamera, currentViewProjection, projectDir, screenToWorldDir, getUnwrapRect,
    projectDirUnwrap, getStickerFrame, stickerDirFromFrame, stickerCornersDir, stickerSampleDir,
    stickerCornerOrderSanity, projectEditorPoints, projectErpPointToEditor, frameLocalPointToWorldDir,
    erpPointToWorldDir, worldDirToFrameLocalPoint, projectLassoPointsToCurrentView,
    projectErpLassoPointsToFrameRect, screenPos, screenPosCss, screenPosToErpPoint, screenPosToFrameAsErpPoint,
    deviceRect,
  };
}

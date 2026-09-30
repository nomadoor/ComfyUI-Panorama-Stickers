// State v2 (`state_json`) and `sticker_state` loading.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_state.py
// must produce the same result for the same input.
import { normalizePaintingState } from "./pano_paint_types.js";

export const STATE_VERSION = 2;
export const STICKER_STATE_KIND = "pano_sticker_state";
const PLACEMENTS = ["sky", "world"];
const FILE_STORAGES = ["input", "output", "temp"];

function isObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function number(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function positive(value, fallback) {
  const out = number(value, fallback);
  return out !== null && out > 0 ? out : fallback;
}

function clamp(value, lo, hi) {
  return Math.max(lo, Math.min(hi, value));
}

function frameNumber(value) {
  const out = number(value, null);
  return out === null ? null : Math.floor(out + 0.5);
}

function bool(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

function vec3(value) {
  if (!Array.isArray(value) || value.length !== 3) return null;
  const out = value.map((item) => number(item, null));
  return out.includes(null) ? null : out;
}

function cameraValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    position: vec3(src.position) || [0, 0, 0],
    yaw_deg: number(src.yaw_deg, 0),
    pitch_deg: clamp(number(src.pitch_deg, 0), -90, 90),
    roll_deg: number(src.roll_deg, 0),
    hFOV_deg: clamp(number(src.hFOV_deg, 90), 0.1, 179),
  };
}

function worldValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    position: vec3(src.position) || [0, 0, 0],
    yaw_deg: number(src.yaw_deg, 0),
    pitch_deg: clamp(number(src.pitch_deg, 0), -90, 90),
    roll_deg: number(src.roll_deg, 0),
    scale: positive(src.scale, 1),
  };
}

function skyValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    yaw_deg: number(src.yaw_deg, 0),
    pitch_deg: clamp(number(src.pitch_deg, 0), -90, 90),
    roll_deg: number(src.roll_deg, 0),
    hFOV_deg: clamp(number(src.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: clamp(number(src.vFOV_deg, 20), 0.1, 179),
  };
}

function opacityValue(raw) {
  return clamp(number(raw, 1), 0, 1);
}

function easing(raw) {
  if (raw === "auto" || raw === "hold") return raw;
  if (Array.isArray(raw) && raw.length === 4) {
    const values = raw.map((item) => number(item, null));
    if (!values.includes(null) && values[0] >= 0 && values[0] <= 1 && values[2] >= 0 && values[2] <= 1) {
      return values;
    }
  }
  return "auto";
}

function handles(raw) {
  if (!isObject(raw)) return null;
  const out = {};
  for (const key of ["in", "out"]) {
    const offset = vec3(raw[key]);
    if (offset) out[key] = offset;
  }
  return Object.keys(out).length ? out : null;
}

function keyframes(raw, valueFn, hasPosition) {
  const byFrame = new Map();
  for (const item of Array.isArray(raw) ? raw : []) {
    if (!isObject(item)) continue;
    const frame = frameNumber(item.frame);
    if (frame === null) continue;
    const key = { frame, value: valueFn(item.value), easing: easing(item.easing) };
    const keyHandles = hasPosition ? handles(item.handles) : null;
    if (keyHandles) key.handles = keyHandles;
    byFrame.set(frame, key);
  }
  return [...byFrame.keys()].sort((a, b) => a - b).map((frame) => byFrame.get(frame));
}

function group(raw, valueFn, hasPosition) {
  const src = isObject(raw) ? raw : {};
  return {
    value: valueFn(src.value),
    keyframes: keyframes(src.keyframes, valueFn, hasPosition),
  };
}

function clip(raw) {
  const src = isObject(raw) ? raw : {};
  const start = frameNumber(src.start);
  const clipIn = frameNumber(src.in);
  const duration = frameNumber(src.duration);
  return {
    start: start === null ? 0 : Math.max(0, start),
    in: clipIn === null ? 0 : Math.max(0, clipIn),
    duration: duration === null ? null : Math.max(1, duration),
  };
}

function crop(raw) {
  const src = isObject(raw) ? raw : {};
  const x0 = clamp(number(src.x0, 0), 0, 1);
  const y0 = clamp(number(src.y0, 0), 0, 1);
  const x1 = clamp(number(src.x1, 1), 0, 1);
  const y1 = clamp(number(src.y1, 1), 0, 1);
  return { x0: Math.min(x0, x1), y0: Math.min(y0, y1), x1: Math.max(x0, x1), y1: Math.max(y0, y1) };
}

function source(raw) {
  if (!isObject(raw)) return null;
  if (raw.kind === "port") return { kind: "port" };
  if (raw.kind !== "file") return null;
  if (typeof raw.filename === "string" && raw.filename.trim()) {
    // Same rules as the v1 migration, so a migrated source reads back unchanged.
    const storage = typeof raw.storage === "string" ? raw.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: raw.filename.trim(),
      subfolder: typeof raw.subfolder === "string" ? raw.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: FILE_STORAGES.includes(storage) ? storage : "input",
    };
  }
  if (typeof raw.data_url === "string" && raw.data_url.startsWith("data:image")) {
    return { kind: "file", data_url: raw.data_url };
  }
  return null;
}

function sticker(raw) {
  const src = source(raw.source);
  if (!src) return null;
  const placement = PLACEMENTS.includes(raw.placement) ? raw.placement : "sky";
  const world = placement === "world";
  const out = {
    id: raw.id,
    placement,
    source: src,
    clip: clip(raw.clip),
    visible: bool(raw.visible, true),
    locked: bool(raw.locked, false),
    crop: crop(raw.crop),
    transform: group(raw.transform, world ? worldValue : skyValue, world),
    opacity: group(raw.opacity, opacityValue, false),
  };
  if (!world) out.z_index = frameNumber(raw.z_index) ?? 0;
  return out;
}

function stickers(raw) {
  const out = [];
  let hasPort = false;
  for (const item of Array.isArray(raw) ? raw : []) {
    const next = isObject(item) ? sticker(item) : null;
    if (!next) continue;
    if (next.source.kind === "port") {
      if (hasPort) continue;
      hasPort = true;
    }
    out.push(next);
  }
  const used = new Set();
  for (const item of out) {
    if (typeof item.id === "string" && item.id && !used.has(item.id)) used.add(item.id);
    else item.id = null;
  }
  let n = 1;
  for (const item of out) {
    if (item.id !== null) continue;
    while (used.has(`sticker_${n}`)) n += 1;
    item.id = `sticker_${n}`;
    used.add(item.id);
  }
  return out;
}

function normalizeV2(raw) {
  const timeline = isObject(raw.timeline) ? raw.timeline : {};
  const camera = isObject(raw.camera) ? raw.camera : {};
  const scene = isObject(raw.scene) ? raw.scene : {};
  const length = frameNumber(timeline.length);
  return {
    version: STATE_VERSION,
    timeline: {
      fps: positive(timeline.fps, 24),
      length: length !== null && length >= 1 ? length : null,
    },
    camera: {
      aspect: positive(camera.aspect, 1),
      transform: group(camera.transform, cameraValue, true),
    },
    scene: {
      clip: clip(scene.clip),
      transform: group(scene.transform, worldValue, true),
    },
    stickers: stickers(raw.stickers),
    painting: normalizePaintingState(raw.painting),
    painting_layer: isObject(raw.painting_layer) ? structuredClone(raw.painting_layer) : null,
  };
}

function v1Source(item, assets) {
  if (item.source_kind === "external_image") return { kind: "port" };
  const asset = typeof item.asset_id === "string" && Object.hasOwn(assets, item.asset_id) ? assets[item.asset_id] : null;
  if (!isObject(asset)) return null;
  const assetType = String(asset.type || "").trim().toLowerCase();
  if (assetType === "comfy_image") {
    return {
      kind: "file",
      filename: String(asset.filename || "").trim(),
      subfolder: String(asset.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
      storage: String(asset.storage || "input").trim().toLowerCase(),
    };
  }
  if (assetType === "dataurl") return { kind: "file", data_url: asset.value };
  return null;
}

function v1Camera(shots) {
  const shot = Array.isArray(shots) && shots.length ? shots[0] : null;
  if (!isObject(shot)) return {};
  const hFov = clamp(number(shot.hFOV_deg, 90), 1, 179);
  const vFov = clamp(number(shot.vFOV_deg, 60), 1, 179);
  const deg2rad = Math.PI / 180;
  return {
    aspect: Math.tan(hFov * deg2rad * 0.5) / Math.tan(vFov * deg2rad * 0.5),
    transform: {
      value: {
        yaw_deg: shot.yaw_deg,
        pitch_deg: shot.pitch_deg,
        roll_deg: shot.roll_deg,
        hFOV_deg: hFov,
      },
    },
  };
}

function migrateV1(raw) {
  const assets = isObject(raw.assets) ? raw.assets : {};
  const v1Stickers = Array.isArray(raw.stickers) ? raw.stickers.filter(isObject) : [];
  v1Stickers.sort((a, b) => number(a.z_index, 0) - number(b.z_index, 0));
  return normalizeV2({
    camera: v1Camera(raw.shots),
    stickers: v1Stickers.map((item) => ({
      id: item.id,
      placement: "sky",
      source: v1Source(item, assets),
      visible: item.visible,
      locked: item.locked,
      crop: item.crop,
      z_index: item.z_index,
      transform: {
        value: {
          yaw_deg: item.yaw_deg,
          pitch_deg: item.pitch_deg,
          roll_deg: item.rot_deg,
          hFOV_deg: item.hFOV_deg,
          vFOV_deg: item.vFOV_deg,
        },
      },
    })),
    painting: raw.painting,
    painting_layer: raw.painting_layer,
  });
}

// Reads `state_json` (text or parsed object) of version 1 or 2 as a normalized v2 state.
export function loadSceneState(raw) {
  if (raw == null || (typeof raw === "string" && !raw.trim())) return normalizeV2({});
  let parsed = raw;
  if (typeof raw === "string") {
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = null;
    }
  }
  if (!isObject(parsed)) throw new Error("state_json is not a JSON object.");
  const version = Object.hasOwn(parsed, "version") ? parsed.version : 1;
  if (version !== 1 && version !== 2) {
    throw new Error(`Unsupported state_json version ${JSON.stringify(version)}; supported versions are 1 and 2.`);
  }
  return version === 1 ? migrateV1(parsed) : normalizeV2(parsed);
}

function rebaseGroup(src, rebase, anchor, newAnchor) {
  return {
    value: src.value,
    keyframes: src.keyframes.map((key) => ({ ...key, frame: rebase(anchor + key.frame) - newAnchor })),
  };
}

// Rounds the clip's Timeline events (start, content anchor start - in, end) and rebuilds in and duration from them.
function rebaseClip(src, rebase) {
  const start = rebase(src.start);
  const anchor = rebase(src.start - src.in);
  const duration = src.duration === null ? null : rebase(src.start + src.duration) - start;
  return { clip: { start, in: start - anchor, duration }, anchor: src.start - src.in, newAnchor: anchor };
}

// Rescales every stored frame of a loaded state from its timeline.fps to fps. Every Timeline event
// (Keyframe, Clip range start and end, content anchor) rounds to the nearest frame of the new fps,
// so it moves by at most half a new frame and events at one time stay together.
export function rebaseSceneState(state, fps) {
  if (positive(fps, null) === null) {
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(fps)}; fps must be a positive number.`);
  }
  const ratio = fps / state.timeline.fps;
  const rebase = (frame) => frameNumber(frame * ratio);
  const { length } = state.timeline;
  const scene = rebaseClip(state.scene.clip, rebase);
  return normalizeV2({
    timeline: { fps, length: length === null ? null : Math.max(1, rebase(length)) },
    camera: { aspect: state.camera.aspect, transform: rebaseGroup(state.camera.transform, rebase, 0, 0) },
    scene: { clip: scene.clip, transform: rebaseGroup(state.scene.transform, rebase, scene.anchor, scene.newAnchor) },
    stickers: state.stickers.map((item) => {
      const { clip, anchor, newAnchor } = rebaseClip(item.clip, rebase);
      return {
        ...item,
        clip,
        transform: rebaseGroup(item.transform, rebase, anchor, newAnchor),
        opacity: rebaseGroup(item.opacity, rebase, anchor, newAnchor),
      };
    }),
    painting: state.painting,
    painting_layer: state.painting_layer,
  });
}

function wrapYawDeg(value) {
  return ((((value + 180) % 360) + 360) % 360) - 180;
}

function v1PoseNumber(value) {
  if (typeof value === "string" && !value.trim()) return NaN;
  return typeof value === "number" || typeof value === "string" ? Number(value) : NaN;
}

function v1StickerStateCamera(pose) {
  if (!isObject(pose)) return null;
  const yaw = v1PoseNumber(pose.yaw_deg);
  const pitch = v1PoseNumber(pose.pitch_deg);
  const roll = v1PoseNumber(pose.roll_deg);
  const hFov = v1PoseNumber(pose.hFOV_deg);
  if (![yaw, pitch, roll, hFov].every(Number.isFinite)) return null;
  return cameraValue({
    yaw_deg: wrapYawDeg(yaw),
    pitch_deg: clamp(pitch, -89.9, 89.9),
    roll_deg: roll,
    hFOV_deg: clamp(hFov, 0.1, 179),
  });
}

// Reads `sticker_state` v1 or v2 as a normalized v2 sticker_state.
// Returns null when the text is not a sticker_state, which callers ignore as before.
export function loadStickerState(text) {
  if (typeof text !== "string" || !text.trim()) return null;
  let raw;
  try {
    raw = JSON.parse(text);
  } catch {
    return null;
  }
  if (!isObject(raw) || raw.kind !== STICKER_STATE_KIND) return null;
  const version = raw.version;
  let camera;
  let sourceAspect;
  let fps;
  if (version === 1 || version === "1") {
    const value = v1StickerStateCamera(raw.pose);
    if (!value) return null;
    camera = [{ frame: 0, value, easing: "auto" }];
    const aspect = v1PoseNumber(raw.source_aspect);
    sourceAspect = Number.isFinite(aspect) && aspect > 0 ? aspect : null;
    fps = 24;
  } else if (version === 2) {
    camera = keyframes(raw.camera, cameraValue, true);
    if (!camera.length) camera = [{ frame: 0, value: cameraValue(null), easing: "auto" }];
    sourceAspect = positive(raw.source_aspect, null);
    fps = positive(raw.fps, 24);
  } else {
    throw new Error(`Unsupported sticker_state version ${JSON.stringify(version)}; supported versions are 1 and 2.`);
  }
  return {
    kind: STICKER_STATE_KIND,
    version: STATE_VERSION,
    fps,
    camera,
    source_aspect: sourceAspect,
  };
}

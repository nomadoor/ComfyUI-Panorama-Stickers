// State v2 (`state_json`) and `sticker_state` loading.
// The contract is documented in docs/scene-state-v2.md. comfyui_pano_suite/core/scene_state.py
// must produce the same result for the same input.
import { LENS_CURVE_DEFAULT, LENS_CURVE_MAX, LENS_CURVE_MIN } from "./pano_lens.js";
import { normalizePaintingState } from "./pano_paint_types.js";

export const STATE_VERSION = 2;
export const STICKER_STATE_KIND = "pano_sticker_state";
const PLACEMENTS = ["sky", "world"];
// How the Camera shoots; the first is the default of a stored Camera that does not say.
const PROJECTIONS = ["perspective", "erp"];
// The spans a Panorama (`erp`) Camera shoots; the first is the default.
export const ERP_RANGES = Object.freeze([360, 180]);
// The Camera a state without one (`camera` missing, null or not an object) reads as (ADR 0048): Panorama at the
// World origin, which shoots what "no Camera" shot before. core/scene_state.py holds the same values;
// tests/fixtures/scene_state/camera_default.json holds the two together.
const DEFAULT_CAMERA = Object.freeze({
  aspect: 16 / 9,
  projection: "erp",
  erp_range: 360,
  visible: true,
  locked: false,
  position: { value: [0, 0, 0] },
  rotation: { value: { yaw_deg: 0, pitch_deg: 0, roll_deg: 0 } },
  fov: { value: 90 },
  curve: { value: 1 },
});
// The ground height (World y) a state without its own `ground` reads as, when no upstream layer has one (ADR 0046).
export const GROUND_DEFAULT = -1.6;
const FILE_STORAGES = ["input", "output", "temp"];
// ease-in-out, the Easing of a Keyframe without a valid one.
export const DEFAULT_EASING = [0.42, 0, 0.58, 1];
// The range of `timeline.fps` and the largest `timeline.length` (Timeline frames) a state keeps.
export const TIMELINE_FPS_MIN = 1;
export const TIMELINE_FPS_MAX = 1000;
// The largest Clip range edge and Keyframe frame (either sign) a state keeps: about 2.8 hours at
// 1000 fps. A length is one of these frames, so a rebase to a higher fps does not cut it short.
export const TIMELINE_FRAME_MAX = 10000000;
export const TIMELINE_LENGTH_MAX = TIMELINE_FRAME_MAX;
// A Camera's aspect is held to 1/CAMERA_ASPECT_LIMIT..CAMERA_ASPECT_LIMIT: 2 : 4096, the thinnest frame the output
// (at most 4096 on its long side, at least 2 on its short one) can take, so a thinner one shoots the same.
export const CAMERA_ASPECT_LIMIT = 2048;
// The largest Sticker number (`sticker_<n>`) the `next_sticker_id` counter keeps: JS integers are exact up to here.
const STICKER_NUMBER_MAX = Number.MAX_SAFE_INTEGER;
// At most 16 digits (past STICKER_NUMBER_MAX): a longer number is not counted, as in scene_state.py.
const STICKER_NUMBER = /^sticker_([0-9]{1,16})$/;

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

// A stored Clip range edge or Keyframe frame, within ±TIMELINE_FRAME_MAX.
function eventFrame(value) {
  const out = frameNumber(value);
  return out === null ? null : clamp(out, -TIMELINE_FRAME_MAX, TIMELINE_FRAME_MAX);
}

// A Timeline fps brought into range, or null when it is not a positive number.
export function timelineFps(value) {
  const out = positive(value, null);
  return out === null ? null : clamp(out, TIMELINE_FPS_MIN, TIMELINE_FPS_MAX);
}

// A `timeline.length` rounded to a frame and brought under TIMELINE_LENGTH_MAX, or null below 1.
export function timelineLength(value) {
  const out = frameNumber(value);
  return out !== null && out >= 1 ? Math.min(out, TIMELINE_LENGTH_MAX) : null;
}

function bool(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

function vec3(value) {
  if (!Array.isArray(value) || value.length !== 3) return null;
  const out = value.map((item) => number(item, null));
  return out.includes(null) ? null : out;
}

function positionValue(raw) {
  return vec3(raw) || [0, 0, 0];
}

function rotationValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    yaw_deg: number(src.yaw_deg, 0),
    pitch_deg: clamp(number(src.pitch_deg, 0), -90, 90),
    roll_deg: number(src.roll_deg, 0),
  };
}

// A Camera's hFOV keeps up to 360 (a fisheye's); the evaluated value is held under the limit of its lens curve
// (pano_scene_eval.js, pano_lens.js lensFovLimit).
function fovValue(raw) {
  return clamp(number(raw, 90), 0.1, 360);
}

// The Camera's lens curve κ (ADR 0042).
function curveValue(raw) {
  return clamp(number(raw, LENS_CURVE_DEFAULT), LENS_CURVE_MIN, LENS_CURVE_MAX);
}

function scaleValue(raw) {
  return positive(raw, 1);
}

function directionValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    yaw_deg: number(src.yaw_deg, 0),
    pitch_deg: clamp(number(src.pitch_deg, 0), -90, 90),
  };
}

function rollValue(raw) {
  return number(raw, 0);
}

// A sky Sticker's size keeps up to 360, as its lens curve allows (ADR 0042); the evaluated one is held under the
// limit of its curve (pano_scene_eval.js).
function sizeValue(raw) {
  const src = isObject(raw) ? raw : {};
  return {
    hFOV_deg: clamp(number(src.hFOV_deg, 20), 0.1, 360),
    vFOV_deg: clamp(number(src.vFOV_deg, 20), 0.1, 360),
  };
}

// A world Sticker's lens (ADR 0042): the curve κ and the hFOV of the sphere patch it is.
function lensValue(raw) {
  const src = isObject(raw) ? raw : {};
  return { curve: curveValue(src.curve), hFOV_deg: clamp(number(src.hFOV_deg, 90), 0.1, 360) };
}

function opacityValue(raw) {
  return clamp(number(raw, 1), 0, 1);
}

// The Lanes of each owner, in the order they are stored.
export const CAMERA_LANES = [["position", positionValue], ["rotation", rotationValue], ["fov", fovValue], ["curve", curveValue]];
export const SCENE_LANES = [["position", positionValue], ["rotation", rotationValue], ["scale", scaleValue]];
export const SKY_STICKER_LANES = [["direction", directionValue], ["roll", rollValue], ["size", sizeValue], ["opacity", opacityValue], ["curve", curveValue]];
export const WORLD_STICKER_LANES = [...SCENE_LANES, ["opacity", opacityValue]];
// A world Sticker's `lens` Lane, which only Pose handoff adds: a Sticker without it has none (a flat plane).
export const WORLD_LENS_LANE = ["lens", lensValue];

// The Lanes a Sticker has: a world Sticker's `lens` only when it has one.
export function stickerLanes(sticker) {
  if (sticker.placement !== "world") return SKY_STICKER_LANES;
  return sticker.lens ? [...WORLD_STICKER_LANES, WORLD_LENS_LANE] : WORLD_STICKER_LANES;
}

function easing(raw) {
  if (raw === "auto" || raw === "hold") return raw;
  if (Array.isArray(raw) && raw.length === 4) {
    const values = raw.map((item) => number(item, null));
    if (values.every((value) => value !== null && value >= 0 && value <= 1)) return values;
  }
  return [...DEFAULT_EASING];
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

function keyframes(raw, valueFn, hasHandles) {
  const byFrame = new Map();
  for (const item of Array.isArray(raw) ? raw : []) {
    if (!isObject(item)) continue;
    const frame = eventFrame(item.frame);
    if (frame === null) continue;
    const key = { frame, value: valueFn(item.value), easing: easing(item.easing) };
    const keyHandles = hasHandles ? handles(item.handles) : null;
    if (keyHandles) key.handles = keyHandles;
    byFrame.set(frame, key);
  }
  return [...byFrame.keys()].sort((a, b) => a - b).map((frame) => byFrame.get(frame));
}

// The normalized Lanes of an owner; only position Keyframes keep Motion path handles.
function lanes(raw, list) {
  const out = {};
  for (const [name, valueFn] of list) {
    const lane = isObject(raw[name]) ? raw[name] : {};
    out[name] = { value: valueFn(lane.value), keyframes: keyframes(lane.keyframes, valueFn, name === "position") };
  }
  return out;
}

function clip(raw) {
  const src = isObject(raw) ? raw : {};
  const start = eventFrame(src.start);
  const clipIn = eventFrame(src.in);
  const duration = eventFrame(src.duration);
  return {
    start: start === null ? 0 : Math.max(0, start),
    in: clipIn === null ? 0 : Math.max(0, clipIn),
    duration: duration === null ? null : Math.max(1, duration),
  };
}

// Whether a Clip range is the default one: the whole Timeline from the content's first frame.
export function defaultClip(value) {
  return value.start === 0 && value.in === 0 && value.duration === null;
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

// The extensions of a 3D file, the ones ComfyUI's Load3D accepts (docs/scene-state-v2.md "3D ファイルの `file` の
// Source"; scene_state.py reads the same table from tests/fixtures/scene_state/file_3d_formats.json).
export const FILE_3D_EXTENSIONS = Object.freeze([".gltf", ".glb", ".obj", ".fbx", ".stl", ".spz", ".splat", ".ply", ".ksplat"]);

// Whether a file name ends in a 3D file's extension (any case). The file is not opened.
export function is3dFileName(name) {
  const lower = String(name ?? "").toLowerCase();
  const dot = lower.lastIndexOf(".");
  return dot >= 0 && FILE_3D_EXTENSIONS.includes(lower.slice(dot));
}

// Whether a Source is a 3D file: a `file` Source whose filename has a 3D file's extension. Any other file
// Source, and an embedded data URL, is an image.
export function is3dFileSource(src) {
  return src?.kind === "file" && typeof src.filename === "string" && is3dFileName(src.filename);
}

// A 3D file's glTF animation (ADR 0043, docs/scene-state-v2.md): the clip by name (null: the first clip) and the
// speed, 0.1 to 10 (a number out of range is brought into it, anything else is the default). null without one, and
// for the default one, which is the same as none (scene_state.py reads it so), so loading what was saved is stable.
export const ANIMATION_SPEED_MIN = 0.1;
export const ANIMATION_SPEED_MAX = 10;
export const ANIMATION_DEFAULT = Object.freeze({ clip: null, speed: 1 });

export function animationValue(raw) {
  if (!isObject(raw)) return null;
  const speed = number(raw.speed, null);
  const value = {
    clip: typeof raw.clip === "string" ? raw.clip : null,
    speed: speed === null ? ANIMATION_DEFAULT.speed : clamp(speed, ANIMATION_SPEED_MIN, ANIMATION_SPEED_MAX),
  };
  return defaultAnimation(value) ? null : value;
}

// Whether an animation is the default one, which the text leaves out.
function defaultAnimation(value) {
  return value.clip === ANIMATION_DEFAULT.clip && value.speed === ANIMATION_DEFAULT.speed;
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
    ...lanes(raw, world ? WORLD_STICKER_LANES : SKY_STICKER_LANES),
  };
  if (world && isObject(raw.lens)) Object.assign(out, lanes(raw, [WORLD_LENS_LANE]));
  // A 3D file's animation: a `file` Source of a 3D file, or the port Sticker's 3D media.
  const animation = is3dFileSource(src) || src.kind === "port" ? animationValue(raw.animation) : null;
  if (animation) out.animation = animation;
  if (!world) out.z_index = frameNumber(raw.z_index) ?? 0;
  if (src.kind === "port") out.handoff_overrides = laneNames(raw.handoff_overrides, placement);
  return out;
}

// The names in `raw` of the Lanes a Sticker of `placement` has, once each and in Lane order.
function laneNames(raw, placement) {
  const names = Array.isArray(raw) ? raw : [];
  return (placement === "world" ? WORLD_STICKER_LANES : SKY_STICKER_LANES).map(([name]) => name).filter((name) => names.includes(name));
}

// The Stickers and the `next_sticker_id` counter after them.
function stickers(raw, rawNext) {
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
  // A Sticker without a valid id takes the next number of the counter, so no id is used twice.
  let n = BigInt(nextStickerNumber(rawNext, out));
  for (const item of out) {
    if (item.id !== null) continue;
    n = freeStickerNumber(used, n);
    item.id = `sticker_${n}`;
    n += 1n;
  }
  return { stickers: out, next: stickerCounter(n) };
}

// The first number from n (a BigInt) whose `sticker_<n>` id is not in `used`. Ids past STICKER_NUMBER_MAX are not
// counted, so the counter may reach one of them; the numbers count on past it exactly, as Python's integers do
// (a double would stop at 2^53 and never pass an id in use there).
export function freeStickerNumber(used, n) {
  let out = BigInt(n);
  while (used.has(`sticker_${out}`)) out += 1n;
  return out;
}

// The `next_sticker_id` for a number n (a BigInt): n, at most STICKER_NUMBER_MAX.
export function stickerCounter(n) {
  return Number(n < BigInt(STICKER_NUMBER_MAX) ? n : BigInt(STICKER_NUMBER_MAX));
}

function stickerNumber(id) {
  const match = typeof id === "string" ? STICKER_NUMBER.exec(id) : null;
  const number = match ? Number(match[1]) : 0;
  return number < STICKER_NUMBER_MAX ? number : 0;
}

// The counter a state needs at least: one past the largest `sticker_<n>` among its Stickers.
function leastStickerNumber(list) {
  return list.reduce((value, item) => Math.max(value, stickerNumber(item.id)), 0) + 1;
}

// The stored counter, at least leastStickerNumber().
function nextStickerNumber(raw, list) {
  const stored = frameNumber(raw);
  const least = leastStickerNumber(list);
  return clamp(stored === null ? least : Math.max(stored, least), 1, STICKER_NUMBER_MAX);
}

// A stored `camera.aspect`: 1 when it is not a positive number, else held to the CAMERA_ASPECT_LIMIT range.
export function cameraAspect(value) {
  return clamp(positive(value, 1), 1 / CAMERA_ASPECT_LIMIT, CAMERA_ASPECT_LIMIT);
}

// A stored `camera.erp_range`: 180 or 360 as a JSON number, else 360.
function erpRange(value) {
  return ERP_RANGES.includes(value) ? value : ERP_RANGES[0];
}

// The Camera: the state always has one (ADR 0048), and `camera` missing, null or not an object reads as
// DEFAULT_CAMERA. The missing fields of a stored one take the field defaults, which keep how it shot.
function camera(raw) {
  const source = isObject(raw) ? raw : DEFAULT_CAMERA;
  const projection = PROJECTIONS.includes(source.projection) ? source.projection : PROJECTIONS[0];
  return {
    aspect: cameraAspect(source.aspect),
    projection,
    erp_range: erpRange(source.erp_range),
    visible: bool(source.visible, true),
    locked: bool(source.locked, false),
    ...lanes(source, CAMERA_LANES),
  };
}

// The default Camera as a loaded state holds it.
export function defaultCamera() {
  return camera(null);
}

// `ground` as normalizeV2 keeps it: { ground } for a finite JSON number, else {} (missing).
function ground(raw) {
  const value = number(raw, null);
  return value === null ? {} : { ground: value };
}

// The ground height a loaded state reads as (ADR 0046): its own `ground`, else that of the most downstream of
// `upstreamStates` (the states of the upstream layers, from the farthest upstream) that has one, else GROUND_DEFAULT.
export function sceneGround(state, upstreamStates = []) {
  for (const owner of [state, ...[...upstreamStates].reverse()]) {
    if (Object.hasOwn(owner, "ground")) return owner.ground;
  }
  return GROUND_DEFAULT;
}

// A non-empty string, or null.
function text(value) {
  return typeof value === "string" && value ? value : null;
}

// The items without those whose key comes again later in the list.
function lastBy(items, key) {
  const last = new Map(items.map((item, index) => [key(item), index]));
  return items.filter((item, index) => last.get(key(item)) === index);
}

// An upstream Sticker's overridden fields, or null without any. An invalid field is left out (inherited).
function stickerOverride(raw) {
  if (!isObject(raw) || text(raw.id) === null || !PLACEMENTS.includes(raw.placement)) return null;
  const world = raw.placement === "world";
  const fields = {};
  if (isObject(raw.clip)) fields.clip = clip(raw.clip);
  for (const name of ["visible", "locked"]) {
    if (typeof raw[name] === "boolean") fields[name] = raw[name];
  }
  if (isObject(raw.crop)) fields.crop = crop(raw.crop);
  Object.assign(fields, lanes(raw, (world ? WORLD_STICKER_LANES : SKY_STICKER_LANES).filter(([name]) => isObject(raw[name]))));
  const zIndex = world ? null : frameNumber(raw.z_index);
  if (zIndex !== null) fields.z_index = zIndex;
  return Object.keys(fields).length ? { id: raw.id, placement: raw.placement, ...fields } : null;
}

// The overrides of one upstream layer, or null when the record overrides nothing.
function upstreamRecord(raw) {
  const fps = isObject(raw) ? timelineFps(raw.fps) : null;
  // Without a valid fps the record's frames mean nothing, so it is dropped (inherit everything).
  if (fps === null || text(raw.layer) === null) return null;
  const deleted = Array.isArray(raw.deleted) ? [...new Set(raw.deleted.filter((item) => text(item) !== null))] : [];
  const overrides = (Array.isArray(raw.stickers) ? raw.stickers : []).map(stickerOverride).filter((item) => item !== null);
  const stickerOverrides = lastBy(overrides, (item) => item.id).filter((item) => !deleted.includes(item.id));
  const sceneRaw = isObject(raw.scene) ? raw.scene : {};
  const scene = {};
  if (typeof sceneRaw.visible === "boolean") scene.visible = sceneRaw.visible;
  if (isObject(sceneRaw.clip)) scene.clip = clip(sceneRaw.clip);
  const record = { layer: raw.layer, fps, deleted, stickers: stickerOverrides, scene };
  if (typeof raw.painting_visible === "boolean") record.painting_visible = raw.painting_visible;
  const empty = !deleted.length && !stickerOverrides.length && !Object.keys(scene).length && !("painting_visible" in record);
  return empty ? null : record;
}

function upstream(raw) {
  const records = (Array.isArray(raw) ? raw : []).map(upstreamRecord).filter((item) => item !== null);
  return lastBy(records, (item) => item.layer);
}

function normalizeV2(raw) {
  const timeline = isObject(raw.timeline) ? raw.timeline : {};
  const scene = isObject(raw.scene) ? raw.scene : {};
  const { stickers: stickerList, next } = stickers(raw.stickers, raw.next_sticker_id);
  return {
    version: STATE_VERSION,
    id: text(raw.id),
    timeline: {
      fps: timelineFps(timeline.fps) ?? 24,
      length: timelineLength(timeline.length),
    },
    camera: camera(raw.camera),
    scene: { clip: clip(scene.clip), visible: bool(scene.visible, true), ...lanes(scene, SCENE_LANES), ...sceneAnimation(scene) },
    stickers: stickerList,
    next_sticker_id: next,
    painting: normalizePaintingState(raw.painting),
    painting_layer: isObject(raw.painting_layer) ? structuredClone(raw.painting_layer) : null,
    painting_visible: bool(raw.painting_visible, true),
    ...ground(raw.ground),
    upstream: upstream(raw.upstream),
    background: background(raw.background),
  };
}

// The `scene` input's animation (ADR 0043), when it has one.
function sceneAnimation(raw) {
  const animation = animationValue(raw.animation);
  return animation ? { animation } : {};
}

// The node's own `bg_media` on the Timeline: its Clip range.
function background(raw) {
  return { clip: clip(isObject(raw) ? raw.clip : undefined) };
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

// The Cutout's shot as the Camera; a state without one (Stickers) gives null, which reads as the default Camera.
// The Cutout's first shot that is an object, as the legacy node's merge_state keeps its shots.
function v1Camera(shots) {
  const shot = (Array.isArray(shots) ? shots : []).find(isObject);
  if (!shot) return null;
  const hFov = clamp(number(shot.hFOV_deg, 90), 1, 179);
  const vFov = clamp(number(shot.vFOV_deg, 60), 1, 179);
  const deg2rad = Math.PI / 180;
  return {
    aspect: Math.tan(hFov * deg2rad * 0.5) / Math.tan(vFov * deg2rad * 0.5),
    rotation: { value: { yaw_deg: shot.yaw_deg, pitch_deg: shot.pitch_deg, roll_deg: shot.roll_deg } },
    fov: { value: hFov },
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
      direction: { value: { yaw_deg: item.yaw_deg, pitch_deg: item.pitch_deg } },
      roll: { value: item.rot_deg },
      size: { value: { hFOV_deg: item.hFOV_deg, vFOV_deg: item.vFOV_deg } },
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

// The fields the text of a state leaves out at their default values: added after states were saved
// without them, they would change the text of those states and miss the node's execution cache.
const TEXT_DEFAULTS = {
  state: { painting_visible: true },
  camera: { projection: PROJECTIONS[0], erp_range: ERP_RANGES[0], visible: true, locked: false },
  scene: { visible: true },
};

// A Lane without Keyframes at its default value, which the text leaves out.
function defaultLane(lane, value) {
  return !lane.keyframes.length && lane.value === value;
}

// Whether a loaded Camera is the default Camera, which the text leaves out (it reads back as it).
function isDefaultCamera(value) {
  return JSON.stringify(value) === JSON.stringify(defaultCamera());
}

// The Camera as its text keeps it: without the fields of TEXT_DEFAULTS.camera at their defaults, nor a lens curve
// at its default (added with ADR 0042).
function cameraText(camera) {
  const out = withoutDefaults(camera, TEXT_DEFAULTS.camera);
  if (defaultLane(camera.curve, LENS_CURVE_DEFAULT)) delete out.curve;
  return out;
}

function withoutDefaultAnimation(object) {
  if (!object.animation || !defaultAnimation(object.animation)) return object;
  const { animation, ...rest } = object;
  void animation;
  return rest;
}

function withoutDefaults(object, defaults) {
  return Object.fromEntries(Object.entries(object).filter(([key, value]) => !Object.hasOwn(defaults, key) || value !== defaults[key]));
}

// The `state_json` text of a loaded state, without the fields of TEXT_DEFAULTS at their defaults, and
// without an unset `id`, a `next_sticker_id` its Stickers give anyway, an empty `upstream` and empty
// `handoff_overrides`: the texts of states saved before these fields stay the same.
export function sceneStateText(state) {
  const out = withoutDefaults(state, TEXT_DEFAULTS.state);
  if (out.id === null) delete out.id;
  if (out.next_sticker_id === leastStickerNumber(state.stickers)) delete out.next_sticker_id;
  if (!out.upstream.length) delete out.upstream;
  if (defaultClip(out.background.clip)) delete out.background;
  // The default Camera is written as null, the text states without a Camera were saved with before it was always
  // there (ADR 0048), so that their texts stay the same; null reads back as the default Camera.
  out.camera = !state.camera || isDefaultCamera(state.camera) ? null : cameraText(state.camera);
  return JSON.stringify({
    ...out,
    scene: withoutDefaultAnimation(withoutDefaults(state.scene, TEXT_DEFAULTS.scene)),
    // A sky Sticker's lens curve at its default is left out (ADR 0042), as the Camera's, and so is a default
    // animation (ADR 0043).
    stickers: state.stickers.map((item) => Object.fromEntries(Object.entries(item).filter(([key, value]) => (key !== "handoff_overrides" || value.length)
      && !(key === "curve" && defaultLane(value, LENS_CURVE_DEFAULT)) && !(key === "animation" && defaultAnimation(value))))),
  });
}

function rebaseLanes(owner, list, rebase, anchor, newAnchor) {
  const out = {};
  for (const [name] of list) {
    out[name] = {
      value: owner[name].value,
      keyframes: owner[name].keyframes.map((key) => ({ ...key, frame: rebase(anchor + key.frame) - newAnchor })),
    };
  }
  return out;
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
export function rebaseSceneState(state, value) {
  const fps = timelineFps(value);
  if (fps === null) {
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(value)}; fps must be a positive number.`);
  }
  const ratio = fps / state.timeline.fps;
  const rebase = (frame) => frameNumber(frame * ratio);
  const { length } = state.timeline;
  const scene = rebaseClip(state.scene.clip, rebase);
  // Only the frames change: every other field (ids, the counter, painting, an animation, the `upstream` records,
  // which keep their own fps (docs/scene-state-v2.md "上流の上書き")) is carried over as it is.
  return normalizeV2({
    ...state,
    timeline: { fps, length: length === null ? null : Math.max(1, rebase(length)) },
    camera: state.camera === null ? null : { ...state.camera, ...rebaseLanes(state.camera, CAMERA_LANES, rebase, 0, 0) },
    scene: { ...state.scene, clip: scene.clip, ...rebaseLanes(state.scene, SCENE_LANES, rebase, scene.anchor, scene.newAnchor) },
    stickers: state.stickers.map((item) => {
      const { clip, anchor, newAnchor } = rebaseClip(item.clip, rebase);
      return { ...item, clip, ...rebaseLanes(item, stickerLanes(item), rebase, anchor, newAnchor) };
    }),
    background: { ...state.background, clip: rebaseClip(state.background.clip, rebase).clip },
  });
}

// Rescales the frames of a normalized `upstream` record from its fps to the layer's timeline.fps. Clip ranges
// follow rebaseSceneState. A Sticker override's Keyframes are relative to its Clip range origin (start - in): the
// overridden one when the override has a Clip range, else the layer Sticker's, which the record's editor saw
// rebased to the record fps as rebaseSceneState rebases it. Keyframes an editor at the layer fps or higher wrote
// back unchanged land on their layer frames exactly; from a lower fps they keep the rounding to that fps.
export function rebaseUpstreamRecord(record, layerState) {
  const { fps } = layerState.timeline;
  const ratio = fps / record.fps;
  const rebase = (frame) => frameNumber(frame * ratio);
  const origins = new Map(layerState.stickers.map((item) => [item.id, item.clip.start - item.clip.in]));
  const stickerOverrides = record.stickers.map((override) => {
    const list = (override.placement === "world" ? WORLD_STICKER_LANES : SKY_STICKER_LANES).filter(([name]) => Object.hasOwn(override, name));
    if (!Object.hasOwn(override, "clip")) {
      // An override of a Sticker the layer does not have is not applied; any origin will do.
      const origin = origins.get(override.id) ?? 0;
      // The origin as rebaseSceneState put it at the record fps.
      const editorOrigin = frameNumber(origin * (record.fps / fps));
      return { ...override, ...rebaseLanes(override, list, rebase, editorOrigin, origin) };
    }
    const { clip, anchor, newAnchor } = rebaseClip(override.clip, rebase);
    return { ...override, clip, ...rebaseLanes(override, list, rebase, anchor, newAnchor) };
  });
  const scene = Object.hasOwn(record.scene, "clip") ? { ...record.scene, clip: rebaseClip(record.scene.clip, rebase).clip } : record.scene;
  return upstreamRecord({ ...record, fps, stickers: stickerOverrides, scene });
}

function wrapYawDeg(value) {
  return ((((value + 180) % 360) + 360) % 360) - 180;
}

// A v1 number written as text: ASCII decimal without `_`, with ASCII whitespace around it (docs/scene-state-v2.md).
// Not Number()'s hex, octal and binary prefixes or its Infinity.
const V1_NUMBER_TEXT = /^[ \t\n\r\f\v]*[+-]?(?:[0-9]+\.?[0-9]*|\.[0-9]+)(?:[eE][+-]?[0-9]+)?[ \t\n\r\f\v]*$/;

function v1PoseNumber(value) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return NaN;
  return V1_NUMBER_TEXT.test(value) ? Number(value) : NaN;
}

// Each Camera Lane's Keyframes; an empty or invalid Lane is one Keyframe of its default value at frame 0.
function stickerStateCamera(raw) {
  const src = isObject(raw) ? raw : {};
  const out = {};
  for (const [name, valueFn] of CAMERA_LANES) {
    const keys = keyframes(src[name], valueFn, name === "position");
    out[name] = keys.length ? keys : [{ frame: 0, value: valueFn(null), easing: [...DEFAULT_EASING] }];
  }
  return out;
}

function v1StickerStateCamera(pose) {
  if (!isObject(pose)) return null;
  const yaw = v1PoseNumber(pose.yaw_deg);
  const pitch = v1PoseNumber(pose.pitch_deg);
  const roll = v1PoseNumber(pose.roll_deg);
  const hFov = v1PoseNumber(pose.hFOV_deg);
  if (![yaw, pitch, roll, hFov].every(Number.isFinite)) return null;
  return stickerStateCamera({
    rotation: [{ frame: 0, value: { yaw_deg: wrapYawDeg(yaw), pitch_deg: clamp(pitch, -89.9, 89.9), roll_deg: roll } }],
    fov: [{ frame: 0, value: clamp(hFov, 0.1, 179) }],
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
    camera = v1StickerStateCamera(raw.pose);
    if (!camera) return null;
    const aspect = v1PoseNumber(raw.source_aspect);
    sourceAspect = Number.isFinite(aspect) && aspect > 0 ? aspect : null;
    fps = 24;
  } else if (version === 2) {
    camera = stickerStateCamera(raw.camera);
    sourceAspect = positive(raw.source_aspect, null);
    fps = timelineFps(raw.fps) ?? 24;
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

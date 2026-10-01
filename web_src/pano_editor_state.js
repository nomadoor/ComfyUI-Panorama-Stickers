import { normalizePaintingState } from "./pano_paint_types.js";
import { wrapYaw } from "./pano_math.js";
import { normalizeCutoutShotItem } from "./pano_cutout_view_math.js";
import { evaluateLane, evaluateSticker } from "./pano_scene_eval.js";
import { loadSceneState } from "./pano_scene_state.js";
import { setLaneValue } from "./pano_timeline.js";

let parseStateJsonCache = { text: null, parsed: null };

export function normalizeCoverageValue(value) {
  return Number(value) === 180 ? 180 : 360;
}

function normalizeUiSettings(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  return {
    invert_view_x: !!source.invert_view_x,
    invert_view_y: !!source.invert_view_y,
  };
}

function makeDefaultState({
  outputPreset = 2048,
  backgroundColor = "#00ff00",
  coverage = 360,
  sharedUiSettings = null,
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: normalizeCoverageValue(coverage),
    bg_color: backgroundColor,
    output_preset: outputPreset,
    assets: {},
    stickers: [],
    shots: [],
    painting: normalizePaintingState(null),
    painting_layer: null,
    ui_settings: normalizeUiSettings(sharedUiSettings),
    active: { selected_sticker_id: null, selected_shot_id: null },
  };
}

function parseOutputPresetValue(value, fallback = 2048) {
  if (typeof value === "number" && Number.isFinite(value)) return Math.round(value);
  const text = String(value ?? "").trim();
  if (!text) return fallback;
  const head = text.includes("x") ? text.split("x", 1)[0].trim() : text;
  const number = Number(head);
  return Number.isFinite(number) ? Math.round(number) : fallback;
}

function cloneAssetMap(raw) {
  if (!raw || typeof raw !== "object") return {};
  const out = {};
  Object.entries(raw).forEach(([key, value]) => {
    out[key] = value && typeof value === "object" ? { ...value } : value;
  });
  return out;
}

function cloneStickerList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => {
    if (!item || typeof item !== "object") return item;
    const next = { ...item };
    if (next.crop && typeof next.crop === "object") next.crop = { ...next.crop };
    if (next.initial_pose && typeof next.initial_pose === "object") next.initial_pose = { ...next.initial_pose };
    next.visible = next.visible !== false;
    next.locked = next.locked === true;
    return next;
  });
}

function cloneShotList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw.map((item) => normalizeCutoutShotItem(item));
}

export function retainActiveCutoutShot(shots, selectedShotId) {
  const list = Array.isArray(shots) ? shots : [];
  if (list.length === 0) return { shots: [], selectedShotId: null };
  const selectedId = String(selectedShotId || "");
  const selected = list.find((shot) => String(shot?.id || "") === selectedId) || list[0];
  const retainedId = String(selected?.id || "") || null;
  return { shots: [selected], selectedShotId: retainedId };
}

export function parsePanoEditorState(text, options = {}) {
  const resolvedOptions = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...options,
  };
  const base = makeDefaultState(resolvedOptions);
  const trimmed = String(text || "").trim();
  if (!trimmed) return base;
  try {
    let parsed = null;
    if (parseStateJsonCache.text === trimmed) {
      parsed = parseStateJsonCache.parsed;
    } else {
      parsed = JSON.parse(trimmed);
      parseStateJsonCache = { text: trimmed, parsed };
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return base;
    const sharedUiSettings = resolvedOptions.sharedUiSettings && typeof resolvedOptions.sharedUiSettings === "object"
      ? resolvedOptions.sharedUiSettings
      : null;
    const merged = {
      ...base,
      ...parsed,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: cloneAssetMap(parsed.assets),
      stickers: cloneStickerList(parsed.stickers),
      shots: cloneShotList(parsed.shots),
      painting: normalizePaintingState(parsed.painting),
      painting_layer: parsed.painting_layer && typeof parsed.painting_layer === "object"
        ? parsed.painting_layer
        : null,
      ui_settings: normalizeUiSettings(parsed.ui_settings),
      active: parsed.active && typeof parsed.active === "object" ? { ...parsed.active } : { ...base.active },
    };
    if (sharedUiSettings) {
      merged.ui_settings = normalizeUiSettings({ ...merged.ui_settings, ...sharedUiSettings });
    }
    merged.output_preset = parseOutputPresetValue(
      resolvedOptions.outputPreset,
      Number(merged.output_preset || base.output_preset),
    );
    merged.bg_color = String(resolvedOptions.backgroundColor || merged.bg_color || base.bg_color);
    merged.coverage = normalizeCoverageValue(resolvedOptions.coverage);
    delete merged.editor_history;
    return merged;
  } catch {
    parseStateJsonCache = { text: trimmed, parsed: null };
    return base;
  }
}

export function makePanoEditorHistorySnapshot(state) {
  if (!state || typeof state !== "object") return state;
  const snapshot = JSON.parse(JSON.stringify(state));
  delete snapshot.editor_history;
  delete snapshot.painting_layer;
  return snapshot;
}

// PanoramaStickersNode works on state v2 itself: the editor's working state is the loadSceneState()
// result with the editor's session fields (coverage, bg_color, output_preset, ui_settings, active),
// which saving drops. The legacy node keeps working on its v1 state (parsePanoEditorState).
export function parseSceneEditorState(text, options = {}) {
  const { outputPreset = 2048, backgroundColor = "#00ff00", coverage = 360, sharedUiSettings = null, active } = options;
  let scene;
  try {
    scene = loadSceneState(text);
  } catch {
    scene = loadSceneState(null);
  }
  return {
    ...scene,
    coverage: normalizeCoverageValue(coverage),
    bg_color: backgroundColor,
    output_preset: parseOutputPresetValue(outputPreset),
    ui_settings: normalizeUiSettings(sharedUiSettings),
    active: { selected_sticker_id: null, selected_shot_id: null, ...active },
  };
}

// The editor moves, scales and turns Stickers in the v1 pose fields. These map them to the Lanes
// of a sky Sticker of state v2 at a Timeline frame, the values the evaluator gives there.
export function stickerPose(sticker, frame) {
  const value = evaluateSticker(sticker, frame);
  return { yaw_deg: value.yaw_deg, pitch_deg: value.pitch_deg, hFOV_deg: value.hFOV_deg, vFOV_deg: value.vFOV_deg, rot_deg: value.roll_deg };
}

// The Lane of each pose field of a sky Sticker.
const POSE_FIELD_LANES = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };

function pick(pose, fields) {
  return Object.fromEntries(fields.filter((field) => pose[field] !== undefined).map((field) => [field, pose[field]]));
}

// The fields of pose whose Lane has no Keyframes.
export function unkeyedPose(sticker, pose) {
  return Object.fromEntries(Object.entries(pose).filter(([field]) => !sticker[POSE_FIELD_LANES[field]].keyframes.length));
}

// An edit changes only the Lanes of the fields it has, each by the recording rule (setLaneValue).
export function setStickerPose(sticker, frame, pose) {
  const clipFrame = frame - (sticker.clip.start - sticker.clip.in);
  const direction = pick(pose, ["yaw_deg", "pitch_deg"]);
  const size = pick(pose, ["hFOV_deg", "vFOV_deg"]);
  if (Object.keys(direction).length) setLaneValue(sticker, "direction", clipFrame, direction);
  if (pose.rot_deg !== undefined) setLaneValue(sticker, "roll", clipFrame, pose.rot_deg);
  if (Object.keys(size).length) setLaneValue(sticker, "size", clipFrame, size);
}

const POSITION_FIELDS = ["position_x", "position_y", "position_z"];

// The Camera of state v2 at a Timeline frame, in the inspector's fields.
export function cameraFields(camera, frame) {
  const position = evaluateLane(camera, "position", frame);
  const rotation = evaluateLane(camera, "rotation", frame);
  return {
    ...Object.fromEntries(POSITION_FIELDS.map((field, axis) => [field, position[axis]])),
    yaw_deg: rotation.yaw_deg,
    pitch_deg: rotation.pitch_deg,
    roll_deg: rotation.roll_deg,
    hFOV_deg: evaluateLane(camera, "fov", frame),
  };
}

// An inspector edit of one Camera field at a Timeline frame, by the recording rule of its Lane.
export function setCameraField(camera, frame, field, value) {
  const axis = POSITION_FIELDS.indexOf(field);
  if (axis >= 0) {
    const position = evaluateLane(camera, "position", frame);
    position[axis] = value;
    setLaneValue(camera, "position", frame, position);
  } else if (field === "hFOV_deg") {
    setLaneValue(camera, "fov", frame, value);
  } else {
    setLaneValue(camera, "rotation", frame, { [field]: value });
  }
}

export function setStickerOpacity(sticker, frame, opacity) {
  setLaneValue(sticker, "opacity", frame - (sticker.clip.start - sticker.clip.in), opacity);
}

// The Source of an uploaded image (uploadStickerAssetFile).
export function fileSource(asset) {
  return { kind: "file", filename: asset.filename, subfolder: asset.subfolder, storage: asset.storage };
}

// The v1 asset of a file Source, which the editor's image loading (mediaAssetSource) reads.
export function sourceAsset(source) {
  if (source.data_url) return { type: "dataurl", value: source.data_url };
  return { type: "comfy_image", filename: source.filename, subfolder: source.subfolder, storage: source.storage };
}

// A sky Sticker over the whole Timeline with the pose in the editor's fields.
export function newSceneSticker(id, source, pose, zIndex) {
  return {
    id,
    placement: "sky",
    source,
    clip: { start: 0, in: 0, duration: null },
    visible: true,
    locked: false,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: pose.yaw_deg, pitch_deg: pose.pitch_deg }, keyframes: [] },
    roll: { value: pose.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: pose.hFOV_deg, vFOV_deg: pose.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: zIndex,
  };
}

// A copy of a sky Sticker under a new id, turned 8 degrees to the right like the legacy copy. Its
// Clip range, Keyframes and opacity come along. Only the static yaw wraps like the legacy copy's; the
// Keyframes keep their stored turns, so the copy moves the same way.
export function duplicateSceneSticker(sticker, id, zIndex) {
  const copy = structuredClone(sticker);
  copy.id = id;
  copy.z_index = zIndex;
  copy.direction.value.yaw_deg = wrapYaw(copy.direction.value.yaw_deg + 8);
  for (const key of copy.direction.keyframes) key.value.yaw_deg += 8;
  return copy;
}

export function sceneStickerLabel(sticker) {
  if (sticker.source.kind === "port") return "Sticker input";
  return sticker.source.filename || sticker.id;
}

// The editor's selection is not part of state v2. PanoramaStickersNode keeps it in a node property,
// which the prompt does not include, so selecting does not re-run the node.
export function editorActive(node) {
  return node?.__panoSceneStateV2 ? node.properties?.pano_editor_active : undefined;
}

export function setEditorActive(node, active) {
  if (!node?.__panoSceneStateV2) return;
  node.properties ??= {};
  node.properties.pano_editor_active = { ...active };
}

// The `state_json` text for the editor's working state: state v2 for PanoramaStickersNode, the
// working state itself (v1) for the legacy node.
export function editorStateText(node, state) {
  return JSON.stringify(node?.__panoSceneStateV2 ? loadSceneState(state) : state);
}

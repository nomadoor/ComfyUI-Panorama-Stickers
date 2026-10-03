import { normalizePaintingState } from "./pano_paint_types.js";
import { wrapYaw } from "./pano_math.js";
import { DEG2RAD } from "./pano_camera_math.js";
import { deriveVerticalFovDeg, normalizeCutoutShotItem } from "./pano_cutout_view_math.js";
import { evaluateCamera, evaluateLane, evaluateSticker } from "./pano_scene_eval.js";
import { defaultCamera, loadSceneState, rebaseSceneState, sceneStateText } from "./pano_scene_state.js";
import { laneNames, setLaneValue } from "./pano_timeline.js";

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

// The state an undo or redo step restores from a history snapshot. The snapshot leaves out painting_layer,
// which stays while the painting is the same: dropping it would upload the same layer again.
export function restoredHistoryState(current, snapshot) {
  const state = JSON.parse(snapshot);
  const paintingChanged = JSON.stringify(state.painting) !== JSON.stringify(current.painting);
  if (!paintingChanged) state.painting_layer = current.painting_layer;
  return { state, paintingChanged };
}

// Whether the painting needs its painting_layer uploaded again for a target of `width`x`height`. A change to
// the painting drops the layer (pano_editor.js invalidatePaintingLayerState). The counters at the start of
// the layer's revision start again with each editor session, so only its target size can make it stale.
export function paintingLayerNeedsSync(layer, { paintCount, maskCount, width, height, nodeId }) {
  if (paintCount <= 0 && maskCount <= 0) return false;
  if (!layer || typeof layer !== "object") return true;
  if (!String(layer.revision || "").endsWith(`:${width}x${height}`)) return true;
  if (paintCount > 0 && !layer.paint) return true;
  if (maskCount > 0 && !layer.mask) return true;
  // Layer files are named after the node, so a pasted or imported node still points at its source's files.
  if (paintCount > 0 && layer.paint.filename !== `pano_paint_${nodeId}.png`) return true;
  if (maskCount > 0 && layer.mask.filename !== `pano_mask_${nodeId}.png`) return true;
  return false;
}

// PanoramaStickersNode works on state v2 itself: the editor's working state is the loadSceneState()
// result with the editor's session fields (coverage, bg_color, output_preset, ui_settings, active),
// which saving drops. The legacy node keeps working on its v1 state (parsePanoEditorState).
// `fps` is the Timeline fps a video input sets, from the node's last run; the state is rebased to it.
// PanoramaCutoutNode works on its own state the same way (#77). Given `scene`, the state of the
// PANO_SCENE its last run shot, the working state is that Scene with the Cutout's Camera: the editor
// shows the Scene as Stickers made it and edits only the Camera. The Cutout's own state rides along in
// `cutout_state`, which editorStateText() saves with the Camera; the Scene is not saved (ADR 0025).
// Both are rebased to `fps`, the Scene's Timeline fps, so the Camera's Keyframes keep their seconds as
// the node reads them.
// With `camera` (the Cutout editor, which always shoots through a Camera) a state without a Camera
// is edited with the default one, as the node shoots it; `default_camera` marks it until the Camera
// is first edited (noteCameraEdit), so that
// editorStateText() saves the state without a Camera again while that Camera is left as it is.
export function parseSceneEditorState(text, options = {}) {
  const { outputPreset = 2048, backgroundColor = "#00ff00", coverage = 360, sharedUiSettings = null, active, fps = null, scene: shot = null, camera = false } = options;
  let scene;
  try {
    scene = loadSceneState(text);
  } catch {
    scene = loadSceneState(null);
  }
  if (fps && fps !== scene.timeline.fps) scene = rebaseSceneState(scene, fps);
  const defaulted = camera && scene.camera === null;
  if (defaulted) scene = { ...scene, camera: defaultCamera() };
  if (shot) {
    let shown = loadSceneState(shot);
    if (fps && fps !== shown.timeline.fps) shown = rebaseSceneState(shown, fps);
    scene = { ...shown, camera: scene.camera, cutout_state: scene };
  }
  return {
    ...scene,
    ...(defaulted ? { default_camera: true } : {}),
    coverage: normalizeCoverageValue(coverage),
    bg_color: backgroundColor,
    output_preset: parseOutputPresetValue(outputPreset),
    ui_settings: normalizeUiSettings(sharedUiSettings),
    active: { selected_sticker_id: null, selected_shot_id: null, ...active },
  };
}

// Sets the Timeline fps of a working state v2, rebasing its times (rebaseSceneState) so they keep their
// seconds. The objects stay the ones the editor holds; a Sticker still uploading is left as it is.
export function setTimelineFps(state, fps) {
  // A Cutout showing a PANO_SCENE saves its own state, which keeps the same fps (#77).
  if (state.cutout_state) state.cutout_state = rebaseSceneState(state.cutout_state, fps);
  const rebased = rebaseSceneState(state, fps);
  const stickers = new Map(rebased.stickers.map((item) => [item.id, item]));
  state.timeline = rebased.timeline;
  const owners = [[state.camera, rebased.camera], [state.scene, rebased.scene], ...state.stickers.map((item) => [item, stickers.get(item.id)])];
  for (const [owner, next] of owners) {
    // A state without a Camera has none to rebase. Only a Sticker still uploading has no match; it was
    // just added with a default Clip range and no Keyframes.
    if (!next) continue;
    if (owner.clip) owner.clip = next.clip;
    for (const name of laneNames(owner)) owner[name].keyframes = next[name].keyframes;
  }
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

// --- The Cutout Camera (#77). The Cutout editor moves its Camera through the shot fields it has always
// edited (yaw_deg, pitch_deg, roll_deg, hFOV_deg, vFOV_deg), and with a PANO_SCENE also its position.
// PanoramaCutoutNode keeps them in the Camera of state v2: cameraShot() is the Camera at a Timeline
// frame as a shot, by the evaluator the node uses, and setCameraShot() writes an edited shot back.

export const CAMERA_SHOT_ID = "camera";

export function cameraShot(camera, frame) {
  const value = evaluateCamera(camera, frame);
  return normalizeCutoutShotItem({
    id: CAMERA_SHOT_ID,
    label: "Camera",
    yaw_deg: value.yaw_deg,
    pitch_deg: value.pitch_deg,
    roll_deg: value.roll_deg,
    hFOV_deg: value.hFOV_deg,
    vFOV_deg: deriveVerticalFovDeg(value.hFOV_deg, camera.aspect),
    position: value.position,
    locked: false,
  });
}

function nearestTurn(delta) {
  return delta - 360 * Math.round(delta / 360);
}

// Writes the fields of `shot` that differ from `base` (the cameraShot() it was edited from) to the
// Camera at a Timeline frame, each Lane by the recording rule: the angles to `rotation`, hFOV_deg to
// `fov`, the position to `position`. An angle keeps the turn of its base, so a yaw wrapped across 180
// degrees does not send the Camera the long way round. The aspect is not keyed: a change of either FOV
// sets it from the pair.
export function setCameraShot(camera, frame, shot, base) {
  const rotation = {};
  for (const field of ["yaw_deg", "pitch_deg", "roll_deg"]) {
    if (shot[field] !== base[field]) rotation[field] = base[field] + nearestTurn(shot[field] - base[field]);
  }
  if (Object.keys(rotation).length) setLaneValue(camera, "rotation", frame, rotation);
  if (shot.hFOV_deg !== base.hFOV_deg) setLaneValue(camera, "fov", frame, shot.hFOV_deg);
  if (shot.hFOV_deg !== base.hFOV_deg || shot.vFOV_deg !== base.vFOV_deg) {
    camera.aspect = Math.tan(shot.hFOV_deg * DEG2RAD * 0.5) / Math.tan(shot.vFOV_deg * DEG2RAD * 0.5);
  }
  if (shot.position.some((value, axis) => value !== base.position[axis])) setLaneValue(camera, "position", frame, [...shot.position]);
}

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

// A world Sticker at a Timeline frame, in the inspector's fields (opacity in percent).
export function worldStickerFields(sticker, frame) {
  const value = evaluateSticker(sticker, frame);
  return {
    ...Object.fromEntries(POSITION_FIELDS.map((field, axis) => [field, value.position[axis]])),
    yaw_deg: value.yaw_deg,
    pitch_deg: value.pitch_deg,
    roll_deg: value.roll_deg,
    scale: value.scale,
    opacity: value.opacity * 100,
  };
}

// An inspector edit of one world Sticker field at a Timeline frame, by the recording rule of its Lane.
export function setWorldStickerField(sticker, frame, field, value) {
  const clipFrame = frame - (sticker.clip.start - sticker.clip.in);
  const axis = POSITION_FIELDS.indexOf(field);
  if (axis >= 0) {
    const position = evaluateLane(sticker, "position", clipFrame);
    position[axis] = value;
    setLaneValue(sticker, "position", clipFrame, position);
  } else if (field === "scale") {
    setLaneValue(sticker, "scale", clipFrame, value);
  } else if (field === "opacity") {
    setLaneValue(sticker, "opacity", clipFrame, value / 100);
  } else {
    setLaneValue(sticker, "rotation", clipFrame, { [field]: value });
  }
}

// A gizmo edit of a world Sticker at a Timeline frame: only the Lanes of the parts it has
// ({ position, rotation, scale }), each by the recording rule.
export function setWorldStickerTransform(sticker, frame, transform) {
  const clipFrame = frame - (sticker.clip.start - sticker.clip.in);
  for (const name of ["position", "rotation", "scale"]) {
    if (transform[name] !== undefined) setLaneValue(sticker, name, clipFrame, transform[name]);
  }
}

// Delete on the world Sticker `id` of a working state v2 removes it. The port Sticker follows the
// `sticker` input, so it is hidden instead, as a sky one is.
export function deleteWorldSticker(state, id) {
  const sticker = state.stickers.find((item) => item.id === id && item.placement === "world");
  if (!sticker) return;
  if (sticker.source.kind === "port") sticker.visible = false;
  else state.stickers = state.stickers.filter((item) => item !== sticker);
}

// A world Sticker over the whole Timeline at a World transform ({ position, rotation, scale }, as
// pano_space.js newWorldStickerTransform gives it).
export function newWorldSceneSticker(id, source, transform) {
  return {
    id,
    placement: "world",
    source,
    clip: { start: 0, in: 0, duration: null },
    visible: true,
    locked: false,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...transform.position], keyframes: [] },
    rotation: { value: { ...transform.rotation }, keyframes: [] },
    scale: { value: transform.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
  };
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

// The `state_json` text for the editor's working state: state v2 for PanoramaStickersNode and
// PanoramaCutoutNode (a Cutout showing a PANO_SCENE saves its own state with the Camera), the working
// state itself (v1) for the legacy nodes.
// Drops the `default_camera` mark once the Camera has left the default one, so that a Camera edited
// and then set back to the default values is still saved: it was added by an edit, not left as it was.
export function noteCameraEdit(state) {
  if (state.default_camera && JSON.stringify(loadSceneState({ version: 2, camera: state.camera }).camera) !== JSON.stringify(defaultCamera())) {
    delete state.default_camera;
  }
}

export function editorStateText(node, state) {
  if (!node?.__panoSceneStateV2) return JSON.stringify(state);
  const saved = loadSceneState(state.cutout_state ? { ...state.cutout_state, camera: state.camera } : state);
  if (state.default_camera && JSON.stringify(saved.camera) === JSON.stringify(defaultCamera())) saved.camera = null;
  return sceneStateText(saved);
}

// Whether the widget's `current` text already means `text`. ComfyUI's execution cache compares the
// text, so rewriting an equivalent one (the empty default, other formatting) would run the node again.
// With `rebased` (PanoramaCutoutNode, #77) `current` rebased to the fps of `text` counts too: the editor
// works at the Timeline fps of its input, and opening and closing it without an edit must leave the text
// as it is (the node reads the recorded fps and keeps the seconds), so its Keyframes are not rounded.
export function sameEditorStateText(node, text, current, { rebased = false } = {}) {
  if (text === current) return true;
  if (!node?.__panoSceneStateV2) return false;
  try {
    const loaded = loadSceneState(current);
    if (sceneStateText(loaded) === text) return true;
    const { fps } = JSON.parse(text).timeline;
    return rebased && fps !== loaded.timeline.fps && sceneStateText(rebaseSceneState(loaded, fps)) === text;
  } catch {
    return false;
  }
}

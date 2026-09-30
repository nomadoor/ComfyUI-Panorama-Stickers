import { normalizePaintingState } from "./pano_paint_types.js";
import { normalizeCutoutShotItem } from "./pano_cutout_view_math.js";
import { loadSceneState } from "./pano_scene_state.js";

let parseStateJsonCache = { text: null, parsed: null };

export function normalizeCoverageValue(value) {
  return Number(value) === 180 ? 180 : 360;
}

function normalizeUiSettings(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  const quality = String(source.preview_quality || "balanced");
  return {
    invert_view_x: !!source.invert_view_x,
    invert_view_y: !!source.invert_view_y,
    preview_quality: quality === "draft" || quality === "balanced" || quality === "high"
      ? quality
      : "balanced",
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
    if (parsed.version === 2) {
      parsed = { ...editorStateFromSceneState(loadSceneState(parsed)), active: resolvedOptions.active };
    }
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

// PanoramaStickersNode keeps state v2 (docs/scene-state-v2.md) in `state_json`, while the editor and
// the node surface work on the v1 shape the legacy node still uses. The sky Stickers become v1
// Stickers; what v1 cannot hold (Timeline, Camera, scene, world Stickers, Clip ranges, Keyframes,
// opacity) rides along in `scene_state` and is put back by editorSceneState.
function hasKeyframes(sticker) {
  return sticker.transform.keyframes.length > 0 || sticker.opacity.keyframes.length > 0;
}

// A sky Sticker with Keyframes draws its Keyframe values, which the editor cannot edit until the
// Timeline (#73). The editor shows it locked; the lock is not saved.
export function stickerHasKeyframes(state, id) {
  const sticker = state?.scene_state?.stickers.find((item) => item.id === id);
  return !!sticker && hasKeyframes(sticker);
}

function editorStateFromSceneState(scene) {
  const assets = {};
  const stickers = [];
  for (const sticker of scene.stickers) {
    if (sticker.placement !== "sky") continue;
    const { yaw_deg, pitch_deg, roll_deg, hFOV_deg, vFOV_deg } = sticker.transform.value;
    const item = {
      id: sticker.id,
      yaw_deg,
      pitch_deg,
      hFOV_deg,
      vFOV_deg,
      rot_deg: roll_deg,
      z_index: sticker.z_index,
      visible: sticker.visible,
      locked: sticker.locked || hasKeyframes(sticker),
      crop: { ...sticker.crop },
    };
    const { source } = sticker;
    if (source.kind === "port") {
      item.source_kind = "external_image";
    } else {
      item.asset_id = sticker.id;
      assets[sticker.id] = source.data_url
        ? { type: "dataurl", value: source.data_url }
        : { type: "comfy_image", filename: source.filename, subfolder: source.subfolder, storage: source.storage, name: source.filename };
    }
    stickers.push(item);
  }
  const { timeline, camera, scene: sceneValue } = scene;
  return {
    assets,
    stickers,
    painting: scene.painting,
    painting_layer: scene.painting_layer,
    scene_state: { timeline, camera, scene: sceneValue, stickers: scene.stickers },
  };
}

// State v2 of the editor's working state. The sky Stickers come from the working state; a Sticker
// read from state v2 keeps its Clip range, Keyframes and opacity, and the rest of state v2 is kept.
export function editorSceneState(state) {
  const migrated = loadSceneState({ ...state, version: 1 });
  const loaded = state.scene_state;
  if (!loaded) return migrated;
  const edited = new Map(migrated.stickers.map((item) => [item.id, item]));
  const stickers = [];
  for (const item of loaded.stickers) {
    if (item.placement !== "sky") {
      stickers.push(item);
      continue;
    }
    const next = edited.get(item.id);
    if (!next) continue;
    edited.delete(item.id);
    stickers.push({
      ...next,
      locked: hasKeyframes(item) ? item.locked : next.locked,
      clip: item.clip,
      transform: { value: next.transform.value, keyframes: item.transform.keyframes },
      opacity: item.opacity,
    });
  }
  stickers.push(...edited.values());
  return loadSceneState({ ...migrated, timeline: loaded.timeline, camera: loaded.camera, scene: loaded.scene, stickers });
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
  return node?.__panoSceneStateV2 ? JSON.stringify(editorSceneState(state)) : JSON.stringify(state);
}

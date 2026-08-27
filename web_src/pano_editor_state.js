import { normalizePaintingState } from "./pano_paint_types.js";
import { normalizeCutoutShotItem } from "./pano_cutout_view_math.js";

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

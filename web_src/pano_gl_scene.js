import { clamp } from "./pano_math.js";
import { getCutoutCameraParams } from "./pano_cutout_view_math.js";

export const HIDDEN_PREVIEW_OPACITY = 0.28;

function normalizeCrop(crop) {
  const raw = (crop && typeof crop === "object") ? crop : {};
  const x0 = clamp(Number(raw.x0 ?? 0), 0, 1);
  const y0 = clamp(Number(raw.y0 ?? 0), 0, 1);
  const x1 = clamp(Number(raw.x1 ?? 1), 0, 1);
  const y1 = clamp(Number(raw.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(x0, x1),
    y0: Math.min(y0, y1),
    x1: Math.max(x0, x1),
    y1: Math.max(y0, y1),
  };
}

export function normalizeStickerItem(rawSticker, options = {}) {
  if (!rawSticker || typeof rawSticker !== "object") return null;
  const explicitAssetId = String(rawSticker.asset_id || rawSticker.assetId || "").trim();
  const external = rawSticker.type === "external_image" || rawSticker.source_kind === "external_image";
  const assetId = explicitAssetId || (external ? String(rawSticker.id || "").trim() : "");
  const includeHidden = options.includeHidden === true;
  const hidden = rawSticker.visible === false;
  const hiddenExternalPreview = includeHidden && external && hidden;
  return {
    id: String(rawSticker.id || ""),
    assetId,
    zIndex: Number(rawSticker.z_index || rawSticker.zIndex || 0),
    yawDeg: Number(rawSticker.yaw_deg || rawSticker.yawDeg || 0),
    pitchDeg: Number(rawSticker.pitch_deg || rawSticker.pitchDeg || 0),
    rollDeg: Number(rawSticker.rot_deg ?? rawSticker.roll_deg ?? rawSticker.rollDeg ?? 0),
    hFovDeg: clamp(Number(rawSticker.hFOV_deg || rawSticker.hFovDeg || 30), 1, 179),
    vFovDeg: clamp(Number(rawSticker.vFOV_deg || rawSticker.vFovDeg || 30), 1, 179),
    crop: normalizeCrop(rawSticker.crop),
    opacity: hiddenExternalPreview ? HIDDEN_PREVIEW_OPACITY : clamp(Number(rawSticker.opacity ?? 1), 0, 1),
    visible: hiddenExternalPreview ? true : rawSticker.visible !== false,
    external,
  };
}

export function buildStickerSceneFromState(state, options = {}) {
  const stickers = Array.isArray(options.stickers)
    ? options.stickers
    : Array.isArray(state?.stickers) ? state.stickers : [];
  const includeHidden = options.includeHidden === true;
  const normalized = stickers
    .map((item) => normalizeStickerItem(item, { includeHidden }))
    .filter((item) => item && (includeHidden || item.visible !== false))
    .sort((a, b) => Number(a.zIndex || 0) - Number(b.zIndex || 0));
  return {
    stickers: normalized,
    selectedId: options.selectedId ?? state?.active?.selected_sticker_id ?? null,
    hoveredId: options.hoveredId ?? null,
  };
}

export function buildStickerTexturesFromState(state, assetLoader, options = {}) {
  if (typeof assetLoader !== "function") return [];
  const scene = options.scene || buildStickerSceneFromState(state, options);
  const assets = (state && typeof state === "object" && state.assets && typeof state.assets === "object")
    ? state.assets
    : {};
  const textures = [];
  const seen = new Set();
  scene.stickers.forEach((item) => {
    const assetId = String(item?.assetId || "").trim();
    const textureId = assetId || (item?.external ? String(item?.id || "").trim() : "");
    if (!textureId || seen.has(textureId)) return;
    const asset = assetId ? assets[assetId] : null;
    const source = assetLoader(textureId, asset, item);
    if (source instanceof HTMLImageElement && !source.complete) return;
    const width = Number(source?.naturalWidth || source?.videoWidth || source?.width || 0);
    const height = Number(source?.naturalHeight || source?.videoHeight || source?.height || 0);
    if (!source || width <= 0 || height <= 0) return;
    seen.add(textureId);
    textures.push({
      assetId: textureId,
      source,
      revision: String(options.revisionFor?.(textureId, asset, source) ?? [
        textureId,
        Number(source.naturalWidth || source.videoWidth || source.width || 0),
        Number(source.naturalHeight || source.videoHeight || source.height || 0),
        String(source.currentSrc || source.src || ""),
      ].join("|")),
    });
  });
  return textures;
}

export function buildPanoramaViewParamsFromEditor(editor) {
  return {
    mode: "panorama",
    yawDeg: Number(editor?.viewYaw || 0),
    pitchDeg: Number(editor?.viewPitch || 0),
    fovDeg: clamp(Number(editor?.viewFov || 100), 1, 179),
    coverageDeg: Number(editor?.coverage || 360) === 180 ? 180 : 360,
  };
}

export function buildPanoramaViewParamsFromRuntime(runtimeState, coverage = 360) {
  return {
    mode: "panorama",
    yawDeg: Number(runtimeState?.yaw || 0),
    pitchDeg: Number(runtimeState?.pitch || 0),
    fovDeg: clamp(Number(runtimeState?.fov || 100), 1, 179),
    coverageDeg: Number(coverage || 360) === 180 ? 180 : 360,
  };
}

export function buildPreviewNodeViewParams(nodeState, coverage = 360) {
  return buildPanoramaViewParamsFromRuntime(nodeState, coverage);
}

export function buildCutoutViewParamsFromShot(shot) {
  const params = getCutoutCameraParams(shot || {});
  return {
    mode: "cutout",
    yawDeg: params.yawDeg,
    pitchDeg: params.pitchDeg,
    rollDeg: params.rollDeg,
    hFovDeg: params.hFovDeg,
    vFovDeg: params.vFovDeg,
    aspect: clamp(params.aspect, 0.1, 10),
  };
}

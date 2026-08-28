const OBJECT_TYPES = new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object",
]);

const BACKGROUND_TYPES = new Set([
  "erp_image",
  "video",
  "3d",
]);

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeCoverageAware(rawType, rawValue) {
  if (rawType === "paint" || rawType === "mask" || rawType === "raster") return false;
  return rawValue !== false;
}

export function normalizeBackgroundPassDescriptor(raw = {}) {
  const type = BACKGROUND_TYPES.has(String(raw?.type || ""))
    ? String(raw.type)
    : "erp_image";
  const rawOpacity = Number(raw?.opacity ?? 1);
  return {
    type,
    source: raw?.source || null,
    revision: String(raw?.revision || ""),
    coverageDeg: Number(raw?.coverageDeg || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(rawOpacity) ? clamp(rawOpacity, 0, 1) : 1,
    visible: raw?.visible !== false,
  };
}

export function normalizeRenderObjectDescriptor(raw = {}) {
  const type = String(raw?.type || "");
  if (!OBJECT_TYPES.has(type)) return null;
  const rawOpacity = Number(raw?.opacity ?? 1);
  const rawZIndex = Number(raw?.zIndex ?? raw?.z_index ?? 0);
  return {
    id: String(raw?.id || ""),
    type,
    source: raw?.source || null,
    revision: String(raw?.revision || ""),
    visible: raw?.visible !== false,
    opacity: Number.isFinite(rawOpacity) ? clamp(rawOpacity, 0, 1) : 1,
    zIndex: Number.isFinite(rawZIndex) ? rawZIndex : 0,
    coverageAware: normalizeCoverageAware(type, raw?.coverageAware),
    transform: raw?.transform && typeof raw.transform === "object"
      ? { ...raw.transform }
      : null,
    params: raw?.params && typeof raw.params === "object"
      ? { ...raw.params }
      : {},
  };
}

export function buildPanoramaObjectPassState(options = {}) {
  const objects = Array.isArray(options?.objects) ? options.objects : [];
  const normalized = objects
    .map((entry) => normalizeRenderObjectDescriptor(entry))
    .filter((entry) => !!entry && entry.visible !== false)
    .sort((a, b) => {
      const za = Number(a?.zIndex || 0);
      const zb = Number(b?.zIndex || 0);
      return za - zb;
    });
  return {
    objects: normalized,
    selectedId: options?.selectedId ?? null,
    hoveredId: options?.hoveredId ?? null,
  };
}

export function buildPanoramaRenderDescriptor(options = {}) {
  return {
    stateRevision: String(options?.stateRevision || ""),
    background: normalizeBackgroundPassDescriptor(options?.background || {}),
    objectPass: buildPanoramaObjectPassState(options?.objectPass || {}),
    overlay: options?.overlay && typeof options.overlay === "object"
      ? { ...options.overlay }
      : {},
  };
}

export function listSupportedPanoramaBackgroundTypes() {
  return Array.from(BACKGROUND_TYPES);
}

export function listSupportedPanoramaObjectTypes() {
  return Array.from(OBJECT_TYPES);
}

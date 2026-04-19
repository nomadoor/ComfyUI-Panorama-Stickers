import { createPanoramaRenderCore } from "./pano_render_core.js";
import { buildPanoramaRenderDescriptor } from "./pano_render_object_pass.js";
import { clamp } from "./pano_math.js";

function normalizeBackground(background = {}) {
  return {
    type: String(background?.type || "erp_image"),
    source: background?.source || null,
    revision: String(background?.revision || ""),
    coverageDeg: Number(background?.coverageDeg || 360) === 180 ? 180 : 360,
    opacity: Number(background?.opacity ?? 1),
    visible: background?.visible !== false,
  };
}

function normalizeTransform(raw = {}) {
  return {
    yawDeg: Number(raw?.yawDeg || 0),
    pitchDeg: Number(raw?.pitchDeg || 0),
    rollDeg: Number(raw?.rollDeg || 0),
    hFovDeg: clamp(Number(raw?.hFovDeg || 30), 1, 179),
    vFovDeg: clamp(Number(raw?.vFovDeg || 30), 1, 179),
  };
}

function normalizeObject(entry = {}, index = 0) {
  const type = String(entry?.type || "");
  if (!type) return null;
  const object = {
    id: String(entry?.id || `${type}_${index}`),
    type,
    source: entry?.source || null,
    revision: String(entry?.revision || ""),
    visible: entry?.visible !== false,
    opacity: Number(entry?.opacity ?? 1),
    zIndex: Number(entry?.zIndex ?? entry?.z_index ?? index),
  };
  if (type === "sticker") {
    object.transform = normalizeTransform(entry?.transform || entry);
    object.params = {
      ...(entry?.params && typeof entry.params === "object" ? entry.params : {}),
      crop: entry?.crop || entry?.params?.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    };
  } else {
    object.transform = entry?.transform && typeof entry.transform === "object"
      ? { ...entry.transform }
      : null;
    object.params = entry?.params && typeof entry.params === "object"
      ? { ...entry.params }
      : {};
  }
  return object;
}

export function normalizePanoramaSceneDescriptor(scene = {}) {
  if (scene?.objectPass && Array.isArray(scene.objectPass.objects)) {
    return buildPanoramaRenderDescriptor({
      stateRevision: String(scene?.stateRevision || ""),
      background: normalizeBackground(scene?.background || {}),
      objectPass: {
        selectedId: scene?.objectPass?.selectedId ?? null,
        hoveredId: scene?.objectPass?.hoveredId ?? null,
        objects: scene.objectPass.objects
          .map((entry, index) => normalizeObject(entry, index))
          .filter(Boolean),
      },
      overlay: scene?.overlay && typeof scene.overlay === "object"
        ? { ...scene.overlay }
        : {},
    });
  }
  const background = normalizeBackground(scene?.background || {});
  const objects = (Array.isArray(scene?.objects) ? scene.objects : [])
    .map((entry, index) => normalizeObject(entry, index))
    .filter(Boolean);
  return buildPanoramaRenderDescriptor({
    stateRevision: String(scene?.stateRevision || ""),
    background,
    objectPass: {
      selectedId: scene?.selectedId ?? null,
      hoveredId: scene?.hoveredId ?? null,
      objects,
    },
    overlay: scene?.overlay && typeof scene.overlay === "object"
      ? { ...scene.overlay }
      : {},
  });
}

export function normalizePanoramaCameraView(view = {}) {
  const mode = String(view?.mode || "panorama");
  if (mode === "cutout") {
    return {
      mode: "cutout",
      yawDeg: Number(view?.yawDeg || 0),
      pitchDeg: Number(view?.pitchDeg || 0),
      rollDeg: Number(view?.rollDeg || 0),
      hFovDeg: clamp(Number(view?.hFovDeg || 90), 1, 179),
      vFovDeg: clamp(Number(view?.vFovDeg || 60), 1, 179),
      aspect: Number(view?.aspect || 1),
      coverageDeg: Number(view?.coverageDeg || 360) === 180 ? 180 : 360,
    };
  }
  if (mode === "unwrap") {
    return {
      mode: "unwrap",
      yawDeg: Number(view?.yawDeg || 0),
      pitchDeg: Number(view?.pitchDeg || 0),
      fovDeg: clamp(Number(view?.fovDeg || 100), 1, 179),
      coverageDeg: Number(view?.coverageDeg || 360) === 180 ? 180 : 360,
    };
  }
  return {
    mode: "panorama",
    yawDeg: Number(view?.yawDeg || 0),
    pitchDeg: Number(view?.pitchDeg || 0),
    fovDeg: clamp(Number(view?.fovDeg || 100), 1, 179),
    coverageDeg: Number(view?.coverageDeg || 360) === 180 ? 180 : 360,
  };
}

export function normalizePanoramaCameraOutput(output = {}) {
  return {
    width: Math.max(1, Number(output?.width || 1)),
    height: Math.max(1, Number(output?.height || 1)),
    dpr: Math.max(0.1, Number(output?.dpr || 1)),
  };
}

export function createPanoramaSceneCamera(options = {}) {
  const targetId = String(options?.targetId || "panorama_scene_camera");
  const renderCore = options?.renderCore || createPanoramaRenderCore(options?.coreOptions || {});
  let currentScene = null;
  let currentSceneKey = "";

  function buildSceneKey(scene) {
    return JSON.stringify({
      stateRevision: scene?.stateRevision || "",
      background: scene?.background || null,
      objects: Array.isArray(scene?.objectPass?.objects)
        ? scene.objectPass.objects.map((entry) => ({
          id: entry?.id || "",
          type: entry?.type || "",
          revision: entry?.revision || "",
          visible: entry?.visible !== false,
          opacity: Number(entry?.opacity ?? 1),
          zIndex: Number(entry?.zIndex ?? 0),
          transform: entry?.transform || null,
          params: entry?.params || null,
        }))
        : [],
      overlay: scene?.overlay || {},
    });
  }

  function syncScene(descriptor = {}) {
    const scene = normalizePanoramaSceneDescriptor(descriptor);
    const nextKey = buildSceneKey(scene);
    if (currentSceneKey === nextKey) return false;
    const synced = renderCore.syncState(scene);
    if (!synced) return false;
    currentScene = scene;
    currentSceneKey = nextKey;
    return true;
  }

  function renderFrame(view = {}, output = {}) {
    if (!currentScene) return null;
    const normalizedView = normalizePanoramaCameraView(view);
    const normalizedOutput = normalizePanoramaCameraOutput(output);
    return renderCore.renderToTarget(targetId, normalizedView, normalizedOutput);
  }

  function renderToContext(ctx, rect, view = {}, output = {}) {
    if (!ctx || !rect || !currentScene) return false;
    const normalizedView = normalizePanoramaCameraView(view);
    const normalizedOutput = normalizePanoramaCameraOutput({
      ...output,
      width: Number(rect?.w || output?.width || 1),
      height: Number(rect?.h || output?.height || 1),
    });
    return renderCore.renderToContext(ctx, rect, normalizedView, normalizedOutput);
  }

  function clearScene() {
    currentScene = null;
    currentSceneKey = "";
    renderCore.clearState?.();
  }

  function dispose() {
    clearScene();
    renderCore.dispose?.();
  }

  return {
    isSupported: typeof renderCore?.isSupported === "function" ? () => renderCore.isSupported() : () => false,
    syncScene,
    renderFrame,
    renderToContext,
    snapshotScene: () => currentScene,
    clearScene,
    dispose,
  };
}

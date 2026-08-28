import { createNodeSurfaceSession } from "./pano_node_surface_session.js";

const EXTERNAL_STICKER_ID = "sticker_image_1";
const EXTERNAL_STICKER_SOURCE_KIND = "external_image";

function computeVerticalFov(hFovDeg, width, height) {
  const hFov = Math.min(179, Math.max(0.1, Number(hFovDeg || 30)));
  const aspectScale = Math.max(1, Number(height || 1)) / Math.max(1, Number(width || 1));
  const vertical = 2 * Math.atan(Math.tan((hFov * Math.PI / 180) * 0.5) * aspectScale) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, vertical));
}

function safeInteger(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.trunc(number) : 0;
}

function selectedSticker(state) {
  const id = String(state?.active?.selected_sticker_id || "");
  if (!id) return null;
  return (Array.isArray(state?.stickers) ? state.stickers : [])
    .find((item) => String(item?.id || "") === id) || null;
}

function isExternalSticker(item) {
  return String(item?.id || "") === EXTERNAL_STICKER_ID
    || String(item?.source_kind || "") === EXTERNAL_STICKER_SOURCE_KIND;
}

const POSE_KEYS = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];

function externalInitialPose(item) {
  if (!isExternalSticker(item) || !item?.initial_pose || typeof item.initial_pose !== "object") return null;
  return Object.fromEntries(POSE_KEYS.map((key) => {
    const fallback = key === "hFOV_deg" || key === "vFOV_deg" ? 30 : 0;
    const current = Number(item[key]);
    const initial = Number(item.initial_pose[key]);
    return [key, Number.isFinite(initial) ? initial : (Number.isFinite(current) ? current : fallback)];
  }));
}

function canRestoreExternalInitialPose(item) {
  const initial = externalInitialPose(item);
  if (!initial) return false;
  return POSE_KEYS.some((key) => Math.abs(Number(item?.[key] || 0) - initial[key]) > 1e-4);
}

export function reconcileExternalStickerState(state, descriptor = {}) {
  if (!state || typeof state !== "object") return { state, changed: false };
  const stickers = Array.isArray(state.stickers) ? state.stickers : [];
  const existingIndex = stickers.findIndex((item) => String(item?.id || "") === EXTERNAL_STICKER_ID);
  if (descriptor.connected !== true) {
    if (existingIndex < 0) return { state, changed: false };
    const selectedExternal = String(state.active?.selected_sticker_id || "") === EXTERNAL_STICKER_ID;
    return {
      state: {
        ...state,
        stickers: stickers.filter((_, index) => index !== existingIndex),
        active: selectedExternal
          ? { ...(state.active || {}), selected_sticker_id: null }
          : state.active,
      },
      changed: true,
    };
  }

  const linkId = Number(descriptor.linkId);
  const stateHash = String(descriptor.stateHash || "");
  const current = existingIndex >= 0 ? stickers[existingIndex] : null;
  const sourceChanged = !current
    || Number(current.source_link_id ?? -1) !== linkId
    || String(current.source_state_hash || "") !== stateHash;
  const rawImageWidth = Number(descriptor.imageWidth || 0);
  const rawImageHeight = Number(descriptor.imageHeight || 0);
  const hasImageSize = rawImageWidth > 0 && rawImageHeight > 0;
  const imageWidth = Math.max(1, rawImageWidth);
  const imageHeight = Math.max(1, rawImageHeight);
  const pose = descriptor.pose && typeof descriptor.pose === "object" ? descriptor.pose : {};
  const rawHFov = sourceChanged
    ? pose.hFOV_deg || current?.hFOV_deg || 30
    : current?.hFOV_deg || pose.hFOV_deg || 30;
  const hFOV = Math.min(179, Math.max(0.1, Number(rawHFov)));

  if (!sourceChanged) {
    if (!hasImageSize) return { state, changed: false };
    const nextVFov = computeVerticalFov(hFOV, imageWidth, imageHeight);
    const initialHFov = Number(current?.initial_pose?.hFOV_deg ?? hFOV);
    const nextInitialVFov = computeVerticalFov(initialHFov, imageWidth, imageHeight);
    const currentInitialVFov = Number(current?.initial_pose?.vFOV_deg ?? nextInitialVFov);
    if (Math.abs(Number(current?.vFOV_deg || 0) - nextVFov) <= 1e-6
      && Math.abs(currentInitialVFov - nextInitialVFov) <= 1e-6) return { state, changed: false };
    return {
      state: {
        ...state,
        stickers: stickers.map((item, index) => index === existingIndex ? {
          ...item,
          vFOV_deg: nextVFov,
          initial_pose: item.initial_pose && typeof item.initial_pose === "object"
            ? { ...item.initial_pose, vFOV_deg: nextInitialVFov }
            : item.initial_pose,
        } : item),
      },
      changed: true,
    };
  }

  const maxZ = stickers.reduce((value, item) => Math.max(value, Number(item?.z_index || 0)), -1);
  const initialPose = {
    yaw_deg: Number(pose.yaw_deg || 0),
    pitch_deg: Number(pose.pitch_deg || 0),
    hFOV_deg: hFOV,
    vFOV_deg: hasImageSize
      ? computeVerticalFov(hFOV, imageWidth, imageHeight)
      : Number(pose.vFOV_deg || current?.vFOV_deg || hFOV),
    rot_deg: Number(pose.rot_deg ?? pose.roll_deg ?? 0),
  };
  const nextExternal = {
    ...(current || {}),
    id: EXTERNAL_STICKER_ID,
    source_kind: EXTERNAL_STICKER_SOURCE_KIND,
    source_link_id: linkId,
    source_state_hash: stateHash,
    ...initialPose,
    initial_pose: { ...initialPose },
    visible: true,
    z_index: maxZ + 1,
  };
  const nextStickers = existingIndex >= 0
    ? stickers.map((item, index) => index === existingIndex ? nextExternal : item)
    : [...stickers, nextExternal];
  return { state: { ...state, stickers: nextStickers }, changed: true };
}

export function buildStickersDisplayEntries(state) {
  const stickers = (Array.isArray(state?.stickers) ? state.stickers : [])
    .filter((item) => item && typeof item === "object")
    .map((item) => ({
      type: "sticker",
      id: String(item.id || ""),
      z_index: safeInteger(item.z_index),
      item,
    }));
  const painting = state?.painting && typeof state.painting === "object" ? state.painting : {};
  const groups = (Array.isArray(painting.groups) ? painting.groups : [])
    .filter((item) => item && typeof item === "object")
    .map((item) => ({
      type: "strokeGroup",
      id: String(item.actionGroupId || item.id || ""),
      z_index: safeInteger(item.z_index),
      item,
    }));
  const rasterObjects = (Array.isArray(painting.raster_objects) ? painting.raster_objects : [])
    .filter((item) => item && typeof item === "object" && String(item.layerKind || "paint") === "paint")
    .map((item) => ({
      type: "rasterObject",
      id: String(item.id || ""),
      z_index: safeInteger(item.z_index),
      item,
    }));
  return [...stickers, ...groups, ...rasterObjects]
    .sort((a, b) => a.z_index - b.z_index);
}

export function stickersNodeSurfaceModel(state) {
  const selected = selectedSticker(state);
  const isExternalSelection = isExternalSticker(selected);
  const hasStickers = (Array.isArray(state?.stickers) ? state.stickers : [])
    .some((item) => item && item.visible !== false);
  const entries = buildStickersDisplayEntries(state);
  const selectedIndex = selected
    ? entries.findIndex((entry) => entry.type === "sticker" && entry.item === selected)
    : -1;
  const locked = selected?.locked === true;
  return {
    hasStickers,
    hasSelection: !!selected,
    isExternalSelection,
    canRestoreInitial: canRestoreExternalInitialPose(selected),
    selectedId: selected ? String(selected.id || "") : null,
    locked,
    canDelete: !!selected && !locked,
    canMoveForward: selectedIndex >= 0 && selectedIndex < entries.length - 1,
    canMoveBackward: selectedIndex > 0,
  };
}

function cloneDisplayState(state) {
  return {
    ...state,
    stickers: (Array.isArray(state?.stickers) ? state.stickers : []).map((item) => ({ ...item })),
    painting: {
      ...(state?.painting || {}),
      groups: (Array.isArray(state?.painting?.groups) ? state.painting.groups : []).map((item) => ({ ...item })),
      raster_objects: (Array.isArray(state?.painting?.raster_objects) ? state.painting.raster_objects : []).map((item) => ({ ...item })),
    },
  };
}

function reorderSelected(state, edge) {
  const selected = selectedSticker(state);
  if (!selected || selected.locked === true) return { state, changed: false };
  const next = cloneDisplayState(state);
  const selectedId = String(selected.id || "");
  const entries = buildStickersDisplayEntries(next);
  const index = entries.findIndex((entry) => entry.type === "sticker" && entry.id === selectedId);
  if (index < 0) return { state, changed: false };
  if ((edge === "front" && index === entries.length - 1) || (edge === "back" && index === 0)) {
    return { state, changed: false };
  }
  const [moving] = entries.splice(index, 1);
  if (edge === "front") entries.push(moving);
  else entries.unshift(moving);
  entries.forEach((entry, zIndex) => {
    entry.item.z_index = zIndex;
  });
  return { state: next, changed: true };
}

function pruneUnusedAssets(state) {
  const used = new Set(
    (Array.isArray(state.stickers) ? state.stickers : [])
      .map((item) => String(item?.asset_id || ""))
      .filter(Boolean),
  );
  return Object.fromEntries(
    Object.entries(state.assets || {}).filter(([id]) => used.has(String(id))),
  );
}

export function applyStickersNodeSurfaceAction(state, action = {}) {
  if (!state || typeof state !== "object") return { state, changed: false };
  if (action.type === "sync-external") return reconcileExternalStickerState(state, action.value);
  if (action.type === "add-sticker") {
    const value = action.value && typeof action.value === "object" ? action.value : {};
    const stickerId = String(value.stickerId || "").trim();
    const assetId = String(value.assetId || "").trim();
    if (!stickerId || !assetId || !value.asset || (Array.isArray(state.stickers) ? state.stickers : [])
      .some((item) => String(item?.id || "") === stickerId)) {
      return { state, changed: false };
    }
    const entries = buildStickersDisplayEntries(state);
    const maxZ = entries.reduce((maximum, entry) => Math.max(maximum, Number(entry.z_index || 0)), -1);
    const hFOV = 30;
    const sticker = {
      id: stickerId,
      asset_id: assetId,
      yaw_deg: Number(value.yaw_deg || 0),
      pitch_deg: Number(value.pitch_deg || 0),
      hFOV_deg: hFOV,
      vFOV_deg: computeVerticalFov(hFOV, value.imageWidth, value.imageHeight),
      rot_deg: 0,
      z_index: maxZ + 1,
    };
    return {
      state: {
        ...state,
        assets: { ...(state.assets || {}), [assetId]: value.asset },
        stickers: [...(Array.isArray(state.stickers) ? state.stickers : []), sticker],
        active: { ...(state.active || {}), selected_sticker_id: stickerId },
      },
      changed: true,
    };
  }
  if (action.type === "select-sticker") {
    const id = String(action.id || "");
    if (!id || !(Array.isArray(state.stickers) ? state.stickers : []).some((item) => String(item?.id || "") === id)) {
      return { state, changed: false };
    }
    if (String(state.active?.selected_sticker_id || "") === id) return { state, changed: false };
    return {
      state: { ...state, active: { ...(state.active || {}), selected_sticker_id: id } },
      changed: true,
    };
  }

  const selected = selectedSticker(state);
  if (!selected) return { state, changed: false };

  if (action.type === "toggle-lock") {
    const nextLocked = selected.locked !== true;
    return {
      state: {
        ...state,
        stickers: state.stickers.map((item) => item === selected ? { ...item, locked: nextLocked } : item),
      },
      changed: true,
    };
  }
  if (action.type === "restore-initial") {
    const initial = externalInitialPose(selected);
    if (!initial || !canRestoreExternalInitialPose(selected)) return { state, changed: false };
    return {
      state: {
        ...state,
        stickers: state.stickers.map((item) => item === selected ? { ...item, ...initial } : item),
      },
      changed: true,
    };
  }
  if (selected.locked === true) return { state, changed: false };
  if (action.type === "bring-front") return reorderSelected(state, "front");
  if (action.type === "send-back") return reorderSelected(state, "back");
  if (action.type === "delete-selected") {
    if (isExternalSticker(selected)) {
      if (selected.visible === false) return { state, changed: false };
      return {
        state: {
          ...state,
          stickers: state.stickers.map((item) => item === selected ? { ...item, visible: false } : item),
        },
        changed: true,
      };
    }
    const stickers = state.stickers.filter((item) => item !== selected);
    const nextSelectedId = stickers[0]?.id == null ? null : String(stickers[0].id);
    const next = {
      ...state,
      stickers,
      active: { ...(state.active || {}), selected_sticker_id: nextSelectedId },
    };
    next.assets = pruneUnusedAssets(next);
    return { state: next, changed: true };
  }
  if (action.type === "set-transform") {
    const value = action.value && typeof action.value === "object" ? action.value : {};
    const keys = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
    const patch = {};
    keys.forEach((key) => {
      const number = Number(value[key]);
      if (Number.isFinite(number) && Math.abs(number - Number(selected[key] || 0)) > 1e-12) patch[key] = number;
    });
    if (!Object.keys(patch).length) return { state, changed: false };
    return {
      state: {
        ...state,
        stickers: state.stickers.map((item) => item === selected ? { ...item, ...patch } : item),
      },
      changed: true,
    };
  }
  return { state, changed: false };
}

export function createStickersNodeSurfaceSession(options = {}) {
  return createNodeSurfaceSession({
    ...options,
    reduce: applyStickersNodeSurfaceAction,
    projectModel: stickersNodeSurfaceModel,
  });
}

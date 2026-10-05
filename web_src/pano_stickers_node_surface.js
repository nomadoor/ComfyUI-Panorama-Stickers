import { fileSource, newSceneSticker, setStickerPose, stickerPose, unkeyedPose } from "./pano_editor_state.js";
import { createNodeSurfaceSession } from "./pano_node_surface_session.js";
import { evaluateSticker } from "./pano_scene_eval.js";
import { loadSceneState } from "./pano_scene_state.js";

const EXTERNAL_STICKER_ID = "sticker_image_1";
const EXTERNAL_STICKER_SOURCE_KIND = "external_image";
// The Timeline frame the node shows state v2 (Panorama Studio) at until it plays, and after a reload.
export const NODE_SURFACE_FRAME = 0;

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

// The Stickers the node shows: every Sticker of the legacy v1 state, the sky Stickers of state v2.
export function surfaceStickers(state) {
  const stickers = Array.isArray(state?.stickers) ? state.stickers : [];
  return state?.version === 2 ? stickers.filter((item) => item.placement === "sky") : stickers;
}

// The node's Stickers in the pose fields the geometry helpers (pano_sticker_geometry.js) read. A
// Sticker of state v2 is posed at `frame`, the frame the node shows, and counts as hidden outside its
// Clip range.
export function surfacePoseStickers(state, frame = NODE_SURFACE_FRAME) {
  if (state?.version !== 2) return surfaceStickers(state);
  return surfaceStickers(state).map((sticker) => ({
    id: sticker.id,
    z_index: sticker.z_index,
    locked: sticker.locked,
    visible: evaluateSticker(sticker, frame).active,
    external: sticker.source.kind === "port",
    ...stickerPose(sticker, frame),
  }));
}

function selectedSticker(state) {
  const id = String(state?.active?.selected_sticker_id || "");
  if (!id) return null;
  return surfaceStickers(state).find((item) => String(item?.id || "") === id) || null;
}

function isLegacyExternalSticker(item) {
  return String(item?.id || "") === EXTERNAL_STICKER_ID
    || String(item?.source_kind || "") === EXTERNAL_STICKER_SOURCE_KIND;
}

function isExternalSticker(state, item) {
  return state?.version === 2 ? item?.source.kind === "port" : isLegacyExternalSticker(item);
}

const POSE_KEYS = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];

function externalInitialPose(item) {
  if (!isLegacyExternalSticker(item) || !item?.initial_pose || typeof item.initial_pose !== "object") return null;
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

function isInputConnected(node, name) {
  const slot = (Array.isArray(node?.inputs) ? node.inputs : []).findIndex((input) => input?.name === name);
  return slot >= 0 && node.isInputConnected(slot);
}

const MEDIA_KINDS_2D = ["IMAGE", "VIDEO"];

function mediaKind(type) {
  const types = String(type || "").split(",").filter(Boolean);
  if (types.length && types.every((item) => item === "MESH" || item === "SPLAT" || item.startsWith("FILE_3D"))) return "3d";
  if (types.length && types.every((item) => MEDIA_KINDS_2D.includes(item))) return "2d";
  return null;
}

// What the input carries: "2d" (IMAGE, VIDEO), "3d" (MESH, SPLAT, a 3D file), or null when its link
// does not tell (a `*` link through a Reroute, say), read from the link and else from the output it
// comes from.
function inputMediaKind(node, name) {
  const slot = (Array.isArray(node?.inputs) ? node.inputs : []).findIndex((input) => input?.name === name);
  const link = slot >= 0 && node.graph ? node.getInputLink?.(slot) : null;
  if (!link) return null;
  return mediaKind(link.type) ?? mediaKind(node.graph.getNodeById?.(link.origin_id)?.outputs?.[link.origin_slot]?.type);
}

// Panorama Studio keeps the Sticker of its `sticker` input as the Sticker with the Source
// {kind: "port"}. Like the node (docs/scene-state-v2.md), the editor and the node surface add it when
// the input is connected and the state has none, and remove it when the input is disconnected. Its
// vFOV is not the state's: where it is drawn, it follows hFOV and the aspect of the media
// (skyStickerVfov, as the run derives it), so the media loading never changes state_json; the state
// keeps vFOV = hFOV. Until the node's result has the media it shows as a frame. `pose` is the pose the
// node's current result placed the Sticker at
// (`pano_sticker_input_pose`), with the Keyframes of a Camera that moved. With `sticker_state`
// connected, the Sticker is added only with that pose, so that it keeps the pose of `sticker_state`
// as the node places it.
// 3D media (MESH, SPLAT, a 3D file) is a world Sticker that the node places, and only the node knows
// what an input of an unknown type carries: unless the input is an IMAGE or a VIDEO, the Sticker is
// added only with the node's pose, as a world one when the pose says `placement: "world"`. A pose
// with `replace` replaces a sky port Sticker by the world one under the same id.
export function portStickerSyncValue(node, { pose = null } = {}) {
  return {
    connected: isInputConnected(node, "sticker"),
    awaitingPose: !pose && (isInputConnected(node, "sticker_state") || inputMediaKind(node, "sticker") !== "2d"),
    pose,
  };
}

function worldPortSticker(id, pose) {
  const raw = {
    id,
    placement: "world",
    source: { kind: "port" },
    position: { value: pose.position },
    rotation: { value: pose.rotation },
    scale: { value: pose.scale },
  };
  return loadSceneState({ version: 2, stickers: [raw] }).stickers[0];
}

export function reconcilePortStickerState(state, { connected = false, awaitingPose = false, pose = null } = {}) {
  const index = state.stickers.findIndex((item) => isExternalSticker(state, item));
  const current = index >= 0 ? state.stickers[index] : null;
  if (!connected) {
    if (!current) return { state, changed: false };
    const selected = state.active?.selected_sticker_id === current.id;
    return {
      state: {
        ...state,
        stickers: state.stickers.filter((_, i) => i !== index),
        active: selected ? { ...state.active, selected_sticker_id: null } : state.active,
      },
      changed: true,
    };
  }
  if (current && pose?.placement === "world" && pose.replace && current.placement === "sky") {
    // 3D media on a stored sky port Sticker: the node replaced it by a world one under the same id.
    const port = { ...worldPortSticker(current.id, pose), clip: current.clip, visible: current.visible, locked: current.locked };
    return { state: { ...state, stickers: state.stickers.map((item, i) => i === index ? port : item) }, changed: true };
  }
  if (current || awaitingPose) return { state, changed: false };
  const used = new Set(state.stickers.map((item) => item.id));
  let number = 1;
  while (used.has(`sticker_${number}`)) number += 1;
  if (pose?.placement === "world") {
    return { state: { ...state, stickers: [...state.stickers, worldPortSticker(`sticker_${number}`, pose)] }, changed: true };
  }
  const hFOV = Math.min(179, Math.max(0.1, Number(pose?.hFOV_deg ?? 30)));
  const port = newSceneSticker(`sticker_${number}`, { kind: "port" }, {
    yaw_deg: Number(pose?.yaw_deg ?? 0),
    pitch_deg: Number(pose?.pitch_deg ?? 0),
    rot_deg: Number(pose?.roll_deg ?? 0),
    hFOV_deg: hFOV,
    vFOV_deg: hFOV,
  }, surfaceStickers(state).reduce((value, item) => Math.max(value, item.z_index), -1) + 1);
  // A Camera that moved comes with the Keyframes the node baked from its trajectory (Pose handoff).
  const keyframes = pose?.keyframes ?? {};
  port.direction.keyframes = keyframes.direction ?? [];
  port.roll.keyframes = keyframes.roll ?? [];
  port.size.keyframes = (keyframes.size ?? []).map((key) => ({ ...key, value: { ...key.value, vFOV_deg: key.value.hFOV_deg } }));
  return { state: { ...state, stickers: [...state.stickers, port] }, changed: true };
}

export function buildStickersDisplayEntries(state) {
  const stickers = surfaceStickers(state)
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
  const isExternalSelection = isExternalSticker(state, selected);
  const hasStickers = surfaceStickers(state).some((item) => item && item.visible !== false);
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
  if (action.type === "sync-port") return reconcilePortStickerState(state, action.value);
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
    const pose = {
      yaw_deg: Number(value.yaw_deg || 0),
      pitch_deg: Number(value.pitch_deg || 0),
      hFOV_deg: hFOV,
      vFOV_deg: computeVerticalFov(hFOV, value.imageWidth, value.imageHeight),
      rot_deg: 0,
    };
    if (state.version === 2) {
      return {
        state: {
          ...state,
          stickers: [...state.stickers, newSceneSticker(stickerId, fileSource(value.asset), pose, maxZ + 1)],
          active: { ...(state.active || {}), selected_sticker_id: stickerId },
        },
        changed: true,
      };
    }
    const sticker = { id: stickerId, asset_id: assetId, ...pose, z_index: maxZ + 1 };
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
    if (!id || !surfaceStickers(state).some((item) => String(item?.id || "") === id)) {
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
    if (isExternalSticker(state, selected)) {
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
    const nextSelected = surfaceStickers({ ...state, stickers })[0];
    const nextSelectedId = nextSelected?.id == null ? null : String(nextSelected.id);
    const next = {
      ...state,
      stickers,
      active: { ...(state.active || {}), selected_sticker_id: nextSelectedId },
    };
    if (state.version !== 2) next.assets = pruneUnusedAssets(next);
    return { state: next, changed: true };
  }
  if (action.type === "set-transform") {
    const value = action.value && typeof action.value === "object" ? action.value : {};
    const keys = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
    const current = state.version === 2 ? stickerPose(selected, NODE_SURFACE_FRAME) : selected;
    const patch = {};
    keys.forEach((key) => {
      const number = Number(value[key]);
      if (Number.isFinite(number) && Math.abs(number - Number(current[key] || 0)) > 1e-12) patch[key] = number;
    });
    if (!Object.keys(patch).length) return { state, changed: false };
    if (state.version === 2) {
      // Lanes with Keyframes are left to the editor's Timeline: an edit changes only the Lanes without
      // Keyframes, whose value holds at every frame, so the frame the node shows does not matter
      // (docs/timeline-ui.md).
      const editable = unkeyedPose(selected, patch);
      if (!Object.keys(editable).length) return { state, changed: false };
      const next = structuredClone(selected);
      setStickerPose(next, NODE_SURFACE_FRAME, editable);
      return { state: { ...state, stickers: state.stickers.map((item) => item === selected ? next : item) }, changed: true };
    }
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

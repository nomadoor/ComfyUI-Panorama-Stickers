// The Sticker that comes in through the node's `sticker` input (the port Sticker, or the legacy external
// Sticker): its pose from the linked inputs, and keeping it in the state as the inputs change.
import { deriveCutoutAspectFromFov } from "../pano_cutout_view_math.js";
import { runExternalStickerSync } from "../pano_external_sticker_sync.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import {
  portStickerSyncValue,
  reconcileExternalStickerState,
  reconcilePortStickerState,
} from "../pano_stickers_node_surface.js";
import { DEG2RAD, RAD2DEG } from "./constants.js";

export function createExternalStickers(deps) {
  const {
    comfyMedia, editor, node, readOnly, state, type,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let commitAndRefreshNode, getExternalStickerPreviewImage, getNodeUiValue, isExternalSticker, requestDraw,
    updateSelectionMenu, updateSidePanel;

  function normalizeInputPoseValue(value, debugValue = null) {
    if (value && typeof value === "object" && !Array.isArray(value)) return value;
    if (Array.isArray(value) && value.length > 0) {
      const first = value[0];
      if (first && typeof first === "object" && !Array.isArray(first)) return first;
    }
    if (Array.isArray(debugValue) && debugValue.length > 0) {
      const parsed = debugValue[0]?.parsed_state;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return {
          yaw_deg: Number(parsed.yaw_deg || 0),
          pitch_deg: Number(parsed.pitch_deg || 0),
          hFOV_deg: Number(parsed.hFOV_deg || 30),
          rot_deg: Number(parsed.roll_deg || 0),
        };
      }
    }
    return null;
  }

  function computeStickerVFov(hFovDeg, width, height) {
    const w = Math.max(1, Number(width || 1));
    const h = Math.max(1, Number(height || 1));
    const hf = clamp(Number(hFovDeg || 30), 0.1, 179) * DEG2RAD;
    const vf = 2 * Math.atan(Math.tan(hf * 0.5) * (h / w));
    return clamp(vf * RAD2DEG, 0.1, 179);
  }
  function parseLinkedStickerState(raw) {
    const text = String(raw || "").trim();
    if (!text) return null;
    try {
      const parsed = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") return null;
      if (String(parsed.kind || "") !== "pano_sticker_state") return null;
      const versionValue = parsed.version;
      let version = null;
      if (typeof versionValue === "number" && Number.isInteger(versionValue)) {
        version = versionValue;
      } else if (typeof versionValue === "string" && /^\d+$/.test(versionValue)) {
        version = Number.parseInt(versionValue, 10);
      }
      if (version !== 1) return null;
      const pose = parsed.pose;
      if (!pose || typeof pose !== "object") return null;
      const yawRaw = Number(pose.yaw_deg);
      const pitchRaw = Number(pose.pitch_deg);
      const rollRaw = Number(pose.roll_deg);
      const hRaw = Number(pose.hFOV_deg);
      if (![yawRaw, pitchRaw, rollRaw, hRaw].every((v) => Number.isFinite(v))) return null;
      let yaw = ((yawRaw + 180) % 360 + 360) % 360 - 180;
      if (Object.is(yaw, -0)) yaw = 0;
      const out = {
        yaw_deg: yaw,
        pitch_deg: clamp(pitchRaw, -89.9, 89.9),
        roll_deg: rollRaw,
        hFOV_deg: clamp(hRaw, 0.1, 179),
      };
      const sourceAspect = Number(parsed.source_aspect);
      if (Number.isFinite(sourceAspect) && sourceAspect > 0) out.source_aspect = sourceAspect;
      return out;
    } catch {
      return null;
    }
  }
  function buildCanonicalCutoutStickerState(item) {
    const yawRaw = Number(item?.yaw_deg);
    const pitchRaw = Number(item?.pitch_deg);
    const rollRaw = Number(item?.roll_deg ?? item?.rot_deg);
    const hFovRaw = Number(item?.hFOV_deg);
    const sourceAspect = deriveCutoutAspectFromFov(item);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: wrapYaw(Number.isFinite(yawRaw) ? yawRaw : 0),
        pitch_deg: clamp(Number.isFinite(pitchRaw) ? pitchRaw : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(rollRaw) ? rollRaw : 0,
        hFOV_deg: clamp(Number.isFinite(hFovRaw) ? hFovRaw : 90, 0.1, 179),
      },
      source_aspect: sourceAspect,
    };
  }
  function buildCanonicalSelectedStickerState(item) {
    if (!item || typeof item !== "object") return buildCanonicalCutoutStickerState(null);
    const yawRaw = Number(item?.yaw_deg);
    const pitchRaw = Number(item?.pitch_deg);
    const rollRaw = Number(item?.roll_deg ?? item?.rot_deg);
    const hFovRaw = Number(item?.hFOV_deg);
    const vFovRaw = Number(item?.vFOV_deg);
    let sourceAspect = 1;
    if (Number.isFinite(hFovRaw) && Number.isFinite(vFovRaw)) {
      const hf = clamp(hFovRaw, 0.1, 179) * DEG2RAD;
      const vf = clamp(vFovRaw, 0.1, 179) * DEG2RAD;
      const tanV = Math.tan(vf * 0.5);
      if (Math.abs(tanV) > 1e-6) {
        const ratio = Math.tan(hf * 0.5) / tanV;
        if (Number.isFinite(ratio) && ratio > 0) sourceAspect = ratio;
      }
    }
    if (item?.asset_id && state?.assets?.[item.asset_id]) {
      const asset = state.assets[item.asset_id];
      const width = Number(asset?.w || 0);
      const height = Number(asset?.h || 0);
      if (width > 0 && height > 0) sourceAspect = width / height;
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: wrapYaw(Number.isFinite(yawRaw) ? yawRaw : 0),
        pitch_deg: clamp(Number.isFinite(pitchRaw) ? pitchRaw : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(rollRaw) ? rollRaw : 0,
        hFOV_deg: clamp(Number.isFinite(hFovRaw) ? hFovRaw : 30, 0.1, 179),
      },
      source_aspect: sourceAspect,
    };
  }
  function getLinkedStringInputValue(inputName) {
    return comfyMedia.linkedValue(node, inputName);
  }
  function buildExternalInitialPose(inputPose, stateRaw, previewImg) {
    const parsed = (inputPose && typeof inputPose === "object")
      ? {
        yaw_deg: Number(inputPose.yaw_deg || 0),
        pitch_deg: Number(inputPose.pitch_deg || 0),
        roll_deg: Number(inputPose.rot_deg ?? inputPose.roll_deg ?? 0),
        hFOV_deg: Number(inputPose.hFOV_deg || 30),
      }
      : parseLinkedStickerState(stateRaw);
    if (parsed) {
      const width = Number(previewImg?.naturalWidth || previewImg?.width || parsed.source_aspect || 1);
      const height = Number(previewImg?.naturalHeight || previewImg?.height || 1);
      return {
        yaw_deg: Number(parsed.yaw_deg || 0),
        pitch_deg: Number(parsed.pitch_deg || 0),
        hFOV_deg: Number(parsed.hFOV_deg || 30),
        vFOV_deg: computeStickerVFov(parsed.hFOV_deg, width, height),
        rot_deg: Number(parsed.roll_deg || 0),
      };
    }
    const width = Number(previewImg?.naturalWidth || previewImg?.width || 1);
    const height = Number(previewImg?.naturalHeight || previewImg?.height || 1);
    return {
      yaw_deg: Number(editor.viewYaw || 0),
      pitch_deg: Number(editor.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: computeStickerVFov(30, width, height),
      rot_deg: 0,
    };
  }
  function reconcilePortStickerFromInputs() {
    const previewImg = getExternalStickerPreviewImage(() => {
      runExternalStickerSync(node, "image-loaded");
    });
    const pose = isNodeOutputMediaCurrent(node, "external-sticker")
      ? normalizeInputPoseValue(getNodeUiValue("pano_sticker_input_pose"), null)
      : null;
    return reconcilePortStickerState(state, portStickerSyncValue(node, { pose, image: previewImg }));
  }
  function reconcileLegacyExternalStickerFromInputs() {
    const slot = Array.isArray(node?.inputs)
      ? node.inputs.findIndex((entry) => String(entry?.name || "") === "sticker_image")
      : -1;
    const linkId = slot >= 0 ? node.getInputLink(slot)?.id ?? null : null;
    const previewImg = getExternalStickerPreviewImage(() => {
      runExternalStickerSync(node, "image-loaded");
    });
    const inputPose = normalizeInputPoseValue(getNodeUiValue("pano_sticker_input_pose"), null);
    const stateRaw = getLinkedStringInputValue("sticker_state");
    const stateHash = comfyMedia.externalStateHash(node, stateRaw);
    const pose = linkId == null ? null : buildExternalInitialPose(inputPose, stateRaw, previewImg);
    return reconcileExternalStickerState(state, {
      connected: linkId != null,
      linkId,
      stateHash,
      pose,
      imageWidth: Number(previewImg?.naturalWidth || previewImg?.width || 0),
      imageHeight: Number(previewImg?.naturalHeight || previewImg?.height || 0),
    });
  }
  function reconcileExternalStickerFromInputs(reason = "sync") {
    if (type !== "stickers" || readOnly) return;
    const result = node.__panoSceneStateV2 ? reconcilePortStickerFromInputs() : reconcileLegacyExternalStickerFromInputs();
    if (result.changed) {
      const removed = state.stickers.find(isExternalSticker);
      state.stickers = result.state.stickers;
      state.active = result.state.active;
      if (removed && editor.selectedId === removed.id && !state.stickers.some((item) => item.id === removed.id)) {
        editor.selectedId = null;
        editor.selectedIds = [];
      }
      commitAndRefreshNode();
      updateSidePanel();
      updateSelectionMenu();
    }
    requestDraw();
    void reason;
  }

  function collectExternalStickersForClearAll() {
    const stickers = Array.isArray(state.stickers) ? state.stickers : [];
    const kept = [];
    for (const item of stickers) {
      if (!isExternalSticker(item)) continue;
      item.visible = false;
      kept.push(item);
    }
    return kept;
  }

  return {
    connect(api) {
      ({
        commitAndRefreshNode, getExternalStickerPreviewImage, getNodeUiValue, isExternalSticker, requestDraw,
        updateSelectionMenu, updateSidePanel,
      } = api);
    },
    computeStickerVFov, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState,
    reconcileExternalStickerFromInputs, collectExternalStickersForClearAll,
  };
}

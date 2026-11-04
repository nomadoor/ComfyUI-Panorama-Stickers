// What the legacy surfaces edit in the node's state from the node (docs/legacy-node-surfaces.md): the node surface session
// (its live state while a gesture runs, and the commit to state_json), the port Sticker synced from the node's result, and
// an image file added as a Sticker.
import { editorStateWrite, setEditorActive } from "../pano_editor_state.js";
import { createCutoutNodeSurfaceSession } from "../pano_cutout_node_surface.js";
import { createStickersNodeSurfaceSession, portStickerSyncValue } from "../pano_stickers_node_surface.js";
import { isNodeOutputMediaCurrent } from "../pano_preview_video.js";
import { queuePendingStickerOperation } from "../pano_sticker_operations.js";
import { decodeStickerImageFile, isStickerImageFile, uploadStickerAssetFile } from "../pano_sticker_file_import.js";
import { registerExternalStickerSync } from "../pano_external_sticker_sync.js";
import { comfy, getNodePreviewImage, ownOutputUiValue } from "./media.js";
import { getCachedState, getWidget } from "./state.js";
import { pauseSurfacePlayback } from "./playback.js";

// Makes the surface's session (ctx.nodeSurfaceSession), syncs its port Sticker with the node's result, and gives it
// addNodeStickerFile.
export function createSurfaceEditing(ctx) {
  const { node, surface, sync, stickersMode, requestDraw, nodeSurfaceUiModel } = ctx;
  let nodeSurfaceLiveState = null;
  const nodeSurfaceSession = (stickersMode
    ? createStickersNodeSurfaceSession
    : createCutoutNodeSurfaceSession)({
      readState: () => getCachedState(node),
      publishLiveState: (nextState) => {
        if (nextState) {
          nodeSurfaceLiveState = nextState;
          sync.liveState = nextState;
        } else {
          if (sync.liveState === nodeSurfaceLiveState) sync.liveState = null;
          nodeSurfaceLiveState = null;
        }
        sync.liveStateVersion += 1;
        sync.parsedState = null;
        requestDraw();
      },
      commitState: (nextState) => {
        const stateWidget = getWidget(node, "state_json");
        if (!stateWidget) return;
        setEditorActive(node, nextState.active);
        const text = editorStateWrite(node, nextState, String(stateWidget.value ?? ""));
        if (text === null) return;
        stateWidget.value = text;
        stateWidget.callback?.(text);
        sync.parsedState = null;
        node.setDirtyCanvas?.(true, true);
        node.graph?.setDirtyCanvas?.(true, true);
      },
      onChange: (nextModel) => Object.assign(nodeSurfaceUiModel, nextModel),
    });
  // The links of a node are in its graph: before the node is added (onNodeCreated), it has none to sync with.
  const syncExternalSticker = (reason = "sync", outputOverride = null) => {
    if (!stickersMode || !node.graph || !nodeSurfaceSession || nodeSurfaceSession.hasGestureChanges()) return false;
    if (node.__panoSceneStateV2) {
      const current = isNodeOutputMediaCurrent(node, "external-sticker");
      return nodeSurfaceSession.apply({
        type: "sync-port",
        value: portStickerSyncValue(node, {
          pose: current ? ownOutputUiValue(node, "pano_sticker_input_pose", outputOverride) : null,
          handoff: isNodeOutputMediaCurrent(node, "sticker-handoff") ? ownOutputUiValue(node, "pano_sticker_handoff", outputOverride) : null,
        }),
      });
    }
    const slot = Array.isArray(node?.inputs)
      ? node.inputs.findIndex((entry) => String(entry?.name || "") === "sticker_image")
      : -1;
    const linkId = slot >= 0 ? node.getInputLink(slot)?.id ?? null : null;
    if (linkId == null) {
      return nodeSurfaceSession.apply({ type: "sync-external", value: { connected: false } });
    }
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return false;
    const rawPose = ownOutputUiValue(node, "pano_sticker_input_pose", outputOverride);
    const pose = Array.isArray(rawPose) ? rawPose[0] : rawPose;
    const stateHash = String(ownOutputUiValue(node, "pano_sticker_input_state_hash", outputOverride) ?? "");
    const fallbackView = surface.view || { yaw: 0, pitch: 0 };
    const current = getCachedState(node);
    const existing = (Array.isArray(current?.stickers) ? current.stickers : [])
      .find((item) => String(item?.id || "") === "sticker_image_1");
    const previewImage = getNodePreviewImage(node, "sticker_image_1", null, { external: true });
    const resolvedPose = pose && typeof pose === "object"
      ? pose
      : existing || { yaw_deg: fallbackView.yaw, pitch_deg: fallbackView.pitch, hFOV_deg: 30, rot_deg: 0 };
    const changed = nodeSurfaceSession.apply({
      type: "sync-external",
      value: {
        connected: true,
        linkId,
        stateHash,
        pose: resolvedPose,
        imageWidth: Number(previewImage?.naturalWidth || previewImage?.width || 0),
        imageHeight: Number(previewImage?.naturalHeight || previewImage?.height || 0),
      },
    });
    void reason;
    return changed;
  };
  const unregisterExternalStickerSync = stickersMode
    ? registerExternalStickerSync(node, syncExternalSticker)
    : () => {};
  let stickerImportCount = 0;
  const addNodeStickerFile = async (file) => {
    if (!stickersMode || !nodeSurfaceSession || !isStickerImageFile(file)) return false;
    pauseSurfacePlayback(ctx);
    const assetId = `asset_${Math.random().toString(16).slice(2, 10)}`;
    const stickerId = `st_${Math.random().toString(16).slice(2, 10)}`;
    const view = { ...(surface.view || { yaw: 0, pitch: 0 }) };
    stickerImportCount += 1;
    nodeSurfaceUiModel.importing = true;
    const operation = queuePendingStickerOperation(node, `add:${assetId}`, async () => {
      const decoded = await decodeStickerImageFile(file);
      const asset = await uploadStickerAssetFile(file, {
        fetchApi: (path, options) => comfy.api.fetchApi(path, options),
      });
      ctx.flushNodeSurfaceGesture();
      return nodeSurfaceSession.apply({
        type: "add-sticker",
        value: {
          stickerId,
          assetId,
          asset,
          imageWidth: decoded.width,
          imageHeight: decoded.height,
          yaw_deg: Number(view.yaw || 0),
          pitch_deg: Number(view.pitch || 0),
        },
      });
    });
    try {
      return await operation;
    } catch {
      return false;
    } finally {
      stickerImportCount = Math.max(0, stickerImportCount - 1);
      nodeSurfaceUiModel.importing = stickerImportCount > 0;
      requestDraw();
    }
  };
  Object.assign(ctx, { nodeSurfaceSession, unregisterExternalStickerSync, addNodeStickerFile });
}

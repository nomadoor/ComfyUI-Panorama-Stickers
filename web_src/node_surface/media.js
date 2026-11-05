// What the on-node surfaces (Stickers, Cutout, Panorama Studio) read of ComfyUI's results and the node's inputs: the node's
// result and its `ui` lists, the images and VIDEOs they show and their caches, and when a run's output makes them read
// again. ComfyUI's app and api reach this folder through installSurfaceComfy (comfy below).
import {
  createComfyMediaAdapter,
  executionIdMatches,
  resolveInputOriginNode,
  resultUiList,
  resultUiValue,
  surfaceImageInputIndices,
} from "../pano_comfy_media.js";
import {
  isRenderableMediaReady,
  mediaPlayheadRevisionToken as getRenderableMediaRevisionToken,
} from "../pano_media_session.js";
import { sourceAsset } from "../pano_editor_state.js";
import { portMediaSource } from "../pano_port_media.js";
import {
  buildSharedImageCacheKey,
  createSharedImageCache,
  nextMediaRevision,
} from "../pano_shared_image_cache.js";
import {
  BACKGROUND_INPUT_NAMES,
  createLoopingPreviewVideo,
  isNodeOutputMediaCurrent,
  isRepeatedOutput,
  restoreLoadedNodeOutput,
  resolvePreviewVideoSource,
  setNodeOutputLookup,
  sourceNodeIds,
  trackRunOutputs,
} from "../pano_preview_video.js";
import { runExternalStickerSync } from "../pano_external_sticker_sync.js";
import { createFile3dEditorFiles } from "../pano_file_3d.js";
import { mediaCache, nodeSurface } from "../pano_node_bridge.js";

// ComfyUI's app and api, and what every surface makes from them once. Only web_src/*.js import ComfyUI's scripts:
// vite.lib.config.js keeps "../../scripts/" external as written, and rollup writes it again relative to the bundle,
// which is wrong from a folder below web_src. The façade pano_preview_runtime.js installs them when it loads.
export const comfy = {
  appModule: null,
  app: null,
  api: null,
  // createComfyMediaAdapter's default reading, and the node surfaces' own (pano_comfy_media.js "nodeSurface").
  media: null,
  surfaceMedia: null,
  // The editor files of the 3D file Stickers the node surfaces' Auto length reads (their animated files' clips, ADR 0043),
  // one registry for every surface, as the editor asks the same route; an answer draws the graph again.
  // Panorama Studio's surfaces also draw the 3D file Stickers from those files, so an answer draws them again.
  file3dFiles: null,
};
export const sharedPreviewImageCache = createSharedImageCache();
// The draw requests of the Panorama Studio surfaces attached now (comfy.file3dFiles draws them again).
export const studioSurfaceDraws = new Set();

// Installs ComfyUI's app module and api (called once, by pano_preview_runtime.js when it loads).
export function installSurfaceComfy({ appModule, api }) {
  const { app } = appModule;
  Object.assign(comfy, { appModule, app, api });
  trackRunOutputs(api);
  comfy.media = createComfyMediaAdapter({ app, api });
  comfy.surfaceMedia = createComfyMediaAdapter({ app, api, read: "nodeSurface" });
  setNodeOutputLookup((node) => lookupNodeOutputEntry(node.id));
  comfy.file3dFiles = createFile3dEditorFiles({
    fetchApi: (path, options) => api.fetchApi(path, options),
    onUpdate: () => {
      app?.graph?.setDirtyCanvas?.(true, true);
      studioSurfaceDraws.forEach((draw) => draw());
    },
  });
}

// The adapters' readings under the names the node surfaces have used for them.
export const linkedVideoFile = (...args) => comfy.media.linkedVideoFile(...args);
export const mediaSource = (...args) => comfy.media.source(...args);
export const mediaAssetSource = (...args) => comfy.media.assetSource(...args);
const stickerAssetToPreviewSrc = (...args) => comfy.surfaceMedia.assetSource(...args);
export const lookupNodeOutputEntry = (...args) => comfy.surfaceMedia.output(...args);
export const imageSourceFromCandidate = (...args) => comfy.surfaceMedia.source(...args);
const buildImageSrcCandidates = (...args) => comfy.surfaceMedia.sourceCandidates(...args);

function originNodeOf(node, slot) {
  return resolveInputOriginNode(node, slot, node.graph ? node.getInputLink(slot)?.origin_id : null);
}

// The nodes whose outputs the media of a node is read from: the nodes its background inputs come from, and every
// node above them.
function getMediaSourceIds(node, preferredInputNames = BACKGROUND_INPUT_NAMES) {
  const inputs = Array.isArray(node?.inputs) ? node.inputs : [];
  if (!inputs.length) return new Set();
  return sourceNodeIds(node, surfaceImageInputIndices(node, preferredInputNames), originNodeOf);
}

export const executedRefreshMonitor = {
  nodes: new Set(),
  bound: false,
  listener: null,
  ensureBound() {
    if (this.bound || !comfy.api?.addEventListener) return;
    this.listener = (evt) => {
      const detail = evt?.detail || {};
      const executedId = String(detail?.display_node ?? detail?.node ?? "").trim();
      const targets = [...this.nodes];
      targets.forEach((node) => {
        if (!node) return;
        const selfHit = executionIdMatches(executedId, node?.id);
        const mode = String(nodeSurface(node).mode || "");
        if (mode === "cutout" && !selfHit) return;
        // The output of a node that the media is not read from changes nothing on this node.
        if (!selfHit && ![...getMediaSourceIds(node)].some((id) => executionIdMatches(executedId, id))) return;
        const reason = selfHit ? "self" : "upstream";
        if (selfHit) nodeSurface(node).dom?.requestDraw?.();
        if (isRepeatedOutput(mediaCache(node).executedOutputs, executedId, detail.output)) return;
        invalidatePreviewImageCaches(node);
        nodeSurface(node).dom?.requestDraw?.();
        node.setDirtyCanvas?.(true, true);
        node.graph?.setDirtyCanvas?.(true, true);
      });
    };
    comfy.api.addEventListener("executed", this.listener);
    this.bound = true;
  },
  ensureUnbound() {
    if (!this.bound || !this.listener || !comfy.api?.removeEventListener) return;
    comfy.api.removeEventListener("executed", this.listener);
    this.listener = null;
    this.bound = false;
  },
  register(node) {
    if (!node) return;
    this.nodes.add(node);
    this.ensureBound();
  },
  unregister(node) {
    if (node) this.nodes.delete(node);
    if (!this.nodes.size) this.ensureUnbound();
  },
};

// The first value under `key` in the node's own result (`outputOverride` in its place when given; pano_comfy_media.js
// resultUiValue), or null without one.
export function ownOutputUiValue(node, key, outputOverride = null) {
  const value = resultUiValue(outputOverride || lookupNodeOutputEntry(node?.id), key);
  return Array.isArray(value) ? value[0] : value;
}

function appendImageRevision(src, rev) {
  const raw = String(src || "").trim();
  if (!raw) return "";
  try {
    const base = typeof window !== "undefined" && window?.location?.href ? window.location.href : "http://127.0.0.1/";
    const u = new URL(raw, base);
    if (rev > 0) u.searchParams.set("pano_rev", String(rev));
    return u.toString();
  } catch {
    const sep = raw.includes("?") ? "&" : "?";
    return rev > 0 ? `${raw}${sep}pano_rev=${rev}` : raw;
  }
}

function syncOwnOutputSourceFromExecuted(node) {
  const media = mediaCache(node);
  media.ownOutputRev = nextMediaRevision(media.ownOutputRev);
}

export function disposeNodeOutputVideoCache(node) {
  const media = mediaCache(node);
  if (!media) return;
  media.ownOutputVideo?.player.destroy();
  media.ownOutputVideo = null;
}

function getNodeOwnOutputVideo(node, videoKeys = ["pano_videos"], onLoad = null) {
  const id = node?.id;
  if (id == null) return null;
  if (!isNodeOutputMediaCurrent(node, "background")) {
    disposeNodeOutputVideoCache(node);
    return null;
  }
  const ownOutput = lookupNodeOutputEntry(id);
  const src = resolvePreviewVideoSource(ownOutput, videoKeys, imageSourceFromCandidate);
  if (!src) {
    disposeNodeOutputVideoCache(node);
    return null;
  }
  const media = mediaCache(node);
  const srcKey = appendImageRevision(src, media.ownOutputRev);
  const cacheKey = `${videoKeys.join("|")}:${srcKey}`;
  const cached = media.ownOutputVideo;
  if (cached && cached.key === cacheKey) return cached.player.failed() ? null : cached.player.video;
  disposeNodeOutputVideoCache(node);
  const player = createLoopingPreviewVideo({
    documentRef: document,
    src: srcKey,
    onFrame: onLoad,
  });
  if (!player) return null;
  media.ownOutputVideo = { key: cacheKey, player };
  return player.video;
}

// The image of the node's linked image input (a new source returns its loading image, not the one shown before).
function getLinkedInputImage(node, preferredInputNames = []) {
  const resolved = comfy.surfaceMedia.nodeSurfaceLinkedSource(node, preferredInputNames);
  const srcRaw = String(resolved?.src || "").trim();
  if (!srcRaw) return null;
  const candidates = buildImageSrcCandidates(srcRaw);
  if (!candidates.length) return null;
  const linkedImages = mediaCache(node).linkedImages;
  const key = preferredInputNames.join("|") || "image";
  const cached = linkedImages.get(key);
  if (cached && cached.srcRaw === srcRaw && cached.img) return cached.img;
  if (cached && cached.pendingSrcRaw === srcRaw && cached.pendingImg) return cached.pendingImg;

  const img = new Image();
  const cacheEntry = cached || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  cacheEntry.pendingSrcRaw = srcRaw;
  cacheEntry.pendingResolvedSrc = "";
  cacheEntry.pendingImg = img;
  linkedImages.set(key, cacheEntry);
  let attempt = -1;
  const tryLoadNext = () => {
    attempt += 1;
    if (attempt >= candidates.length) {
      if (linkedImages.get(key) === cacheEntry && cacheEntry.pendingImg === img) {
        cacheEntry.pendingSrcRaw = "";
        cacheEntry.pendingResolvedSrc = "";
        cacheEntry.pendingImg = null;
        if (!cacheEntry.img) {
          linkedImages.delete(key);
        }
      }
      return;
    }
    const nextSrc = candidates[attempt];
    cacheEntry.pendingResolvedSrc = nextSrc;
    img.src = nextSrc;
  };

  img.onload = () => {
    if (linkedImages.get(key) === cacheEntry && cacheEntry.pendingImg === img) {
      cacheEntry.srcRaw = srcRaw;
      cacheEntry.resolvedSrc = String(cacheEntry.pendingResolvedSrc || img.src || "");
      cacheEntry.img = img;
      cacheEntry.pendingSrcRaw = "";
      cacheEntry.pendingResolvedSrc = "";
      cacheEntry.pendingImg = null;
    }
    node.setDirtyCanvas?.(true, true);
  };
  img.onerror = () => {
    if (attempt + 1 < candidates.length) {
      tryLoadNext();
      return;
    }
    if (linkedImages.get(key) === cacheEntry && cacheEntry.pendingImg === img) {
      cacheEntry.pendingSrcRaw = "";
      cacheEntry.pendingResolvedSrc = "";
      cacheEntry.pendingImg = null;
      if (!cacheEntry.img) {
        linkedImages.delete(key);
      }
    }
  };
  tryLoadNext();
  return img;
}

// getLinkedInputImage, with onLoad() run once when the image loads (the node surface draws its DOM canvas again).
function getLinkedInputImageForPreview(node, preferredInputNames = [], onLoad = null) {
  const img = getLinkedInputImage(node, preferredInputNames);
  if (!img) return null;
  if (typeof onLoad === "function") {
    if (!(img.complete && (img.naturalWidth || img.width))) {
      img.addEventListener("load", () => onLoad(), { once: true });
    }
  }
  return img;
}

function invalidatePreviewImageCaches(node) {
  if (!node) return;
  sharedPreviewImageCache.disposeOwner(node);
  mediaCache(node).linkedImages.clear();
  disposeNodeOutputVideoCache(node);
}

export function invalidateBackgroundPreviewMedia(node) {
  if (!node) return;
  mediaCache(node).linkedImages.clear();
  disposeNodeOutputVideoCache(node);
}

export function getNodePreviewImage(node, assetId, asset, sceneItem = null) {
  const key = String(assetId || "");
  if (!key) return null;
  let src = stickerAssetToPreviewSrc(asset);
  if (!src && sceneItem?.external) {
    if (!isNodeOutputMediaCurrent(node, "external-sticker")) return null;
    const ownOutput = lookupNodeOutputEntry(node?.id);
    const candidates = ownOutput?.ui?.pano_sticker_input_images
      || ownOutput?.pano_sticker_input_images
      || [];
    for (const candidate of Array.isArray(candidates) ? candidates : [candidates]) {
      src = imageSourceFromCandidate(candidate);
      if (src) break;
    }
  }
  if (!src) return null;
  const stateHashValue = ownOutputUiValue(node, "pano_sticker_input_state_hash");
  const stateHash = sceneItem?.external ? String(stateHashValue ?? "") : "";
  const revision = sceneItem?.external ? mediaCache(node).ownOutputRev : 0;
  const resolvedSrc = sceneItem?.external ? appendImageRevision(src, revision) : src;
  const sharedKey = buildSharedImageCacheKey(src, stateHash, revision);
  const img = sharedPreviewImageCache.get(node, sharedKey, resolvedSrc, (image, succeeded) => {
    if (!succeeded) return;
    if (sceneItem?.external && mediaCache(node).outputFromRun) runExternalStickerSync(node, "image-loaded");
    nodeSurface(node).dom?.requestDraw?.();
  });
  return img || null;
}

// A list in the node's own result `ui` (pano_comfy_media.js resultUiList; empty without one).
export function ownOutputUiList(node, key) {
  return resultUiList(lookupNodeOutputEntry(node.id), key);
}

// ADR 0019: the played VIDEO once it shows a frame, else its still; null without a VIDEO.
export function playbackBackground({ playback, video, still }) {
  if (!playback.source) return null;
  return !playback.showsVideo && still.__panoFrameIdx > 0 ? still : video;
}

// The layer media of a Sticker of the node's state (`item`, a working Sticker or a loaded state v2 one) as the view
// takes it ({ media, revision, source? }), or null while it has none: its image, or the port Sticker's input media,
// whose MP4 follows the playhead.
export function surfaceStickerMedia(node, state, item) {
  if (item.visible === false) return null;
  let img;
  if (state.version === 2) {
    img = getNodePreviewImage(node, item.id, sourceAsset(item.source), { external: item.source.kind === "port" });
    const surfacePlayback = nodeSurface(node).playback;
    if (item.source.kind === "port" && surfacePlayback) {
      // The port Sticker's MP4 follows the playhead; the view keeps the texture before while the
      // same media has no picture, and drops it for other media on the port.
      const picture = surfacePlayback.playback.stickerPicture(surfacePlayback.stickerStill, img);
      const source = portMediaSource(surfacePlayback.playback.stickerMedia, img);
      return picture ? { media: picture, revision: getRenderableMediaRevisionToken(picture), source } : null;
    }
  } else {
    const external = item.type === "external_image" || item.source_kind === "external_image";
    const assetId = String(item.asset_id || "") || (external ? String(item.id || "") : "");
    img = getNodePreviewImage(node, assetId, state.assets?.[item.asset_id], { external });
  }
  return isRenderableMediaReady(img) ? { media: img, revision: getRenderableMediaRevisionToken(img) } : null;
}

// The background media the on-node surface draws: Panorama Studio's played background VIDEO (its Timeline), the legacy
// node's looping one, or the image linked to the background input.
export function surfaceBackgroundMedia(node) {
  const surface = nodeSurface(node);
  return (surface.playback
    ? playbackBackground(surface.playback)
    : getNodeOwnOutputVideo(node, ["pano_input_videos"], () => surface.dom?.requestDraw?.())
  ) || getLinkedInputImageForPreview(
    node,
    BACKGROUND_INPUT_NAMES,
    () => surface.dom?.requestDraw?.(),
  );
}

export function suppressBuiltInPreviewImgs(node) {
  if (!node) return;
  if (Array.isArray(node.imgs) && node.imgs.length) node.imgs = [];
}

const shownOwnOutputs = new WeakMap();

// Shows the node's output as its media, and returns whether it is new.
export function showOwnNodeOutput(node, output) {
  if (isRepeatedOutput(shownOwnOutputs, node, output)) return false;
  syncOwnOutputSourceFromExecuted(node);
  invalidatePreviewImageCaches(node);
  suppressBuiltInPreviewImgs(node);
  return true;
}

// A restored output is only shown: the port Sticker is synced into the state by a run of the node, so that
// opening a workflow does not change it.
export async function restoreNodeOutput(node) {
  const output = await restoreLoadedNodeOutput(node, comfy.app, comfy.api);
  if (!output) return;
  showOwnNodeOutput(node, output);
  nodeSurface(node).dom?.requestDraw?.();
}

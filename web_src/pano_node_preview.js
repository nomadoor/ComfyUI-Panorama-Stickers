import {
  attachPanoramaPreview as runtimeAttachPanoramaPreview,
  attachCutoutPreview as runtimeAttachCutoutPreview,
} from "./pano_preview_runtime.js";
import { attachPreviewNodeRuntime } from "./pano_preview_previewnode.js";

export { restoreNodeOutput } from "./pano_preview_runtime.js";

function wrapOnOpen(node, onOpen) {
  return typeof onOpen === "function" ? (...args) => onOpen(node, ...args) : onOpen;
}

export function attachPreviewNode(node, options = {}) {
  attachPreviewNodeRuntime(node, {
    ...options,
    onOpen: wrapOnOpen(node, options.onOpen),
  });
}

export function attachStickersNodePreview(node, options = {}) {
  const enabled = options?.enabled === true;
  runtimeAttachPanoramaPreview(node, {
    ...options,
    mode: "stickers",
    noPreview: !enabled,
    onOpen: wrapOnOpen(node, options.onOpen),
  });
}

export function attachCutoutPreview(node, options = {}) {
  runtimeAttachCutoutPreview(node, {
    ...options,
    onOpen: wrapOnOpen(node, options.onOpen),
  });
}

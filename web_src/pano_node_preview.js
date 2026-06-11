import {
  attachPanoramaPreview as runtimeAttachPanoramaPreview,
  attachCutoutPreview as runtimeAttachCutoutPreview,
} from "./pano_preview_runtime.js";
import { attachPreviewNodeRuntime } from "./pano_preview_previewnode.js";
import { patchNodeLifecycle } from "./pano_preview_hooks.js";

function isNodeType(value) {
  return !!value?.prototype;
}

function wrapOnOpen(node, onOpen) {
  return typeof onOpen === "function" ? (...args) => onOpen(node, ...args) : onOpen;
}

export function attachPreviewNode(target, options = {}) {
  if (isNodeType(target)) return;
  attachPreviewNodeRuntime(target, {
    ...options,
    onOpen: wrapOnOpen(target, options.onOpen),
  });
}

export function attachStickersNodePreview(nodeType, options = {}) {
  const enabled = options?.enabled === true;
  const runtimeOptions = {
    ...options,
    mode: "stickers",
    noPreview: !enabled,
  };
  if (!isNodeType(nodeType)) {
    runtimeAttachPanoramaPreview(nodeType, {
      ...runtimeOptions,
      onOpen: wrapOnOpen(nodeType, options.onOpen),
    });
    return;
  }
  patchNodeLifecycle(nodeType, "stickers_node_preview", (node) => {
    runtimeAttachPanoramaPreview(node, {
      ...runtimeOptions,
      onOpen: wrapOnOpen(node, options.onOpen),
    });
  });
}

export function attachCutoutPreview(nodeType, options = {}) {
  if (!isNodeType(nodeType)) {
    runtimeAttachCutoutPreview(nodeType, {
      ...options,
      onOpen: wrapOnOpen(nodeType, options.onOpen),
    });
    return;
  }
  patchNodeLifecycle(nodeType, "cutout_preview", (node) => {
    runtimeAttachCutoutPreview(node, {
      ...options,
      onOpen: wrapOnOpen(node, options.onOpen),
    });
  });
}

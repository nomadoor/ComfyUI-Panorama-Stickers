import {
  attachPanoramaPreview as runtimeAttachPanoramaPreview,
  attachCutoutPreview as runtimeAttachCutoutPreview,
} from "./pano_preview_runtime.js";
import { attachPreviewNodeRuntime } from "./pano_preview_previewnode.js";
import { patchNodeLifecycle } from "./pano_preview_hooks.js";

function isNodeType(value) {
  return !!value?.prototype;
}

export function attachPreviewNode(target, options = {}) {
  if (isNodeType(target)) return;
  attachPreviewNodeRuntime(target, {
    ...options,
    onOpen: typeof options.onOpen === "function" ? () => options.onOpen(target) : options.onOpen,
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
    runtimeAttachPanoramaPreview(nodeType, runtimeOptions);
    return;
  }
  patchNodeLifecycle(nodeType, "stickers_node_preview", (node) => {
    runtimeAttachPanoramaPreview(node, {
      ...runtimeOptions,
      onOpen: typeof options.onOpen === "function" ? () => options.onOpen(node) : options.onOpen,
    });
  });
}

export function attachCutoutPreview(nodeType, options = {}) {
  if (!isNodeType(nodeType)) {
    runtimeAttachCutoutPreview(nodeType, options);
    return;
  }
  patchNodeLifecycle(nodeType, "cutout_preview", (node) => {
    runtimeAttachCutoutPreview(node, {
      ...options,
      onOpen: typeof options.onOpen === "function" ? () => options.onOpen(node) : options.onOpen,
    });
  });
}

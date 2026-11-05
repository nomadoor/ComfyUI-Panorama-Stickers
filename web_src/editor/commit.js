// Writing the editor's state back to the node: the state widget, the shared settings, the painting layer
// left to upload on close, and the node's previews.
import {
  editorStateWrite,
  LEGACY_BACKGROUND_COLOR,
  normalizeCoverageValue,
} from "../pano_editor_state.js";
import { peekNodeSurface, peekPreviewNode } from "../pano_node_bridge.js";
import { saveSharedUiSettings } from "./ui_settings.js";

export function createCommit(deps) {
  const {
    app, bgWidget, coverageWidget, node, presetWidget, readOnly, state, stateWidget,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let needsPaintingLayerSync, resolveEditorOutputPresetWidth, syncPaintingLayerAsync;

  function apply() {
    if (readOnly) return;
    state.projection_model = "pinhole_rectilinear";
    state.alpha_mode = "straight";
    if (presetWidget) state.output_preset = resolveEditorOutputPresetWidth(Number(state.output_preset || 2048));
    if (coverageWidget) state.coverage = normalizeCoverageValue(coverageWidget.value);
    if (bgWidget) state.bg_color = String(bgWidget.value || state.bg_color || LEGACY_BACKGROUND_COLOR);
    commitState();
    node.setDirtyCanvas(true, true);
  }

  function commitState() {
    if (readOnly) return;
    state.coverage = normalizeCoverageValue(state.coverage);
    if (!stateWidget) return;
    const text = editorStateWrite(node, state, String(stateWidget.value ?? ""));
    if (text === null) return;
    stateWidget.value = text;
    stateWidget.callback?.(text);
  }
  function persistUiSettings() {
    state.ui_settings = saveSharedUiSettings(state.ui_settings);
    if (!readOnly) {
      commitState();
    }
  }
  function commitAndRefreshNode() {
    if (readOnly) return;
    commitState();
    node.setDirtyCanvas?.(true, true);
  }

  // Returns the paint layer upload (settled when it is done or failed), or null without one.
  function triggerBackgroundPersistenceOnClose() {
    if (readOnly) return null;
    if (!needsPaintingLayerSync()) return null;
    return syncPaintingLayerAsync().catch((error) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", error);
    });
  }

  function syncCoverageChangeToNodePreviews(options = {}) {
    const syncPreview = options.syncPreview !== false;
    const syncGraph = options.syncGraph !== false;
    if (syncPreview) {
      peekPreviewNode(node)?.runtime?.requestDraw?.();
      peekNodeSurface(node)?.dom?.requestDraw?.();
      node.setDirtyCanvas?.(true, false);
    }
    if (syncGraph) {
      node.graph?.setDirtyCanvas?.(true, true);
      app?.canvas?.setDirty?.(true, true);
    }
  }

  return {
    connect(api) {
      ({
        needsPaintingLayerSync, resolveEditorOutputPresetWidth, syncPaintingLayerAsync,
      } = api);
    },
    apply, commitState, persistUiSettings, commitAndRefreshNode, triggerBackgroundPersistenceOnClose,
    syncCoverageChangeToNodePreviews,
  };
}

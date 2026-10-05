// Writing the editor's state back to the node: the state widget, the shared settings, the painting layer
// left to upload on close, and the node's previews.
import {
  editorStateText,
  normalizeCoverageValue,
  sameEditorStateText,
  setEditorActive,
} from "../pano_editor_state.js";
import { peekNodeSurface, peekPreviewNode } from "../pano_node_bridge.js";
import { saveSharedUiSettings } from "./ui_settings.js";

export function createCommit(deps) {
  const {
    app, bgWidget, cameraV2, coverageWidget, node, presetWidget, readOnly, state, stateWidget,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let needsPaintingLayerSync, resolveEditorOutputPresetWidth, syncCutoutShot, syncPaintingLayerAsync;

  function apply() {
    if (readOnly) return;
    state.projection_model = "pinhole_rectilinear";
    state.alpha_mode = "straight";
    if (presetWidget) state.output_preset = resolveEditorOutputPresetWidth(Number(state.output_preset || 2048));
    if (coverageWidget) state.coverage = normalizeCoverageValue(coverageWidget.value);
    if (bgWidget) state.bg_color = String(bgWidget.value || state.bg_color || "#00ff00");
    commitState();
    node.setDirtyCanvas(true, true);
  }

  function commitState() {
    if (readOnly) return;
    syncCutoutShot();
    state.coverage = normalizeCoverageValue(state.coverage);
    setEditorActive(node, state.active);
    const text = editorStateText(node, state);
    if (stateWidget && !sameEditorStateText(node, text, String(stateWidget.value ?? ""), { rebased: cameraV2 })) {
      stateWidget.value = text;
      stateWidget.callback?.(text);
    }
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

  function triggerBackgroundPersistenceOnClose() {
    if (readOnly) return;
    if (needsPaintingLayerSync()) {
      void syncPaintingLayerAsync().catch((error) => {
        console.error("[PanoramaPaintingLayerSync] background close sync failed", error);
      });
    }
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
        needsPaintingLayerSync, resolveEditorOutputPresetWidth, syncCutoutShot, syncPaintingLayerAsync,
      } = api);
    },
    apply, commitState, persistUiSettings, commitAndRefreshNode, triggerBackgroundPersistenceOnClose,
    syncCoverageChangeToNodePreviews,
  };
}

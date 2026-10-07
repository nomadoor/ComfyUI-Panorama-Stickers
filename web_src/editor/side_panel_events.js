// The side panel's (inspector's) clicks, inputs and changes: the edits of the selected item's parameters,
// its Lanes' keys, and the panel's buttons.
import { deriveCutoutAspectLabelFromFov } from "../pano_cutout_view_math.js";
import {
  normalizeCoverageValue,
  setCameraField,
  setStickerOpacity,
  setWorldStickerField,
} from "../pano_editor_state.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { WORLD_MIN_SCALE, WORLD_UNLIMITED_FIELDS } from "./constants.js";

export function createSidePanelEvents(deps) {
  const {
    cameraV2, coverageWidget, editor, node, previewMode, runtime, shotEditor, state, studio, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let apply, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState, closeEditor, commitAndRefreshNode,
    commitState, getActiveCutoutShot, getCutoutInspectorItems, getList, getSelected, getSelectedItems, getSelectedKind,
    isItemLocked, isSceneSticker, isStrokeGroupItem, markObjectVisualsDirty, persistUiSettings, poseOf,
    pushHistory, releaseHiddenSelection, requestDraw, revertPortHandoffLane, selectedWorldSticker, setSelectedItem,
    stopTimelinePlayback, syncCoverageChangeToNodePreviews, syncCutoutShot, turnViewTo, updateSelectionMenu,
    updateSidePanel, worldStickerEditable, writePose;

  function applySidePanelParam(key, rawValue, commit = false) {
    // Edits during playback would key every frame they pass.
    stopTimelinePlayback();
    const frameInspectorShot = shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : null;
    const selected = frameInspectorShot || getSelected();
    const selectedKind = frameInspectorShot ? "shot" : getSelectedKind();
    const worldInspected = selectedWorldSticker();
    if (worldInspected && !worldStickerEditable(worldInspected)) return;
    if (!worldInspected && (!selected || selectedKind === "stroke" || isItemLocked(selected))) return;
    const param = (uiState.sidePanel?.params || []).find((item) => item.key === key);
    if (!param || param.enabled === false) return;
    let out = Number(rawValue);
    if (Number.isNaN(out)) out = 0;
    // A world Sticker's position has no limit, and its scale only stays above 0. Nor has the Camera's.
    if ((worldInspected || cameraV2) && WORLD_UNLIMITED_FIELDS.has(key)) out = key === "scale" ? Math.max(out, WORLD_MIN_SCALE) : out;
    else out = clamp(out, Number(param.min), Number(param.max));
    if (key === "yaw_deg") out = wrapYaw(out);
    if (!worldInspected && cameraV2 && key.startsWith("position_")) {
      syncCutoutShot();
      setCameraField(state.camera, editor.frame, key, out);
      updateSidePanel();
      requestDraw();
      if (commit) pushHistory();
      return;
    }
    if (worldInspected) {
      setWorldStickerField(worldInspected, editor.frame, key, out);
      markObjectVisualsDirty();
      updateSidePanel();
      requestDraw();
      if (commit) pushHistory();
      return;
    }
    if (key === "opacity") setStickerOpacity(selected, editor.frame, out / 100);
    else writePose(selected, { [key]: out });
    if (shotEditor && !isSceneSticker(selected) && (key === "hFOV_deg" || key === "vFOV_deg")) {
      selected.aspect_id = deriveCutoutAspectLabelFromFov(selected);
    }
    updateSidePanel();
    requestDraw();
    if (commit) pushHistory();
  }
  // The Visible and Lock switches of the selected upstream element (ADR 0030, PanoUpstreamOrigin.vue): its
  // working Sticker's field, written back as an override with the Undo step. Hidden, it is no longer selected.
  function setUpstreamField(name, value) {
    const sticker = selectedWorldSticker() || getSelected();
    if (!isUpstreamSticker(sticker) || uiState.sidePanel?.upstream?.disabled !== false || sticker[name] === value) return;
    stopTimelinePlayback();
    sticker[name] = value;
    releaseHiddenSelection();
    markObjectVisualsDirty();
    pushHistory();
    commitAndRefreshNode();
    updateSidePanel();
    updateSelectionMenu();
    requestDraw();
  }
  async function onSidePanelClick(ev) {
    const target = ev.target.closest("[data-action]");
    if (!target) return;
    const action = String(target.getAttribute("data-action") || "");
    if (action === "coverage-set") {
      const nextCoverage = normalizeCoverageValue(target.getAttribute("data-coverage"));
      if (nextCoverage === normalizeCoverageValue(state.coverage)) return;
      state.coverage = nextCoverage;
      editor.coverage = nextCoverage;
      if (coverageWidget) {
        coverageWidget.value = String(nextCoverage);
      }
      if (previewMode) {
        runtime.backgroundDirty = true;
      } else {
        commitState();
        syncCoverageChangeToNodePreviews({
          syncPreview: type !== "cutout",
          syncGraph: type !== "cutout",
        });
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "revert-handoff-lane") {
      stopTimelinePlayback();
      revertPortHandoffLane(String(target.getAttribute("data-lane") || ""));
      return;
    }
    if (action === "upstream-visible" || action === "upstream-locked") {
      setUpstreamField(action === "upstream-visible" ? "visible" : "locked", target.getAttribute("data-value") === "1");
      return;
    }
    if (action === "toggle-selection-picker") {
      if (uiState.sidePanel?.selectionPicker?.disabled) return;
      uiState.sidePanel.selectionPicker.open = !uiState.sidePanel.selectionPicker.open;
      return;
    }
    if (action === "select-picker-item") {
      uiState.sidePanel.selectionPicker.open = false;
      const selectedId = String(target.getAttribute("data-selection-id") || "");
      let nextItem = null;
      if (selectedId) {
        if (type === "stickers") nextItem = [...getList(), ...(studio ? state.shots : [])].find((item) => String(item?.id || "") === selectedId) || null;
        else nextItem = getCutoutInspectorItems().find((entry) => String(entry?.item?.id || "") === selectedId)?.item || null;
      }
      setSelectedItem(nextItem || null);
      if (nextItem && !isStrokeGroupItem(nextItem)) {
        const pose = poseOf(nextItem);
        turnViewTo(wrapYaw(Number(pose.yaw_deg || 0)), clamp(Number(pose.pitch_deg || 0), -89.9, 89.9));
      }
      updateSidePanel();
      updateSelectionMenu();
      requestDraw();
      return;
    }
    if (action === "copy-state-inline") {
      const selected = getSelected();
      const selectedKind = getSelectedKind();
      if (!selected || selectedKind === "stroke" || getSelectedItems().length > 1) return;
      const text = JSON.stringify(shotEditor && selectedKind !== "image"
        ? buildCanonicalCutoutStickerState(selected)
        : buildCanonicalSelectedStickerState(poseOf(selected)));
      try {
        await navigator.clipboard.writeText(text);
        if (uiState.sidePanel?.copyStateButton) {
          uiState.sidePanel.copyStateButton.label = "Copied";
          window.setTimeout(() => {
            if (uiState.sidePanel?.copyStateButton) uiState.sidePanel.copyStateButton.label = "Copy State";
          }, 900);
        }
      } catch {
        // ignore clipboard failures
      }
      return;
    }
    if (action === "set-invert-x") {
      state.ui_settings.invert_view_x = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "set-invert-y") {
      state.ui_settings.invert_view_y = target.getAttribute("data-value") === "1";
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "ui-reset-defaults") {
      state.ui_settings.invert_view_x = false;
      state.ui_settings.invert_view_y = false;
      persistUiSettings();
      updateSidePanel();
      node.setDirtyCanvas?.(true, true);
      requestDraw();
      return;
    }
    if (action === "close-preview") {
      void closeEditor();
      return;
    }
    if (action === "cancel-close") {
      void closeEditor();
      return;
    }
    if (action === "save-close") {
      apply();
      void closeEditor();
    }
  }
  function onSidePanelInput(ev) {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, false);
  }
  function onSidePanelChange(ev) {
    const target = ev.target.closest("[data-action='param-input']");
    if (!target) return;
    applySidePanelParam(String(target.getAttribute("data-param-key") || ""), target.value, true);
  }

  return {
    connect(api) {
      ({
        apply, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState, closeEditor, commitAndRefreshNode,
        commitState, getActiveCutoutShot, getCutoutInspectorItems, getList, getSelected, getSelectedItems, getSelectedKind,
        isItemLocked, isSceneSticker, isStrokeGroupItem, markObjectVisualsDirty, persistUiSettings, poseOf,
        pushHistory, releaseHiddenSelection, requestDraw, revertPortHandoffLane, selectedWorldSticker, setSelectedItem,
        stopTimelinePlayback, syncCoverageChangeToNodePreviews, syncCutoutShot, turnViewTo, updateSelectionMenu,
        updateSidePanel, worldStickerEditable, writePose,
      } = api);
    },
    onSidePanelClick, onSidePanelInput, onSidePanelChange,
  };
}

// The side panel's (inspector's) clicks, inputs and changes: the edits of the selected item's parameters,
// its Lanes' keys, and the panel's buttons.
import { deriveCutoutAspectLabelFromFov } from "../pano_cutout_view_math.js";
import {
  normalizeCoverageValue,
  cameraLensFields,
  setCameraCurveKeepingCenter,
  setCameraField,
  setStickerOpacity,
  setWorldStickerField,
} from "../pano_editor_state.js";
import { clamp, wrapYaw } from "../pano_math.js";
import { ANIMATION_DEFAULT, ANIMATION_SPEED_MAX, ANIMATION_SPEED_MIN } from "../pano_scene_state.js";
import { isUpstreamSticker } from "../pano_upstream.js";
import { WORLD_MIN_SCALE, WORLD_UNLIMITED_FIELDS } from "./constants.js";

export function createSidePanelEvents(deps) {
  const {
    cameraV2, coverageWidget, editor, node, previewMode, runtime, shotEditor, state, studio, timers, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let animationClipsOf, apply, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState, closeEditor, commitAndRefreshNode,
    commitState, getActiveCutoutShot, getCutoutInspectorItems, getList, getSelected, getSelectedItems, getSelectedKind,
    isItemLocked, isSceneSticker, isStrokeGroupItem, markObjectVisualsDirty, persistUiSettings, poseOf,
    pushHistory, releaseHiddenSelection, requestDraw, revertPortHandoffLane,
    revertUpstreamSticker, selectedWorldSticker, setSelectedItem, stopTimelinePlayback, syncCoverageChangeToNodePreviews,
    syncCutoutShot, syncTimeline, turnViewTo, updateSelectionMenu, updateSidePanel, worldStickerEditable, writePose;

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
    if (key === "animation_clip" || key === "animation_speed") {
      applyAnimationParam(worldInspected, key, rawValue, commit);
      return;
    }
    let out = Number(rawValue);
    if (Number.isNaN(out)) out = 0;
    // A world Sticker's position has no limit, and its scale only stays above 0. Nor has the Camera's.
    if ((worldInspected || cameraV2) && WORLD_UNLIMITED_FIELDS.has(key)) out = key === "scale" ? Math.max(out, WORLD_MIN_SCALE) : out;
    else out = clamp(out, Number(param.min), Number(param.max));
    if (key === "yaw_deg") out = wrapYaw(out);
    // The Camera's H FOV, aspect and κ are its own fields, written directly (docs/editor-interaction.md).
    const cameraLens = !worldInspected && cameraV2 && state.camera && (key === "curve" || key === "hFOV_deg" || key === "aspect");
    if (!worldInspected && cameraV2 && (key.startsWith("position_") || cameraLens)) {
      syncCutoutShot();
      // A Lens curve edit keeps the center scale of the Camera where it began (docs/editor-interaction.md "レンズの
      // 行"): editor.lensCurveEdit holds its evaluated κ and hFOV until it commits, an Undo step is taken or the
      // selection changes (editor/history.js, editor/selection.js), so a drag that lost its change event leaves none.
      if (key === "curve") {
        const edit = editor.lensCurveEdit;
        if (edit?.camera !== state.camera || edit.frame !== editor.frame) {
          editor.lensCurveEdit = { camera: state.camera, frame: editor.frame, start: cameraLensFields(state.camera, editor.frame) };
        }
        setCameraCurveKeepingCenter(state.camera, editor.frame, out, editor.lensCurveEdit.start);
      } else {
        editor.lensCurveEdit = null;
        setCameraField(state.camera, editor.frame, key, out);
      }
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
  // An animated 3D file's Clip (the index of a clip in the file's order, kept by its name) or Speed (0.1–10) of the
  // world Sticker `sticker`, without Keyframes (ADR 0043). An upstream element's is not edited.
  function applyAnimationParam(sticker, key, rawValue, commit) {
    const clips = sticker && !isUpstreamSticker(sticker) ? animationClipsOf(sticker) : null;
    if (!clips) return;
    const current = sticker.animation ?? ANIMATION_DEFAULT;
    let next;
    if (key === "animation_clip") {
      const clip = clips[Number(rawValue)];
      if (!clip) return;
      next = { ...current, clip: clip.name };
    } else {
      const speed = Number(rawValue);
      if (!Number.isFinite(speed)) return;
      next = { ...current, speed: clamp(speed, ANIMATION_SPEED_MIN, ANIMATION_SPEED_MAX) };
    }
    sticker.animation = next;
    markObjectVisualsDirty();
    // A clip's length and the Speed set the cycle that the Auto length counts (ADR 0043).
    syncTimeline();
    updateSidePanel();
    requestDraw();
    if (commit) pushHistory();
  }
  // Whether the button of the inspector's upstream rows (PanoUpstreamOrigin.vue) that `action` and `lane` name
  // is enabled: a click on a disabled one does nothing.
  function upstreamButtonEnabled(action, lane) {
    const model = uiState.sidePanel?.upstream;
    if (!model) return false;
    const button = lane ? model.lanes.find((item) => item.name === lane && item.action === action)
      : action === "revert-upstream" ? model.revertAll : null;
    return !!button && !button.disabled;
  }
  // "Revert to upstream" of the selected upstream element (ADR 0030): all its overrides, or the Lane `lane`, as
  // an Undo step. A reverted element that is hidden upstream is no longer selected.
  function revertUpstream(lane) {
    const sticker = selectedWorldSticker() || getSelected();
    if (!isUpstreamSticker(sticker)) return;
    stopTimelinePlayback();
    if (!revertUpstreamSticker(sticker, lane)) return;
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
    if (action === "revert-handoff-lane" || action === "revert-upstream") {
      const lane = target.getAttribute("data-lane") || null;
      if (!upstreamButtonEnabled(action, lane)) return;
      if (action === "revert-handoff-lane") {
        stopTimelinePlayback();
        revertPortHandoffLane(lane);
      } else {
        revertUpstream(lane);
      }
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
          timers.set(() => {
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
        animationClipsOf, apply, buildCanonicalCutoutStickerState, buildCanonicalSelectedStickerState, closeEditor, commitAndRefreshNode,
        commitState, getActiveCutoutShot, getCutoutInspectorItems, getList, getSelected, getSelectedItems, getSelectedKind,
        isItemLocked, isSceneSticker, isStrokeGroupItem, markObjectVisualsDirty, persistUiSettings, poseOf,
        pushHistory, releaseHiddenSelection, requestDraw, revertPortHandoffLane,
        revertUpstreamSticker, selectedWorldSticker, setSelectedItem, stopTimelinePlayback, syncCoverageChangeToNodePreviews,
        syncCutoutShot, syncTimeline, turnViewTo, updateSelectionMenu, updateSidePanel, worldStickerEditable, writePose,
      } = api);
    },
    onSidePanelClick, onSidePanelInput, onSidePanelChange,
  };
}

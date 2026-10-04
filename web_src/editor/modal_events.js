// The modal's own controls, read from their DOM events (PanoModal.vue renders them): the tool rail, the
// view and space buttons, the Frame rail, the paint dock and its color picker, the VIDEO transport,
// tooltips, and fullscreen.
import { ICON } from "../icons.js";
import { BRUSH_PRESETS } from "../pano_brush_presets.js";
import { patchUiButton } from "../pano_editor_ui_state.js";
import { DRAW_REASON } from "../pano_frame_scheduler.js";
import { clamp } from "../pano_math.js";
import { DEFAULT_DISTANCE } from "../pano_space.js";
import { frameAtTime } from "../pano_video_playback.js";
import { shownSpaceMode } from "../pano_view_transition.js";
import { PAINT_COLOR_SWATCHES } from "./constants.js";
import {
  cloneColor,
  colorsApproximatelyEqual,
  hsv01ToRgb,
  isPresetPaintColor,
  rgb01ToHsv,
} from "./helpers.js";
import { setNodeGridVisibility } from "./ui_settings.js";

export function createModalEvents(deps) {
  const {
    editor, node, overlay, paintColorPop, paintColorSv, paintHueStrip, readOnly, root, runtime, shotEditor,
    tooltip, uiState, videoEl,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let addCutoutFrame, addImageSticker, addStudioCamera, addWorldImageSticker, applyCutoutAspectCustom,
    bringSelectedToFront, clearAll, clearPaintingLayer, clearSelection, commitAndRefreshNode, contentSphere,
    deleteSelected, duplicateSelected, forceCursorTool, frameSpaceContent, getActiveCutoutShot,
    getBrushPresetIdForTool, getSelected, hidePaintSizePreview, hideTooltip, isErpCamera, isFreeSpaceView,
    playback, playbackFps, pushHistory, queueVideoTransportLayout, replaceSelectedImage, requestDraw,
    restoreHistory, restoreSelectedToInitialPose, rotateCutoutAspect90, sendSelectedToBack, setShotAspect,
    setSpaceMode, showPaintSizePreview, showTooltipFor, spaceOrigin, startAnimation, syncFloatingViewButtonState,
    syncPaintUi, syncSidePanelControls, syncVideoTransportState, syncViewToggleState, togglePlayback,
    toggleSelectedExternalStickerVisibility, toggleSelectedLock, toggleVideoMuted, transitionView,
    updateSelectionMenu, updateSidePanel, videoState;

  const commitCustomPaintHistory = () => {
    if (!editor.customPaintSessionStart) return;
    if (colorsApproximatelyEqual(editor.customPaintSessionStart, editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    if (isPresetPaintColor(editor.customPaintColor)) {
      editor.customPaintSessionStart = null;
      return;
    }
    const next = [
      cloneColor(editor.customPaintColor),
      ...editor.customPaintHistory.filter((item) => !colorsApproximatelyEqual(item, editor.customPaintColor)),
    ];
    editor.customPaintHistory = next.slice(0, 8);
    editor.customPaintSessionStart = null;
  };
  const closePaintColorPop = (commitHistory = false) => {
    if (!paintColorPop || paintColorPop.hidden) return;
    if (commitHistory) commitCustomPaintHistory();
    else editor.customPaintSessionStart = null;
    paintColorPop.hidden = true;
    uiState.paintDock.colorPopOpen = false;
  };
  const openPaintColorPop = () => {
    if (!paintColorPop) return;
    if (paintColorPop.hidden) editor.customPaintSessionStart = cloneColor(editor.customPaintColor);
    paintColorPop.hidden = false;
    uiState.paintDock.colorPopOpen = true;
  };
  function syncGridToggleButton() {
    syncFloatingViewButtonState();
  }
  function onRootClick(ev) {
    if (ev.target?.matches?.("[data-confirm-overlay]")) {
      const resolver = uiState.confirmDialog?.resolve;
      uiState.confirmDialog = { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null };
      resolver?.(false);
      return;
    }
    const spaceModeTarget = ev.target.closest("[data-space-mode]");
    if (spaceModeTarget) {
      setSpaceMode(spaceModeTarget.getAttribute("data-space-mode"));
      return;
    }
    const gizmoModeTarget = ev.target.closest("[data-gizmo-mode]");
    if (gizmoModeTarget) {
      editor.gizmoMode = gizmoModeTarget.getAttribute("data-gizmo-mode");
      runtime.backgroundDirty = true;
      updateSelectionMenu();
      requestDraw({ localOnly: true, reason: DRAW_REASON.VIEW });
      return;
    }
    const viewTarget = ev.target.closest("[data-view]");
    if (viewTarget) {
      if (viewTarget.getAttribute("aria-disabled") === "true") return;
      const previousMode = editor.mode;
      editor.mode = String(viewTarget.getAttribute("data-view") || "pano");
      if (shotEditor && editor.mode === "frame") {
        if (previousMode !== "frame") runtime.frameSafeRect = null;
        updateSidePanel();
        updateSelectionMenu();
      }
      forceCursorTool();
      syncViewToggleState();
      requestDraw();
      return;
    }
    const actionTarget = ev.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (actionTarget && !readOnly) {
      if (actionTarget.matches("[data-tool-mode]")) {
        const newTool = String(actionTarget.getAttribute("data-tool-mode") || "cursor");
        editor.primaryTool = newTool;
        if (newTool === "paint" || newTool === "mask") clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-tool-ui-action]")) {
        const action = String(actionTarget.getAttribute("data-tool-ui-action") || "");
        if ((action === "undo" || action === "redo") && actionTarget.disabled) return;
        if (action === "undo") restoreHistory(-1);
        else if (action === "redo") restoreHistory(1);
        else if (action === "clear") clearAll();
        else if (action === "add" || action === "add-image") addImageSticker();
        else if (action === "add-world") addWorldImageSticker();
        else if (action === "add-or-look") addCutoutFrame();
        else if (action === "add-camera") addStudioCamera();
        return;
      }
      if (actionTarget.matches("[data-paint-tool]")) {
        editor.primaryTool = "paint";
        const tool = String(actionTarget.getAttribute("data-paint-tool") || "pen");
        editor.paintTool = tool;
        clearSelection({ preservePanelValues: true });
        if (BRUSH_PRESETS[tool]) editor.activeBrushPresetId = tool;
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-mask-tool]")) {
        editor.primaryTool = "mask";
        editor.maskTool = String(actionTarget.getAttribute("data-mask-tool") || "pen");
        clearSelection({ preservePanelValues: true });
        syncPaintUi();
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (actionTarget.matches("[data-paint-layer-clear-current]")) {
        const layerKind = String(actionTarget.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        clearPaintingLayer(layerKind);
        return;
      }
      if (actionTarget.matches("[data-paint-color-swatch]")) {
        const swatch = PAINT_COLOR_SWATCHES.find((item) => item.id === actionTarget.getAttribute("data-paint-color-swatch"));
        if (!swatch) return;
        editor.paintColor = cloneColor(swatch.color);
        closePaintColorPop(true);
        syncPaintUi();
        return;
      }
      if (actionTarget.matches("[data-paint-color-custom]")) {
        ev.preventDefault();
        ev.stopPropagation();
        if (paintColorPop && !paintColorPop.hidden) closePaintColorPop(true);
        else openPaintColorPop();
        syncPaintUi();
        return;
      }
    }
    const action = String(actionTarget?.getAttribute?.("data-action") || "");
    if (action === "video-play-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      videoState.resumeAfterScrub = false;
      togglePlayback();
      return;
    }
    if (action === "video-audio-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      toggleVideoMuted();
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (action === "video-loop-toggle") {
      ev.preventDefault();
      ev.stopPropagation();
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextLoop = !uiState.videoTransport.loop;
      uiState.videoTransport.loop = nextLoop;
      videoEl.loop = nextLoop;
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        loop: nextLoop,
        muted: videoEl.muted,
        volume: Number(videoEl.volume ?? uiState.videoTransport.volume ?? 1),
      });
      if (typeof actionTarget?.blur === "function") actionTarget.blur();
      return;
    }
    if (!readOnly) {
      if (action === "frame-aspect") {
        uiState.frameRail.aspectOpen = !uiState.frameRail.aspectOpen;
        return;
      }
      if (action === "frame-aspect-set") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot || shot.locked === true) return;
        setShotAspect(shot, String(actionTarget.getAttribute("data-aspect") || "1:1"));
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        // 360° leaves the Frame view (Panorama Studio), whose inspector shows the shot.
        updateSidePanel();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "frame-aspect-custom") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        const width = actionTarget.getAttribute("data-custom-width");
        const height = actionTarget.getAttribute("data-custom-height");
        if (!shot || !applyCutoutAspectCustom(shot, width, height)) return;
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
      if (action === "frame-rotate-90") {
        const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
        if (!shot || shot.locked === true) return;
        rotateCutoutAspect90(shot);
        uiState.frameRail.aspectOpen = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        syncViewToggleState();
        requestDraw();
        return;
      }
      if (action === "aspect") {
        editor.cutoutAspectOpen = !editor.cutoutAspectOpen;
        editor.menuSize.measured = false;
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "aspect-set") {
        const selected = getSelected();
        if (!selected) return;
        const aspect = String(actionTarget.getAttribute("data-aspect") || "1:1");
        setShotAspect(selected, aspect);
        editor.cutoutAspectOpen = false;
        editor.menuSize.measured = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "rotate-90") {
        const selected = getSelected();
        if (!selected || isErpCamera()) return;
        rotateCutoutAspect90(selected);
        editor.cutoutAspectOpen = false;
        editor.menuSize.measured = false;
        syncSidePanelControls();
        pushHistory();
        commitAndRefreshNode();
        updateSelectionMenu();
        requestDraw();
        return;
      }
      if (action === "bring-front") {
        bringSelectedToFront();
        return;
      }
      if (action === "send-back") {
        sendSelectedToBack();
        return;
      }
      if (action === "duplicate") {
        duplicateSelected();
        return;
      }
      if (action === "replace-image") {
        replaceSelectedImage();
        return;
      }
      if (action === "toggle-lock") {
        toggleSelectedLock();
        return;
      }
      if (action === "back-initial") {
        restoreSelectedToInitialPose();
        return;
      }
      if (action === "toggle-visible") {
        toggleSelectedExternalStickerVisibility();
        return;
      }
      if (action === "delete") {
        deleteSelected();
        return;
      }
    }
    if (action === "reset-view") {
      if (editor.mode === "frame") return;
      // In space the view also goes back to where 3DoF stands (the World origin, where the ERP is taken from,
      // or the Cutout's Camera), as it opened.
      transitionView(
        { position: spaceOrigin(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: contentSphere()?.radius || DEFAULT_DISTANCE },
        { mode: shownSpaceMode(editor.spaceMode, editor.viewTransition), moved: false },
      );
      return;
    }
    if (action === "frame-view") {
      // As the button shows it: not on the way back to 3DoF.
      if (!isFreeSpaceView() || shownSpaceMode(editor.spaceMode, editor.viewTransition) !== "6dof") return;
      frameSpaceContent();
      return;
    }
    if (action === "toggle-grid") {
      if (editor.mode === "frame") return;
      editor.showGrid = !editor.showGrid;
      setNodeGridVisibility(node?.id, editor.showGrid);
      syncGridToggleButton();
      requestDraw();
      return;
    }
    if (action === "toggle-fullscreen") {
      ev.preventDefault();
      ev.stopPropagation();
      toggleFullscreen();
      return;
    }
    if (action === "toggle-output-preview-size") {
      ev.preventDefault();
      ev.stopPropagation();
      const nextExpanded = !editor.outputPreviewExpanded;
      editor.outputPreviewExpanded = nextExpanded;
      startAnimation(() => {
        editor.outputPreviewAnimFrom = editor.outputPreviewAnim;
        editor.outputPreviewAnimTo = nextExpanded ? 1 : 0;
        editor.outputPreviewAnimStartTs = performance.now();
      });
      syncOutputPreviewToggleButton();
      requestDraw();
      return;
    }
    const historyBtn = ev.target.closest("[data-paint-history-index]");
    if (!historyBtn) return;
    const idx = Number(historyBtn.getAttribute("data-paint-history-index"));
    const color = editor.customPaintHistory[idx];
    if (!color) return;
    editor.customPaintColor = cloneColor(color);
    editor.paintColor = cloneColor(color);
    syncPaintUi();
  }
  function onRootInput(ev) {
    const videoSeek = ev.target.closest("[data-video-seek]");
    if (videoSeek) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      if (playback.playing) videoState.resumeAfterScrub = true;
      playback.seek(frameAtTime(Number(videoSeek.value || 0), playbackFps()));
      return;
    }
    const videoVolume = ev.target.closest("[data-video-volume]");
    if (videoVolume) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      const nextVolume = clamp(Number(videoVolume.value || 0), 0, 1);
      videoEl.volume = nextVolume;
      videoEl.muted = nextVolume <= 0.0001;
      syncVideoTransportState({
        hasAudio: uiState.videoTransport.hasAudio,
        muted: videoEl.muted,
        volume: nextVolume,
      });
      return;
    }
    const slider = ev.target.closest("[data-paint-size-slider]");
    if (slider) {
      if (slider.disabled) return;
      const v = Math.max(1, Math.min(120, Math.round(Number(slider.value))));
      const sizePresetId = getBrushPresetIdForTool(editor.primaryTool === "paint" ? editor.paintTool : editor.maskTool);
      editor.brushSizes[sizePresetId] = v;
      syncPaintUi();
      showPaintSizePreview();
      return;
    }
    const alphaSlider = ev.target.closest("[data-paint-alpha-slider]");
    if (alphaSlider) {
      const next = { ...editor.customPaintColor, a: clamp(Number(alphaSlider.value) / 100, 0, 1) };
      editor.customPaintColor = cloneColor(next);
      editor.paintColor = cloneColor(next);
      syncPaintUi();
    }
  }
  function onRootChange(ev) {
    if (ev.target.closest("[data-video-seek]")) {
      if (!(videoEl instanceof HTMLVideoElement)) return;
      if (videoState.resumeAfterScrub) playback.play();
      videoState.resumeAfterScrub = false;
      return;
    }
    if (ev.target.closest("[data-video-volume]")) {
      if (typeof ev.target?.blur === "function") ev.target.blur();
      return;
    }
    if (ev.target.closest("[data-paint-size-slider]")) hidePaintSizePreview();
  }
  function onRootPointerOver(ev) {
    const target = ev.target.closest("[data-tip]");
    if (!target || !root.contains(target)) return;
    if (tooltip.target === target) return;
    tooltip.target = target;
    if (tooltip.timer) clearTimeout(tooltip.timer);
    tooltip.timer = window.setTimeout(() => {
      if (tooltip.target === target) showTooltipFor(target);
    }, 220);
  }
  function onRootPointerOut(ev) {
    const target = ev.target.closest("[data-tip]");
    if (!target || tooltip.target !== target) return;
    const nextTarget = ev.relatedTarget instanceof Element ? ev.relatedTarget.closest?.("[data-tip]") : null;
    if (nextTarget === target) return;
    hideTooltip();
  }
  function updatePaintColorFromSv(clientX, clientY) {
    if (!paintColorSv) return;
    const rect = paintColorSv.getBoundingClientRect();
    const sat = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const val = 1 - clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hsv.h, sat, val), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  }
  function updatePaintColorFromHue(clientX) {
    if (!paintHueStrip) return;
    const rect = paintHueStrip.getBoundingClientRect();
    const hue = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
    const hsv = rgb01ToHsv(editor.customPaintColor);
    const next = { ...hsv01ToRgb(hue, hsv.s, hsv.v), a: Number(editor.customPaintColor?.a ?? 1) };
    editor.customPaintColor = cloneColor(next);
    editor.paintColor = cloneColor(next);
    syncPaintUi();
  }
  function bindDrag(startEvent, onMove) {
    const pointerId = startEvent.pointerId;
    onMove(startEvent);
    const handleMove = (moveEvent) => {
      if (moveEvent.pointerId !== pointerId) return;
      onMove(moveEvent);
    };
    const finish = (endEvent) => {
      if (endEvent.pointerId !== pointerId) return;
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", finish);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", finish);
  }
  function syncFullscreenButton() {
    const active = !!editor.fullscreen;
    patchUiButton(uiState.floatingButtons, "action", "toggle-fullscreen", {
      icon: active ? ICON.fullscreen_close : ICON.fullscreen,
      label: active ? "Exit Fullscreen" : "Fullscreen",
      tip: active ? "Exit fullscreen" : "Fullscreen",
    });
  }
  function setFullscreenState(active) {
    const on = !!active;
    if (editor.fullscreen === on) return;
    editor.fullscreen = on;
    root.classList.toggle("pano-modal-fullscreen", on);
    if (on) {
      editor.fullscreenPrevShowGrid = !!editor.showGrid;
      editor.showGrid = false;
    } else if (editor.fullscreenPrevShowGrid !== null) {
      editor.showGrid = !!editor.fullscreenPrevShowGrid;
      editor.fullscreenPrevShowGrid = null;
    }
    syncGridToggleButton();
    syncFullscreenButton();
    queueVideoTransportLayout();
    requestDraw();
  }
  function isOverlayFullscreen() {
    return document.fullscreenElement === overlay;
  }
  async function toggleFullscreen() {
    try {
      if (!document.fullscreenEnabled) {
        setFullscreenState(!editor.fullscreen);
        return;
      }
      if (!isOverlayFullscreen()) {
        await overlay.requestFullscreen?.();
      } else {
        await document.exitFullscreen?.();
      }
    } catch {
      setFullscreenState(!editor.fullscreen);
    }
  }
  function onFullscreenChange() {
    if (document.fullscreenEnabled) {
      setFullscreenState(isOverlayFullscreen());
    }
  }
  function syncOutputPreviewToggleButton() {
    const expanded = !!editor.outputPreviewExpanded;
    uiState.outputPreviewToggle.icon = expanded ? ICON.fullscreen_close : ICON.fullscreen;
    uiState.outputPreviewToggle.label = expanded ? "Reduce Preview" : "Expand Preview";
    uiState.outputPreviewToggle.tip = expanded ? "Reduce preview" : "Expand preview";
  }

  return {
    connect(api) {
      ({
        addCutoutFrame, addImageSticker, addStudioCamera, addWorldImageSticker, applyCutoutAspectCustom,
        bringSelectedToFront, clearAll, clearPaintingLayer, clearSelection, commitAndRefreshNode, contentSphere,
        deleteSelected, duplicateSelected, forceCursorTool, frameSpaceContent, getActiveCutoutShot,
        getBrushPresetIdForTool, getSelected, hidePaintSizePreview, hideTooltip, isErpCamera, isFreeSpaceView,
        playback, playbackFps, pushHistory, queueVideoTransportLayout, replaceSelectedImage, requestDraw,
        restoreHistory, restoreSelectedToInitialPose, rotateCutoutAspect90, sendSelectedToBack, setShotAspect,
        setSpaceMode, showPaintSizePreview, showTooltipFor, spaceOrigin, startAnimation, syncFloatingViewButtonState,
        syncPaintUi, syncSidePanelControls, syncVideoTransportState, syncViewToggleState, togglePlayback,
        toggleSelectedExternalStickerVisibility, toggleSelectedLock, toggleVideoMuted, transitionView,
        updateSelectionMenu, updateSidePanel, videoState,
      } = api);
    },
    closePaintColorPop, syncGridToggleButton, onRootClick, onRootInput, onRootChange, onRootPointerOver,
    onRootPointerOut, updatePaintColorFromSv, updatePaintColorFromHue, bindDrag, syncFullscreenButton,
    setFullscreenState, onFullscreenChange, syncOutputPreviewToggleButton,
  };
}

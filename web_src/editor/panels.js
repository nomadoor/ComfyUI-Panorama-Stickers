// The editor's Vue panels and buttons, kept in step with the editor: the tool rail, the view buttons, the
// paint dock, the side panel (inspector) and Undo / Redo. The models are built in pano_editor_ui_state.js;
// this module gives them the editor's state.
import { ICON } from "../icons.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import { normalizeCoverageValue } from "../pano_editor_state.js";
import {
  buildEditorSidePanelModel,
  buildPaintDockModel,
  buildPreviewSidePanelModel,
  buildUiSettingsModel,
  cameraAspectChoices,
  floatingRightState,
  frameViewButton,
  patchUiButton,
} from "../pano_editor_ui_state.js";
import { clamp } from "../pano_math.js";
import { EXTERNAL_STICKER_ID, PAINT_COLOR_SWATCHES } from "./constants.js";
import { colorToCss, colorsApproximatelyEqual, formatParamValue, hsv01ToRgb, rgb01ToHsv } from "./helpers.js";

export function createPanels(deps) {
  const {
    editor, hideSidebar, paintColorPop, paintColorRow, paintColorSvCursor, paintHueHandle, previewMode,
    readOnly, runtime, shotEditor, state, timers, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let getActiveCutoutShot, getBrushPresetIdForTool, getCutoutInspectorItems, getHistoryCapabilities, getList,
    getSelected, getSelectedItems, getSelectedKind, getSelectionItemLabelData, isActiveLassoTool, isExternalSticker,
    isItemLocked, isPaintCursorEnabled, isStickerHidden, poseOf, setCanvasCursor, syncVideoTransportVisibility,
    updateCursor;

  let paintPaneFadeTimer = 0;

  function syncToolButtonModels() {
    uiState.toolButtons.forEach((button) => {
      const isPrimaryTool = button.attr === "data-tool-mode";
      const isPaintTool = button.attr === "data-paint-tool";
      const isMaskTool = button.attr === "data-mask-tool";
      button.active = isPrimaryTool
        ? button.value === editor.primaryTool
        : isPaintTool
          ? button.key === editor.paintTool
          : isMaskTool
            ? button.key === editor.maskTool
            : false;
      button.pressed = button.active ? "true" : (button.pressed == null ? null : "false");
    });
  }

  function syncLookAtFrameButtonState() {
    if (type !== "cutout") return;
    const shot = getActiveCutoutShot();
    patchUiButton(uiState.toolButtons, "value", "add-or-look", {
      visible: true,
      accent: true,
      label: shot ? "Look At Frame" : "Add Frame",
      tip: shot ? "Look at frame" : "Add frame",
      icon: shot ? ICON.camera : ICON.plus_circle,
    });
  }

  function syncFloatingViewButtonState() {
    const floating = floatingRightState({
      readOnly,
      frameMode: shotEditor && editor.mode === "frame",
      showGrid: editor.showGrid,
    });
    for (const [action, patch] of Object.entries(floating.buttons)) patchUiButton(uiState.floatingButtons, "action", action, patch);
  }

  function syncViewToggleState() {
    const frameButton = frameViewButton({ hasShot: !!getActiveCutoutShot() });
    if (editor.mode === "frame" && frameButton.disabled) editor.mode = "pano";
    editor.outputPreviewRect = null;
    uiState.viewButtons.forEach((button) => {
      const active = button.key === editor.mode;
      button.pressed = active ? "true" : "false";
      button.visible = !(button.key === "frame" && !shotEditor);
      if (button.key === "frame") Object.assign(button, frameButton);
      else button.disabled = false;
    });
    const frameShot = shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : null;
    uiState.frameRail.visible = !!frameShot;
    uiState.frameRail.disabled = readOnly || frameShot?.locked === true;
    uiState.frameRollKnob.visible = !!frameShot && !readOnly && frameShot.locked !== true;
    uiState.frameRollKnob.disabled = readOnly || frameShot?.locked === true;
    uiState.frameRollKnob.rollDeg = Number(frameShot?.roll_deg ?? frameShot?.rot_deg ?? 0);
    uiState.frameRollKnob.displayValue = formatParamValue(uiState.frameRollKnob.rollDeg);
    uiState.frameRollKnob.dragging = editor.interaction?.kind === "roll_frame";
    uiState.frameRollKnob.armed = !!frameShot && editor.altModifier === true;
    uiState.frameRail.rollKnob = uiState.frameRollKnob;
    uiState.frameRail.aspectLabel = frameShot ? getCutoutAspectLabel(frameShot) : "";
    uiState.frameRail.aspectChoices = cameraAspectChoices(frameShot ? String(getCutoutAspectLabel(frameShot)) : null);
    if (!frameShot) uiState.frameRail.aspectOpen = false;
    uiState.outputPreviewToggle.visible = type === "cutout" && editor.mode !== "frame" && !!getActiveCutoutShot();
    if (shotEditor && uiState.cameraPreview) {
      // Frame view already shows the exact output inside the gate, so the
      // floating preview is redundant there. Keeping it in sync with
      // drawCutoutOutputPreview() also matters for correctness: its box height
      // follows the shot aspect, and it is measured by measureFrameSafeRect().
      // Letting it appear in Frame — even for one frame — feeds the shot back
      // into the safe rect and therefore into the background scale.
      uiState.cameraPreview.visible = editor.mode !== "frame";
      uiState.cameraPreview.expanded = !!editor.outputPreviewExpanded;
      uiState.cameraPreview.settled = uiState.cameraPreview.settled === true
        && runtime.pendingStableLayoutFrames <= 0
        && runtime.hasPresentedFrame;
    }
    syncFloatingViewButtonState();
    if (isPaintCursorEnabled()) updateCursor(editor.pointerPos);
    else setCanvasCursor(editor.mode === "pano" ? "grab" : "default");
  }

  function syncFrameRollKnob() {
    const shot = editor.mode === "frame" ? getActiveCutoutShot() : null;
    uiState.frameRollKnob.visible = !!shot && !readOnly && shot.locked !== true;
    uiState.frameRollKnob.rollDeg = Number(shot?.roll_deg ?? shot?.rot_deg ?? 0);
    uiState.frameRollKnob.displayValue = formatParamValue(uiState.frameRollKnob.rollDeg);
    uiState.frameRollKnob.dragging = editor.interaction?.kind === "roll_frame";
    uiState.frameRollKnob.armed = !!shot && editor.altModifier === true;
  }

  function syncPaintUi() {
    // Keep derived paint UI state in the dedicated builder module so this file stays bridge-focused.
    syncToolButtonModels();
    const nextPaintDock = buildPaintDockModel({
      editor,
      swatches: PAINT_COLOR_SWATCHES,
      paintColorPopOpen: paintColorPop ? !paintColorPop.hidden : false,
      colorToCss,
      colorsApproximatelyEqual,
      rgb01ToHsv,
      hsv01ToRgb,
      getBrushPresetIdForTool,
      isActiveLassoTool,
    });
    Object.assign(uiState.paintDock, nextPaintDock);
    syncVideoTransportVisibility();
    if (!nextPaintDock.visible) {
      if (paintColorPop) paintColorPop.hidden = true;
      return;
    }
    timers.clear(paintPaneFadeTimer);
    paintPaneFadeTimer = 0;
    if (paintColorRow) {
      if (!nextPaintDock.colorEnabled && paintColorPop && !paintColorPop.hidden) {
        paintPaneFadeTimer = timers.set(() => {
          paintColorPop.hidden = true;
          uiState.paintDock.colorPopOpen = false;
          paintPaneFadeTimer = 0;
        }, 170);
      }
      if (paintColorPop) {
        paintColorPop.style.setProperty("--picker-hue-color", nextPaintDock.pickerHueColor);
        paintColorPop.style.setProperty("--picker-sat", nextPaintDock.pickerSat);
        paintColorPop.style.setProperty("--picker-val", nextPaintDock.pickerVal);
        paintColorPop.style.setProperty("--picker-hue", nextPaintDock.pickerHue);
      }
      if (paintColorSvCursor) {
        paintColorSvCursor.style.left = nextPaintDock.pickerSvLeft;
        paintColorSvCursor.style.top = nextPaintDock.pickerSvTop;
      }
      if (paintHueHandle) {
        paintHueHandle.style.left = nextPaintDock.pickerHueLeft;
      }
    }
  }

  function syncSidePanelControls() {
    const selected = poseOf(shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : getSelected());
    if (!selected) return;
    editor.panelLastValues = {
      yaw_deg: Number(selected.yaw_deg || 0),
      pitch_deg: Number(selected.pitch_deg || 0),
      hFOV_deg: Number(selected.hFOV_deg || (type === "stickers" ? 30 : 90)),
      vFOV_deg: Number(selected.vFOV_deg || (type === "stickers" ? 30 : 60)),
      rot_deg: Number(selected.rot_deg || 0),
      roll_deg: Number(selected.roll_deg || 0),
      aspect_id: getCutoutAspectLabel(selected),
    };
    updateSidePanel();
  }

  // The inspector's model (uiState.sidePanel), from the state and the selection.
  function updateSidePanel() {
    if (hideSidebar) return;
    state.ui_settings = state.ui_settings || {};
    // Inspector content is derived data for Vue, not imperative DOM construction.
    const uiSettingsModel = buildUiSettingsModel(state.ui_settings);
    if (previewMode) {
      uiState.sidePanel = buildPreviewSidePanelModel({
        coverage: state.coverage,
        uiSettings: uiSettingsModel,
        normalizeCoverageValue,
      });
      return;
    }

    const canvasSelected = getSelected();
    const frameInspectorShot = shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : null;
    const selected = frameInspectorShot || canvasSelected;
    const selectedItems = frameInspectorShot ? [frameInspectorShot] : getSelectedItems();
    const selectedKind = frameInspectorShot ? "shot" : getSelectedKind();
    if (selectedItems.length > 1) {
      editor.panelLastValues = editor.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 };
    }
    if (selected && selectedKind !== "stroke") {
      const pose = poseOf(selected);
      editor.panelLastValues = {
        yaw_deg: Number(pose.yaw_deg || 0),
        pitch_deg: Number(pose.pitch_deg || 0),
        hFOV_deg: Number(pose.hFOV_deg || (selectedKind === "image" ? 30 : 90)),
        vFOV_deg: Number(pose.vFOV_deg || (selectedKind === "image" ? 30 : 60)),
        rot_deg: Number(pose.rot_deg || 0),
        roll_deg: Number(pose.roll_deg || 0),
        aspect_id: getCutoutAspectLabel(pose),
      };
    }
    const fallback = editor.panelLastValues || ((type === "stickers" || selectedKind === "image")
      ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }
      : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" });
    const inspectorSelected = selectedKind === "stroke" ? null : selected;
    const effective = inspectorSelected || fallback;
    const enabled = !!inspectorSelected && !isItemLocked(inspectorSelected);
    editor.panelWasEnabled = enabled;
    syncLookAtFrameButtonState();

    let selectionPicker = null;
    if (frameInspectorShot) {
      const labelData = getSelectionItemLabelData({ item: frameInspectorShot, kind: "shot", label: "Frame" });
      selectionPicker = {
        label: "Selection",
        open: false,
        disabled: true,
        currentLabel: labelData.label,
        currentIcon: labelData.icon || null,
        items: [{
          id: String(frameInspectorShot.id || ""),
          label: labelData.label,
          icon: labelData.icon || null,
          active: true,
        }],
      };
    } else if (type === "stickers" || type === "cutout") {
      const items = [{
        id: "",
        label: type === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null,
      }];
      if (type === "stickers") {
        getList().forEach((item, i) => {
          if (!item) return;
          const baseLabel = isExternalSticker(item)
            ? String(item.id || EXTERNAL_STICKER_ID)
            : String(state.assets?.[item.asset_id]?.name || item.asset_id || item.id);
          const label = `${i + 1}. ${baseLabel}${isExternalSticker(item) && isStickerHidden(item) ? " (hidden)" : ""}`;
          const labelData = getSelectionItemLabelData({ item, label, kind: "image" });
          items.push({ id: item.id, label: labelData.label, icon: labelData.icon, item, kind: "image" });
        });
      } else {
        getCutoutInspectorItems().forEach((entry) => {
          if (!entry?.item) return;
          const labelData = getSelectionItemLabelData(entry);
          items.push({ id: entry.item.id, label: labelData.label, icon: labelData.icon, item: entry.item, kind: entry.kind });
        });
      }
      const currentId = inspectorSelected?.id || "";
      const currentItem = items.find((item) => item.id === currentId) || items[0];
      selectionPicker = {
        label: "Selection",
        open: false,
        disabled: items.length <= 1,
        currentLabel: currentItem.label,
        currentIcon: currentItem.icon || null,
        items: items.map((item) => ({
          id: item.id,
          label: item.label,
          icon: item.icon || null,
          active: item.id === currentId,
        })),
      };
    }

    const params = [];
    const pushParam = (key, label, min, max, step) => {
      const value = clamp(Number(effective[key] || 0), min, max);
      params.push({
        key,
        label,
        min,
        max,
        step,
        value,
        displayValue: formatParamValue(value),
        fillPct: clamp(((value - min) / Math.max(1e-6, max - min)) * 100, 0, 100),
        enabled: enabled && !readOnly,
      });
    };
    const notes = [];
    if (selectedItems.length > 1) {
      notes.push(`Selected objects: ${selectedItems.length}`);
      notes.push("Multi-selection supports z-order and delete.");
    } else {
      const shotInspected = selectedKind === "shot" || selectedKind === "frame";
      pushParam("yaw_deg", "Yaw", -180, 180, 0.1);
      pushParam("pitch_deg", "Pitch", -90, 90, 0.1);
      if (selectedKind === "image" || (type === "stickers" && !shotInspected)) pushParam("rot_deg", "Roll", -180, 180, 0.1);
      else pushParam("roll_deg", "Roll", -180, 180, 0.1);
      pushParam("hFOV_deg", "H FOV", 1, 179, 0.1);
      pushParam("vFOV_deg", "V FOV", 1, 179, 0.1);
    }

    uiState.sidePanel = buildEditorSidePanelModel({
      coverage: state.coverage,
      readOnly,
      selectionPicker,
      enabled,
      selectedKind,
      selectedItems,
      params,
      notes,
      uiSettings: uiSettingsModel,
      normalizeCoverageValue,
    });
  }

  function syncUndoRedoButtons() {
    const { canUndo, canRedo } = getHistoryCapabilities();
    patchUiButton(uiState.toolButtons, "value", "undo", { disabled: !canUndo });
    patchUiButton(uiState.toolButtons, "value", "redo", { disabled: !canRedo });
  }

  return {
    connect(api) {
      ({
        getActiveCutoutShot, getBrushPresetIdForTool, getCutoutInspectorItems, getHistoryCapabilities, getList,
        getSelected, getSelectedItems, getSelectedKind, getSelectionItemLabelData, isActiveLassoTool, isExternalSticker,
        isItemLocked, isPaintCursorEnabled, isStickerHidden, poseOf, setCanvasCursor, syncVideoTransportVisibility,
        updateCursor,
      } = api);
    },
    syncLookAtFrameButtonState, syncFloatingViewButtonState, syncViewToggleState, syncFrameRollKnob, syncPaintUi,
    syncSidePanelControls, updateSidePanel, syncUndoRedoButtons,
  };
}

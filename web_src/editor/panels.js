// The editor's Vue panels and buttons, kept in step with the editor: the tool rail, the view buttons, the
// paint dock, the side panel (inspector) and Undo / Redo. The models are built in pano_editor_ui_state.js;
// this module gives them the editor's state.
import { ICON } from "../icons.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import {
  CAMERA_ASPECT_MAX,
  CAMERA_ASPECT_MIN,
  cameraFields,
  cameraLensFields,
  normalizeCoverageValue,
  sceneStickerLabel,
  worldStickerFields,
} from "../pano_editor_state.js";
import {
  buildEditorSidePanelModel,
  buildPaintDockModel,
  buildPreviewSidePanelModel,
  buildUiSettingsModel,
  cameraAspectChoices,
  cameraParamEnabled,
  cameraParamTip,
  stickerParamEnabled,
  floatingRightState,
  frameViewButton,
  patchUiButton,
  upstreamInspectorModel,
  upstreamOriginLabel,
  worldFieldRange,
} from "../pano_editor_ui_state.js";
import { animationClipIndex, animationClipMissing } from "../pano_animation.js";
import { LENS_CURVE_MAX, LENS_CURVE_MIN, lensFovLimit } from "../pano_lens.js";
import { ANIMATION_DEFAULT, ANIMATION_SPEED_MAX, ANIMATION_SPEED_MIN } from "../pano_scene_state.js";
import { clamp } from "../pano_math.js";
import { evaluateSticker } from "../pano_scene_eval.js";
import { ownerTimed } from "../pano_timeline.js";
import { isUpstreamSticker, upstreamOverrideOf, upstreamStickerEditable } from "../pano_upstream.js";
import { shownSpaceMode } from "../pano_view_transition.js";
import { EXTERNAL_STICKER_ID, PAINT_COLOR_SWATCHES, WORLD_MIN_SCALE } from "./constants.js";
import { colorToCss, colorsApproximatelyEqual, formatParamValue, hsv01ToRgb, rgb01ToHsv } from "./helpers.js";

export function createPanels(deps) {
  const {
    cameraV2, editor, hideSidebar, paintColorPop, paintColorRow, paintColorSvCursor, paintHueHandle, previewMode,
    readOnly, runtime, sceneV2, shotEditor, state, studio, timers, type, uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let animationClipsOf, cameraPreviewShown, cameraShoots, getActiveCutoutShot, getBrushPresetIdForTool, getCutoutInspectorItems,
    getHistoryCapabilities, getList, getSelected, getSelectedItems, getSelectedKind,
    getSelectionItemIcon, getSelectionItemLabelData, hasCamera, hasSpaceContent, isActiveLassoTool, isErpCamera,
    isExternalSticker, isItemLocked, isPaintCursorEnabled, isSceneSticker, isShotItem, isSpaceView, isStickerHidden,
    leaveFrameView, portHandoffLanes, poseOf, selectedWorldSticker, setCanvasCursor, syncCutoutShot, syncTimeline,
    syncVideoTransportVisibility, updateCursor, worldStickerEditable;

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
    // Panorama Studio has Add Camera instead, disabled rather than hidden while it has its Camera.
    if (studio) patchUiButton(uiState.toolButtons, "value", "add-camera", { disabled: hasCamera() });
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
      spaceView: isSpaceView(),
      spaceMode: shownSpaceMode(editor.spaceMode, editor.viewTransition),
      readOnly,
      frameMode: shotEditor && editor.mode === "frame",
      showGrid: editor.showGrid,
    });
    if (uiState.space) Object.assign(uiState.space, floating.space);
    for (const [action, patch] of Object.entries(floating.buttons)) patchUiButton(uiState.floatingButtons, "action", action, patch);
  }

  function syncViewToggleState() {
    const frameButton = frameViewButton({ hasShot: !!getActiveCutoutShot(), erp: isErpCamera(), hidden: hasCamera() && !cameraShoots(), studio });
    if (editor.mode === "frame" && frameButton.disabled) {
      if (studio) leaveFrameView(getActiveCutoutShot());
      else editor.mode = "pano";
    }
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
    uiState.frameRail.aspectChoices = cameraAspectChoices(frameShot ? String(getCutoutAspectLabel(frameShot)) : null, { erp: studio, coverage: state.coverage });
    if (!frameShot) uiState.frameRail.aspectOpen = false;
    uiState.outputPreviewToggle.visible = type === "cutout" && editor.mode !== "frame" && !!getActiveCutoutShot();
    if (shotEditor && uiState.cameraPreview) {
      // Frame view already shows the exact output inside the gate, so the
      // floating preview is redundant there. Keeping it in sync with
      // drawCutoutOutputPreview() also matters for correctness: its box height
      // follows the shot aspect, and it is measured by measureFrameSafeRect().
      // Letting it appear in Frame — even for one frame — feeds the shot back
      // into the safe rect and therefore into the background scale.
      uiState.cameraPreview.visible = editor.mode !== "frame" && cameraPreviewShown();
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

  function updateSidePanel() {
    syncCutoutShot();
    syncTimeline();
    syncSidePanelModel();
  }

  // Whether the inspector shows something that changes with the playhead: a selected Sticker or Camera with
  // Keyframes or a Clip range.
  function inspectorTimed() {
    const frameShot = shotEditor && editor.mode === "frame" ? getActiveCutoutShot() : null;
    return [...getSelectedItems(), selectedWorldSticker(), frameShot].some((item) => {
      if (isSceneSticker(item)) return ownerTimed(item);
      return isShotItem(item) && hasCamera() && ownerTimed(state.camera);
    });
  }

  // The inspector's model (uiState.sidePanel), from the state and the selection.
  function syncSidePanelModel() {
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
      if (isSceneSticker(selected)) editor.panelLastValues.opacity = evaluateSticker(selected, editor.frame).opacity * 100;
    }
    const fallback = editor.panelLastValues || ((type === "stickers" || selectedKind === "image")
      ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }
      : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" });
    const inspectorSelected = selectedKind === "stroke" ? null : selected;
    const worldInspected = selectedWorldSticker();
    // Panorama Studio's Camera has a position in space too.
    const cameraPositionShown = cameraV2 && (selectedKind === "shot" || selectedKind === "frame") && hasSpaceContent();
    // Panorama Studio's Camera has a lens (ADR 0042): its fields come from the Camera, whose hFOV may pass the
    // shot's 179 degrees under a lens curve below 1.
    const lensShown = cameraV2 && !worldInspected && selectedItems.length <= 1 && (selectedKind === "shot" || selectedKind === "frame") && !!state.camera;
    const lens = lensShown ? cameraLensFields(state.camera, editor.frame) : null;
    const base = worldInspected ? worldStickerFields(worldInspected, editor.frame)
      : cameraPositionShown ? { ...inspectorSelected, ...cameraFields(state.camera, editor.frame), vFOV_deg: inspectorSelected.vFOV_deg }
        : isSceneSticker(inspectorSelected) ? editor.panelLastValues : (inspectorSelected || fallback);
    const effective = lens ? { ...base, ...lens } : base;
    const enabled = worldInspected ? worldStickerEditable(worldInspected) : (!!inspectorSelected && !isItemLocked(inspectorSelected));
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
        // Panorama Studio's Camera comes first, as on its Timeline.
        const shot = getActiveCutoutShot();
        if (shot) items.push({ id: shot.id, label: "Camera", icon: getSelectionItemIcon("frame"), item: shot, kind: "frame" });
        getList().forEach((item, i) => {
          // A hidden Sticker of state v2 is not selected.
          if (!item || (isSceneSticker(item) && !item.visible)) return;
          const baseLabel = sceneV2
            ? stickerLabel(item)
            : isExternalSticker(item)
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
      const currentItem = worldInspected ? { label: stickerLabel(worldInspected), icon: ICON.globe }
        : items.find((item) => item.id === currentId) || items[0];
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
    // An animated 3D file's rows (ADR 0043, docs/editor-interaction.md "アニメーションの行"): its clip by name, in the
    // file's order, and its speed. Neither has Keyframes. An upstream element's are shown but not edited (its override
    // is a later step).
    const pushAnimationParams = (sticker) => {
      const clips = animationClipsOf(sticker);
      if (!clips) return;
      const animation = sticker.animation ?? ANIMATION_DEFAULT;
      const editable = enabled && !readOnly && !isUpstreamSticker(sticker);
      const index = animationClipIndex(clips, animation);
      params.push({
        key: "animation_clip", label: "Clip", value: String(index), enabled: editable,
        options: clips.map((clip, at) => ({ value: String(at), label: clip.name })),
        tip: animationClipMissing(clips, animation) ? `No clip "${animation.clip}" in the file; it plays "${clips[index].name}"` : null,
      });
      const speed = animation.speed;
      params.push({
        key: "animation_speed", label: "Speed", min: ANIMATION_SPEED_MIN, max: ANIMATION_SPEED_MAX, step: 0.1, value: speed,
        displayValue: formatParamValue(speed), fillPct: clamp(((speed - ANIMATION_SPEED_MIN) / (ANIMATION_SPEED_MAX - ANIMATION_SPEED_MIN)) * 100, 0, 100),
        enabled: editable,
      });
    };
    const notes = [];
    if (worldInspected) {
      // Positions and the scale have no limit; the scale's slider reaches past the value (worldFieldRange).
      for (const [key, label] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const range = worldFieldRange(effective[key]);
        pushParam(key, label, -range, range, 0.01);
      }
      pushParam("yaw_deg", "Yaw", -180, 180, 0.1);
      pushParam("pitch_deg", "Pitch", -90, 90, 0.1);
      pushParam("roll_deg", "Roll", -180, 180, 0.1);
      pushParam("scale", "Scale", WORLD_MIN_SCALE, worldFieldRange(effective.scale), 0.01);
      pushParam("opacity", "Opacity", 0, 100, 1);
      pushAnimationParams(worldInspected);
    } else if (selectedItems.length > 1) {
      notes.push(`Selected objects: ${selectedItems.length}`);
      notes.push("Multi-selection supports z-order and delete.");
    } else {
      // Panorama Studio's Camera is a shot in the Stickers editor: it has a roll and no opacity.
      const shotInspected = selectedKind === "shot" || selectedKind === "frame";
      if (cameraPositionShown) {
        for (const [key, label] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const range = worldFieldRange(effective[key]);
          pushParam(key, label, -range, range, 0.01);
        }
      }
      pushParam("yaw_deg", "Yaw", -180, 180, 0.1);
      pushParam("pitch_deg", "Pitch", -90, 90, 0.1);
      if (selectedKind === "image" || (type === "stickers" && !shotInspected)) pushParam("rot_deg", "Roll", -180, 180, 0.1);
      else pushParam("roll_deg", "Roll", -180, 180, 0.1);
      pushParam("hFOV_deg", "H FOV", 1, lens ? lensFovLimit(lens.curve) : 179, 0.1);
      // Panorama Studio's Camera shows its own fields (docs/editor-interaction.md): H FOV and the aspect; its V FOV
      // is computed from them and has no field. The legacy Cutout's shot keeps its pair.
      // Any step: a preset's exact ratio (16 ÷ 9) is not rounded by the field.
      if (lens) pushParam("aspect", "Aspect", CAMERA_ASPECT_MIN, CAMERA_ASPECT_MAX, "any");
      else pushParam("vFOV_deg", "V FOV", 1, 179, 0.1);
      // The lens row after the Camera's fields (docs/editor-interaction.md, ADR 0042): its curve κ.
      if (lens) pushParam("curve", "Lens curve", LENS_CURVE_MIN, LENS_CURVE_MAX, 0.01);
      // A 360-degree ERP Camera reads no FOV; its fields stay, disabled (ADR 0029).
      if (shotInspected) {
        params.forEach((param) => {
          param.enabled = param.enabled && cameraParamEnabled(param.key, { erp: isErpCamera() });
          param.tip = cameraParamTip(param.key, { erp: isErpCamera() });
        });
      }
      if (isSceneSticker(inspectorSelected) && !shotInspected) params.forEach((param) => { param.enabled = param.enabled && stickerParamEnabled(param.key, { port: isExternalSticker(inspectorSelected) }); });
      if (sceneV2 && !shotInspected) pushParam("opacity", "Opacity", 0, 100, 1);
    }

    const target = selectedItems.length > 1 ? null : worldInspected || inspectorSelected;
    uiState.sidePanel = buildEditorSidePanelModel({
      coverage: state.coverage,
      readOnly,
      selectionPicker,
      enabled,
      selectedKind: worldInspected ? "world" : selectedKind,
      selectedItems,
      params,
      notes,
      uiSettings: uiSettingsModel,
      normalizeCoverageValue,
      // Every Sticker of Panorama Studio has the rows, so selecting an upstream one does not move the panel.
      upstream: studio && target && (target === worldInspected || isSceneSticker(target)) ? upstreamInspectorModel({
        layer: isUpstreamSticker(target) ? target.origin.layer : null,
        editable: isUpstreamSticker(target) && upstreamStickerEditable(target),
        locked: target.locked === true,
        readOnly,
        placement: target.placement,
        override: isUpstreamSticker(target) ? upstreamOverrideOf(state.upstream, target.origin) : null,
        // An upstream element's port Sticker is not the node's own, whose Pose handoff this is.
        handoff: isUpstreamSticker(target) ? null : portHandoffLanes(target),
      }) : null,
    });
  }

  // A Sticker's name in the inspector; an upstream element's tells where it comes from (ADR 0030).
  function stickerLabel(sticker) {
    const label = sceneStickerLabel(sticker);
    return isUpstreamSticker(sticker) ? `${upstreamOriginLabel(sticker.origin.layer)} · ${label}` : label;
  }

  function syncUndoRedoButtons() {
    const { canUndo, canRedo } = getHistoryCapabilities();
    patchUiButton(uiState.toolButtons, "value", "undo", { disabled: !canUndo });
    patchUiButton(uiState.toolButtons, "value", "redo", { disabled: !canRedo });
  }

  return {
    connect(api) {
      ({
        animationClipsOf, cameraPreviewShown, cameraShoots, getActiveCutoutShot, getBrushPresetIdForTool, getCutoutInspectorItems,
        getHistoryCapabilities, getList, getSelected, getSelectedItems, getSelectedKind,
        getSelectionItemIcon, getSelectionItemLabelData, hasCamera, hasSpaceContent, isActiveLassoTool, isErpCamera,
        isExternalSticker, isItemLocked, isPaintCursorEnabled, isSceneSticker, isShotItem, isSpaceView,
        isStickerHidden, leaveFrameView, portHandoffLanes, poseOf, selectedWorldSticker, setCanvasCursor,
        syncCutoutShot, syncTimeline, syncVideoTransportVisibility, updateCursor, worldStickerEditable,
      } = api);
    },
    syncLookAtFrameButtonState, syncFloatingViewButtonState, syncViewToggleState, syncFrameRollKnob, syncPaintUi,
    syncSidePanelControls, updateSidePanel, inspectorTimed, syncSidePanelModel, syncUndoRedoButtons,
  };
}

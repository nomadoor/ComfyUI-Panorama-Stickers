import { ICON } from "./icons.js";
import { IMAGE_LOADING } from "./pano_image_state.js";
import { colorToCss } from "./pano_paint_strokes.js";

export function patchUiButton(list, matchKey, key, patch) {
  const entry = Array.isArray(list) ? list.find((item) => String(item?.[matchKey] || "") === String(key || "")) : null;
  if (entry) Object.assign(entry, patch);
}

// The first value of the old editor's uiState (pano_editor.js makes it reactive and hands it to PanoModal.vue):
// the shell's buttons, the HUD models at rest, and the Cutout's camera preview box for its first shot.
export function buildEditorUiState({ shellPreset, readOnly, previewMode, type, cutoutPreviewShot, cutoutPreviewSize }) {
  return {
    stageStatus: IMAGE_LOADING,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (shellPreset.viewButtons || []).map((button) => ({ ...button, visible: true, disabled: false })),
    toolButtons: (shellPreset.toolButtons || []).map((button) => ({
      ...button,
      disabled: false,
    })),
    floatingButtons: [
      ...(shellPreset.floatingButtons || []).map((button) => ({ ...button, disabled: false })),
      ...(previewMode ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ICON.fullscreen, disabled: false }] : []),
    ],
    frameRail: {
      visible: false,
      disabled: readOnly,
      aspectOpen: false,
      aspectIcon: ICON.aspect,
      rotateIcon: ICON.rotate_90,
      aspectChoices: [],
      rollKnob: null,
    },
    frameRollKnob: {
      visible: false,
      disabled: readOnly,
      rollDeg: 0,
      displayValue: "0",
      dragging: false,
      armed: false,
    },
    outputPreviewToggle: {
      visible: false,
      icon: ICON.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview",
    },
    paintDock: {
      visible: false,
      activePane: "",
      showColorRow: true,
      colorEnabled: true,
      activeSwatchId: "green",
      customColorActive: false,
      customColorCss: colorToCss({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: false,
      pickerHueColor: colorToCss({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: true,
      historyEntries: Array.from({ length: 8 }, (_, index) => ({ index, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: false,
      showSizeRow: true,
      clearVisible: { paint: true, mask: true },
      activeTools: { paint: "pen", mask: "pen" },
    },
    videoTransport: {
      visible: false,
      ready: false,
      playing: false,
      loop: true,
      duration: 0,
      currentTime: 0,
      progressPct: 0,
      currentTimeLabel: "0:00",
      durationLabel: "0:00",
      frameCount: 0,
      fps: 24,
      hasAudio: false,
      muted: false,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640,
    },
    sidePanel: {},
    selectionMenu: { visible: false, left: 0, top: 0, items: [] },
    tooltip: { visible: false, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: false, title: "", text: "", confirmLabel: "Confirm", resolve: null },
    cameraPreview: {
      visible: type === "cutout",
      ready: false,
      settled: false,
      expanded: false,
      width: cutoutPreviewSize.width,
      height: cutoutPreviewSize.height,
      label: cutoutPreviewShot ? "Loading preview" : "Add Frame to preview",
    },
  };
}

export function buildUiSettingsModel(uiSettings = {}) {
  return {
    open: false,
    invertX: !!uiSettings.invert_view_x,
    invertY: !!uiSettings.invert_view_y,
  };
}

export function buildPaintDockModel({
  editor,
  swatches,
  paintColorPopOpen,
  colorToCss,
  colorsApproximatelyEqual,
  rgb01ToHsv,
  hsv01ToRgb,
  getBrushPresetIdForTool,
  isActiveLassoTool,
}) {
  const showFooter = editor.primaryTool === "paint" || editor.primaryTool === "mask";
  const base = {
    visible: showFooter,
    activePane: showFooter ? editor.primaryTool : "",
    showColorRow: true,
    colorEnabled: editor.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: false,
    customColorCss: colorToCss(editor.customPaintColor, 1),
    colorPopOpen: showFooter ? !!paintColorPopOpen : false,
    pickerHueColor: colorToCss({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: true,
    historyEntries: Array.from({ length: 8 }, (_, index) => ({ index, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: false,
    showSizeRow: true,
    clearVisible: { paint: true, mask: true },
    activeTools: { paint: editor.paintTool, mask: editor.maskTool },
  };
  if (!showFooter) return base;

  const matchedSwatchId = swatches.find((swatch) => colorsApproximatelyEqual(editor.paintColor, swatch.color))?.id || "";
  const customActive = !matchedSwatchId;
  const hsv = rgb01ToHsv(editor.customPaintColor);
  const alphaPct = Math.round(Math.max(0, Math.min(1, Number(editor.customPaintColor?.a ?? 1))) * 100);
  const sizePresetId = getBrushPresetIdForTool(editor.primaryTool === "paint" ? editor.paintTool : editor.maskTool);
  const currentSize = editor.brushSizes[sizePresetId] ?? 10;
  const lassoToolActive = isActiveLassoTool();
  const slots = Array.from({ length: 8 }, (_, index) => editor.customPaintHistory[index] || null);

  return {
    ...base,
    colorEnabled: editor.paintTool !== "eraser",
    activeSwatchId: matchedSwatchId,
    customColorActive: customActive,
    customColorCss: colorToCss(editor.customPaintColor, 1),
    pickerHueColor: colorToCss({ ...hsv01ToRgb(hsv.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, hsv.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, hsv.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, hsv.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, hsv.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, hsv.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, hsv.h)) * 100}%`,
    alphaValue: alphaPct,
    alphaText: `${alphaPct}%`,
    historyEntries: slots.map((color, index) => ({
      index,
      color: color ? { cssColor: colorToCss(color, 1) } : null,
    })),
    sizeValue: currentSize,
    sizeText: String(currentSize),
    sizeFill: `${Math.max(0, Math.min(100, ((currentSize - 1) / 119) * 100))}%`,
    sizeDisabled: lassoToolActive,
    activeTools: { paint: editor.paintTool, mask: editor.maskTool },
  };
}

export function buildPreviewSidePanelModel({ coverage, uiSettings, normalizeCoverageValue }) {
  return {
    coverage: { value: normalizeCoverageValue(coverage), disabled: false },
    transformTitle: false,
    notes: [],
    params: [],
    paramsDisabled: true,
    uiSettings,
    footerButtons: [{ action: "close-preview", label: "Close", primary: true }],
  };
}

// The fields that share a row of the inspector: [row label, short label, value per pixel of a drag].
const FIELD_GROUPS = {
  position_x: ["Position", "X", 0.01],
  position_y: ["Position", "Y", 0.01],
  position_z: ["Position", "Z", 0.01],
  yaw_deg: ["Rotation", "Y", 0.5],
  pitch_deg: ["Rotation", "P", 0.5],
  roll_deg: ["Rotation", "R", 0.5],
  rot_deg: ["Rotation", "R", 0.5],
  hFOV_deg: ["FOV", "H", 0.25],
  vFOV_deg: ["FOV", "V", 0.25],
};

// The rows of the inspector (PanoSidePanel.vue) for its fields, in order: the fields of a group
// (Position, Rotation, FOV) side by side in one row under the group's name, each by its short label
// without a slider (a drag on the label changes the value by `drag` per pixel), any other field alone
// in its row with its slider.
export function inspectorRows(params) {
  const rows = [];
  for (const param of params) {
    const [group, short, drag] = FIELD_GROUPS[param.key] || [];
    const last = rows[rows.length - 1];
    if (group && last?.grouped && last.label === group) last.fields.push({ ...param, short, drag });
    else rows.push({ key: param.key, label: group || param.label, grouped: !!group, fields: [{ ...param, short, drag }] });
  }
  return rows;
}

// The state of the bottom-right buttons (PanoFloatingRight.vue). No button there shows or hides on its
// own, so none moves when another changes: a button that does nothing is disabled instead. `buttons` patches the
// buttons by action.
export function floatingRightState({ readOnly, frameMode, showGrid }) {
  const gridVisible = !frameMode && !!showGrid;
  return {
    buttons: {
      "reset-view": { disabled: !!readOnly || !!frameMode },
      "toggle-grid": {
        icon: gridVisible ? ICON.eye : ICON.eye_dashed,
        pressed: gridVisible ? "true" : "false",
        label: gridVisible ? "Hide Grid" : "Show Grid",
        tip: gridVisible ? "Hide grid" : "Show grid",
        disabled: !!readOnly || !!frameMode,
      },
    },
  };
}

// The Frame tab (PanoViewToggle.vue). The Cutout editor always shows it, so the tabs never move, and disables it
// while there is no frame to look through.
export function frameViewButton({ hasShot }) {
  return { disabled: !hasShot, tip: null };
}

// The aspect presets of a Camera's or a Cutout shot's frame, in their order, as [width, height] (landscape; the
// editors flip them to the frame's orientation). The one table the menus and the editors read.
export const ASPECT_PRESETS = Object.freeze({ "1:1": [1, 1], "4:3": [4, 3], "3:2": [3, 2], "16:9": [16, 9] });

// The [width, height] of an aspect preset; an unknown one is an error.
export function aspectPreset(value) {
  const preset = ASPECT_PRESETS[String(value)];
  if (!preset) throw new Error(`Unknown aspect preset ${JSON.stringify(value)}`);
  return preset;
}

// The aspect presets of the shot's frame in the selection menu and the Frame rail, `active` marked.
export function cameraAspectChoices(active) {
  return Object.keys(ASPECT_PRESETS).map((value) => ({ value, label: value, active: active === value }));
}

export function buildEditorSidePanelModel({
  coverage,
  readOnly,
  selectionPicker,
  enabled,
  selectedKind,
  selectedItems,
  params,
  notes,
  uiSettings,
  normalizeCoverageValue,
}) {
  return {
    coverage: { value: normalizeCoverageValue(coverage), disabled: !!readOnly },
    transformTitle: true,
    selectionPicker,
    copyStateButton: {
      disabled: !enabled || selectedKind === "stroke" || selectedKind === "camera" || selectedItems.length > 1,
      label: "Copy State",
    },
    params,
    rows: inspectorRows(params),
    notes,
    paramsDisabled: !enabled,
    uiSettings: readOnly ? null : uiSettings,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: false },
      { action: "save-close", label: "Save", primary: true },
    ],
  };
}

export function buildSelectionMenuModel({
  type,
  selected,
  selectedItems,
  selectedKind,
  geom,
  allLocked,
  anyLocked,
  selectedLocked,
  activeAspect,
  cutoutAspectOpen,
  isExternalSticker,
  isStickerHidden,
  canRestoreSelectedToInitial,
  iconSet,
}) {
  if (!geom?.visible) return { visible: false, left: 0, top: 0, items: [] };

  let items = [];
  if (selectedItems.length > 1) {
    items = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front, disabled: !!anyLocked },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back, disabled: !!anyLocked },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: allLocked ? "Unlock" : "Lock", tip: allLocked ? "Unlock" : "Lock", icon: allLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!anyLocked },
    ];
  } else if (selectedKind === "stroke") {
    items = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front, disabled: !!selectedLocked },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back, disabled: !!selectedLocked },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked },
    ];
  } else if (selectedKind === "image") {
    items = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front, disabled: !!selectedLocked },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back, disabled: !!selectedLocked },
    ];
    if (!isExternalSticker(selected)) {
      items.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: iconSet.duplicate });
      items.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: iconSet.replace_image });
    }
    if (isExternalSticker(selected)) {
      const canRestore = canRestoreSelectedToInitial();
      const hidden = isStickerHidden(selected);
      items.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: canRestore ? "Back to initial position" : "Already at initial position",
        icon: iconSet.back_initial,
        disabled: !canRestore,
      });
      items.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: hidden ? "Show" : "Hide",
        tip: hidden ? "Show input image" : "Hide input image",
        icon: hidden ? iconSet.eye : iconSet.eye_dashed,
      });
    }
    items.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed });
    if (!isExternalSticker(selected)) items.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked });
  } else {
    items = [
      {
        key: "aspect",
        kind: "aspect",
        icon: iconSet.aspect,
        open: !!cutoutAspectOpen,
        choices: cameraAspectChoices(activeAspect),
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: iconSet.rotate_90, disabled: false },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked },
    ];
  }

  return selectionMenuAt(geom.corners, items);
}

// Where a menuW x menuH selection menu goes in a canvasW x canvasH canvas for its anchor (the box of
// its target): centered below the target, above it when it does not fit below, and moved into the
// canvas when it fits neither, so it always shows. null when the anchor is not finite.
export function selectionMenuPlacement(anchor, menuW, menuH, canvasW, canvasH) {
  const pad = 14;
  const gap = 18;
  const { minX, maxX, minY, maxY } = anchor || {};
  if (![minX, maxX, minY, maxY].every(Number.isFinite)) return null;
  const left = Math.min(Math.max(((minX + maxX) * 0.5) - menuW * 0.5, pad), Math.max(pad, canvasW - menuW - pad));
  const maxTop = Math.max(pad, canvasH - menuH - pad);
  const below = maxY + gap;
  const above = minY - gap - menuH;
  let top;
  if (below <= maxTop) top = Math.max(below, pad);
  else if (above >= pad) top = Math.min(above, maxTop);
  else top = Math.min(Math.max(below, pad), maxTop);
  return { left, top };
}

function selectionMenuAt(corners, items) {
  const finiteCorners = corners
    .map((point) => ({ x: Number(point?.x), y: Number(point?.y) }))
    .filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y));
  if (!finiteCorners.length) return { visible: false, left: 0, top: 0, items: [] };

  const xs = finiteCorners.map((point) => point.x);
  const ys = finiteCorners.map((point) => point.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  return {
    visible: true,
    left: (minX + maxX) * 0.5,
    top: maxY + 18,
    items,
    anchor: { minX, maxX, minY, maxY },
  };
}

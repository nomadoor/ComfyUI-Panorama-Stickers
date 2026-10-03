import { ICON } from "./icons.js";
import { sceneStickerLabel } from "./pano_editor_state.js";
import { laneNames, rowKeyed, rowKeyframes, selectedEasing } from "./pano_timeline.js";

export function patchUiButton(list, matchKey, key, patch) {
  const entry = Array.isArray(list) ? list.find((item) => String(item?.[matchKey] || "") === String(key || "")) : null;
  if (entry) Object.assign(entry, patch);
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
    visibilityRows: [],
    uiSettings,
    footerButtons: [{ action: "close-preview", label: "Close", primary: true }],
  };
}

// The slider range (0 to it, or minus it to it) of a world Sticker's position or scale field: 100,
// widened by powers of ten to hold the value. It limits only the slider; the value itself is not limited.
export function worldFieldRange(value) {
  const magnitude = Math.abs(Number(value) || 0);
  return magnitude <= 100 ? 100 : 10 ** Math.ceil(Math.log10(magnitude));
}

// The state of the bottom-right buttons (PanoFloatingRight.vue). No button there shows or hides on its
// own, so none moves when another changes: the space group (3DoF | 6DoF and Frame Selected) shows or hides
// as a whole at the left end of the row, where the row grows away from the other buttons, and Frame
// Content is disabled outside 6DoF instead of hidden. `buttons` patches the other buttons by action.
export function floatingRightState({ spaceView, spaceMode, readOnly, frameMode, showGrid }) {
  const gridVisible = !frameMode && !!showGrid;
  return {
    space: {
      visible: !!spaceView,
      mode: spaceMode,
      frameDisabled: !!readOnly || !spaceView || spaceMode !== "6dof",
    },
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

export function buildEditorSidePanelModel({
  coverage,
  readOnly,
  selectionPicker,
  enabled,
  selectedKind,
  selectedItems,
  params,
  notes,
  visibilityRows,
  uiSettings,
  normalizeCoverageValue,
}) {
  return {
    coverage: { value: normalizeCoverageValue(coverage), disabled: !!readOnly },
    transformTitle: true,
    selectionPicker,
    copyStateButton: {
      disabled: !enabled || selectedKind === "stroke" || selectedKind === "camera" || selectedKind === "world" || selectedItems.length > 1,
      label: "Copy State",
    },
    params,
    notes,
    paramsDisabled: !enabled,
    visibilityRows,
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
  } else if (type === "stickers" || selectedKind === "image") {
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
        choices: ["1:1", "4:3", "3:2", "16:9"].map((value) => ({ value, label: value, active: activeAspect === value })),
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: iconSet.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked },
    ];
  }

  return selectionMenuAt(geom.corners, items);
}

// The gizmo modes of a world Sticker (#72), as segments of its selection menu.
const GIZMO_MODES = [
  { key: "translate", label: "Move", tip: "Move the world sticker" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" },
];

// The selection menu of the selected world Sticker: the Move | Rotate | Scale segments that pick its gizmo
// mode. It is placed around both its corners on the canvas and gizmoBox, the box its gizmo covers
// (pano_space.js gizmoScreenBox, null when not in front), so it stays clear of the handles.
export function buildWorldSelectionMenuModel({ corners, gizmoBox = null, gizmoMode }) {
  const box = gizmoBox ? [{ x: gizmoBox.minX, y: gizmoBox.minY }, { x: gizmoBox.maxX, y: gizmoBox.maxY }] : [];
  return selectionMenuAt([...corners, ...box], [{
    key: "gizmo-mode",
    kind: "segments",
    attr: "data-gizmo-mode",
    label: "Gizmo mode",
    buttons: GIZMO_MODES.map((mode) => ({ ...mode, pressed: mode.key === gizmoMode ? "true" : "false" })),
  }]);
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

const LANE_LABELS = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity",
};

// The Timeline (PanoTimeline.vue) of a working state v2: the Camera row when `camera` is set (only
// Cutout shoots with the state's Camera; Stickers has none, ADR 0028), then the Stickers from front
// to back (sky Stickers by z_index, then world Stickers). A row shows one pin per frame that has a
// Keyframe on any of its Lanes (`full` when on all of them); an open row (openRows) also shows one
// line per Lane. Frames in the model are Timeline frames; `offset` turns them back into the owner's own
// frames. selection is { owner, lane, frames }: `lane` is a Lane's name, or null for the whole row, and
// frames are in the owner's own frames.
// audio is { muted } when the background VIDEO has audio, else null. fpsLocked is set when a video
// input sets the Timeline fps (ADR 0024).
export function buildTimelineModel(state, { frame, span, selection, selectedId, expanded, openRows, playing, label, audio = null, fpsLocked = false, camera = false }) {
  const row = (id, owner, rowLabel, clip, offset) => {
    const selectedFrames = (lane) => (selection?.owner === id && selection.lane === lane ? selection.frames.map((item) => item + offset) : []);
    return {
      id,
      label: rowLabel,
      clip,
      selected: id === selectedId,
      open: openRows.has(id),
      keyed: rowKeyed(owner, frame - offset),
      keys: rowKeyframes(owner).map((key) => ({ frame: key.frame + offset, full: key.full })),
      selectedFrames: selectedFrames(null),
      lanes: laneNames(owner).map((name) => ({
        key: `${id}:${name}`,
        lane: name,
        label: LANE_LABELS[name],
        frames: owner[name].keyframes.map((key) => key.frame + offset),
        selectedFrames: selectedFrames(name),
      })),
    };
  };
  const sky = state.stickers.filter((sticker) => sticker.placement === "sky").sort((a, b) => b.z_index - a.z_index);
  const world = state.stickers.filter((sticker) => sticker.placement === "world");
  return {
    visible: true,
    expanded,
    playing,
    hasAudio: !!audio,
    muted: !!audio?.muted,
    frame,
    span,
    label,
    fps: state.timeline.fps,
    fpsLocked,
    length: state.timeline.length,
    rows: [
      ...(camera ? [row("camera", state.camera, "Camera", null, 0)] : []),
      ...[...sky, ...world].map((sticker) => {
        const { start, in: clipIn, duration } = sticker.clip;
        return row(sticker.id, sticker, sceneStickerLabel(sticker), { start, end: duration === null ? null : start + duration }, start - clipIn);
      }),
    ],
  };
}

// The Easing panel for the selected Keyframes (frames in the owner's own frames, `offset` to the
// Timeline) of the Lanes `names`, or null when they have no segment. `easing` is null when the
// segments differ.
export function buildEasingModel(owner, names, frames, offset) {
  const selected = selectedEasing(owner, names, frames);
  if (!selected) return null;
  const from = Math.min(...frames) + offset;
  const to = Math.max(...frames) + offset;
  return { label: from === to ? `Frame ${from}` : `${from} – ${to}`, ...selected };
}

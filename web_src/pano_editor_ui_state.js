import { ICON } from "./icons.js";
import { sceneStickerLabel } from "./pano_editor_state.js";
import { is3dFileSource } from "./pano_scene_state.js";
import { laneNames, ownerTimed, rowKeyframes, selectedEasing } from "./pano_timeline.js";
import { upstreamLayerOverridden, upstreamRowId } from "./pano_upstream.js";

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

// The Frame tab (PanoViewToggle.vue). The editors with a shot always show it, so the tabs never move, and
// disable it while there is no frame to look through. Panorama Studio says why in its tooltip (#89): it has
// no Camera yet (Add Camera is on the left), its Camera is hidden (its eye on the Timeline), or its Camera
// shoots a 360-degree ERP, which has no frame.
export function frameViewButton({ hasShot, erp = false, hidden = false, studio = false }) {
  const disabled = !hasShot || erp;
  let tip = null;
  if (studio && disabled) {
    if (hidden) tip = "The camera is hidden";
    else tip = hasShot ? "A 360° camera has no frame" : "Add a camera to use the Frame view";
  }
  return { disabled, tip };
}

// Whether the inspector edits a Camera field: a 360-degree ERP Camera reads no FOV, so its H FOV and V FOV
// stay, disabled (ADR 0029, #89).
export function cameraParamEnabled(key, { erp = false } = {}) {
  return !(erp && (key === "hFOV_deg" || key === "vFOV_deg"));
}

// Whether the inspector edits a Sticker field: a port Sticker's vFOV follows its media, so its V FOV shows the
// value the media gives, disabled (docs/scene-state-v2.md).
export function stickerParamEnabled(key, { port = false } = {}) {
  return !(port && key === "vFOV_deg");
}

// The aspect preset that makes Panorama Studio's Camera shoot an ERP (`projection: "erp"`, ADR 0029).
export const ERP_ASPECT = "erp";
const ASPECT_PRESETS = ["1:1", "4:3", "3:2", "16:9"];

// The aspect presets of the Camera's frame in the selection menu and the Frame rail, `active` marked.
// With `erp` (Panorama Studio, #89) they end with 360°, named 180° for a 180 coverage.
export function cameraAspectChoices(active, { erp = false, coverage = 360 } = {}) {
  return [
    ...ASPECT_PRESETS.map((value) => ({ value, label: value, active: active === value })),
    ...(erp ? [{ value: ERP_ASPECT, label: Number(coverage) === 180 ? "180°" : "360°", active: active === ERP_ASPECT }] : []),
  ];
}

const HANDOFF_LANE_LABELS = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" };
const UPSTREAM_LANES = { sky: ["direction", "roll", "size", "opacity"], world: ["position", "rotation", "scale", "opacity"] };
const UPSTREAM_LANE_LABELS = { ...HANDOFF_LANE_LABELS, opacity: "Opacity" };

// Where a selected upstream element comes from (ADR 0030): the key of its layer, the Scene id of the upstream
// Panorama Studio or `#<n>` for a layer without one (pano_upstream.js upstreamLayerKeys).
export function upstreamOriginLabel(layer) {
  return `Upstream · ${layer}`;
}

// The inspector's upstream rows of a selected Panorama Studio Sticker (PanoUpstreamOrigin.vue), the same rows for
// every Sticker so the panel keeps its layout: "Revert to upstream" of all its overrides and a button per Lane of
// its `placement` (its eye is on its Timeline row, its lock in the selection menu, and Restore deleted is its
// layer's, on the Timeline: buildTimelineModel). For an upstream element (`layer`, its layer's key) they are its
// buttons, with where it comes from: a revert button is on while `override` (its override in the node's records,
// or null) holds what it reverts and the element is not `locked`. An element of a layer that is only inherited
// (not `editable`) has them disabled and says so. For the node's own Sticker (`layer` null) the rows are
// disabled, but the Lane buttons of its port Sticker shown with the Pose handoff (`handoff`, [{ name, overridden }]
// per Lane the handoff gives) revert a Lane to the handoff (ADR 0030) while it is an override and the Sticker is
// not locked.
export function upstreamInspectorModel({ layer, editable, locked, readOnly, placement, override = null, handoff = null }) {
  const inherited = layer !== null && !editable;
  const revertable = layer !== null && !readOnly && editable && !locked && !!override;
  const handoffOverridden = (name) => !readOnly && !locked && !!handoff?.some((lane) => lane.name === name && lane.overridden);
  return {
    origin: layer === null ? "" : `${upstreamOriginLabel(layer)}${inherited ? " · inherited only" : ""}`,
    note: inherited ? "Inherited only: edits of this upstream scene cannot be kept here. Edit it in its own Panorama Studio." : "",
    revertAll: { disabled: !revertable },
    lanes: UPSTREAM_LANES[placement].map((name) => ({
      name,
      label: UPSTREAM_LANE_LABELS[name],
      action: layer === null && handoff ? "revert-handoff-lane" : "revert-upstream",
      // An override made for the other placement has none of this one's Lanes.
      disabled: layer === null
        ? !handoffOverridden(name)
        : !revertable || override.placement !== placement || !Object.hasOwn(override, name),
    })),
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
  uiSettings,
  normalizeCoverageValue,
  upstream = null,
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
    rows: inspectorRows(params),
    notes,
    upstream,
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
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot = false,
  coverage = 360,
  // Upstream elements in the selection (ADR 0030): null, or { editable }. Only Lock and Delete act on them,
  // while their layers keep overrides; the other buttons stay in place, disabled.
  upstream = null,
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
    // An upstream port Sticker is deleted as the other upstream elements are (ADR 0030).
    if (!isExternalSticker(selected) || upstream) items.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked });
  } else {
    items = [
      {
        key: "aspect",
        kind: "aspect",
        icon: iconSet.aspect,
        open: !!cutoutAspectOpen,
        choices: cameraAspectChoices(activeAspect, { erp: cameraShot, coverage }),
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: iconSet.rotate_90, disabled: activeAspect === ERP_ASPECT },
    ];
    if (!cameraShot) {
      items.push(
        { key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed },
        { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete, disabled: !!selectedLocked },
      );
    } else {
      items.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete });
    }
  }
  if (upstream) {
    items = items.map((item) => ({
      ...item,
      disabled: item.key === "toggle-lock" ? !upstream.editable : item.key === "delete" ? !upstream.editable || !!item.disabled : true,
    }));
  }

  return selectionMenuAt(geom.corners, items);
}

// The gizmo modes of a world Sticker (#72), as segments of its selection menu. Panorama Studio's Camera
// has no scale.
const GIZMO_MODES = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" },
];

// The selection menu of the selected world Sticker, or of the Camera with `camera`: the Move | Rotate |
// Scale (Move | Rotate) segments that pick its gizmo mode. It is placed around both its corners on the
// canvas and gizmoBox, the box its gizmo covers (pano_space.js gizmoScreenBox, null when not in front), so
// it stays clear of the handles.
export function buildWorldSelectionMenuModel({ corners, gizmoBox = null, gizmoMode, camera = false }) {
  const box = gizmoBox ? [{ x: gizmoBox.minX, y: gizmoBox.minY }, { x: gizmoBox.maxX, y: gizmoBox.maxY }] : [];
  const modes = camera ? GIZMO_MODES.filter((mode) => mode.cameraTip) : GIZMO_MODES;
  return selectionMenuAt([...corners, ...box], [{
    key: "gizmo-mode",
    kind: "segments",
    attr: "data-gizmo-mode",
    label: "Gizmo mode",
    buttons: modes.map(({ key, label, tip, cameraTip }) => ({ key, label, tip: camera ? cameraTip : tip, pressed: key === gizmoMode ? "true" : "false" })),
  },
  // Panorama Studio's Camera is deleted from its menu too (#89).
  ...(camera ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ICON.delete }] : [])]);
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

// The id of the painting's Timeline row.
export const PAINTING_ROW = "painting";
// The id of the Timeline row of the node's own background (state.background).
export const BACKGROUND_ROW = "background";

function hasPainting(painting) {
  return painting.paint.strokes.length > 0 || painting.mask.strokes.length > 0 || painting.raster_objects.length > 0;
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

// The Timeline (PanoTimeline.vue) of a working state v2, one row per object on one Timeline: the Camera
// row when `camera` is set (Panorama Studio while it has a Camera), then the Stickers from front to back (sky Stickers by z_index, then world Stickers), then the
// `scene` row when `scene` is set (its input is linked) or the `scene` changes over time (#89). A row shows one pin per frame that has a
// Keyframe on any of its Lanes (`full` when on all of them); an open row (openRows) also shows one
// line per Lane. Frames in the model are Timeline frames; `offset` turns them back into the owner's own
// frames. selection is { owner, lane, frames }: `lane` is a Lane's name, or null for the whole row, and
// frames are in the owner's own frames. The playhead, the time and whether it plays are not in the model
// (the editor's timelinePlayhead): the model changes only with the state, the selection and the layout.
// audio is { muted } when the background VIDEO has audio, else null. fpsLocked is set when a video
// input sets the Timeline fps (ADR 0024). `span` is the output's length (timelineSpan), which the length
// field shows while `timeline.length` is null (the length the inputs give); a span of one frame is not `playable`.
// portBarEnd(sticker) is where the bar of a port Sticker without a duration ends (its media's end), or null.
// Every row has the place of the eye at its left; a `hideable` row has the eye there, which shows and
// hides it (`visible`); the Camera row has one with `cameraHideable`. The painting has a row (`painting`,
// after the Stickers) while it has strokes or rasters, or is hidden.
// `upstream` are the upstream layers of Panorama Studio (editor/upstream.js upstreamTimelineLayers, ADR 0030),
// shown below the node's own rows in `groups`, one per layer from the farthest upstream: its header
// (`Upstream · <key>`) with the layer's actions, "Revert" of its `scene` and painting overrides (`revert`) and
// "Restore deleted (n)" of its `deleted` elements still in it (`restore`), each disabled while it would do
// nothing, and its rows as the node's own are made from its working state, with the ids
// `upstream:<key>:<id>`, `upstream:<key>:painting` and `upstream:<key>:scene`. Its `scene` row shows while the
// layer has 3D content, Keyframes or a Clip range, or is hidden. An upstream row is `upstream`, `overridden` while
// the layer's record holds an override of it, and `editable` only when the node can keep overrides of its layer;
// the node's own rows are always `editable`.
// `background` is null, or { end } while the node's own bg_media is shown: the Background row comes first, with
// only the Clip range of state.background (no eye, no Keyframes); without a duration its bar ends at `end`, where
// the background media ends (bgMediaEnd), or with the Timeline while that is not known (null) or for an image.
// A 3D Sticker's row (a world port Sticker, a 3D file Sticker, or one in `loading3d`: the ids of the 3D files
// still uploading, whose Source has no file name yet) has the box of the `scene` row; the others the image.
export function buildTimelineModel(state, { span, portBarEnd = () => null, selection, selectedId, expanded, openRows, audio = null, fpsLocked = false, camera = false, cameraHideable = false, scene = false, upstream = [], background = null, loading3d = new Set() }) {
  // A row that is not `keyable` has no key button and no Lane lines: nothing in the editor sets its values yet.
  const row = (id, owner, rowLabel, icon, clip, offset, { keyable = true, hideable = true, origin = null } = {}) => {
    const selectedFrames = (lane) => (selection?.owner === id && selection.lane === lane ? selection.frames.map((item) => item + offset) : []);
    return {
      id,
      label: rowLabel,
      icon,
      clip,
      selected: id === selectedId,
      hideable,
      // The background has no eye and always shows.
      visible: owner.visible !== false,
      ...upstreamRowFlags(origin),
      keyable,
      open: keyable && openRows.has(id),
      keys: rowKeyframes(owner).map((key) => ({ frame: key.frame + offset, full: key.full })),
      selectedFrames: selectedFrames(null),
      lanes: (keyable ? laneNames(owner) : []).map((name) => ({
        key: `${id}:${name}`,
        lane: name,
        label: LANE_LABELS[name],
        frames: owner[name].keyframes.map((key) => key.frame + offset),
        selectedFrames: selectedFrames(name),
      })),
    };
  };
  // A Clip range without a duration ends with the Timeline (`end` null), or a port Sticker's with its media
  // (`portBarEnd`, null while it is not known).
  const clipRange = ({ start, in: clipIn, duration }, mediaEnd = null) => ({ clip: { start, end: duration === null ? mediaEnd : start + duration }, offset: start - clipIn });
  // The rows of a state's Stickers from front to back, its painting and its `scene` (with `sceneRow`). `origin`
  // gives an upstream layer's ids and flags.
  const stateRows = (sceneState, { idOf = (id) => id, sceneRow, origin = null }) => {
    const sky = sceneState.stickers.filter((sticker) => sticker.placement === "sky").sort((a, b) => b.z_index - a.z_index);
    const world = sceneState.stickers.filter((sticker) => sticker.placement === "world");
    return [
      ...[...sky, ...world].map((sticker) => {
        const { clip, offset } = clipRange(sticker.clip, portBarEnd(sticker));
        const label = sceneStickerLabel(origin ? { ...sticker, id: sticker.origin.id } : sticker);
        const threeD = sticker.placement === "world" && (sticker.source.kind === "port" || is3dFileSource(sticker.source) || loading3d.has(sticker.id));
        return row(sticker.id, sticker, label, threeD ? ICON.box : ICON.image, clip, offset, { origin: origin && { ...origin, overridden: origin.stickerOverridden(sticker) } });
      }),
      ...(hasPainting(sceneState.painting) || !sceneState.painting_visible ? [{
        id: idOf(PAINTING_ROW),
        label: "Paint",
        icon: ICON.paintbrush_vertical_tool,
        clip: null,
        selected: false,
        hideable: true,
        visible: sceneState.painting_visible,
        ...upstreamRowFlags(origin && { ...origin, overridden: origin.paintingOverridden }),
        keyable: false,
        open: false,
        keys: [],
        selectedFrames: [],
        lanes: [],
      }] : []),
      ...(sceneRow || ownerTimed(sceneState.scene) ? [(() => {
        const { clip, offset } = clipRange(sceneState.scene.clip);
        // The editor has no way to move the `scene` yet, so its row has only its Clip range (#89).
        return row(idOf("scene"), sceneState.scene, "Scene", ICON.box, clip, offset, {
          keyable: false,
          origin: origin && { ...origin, overridden: origin.sceneOverridden },
        });
      })()] : []),
    ];
  };
  return {
    visible: true,
    expanded,
    hasAudio: !!audio,
    muted: !!audio?.muted,
    span,
    // A Timeline of one frame has nothing to play.
    playable: span > 1,
    fps: state.timeline.fps,
    fpsLocked,
    length: state.timeline.length,
    rows: [
      ...(background ? [(() => {
        const { clip, offset } = clipRange(state.background.clip, background.end);
        return row(BACKGROUND_ROW, state.background, "Background", ICON.unwrap, clip, offset, { keyable: false, hideable: false });
      })()] : []),
      ...(camera ? [row("camera", state.camera, "Camera", ICON.camera, null, 0, { hideable: cameraHideable })] : []),
      ...stateRows(state, { sceneRow: scene }),
    ],
    groups: upstream.map(({ key, sceneState, editable, record, scene: content, deleted }) => ({
      key,
      label: `${upstreamOriginLabel(key)}${editable ? "" : " · inherited only"}`,
      revert: { disabled: !editable || !upstreamLayerOverridden(record) },
      restore: { label: `Restore deleted (${deleted})`, disabled: !editable || deleted === 0 },
      rows: stateRows(sceneState, {
        idOf: (part) => upstreamRowId(key, part),
        sceneRow: content || !sceneState.scene.visible,
        origin: {
          editable,
          stickerOverridden: (sticker) => !!record?.stickers.some((item) => item.id === sticker.origin.id && item.placement === sticker.placement),
          paintingOverridden: !!record && Object.hasOwn(record, "painting_visible"),
          sceneOverridden: !!record && Object.keys(record.scene).length > 0,
        },
      }),
    })),
  };
}

// The flags of a Timeline row (buildTimelineModel): an upstream layer's row (`origin`, { editable, overridden })
// is `upstream`, `overridden` while the node overrides it, and `editable` when the node can keep overrides of it.
function upstreamRowFlags(origin) {
  return origin ? { upstream: true, overridden: origin.overridden, editable: origin.editable } : { upstream: false, overridden: false, editable: true };
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

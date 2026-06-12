export function patchUiButton(list, matchKey, key, patch) {
  const entry = Array.isArray(list) ? list.find((item) => String(item?.[matchKey] || "") === String(key || "")) : null;
  if (entry) Object.assign(entry, patch);
}

export function buildUiSettingsModel(uiSettings = {}) {
  const qualityValue = String(uiSettings.preview_quality || "balanced");
  const qualityOptions = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" },
  ];
  return {
    open: false,
    invertX: !!uiSettings.invert_view_x,
    invertY: !!uiSettings.invert_view_y,
    qualityOpen: false,
    qualityLabel: (qualityOptions.find((item) => item.value === qualityValue) || qualityOptions[1]).label,
    qualityOptions: qualityOptions.map((item) => ({ ...item, active: item.value === qualityValue })),
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
      disabled: !enabled || selectedKind === "stroke" || selectedItems.length > 1,
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
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: allLocked ? "Unlock" : "Lock", tip: allLocked ? "Unlock" : "Lock", icon: allLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete },
    ];
  } else if (selectedKind === "stroke") {
    items = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: selectedLocked ? "Unlock" : "Lock", tip: selectedLocked ? "Unlock" : "Lock", icon: selectedLocked ? iconSet.lock_open : iconSet.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete },
    ];
  } else if (type === "stickers" || selectedKind === "image") {
    items = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: iconSet.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: iconSet.send_back },
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
    if (!isExternalSticker(selected)) items.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete });
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
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: iconSet.delete },
    ];
  }

  const finiteCorners = geom.corners
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

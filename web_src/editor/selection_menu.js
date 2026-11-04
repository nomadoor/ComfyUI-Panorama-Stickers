// The floating selection menu over the selected item and the tooltips of the stage.
import { ICON } from "../icons.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import { buildSelectionMenuModel, selectionMenuPlacement } from "../pano_editor_ui_state.js";
import { clamp } from "../pano_math.js";

export function createSelectionMenu(deps) {
  const {
    canvas, editor, scheduler, selectionMenu, stageWrap, timers, tooltip, tooltipEl, type,
    uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let areAllSelectedItemsLocked, canRestoreSelectedToInitial, getMultiSelectionGeom, getSelected, getSelectedItems,
    getSelectedKind, isExternalSticker, isItemLocked, isStickerHidden, objectGeom;

  function updateSelectionMenu() {
    if (!selectionMenu) return;
    if (editor.mode === "frame") {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    const selected = getSelected();
    const selectedItems = getSelectedItems();
    if ((!selected && selectedItems.length === 0) || editor.interaction) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    const selectedKind = getSelectedKind();
    const model = buildSelectionMenuModel({
      type,
      selected,
      selectedItems,
      selectedKind,
      geom: selectedItems.length > 1 ? getMultiSelectionGeom(selectedItems) : objectGeom(selected),
      allLocked: areAllSelectedItemsLocked(selectedItems),
      anyLocked: selectedItems.some((item) => isItemLocked(item)),
      selectedLocked: isItemLocked(selected),
      activeAspect: getCutoutAspectLabel(selected),
      cutoutAspectOpen: editor.cutoutAspectOpen,
      isExternalSticker,
      isStickerHidden,
      canRestoreSelectedToInitial,
      iconSet: ICON,
    });
    showSelectionMenu(model);
  }

  function showSelectionMenu(model) {
    if (!model.visible) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    const placeSelectionMenu = (menuW, menuH) => selectionMenuPlacement(model.anchor, menuW, menuH, canvas.width, canvas.height);
    const estimatedW = Math.max(1, Number(editor.menuSize?.w || 220));
    const estimatedH = Math.max(1, Number(editor.menuSize?.h || 40));
    const initialPlacement = placeSelectionMenu(estimatedW, estimatedH);
    if (!initialPlacement) {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }

    uiState.selectionMenu = {
      visible: true,
      left: initialPlacement.left,
      top: initialPlacement.top,
      items: model.items,
    };
    scheduler.requestFrame(() => {
      if (!selectionMenu || uiState.selectionMenu.visible !== true) return;
      const rect = selectionMenu.getBoundingClientRect();
      const menuW = Math.round(Number(rect?.width || 0)) || 220;
      const menuH = Math.round(Number(rect?.height || 0)) || 40;
      editor.menuSize = { w: menuW, h: menuH, measured: true };
      const measuredPlacement = placeSelectionMenu(menuW, menuH);
      if (!measuredPlacement) return;
      uiState.selectionMenu.left = measuredPlacement.left;
      uiState.selectionMenu.top = measuredPlacement.top;
    });
  }

  function hideTooltip() {
    timers.clear(tooltip.timer);
    tooltip.timer = 0;
    tooltip.target = null;
    uiState.tooltip.visible = false;
  }

  function showTooltipFor(el) {
    if (!tooltipEl || !el || !el.isConnected) return;
    const text = String(el.getAttribute("data-tip") || "").trim();
    if (!text) return;
    uiState.tooltip.text = text;
    uiState.tooltip.visible = true;
    const expectedTarget = el;
    scheduler.requestFrame(() => {
      if (tooltip.target !== expectedTarget || !tooltipEl || !expectedTarget?.isConnected) return;
      const hostRect = stageWrap.getBoundingClientRect();
      const rect = expectedTarget.getBoundingClientRect();
      const pad = 8;
      const topGap = 12;
      const mw = Math.round(Number(tooltipEl.getBoundingClientRect()?.width || 0)) || 100;
      const mh = Math.round(Number(tooltipEl.getBoundingClientRect()?.height || 0)) || 24;
      const inToolRail = !!expectedTarget.closest(".pano-floating-left");
      const inFrameRail = !!expectedTarget.closest(".pano-frame-rail");
      const inFooter = !!expectedTarget.closest(".pano-paint-footer") || !!expectedTarget.closest(".pano-paint-color-float");
      let variant = "";
      let x = rect.left - hostRect.left + rect.width * 0.5 - mw * 0.5;
      let y = rect.top - hostRect.top - mh - topGap;
      // The view tabs are at the top of the stage, so their tooltip goes below them.
      if (expectedTarget.closest(".pano-floating-top")) y = rect.bottom - hostRect.top + topGap;
      if (inToolRail) {
        variant = "tool-rail";
        x = rect.right - hostRect.left + 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFrameRail) {
        variant = "frame-rail";
        x = rect.left - hostRect.left - mw - 10;
        y = rect.top - hostRect.top + rect.height * 0.5 - mh * 0.5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = clamp(y, pad, Math.max(pad, hostRect.height - mh - pad));
      } else if (inFooter) {
        variant = "footer";
        const footerHost = expectedTarget.closest(".pano-paint-footer");
        const footerRect = footerHost ? footerHost.getBoundingClientRect() : rect;
        x = footerRect.left - hostRect.left + footerRect.width * 0.5 - mw * 0.5;
        y = footerRect.bottom - hostRect.top + 5;
        x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
        y = Math.max(pad, y);
      }
      x = clamp(x, pad, Math.max(pad, hostRect.width - mw - pad));
      y = Math.max(pad, y);
      uiState.tooltip.left = x;
      uiState.tooltip.top = y;
      uiState.tooltip.variant = variant;
      uiState.tooltip.visible = true;
    });
  }

  return {
    connect(api) {
      ({
        areAllSelectedItemsLocked, canRestoreSelectedToInitial, getMultiSelectionGeom, getSelected, getSelectedItems,
        getSelectedKind, isExternalSticker, isItemLocked, isStickerHidden, objectGeom,
      } = api);
    },
    updateSelectionMenu, hideTooltip, showTooltipFor,
  };
}

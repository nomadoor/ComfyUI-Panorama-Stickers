// The floating selection menu over the selected item (or world Sticker) and the tooltips of the stage.
import { ICON } from "../icons.js";
import { getCutoutAspectLabel } from "../pano_cutout_view_math.js";
import {
  ERP_ASPECT,
  buildSelectionMenuModel,
  buildWorldSelectionMenuModel,
  selectionMenuPlacement,
} from "../pano_editor_ui_state.js";
import { clamp } from "../pano_math.js";
import { gizmoScreenBox, planeCorners, projectPoint } from "../pano_space.js";
import { isUpstreamSticker, upstreamStickerEditable } from "../pano_upstream.js";

export function createSelectionMenu(deps) {
  const {
    cameraV2, canvas, editor, scheduler, selectionMenu, stageWrap, state, tooltip, tooltipEl, type,
    uiState,
  } = deps;
  // Bound by connect() to the other modules and showEditor.
  let areAllSelectedItemsLocked, canRestoreSelectedToInitial, currentSpaceCamera, editorViewInput,
    getMultiSelectionGeom, getSelected, getSelectedItems, getSelectedKind, isCameraSelected, isErpCamera,
    isExternalSticker, isFreeSpaceView, isItemLocked, isShotItem, isSpaceView, isStickerHidden, objectGeom;

  // Whether the selection menu shows the world Sticker's menu, which renderEditorView() keeps current.
  let worldMenuShown = false;

  function isWorldMenuShown() {
    return worldMenuShown;
  }

  function updateSelectionMenu() {
    if (!selectionMenu) return;
    worldMenuShown = false;
    if (editor.mode === "frame") {
      uiState.selectionMenu = { visible: false, left: 0, top: 0, items: [] };
      return;
    }
    if (editor.worldSelectedId || (isCameraSelected() && isFreeSpaceView())) {
      const model = worldSelectionMenuModel();
      worldMenuShown = model.visible;
      showSelectionMenu(model);
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
      activeAspect: isShotItem(selected) && isErpCamera() ? ERP_ASPECT : getCutoutAspectLabel(selected),
      cutoutAspectOpen: editor.cutoutAspectOpen,
      isExternalSticker,
      isStickerHidden,
      canRestoreSelectedToInitial,
      iconSet: ICON,
      cameraShot: cameraV2,
      coverage: state.coverage,
      upstream: upstreamSelection(selectedItems),
    });
    showSelectionMenu(model);
  }

  // What the menu may do with upstream elements in the selection (ADR 0030): null without any, else whether
  // they can be locked and unlocked (their layers keep overrides).
  function upstreamSelection(selectedItems) {
    const upstream = selectedItems.filter(isUpstreamSticker);
    return upstream.length ? { lockable: upstream.every(upstreamStickerEditable) } : null;
  }

  // The selected world Sticker's menu shows while its gizmo does (worldGizmo: in the space view, not
  // locked, in an editor that edits, inside its Clip range), clear of its plane (or its 3D item's origin)
  // and of the gizmo's handles.
  function worldSelectionMenuModel() {
    const space = isSpaceView() && !editor.interaction ? editorViewInput().space : null;
    if (!space?.gizmo) return { visible: false };
    const camera = currentSpaceCamera();
    const plane = [...space.stickers, ...space.upstreamStickers].find((layer) => layer.id === editor.worldSelectedId);
    const points = plane ? planeCorners(plane) : [space.gizmo.transform.position];
    const corners = points.map((point) => projectPoint(camera, point, canvas.width, canvas.height)).filter(Boolean);
    const gizmoBox = gizmoScreenBox(camera, space.gizmo.transform.position, space.gizmo.mode, canvas.width, canvas.height);
    return buildWorldSelectionMenuModel({ corners, gizmoBox, gizmoMode: space.gizmo.mode, camera: isCameraSelected() });
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
    if (tooltip.timer) {
      clearTimeout(tooltip.timer);
      tooltip.timer = 0;
    }
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
        areAllSelectedItemsLocked, canRestoreSelectedToInitial, currentSpaceCamera, editorViewInput,
        getMultiSelectionGeom, getSelected, getSelectedItems, getSelectedKind, isCameraSelected, isErpCamera,
        isExternalSticker, isFreeSpaceView, isItemLocked, isShotItem, isSpaceView, isStickerHidden, objectGeom,
      } = api);
    },
    isWorldMenuShown, updateSelectionMenu, hideTooltip, showTooltipFor,
  };
}

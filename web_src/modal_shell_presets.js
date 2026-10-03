import { ICON } from "./icons.js";

export function buildModalShellPreset(type = "stickers") {
  const isCutout = String(type || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ICON.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ICON.unwrap, pressed: "false", extraClass: "" },
      ...(isCutout ? [{ key: "frame", label: "Frame", icon: ICON.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []),
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: ICON.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: ICON.dof_6 },
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: ICON.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: true, accent: false, icon: ICON.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: false, accent: false, icon: ICON.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: false, accent: false, icon: ICON.circle_dashed_tool, pressed: "false" },
      ...(isCutout
        ? [
            { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: false, accent: false, icon: ICON.image, pressed: null },
            { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: false, accent: true, icon: ICON.plus_circle, pressed: null },
          ]
        : [
            { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: false, accent: true, icon: ICON.image, pressed: null },
            // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
            { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: false, accent: false, icon: ICON.globe, pressed: null, visible: false },
          ]),
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: false, accent: false, icon: ICON.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: false, accent: false, icon: ICON.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: false, accent: false, icon: ICON.redo, pressed: null },
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ICON.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ICON.eye },
    ],
    paintPanes: [
      {
        key: "paint",
        footer: "paint",
        group: "paint",
        clearTarget: "paint",
        clearLabel: "Clear paint",
        clearTip: "Clear paint",
        clearHidden: true,
        showColorFloat: true,
        tools: [
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ICON.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ICON.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ICON.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ICON.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ICON.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ICON.lasso_tool },
        ],
      },
      {
        key: "mask",
        footer: "mask",
        group: "mask",
        clearTarget: "mask",
        clearLabel: "Clear mask",
        clearTip: "Clear mask",
        clearHidden: false,
        showColorFloat: false,
        tools: [
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ICON.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ICON.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ICON.lasso_tool },
        ],
      },
    ],
  };
}

// Where Panorama Studio's node surface puts the Camera's output picture, the line under it and the Open Studio button
// (docs/studio-node-surface.md "表示の構成"; the values are docs/design.md "Panorama Studio のノード上の表示"). The canvas
// draws the picture and the Vue overlay places the line and the button from the same layout. Pure.

// The line under the picture (the shot on the left, the output size on the right) and its gap to the picture, CSS px.
export const STUDIO_LINE_HEIGHT = 16;
export const STUDIO_LINE_GAP = 6;
// How far above the picture's bottom edge the Open Studio button sits.
export const STUDIO_BUTTON_INSET = 8;
// The picture's corner radius (the surface's too), and the surface's dark fill around the picture and the line, which
// is also the picture's box before the view draws (the stage's empty color, in either theme).
export const STUDIO_PICTURE_RADIUS = 8;
export const STUDIO_SURFACE_FILL = "transparent";

// The layout of a surface of width x height CSS px for an output of `ratio` (width / height): the picture
// { x, y, w, h } at that ratio, as large as fits the width and the height less the line (contain); the line
// { x, y, w, h } right under it, as wide; the two together centered across and up and down; and the button's
// { centerX, bottom } (bottom: from the surface's bottom edge, as CSS `bottom`).
export function studioSurfaceLayout(width, height, ratio) {
  const shape = Number.isFinite(ratio) && ratio > 0 ? ratio : 2;
  const roomW = Math.max(0, width);
  const roomH = Math.max(0, height - STUDIO_LINE_HEIGHT - STUDIO_LINE_GAP);
  const w = Math.min(roomW, roomH * shape);
  const h = w / shape;
  const picture = { x: (roomW - w) / 2, y: (roomH - h) / 2, w, h };
  return {
    picture,
    line: { x: picture.x, y: picture.y + h + STUDIO_LINE_GAP, w, h: STUDIO_LINE_HEIGHT },
    button: { centerX: picture.x + w / 2, bottom: Math.max(0, height) - (picture.y + h) + STUDIO_BUTTON_INSET },
  };
}

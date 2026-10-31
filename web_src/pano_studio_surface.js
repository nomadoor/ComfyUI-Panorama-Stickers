// Where Panorama Studio's node surface puts the Camera's output picture, the line under it, the Open Studio button and the
// play button (docs/studio-node-surface.md "表示の構成"; the values are docs/design.md "Panorama Studio のノード上の表示"). The
// canvas draws the picture and the Vue overlay places the line and the buttons from the same layout. Pure.

// The line under the picture (the shot on the left, the output size on the right) and its gap to the picture, CSS px.
export const STUDIO_LINE_HEIGHT = 16;
export const STUDIO_LINE_GAP = 6;
// How far above the picture's bottom edge the buttons sit, the play button's (and the narrow Open Studio's) round size,
// and the gap between the play button and Open Studio.
export const STUDIO_BUTTON_INSET = 8;
export const STUDIO_ROUND_BUTTON = 30;
export const STUDIO_BUTTON_GAP = 8;
// The picture's corner radius (the surface's too), and the surface's dark fill around the picture and the line, which
// is also the picture's box before the view draws (the stage's empty color, in either theme).
export const STUDIO_PICTURE_RADIUS = 8;
export const STUDIO_SURFACE_FILL = "transparent";

// The layout of a surface of width x height CSS px for an output of `ratio` (width / height): the picture
// { x, y, w, h } at that ratio, as large as fits the width and the height less the line (contain); the line
// { x, y, w, h } right under it, as wide; the two together centered across and up and down; and the buttons
// { bottom, compact, play, open } (bottom: from the surface's bottom edge, as CSS `bottom`). With `playable` the play
// button ({ x }) and Open Studio ({ x, w }, `openWidth` wide with its label, as the surface measures it) are one group
// STUDIO_BUTTON_GAP apart, else Open Studio is alone and `play` is null; the group is centered on the picture. A group
// wider than the picture is `compact`: Open Studio drops its label for a round icon button. Until Open Studio is measured
// (`openWidth` null) it is alone, centered on the picture by its middle ({ center }), and the play button waits.
export function studioSurfaceLayout(width, height, ratio, { playable = false, openWidth = null } = {}) {
  const shape = Number.isFinite(ratio) && ratio > 0 ? ratio : 2;
  const roomW = Math.max(0, width);
  const roomH = Math.max(0, height - STUDIO_LINE_HEIGHT - STUDIO_LINE_GAP);
  const w = Math.min(roomW, roomH * shape);
  const h = w / shape;
  const picture = { x: (roomW - w) / 2, y: (roomH - h) / 2, w, h };
  const line = { x: picture.x, y: picture.y + h + STUDIO_LINE_GAP, w, h: STUDIO_LINE_HEIGHT };
  const bottom = Math.max(0, height) - (picture.y + h) + STUDIO_BUTTON_INSET;
  if (!(openWidth > 0)) return { picture, line, buttons: { bottom, compact: false, play: null, open: { center: picture.x + w / 2 } } };
  const lead = playable ? STUDIO_ROUND_BUTTON + STUDIO_BUTTON_GAP : 0;
  const compact = lead + openWidth > w;
  const open = compact ? STUDIO_ROUND_BUTTON : openWidth;
  const left = picture.x + (w - lead - open) / 2;
  return {
    picture,
    line,
    buttons: { bottom, compact, play: playable ? { x: left } : null, open: { x: left + lead, w: open } },
  };
}

// A click on the dimmed page behind the editor's frame closes the editor like ✕ (docs/studio-ui.md "閉じ方"): only when
// the left button went down and came up on the backdrop itself. A drag that starts inside the frame and ends on the
// backdrop (a field, the timeline's border) does not close it.

// Returns { down(event), up(event) } for the backdrop's pointerdown and pointerup: up() is true when that release closes
// the editor. An event counts as on the backdrop when its target is the backdrop itself (its currentTarget), not
// something inside the frame.
export function createBackdropClose() {
  let pressed = false;
  const onBackdrop = (event) => !!event && event.target === event.currentTarget;
  return {
    down(event) {
      pressed = event?.button === 0 && onBackdrop(event);
    },
    up(event) {
      const closes = pressed && event?.button === 0 && onBackdrop(event);
      pressed = false;
      return closes;
    },
  };
}

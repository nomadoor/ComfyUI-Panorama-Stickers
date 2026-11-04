export const PANO_FOV_WHEEL_STEP_DEG = 3;

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export function readWheelDirection(event, fallbackDelta = 0) {
  const deltaY = finiteNumber(event?.deltaY);
  if (deltaY != null) return Math.sign(deltaY);
  const wheelDeltaY = finiteNumber(event?.wheelDeltaY);
  if (wheelDeltaY != null) return Math.sign(-wheelDeltaY);
  const wheelDelta = finiteNumber(event?.wheelDelta);
  if (wheelDelta != null) return Math.sign(-wheelDelta);
  const detail = finiteNumber(event?.detail);
  if (detail != null) return Math.sign(detail);
  return Math.sign(finiteNumber(fallbackDelta) || 0);
}

// Fine pixel wheel events (a trackpad) add up to one wheel step every this many px (provisional; ADR 0048;
// docs/space-and-view.md "量の一覧").
export const WHEEL_STEP_PIXELS = 100;

// What a wheel event does (docs/space-and-view.md "マウスとキー", "寄る"; ADR 0061): "move" (toward the pointer), or
// "zoom" (the view's FOV) with Alt or Ctrl (a trackpad's pinch comes as Ctrl + wheel, which a mouse's Ctrl + wheel
// cannot be told from); null with Meta, which stays the browser's. Shift changes nothing (some browsers make Shift +
// wheel a sideways scroll).
export function wheelMeaning(event) {
  if (event.metaKey) return null;
  return event.altKey || event.ctrlKey ? "zoom" : "move";
}

// The wheel's steps: push(event) gives 1 (nearer: rolled away, deltaY < 0; a smaller FOV for a zoom), -1 (farther) or
// 0. A line or page event (deltaMode != 0) and a pixel event of WHEEL_STEP_PIXELS or more are one step each. Finer
// pixel events (a trackpad) add up in one direction to a step every WHEEL_STEP_PIXELS; a change of direction or of the
// wheel's meaning (wheelMeaning: Alt or Ctrl went down or up) drops what was added up.
export function createWheelSteps() {
  let added = 0;
  let meaning = "move";
  return {
    push(event) {
      const now = wheelMeaning(event);
      if (now !== meaning) {
        added = 0;
        meaning = now;
      }
      const fine = (event.deltaMode ?? 0) === 0 && Math.abs(event.deltaY) < WHEEL_STEP_PIXELS;
      if (!fine) {
        added = 0;
        return -readWheelDirection(event) || 0;
      }
      if (!event.deltaY) return 0;
      if (Math.sign(event.deltaY) !== Math.sign(added)) added = 0;
      added += event.deltaY;
      if (Math.abs(added) < WHEEL_STEP_PIXELS) return 0;
      const direction = Math.sign(added);
      added -= direction * WHEEL_STEP_PIXELS;
      return -direction;
    },
    reset() {
      added = 0;
    },
  };
}

export function bindWheelCaptureRoot(root) {
  if (!root?.addEventListener) return () => {};
  const onPointerEnter = () => root.focus?.({ preventScroll: true });
  root.addEventListener("pointerenter", onPointerEnter);
  return () => root.removeEventListener?.("pointerenter", onPointerEnter);
}

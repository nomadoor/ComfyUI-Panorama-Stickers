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

export function bindWheelCaptureRoot(root) {
  if (!root?.addEventListener) return () => {};
  const onPointerEnter = () => root.focus?.({ preventScroll: true });
  root.addEventListener("pointerenter", onPointerEnter);
  return () => root.removeEventListener?.("pointerenter", onPointerEnter);
}

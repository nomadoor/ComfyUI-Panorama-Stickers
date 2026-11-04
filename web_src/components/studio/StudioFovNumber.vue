<script setup>
import { onBeforeUnmount, ref } from "vue";
import { VIEW_FOV_DRAG_PX_PER_DEG, VIEW_HFOV_MAX_DEG, VIEW_HFOV_MIN_DEG } from "../../pano_camera_math.js";
import { rulerDragValue } from "../../studio/frame_layout.js";
import { viewFovKeyStep } from "../../studio/view_camera.js";

// The FOV number of the View group at the stage's bottom right (docs/studio-ui.md "右下の View の群"; how it changes the
// view: docs/space-and-view.md "寄る"; looks: docs/design.md "右下の画角の数字と画角のリセット"). It shows `text` (the
// view's FOV as "100°", or what the Camera tab gives) in a fixed width. A left and right drag changes it, right larger,
// by the FOV ruler's drag (frame_layout.js rulerDragValue at VIEW_FOV_DRAG_PX_PER_DEG, the movement's sign turned),
// Shift finer (the unrounded value adds up, the view rounds it on applying, so a fine drag still moves); a press that
// does not move does nothing. With the keyboard's focus, the arrow keys step it as the FOV ruler's do, Shift by one
// degree (view_camera.js viewFovKeyStep). Disabled, it takes neither the pointer nor the focus.
//
// Presentational: `value` in, `change` (the value wanted, unrounded during a drag; the view holds it as it holds its
// FOV) out.
const props = defineProps({
  value: { type: Number, default: 100 },
  text: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  tip: { type: String, default: "" },
});
const emit = defineEmits(["change"]);

const chip = ref(null);
// The drag under way: { pointerId, x (the last pointer x), raw (the unrounded value it carries) }, or null.
let drag = null;

function onPointerDown(event) {
  if (props.disabled || event.button !== 0 || drag) return;
  event.preventDefault();
  chip.value?.focus({ preventScroll: true });
  chip.value?.setPointerCapture?.(event.pointerId);
  drag = { pointerId: event.pointerId, x: event.clientX, raw: props.value };
}

function onPointerMove(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const dx = event.clientX - drag.x;
  drag.x = event.clientX;
  if (!dx) return;
  drag.raw = rulerDragValue(drag.raw, -dx, VIEW_FOV_DRAG_PX_PER_DEG, { fine: event.shiftKey, min: VIEW_HFOV_MIN_DEG, max: VIEW_HFOV_MAX_DEG });
  emit("change", drag.raw);
}

function onPointerUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  try {
    chip.value?.releasePointerCapture?.(drag.pointerId);
  } catch {
    // The capture was already gone.
  }
  drag = null;
}

function onKeydown(event) {
  if (props.disabled || drag) return;
  const dir = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[event.key];
  if (!dir) return;
  event.preventDefault();
  const next = viewFovKeyStep(props.value, dir, event.shiftKey);
  if (next !== props.value) emit("change", next);
}

onBeforeUnmount(() => {
  drag = null;
});
</script>

<template>
  <span
    ref="chip"
    class="pano-studio-fov"
    role="spinbutton"
    aria-label="Field of view"
    :aria-valuenow="value"
    :aria-valuetext="text || `${value}°`"
    :aria-valuemin="VIEW_HFOV_MIN_DEG"
    :aria-valuemax="VIEW_HFOV_MAX_DEG"
    :aria-disabled="disabled ? 'true' : null"
    :tabindex="disabled ? -1 : 0"
    :data-tip="tip || null"
    data-action="fov"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
    @lostpointercapture="onPointerUp"
    @keydown="onKeydown"
  ><span class="pano-studio-fov-num" :data-widest="`${VIEW_HFOV_MAX_DEG}°`"><span data-fov-text>{{ text || `${value}°` }}</span></span></span>
</template>

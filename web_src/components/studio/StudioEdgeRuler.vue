<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { rulerDragValue, rulerMarks, rulerSnapStep, rulerSnapValue } from "../../studio/frame_layout.js";
import { FINE_FACTOR, roundValue } from "../../studio/ui_drag.js";
import StudioKeyDot from "./StudioKeyDot.vue";
import StudioResetButton from "./StudioResetButton.vue";

// An edge ruler of the Camera tab (docs/studio-ui.md "Camera タブ"; looks: docs/design.md): FOV on the frame's left,
// Lens on its right (vertical), Roll under it (horizontal). The element is the tick strip (the parent sizes and places
// it: frame_layout.js rulerStrips), with numbers under a fixed middle mark; its heads sit outside the strip at its two
// ends, so they never move or shorten it: the name and the value in a fixed width at one end (above a vertical strip,
// left of Roll), the Keyframe dot and the reset at the other (below a vertical strip, stacked; right of Roll). Dragging the scale moves it under the mark (the value under the mark is the value);
// Shift makes the movement finer, or with `snap` (Roll) stops it at multiples of `snap`; Escape during the drag puts the value back. The strip takes the pointer on a wider
// transparent band than its ticks. Arrow keys step it; the focus looks as everywhere in the editor (docs/design.md
// "フォーカス"), its fill lighter over the dim. Drawn in white over the dimmed picture outside the frame.
//
// Presentational, like StudioSlider: `value` in; `input` (each change), `change` (once when a drag or a key press ends
// with a different value: one Undo step), `cancel`, `key` (the Keyframe dot pressed) and `reset` (the reset pressed)
// out.
const props = defineProps({
  orientation: { type: String, default: "vertical" },
  // Vertical: the side of the frame it sits on ("left" or "right"); its numbers go on the outer side.
  side: { type: String, default: "left" },
  value: { type: Number, default: 0 },
  min: { type: Number, default: -Infinity },
  max: { type: Number, default: Infinity },
  // The scale (frame_layout.js CAMERA_RULERS): px per unit, units per small tick and per number, the numbers' decimals.
  unitPx: { type: Number, default: 8 },
  minor: { type: Number, default: 1 },
  major: { type: Number, default: 10 },
  labelPrecision: { type: Number, default: 0 },
  // The decimals of the values sent, and the value an arrow key moves (default: a small tick).
  precision: { type: Number, default: 2 },
  step: { type: Number, default: 0 },
  name: { type: String, default: "" },
  valueText: { type: String, default: "" },
  // The value text's width in digits (frame_layout.js CAMERA_RULERS valueChars), enough for the widest value.
  valueChars: { type: Number, default: 4 },
  // The reset is grayed (not hidden) while the value is where it returns to.
  atDefault: { type: Boolean, default: false },
  // The Keyframe dot: "none", "has", "now" (StudioKeyDot), or "" for no dot.
  keyState: { type: String, default: "none" },
  disabled: { type: Boolean, default: false },
  tip: { type: String, default: "" },
  // With Shift, stop at multiples of this (0: Shift makes the movement finer instead).
  snap: { type: Number, default: 0 },
});
const emit = defineEmits(["input", "change", "cancel", "key", "reset"]);

const vertical = computed(() => props.orientation !== "horizontal");
const track = ref(null);
const length = ref(0);
const live = ref(null);
const shown = computed(() => live.value ?? props.value);
const marks = computed(() => rulerMarks({
  value: shown.value,
  length: length.value,
  unitPx: props.unitPx,
  minor: props.minor,
  major: props.major,
  precision: props.labelPrecision,
  min: props.min,
  max: props.max,
}));
const along = (at) => (vertical.value ? { top: `${at}px` } : { left: `${at}px` });

let observer = null;
function measure() {
  const box = track.value?.getBoundingClientRect();
  if (box) length.value = vertical.value ? box.height : box.width;
}
onMounted(() => {
  measure();
  if (typeof ResizeObserver === "function") {
    observer = new ResizeObserver(measure);
    observer.observe(track.value);
  }
});

let drag = null;
const coord = (event) => (vertical.value ? event.clientY : event.clientX);

function onPointerDown(event) {
  if (props.disabled || event.button !== 0 || drag) return;
  event.preventDefault();
  event.stopPropagation();
  track.value.focus({ preventScroll: true });
  drag = { pointerId: event.pointerId, start: props.value, sent: props.value, raw: props.value, at: coord(event) };
  track.value.setPointerCapture?.(event.pointerId);
  window.addEventListener("keydown", onDragKeydown, true);
}

function onPointerMove(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const at = coord(event);
  const snapping = event.shiftKey && props.snap > 0;
  drag.raw = rulerDragValue(drag.raw, at - drag.at, props.unitPx, { fine: event.shiftKey && !snapping, min: props.min, max: props.max });
  drag.at = at;
  const bounds = { min: props.min, max: props.max };
  const next = roundValue(snapping ? rulerSnapValue(drag.raw, props.snap, bounds) : drag.raw, props.precision);
  if (next === drag.sent) return;
  drag.sent = next;
  live.value = next;
  emit("input", next);
}

function onPointerUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const { start, sent } = drag;
  endDrag();
  if (sent !== start) emit("change", sent);
  else emit("cancel");
}

function onDragKeydown(event) {
  if (!drag || event.key !== "Escape") return;
  event.preventDefault();
  event.stopPropagation();
  const { start, sent } = drag;
  endDrag();
  if (sent !== start) emit("input", start);
  emit("cancel");
}

function endDrag() {
  if (!drag) return;
  try {
    track.value?.releasePointerCapture?.(drag.pointerId);
  } catch {
    // The capture was already gone.
  }
  window.removeEventListener("keydown", onDragKeydown, true);
  drag = null;
  live.value = null;
}

function onKeydown(event) {
  if (props.disabled || drag) return;
  const dir = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[event.key];
  if (!dir) return;
  event.preventDefault();
  let next;
  if (event.shiftKey && props.snap > 0) {
    next = roundValue(rulerSnapStep(props.value, dir, props.snap, { min: props.min, max: props.max }), props.precision);
  } else {
    const step = (props.step || props.minor) * (event.shiftKey ? FINE_FACTOR : 1);
    next = roundValue(Math.min(props.max, Math.max(props.min, props.value + dir * step)), props.precision);
  }
  if (next === props.value) return;
  emit("input", next);
  emit("change", next);
}

onBeforeUnmount(() => {
  endDrag();
  observer?.disconnect();
});
</script>

<template>
  <div
    class="pano-studio-edge-ruler"
    :class="[vertical ? 'is-vertical' : 'is-horizontal', vertical ? `is-${side}` : '', { 'is-disabled': disabled }]"
    :title="tip || null"
    :data-ruler="name"
  >
    <div
      ref="track"
      class="pano-studio-edge-ruler-track"
      role="slider"
      :tabindex="disabled ? -1 : 0"
      :aria-label="name || null"
      :aria-orientation="vertical ? 'vertical' : 'horizontal'"
      :aria-valuenow="shown"
      :aria-valuetext="valueText || null"
      :aria-valuemin="Number.isFinite(min) ? min : null"
      :aria-valuemax="Number.isFinite(max) ? max : null"
      :aria-disabled="disabled ? 'true' : null"
      data-ruler-track
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="endDrag"
      @keydown="onKeydown"
    >
      <div class="pano-studio-edge-ruler-scale" data-ruler-ticks>
        <i v-for="(tick, index) in marks.ticks" :key="index" class="pano-studio-edge-ruler-tick" :style="along(tick.at)" />
      </div>
      <span v-for="label in marks.labels" :key="label.text" class="pano-studio-edge-ruler-num" :style="along(label.at)">{{ label.text }}</span>
      <i class="pano-studio-edge-ruler-mark" data-ruler-mark />
    </div>
    <div class="pano-studio-edge-ruler-head" data-ruler-head>
      <span class="pano-studio-edge-ruler-name pano-studio-cap">{{ name }}</span>
      <b class="pano-studio-edge-ruler-value pano-studio-cap" :style="{ width: `${valueChars}ch` }" data-ruler-value>{{ valueText }}</b>
    </div>
    <div class="pano-studio-edge-ruler-acts" data-ruler-acts>
      <StudioKeyDot v-if="keyState" :state="keyState" :disabled="disabled" :label="`${name} Keyframe`" @toggle="emit('key')" />
      <StudioResetButton :at-default="disabled || atDefault" :label="`Reset ${name}`" @reset="emit('reset')" />
    </div>
  </div>
</template>

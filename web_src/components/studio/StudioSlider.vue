<script setup>
import { computed, onBeforeUnmount, ref } from "vue";
import { pointerPos, posToValue, snapPos, valueToPos } from "../../studio/ui_slider.js";

// A slider of the inspector (docs/studio-ui.md "行の格子"; looks: docs/design.md): a thin line, a round knob, the
// part left of the knob filled. A press on the line moves the knob there and the drag goes on; Escape during the
// drag puts the value back. Arrow keys step it.
//
// Presentational: `value` in; `input` (each change), `change` (once when a drag or a key press ends with a different
// value: one Undo step), `cancel` out. `toPos`/`fromPos` replace the linear mapping (the Aspect slider's log2).
const props = defineProps({
  value: { type: Number, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 1 },
  // The value an arrow key moves; default 1/100 of the range.
  step: { type: Number, default: 0 },
  // Positions (0..1) of ticks, the one at `midTick` drawn taller; the knob snaps to a tick within `snap` (0..1).
  ticks: { type: Array, default: () => [] },
  midTick: { type: Number, default: -1 },
  snap: { type: Number, default: 0 },
  fill: { type: Boolean, default: true },
  toPos: { type: Function, default: null },
  fromPos: { type: Function, default: null },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "" },
  valueText: { type: String, default: "" },
});
const emit = defineEmits(["input", "change", "cancel"]);

const root = ref(null);
const live = ref(null);
const shown = computed(() => live.value ?? props.value);
const pos = computed(() => (props.toPos ? props.toPos(shown.value) : valueToPos(shown.value, props.min, props.max)));
const percent = computed(() => `${(pos.value * 100).toFixed(3)}%`);

const toValue = (p) => (props.fromPos ? props.fromPos(p) : posToValue(p, props.min, props.max));

let drag = null;

function moveTo(clientX) {
  const rect = root.value.getBoundingClientRect();
  const next = toValue(snapPos(pointerPos(clientX, rect), props.ticks, props.snap));
  if (next === drag.sent) return;
  drag.sent = next;
  live.value = next;
  emit("input", next);
}

function onPointerDown(event) {
  if (props.disabled || event.button !== 0 || drag) return;
  event.preventDefault();
  root.value.focus();
  drag = { pointerId: event.pointerId, start: props.value, sent: props.value };
  root.value.setPointerCapture?.(event.pointerId);
  window.addEventListener("keydown", onDragKeydown, true);
  moveTo(event.clientX);
}

function onPointerMove(event) {
  if (drag && event.pointerId === drag.pointerId) moveTo(event.clientX);
}

function onPointerUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const { start, sent } = drag;
  endDrag();
  if (sent !== start) emit("change", sent);
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
    root.value?.releasePointerCapture?.(drag.pointerId);
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
  if (props.ticks.length && props.fromPos) {
    // A mapped slider with ticks (Aspect) steps from tick to tick.
    const here = pos.value;
    const ticks = [0, ...props.ticks, 1].sort((a, b) => a - b);
    const target = dir > 0 ? ticks.find((t) => t > here + 1e-6) : [...ticks].reverse().find((t) => t < here - 1e-6);
    if (target == null) return;
    next = toValue(target);
  } else {
    const step = props.step || (props.max - props.min) / 100;
    next = Math.min(props.max, Math.max(props.min, props.value + dir * step));
  }
  if (next === props.value) return;
  emit("input", next);
  emit("change", next);
}

onBeforeUnmount(endDrag);
</script>

<template>
  <div
    ref="root"
    class="pano-studio-slider"
    role="slider"
    :tabindex="disabled ? -1 : 0"
    :aria-label="label || null"
    :aria-valuenow="shown"
    :aria-valuetext="valueText || null"
    :aria-valuemin="toPos ? null : min"
    :aria-valuemax="toPos ? null : max"
    :aria-disabled="disabled ? 'true' : null"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="endDrag"
    @keydown="onKeydown"
  >
    <i
      v-for="(tick, index) in ticks"
      :key="index"
      class="pano-studio-slider-tick"
      :class="{ 'is-mid': index === midTick }"
      :style="{ left: `${tick * 100}%` }"
    />
    <div v-if="fill" class="pano-studio-slider-fill" :style="{ width: percent }" />
    <div class="pano-studio-slider-knob" :style="{ left: percent }" />
  </div>
</template>

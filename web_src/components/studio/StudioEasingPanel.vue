<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { formatBezier, parseBezier } from "../../studio/inspector_model.js";
import StudioResetButton from "./StudioResetButton.vue";
import StudioSegmented from "./StudioSegmented.vue";

// The Easing panel at the inspector's bottom while Keyframes are selected (docs/studio-ui.md "Easing のパネル";
// what it changes: docs/timeline-ui.md "Easing"): the heading and its reset, the five presets, the square curve
// graph whose two control points drag, and the four bezier values as text to copy and paste. Presentational: the
// panel of web_src/studio/inspector_model.js comes in, `edit` goes out ("easing" / "easing-reset" of
// web_src/studio/inspector_actions.js).
const props = defineProps({
  model: { type: Object, required: true },
  // The side of the square graph in px (inspector_model.js easingGraphSide).
  graphSide: { type: Number, default: 240 },
  disabled: { type: Boolean, default: false },
});
const emit = defineEmits(["edit"]);

const off = computed(() => props.disabled || !props.model.segment);
const PAD = 10;
// The curve while a control point is dragged, so the graph answers before the state comes back.
const live = ref(null);
const curve = computed(() => live.value ?? (Array.isArray(props.model.easing) ? props.model.easing : null));
const inner = computed(() => Math.max(0, props.graphSide - PAD * 2));
const toX = (x) => PAD + x * inner.value;
const toY = (y) => PAD + (1 - y) * inner.value;
const path = computed(() => {
  if (props.model.easing === "hold") return `M${toX(0)} ${toY(0)} H${toX(1)} V${toY(1)}`;
  if (!curve.value) return "";
  const [x1, y1, x2, y2] = curve.value;
  return `M${toX(0)} ${toY(0)} C${toX(x1)} ${toY(y1)} ${toX(x2)} ${toY(y2)} ${toX(1)} ${toY(1)}`;
});

const active = computed(() => props.model.presets.find((preset) => preset.active)?.label ?? null);
// Icons only: the names do not fit the panel's width, so they are the tooltips (and the accessible names).
const options = computed(() => props.model.presets.map((preset) => ({ value: preset.label, label: preset.label, icon: preset.icon, iconOnly: true, tip: preset.label })));
const placeholder = computed(() => {
  if (props.model.mixed) return "Mixed";
  if (props.model.easing === "auto") return "Auto";
  if (props.model.easing === "hold") return "Hold";
  return "";
});

function send(easing, phase) {
  emit("edit", { type: "easing", keyframes: props.model.keyframes, easing, phase });
}

function choosePreset(label) {
  const preset = props.model.presets.find((item) => item.label === label);
  if (preset && !off.value) send(Array.isArray(preset.easing) ? [...preset.easing] : preset.easing, "commit");
}

// --- The graph's control points: both coordinates held to 0..1 (docs/timeline-ui.md "Easing").
const svg = ref(null);
let drag = null;

function pointAt(event) {
  const rect = svg.value.getBoundingClientRect();
  const scale = rect.width / props.graphSide;
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const x = clamp01(((event.clientX - rect.left) / scale - PAD) / inner.value);
  const y = clamp01(1 - ((event.clientY - rect.top) / scale - PAD) / inner.value);
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

function onHandleDown(event, index) {
  if (off.value || event.button !== 0 || !curve.value || drag) return;
  event.preventDefault();
  drag = { pointerId: event.pointerId, index, start: [...curve.value], moved: false };
  event.currentTarget.setPointerCapture?.(event.pointerId);
  window.addEventListener("keydown", onDragKeydown, true);
}

function onHandleMove(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const next = [...(live.value ?? drag.start)];
  [next[drag.index], next[drag.index + 1]] = pointAt(event);
  drag.moved = true;
  live.value = next;
  send(next, "input");
}

function onHandleUp(event) {
  if (!drag || event.pointerId !== drag.pointerId) return;
  const { moved } = drag;
  const next = live.value;
  endDrag();
  if (moved && next) send(next, "commit");
}

function onDragKeydown(event) {
  if (!drag || event.key !== "Escape") return;
  // Escape here gives the drag up only; it must not reach the editor (which would clear the Keyframe selection).
  event.preventDefault();
  event.stopPropagation();
  const { moved } = drag;
  endDrag();
  if (moved) emit("edit", { type: "easing", keyframes: props.model.keyframes, phase: "cancel" });
}

function endDrag() {
  drag = null;
  live.value = null;
  window.removeEventListener("keydown", onDragKeydown, true);
}

onBeforeUnmount(endDrag);

// --- The bezier text: select and copy it; typing or pasting four values applies them.
const text = ref(props.model.text);
watch(() => props.model.text, (value) => {
  text.value = value;
});

function applyText(value) {
  const easing = parseBezier(value);
  if (!easing) {
    text.value = props.model.text;
    return false;
  }
  if (formatBezier(easing) !== props.model.text) send(easing, "commit");
  text.value = formatBezier(easing);
  return true;
}

function onTextKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    applyText(text.value);
  } else if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    text.value = props.model.text;
    event.target.blur();
  }
}

function onPaste(event) {
  const pasted = event.clipboardData?.getData("text") ?? "";
  if (parseBezier(pasted)) {
    event.preventDefault();
    applyText(pasted);
  }
}
</script>

<template>
  <section class="pano-studio-easing" :class="{ 'is-disabled': off }" aria-label="Easing">
    <header class="pano-studio-easing-head">
      <span class="pano-studio-cap">Easing</span>
      <StudioResetButton :at-default="off || model.atDefault" label="Reset Easing" @reset="emit('edit', { type: 'easing-reset', keyframes: model.keyframes })" />
    </header>
    <StudioSegmented
      :options="options"
      :value="active"
      :disabled="off"
      label="Easing preset"
      fill
      extra-class="pano-studio-easing-presets"
      @select="choosePreset"
    />
    <svg
      ref="svg"
      class="pano-studio-easing-graph"
      :width="graphSide"
      :height="graphSide"
      :viewBox="`0 0 ${graphSide} ${graphSide}`"
      role="img"
      aria-label="Easing curve"
      :data-side="graphSide"
    >
      <rect class="pano-studio-easing-square" :x="toX(0)" :y="toY(1)" :width="inner" :height="inner" />
      <line class="pano-studio-easing-diagonal" :x1="toX(0)" :y1="toY(0)" :x2="toX(1)" :y2="toY(1)" />
      <path v-if="path" class="pano-studio-easing-curve" :d="path" />
      <template v-if="curve">
        <line class="pano-studio-easing-arm" :x1="toX(0)" :y1="toY(0)" :x2="toX(curve[0])" :y2="toY(curve[1])" />
        <line class="pano-studio-easing-arm" :x1="toX(1)" :y1="toY(1)" :x2="toX(curve[2])" :y2="toY(curve[3])" />
        <circle
          v-for="index in [0, 2]"
          :key="index"
          class="pano-studio-easing-handle"
          :data-handle="index / 2"
          :cx="toX(curve[index])"
          :cy="toY(curve[index + 1])"
          r="5"
          @pointerdown="onHandleDown($event, index)"
          @pointermove="onHandleMove"
          @pointerup="onHandleUp"
          @pointercancel="endDrag"
        />
      </template>
    </svg>
    <input
      v-model="text"
      class="pano-studio-easing-text pano-studio-num"
      spellcheck="false"
      aria-label="Cubic bezier"
      :placeholder="placeholder"
      :disabled="off"
      @keydown="onTextKeydown"
      @blur="applyText(text)"
      @paste="onPaste"
    >
  </section>
</template>

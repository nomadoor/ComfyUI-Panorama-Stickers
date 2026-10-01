<script setup>
import { computed, ref } from "vue";

// Easing of the selected segments (buildEasingModel): a preset or edited cubic-bezier, drawn in the
// unit square (time across, progress up) with two draggable control points, `auto` or `hold`. When the
// segments differ, nothing is chosen until one is picked for all of them.
const props = defineProps({ model: { type: Object, default: null } });
const emit = defineEmits(["timeline"]);

const SIZE = 132;
const PAD = 14;
const PRESETS = [
  { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
  { label: "Linear", easing: [0, 0, 1, 1] },
  { label: "Ease in", easing: [0.42, 0, 1, 1] },
  { label: "Ease out", easing: [0, 0, 0.58, 1] },
  { label: "Auto", easing: "auto" },
  { label: "Hold", easing: "hold" },
];

const svgRef = ref(null);
const curve = computed(() => (Array.isArray(props.model?.easing) ? props.model.easing : null));
const toX = (x) => PAD + x * SIZE;
const toY = (y) => PAD + (1 - y) * SIZE;
const path = computed(() => {
  if (props.model?.easing === "hold") return `M${toX(0)} ${toY(0)} H${toX(1)} V${toY(1)}`;
  const [x1, y1, x2, y2] = curve.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
  return `M${toX(0)} ${toY(0)} C${toX(x1)} ${toY(y1)} ${toX(x2)} ${toY(y2)} ${toX(1)} ${toY(1)}`;
});
const label = computed(() => (curve.value ? curve.value.map((value) => value.toFixed(2)).join(", ") : ""));

function isChosen(preset) {
  return JSON.stringify(preset.easing) === JSON.stringify(props.model?.easing);
}

function setEasing(easing, commit) {
  emit("timeline", { type: "easing", easing, commit });
}

// Both coordinates of a control point stay in 0..1, so values never pass the keys at either end.
function dragHandle(event, index) {
  if (event.button !== 0 || !curve.value) return;
  const target = event.currentTarget;
  target.setPointerCapture?.(event.pointerId);
  let next = null;
  const move = (ev) => {
    const rect = svgRef.value.getBoundingClientRect();
    const scale = rect.width / (SIZE + PAD * 2);
    const x = ((ev.clientX - rect.left) / scale - PAD) / SIZE;
    const y = 1 - ((ev.clientY - rect.top) / scale - PAD) / SIZE;
    next = [...(next || curve.value)];
    next[index] = Math.round(Math.min(1, Math.max(0, x)) * 100) / 100;
    next[index + 1] = Math.round(Math.min(1, Math.max(0, y)) * 100) / 100;
    setEasing(next, false);
  };
  const end = () => {
    target.removeEventListener("pointermove", move);
    target.removeEventListener("pointerup", end);
    target.removeEventListener("pointercancel", end);
    if (next) setEasing(next, true);
  };
  target.addEventListener("pointermove", move);
  target.addEventListener("pointerup", end);
  target.addEventListener("pointercancel", end);
}
</script>

<template>
  <div v-if="model" class="pano-easing">
    <div class="pano-section-title">
      <span>Easing</span>
      <span class="pano-easing-range">{{ model.label }}</span>
    </div>
    <div class="pano-easing-modes">
      <button
        v-for="preset in PRESETS"
        :key="preset.label"
        class="pano-easing-mode"
        type="button"
        :aria-pressed="isChosen(preset) ? 'true' : 'false'"
        @click="setEasing(preset.easing, true)"
      >{{ preset.label }}</button>
    </div>
    <svg
      v-if="curve || model.easing === 'hold'"
      ref="svgRef"
      class="pano-easing-graph"
      :viewBox="`0 0 ${SIZE + PAD * 2} ${SIZE + PAD * 2}`"
      role="img"
      aria-label="Easing curve"
    >
      <rect class="pano-easing-square" :x="toX(0)" :y="toY(1)" :width="SIZE" :height="SIZE" />
      <line class="pano-easing-diagonal" :x1="toX(0)" :y1="toY(0)" :x2="toX(1)" :y2="toY(1)" />
      <path class="pano-easing-curve" :d="path" />
      <template v-if="curve">
        <line class="pano-easing-arm" :x1="toX(0)" :y1="toY(0)" :x2="toX(curve[0])" :y2="toY(curve[1])" />
        <line class="pano-easing-arm" :x1="toX(1)" :y1="toY(1)" :x2="toX(curve[2])" :y2="toY(curve[3])" />
        <circle class="pano-easing-handle" :cx="toX(curve[0])" :cy="toY(curve[1])" r="6" @pointerdown="dragHandle($event, 0)" />
        <circle class="pano-easing-handle" :cx="toX(curve[2])" :cy="toY(curve[3])" r="6" @pointerdown="dragHandle($event, 2)" />
      </template>
    </svg>
    <div class="pano-easing-note">
      <template v-if="model.mixed">Mixed: the selected segments differ. Pick one to use it for all of them.</template>
      <template v-else-if="model.easing === 'auto'">Moves through the keyframes without stopping.</template>
      <template v-else-if="model.easing === 'hold'">Holds the value, then jumps to the next keyframe.</template>
      <template v-else-if="curve">cubic-bezier({{ label }})</template>
    </div>
  </div>
</template>

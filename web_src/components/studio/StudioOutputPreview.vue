<script setup>
import { computed, ref } from "vue";
import { ICON } from "../../icons.js";
import { loadOutputWindow, outputWindowSize, saveOutputWindow } from "../../studio/layout.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The Output window at the top right of the stage (docs/studio-ui.md "Output の小窓"): the Camera's output, small,
// with only a fold button (its icon shows the state) and a corner at the bottom left to drag for its size, which
// follows the output's ratio and is kept per browser (studio/layout.js). What it shows comes in the `default` slot
// (the live picture is a later part of the editor; until then it holds the word Output).
const props = defineProps({
  // The output's width / height.
  ratio: { type: Number, default: 2 },
  storage: { type: Object, default: null },
});

const kept = loadOutputWindow(props.storage);
const width = ref(kept.width);
const collapsed = ref(kept.collapsed);
const size = computed(() => outputWindowSize(width.value, props.ratio));

function keep() {
  saveOutputWindow(props.storage, { width: size.value.width, collapsed: collapsed.value });
}

function fold() {
  collapsed.value = !collapsed.value;
  keep();
}

// Dragging the bottom left corner: left and down make it larger (the window is anchored at the top right).
let drag = null;
function onGripDown(event) {
  if (event.button !== 0) return;
  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.setPointerCapture?.(event.pointerId);
  drag = { x: event.clientX, y: event.clientY, width: size.value.width };
}
function onGripMove(event) {
  if (!drag) return;
  const grow = Math.max(drag.x - event.clientX, (event.clientY - drag.y) * props.ratio);
  width.value = outputWindowSize(drag.width + grow, props.ratio).width;
}
function onGripUp() {
  if (!drag) return;
  drag = null;
  keep();
}
</script>

<template>
  <div
    class="pano-studio-output"
    :class="{ 'is-collapsed': collapsed }"
    :style="collapsed ? null : { width: `${size.width}px`, height: `${size.height}px` }"
    data-region="output"
  >
    <div v-if="!collapsed" class="pano-studio-output-body">
      <slot><span class="pano-studio-output-label pano-studio-cap">Output</span></slot>
    </div>
    <span v-else class="pano-studio-output-label pano-studio-cap">Output</span>
    <button
      type="button"
      class="pano-studio-icon-btn is-sm pano-studio-output-fold"
      :class="{ 'is-folded': collapsed }"
      :aria-label="collapsed ? 'Show output' : 'Hide output'"
      :title="collapsed ? 'Show output' : 'Hide output'"
      :aria-expanded="String(!collapsed)"
      data-action="output-fold"
      @click="fold"
    >
      <SvgIcon :icon="ICON.chevron" />
    </button>
    <span
      v-if="!collapsed"
      class="pano-studio-output-grip"
      title="Drag to resize"
      data-action="output-resize"
      @pointerdown="onGripDown"
      @pointermove="onGripMove"
      @pointerup="onGripUp"
      @pointercancel="onGripUp"
    />
  </div>
</template>

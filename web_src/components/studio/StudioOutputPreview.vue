<script setup>
import { computed, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import { loadOutputWindow, outputWindowSize, saveOutputWindow } from "../../studio/layout.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The Output window at the top right of the stage (docs/studio-ui.md "Output の小窓"): the Camera's output, small,
// with only a fold button (its icon shows the state) and a corner at the bottom left to drag for its size, which
// follows the output's ratio and is kept per browser (studio/layout.js). What it shows comes in the `default` slot
// (the editor puts the canvases of the live picture there); `open` says, when it mounts and on each fold, whether it is
// open, so the picture is drawn only then.
//
// Opening and folding animate the size and the opacity (docs/design.md "動き"): the window stays in the page, folded
// too, at its open size, and shrinks to the folded pill by a transform anchored at its top right, so what it shows
// is not drawn again while it moves; the pill fades in its place.
const props = defineProps({
  // The output's width / height.
  ratio: { type: Number, default: 2 },
  storage: { type: Object, default: null },
});
const emit = defineEmits(["open"]);

const kept = loadOutputWindow(props.storage);
const width = ref(kept.width);
const collapsed = ref(kept.collapsed);
const size = computed(() => outputWindowSize(width.value, props.ratio));

// The folded pill's width, for the scale the window folds to (measured once the font has loaded).
const pill = ref(null);
const pillWidth = ref(88);
const PILL_HEIGHT = 32;
function measurePill() {
  if (pill.value?.offsetWidth) pillWidth.value = pill.value.offsetWidth;
}
onMounted(() => {
  emit("open", !collapsed.value);
  measurePill();
  globalThis.document?.fonts?.ready?.then(measurePill);
});
const windowStyle = computed(() => ({
  width: `${size.value.width}px`,
  height: `${size.value.height}px`,
  "--studio-output-fold-x": String(Math.min(1, pillWidth.value / size.value.width)),
  "--studio-output-fold-y": String(Math.min(1, PILL_HEIGHT / size.value.height)),
}));

function keep() {
  saveOutputWindow(props.storage, { width: size.value.width, collapsed: collapsed.value });
}

function fold() {
  collapsed.value = !collapsed.value;
  keep();
  emit("open", !collapsed.value);
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
    :style="collapsed ? { width: `${pillWidth}px`, height: `${PILL_HEIGHT}px` } : { width: `${size.width}px`, height: `${size.height}px` }"
    data-region="output"
  >
    <div class="pano-studio-output-window" :style="windowStyle" :inert="collapsed || null" :aria-hidden="collapsed ? 'true' : null">
      <div class="pano-studio-output-body">
        <slot><span class="pano-studio-output-label pano-studio-cap">Output</span></slot>
      </div>
      <span
        class="pano-studio-output-grip"
        title="Drag to resize"
        data-action="output-resize"
        @pointerdown="onGripDown"
        @pointermove="onGripMove"
        @pointerup="onGripUp"
        @pointercancel="onGripUp"
      />
    </div>
    <div ref="pill" class="pano-studio-output-pill" :aria-hidden="collapsed ? null : 'true'">
      <span class="pano-studio-output-label pano-studio-cap">Output</span>
    </div>
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
  </div>
</template>

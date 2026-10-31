<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { ICON } from "../../icons.js";
import { OUTPUT_LINE_HEIGHT, loadOutputWindow, outputWindowSize, outputWindowView, saveOutputWindow } from "../../studio/layout.js";
import SvgIcon from "../shared/SvgIcon.vue";

// The Output window at the top right of the stage (docs/studio-ui.md "Output の小窓"; looks: docs/design.md "Output の
// 小窓の一行"): the line of the output's shape (how the Camera shoots and the output size, `line`: pano_studio_status.js
// studioNodeStatus, the node surface's line) right-aligned with the fold chevron at its right end, folded or open, and,
// open, the Camera's output filling the window with the line laid over its top edge. The whole line is the one fold
// button. Its corner at the bottom left is dragged for its width, which is kept per browser with its fold
// (studio/layout.js); the picture's height follows the output's ratio. What it shows comes in the `default` slot (the
// editor puts the canvases of the live picture there); `open` says, when it mounts and on each fold, whether it is
// open, so the picture is drawn only then. While `suspended` (the Camera tab) it shows folded with its line as in the
// 3D tab, only its chevron faint and the line inert, and it reports closed; what the viewer chose and the browser keeps
// is left as it was.
//
// Opening and folding animate the size and the opacity (docs/design.md "動き"): the window stays in the page, folded
// too, at its open size, and shrinks to the folded pill by a transform anchored at its top right, so what it shows
// is not drawn again while it moves; the pill's fill fades in its place. The line itself stays where it is and never
// fades: its right end, the chevron, does not move, and a new line is shown as it is (no flash).
const props = defineProps({
  // The output's width / height.
  ratio: { type: Number, default: 2 },
  // The line: { mode: "panorama" | "frame", shot, size, cap } (pano_studio_status.js studioNodeStatus).
  line: { type: Object, default: () => ({ mode: "panorama", shot: "", size: "", cap: "" }) },
  storage: { type: Object, default: null },
  // The Camera tab: folded, its chevron faint and the line inert, the kept state untouched.
  suspended: { type: Boolean, default: false },
  suspendedTip: { type: String, default: "" },
});
const emit = defineEmits(["open"]);

const kept = loadOutputWindow(props.storage);
const width = ref(kept.width);
const collapsed = ref(kept.collapsed);
const size = computed(() => outputWindowSize(width.value, props.ratio));
const shown = computed(() => outputWindowView({ collapsed: collapsed.value, suspended: props.suspended }));
watch(() => shown.value.open, (open) => emit("open", open));

// The folded pill's width follows its line (the right end fixed): measured whenever the line's box changes.
const pill = ref(null);
const pillWidth = ref(88);
let pillObserver = null;
function measurePill() {
  if (pill.value?.offsetWidth) pillWidth.value = pill.value.offsetWidth;
}
onMounted(() => {
  emit("open", shown.value.open);
  measurePill();
  if (typeof ResizeObserver === "function" && pill.value) {
    pillObserver = new ResizeObserver(measurePill);
    pillObserver.observe(pill.value);
  }
  globalThis.document?.fonts?.ready?.then(measurePill);
});
onBeforeUnmount(() => pillObserver?.disconnect());
const windowStyle = computed(() => ({
  width: `${size.value.width}px`,
  height: `${size.value.height}px`,
  "--studio-output-fold-x": String(Math.min(1, pillWidth.value / size.value.width)),
  "--studio-output-fold-y": String(Math.min(1, OUTPUT_LINE_HEIGHT / size.value.height)),
}));

const foldTip = computed(() => (shown.value.foldable ? (shown.value.folded ? "Show output" : "Hide output") : props.suspendedTip || "Output"));
// The line is read out after what the button does.
const foldLabel = computed(() => [foldTip.value, props.line.shot, props.line.size].filter(Boolean).join(", "));

function keep() {
  saveOutputWindow(props.storage, { width: size.value.width, collapsed: collapsed.value });
}

function fold() {
  if (!shown.value.foldable) return;
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
    :class="{ 'is-collapsed': shown.folded, 'is-suspended': suspended }"
    :style="{ '--studio-output-line': `${OUTPUT_LINE_HEIGHT}px`, ...(shown.folded ? { width: `${pillWidth}px`, height: `${OUTPUT_LINE_HEIGHT}px` } : { width: `${size.width}px`, height: `${size.height}px` }) }"
    data-region="output"
  >
    <div class="pano-studio-output-window" :style="windowStyle" :inert="shown.folded || null" :aria-hidden="shown.folded ? 'true' : null">
      <div class="pano-studio-output-body">
        <slot />
      </div>
      <span
        class="pano-studio-output-grip"
        data-tip="Drag to resize"
        data-action="output-resize"
        @pointerdown="onGripDown"
        @pointermove="onGripMove"
        @pointerup="onGripUp"
        @pointercancel="onGripUp"
      />
    </div>
    <!-- The whole line is the fold button (owner, 2026-10-31); only its chevron answers the pointer. -->
    <button
      ref="pill"
      type="button"
      class="pano-studio-output-pill"
      :aria-label="foldLabel"
      :data-tip="foldTip"
      :aria-expanded="String(!shown.folded)"
      :aria-disabled="shown.foldable ? null : 'true'"
      data-output-line
      data-action="output-fold"
      @click="fold"
    >
      <!-- The mode's glyph (the mock camera-output-1.html): a 2:1 equirect grid, or a framed shot. -->
      <svg v-if="line.mode === 'panorama'" class="pano-studio-output-glyph" viewBox="0 0 20 10" aria-hidden="true" data-output-mode="panorama">
        <rect x=".75" y=".75" width="18.5" height="8.5" rx="1" />
        <path d="M.75 5h18.5M10 .75v8.5" />
      </svg>
      <svg v-else class="pano-studio-output-glyph" viewBox="0 0 20 10" aria-hidden="true" data-output-mode="frame">
        <rect x="3" y=".75" width="14" height="8.5" rx="1" />
      </svg>
      <span class="pano-studio-output-shot" data-output-shot>{{ line.shot }}</span>
      <span class="pano-studio-output-size" data-output-size :data-tip="line.cap || null">{{ line.size }}</span>
      <span class="pano-studio-output-chevron" :class="{ 'is-folded': shown.folded }" aria-hidden="true" data-output-chevron>
        <SvgIcon :icon="ICON.chevron" />
      </span>
    </button>
  </div>
</template>

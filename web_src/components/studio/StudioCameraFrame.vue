<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { CAMERA_FRAME_MARGIN, frameRect, rulerStrips } from "../../studio/frame_layout.js";

// The frame of the Camera tab (docs/studio-ui.md "Camera タブ"; looks: docs/design.md "形と重なり"): laid over the whole
// stage, it fits a box of the output's ratio into the stage less the margins, dims the picture outside it and draws a
// thin bright line on its edge. The box moves and resizes with the stage and the ratio. Whatever rides on the frame
// (the edge rulers, the guides) comes in the default slot, placed in the box; the slot gets `rect` (the box in the
// stage's CSS px) and `rulers` (where the edge rulers' tick strips sit: frame_layout.js rulerStrips). Only the slot's
// own parts take the pointer; the rest of the stage stays under it.
//
// Presentational: `aspect` in; `rect` out whenever the box changes (what draws the picture sizes it so).
const props = defineProps({
  // The output's width / height.
  aspect: { type: Number, default: 16 / 9 },
  margin: { type: Object, default: () => CAMERA_FRAME_MARGIN },
  // Dim the picture outside the box.
  dim: { type: Boolean, default: true },
});
const emit = defineEmits(["rect"]);

const root = ref(null);
const size = ref({ width: 0, height: 0 });
const rect = computed(() => frameRect(size.value.width, size.value.height, props.aspect, props.margin));
const rulers = computed(() => rulerStrips(rect.value));
// The dim outside the box: four bands (above, below, left, right), so nothing needs a shadow (docs/design.md).
const dims = computed(() => {
  const { x, y, width, height } = rect.value;
  const px = (value) => `${Math.max(0, value)}px`;
  return [
    { left: 0, right: 0, top: 0, height: px(y) },
    { left: 0, right: 0, top: px(y + height), bottom: 0 },
    { left: 0, width: px(x), top: px(y), height: px(height) },
    { left: px(x + width), right: 0, top: px(y), height: px(height) },
  ];
});
const boxStyle = computed(() => ({
  left: `${rect.value.x}px`,
  top: `${rect.value.y}px`,
  width: `${rect.value.width}px`,
  height: `${rect.value.height}px`,
}));

let observer = null;
function measure() {
  const box = root.value?.getBoundingClientRect();
  if (box) size.value = { width: box.width, height: box.height };
}
onMounted(() => {
  measure();
  if (typeof ResizeObserver === "function") {
    observer = new ResizeObserver(measure);
    observer.observe(root.value);
  }
});
onBeforeUnmount(() => observer?.disconnect());
watch(rect, (value) => emit("rect", { ...value }), { immediate: true });
</script>

<template>
  <div ref="root" class="pano-studio-camera-frame" data-camera-frame>
    <template v-if="dim">
      <div v-for="(style, index) in dims" :key="index" class="pano-studio-camera-frame-dim" :style="style" />
    </template>
    <div class="pano-studio-camera-frame-box" :style="boxStyle" data-frame-box>
      <slot :rect="rect" :rulers="rulers" />
    </div>
  </div>
</template>

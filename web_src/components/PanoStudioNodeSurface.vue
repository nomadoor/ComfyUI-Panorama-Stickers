<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import PanoViewUnavailable from "./shared/PanoViewUnavailable.vue";
import SvgIcon from "./shared/SvgIcon.vue";

// Panorama Studio's node surface (docs/studio-node-surface.md "表示の構成", ADR 0049): over the Camera's output picture
// the canvas draws, the Open Studio button at the picture's bottom center, and under it the line with how the Camera
// shoots and the output size (pano_studio_status.js). Where they go is `model.layout` (pano_studio_surface.js
// studioSurfaceLayout, the one the canvas draws the picture by), null before the surface is laid out.
const props = defineProps({
  model: {
    type: Object,
    default: () => ({ status: { mode: "panorama", shot: "", size: "", ratio: 2, cap: "" }, layout: null, viewUnavailable: false }),
  },
  onAction: { type: Function, default: null },
});

const px = (value) => `${Math.round(value)}px`;
const buttonStyle = computed(() => {
  const layout = props.model.layout;
  return layout ? { left: px(layout.button.centerX), bottom: px(layout.button.bottom) } : { display: "none" };
});
const lineStyle = computed(() => {
  const layout = props.model.layout;
  return layout ? { left: px(layout.line.x), top: px(layout.line.y), width: px(layout.line.w), height: px(layout.line.h) } : { display: "none" };
});
const pictureStyle = computed(() => {
  const layout = props.model.layout;
  return layout
    ? { left: px(layout.picture.x), top: px(layout.picture.y), width: px(layout.picture.w), height: px(layout.picture.h) }
    : { display: "none" };
});
const modeIcon = computed(() => (props.model.status.mode === "panorama" ? ICON.pano : ICON.aspect));
</script>

<template>
  <div class="pano-studio pano-studio-node-surface">
    <button
      class="pano-studio-node-open"
      type="button"
      data-action="open-editor"
      :style="buttonStyle"
      @pointerdown.stop
      @click="props.onAction?.({ type: 'open-editor' })"
    >
      <SvgIcon :icon="ICON.fullscreen" />
      <span class="label">Open Studio</span>
    </button>
    <div class="pano-studio-node-line" role="status" :style="lineStyle">
      <span class="pano-studio-node-shot">
        <SvgIcon :icon="modeIcon" />
        <span class="label">{{ model.status.shot }}</span>
      </span>
      <span class="pano-studio-node-size" :title="model.status.cap || null">{{ model.status.size }}</span>
    </div>
    <div v-if="model.viewUnavailable" class="pano-studio-node-unavailable" :style="pictureStyle">
      <PanoViewUnavailable />
    </div>
  </div>
</template>

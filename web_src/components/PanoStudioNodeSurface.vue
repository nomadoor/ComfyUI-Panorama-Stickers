<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import PanoViewUnavailable from "./shared/PanoViewUnavailable.vue";
import SvgIcon from "./shared/SvgIcon.vue";

// Panorama Studio's node surface (docs/studio-node-surface.md "表示の構成", ADR 0049, 0052): over the Camera's output picture
// the canvas draws, the Open Studio button at the picture's bottom center with the play button left of it while the
// Timeline plays (`model.playable`; "再生のボタン"), and under it the line with how the Camera shoots and the output size
// (pano_studio_status.js), all on the surface's dark fill. Where they go is `model.layout` (pano_studio_surface.js
// studioSurfaceLayout, the one the canvas draws the picture by), null before the surface is laid out; it also says when
// Open Studio is a round icon button (`compact`).
const props = defineProps({
  model: {
    type: Object,
    default: () => ({ status: { mode: "panorama", shot: "", size: "", ratio: 2, cap: "" }, layout: null, viewUnavailable: false, playing: false }),
  },
  onAction: { type: Function, default: null },
});

const px = (value) => `${Math.round(value)}px`;
const buttons = computed(() => props.model.layout?.buttons ?? null);
const compact = computed(() => !!buttons.value?.compact);
// Before the first layout Open Studio is laid out unseen; until the surface has measured it, it is centered by its middle.
const openStyle = computed(() => {
  if (!buttons.value) return { left: "0px", bottom: "0px", visibility: "hidden" };
  const { open, bottom } = buttons.value;
  return open.center !== undefined
    ? { left: px(open.center), bottom: px(bottom), transform: "translateX(-50%)" }
    : { left: px(open.x), bottom: px(bottom) };
});
const playStyle = computed(() => (buttons.value?.play
  ? { left: px(buttons.value.play.x), bottom: px(buttons.value.bottom) }
  : { display: "none" }));
const playTip = computed(() => (props.model.playing ? "Pause" : "Play"));
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
      v-if="buttons?.play"
      class="pano-studio-node-play"
      type="button"
      data-action="toggle-playback"
      :title="playTip"
      :aria-label="playTip"
      :style="playStyle"
      @pointerdown.stop
      @click="props.onAction?.({ type: 'toggle-playback' })"
    >
      <SvgIcon :icon="model.playing ? ICON.pause : ICON.play" />
    </button>
    <button
      class="pano-studio-node-open"
      :class="{ 'is-compact': compact }"
      type="button"
      data-action="open-editor"
      :title="compact ? 'Open Studio' : null"
      :aria-label="compact ? 'Open Studio' : null"
      :style="openStyle"
      @pointerdown.stop
      @click="props.onAction?.({ type: 'open-editor' })"
    >
      <SvgIcon :icon="ICON.fullscreen" />
      <span v-if="!compact" class="label">Open Studio</span>
    </button>
    <!-- On the surface's dark fill in either theme: the dark tokens (web/pano_studio.css). -->
    <div class="pano-studio pano-studio-node-line" role="status" :style="lineStyle">
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

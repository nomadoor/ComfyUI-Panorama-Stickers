<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";

const props = defineProps({
  state: { type: Object, default: () => ({}) },
});

const playLabel = computed(() => props.state?.playing === true ? "Pause" : "Play");
const playTip = computed(() => props.state?.playing === true ? "Pause video" : "Play video");
const playIcon = computed(() => props.state?.playing === true ? ICON.pause : ICON.play);
const scrubFill = computed(() => `${Math.max(0, Math.min(100, Number(props.state?.progressPct || 0)))}%`);
</script>

<template>
  <div
    class="pano-video-transport"
    :class="{ 'is-hidden': state.visible !== true }"
    :data-video-ready="state.ready === true ? 'true' : 'false'"
  >
    <video
      class="pano-video-source"
      data-video-element
      preload="auto"
      playsinline
      crossorigin="anonymous"
      muted
    />

    <div class="pano-video-transport-bar">
      <button
        class="pano-btn pano-btn-icon pano-video-control"
        type="button"
        data-action="video-play-toggle"
        :aria-label="playLabel"
        :data-tip="playTip"
        :disabled="state.ready !== true"
        v-html="playIcon"
      />

      <div class="pano-video-track-wrap">
        <div class="pano-video-time">{{ state.currentTimeLabel || "0:00" }}</div>
        <input
          class="pano-video-slider"
          data-video-seek
          type="range"
          min="0"
          :max="Math.max(0, Number(state.duration || 0))"
          step="0.01"
          :value="Math.max(0, Number(state.currentTime || 0))"
          :disabled="state.ready !== true"
          :style="{ '--v': scrubFill }"
        >
        <div class="pano-video-time">{{ state.durationLabel || "0:00" }}</div>
      </div>
    </div>
  </div>
</template>

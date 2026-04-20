<script setup>
import { computed, ref, watch } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

const props = defineProps({
  state: { type: Object, default: () => ({}) },
});

const playLabel = computed(() => props.state?.playing === true ? "Pause" : "Play");
const playTip = computed(() => props.state?.playing === true ? "Pause video" : "Play video");
const playIcon = computed(() => props.state?.playing === true ? ICON.pause : ICON.play);
const muteLabel = computed(() => props.state?.muted === true || Number(props.state?.volume ?? 1) <= 0 ? "Unmute" : "Mute");
const muteIcon = computed(() => {
  if (props.state?.hasAudio !== true) return ICON.volume;
  return props.state?.muted === true || Number(props.state?.volume ?? 1) <= 0
    ? ICON.volume_muted
    : ICON.volume2;
});
const progressPct = computed(() => Math.max(0, Math.min(100, Number(props.state?.progressPct || 0))));
const playheadStyle = computed(() => ({ left: `${progressPct.value}%` }));
const volumeFillStyle = computed(() => {
  const volumePct = props.state?.volumePct;
  const fallbackPct = Number(props.state?.volume ?? 1) * 100;
  const pct = Number(volumePct ?? fallbackPct ?? 0);
  return {
    "--v": `${Math.max(0, Math.min(100, pct))}%`,
  };
});
const timeWidthCh = computed(() => {
  const labels = [
    String(props.state?.currentTimeLabel || "0:00"),
    String(props.state?.durationLabel || "0:00"),
  ];
  const maxLen = labels.reduce((acc, text) => Math.max(acc, text.length), 4);
  return `${Math.max(4, maxLen)}ch`;
});
const timeStyle = computed(() => ({ "--pano-video-time-ch": timeWidthCh.value }));
const thumbnailItems = computed(() => {
  const thumbs = Array.isArray(props.state?.thumbnails) ? props.state.thumbnails : [];
  if (thumbs.length) return thumbs;
  const count = Math.max(7, Number(props.state?.thumbnailCount || 9));
  return Array.from({ length: count }, (_, index) => ({
    id: `placeholder-${index}`,
    src: "",
    label: "",
  }));
});
const loadedThumbnailKeys = ref(new Set());
const getThumbnailKey = (thumb) => String(thumb?.id || thumb?.src || thumb?.label || "");
const isThumbnailLoaded = (thumb) => loadedThumbnailKeys.value.has(getThumbnailKey(thumb));
const markThumbnailLoaded = (thumb) => {
  const next = new Set(loadedThumbnailKeys.value);
  next.add(getThumbnailKey(thumb));
  loadedThumbnailKeys.value = next;
};
watch(thumbnailItems, (items) => {
  const validKeys = new Set(items.map(getThumbnailKey));
  const next = new Set();
  for (const key of loadedThumbnailKeys.value) {
    if (validKeys.has(key)) next.add(key);
  }
  loadedThumbnailKeys.value = next;
}, { immediate: true });
const transportStyle = computed(() => ({
  "--pano-video-shell-max": `${Math.max(320, Number(props.state?.shellMaxWidthPx || 640))}px`,
}));
</script>

<template>
  <div
    class="pano-video-transport"
    :class="{ 'is-hidden': state.visible !== true }"
    :data-video-ready="state.ready === true ? 'true' : 'false'"
    :style="transportStyle"
  >
    <video
      class="pano-video-source"
      data-video-element
      preload="auto"
      playsinline
      crossorigin="anonymous"
    />

    <div class="pano-video-transport-shell">
      <div class="pano-video-controls-left">
        <PanoIconButton
          extra-class="pano-video-control"
          :icon="playIcon"
          :label="playLabel"
          :tip="playTip"
          :attrs="{ 'data-action': 'video-play-toggle', disabled: state.ready !== true }"
        />
        <div class="pano-video-time pano-video-time-start" :style="timeStyle">{{ state.currentTimeLabel || "0:00" }}</div>
      </div>

      <div class="pano-video-filmstrip">
        <div class="pano-video-filmstrip-track" aria-hidden="true">
          <div
            v-for="thumb in thumbnailItems"
            :key="getThumbnailKey(thumb)"
            class="pano-video-thumb"
            :class="{
              'is-placeholder': !thumb.src,
              'is-loaded': thumb.src && isThumbnailLoaded(thumb),
            }"
          >
            <img
              v-if="thumb.src"
              :src="thumb.src"
              alt=""
              draggable="false"
              @load="markThumbnailLoaded(thumb)"
            >
            <span v-else class="pano-video-thumb-placeholder" />
          </div>
        </div>
        <div class="pano-video-playhead" :style="playheadStyle" aria-hidden="true">
          <span class="pano-video-playhead-line" />
          <span class="pano-video-playhead-handle" />
        </div>
        <input
          class="pano-video-seek-hit"
          data-video-seek
          type="range"
          min="0"
          :max="Math.max(0, Number(state.duration || 0))"
          step="0.01"
          :value="Math.max(0, Number(state.currentTime || 0))"
          :disabled="state.ready !== true"
          :aria-label="'Seek video'"
        >
      </div>

      <div class="pano-video-controls-right">
        <div class="pano-video-time pano-video-time-end" :style="timeStyle">{{ state.durationLabel || "0:00" }}</div>
        <div
          class="pano-video-volume-stack"
          :data-has-audio="state.hasAudio === true ? 'true' : 'false'"
        >
          <div class="pano-video-volume-pop">
            <input
              class="pano-video-volume-slider"
              data-video-volume
              type="range"
              min="0"
              max="1"
              step="0.01"
              :value="Math.max(0, Math.min(1, Number(state.volume ?? 1)))"
              :style="volumeFillStyle"
              :disabled="state.ready !== true || state.hasAudio !== true"
              :aria-label="'Volume'"
            >
          </div>
          <PanoIconButton
            extra-class="pano-video-control"
            :icon="muteIcon"
            :label="muteLabel"
            :attrs="{
              'data-action': 'video-audio-toggle',
              disabled: state.ready !== true || state.hasAudio !== true,
              'data-muted': state.muted === true ? 'true' : 'false',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

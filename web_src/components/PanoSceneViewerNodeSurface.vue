<script setup>
import { ref } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./shared/PanoIconButton.vue";
import PanoVideoTransport from "./shared/PanoVideoTransport.vue";
import PanoViewUnavailable from "./shared/PanoViewUnavailable.vue";
import SvgIcon from "./shared/SvgIcon.vue";

// The Preview's viewer of a Scene on its node (docs/preview-node.md "ノード上"): the Scene's picture, Reset view and
// Open viewer at the top right, the playback bar at the bottom, and the play / pause cue of a double click.
// pano_scene_viewer_node.js draws into `canvas` and handles the pointer on it.
defineProps({
  // { transport (PanoVideoTransport.vue's state), cue ("play" | "pause" | null), cueKey, viewUnavailable }
  model: { type: Object, default: () => ({ transport: {}, cue: null, cueKey: 0, viewUnavailable: false }) },
  onAction: { type: Function, default: null },
});
const canvas = ref(null);
defineExpose({ canvas });
</script>

<template>
  <div class="pano-scene-viewer-surface">
    <canvas ref="canvas" class="pano-scene-viewer-canvas" />
    <div class="pano-scene-viewer-buttons" @pointerdown.stop @wheel.stop @dblclick.stop>
      <PanoIconButton
        :icon="ICON.reset"
        label="Reset view"
        tip="Reset view"
        :attrs="{ 'data-action': 'reset-view' }"
        @click="onAction?.({ type: 'reset-view' })"
      />
      <PanoIconButton
        :icon="ICON.fullscreen"
        label="Open viewer"
        tip="Open viewer"
        :attrs="{ 'data-action': 'open-viewer' }"
        @click="onAction?.({ type: 'open-viewer' })"
      />
    </div>
    <div v-if="model.cue" :key="model.cueKey" class="pano-scene-viewer-cue" aria-hidden="true">
      <SvgIcon :icon="model.cue === 'play' ? ICON.play : ICON.pause" />
    </div>
    <div class="pano-scene-viewer-bar" @pointerdown.stop @wheel.stop @dblclick.stop>
      <PanoVideoTransport variant="playback" :state="model.transport || {}" />
    </div>
    <PanoViewUnavailable v-if="model.viewUnavailable" />
  </div>
</template>

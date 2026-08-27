<script setup>
import { ICON } from "../icons.js";
import PanoIconButton from "./PanoIconButton.vue";

const props = defineProps({
  model: { type: Object, default: () => ({ fullscreen: false }) },
  onAction: { type: Function, default: null },
});
</script>

<template>
  <div class="pano-preview-node-surface">
    <PanoIconButton
      :icon="model.fullscreen ? ICON.fullscreen_close : ICON.fullscreen"
      :label="model.fullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
      :tip="model.fullscreen ? 'Exit fullscreen' : 'Fullscreen'"
      :pressed="model.fullscreen ? 'true' : 'false'"
      extra-class="pano-preview-node-fullscreen"
      :attrs="{ 'data-action': 'toggle-fullscreen' }"
      @click="props.onAction?.({ type: 'toggle-fullscreen' })"
    />
  </div>
</template>

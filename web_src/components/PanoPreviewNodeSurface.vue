<script setup>
import { computed } from "vue";
import { ICON } from "../icons.js";
import PanoIconButton from "./shared/PanoIconButton.vue";
import PanoViewUnavailable from "./shared/PanoViewUnavailable.vue";

const props = defineProps({
  // opensWindow: the one button is Open viewer, which opens the new Preview window, instead of the browser's
  // fullscreen (docs/preview-node.md "ノード上"). While the surface is fullscreen, the button exits it.
  model: { type: Object, default: () => ({ fullscreen: false, opensWindow: false }) },
  onAction: { type: Function, default: null },
});

const button = computed(() => {
  if (props.model.fullscreen) return { icon: ICON.fullscreen_close, label: "Exit Fullscreen", tip: "Exit fullscreen", pressed: "true", type: "toggle-fullscreen" };
  if (props.model.opensWindow) return { icon: ICON.fullscreen, label: "Open viewer", tip: "Open viewer", pressed: null, type: "open-viewer" };
  return { icon: ICON.fullscreen, label: "Fullscreen", tip: "Fullscreen", pressed: "false", type: "toggle-fullscreen" };
});
</script>

<template>
  <div class="pano-preview-node-surface">
    <PanoIconButton
      :icon="button.icon"
      :label="button.label"
      :tip="button.tip"
      :pressed="button.pressed"
      extra-class="pano-preview-node-fullscreen"
      :attrs="{ 'data-action': button.type }"
      @click="props.onAction?.({ type: button.type })"
    />
    <PanoViewUnavailable v-if="model.viewUnavailable" />
  </div>
</template>

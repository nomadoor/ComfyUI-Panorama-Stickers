<script setup>
import { ICON } from "../icons.js";
import PanoViewUnavailable from "./PanoViewUnavailable.vue";
import SvgIcon from "./SvgIcon.vue";

// Panorama Studio's node surface (ADR 0029): what the node shoots and its output size
// (pano_studio_status.js), a panorama to look around in, and the editor.
const props = defineProps({
  model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: false }) },
  onAction: { type: Function, default: null },
});
</script>

<template>
  <div class="pano-studio-node-surface">
    <div class="pano-studio-node-bar" @pointerdown.stop @wheel.stop>
      <div class="pano-studio-node-status" role="status">
        <span class="pano-studio-node-shot">{{ model.status.shot }}</span>
        <span class="pano-studio-node-size">{{ model.status.size }}</span>
        <span class="pano-studio-node-note">{{ model.status.note }}</span>
      </div>
      <button
        class="pano-btn pano-btn-texticon pano-studio-node-open"
        type="button"
        data-action="open-editor"
        @click="props.onAction?.({ type: 'open-editor' })"
      >
        <SvgIcon :icon="ICON.fullscreen" />
        <span class="label">Open Editor</span>
      </button>
    </div>
    <PanoViewUnavailable v-if="model.viewUnavailable" />
  </div>
</template>

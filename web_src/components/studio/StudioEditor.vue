<script setup>
import { ICON } from "../../icons.js";
import SvgIcon from "../shared/SvgIcon.vue";

// Panorama Studio's editor in the new UI (docs/studio-ui.md). In development: an empty window to close.
const props = defineProps({
  nodeTitle: { type: String, default: "" },
  onClose: { type: Function, default: null },
});
</script>

<template>
  <div class="pano-studio pano-studio-editor" role="dialog" aria-modal="true" :aria-label="nodeTitle">
    <header class="pano-studio-editor-head">
      <span class="pano-studio-editor-title">{{ nodeTitle }}</span>
      <button
        class="pano-studio-icon-btn"
        type="button"
        data-action="close"
        aria-label="Close"
        title="Close"
        @click="props.onClose?.()"
      >
        <SvgIcon :icon="ICON.close" />
      </button>
    </header>
    <div class="pano-studio-editor-body">New editor (in development)</div>
  </div>
</template>

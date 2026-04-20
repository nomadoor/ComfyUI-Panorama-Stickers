<script setup>
import PanoIconButton from "./PanoIconButton.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
  preview: { type: Object, default: () => ({}) },
  previewToggle: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="pano-floating-right">
    <PanoIconButton
      v-for="button in buttons"
      :key="button.action"
      :icon="button.icon"
      :label="button.label"
      :tip="button.tip"
      :pressed="button.pressed"
      :attrs="{ 'data-action': button.action, disabled: button.disabled === true }"
    />
  </div>
  <div
    v-show="preview.visible"
    class="pano-camera-preview-anchor"
    :data-settled="preview.settled === true ? 'true' : 'false'"
  >
    <div
      class="pano-camera-preview"
      :class="{ 'pano-camera-preview-expanded': preview.expanded === true }"
      :data-ready="preview.ready ? 'true' : 'false'"
      :data-settled="preview.settled === true ? 'true' : 'false'"
      :style="{
        width: `${preview.width || (preview.expanded ? 320 : 220)}px`,
        height: `${preview.height || (preview.expanded ? 192 : 132)}px`,
      }"
    >
      <div class="pano-camera-preview-host" data-camera-preview-host />
      <button
        v-if="previewToggle.visible"
        class="pano-btn pano-btn-icon pano-camera-preview-toggle"
        type="button"
        data-action="toggle-output-preview-size"
        :aria-label="previewToggle.label || 'Expand Preview'"
        :data-tip="previewToggle.tip || 'Expand preview'"
        v-html="previewToggle.icon"
      />
      <div v-if="preview.ready !== true && preview.settled !== true" class="pano-camera-preview-label">{{ preview.label || "Preview unavailable" }}</div>
    </div>
  </div>
</template>

<script setup>
import PanoIconButton from "./PanoIconButton.vue";
import SvgIcon from "./SvgIcon.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
  // The space group (#71): { visible, mode, frameDisabled, modes, frame } (floatingRightState), null
  // without one. It shows or hides as a whole at the left end, so the buttons right of it never move.
  space: { type: Object, default: null },
  preview: { type: Object, default: () => ({}) },
  previewToggle: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="pano-floating-right">
    <div v-if="space" v-show="space.visible" class="pano-floating-space">
      <div class="pano-space-modes" role="group" aria-label="Space view mode">
        <PanoIconButton
          v-for="button in space.modes"
          :key="button.key"
          :extra-class="{ active: button.key === space.mode }"
          :icon="button.icon"
          :label="button.label"
          :tip="button.tip"
          :pressed="button.key === space.mode ? 'true' : 'false'"
          :attrs="{ 'data-space-mode': button.key }"
        />
      </div>
      <PanoIconButton
        :icon="space.frame.icon"
        :label="space.frame.label"
        :tip="space.frame.tip"
        :attrs="{ 'data-action': space.frame.action, disabled: space.frameDisabled === true }"
      />
    </div>
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
      <div class="pano-camera-preview-host" data-camera-preview-host>
        <canvas data-camera-preview-canvas />
      </div>
      <button
        v-if="previewToggle.visible"
        class="pano-btn pano-btn-icon pano-camera-preview-toggle"
        type="button"
        data-action="toggle-output-preview-size"
        :aria-label="previewToggle.label || 'Expand Preview'"
        :data-tip="previewToggle.tip || 'Expand preview'"
      >
        <SvgIcon :icon="previewToggle.icon" />
      </button>
      <div v-if="preview.ready !== true && preview.settled !== true" class="pano-camera-preview-label">{{ preview.label || "Preview unavailable" }}</div>
    </div>
  </div>
</template>

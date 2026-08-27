<script setup>
import { ref } from "vue";

const cursorRef = ref(null);
const sizePreviewRef = ref(null);
const sizeSampleRef = ref(null);

function getRefs() {
  return {
    cursor: cursorRef.value,
    sizePreview: sizePreviewRef.value,
    sizeSample: sizeSampleRef.value,
  };
}

defineExpose({ getRefs });
</script>

<template>
  <div
    ref="cursorRef"
    aria-hidden="true"
    style="position: absolute; left: 0; top: 0; pointer-events: none; z-index: 12; display: none; will-change: transform, width, height, background, border-radius"
  />
  <div ref="sizePreviewRef" class="pano-paint-size-preview" aria-hidden="true">
    <div ref="sizeSampleRef" class="pano-paint-size-preview-sample" />
  </div>
</template>

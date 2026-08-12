<script setup>
defineProps({
  model: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div
    class="pano-tooltip"
    data-tooltip
    :class="{
      show: model.visible === true,
      'pano-tooltip-footer': model.variant === 'footer',
      'pano-tooltip-tool-rail': model.variant === 'tool-rail',
      'pano-tooltip-frame-rail': model.variant === 'frame-rail',
      'pano-tooltip-roll': model.variant === 'roll',
    }"
    :style="{ left: `${model.left || 0}px`, top: `${model.top || 0}px` }"
  >{{ model.text || "" }}</div>
</template>

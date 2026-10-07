<script setup>
// The header of an upstream layer's rows on Panorama Studio's Timeline (ADR 0030): where they come from
// (`Upstream · <key>`), across the names and the tracks.
defineProps({
  group: { type: Object, required: true },
});
</script>

<template>
  <div class="pano-timeline-group" :title="group.label">{{ group.label }}</div>
</template>

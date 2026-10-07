<script setup>
// The Visible and Lock rows of a selected Sticker of Panorama Studio, always shown so the panel keeps its layout:
// the switches of an upstream element (ADR 0030), which write overrides of it, and disabled for the node's own
// Sticker and for an element of a layer that is only inherited (its note is the rows' tooltip). Where an upstream
// element comes from shows in the Transform title (PanoSidePanel.vue).
defineProps({
  model: { type: Object, default: null },
});
</script>

<template>
  <div v-if="model" class="pano-upstream-origin" :title="model.note || null">
    <div class="pano-ui-row">
      <label>Visible</label>
      <div class="pano-segment" :data-selected="model.visible ? '0' : '1'">
        <button
          class="pano-segment-btn"
          type="button"
          data-action="upstream-visible"
          data-value="1"
          :aria-pressed="model.visible ? 'true' : 'false'"
          :disabled="model.disabled"
        >Shown</button>
        <button
          class="pano-segment-btn"
          type="button"
          data-action="upstream-visible"
          data-value="0"
          :aria-pressed="model.visible ? 'false' : 'true'"
          :disabled="model.disabled"
        >Hidden</button>
      </div>
    </div>
    <div class="pano-ui-row">
      <label>Lock</label>
      <div class="pano-segment" :data-selected="model.locked ? '1' : '0'">
        <button
          class="pano-segment-btn"
          type="button"
          data-action="upstream-locked"
          data-value="0"
          :aria-pressed="model.locked ? 'false' : 'true'"
          :disabled="model.disabled"
        >Unlocked</button>
        <button
          class="pano-segment-btn"
          type="button"
          data-action="upstream-locked"
          data-value="1"
          :aria-pressed="model.locked ? 'true' : 'false'"
          :disabled="model.disabled"
        >Locked</button>
      </div>
    </div>
  </div>
</template>

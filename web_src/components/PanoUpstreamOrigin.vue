<script setup>
// The upstream rows of a selected Sticker of Panorama Studio, the same rows for every Sticker so the panel keeps
// its layout: "Revert to upstream" of all the overrides of an upstream element (ADR 0030) and of each Lane (its
// eye is on its Timeline row and its lock in the selection menu; "Restore deleted" of its layer is on the layer's
// Timeline header, PanoTimelineGroup.vue). For the node's own port Sticker the Lane buttons revert a Lane to the
// Pose handoff of `sticker_state`. They are disabled for the node's other Stickers and for an element of a layer
// that is only inherited (its note is the rows' tooltip), and a button stays in place, disabled, while there is
// nothing for it to do. Where an upstream element comes from shows in the Transform title (PanoSidePanel.vue).
defineProps({
  model: { type: Object, default: null },
});
</script>

<template>
  <div v-if="model" class="pano-upstream-origin" :title="model.note || null">
    <div class="pano-ui-row">
      <label>Revert to upstream</label>
      <button
        class="pano-btn subtle"
        type="button"
        data-action="revert-upstream"
        :disabled="model.revertAll.disabled"
        title="Revert all overrides of this element to upstream"
      >All</button>
    </div>
    <div class="pano-upstream-lanes">
      <button
        v-for="lane in model.lanes"
        :key="lane.name"
        class="pano-btn subtle"
        type="button"
        :data-action="lane.action"
        :data-lane="lane.name"
        :disabled="lane.disabled"
        :title="`Revert ${lane.label} to upstream`"
      >{{ lane.label }}</button>
    </div>
  </div>
</template>

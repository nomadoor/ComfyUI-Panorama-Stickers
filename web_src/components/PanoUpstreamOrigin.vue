<script setup>
// The upstream rows of a selected Sticker of Panorama Studio, the same rows for every Sticker so the panel keeps
// its layout: the Visible and Lock switches of an upstream element (ADR 0030), which write overrides of it,
// "Revert to upstream" of all its overrides and of each Lane ("Restore deleted" of its layer is on the layer's
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

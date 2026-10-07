<script setup>
// "Revert to upstream" of the port Sticker's Lanes while it shows the Pose handoff of `sticker_state`
// (ADR 0030): a button per Lane the handoff gives, disabled while the Lane follows the handoff. The buttons
// stay in place whether or not a Lane is an override.
defineProps({
  model: { type: Object, default: null },
});
</script>

<template>
  <div v-if="model" class="pano-field-wide pano-handoff-row">
    <label>Upstream</label>
    <div class="pano-handoff-lanes">
      <button
        v-for="lane in model.lanes"
        :key="lane.name"
        class="pano-btn subtle pano-btn-tight"
        type="button"
        data-action="revert-handoff-lane"
        :data-lane="lane.name"
        :disabled="lane.disabled"
        :title="`Revert ${lane.label} to upstream`"
      >{{ lane.label }}</button>
    </div>
  </div>
</template>

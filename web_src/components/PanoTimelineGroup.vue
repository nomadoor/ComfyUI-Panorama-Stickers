<script setup>
// The header of an upstream layer's rows on Panorama Studio's Timeline (ADR 0030): where they come from
// (`Upstream · <key>`), across the names and the tracks, and the layer's actions: "Revert" of its `scene` and
// paint overrides and "Restore deleted (n)" of its elements deleted here. Both are always there, disabled while
// they would do nothing or the layer is only inherited, so the header keeps its layout.
defineProps({
  group: { type: Object, required: true },
});
const emit = defineEmits(["action"]);
</script>

<template>
  <div class="pano-timeline-group">
    <span class="pano-timeline-group-label" :title="group.label">{{ group.label }}</span>
    <button
      class="pano-timeline-group-action"
      type="button"
      :disabled="group.revert.disabled"
      title="Revert the scene and paint of this layer to upstream"
      @click.stop="emit('action', { type: 'revert-upstream-layer', key: group.key })"
    >Revert</button>
    <button
      class="pano-timeline-group-action is-restore"
      type="button"
      :disabled="group.restore.disabled"
      title="Show the elements of this layer deleted here again"
      @click.stop="emit('action', { type: 'restore-upstream-deleted', key: group.key })"
    >{{ group.restore.label }}</button>
  </div>
</template>

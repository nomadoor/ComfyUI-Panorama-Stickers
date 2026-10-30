<script setup>
import { ICON } from "../../icons.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioSwitch from "./StudioSwitch.vue";

// The buttons and the switch at the bottom right of the stage (docs/studio-ui.md "画面の区画"): Frame Selected,
// Reset View and the grid switch, in the same places in both tabs. Presentational.
defineProps({
  gridShown: { type: Boolean, default: true },
  resetDisabled: { type: Boolean, default: false },
  resetTip: { type: String, default: "" },
});
const emit = defineEmits(["frame-selected", "reset-view", "grid"]);
</script>

<template>
  <StudioFloatGroup layout="row" label="View">
    <StudioIconButton data-action="frame-selected" :icon="ICON.focus" label="Frame selected" @press="emit('frame-selected')" />
    <StudioIconButton
      data-action="reset-view"
      :icon="ICON.reset"
      label="Reset view"
      :tip="resetDisabled && resetTip ? resetTip : ''"
      :disabled="resetDisabled"
      @press="emit('reset-view')"
    />
    <span class="pano-studio-sep" />
    <StudioSwitch data-action="grid" label="Grid" tip="Show the ground grid" :on="gridShown" @change="emit('grid', $event)" />
  </StudioFloatGroup>
</template>

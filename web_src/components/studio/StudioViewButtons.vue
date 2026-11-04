<script setup>
import { ICON } from "../../icons.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The buttons at the bottom right of the stage (docs/studio-ui.md "画面の区画", "右下の View の群"): Frame Selected, Reset
// View (the home icon) and the grid button, in the same places in both tabs. The grid button shows its state by its
// icon, never by a fill (docs/agents/ux-principles.md, the exception of 2026-10-30). Presentational.
defineProps({
  gridShown: { type: Boolean, default: true },
  // Reset View cannot be pressed (the Camera tab), `resetTip` says why.
  resetDisabled: { type: Boolean, default: false },
  resetTip: { type: String, default: "" },
  // The view is at the start view (docs/space-and-view.md "開いたときの視点と Reset View"): Reset View is off too.
  atStart: { type: Boolean, default: false },
  // Frame Selected's tooltip (the Camera tab's moves the camera, docs/studio-ui.md "Camera タブ").
  frameTip: { type: String, default: "" },
  // Frame Selected stays in its place but cannot be pressed (the Camera tab in Panorama mode), `frameDisabledTip` says why.
  frameDisabled: { type: Boolean, default: false },
  frameDisabledTip: { type: String, default: "" },
});
const emit = defineEmits(["frame-selected", "reset-view", "grid"]);
</script>

<template>
  <StudioFloatGroup layout="row" label="View">
    <StudioIconButton
      data-action="frame-selected"
      :icon="ICON.focus"
      label="Frame selected"
      :tip="frameDisabled && frameDisabledTip ? frameDisabledTip : frameTip"
      :disabled="frameDisabled"
      @press="emit('frame-selected')"
    />
    <StudioIconButton
      data-action="reset-view"
      :icon="ICON.home"
      label="Reset view"
      :tip="resetDisabled && resetTip ? resetTip : atStart ? 'Reset view · Already at the start' : ''"
      :disabled="resetDisabled || atStart"
      @press="emit('reset-view')"
    />
    <StudioIconButton
      data-action="grid"
      role="switch"
      :aria-checked="String(gridShown)"
      :icon="gridShown ? ICON.grid : ICON.grid_off"
      label="Grid"
      :tip="gridShown ? 'Grid: shown' : 'Grid: hidden'"
      @press="emit('grid', !gridShown)"
    />
  </StudioFloatGroup>
</template>

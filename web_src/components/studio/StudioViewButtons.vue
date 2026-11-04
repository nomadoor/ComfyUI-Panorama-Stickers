<script setup>
import { ICON } from "../../icons.js";
import { DEFAULT_VIEW_HFOV } from "../../pano_space.js";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioFovNumber from "./StudioFovNumber.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioResetButton from "./StudioResetButton.vue";

// The View group at the bottom right of the stage (docs/studio-ui.md "画面の区画", "右下の View の群"; mock B2): the FOV
// number and its reset, a line, then Frame Selected, Reset View (the home icon) and the grid button, in the same places
// in both tabs; the Preview window's has no Frame Selected and puts its Fullscreen in the slot after the grid button
// (docs/studio-ui.md "Preview のウィンドウ"). The grid button shows its state by its icon, never by a fill
// (docs/agents/ux-principles.md, the exception of 2026-10-30). Presentational.
defineProps({
  // The view's FOV in whole degrees, and the text the number shows instead (the Camera tab's Camera H FOV).
  fov: { type: Number, default: DEFAULT_VIEW_HFOV },
  fovText: { type: String, default: "" },
  // The number and its reset stay in place but cannot be used (the Camera tab), `fovTip` says why.
  fovDisabled: { type: Boolean, default: false },
  fovTip: { type: String, default: "" },
  // Frame Selected is in the group (the editor; not the Preview window).
  frameSelected: { type: Boolean, default: true },
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
const emit = defineEmits(["fov", "fov-reset", "frame-selected", "reset-view", "grid"]);
</script>

<template>
  <StudioFloatGroup layout="row" label="View">
    <StudioFovNumber
      :value="fov"
      :text="fovText"
      :disabled="fovDisabled"
      :tip="fovDisabled ? fovTip : 'Field of view · Drag to change'"
      @change="(value) => emit('fov', value)"
    />
    <StudioResetButton
      data-action="fov-reset"
      label="Reset FOV"
      :at-default="fovDisabled || fov === DEFAULT_VIEW_HFOV"
      :tip="fovDisabled ? fovTip : ''"
      @reset="emit('fov-reset')"
    />
    <span class="pano-studio-sep" />
    <StudioIconButton
      v-if="frameSelected"
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
    <slot />
  </StudioFloatGroup>
</template>

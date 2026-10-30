<script setup>
import { ICON } from "../../icons.js";
import StudioAddIcon from "./StudioAddIcon.vue";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The left column of the stage (docs/studio-ui.md "左の列"): the tools (Cursor, Paint, Mask), adding (Add, Camera),
// and Undo / Redo at the bottom, in three groups. While the editor is being built, only Cursor is chosen and the
// others stay in their places, disabled, with a tooltip saying so. Presentational: `tools` and `history` in, `press`
// out with the button's key.
const props = defineProps({
  // Undo and Redo can be pressed (there is something to take back or to do again).
  canUndo: { type: Boolean, default: false },
  canRedo: { type: Boolean, default: false },
});
const emit = defineEmits(["press"]);

const LATER = "in development";
const groups = [
  [
    { key: "cursor", icon: ICON.cursor_tool, label: "Cursor", active: true },
    { key: "paint", icon: ICON.palette_tool, label: "Paint", disabled: true, tip: `Paint · ${LATER}` },
    { key: "mask", icon: ICON.circle_dashed_tool, label: "Mask", disabled: true, tip: `Mask · ${LATER}` },
  ],
  [
    { key: "add", icon: "", drawn: "add", label: "Add", disabled: true, tip: `Add · ${LATER}` },
    { key: "camera", icon: ICON.camera_plus, label: "Camera", disabled: true, tip: `Camera · ${LATER}` },
  ],
];
</script>

<template>
  <StudioFloatGroup layout="rail" label="Tools">
    <template v-for="(group, index) in groups" :key="index">
      <span v-if="index" class="pano-studio-sep" />
      <StudioIconButton
        v-for="button in group"
        :key="button.key"
        :data-tool="button.key"
        :icon="button.icon"
        :label="button.label"
        :tip="button.tip || ''"
        :active="!!button.active"
        :disabled="!!button.disabled"
        @press="emit('press', button.key)"
      >
        <StudioAddIcon v-if="button.drawn === 'add'" />
      </StudioIconButton>
    </template>
    <span class="pano-studio-sep" />
    <StudioIconButton data-tool="undo" :icon="ICON.undo" label="Undo" tip="Undo (Ctrl+Z)" :disabled="!props.canUndo" @press="emit('press', 'undo')" />
    <StudioIconButton data-tool="redo" :icon="ICON.redo" label="Redo" tip="Redo (Shift+Ctrl+Z)" :disabled="!props.canRedo" @press="emit('press', 'redo')" />
  </StudioFloatGroup>
</template>

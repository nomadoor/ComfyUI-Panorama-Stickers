<script setup>
import { computed } from "vue";
import { ICON } from "../../icons.js";
import StudioAddIcon from "./StudioAddIcon.vue";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The left column of the stage (docs/studio-ui.md "左の列"): the tools (Cursor, Paint, Mask), adding (Add, Camera),
// and Undo / Redo at the bottom, in three groups. One of Cursor, Paint and Mask is chosen (`tool`); Add opens the
// file picker (the shell's); Camera brings the Camera to the view (studio/camera_ui.js); the others stay in their
// places, disabled, with a tooltip saying so. Presentational:
// props in, `press` out with the button's key.
const props = defineProps({
  // Undo and Redo can be pressed (there is something to take back or to do again).
  canUndo: { type: Boolean, default: false },
  canRedo: { type: Boolean, default: false },
  // Add can be pressed (not in a read-only editor: docs/studio-ui.md "Add とドロップの見せ方").
  canAdd: { type: Boolean, default: false },
  // The chosen tool ("cursor", "paint", "mask"), and whether Paint and Mask can be chosen (not in a read-only editor).
  tool: { type: String, default: "cursor" },
  canPaint: { type: Boolean, default: false },
  // The Camera tab: every button but Undo and Redo stays in its place, disabled, saying why (docs/studio-ui.md
  // "左の列").
  cameraTab: { type: Boolean, default: false },
  // The Camera button: { disabled, tip } (studio/camera_ui.js cameraButton).
  cameraButton: { type: Object, default: () => ({ disabled: true, tip: "Camera to view" }) },
});
const emit = defineEmits(["press"]);

const CAMERA_TAB_TIP = "Not available in the Camera view";
const groups = computed(() => [
  [
    { key: "cursor", icon: ICON.cursor_tool, label: "Cursor", active: props.tool === "cursor" },
    { key: "paint", icon: ICON.palette_tool, label: "Paint", active: props.tool === "paint", disabled: !props.canPaint, tip: props.canPaint ? "Paint" : "Paint · Read-only" },
    { key: "mask", icon: ICON.circle_dashed_tool, label: "Mask", active: props.tool === "mask", disabled: !props.canPaint, tip: props.canPaint ? "Mask" : "Mask · Read-only" },
  ],
  [
    { key: "add", icon: "", drawn: "add", label: "Add", disabled: !props.canAdd, tip: "Add an image or a 3D file" },
    { key: "camera", icon: ICON.camera_plus, label: "Camera", disabled: props.cameraButton.disabled, tip: props.cameraButton.tip },
  ],
]);
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
        :tip="props.cameraTab ? CAMERA_TAB_TIP : button.tip || ''"
        :active="!!button.active && !props.cameraTab"
        :disabled="!!button.disabled || props.cameraTab"
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

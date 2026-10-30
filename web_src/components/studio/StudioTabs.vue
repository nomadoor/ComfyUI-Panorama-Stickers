<script setup>
import { ICON } from "../../icons.js";
import StudioSegmented from "./StudioSegmented.vue";

// The tabs at the top left of the stage, 3D | Camera (docs/studio-ui.md "画面の区画"): a segmented control of two
// equal widths with an icon and text, floating over the stage.
defineProps({
  // "3d" or "camera".
  value: { type: String, default: "3d" },
});
const emit = defineEmits(["select"]);

const TABS = [
  { value: "3d", label: "3D", icon: ICON.box },
  { value: "camera", label: "Camera", icon: ICON.camera },
];
</script>

<template>
  <StudioSegmented
    :options="TABS"
    :value="value"
    role="tablist"
    label="View"
    extra-class="pano-studio-float pano-studio-tabs"
    @select="emit('select', $event)"
  />
</template>

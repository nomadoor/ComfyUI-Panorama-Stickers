<script setup>
import { computed } from "vue";
import { ICON } from "../../icons.js";
import StudioSegmented from "./StudioSegmented.vue";

// The tabs at the top left of the stage, 3D | Camera (docs/studio-ui.md "画面の区画"): a segmented control of two
// equal widths with an icon and text, floating over the stage.
const props = defineProps({
  // "3d" or "camera".
  value: { type: String, default: "3d" },
  // The Camera tab stays in its place but cannot be chosen (while it is not built); `cameraTip` says why.
  cameraDisabled: { type: Boolean, default: false },
  cameraTip: { type: String, default: "" },
});
const emit = defineEmits(["select"]);

const tabs = computed(() => [
  { value: "3d", label: "3D", icon: ICON.box },
  { value: "camera", label: "Camera", icon: ICON.camera, disabled: props.cameraDisabled, tip: props.cameraTip || undefined },
]);
</script>

<template>
  <StudioSegmented
    :options="tabs"
    :value="value"
    role="tablist"
    label="View"
    extra-class="pano-studio-float pano-studio-tabs"
    @select="emit('select', $event)"
  />
</template>

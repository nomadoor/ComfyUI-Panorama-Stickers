<script setup>
import PanoCutoutAspectPicker from "./PanoCutoutAspectPicker.vue";
import PanoIconButton from "./PanoIconButton.vue";
import PanoFrameRollKnob from "./PanoFrameRollKnob.vue";

defineProps({
  model: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="pano-frame-rail" :class="{ 'is-hidden': model.visible !== true }" data-frame-rail>
    <PanoCutoutAspectPicker
      :model="model"
      mode="rail"
      data-aspect-action="frame-aspect-set"
    />
    <PanoIconButton
      :icon="model.rotateIcon"
      label="Toggle Portrait/Landscape"
      tip="Toggle portrait/landscape"
      :attrs="{ 'data-action': 'frame-rotate-90', disabled: model.disabled === true }"
    />
    <PanoFrameRollKnob :model="model.rollKnob || {}" />
  </div>
</template>

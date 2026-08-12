<script setup>
import PanoIconButton from "./PanoIconButton.vue";
import PanoFrameRollKnob from "./PanoFrameRollKnob.vue";

defineProps({
  model: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div class="pano-frame-rail" :class="{ 'is-hidden': model.visible !== true }" data-frame-rail>
    <div class="pano-frame-aspect-control">
      <PanoIconButton
        :icon="model.aspectIcon"
        label="Aspect Ratio"
        tip="Aspect ratio"
        :pressed="model.aspectOpen ? 'true' : 'false'"
        :attrs="{ 'data-action': 'frame-aspect', disabled: model.disabled === true }"
      />
      <div v-show="model.aspectOpen === true" class="pano-frame-aspect-popover">
        <button
          v-for="choice in model.aspectChoices || []"
          :key="choice.value"
          class="pano-btn pano-frame-aspect-choice"
          :class="{ active: choice.active === true }"
          type="button"
          data-action="frame-aspect-set"
          :data-aspect="choice.value"
          :disabled="model.disabled === true"
        >{{ choice.label }}</button>
      </div>
    </div>
    <PanoIconButton
      :icon="model.rotateIcon"
      label="Toggle Portrait/Landscape"
      tip="Toggle portrait/landscape"
      :attrs="{ 'data-action': 'frame-rotate-90', disabled: model.disabled === true }"
    />
    <PanoFrameRollKnob :model="model.rollKnob || {}" />
  </div>
</template>

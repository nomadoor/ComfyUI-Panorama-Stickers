<script setup>
import PanoIconButton from "./shared/PanoIconButton.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="pano-floating-left" data-tool-rail>
    <PanoIconButton
      v-for="button in buttons"
      :key="button.key"
      v-show="button.visible !== false"
      :extra-class="{
        active: button.active,
        'pano-btn-icon-accent': button.accent,
      }"
      :icon="button.icon"
      :label="button.label"
      :tip="button.tip"
      :pressed="button.pressed"
      :attrs="{ [button.attr]: button.value, disabled: button.disabled === true }"
    />
  </div>
</template>

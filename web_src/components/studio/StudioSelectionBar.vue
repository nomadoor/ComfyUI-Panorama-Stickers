<script setup>
import SvgIcon from "../shared/SvgIcon.vue";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";

// The bar at the bottom center of the stage (docs/studio-ui.md "下の中央のバー"): the selected object's icon and name
// at the left (one width for every name users give, a long one cut with an ellipsis and whole in the tooltip; a name
// fixed by the kind, `model.fixedName`, fits its text), then its buttons
// in groups. Presentational: `model` (studio/selection_bar.js selectionBar()) in, `press`
// out with the button's key.
defineProps({
  model: { type: Object, required: true },
});
const emit = defineEmits(["press"]);
</script>

<template>
  <StudioFloatGroup layout="bar" label="Selection" :data-kind="model.kind">
    <span class="pano-studio-float-label" data-bar-name :data-tip="model.name">
      <SvgIcon :icon="model.icon" />
      <span class="pano-studio-bar-name" :class="{ 'is-fixed': model.fixedName }">{{ model.name }}</span>
    </span>
    <template v-for="(group, index) in model.groups" :key="index">
      <span class="pano-studio-sep" />
      <StudioIconButton
        v-for="button in group"
        :key="button.key"
        :data-bar="button.key"
        :icon="button.icon"
        :label="button.label"
        :tip="button.tip"
        :active="button.active"
        :disabled="button.disabled"
        @press="emit('press', button.key)"
      />
    </template>
  </StudioFloatGroup>
</template>

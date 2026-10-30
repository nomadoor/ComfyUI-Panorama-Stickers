<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ICON } from "../../icons.js";
import SvgIcon from "../shared/SvgIcon.vue";
import StudioColorPicker from "./StudioColorPicker.vue";
import StudioFloatGroup from "./StudioFloatGroup.vue";
import StudioIconButton from "./StudioIconButton.vue";
import StudioSlider from "./StudioSlider.vue";

// The bar at the bottom center while Paint or Mask is chosen (docs/studio-ui.md "ペイントの道具"; looks: docs/design.md
// "ペイントの道具のバー"): the tool's name, its brushes, the size slider and its number, and Clear; for Paint, the color
// dots and Custom color in a row floating above the bar, and the popover centered above them (as the old editor's). Presentational: `model` (studio/paint_bar.js paintBar()) in,
// `edit` out ({ kind: "brush", key }, { kind: "size", value }, { kind: "swatch", id }, { kind: "custom" },
// { kind: "close-color" }, { kind: "color", color }, { kind: "recent", index }, { kind: "clear" }).
const props = defineProps({
  model: { type: Object, required: true },
});
const emit = defineEmits(["edit"]);

const size = computed(() => props.model.size);
// The slider lands on whole sizes.
const steps = computed(() => size.value.max - size.value.min);
const snapSize = (pos) => Math.round(pos * steps.value) / steps.value;
const onSize = (value) => emit("edit", { kind: "size", value: Math.round(value) });

// The popover closes on a press outside it and outside the Custom color dot (keeping its color among the recent ones).
const custom = ref(null);
const pop = ref(null);
function onWindowDown(event) {
  if (!props.model.colors?.custom.open) return;
  if (custom.value?.contains(event.target) || pop.value?.contains(event.target)) return;
  emit("edit", { kind: "close-color" });
}
onMounted(() => window.addEventListener("pointerdown", onWindowDown, true));
onBeforeUnmount(() => window.removeEventListener("pointerdown", onWindowDown, true));
</script>

<template>
  <div class="pano-studio-paint-tools">
    <div v-if="model.colors?.custom.open" ref="pop" class="pano-studio-paint-pop">
      <StudioColorPicker
        :color="model.colors.picker.color"
        :recent="model.colors.picker.recent"
        @color="(color) => emit('edit', { kind: 'color', color })"
        @recent="(index) => emit('edit', { kind: 'recent', index })"
      />
    </div>
    <StudioFloatGroup
      v-if="model.colors"
      layout="row"
      label="Color"
      class="pano-studio-paint-colors"
      :class="{ 'is-disabled': !model.colors.enabled }"
      data-paint-colors
    >
      <button
        v-for="swatch in model.colors.swatches"
        :key="swatch.id"
        type="button"
        class="pano-studio-paint-dot"
        :class="{ 'is-active': swatch.active }"
        :style="{ '--dot': swatch.css }"
        :data-paint-swatch="swatch.id"
        :data-tip="model.colors.enabled ? swatch.label : `${swatch.label} · not for the eraser`"
        :aria-label="swatch.label"
        :aria-pressed="swatch.active ? 'true' : 'false'"
        :aria-disabled="model.colors.enabled ? null : 'true'"
        @click="model.colors.enabled && emit('edit', { kind: 'swatch', id: swatch.id })"
      />
      <span ref="custom" class="pano-studio-paint-custom">
        <button
          type="button"
          class="pano-studio-paint-dot is-custom"
          :class="{ 'is-active': model.colors.custom.active }"
          :style="{ '--dot': model.colors.custom.css }"
          data-paint-custom
          :data-tip="model.colors.enabled ? 'Custom color' : 'Custom color · not for the eraser'"
          aria-label="Custom color"
          :aria-expanded="model.colors.custom.open ? 'true' : 'false'"
          :aria-disabled="model.colors.enabled ? null : 'true'"
          @click="model.colors.enabled && emit('edit', { kind: 'custom' })"
        />
      </span>
    </StudioFloatGroup>
    <StudioFloatGroup layout="bar" :label="`${model.name} tools`" :data-kind="model.kind" data-paint-bar>
      <span class="pano-studio-float-label pano-studio-paint-label" data-bar-name>
        <SvgIcon :icon="model.icon" />
        <span class="pano-studio-paint-name">{{ model.name }}</span>
      </span>
      <span class="pano-studio-sep" />
      <StudioIconButton
        v-for="brush in model.brushes"
        :key="brush.key"
        :data-paint-brush="brush.key"
        :icon="brush.icon"
        :label="brush.label"
        :active="brush.active"
        @press="emit('edit', { kind: 'brush', key: brush.key })"
      />
      <span class="pano-studio-sep" />
      <span class="pano-studio-paint-size" :data-tip="size.disabled ? 'Size · not for the lasso' : 'Size'" data-paint-size>
        <StudioSlider
          class="pano-studio-paint-size-slider"
          :value="size.value"
          :min="size.min"
          :max="size.max"
          :step="1"
          :snap-to="snapSize"
          :disabled="size.disabled"
          label="Size"
          :value-text="String(size.value)"
          @input="onSize"
          @change="onSize"
        />
        <span class="pano-studio-paint-size-value" :class="{ 'is-disabled': size.disabled }">{{ size.value }}</span>
      </span>
      <span class="pano-studio-sep" />
      <StudioIconButton
        :data-paint-clear="model.kind"
        :icon="ICON.clear"
        :label="model.clear.label"
        :disabled="model.clear.disabled"
        @press="emit('edit', { kind: 'clear' })"
      />
    </StudioFloatGroup>
  </div>
</template>

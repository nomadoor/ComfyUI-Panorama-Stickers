<script setup>
import SvgIcon from "./SvgIcon.vue";

defineProps({
  model: { type: Object, default: () => ({}) },
});
</script>

<template>
  <div
    class="pano-selection-menu"
    data-selection-menu
    :style="{ display: model.visible === true ? 'flex' : 'none', left: `${model.left || 0}px`, top: `${model.top || 0}px` }"
  >
    <template v-for="item in model.items || []" :key="item.key">
      <div v-if="item.kind === 'aspect'" class="pano-cutout-menu">
        <button
          class="pano-btn pano-btn-icon"
          type="button"
          data-action="aspect"
          aria-label="Aspect Ratio"
          data-tip="Aspect ratio"
        >
          <SvgIcon :icon="item.icon" />
        </button>
        <div class="pano-aspect-popover" :class="{ open: item.open === true }" role="dialog" aria-label="Aspect Ratio">
          <button
            v-for="choice in item.choices || []"
            :key="choice.value"
            class="pano-btn pano-aspect-choice"
            :class="{ active: choice.active === true }"
            type="button"
            data-action="aspect-set"
            :data-aspect="choice.value"
          >{{ choice.label }}</button>
        </div>
      </div>
      <button
        v-else
        class="pano-btn pano-btn-icon"
        type="button"
        :data-action="item.action"
        :aria-label="item.label"
        :data-tip="item.tip"
        :disabled="item.disabled === true"
      >
        <SvgIcon :icon="item.icon" />
      </button>
    </template>
  </div>
</template>

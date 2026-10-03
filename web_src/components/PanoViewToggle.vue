<script setup>
import SvgIcon from "./SvgIcon.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
});
</script>

<template>
  <div class="pano-floating-top">
    <div
      class="pano-view-toggle"
      :data-selected="buttons.find((button) => button.pressed === 'true')?.key || 'pano'"
      :data-view-count="String(buttons.length)"
    >
      <button
        v-for="button in buttons"
        :key="button.key"
        class="pano-view-btn"
        :class="[button.extraClass, { active: button.pressed === 'true' }]"
        :data-view="button.key"
        :aria-pressed="button.pressed"
        :aria-label="button.label"
        :disabled="button.disabled === true"
        v-show="button.visible !== false"
      >
        <SvgIcon :icon="button.icon" />
        <span class="label">{{ button.label }}</span>
      </button>
    </div>
  </div>
</template>

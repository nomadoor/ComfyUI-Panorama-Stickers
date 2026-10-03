<script setup>
import SvgIcon from "./SvgIcon.vue";

defineProps({
  buttons: { type: Array, default: () => [] },
  // The space view's 3DoF / 6DoF segments (#71), shown while they are visible.
  spaceButtons: { type: Array, default: () => [] },
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
    <div
      v-show="spaceButtons.some((button) => button.visible !== false)"
      class="pano-view-toggle pano-space-toggle"
      role="group"
      aria-label="Space view mode"
      :data-selected="spaceButtons.find((button) => button.pressed === 'true')?.key || '3dof'"
    >
      <button
        v-for="button in spaceButtons"
        :key="button.key"
        class="pano-view-btn"
        :class="{ active: button.pressed === 'true' }"
        :data-space-mode="button.key"
        :data-tip="button.tip"
        :aria-pressed="button.pressed"
      >
        <span class="label">{{ button.label }}</span>
      </button>
    </div>
  </div>
</template>

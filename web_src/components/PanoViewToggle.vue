<script setup>
import SvgIcon from "./SvgIcon.vue";

// A disabled tab is aria-disabled rather than disabled, so its tooltip can still say why (Panorama
// Studio's Frame tab, pano_editor_ui_state.js frameViewButton); the editor ignores its clicks.
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
        :aria-disabled="button.disabled === true ? 'true' : null"
        :tabindex="button.disabled === true ? -1 : null"
        :data-tip="button.tip || null"
        v-show="button.visible !== false"
      >
        <SvgIcon :icon="button.icon" />
        <span class="label">{{ button.label }}</span>
      </button>
    </div>
  </div>
</template>

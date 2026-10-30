<script setup>
import SvgIcon from "../shared/SvgIcon.vue";

// A card of the inspector (docs/studio-ui.md "種類ごとの中身"): a heading (icon, title, and a quiet note at the
// right such as "World") over its rows. Cards follow each other divided by a line.
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: "" },
  note: { type: String, default: "" },
});
</script>

<template>
  <section class="pano-studio-card" :aria-label="title">
    <header class="pano-studio-card-title">
      <SvgIcon v-if="icon" :icon="icon" />
      <span class="pano-studio-cap">{{ title }}</span>
      <span v-if="note" class="pano-studio-card-sub pano-studio-cap">{{ note }}</span>
    </header>
    <div class="pano-studio-card-rows">
      <slot />
    </div>
  </section>
</template>

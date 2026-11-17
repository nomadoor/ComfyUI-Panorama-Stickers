<script setup>
import SvgIcon from "../shared/SvgIcon.vue";

// A card of the inspector (docs/studio-ui.md "種類ごとの中身"): a heading (icon, title, and a quiet note at the
// right such as "World") over its rows. The title stays on one line and is cut with "…"; its full text is its
// tooltip (docs/design.md "大きさ", the card heading).
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: "" },
  note: { type: String, default: "" },
  // A badge after the title ({ label, icon, tip }), shown only, or null (docs/studio-ui.md "Look at" "オンの見せ方").
  badge: { type: Object, default: null },
});
</script>

<template>
  <section class="pano-studio-card" :aria-label="title">
    <header class="pano-studio-card-title">
      <SvgIcon v-if="icon" :icon="icon" />
      <span class="pano-studio-card-name" :data-tip="title">{{ title }}</span>
      <span v-if="badge" class="pano-studio-card-badge" :data-tip="badge.tip" data-part="card-badge">
        <SvgIcon v-if="badge.icon" :icon="badge.icon" />{{ badge.label }}
      </span>
      <span v-if="note" class="pano-studio-card-sub pano-studio-cap">{{ note }}</span>
    </header>
    <div class="pano-studio-card-rows">
      <slot />
    </div>
  </section>
</template>

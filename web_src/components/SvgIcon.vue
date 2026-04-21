<script setup>
import { computed } from "vue";
import { ICON_PATHS } from "../icons.js";

const props = defineProps({
  icon: { type: String, default: "" },
  className: { type: [String, Array, Object], default: "" },
});

const iconDef = computed(() => {
  const key = String(props.icon || "");
  return Object.prototype.hasOwnProperty.call(ICON_PATHS, key) ? ICON_PATHS[key] : null;
});

</script>

<template>
  <svg
    v-if="iconDef"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline"
    :class="[
      iconDef.name ? `icon-tabler-${iconDef.name}` : '',
      className,
    ]"
    aria-hidden="true"
  >
    <template v-for="(element, index) in iconDef.elements" :key="`${iconDef.name || icon || 'icon'}-${element.tag}-${index}`">
      <path v-if="element.tag === 'path'" v-bind="element.attrs" />
      <circle v-else-if="element.tag === 'circle'" v-bind="element.attrs" />
      <rect v-else-if="element.tag === 'rect'" v-bind="element.attrs" />
      <line v-else-if="element.tag === 'line'" v-bind="element.attrs" />
      <polyline v-else-if="element.tag === 'polyline'" v-bind="element.attrs" />
      <polygon v-else-if="element.tag === 'polygon'" v-bind="element.attrs" />
    </template>
  </svg>
</template>

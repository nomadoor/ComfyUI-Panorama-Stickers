<script setup>
import { computed } from "vue";
import SvgIcon from "./SvgIcon.vue";

const props = defineProps({
  tag: { type: String, default: "button" },
  type: { type: String, default: "button" },
  icon: { type: String, default: "" },
  label: { type: String, default: "" },
  tip: { type: String, default: "" },
  pressed: { type: [String, Boolean], default: null },
  extraClass: { type: [String, Array, Object], default: "" },
  attrs: { type: Object, default: () => ({}) },
});

const buttonAttrs = computed(() => {
  const attrs = { ...props.attrs };
  if (props.tag === "button" && attrs.type == null) attrs.type = props.type;
  if (props.label) attrs["aria-label"] = props.label;
  if (props.tip) attrs["data-tip"] = props.tip;
  if (props.pressed != null) attrs["aria-pressed"] = props.pressed;
  return attrs;
});
</script>

<template>
  <component
    :is="tag"
    class="pano-btn pano-btn-icon"
    :class="extraClass"
    v-bind="buttonAttrs"
  >
    <SvgIcon :icon="icon" />
  </component>
</template>

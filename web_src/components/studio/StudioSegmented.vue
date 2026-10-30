<script setup>
import SvgIcon from "../shared/SvgIcon.vue";

// A segmented control of the new UI: options of equal width, each an icon and/or text, the chosen one in the
// strong fill (docs/design.md "新しい UI の見た目"). Presentational: `value` in, `select` out.
const props = defineProps({
  // [{ value, label, icon?, iconOnly?, disabled?, tip? }]; an iconOnly option keeps its label as the accessible name.
  options: { type: Array, required: true },
  value: { type: [String, Number], default: null },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "" },
  // Fill the width it is given (an inspector row) instead of fitting its options.
  fill: { type: Boolean, default: false },
  // "radiogroup" for a choice, "tablist" for tabs.
  role: { type: String, default: "radiogroup" },
  extraClass: { type: [String, Array, Object], default: "" },
});
const emit = defineEmits(["select"]);

const itemRole = () => (props.role === "tablist" ? "tab" : "radio");
const off = (option) => props.disabled || !!option.disabled;

function choose(option) {
  if (off(option) || option.value === props.value) return;
  emit("select", option.value);
}

function onKeydown(event) {
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
  if (!step || props.disabled) return;
  event.preventDefault();
  const options = props.options;
  let index = options.findIndex((option) => option.value === props.value);
  for (let i = 0; i < options.length; i += 1) {
    index = (index + step + options.length) % options.length;
    if (!off(options[index])) break;
  }
  choose(options[index]);
  event.currentTarget.querySelectorAll("button")[index]?.focus();
}
</script>

<template>
  <div
    class="pano-studio-seg"
    :class="[{ 'is-fill': fill, 'is-disabled': disabled }, extraClass]"
    :role="role"
    :aria-label="label || null"
    :aria-disabled="disabled ? 'true' : null"
    :style="{ '--studio-seg-count': options.length }"
    @keydown="onKeydown"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="pano-studio-seg-item"
      :class="{ 'is-active': option.value === value }"
      :role="itemRole()"
      :aria-checked="itemRole() === 'radio' ? String(option.value === value) : null"
      :aria-selected="itemRole() === 'tab' ? String(option.value === value) : null"
      :aria-disabled="off(option) ? 'true' : null"
      :aria-label="option.label || null"
      :title="option.tip || null"
      :tabindex="option.value === value ? 0 : -1"
      :data-value="option.value"
      @click="choose(option)"
    >
      <SvgIcon v-if="option.icon" :icon="option.icon" />
      <span v-if="!option.iconOnly && option.label" class="pano-studio-seg-label pano-studio-cap">{{ option.label }}</span>
    </button>
  </div>
</template>

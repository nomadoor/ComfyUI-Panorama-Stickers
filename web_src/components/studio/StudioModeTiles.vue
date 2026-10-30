<script setup>
// The Camera card's mode choice (docs/studio-ui.md "Camera のカード"; looks: docs/design.md "大きさ"): two tiles
// side by side under the card's heading, each a small picture of the shape it makes and its name below (the mock
// design-drafts/mode-3.html M1). Presentational: `value` in, `select` out. The arrow keys move between the tiles
// as in a segmented control.
const props = defineProps({
  // [{ value: "erp" | "perspective", label }].
  options: { type: Array, required: true },
  value: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  label: { type: String, default: "Mode" },
  // Why the tiles are off (read-only, locked), as the tooltip.
  tip: { type: String, default: "" },
});
const emit = defineEmits(["select"]);

function choose(option) {
  if (props.disabled || option.value === props.value) return;
  emit("select", option.value);
}

function onKeydown(event) {
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
  if (!step || props.disabled) return;
  event.preventDefault();
  const count = props.options.length;
  const here = Math.max(0, props.options.findIndex((option) => option.value === props.value));
  const index = (here + step + count) % count;
  choose(props.options[index]);
  event.currentTarget.querySelectorAll("button")[index]?.focus();
}
</script>

<template>
  <div
    class="pano-studio-mode-tiles"
    role="radiogroup"
    :aria-label="label"
    :aria-disabled="disabled ? 'true' : null"
    :title="tip || null"
    @keydown="onKeydown"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="pano-studio-mode-tile"
      :class="{ 'is-active': option.value === value }"
      role="radio"
      :aria-checked="String(option.value === value)"
      :aria-disabled="disabled ? 'true' : null"
      :tabindex="option.value === value ? 0 : -1"
      :data-value="option.value"
      @click="choose(option)"
    >
      <!-- The pictures are the mock's (mode-3.html M1): a 2:1 equirect grid, a framed shot with a small center cross. -->
      <svg v-if="option.value === 'erp'" class="pano-studio-mode-pic" viewBox="0 0 64 32" aria-hidden="true">
        <rect x="1" y="1" width="62" height="30" rx="2" />
        <path d="M1 16h62" />
        <path class="is-thin" d="M17 1c-6 10-6 20 0 30M33 1v30M49 1c6 10 6 20 0 30" />
        <path class="is-thin" d="M1 8c20 5 42 5 62 0M1 24c20-5 42-5 62 0" />
      </svg>
      <svg v-else class="pano-studio-mode-pic" viewBox="0 0 64 32" aria-hidden="true">
        <rect x="10" y="3" width="44" height="26" rx="2" />
        <path class="is-thin" d="M28 16h8M32 12v8" />
      </svg>
      <span class="pano-studio-mode-name pano-studio-cap">{{ option.label }}</span>
    </button>
  </div>
</template>

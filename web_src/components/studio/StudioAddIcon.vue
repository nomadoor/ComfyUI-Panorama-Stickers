<script setup>
import { useId } from "vue";

// The Add icon of the left column (docs/design.md "新しい UI の見た目" "アイコン"; the drawing is design-drafts
// controls-2.html A4): Tabler's photo, small at the top left, and Tabler's box in front of it at the bottom right; the
// photo's lines are cut away where the box covers them (a mask of the box's outline, widened by 3.2). The box is a
// little larger than in the draft (0.72 in place of 0.66). The mask needs an id of its own per icon on the page.
const mask = `add-icon-mask-${useId()}`;
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-photo-box"
    aria-hidden="true"
  >
    <defs>
      <mask :id="mask" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect x="0" y="0" width="24" height="24" fill="#fff" />
        <polygon
          points="16.04,10.04 21.8,13.28 21.8,19.76 16.04,23 10.28,19.76 10.28,13.28"
          fill="#000"
          stroke="#000"
          stroke-width="3.2"
          stroke-linejoin="round"
        />
      </mask>
    </defs>
    <g :mask="`url(#${mask})`">
      <g transform="translate(-1 -1) scale(.78)">
        <path d="M15 8h.01" />
        <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12" />
        <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
        <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
      </g>
    </g>
    <g transform="translate(7.4 7.88) scale(.72)">
      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-8 -4.5" />
    </g>
  </svg>
</template>

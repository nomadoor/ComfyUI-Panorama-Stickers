<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";

// The list of shortcuts (docs/studio-ui.md "ショートカットの一覧"; its look: docs/design.md "大きさ" "ショートカットの一覧"):
// one opaque sheet over most of the stage, read only, never scrolled: on a stage too small for it the whole sheet is
// shrunk by one ratio. It takes the focus when it opens, so a reader names it. A press outside it (but on the "?"
// button, which toggles it itself) closes it and still does what it does there; Escape is the shell's (its order,
// docs/studio-ui.md "閉じ方"). Presentational: `list` (studio/shortcuts.js shortcutList) in, `close` out.
const props = defineProps({
  list: { type: Object, required: true },
  // Gives the element whose presses do not count as outside (the "?" button), or null.
  toggle: { type: Function, default: () => null },
});
const emit = defineEmits(["close"]);

// A row's key combinations as shown: the modifiers they all share once, then the keys that differ, "/" between
// them ([["Ctrl", "C"], ["Ctrl", "X"]] shows as Ctrl + C / X).
function shownKeys(keys) {
  const shared = [];
  if (keys.length > 1 && keys.every((combo) => combo.length > 1)) {
    for (let at = 0; at < keys[0].length - 1; at += 1) {
      if (!keys.every((combo) => combo.length - 1 > at && combo[at] === keys[0][at])) break;
      shared.push(keys[0][at]);
    }
  }
  return { shared, alternatives: keys.map((combo) => combo.slice(shared.length)) };
}
const columnsOf = (list) => Array.from({ length: list.columns }, (_, column) => list.groups.filter((group) => group.column === column));

const root = ref(null);
const sheet = ref(null);
// The ratio the sheet is shrunk by when the stage cannot hold it (1: as designed). Shrunk, the sheet is laid out
// wider by that ratio, so it still spans the whole box (its height does not depend on its width: the columns keep
// their own widths).
const scale = ref(1);
function fit() {
  const box = root.value;
  const inner = sheet.value;
  if (!box || !inner) return;
  // The sheet's least width (its own, not the width it is laid out at now, which grows with the shrink) and its height,
  // before its transform.
  const next = Math.min(1, box.clientWidth / Math.max(1, natural(inner)), box.clientHeight / Math.max(1, inner.offsetHeight));
  if (Math.abs(next - scale.value) > 0.001) scale.value = next;
}
// The sheet's width at max-content: its columns' widths and the least gaps between them (or the header's width), and
// the padding.
function natural(inner) {
  const style = getComputedStyle(inner);
  // A row of parts (the columns, the header's pieces) at their own widths, with the row's gap between them.
  const row = (element) => {
    if (!element) return 0;
    const parts = [...element.children];
    const gap = (parts.length - 1) * (parseFloat(getComputedStyle(element).columnGap) || 0);
    return parts.reduce((sum, part) => sum + part.offsetWidth, 0) + gap;
  };
  const pad = (parseFloat(style.paddingLeft) || 0) + (parseFloat(style.paddingRight) || 0);
  return Math.max(row(inner.querySelector(".pano-studio-shortcuts-columns")), row(inner.querySelector(".pano-studio-shortcuts-head"))) + pad;
}
let observer = null;

// Closed by a press outside: the focus goes where that press puts it.
let pressedOutside = false;

function onWindowDown(event) {
  const target = event.target;
  if (!root.value || root.value.contains(target) || props.toggle()?.contains?.(target)) return;
  pressedOutside = true;
  emit("close");
}

onMounted(() => {
  window.addEventListener("pointerdown", onWindowDown, true);
  if (typeof ResizeObserver === "function") {
    observer = new ResizeObserver(fit);
    observer.observe(root.value);
    observer.observe(sheet.value);
  }
  fit();
  nextTick(() => root.value?.focus({ preventScroll: true }));
});
watch(() => props.list, () => nextTick(fit));
onBeforeUnmount(() => {
  window.removeEventListener("pointerdown", onWindowDown, true);
  observer?.disconnect();
  // The focus was in the list: it goes back to the "?" button rather than to the page.
  const active = root.value?.ownerDocument?.activeElement;
  if (!pressedOutside && active && root.value.contains(active)) props.toggle()?.focus?.({ preventScroll: true });
});
</script>

<template>
  <section
    id="pano-studio-shortcuts"
    ref="root"
    class="pano-studio-shortcuts"
    role="dialog"
    aria-modal="false"
    aria-label="Shortcuts"
    tabindex="-1"
    data-shortcuts
  >
    <div
      ref="sheet"
      class="pano-studio-shortcuts-sheet"
      :style="{ '--studio-shortcuts-columns': list.columns, transform: scale < 1 ? `scale(${scale})` : null, width: scale < 1 ? `${100 / scale}%` : null }"
      :data-scale="scale < 1 ? scale.toFixed(3) : null"
    >
      <div class="pano-studio-shortcuts-head">
        <h2 class="pano-studio-shortcuts-heading">Shortcuts</h2>
        <span v-if="list.name" class="pano-studio-shortcuts-screen">{{ list.name }}</span>
        <span class="pano-studio-shortcuts-close">
          <template v-for="(combo, index) in list.close.keys" :key="index">
            <span v-if="index" class="pano-studio-shortcuts-words"> or </span>
            <kbd v-for="cap in combo" :key="cap" class="pano-studio-kbd">{{ cap }}</kbd>
          </template>
          <span class="pano-studio-shortcuts-words"> to close</span>
        </span>
      </div>
      <div class="pano-studio-shortcuts-columns">
        <div v-for="(column, at) in columnsOf(list)" :key="at" class="pano-studio-shortcuts-column">
          <div v-for="group in column" :key="group.id" class="pano-studio-shortcuts-group" :data-shortcut-group="group.id">
            <div class="pano-studio-shortcuts-group-head">
              <h3 class="pano-studio-shortcuts-title">{{ group.title }}</h3>
              <span v-if="group.aside" class="pano-studio-shortcuts-aside">{{ group.aside }}</span>
            </div>

            <template v-if="group.table">
              <table class="pano-studio-shortcuts-table">
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col" class="pano-studio-shortcuts-words">{{ group.table.head[0] }}</th>
                    <th scope="col"><kbd class="pano-studio-kbd">{{ group.table.head[1] }}</kbd><span class="pano-studio-shortcuts-plus">+</span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in group.table.rows" :key="row.gesture">
                    <th scope="row" class="pano-studio-shortcuts-gesture">
                      <svg class="pano-studio-shortcuts-mouse" :data-mouse="row.mouse" aria-hidden="true" width="16" height="22" viewBox="0 0 16 22">
                        <path v-if="row.mouse === 'left'" class="is-on" d="M1 9V8a7 7 0 0 1 7-7v8z" />
                        <path v-if="row.mouse === 'right'" class="is-on" d="M15 9V8a7 7 0 0 0-7-7v8z" />
                        <rect x="1" y="1" width="14" height="20" rx="7" />
                        <path v-if="row.mouse === 'wheel' || row.mouse === 'middle'" d="M8 1v2M8 7v2M1 9h14" />
                        <path v-else d="M8 1v8M1 9h14" />
                        <rect v-if="row.mouse === 'wheel' || row.mouse === 'middle'" class="is-on" x="6.5" y="3" width="3" height="4.5" rx="1.5" />
                      </svg>
                      {{ row.gesture }}
                    </th>
                    <td v-for="(cell, index) in row.cells" :key="index" :class="{ 'is-none': !cell }">{{ cell ? cell.label : "—" }}</td>
                  </tr>
                </tbody>
              </table>
              <p v-if="group.table.note" class="pano-studio-shortcuts-tablenote">{{ group.table.note }}</p>
            </template>

            <div v-if="group.moves" class="pano-studio-shortcuts-moves">
              <div class="pano-studio-shortcuts-movekeys">
                <template v-for="(keys, line) in group.moves.rows" :key="line">
                  <span v-for="key in keys" :key="key.cap" class="pano-studio-shortcuts-movekey">
                    <kbd class="pano-studio-kbd">{{ key.cap }}</kbd>
                    <span class="pano-studio-shortcuts-words">{{ key.name }}</span>
                  </span>
                </template>
              </div>
              <div class="pano-studio-shortcuts-movetext">
                <span>{{ group.moves.label }}</span>
                <span class="pano-studio-shortcuts-words">Hold <kbd v-for="cap in group.moves.fast.keys[0]" :key="cap" class="pano-studio-kbd">{{ cap }}</kbd> {{ group.moves.fast.label }}</span>
              </div>
            </div>

            <dl v-if="group.rows.length" class="pano-studio-shortcuts-rows">
              <div v-for="row in group.rows" :key="row.label" class="pano-studio-shortcuts-row">
                <dt class="pano-studio-shortcuts-label">{{ row.label }}</dt>
                <dd class="pano-studio-shortcuts-keys">
                  <template v-for="cap in shownKeys(row.keys).shared" :key="`shared-${cap}`">
                    <kbd class="pano-studio-kbd">{{ cap }}</kbd>
                    <span class="pano-studio-shortcuts-plus" aria-hidden="true">+</span>
                  </template>
                  <template v-for="(combo, index) in shownKeys(row.keys).alternatives" :key="index">
                    <span v-if="index" class="pano-studio-shortcuts-or" aria-hidden="true">/</span>
                    <span class="pano-studio-shortcuts-combo">
                      <template v-for="(cap, at) in combo" :key="at">
                        <span v-if="at" class="pano-studio-shortcuts-plus" aria-hidden="true">+</span>
                        <kbd class="pano-studio-kbd">{{ cap }}</kbd>
                      </template>
                    </span>
                  </template>
                  <template v-if="row.gesture">
                    <span v-if="row.keys.length" class="pano-studio-shortcuts-plus" aria-hidden="true">+</span>
                    <svg v-if="row.icon === 'point'" class="pano-studio-shortcuts-icon" aria-hidden="true" width="10" height="10" viewBox="0 0 10 10"><circle class="is-path" cx="5" cy="5" r="4" /></svg>
                    <svg v-else-if="row.icon === 'handle'" class="pano-studio-shortcuts-icon" aria-hidden="true" width="18" height="10" viewBox="0 0 18 10"><path class="is-dash" d="M1 5h10" /><circle class="is-tip" cx="14" cy="5" r="3" /></svg>
                    <svg v-else-if="row.icon === 'line'" class="pano-studio-shortcuts-icon" aria-hidden="true" width="18" height="10" viewBox="0 0 18 10"><path class="is-arc" d="M1 8c4-7 12-7 16 0" /></svg>
                    <span class="pano-studio-shortcuts-words">{{ row.gesture }}</span>
                  </template>
                </dd>
              </div>
            </dl>

            <p v-if="group.note" class="pano-studio-shortcuts-note" :class="{ 'is-alone': !group.rows.length }">{{ group.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

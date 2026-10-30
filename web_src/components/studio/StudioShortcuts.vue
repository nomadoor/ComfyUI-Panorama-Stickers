<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

// The list of shortcuts (docs/studio-ui.md "ショートカットの一覧"; its look: docs/design.md "大きさ" "ショートカットの一覧"):
// floating left of the view knobs, read only. It takes the focus when it opens, so a reader names it. A press outside it
// (but on the "?" button, which toggles it itself) closes it and still does what it does there; Escape is the shell's
// (its order, docs/studio-ui.md "閉じ方"). Presentational: `groups` (studio/shortcuts.js shortcutGroups) in, `close` out.
const props = defineProps({
  groups: { type: Array, required: true },
  // Gives the element whose presses do not count as outside (the "?" button), or null.
  toggle: { type: Function, default: () => null },
});
const emit = defineEmits(["close"]);

// A row's key combinations as shown: the modifiers they all share once, then the keys that differ, "/" between
// them ([["Shift", "Click"], ["Shift", "Drag"]] shows as Shift + Click / Drag).
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
const root = ref(null);
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
  nextTick(() => root.value?.focus({ preventScroll: true }));
});
onBeforeUnmount(() => {
  window.removeEventListener("pointerdown", onWindowDown, true);
  // The focus was in the list: it goes back to the "?" button rather than to the page.
  const active = root.value?.ownerDocument?.activeElement;
  if (!pressedOutside && active && root.value.contains(active)) props.toggle()?.focus?.({ preventScroll: true });
});
</script>

<template>
  <section
    id="pano-studio-shortcuts"
    ref="root"
    class="pano-studio-float pano-studio-shortcuts"
    role="dialog"
    aria-modal="false"
    aria-label="Shortcuts"
    tabindex="-1"
    data-shortcuts
  >
    <div class="pano-studio-shortcuts-columns">
      <div v-for="group in groups" :key="group.id" class="pano-studio-shortcuts-group" :data-shortcut-group="group.id">
        <h3 class="pano-studio-shortcuts-title">{{ group.title }}</h3>
        <p v-if="group.note" class="pano-studio-shortcuts-note">{{ group.note }}</p>
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
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

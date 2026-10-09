// The `scene` items the space view loads (#71), in the three.js chunk: the GLB or PLY of each item of
// the `scene` input, by URL (or by the key an input gives it, as a 3D file Sticker's id). A MoGe VIDEO asks for a new item every frame while it plays or scrubs, so
// loads wait in a queue and run `concurrency` at a time, the newest request first. A queued load nobody
// wants any more does not start; a running one runs to its end (it is aborted only when its input goes
// away), so playback shows every item that loads in time and skips the rest. Loaded items are kept within
// `budget` bytes in all (least recently used go first, see overBudget), and the items ahead load only while
// they fit (aheadFits); items of another input are dropped at once.
//
// load(kind, url, signal, { unlit }) resolves to { object, box, size } (size: the bytes it loaded) and rejects
// when signal aborts; dispose(item) frees a loaded item; onUpdate runs when a load ends. Kept free of three.js so
// Node tests it alone.

// The bytes of loaded items one view keeps at once. A full-resolution MoGe panorama frame (4096 x 2048) is
// about 390 MB, so a MoGe VIDEO keeps a few frames rather than running out of memory.
export const SCENE_ITEM_BUDGET = 1.5 * 1024 ** 3;

function loadedSize(entries, test = () => true) {
  return entries.reduce((total, [url, item]) => total + (item.state === "loaded" && test(url) ? item.size : 0), 0);
}

// The URLs to drop so the loaded items fit in `budget`: the least recently used loaded ones first, never
// one in `keep` (shown or wanted). entries: [url, { state, size }], least recently used first. The kept
// items stay even when they alone are over `budget`.
export function overBudget(entries, keep, budget) {
  let total = loadedSize(entries);
  const drop = [];
  for (const [url, item] of entries) {
    if (total <= budget) break;
    if (item.state !== "loaded" || keep.has(url)) continue;
    drop.push(url);
    total -= item.size;
  }
  return drop;
}

// Whether one more item may load ahead: the kept loaded items, the running loads and the new one, each
// load taken as large as the largest loaded item, fit in `budget`. Nothing loads ahead before an item has
// loaded (its size is not known), nor when an item alone is over `budget`.
export function aheadFits(entries, keep, budget) {
  const loaded = entries.filter(([, item]) => item.state === "loaded");
  if (!loaded.length) return false;
  const largest = Math.max(...loaded.map(([, item]) => item.size));
  const running = entries.filter(([, item]) => item.state === "loading").length;
  return loadedSize(entries, (url) => keep.has(url)) + (running + 1) * largest <= budget;
}

export function createSceneItems({ load, dispose, onUpdate = () => {}, concurrency = 1, budget = SCENE_ITEM_BUDGET }) {
  // By key (the item's URL, or the key an input gives it), least recently used first: { kind, src (the URL it
  // loads from), unlit, state ("queued", "loading", "loaded", "failed"), object, box, size, controller, error }.
  const items = new Map();
  // The keys wanted by the last request, the shown ones first and the ones ahead after, and the shown ones
  // (they load first).
  let wanted = [];
  let shown = new Set();
  // The keys of the items the last request drew, which trimming keeps.
  let drawn = new Set();
  // Loads that have not ended, aborted ones included, so no more than `concurrency` fetches run.
  let running = 0;
  let closed = false;
  // A key that failed (a temp file the server dropped on restart) is reported once.
  const reported = new Set();

  function drop(key) {
    const item = items.get(key);
    items.delete(key);
    if (item.state === "loading") item.controller.abort();
    if (item.state === "loaded") dispose(item);
    drawn.delete(key);
  }

  function start(key, item) {
    item.state = "loading";
    item.controller = new AbortController();
    const { signal } = item.controller;
    running += 1;
    load(item.kind, item.src, signal, { unlit: item.unlit }).then((result) => {
      if (signal.aborted || closed || items.get(key) !== item) {
        dispose({ ...item, ...result });
        return;
      }
      Object.assign(item, result, { state: "loaded", controller: null });
      trim();
      onUpdate();
    }, (error) => {
      if (signal.aborted || items.get(key) !== item) return;
      item.state = "failed";
      item.controller = null;
      item.error = String(error?.message || error);
      if (!reported.has(key)) {
        reported.add(key);
        console.error("[PanoramaStickers] scene item failed to load", item.src, error);
      }
      onUpdate();
    }).finally(() => {
      running -= 1;
      pump();
    });
  }

  function kept() {
    return new Set([...wanted, ...drawn]);
  }

  // Starts the most wanted queued loads while fewer than `concurrency` run: the shown items always, the
  // ones ahead while they fit the budget.
  function pump() {
    if (closed) return;
    for (const key of wanted) {
      if (running >= concurrency) break;
      const item = items.get(key);
      if (item?.state !== "queued") continue;
      if (!shown.has(key) && !aheadFits([...items], kept(), budget)) break;
      start(key, item);
    }
  }

  // Drops the least recently used loaded items that are not wanted or drawn until the rest fit the budget.
  // Running loads are not dropped here.
  function trim() {
    for (const key of overBudget([...items], kept(), budget)) drop(key);
  }

  // The loaded item to draw for key among the input's item keys (in item order): key's own, else the
  // nearest loaded item before it, else the nearest after it. A failed key keeps showing its neighbor.
  function nearestLoaded(keys, key) {
    const at = keys.indexOf(key);
    const loaded = (index) => items.get(keys[index])?.state === "loaded";
    for (let index = at; index >= 0; index -= 1) if (loaded(index)) return keys[index];
    for (let index = at + 1; index < keys.length; index += 1) if (loaded(index)) return keys[index];
    return null;
  }

  // The requests of one render, one per input: { kind, urls (its item keys in item order), url (the key to
  // show), prefetch (the keys to load ahead), src (the URL its items load from, when the keys are not URLs),
  // unlit (its meshes draw without light, the default) }, or a keep-only input { urls } of keys whose items stay
  // as they are without being drawn or loaded (a 3D Sticker hidden or outside its Clip range). Returns per input
  // the loaded item to draw (see nearestLoaded), or null at a frame without an item, before anything of the
  // input loaded, and for a keep-only input. Items of no input are dropped, and so is an item whose input now
  // loads it otherwise (kind, src or unlit).
  function requestMany(inputs) {
    const owner = new Map();
    const keepOnly = new Set();
    for (const input of inputs) {
      if (!input.kind) {
        for (const key of input.urls) keepOnly.add(key);
        continue;
      }
      for (const key of [...input.urls, input.url, ...(input.prefetch ?? [])]) if (key) owner.set(key, input);
    }
    const shownKeys = inputs.map((input) => input.url).filter(Boolean);
    const ahead = inputs.flatMap((input) => input.prefetch ?? []).filter(Boolean);
    wanted = [...shownKeys, ...ahead].filter((key, index, list) => list.indexOf(key) === index);
    shown = new Set(shownKeys);
    const sourceOf = (input, key) => input.src ?? key;
    const unlitOf = (input) => input.unlit !== false;
    for (const [key, item] of [...items]) {
      const input = owner.get(key);
      if (!input && keepOnly.has(key)) {
        if (item.state === "queued") drop(key);
        continue;
      }
      if (!input || item.kind !== input.kind || item.src !== sourceOf(input, key) || item.unlit !== unlitOf(input)) drop(key);
      // A queued load no longer wanted gives way to the newest request; a running one carries on.
      else if (item.state === "queued" && !wanted.includes(key)) drop(key);
    }
    for (const key of [...wanted].reverse()) {
      const input = owner.get(key);
      const item = items.get(key) ?? { kind: input.kind, src: sourceOf(input, key), unlit: unlitOf(input), state: "queued", object: null, box: null, size: 0, controller: null, error: null };
      items.delete(key);
      items.set(key, item);
    }
    const picks = inputs.map((input) => (input.kind && input.url ? nearestLoaded(input.urls, input.url) : null));
    drawn = new Set(picks.filter(Boolean));
    trim();
    pump();
    return picks.map((key) => (key && items.get(key)) || null);
  }

  // The request of one render with one input (requestMany).
  function request(input) {
    return requestMany([input])[0];
  }

  // Drops the items that are not among keys at once: the `scene` input was replaced or disconnected.
  function retain(keys) {
    for (const key of [...items.keys()]) if (!keys.includes(key)) drop(key);
  }

  function box(key) {
    const item = items.get(key);
    return item?.state === "loaded" ? item.box : null;
  }

  // Why the item of key failed to load ("HTTP 404" when its file is gone), or null.
  function error(key) {
    const item = items.get(key);
    return item?.state === "failed" ? item.error : null;
  }

  function close() {
    closed = true;
    for (const key of [...items.keys()]) drop(key);
  }

  return { request, requestMany, retain, box, error, close, items, running: () => running };
}

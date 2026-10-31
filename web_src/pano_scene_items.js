// The `scene` items the space view loads, in the three.js chunk: the GLB or PLY of each item of
// the `scene` input, by URL (or by the key an input gives it, as a 3D file Sticker's id). A MoGe VIDEO asks for a new item every frame while it plays or scrubs, so
// loads wait in a queue and run `concurrency` at a time, the newest request first. A queued load nobody
// wants any more does not start; a running one runs to its end (it is aborted only when its input goes
// away), so playback shows every item that loads in time and skips the rest. Loaded items are kept within
// `budget` bytes in all (the one used next the farthest goes first, see overBudget), and the items ahead load only while
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

// How far ahead the next use of the item at `index` of an input's `count` items is, with the playhead on the item at
// `at` (docs/threejs-spark-integration.md "読み込んだ要素は…"): while it plays, in play order around the loop (the item
// just behind the playhead is the farthest, the first items are next after the last); at rest, in time either way.
export function nextUse(index, at, count, playing) {
  return playing ? (index - at + count) % count : Math.abs(index - at);
}

// The URLs to drop so the loaded items fit in `budget`: the loaded ones whose next use is the farthest first (nextUse;
// place(url) is { index, at, count, playing } for an item of an input with a playhead, else null: an item without one
// goes first), the least recently used first among equals, never one in `keep` (shown or wanted). entries:
// [url, { state, size }], least recently used first. The kept items stay even when they alone are over `budget`.
export function overBudget(entries, keep, budget, place = () => null) {
  let total = loadedSize(entries);
  const distance = (url) => {
    const at = place(url);
    return at ? nextUse(at.index, at.at, at.count, at.playing) : Infinity;
  };
  const candidates = entries
    .filter(([url, item]) => item.state === "loaded" && !keep.has(url))
    .map(([url, item]) => ({ url, size: item.size, far: distance(url) }))
    .sort((a, b) => b.far - a.far);
  const drop = [];
  for (const { url, size } of candidates) {
    if (total <= budget) break;
    drop.push(url);
    total -= size;
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
  // By key, from the last requests: its place among its input's items, with the playhead's ({ index, at, count,
  // playing }, overBudget).
  let places = new Map();
  // From the last requests: the items to load at rest, in order ({ key, make() (its new queued item) }, see
  // requestMany's `idle`), and whether only the kept items stay (`lean`).
  let idle = [];
  let lean = false;
  // By input of the last requests: the colors it draws with (pick).
  let colors = new WeakMap();
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
      // Trimmed at once, so loads that end with no request after them (a hidden tab draws nothing) stay within the
      // budget, but keeping the item that arrived: one that arrives after the playhead passed it is the nearest loaded
      // one to draw at the next request, and would otherwise go first as the one used next the farthest (overBudget)
      // before it is drawn.
      Object.assign(item, result, { state: "loaded", controller: null });
      trim(key);
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
  // ones ahead while they fit the budget; then, at rest, the items of `idle` not loaded yet while all the loaded ones
  // with one more fit the budget.
  function pump() {
    if (closed) return;
    for (const key of wanted) {
      if (running >= concurrency) break;
      const item = items.get(key);
      if (item?.state !== "queued") continue;
      if (!shown.has(key) && !aheadFits([...items], kept(), budget)) break;
      start(key, item);
    }
    for (const { key, make } of idle) {
      if (running >= concurrency) break;
      if (items.has(key)) continue;
      const entries = [...items];
      if (!aheadFits(entries, new Set(entries.map(([url]) => url)), budget)) break;
      const item = make();
      items.set(key, item);
      start(key, item);
    }
  }

  // Drops the loaded items that are not wanted or drawn, the one used next the farthest first (overBudget, with each
  // item's place among its input's items at the last request), until the rest fit the budget. Running loads are not
  // dropped here.
  // `arrived`: a key that just loaded, kept this once too. The items drawn but no longer wanted stay on screen until the
  // next request draws again, so they count beside the budget then, not against the items the next request may still
  // want (a loop's next lap): only loads that pile up with no request after them (a hidden tab) are trimmed.
  function trim(arrived = null) {
    const keep = kept();
    let limit = lean ? 0 : budget;
    if (arrived) {
      keep.add(arrived);
      const wantedKeys = new Set(wanted);
      limit += loadedSize([...items], (key) => drawn.has(key) && !wantedKeys.has(key) && key !== arrived);
    }
    for (const key of overBudget([...items], keep, limit, (key) => places.get(key) ?? null)) drop(key);
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

  // The key of the loaded item to draw for input (see nearestLoaded), or null. An input with colors (a depth grid's
  // `color`, pano_depth_color.js withDepthColor) draws its shape and its colors from one item: its colors are asked
  // for at that item (color.at(key), once per render), and while they still show another loaded item of the input
  // (a seek of its proxy in flight), that item stays drawn instead. colorOf(input) is the colors it draws with.
  function pick(input) {
    if (!input.kind || !input.url) return null;
    const key = nearestLoaded(input.urls, input.url);
    if (!key || !input.color?.at) return key;
    const color = input.color.at(key) ?? null;
    colors.set(input, color);
    const other = color?.key;
    return other && other !== key && input.urls.includes(other) && items.get(other)?.state === "loaded" ? other : key;
  }

  // The requests of one render, one per input: { kind, urls (its item keys in item order), url (the key to
  // show), prefetch (the keys to load ahead), src (the URL its items load from, when the keys are not URLs), sources
// (key -> the URLs of the views an item of several views loads from, or what a depth grid item loads with),
  // unlit (its meshes draw without light, the default), animation (an animated 3D file's: its original's URL `src`
  // is part of what the item loads from) }, or a keep-only input { urls } of keys whose items stay
  // as they are without being drawn or loaded (a 3D Sticker hidden or outside its Clip range). A depth grid's input
  // has its colors (`color`, see pick). Returns per input the loaded item to draw (see pick), or null at a frame
  // without an item, before anything of the input loaded, and for a keep-only input. `playing`: whether the playhead
  // advances (which loaded items go first over the budget, overBudget). `idle`: at rest with the editor open, each
  // input's other items load on after the wanted ones, from the playhead in play order, while all the loaded items fit
  // the budget (docs/threejs-spark-integration.md "止まっている間の先読み"). `lean`: while ComfyUI runs a job, only the
  // shown, drawn and prefetched items stay ("生成を邪魔しない"). Items of no input are dropped, and so is an item whose
  // input now loads it otherwise (kind, src or unlit).
  function requestMany(inputs, { playing = false, idle: atRest = false, lean: leanNow = false } = {}) {
    colors = new WeakMap();
    lean = leanNow;
    places = new Map();
    for (const input of inputs) {
      const at = input.kind && input.url ? input.urls.indexOf(input.url) : -1;
      if (at < 0) continue;
      input.urls.forEach((key, index) => places.set(key, { index, at, count: input.urls.length, playing }));
    }
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
    // An item of several views loads from all of them (sources); a list made anew each render is the same source. An
    // animated 3D file (ADR 0043) loads its editor GLB with its original file ({ url, animation }).
    const sourceOf = (input, key) => {
      const base = input.sources?.[key] ?? input.src ?? key;
      return input.animation?.src ? { url: base, animation: input.animation.src } : base;
    };
    // A depth grid's source is an object of its form, also made anew each render.
    const sameSource = (a, b) => (typeof a === "object" || typeof b === "object" ? JSON.stringify(a) === JSON.stringify(b) : a === b);
    const unlitOf = (input) => input.unlit !== false;
    for (const [key, item] of [...items]) {
      const input = owner.get(key);
      if (!input && keepOnly.has(key)) {
        if (item.state === "queued") drop(key);
        continue;
      }
      if (!input || item.kind !== input.kind || !sameSource(item.src, sourceOf(input, key)) || item.unlit !== unlitOf(input)) drop(key);
      // A queued load no longer wanted gives way to the newest request; a running one carries on.
      else if (item.state === "queued" && !wanted.includes(key)) drop(key);
    }
    const newItem = (input, key) => ({ kind: input.kind, src: sourceOf(input, key), unlit: unlitOf(input), state: "queued", object: null, box: null, size: 0, controller: null, error: null });
    for (const key of [...wanted].reverse()) {
      const item = items.get(key) ?? newItem(owner.get(key), key);
      items.delete(key);
      items.set(key, item);
    }
    const wantedKeys = new Set(wanted);
    idle = atRest && !lean ? inputs.flatMap((input) => {
      const at = input.kind && input.url ? input.urls.indexOf(input.url) : -1;
      if (at < 0) return [];
      return [...input.urls.slice(at + 1), ...input.urls.slice(0, at)]
        .filter((key) => !wantedKeys.has(key))
        .map((key) => ({ key, make: () => newItem(input, key) }));
    }) : [];
    const picks = inputs.map(pick);
    drawn = new Set(picks.filter(Boolean));
    trim();
    pump();
    return picks.map((key) => (key && items.get(key)) || null);
  }

  // The request of one render with one input (requestMany).
  function request(input, options) {
    return requestMany([input], options)[0];
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

  // The colors input (of the last requests) draws with: what its color.at() gave for the item drawn, or null.
  function colorOf(input) {
    return colors.get(input) ?? null;
  }

  return { request, requestMany, colorOf, retain, box, error, close, items, running: () => running };
}

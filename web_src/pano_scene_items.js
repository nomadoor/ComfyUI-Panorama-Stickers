// The `scene` items the space view loads (#71), in the three.js chunk: the GLB or PLY of each item of
// the `scene` input, by URL. A MoGe VIDEO asks for a new item every frame while it plays or scrubs, so
// loads wait in a queue and run `concurrency` at a time, the newest request first. A queued load nobody
// wants any more does not start; a running one runs to its end (it is aborted only when its input goes
// away), so playback shows every item that loads in time and skips the rest. Loaded items are kept within
// `budget` bytes in all (least recently used go first, see overBudget), and the items ahead load only while
// they fit (aheadFits); items of another input are dropped at once.
//
// load(kind, url, signal) resolves to { object, box, size } (size: the bytes it loaded) and rejects when
// signal aborts; dispose(item) frees a loaded item; onUpdate runs when a load ends. Kept free of three.js so
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
  // By URL, least recently used first: { kind, state ("queued", "loading", "loaded", "failed"), object,
  // box, size, controller }.
  const items = new Map();
  // The URLs wanted by the last request, the most wanted first, and the one it shows (it loads first).
  let wanted = [];
  let shown = null;
  // The URL of the item the last request drew, which trimming keeps.
  let drawn = null;
  // Loads that have not ended, aborted ones included, so no more than `concurrency` fetches run.
  let running = 0;
  let closed = false;
  // A URL that failed (a temp file the server dropped on restart) is reported once.
  const reported = new Set();

  function drop(url) {
    const item = items.get(url);
    items.delete(url);
    if (item.state === "loading") item.controller.abort();
    if (item.state === "loaded") dispose(item);
    if (drawn === url) drawn = null;
  }

  function start(url, item) {
    item.state = "loading";
    item.controller = new AbortController();
    const { signal } = item.controller;
    running += 1;
    load(item.kind, url, signal).then((result) => {
      if (signal.aborted || closed || items.get(url) !== item) {
        dispose({ ...item, ...result });
        return;
      }
      Object.assign(item, result, { state: "loaded", controller: null });
      trim();
      onUpdate();
    }, (error) => {
      if (signal.aborted || items.get(url) !== item) return;
      item.state = "failed";
      item.controller = null;
      if (!reported.has(url)) {
        reported.add(url);
        console.error("[PanoramaStickers] scene item failed to load", url, error);
      }
      onUpdate();
    }).finally(() => {
      running -= 1;
      pump();
    });
  }

  function kept() {
    return new Set(drawn ? [...wanted, drawn] : wanted);
  }

  // Starts the most wanted queued loads while fewer than `concurrency` run: the shown item always, the
  // ones ahead while they fit the budget.
  function pump() {
    if (closed) return;
    for (const url of wanted) {
      if (running >= concurrency) break;
      const item = items.get(url);
      if (item?.state !== "queued") continue;
      if (url !== shown && !aheadFits([...items], kept(), budget)) break;
      start(url, item);
    }
  }

  // Drops the least recently used loaded items that are not wanted or drawn until the rest fit the budget.
  // Running loads are not dropped here.
  function trim() {
    for (const url of overBudget([...items], kept(), budget)) drop(url);
  }

  // The loaded item to draw for url among the input's item URLs (in item order): url's own, else the
  // nearest loaded item before it, else the nearest after it. A failed url keeps showing its neighbor.
  function nearestLoaded(urls, url) {
    const at = urls.indexOf(url);
    const loaded = (index) => items.get(urls[index])?.state === "loaded";
    for (let index = at; index >= 0; index -= 1) if (loaded(index)) return urls[index];
    for (let index = at + 1; index < urls.length; index += 1) if (loaded(index)) return urls[index];
    return null;
  }

  // The request of one render: kind of the input, its item URLs in item order, the URL to show and the
  // ones to load ahead. Returns the loaded item to draw (see nearestLoaded), or null at a frame without
  // an item and before anything of the input loaded.
  function request({ kind, urls, url, prefetch = [] }) {
    wanted = [url, ...prefetch].filter((item, index, list) => item && list.indexOf(item) === index);
    shown = url;
    for (const [other, item] of [...items]) {
      if (!urls.includes(other) || item.kind !== kind) drop(other);
      // A queued load no longer wanted gives way to the newest request; a running one carries on.
      else if (item.state === "queued" && !wanted.includes(other)) drop(other);
    }
    for (const next of [...wanted].reverse()) {
      const item = items.get(next) ?? { kind, state: "queued", object: null, box: null, size: 0, controller: null };
      items.delete(next);
      items.set(next, item);
    }
    drawn = url ? nearestLoaded(urls, url) : null;
    trim();
    pump();
    return drawn ? items.get(drawn) : null;
  }

  // Drops the items that are not among urls at once: the `scene` input was replaced or disconnected.
  function retain(urls) {
    for (const url of [...items.keys()]) if (!urls.includes(url)) drop(url);
  }

  function box(url) {
    const item = items.get(url);
    return item?.state === "loaded" ? item.box : null;
  }

  function close() {
    closed = true;
    for (const url of [...items.keys()]) drop(url);
  }

  return { request, retain, box, close, items, running: () => running };
}

// The `scene` items the space view loads (#71), in the three.js chunk: the GLB or PLY of each item of
// the `scene` input, by URL. Scrubbing a MoGe VIDEO asks for a new item every frame, so loads wait in a
// queue and run `concurrency` at a time, the newest request first. A queued load nobody wants any more
// does not start, and a running one is aborted when it is no longer wanted. Loaded items are kept up to
// `limit` (least recently used go first); items of another input are dropped at once.
//
// load(kind, url, signal) resolves to { object, box } and rejects when signal aborts; dispose(item)
// frees a loaded item; onUpdate runs when a load ends. Kept free of three.js so Node tests it alone.
export function createSceneItems({ load, dispose, onUpdate = () => {}, concurrency = 1, limit = 8 }) {
  // By URL, least recently used first: { kind, state ("queued", "loading", "loaded", "failed"), object,
  // box, controller }.
  const items = new Map();
  // The URLs wanted by the last request, the most wanted first.
  let wanted = [];
  let shown = null;
  let closed = false;
  // A URL that failed (a temp file the server dropped on restart) is reported once.
  const reported = new Set();

  function drop(url) {
    const item = items.get(url);
    items.delete(url);
    if (item.state === "loading") item.controller.abort();
    if (item.state === "loaded") dispose(item);
  }

  function start(url, item) {
    item.state = "loading";
    item.controller = new AbortController();
    const { signal } = item.controller;
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
    }).finally(pump);
  }

  // Starts the most wanted queued loads while fewer than `concurrency` run.
  function pump() {
    if (closed) return;
    let running = [...items.values()].filter((item) => item.state === "loading").length;
    for (const url of wanted) {
      if (running >= concurrency) break;
      const item = items.get(url);
      if (item?.state !== "queued") continue;
      start(url, item);
      running += 1;
    }
  }

  // Keeps at most `limit` items, dropping the least recently used ones that are not wanted.
  function trim() {
    for (const url of [...items.keys()]) {
      if (items.size <= limit) break;
      if (!wanted.includes(url) && url !== shown) drop(url);
    }
  }

  // The request of one render: kind of the input, its item URLs, the URL to show and the ones to load
  // ahead. Returns the loaded item to draw: the one at url, else the one shown before while url loads
  // (null at a frame without an item, or before anything of the input loaded).
  function request({ kind, urls, url, prefetch = [] }) {
    if (shown && !urls.includes(shown)) shown = null;
    wanted = [url, ...prefetch].filter((item, index, list) => item && list.indexOf(item) === index);
    for (const [other, item] of [...items]) {
      const inInput = urls.includes(other) && item.kind === kind;
      const needed = wanted.includes(other) || other === shown;
      // A queued or running load of an item no longer wanted gives way to the newest request.
      if (!inInput || (!needed && (item.state === "queued" || item.state === "loading"))) drop(other);
    }
    for (const next of [...wanted].reverse()) {
      const item = items.get(next) ?? { kind, state: "queued", object: null, box: null, controller: null };
      items.delete(next);
      items.set(next, item);
    }
    trim();
    pump();
    if (!url) return null;
    const item = items.get(url);
    if (item.state === "loaded") {
      shown = url;
      return item;
    }
    return shown ? items.get(shown) : null;
  }

  // Drops the items that are not among urls at once: the `scene` input was replaced or disconnected.
  function retain(urls) {
    for (const url of [...items.keys()]) if (!urls.includes(url)) drop(url);
    if (shown && !urls.includes(shown)) shown = null;
  }

  function box(url) {
    const item = items.get(url);
    return item?.state === "loaded" ? item.box : null;
  }

  function close() {
    closed = true;
    for (const url of [...items.keys()]) drop(url);
  }

  return { request, retain, box, close, items };
}

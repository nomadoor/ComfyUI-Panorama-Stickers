// Development diagnostics (setting "Panorama Suite › Debug › Diagnostics", off by default). The tab can
// crash on the owner's GPU while the editor or a node is in use; with the setting on, this samples once a
// second what the suite holds in memory (canvases, WebGL contexts, the three.js views, `scene` items,
// VIDEO elements, the JS heap) and what it is doing (frames, long tasks, the editor's interaction), and
// keeps the last records in localStorage. The next page load prints the previous session's last records
// to the console, and the command "Export Panorama Suite diagnostics" saves them as JSON. See
// docs/diagnostics.md.
//
// The suite makes its canvases and VIDEO elements here (createPanoCanvas, createPanoVideo) so they can be
// counted. While the setting is off nothing is tracked or sampled: the factories only create.

export const DIAGNOSTICS_SETTING_ID = "PanoramaSuite.Debug.Diagnostics";
export const DIAGNOSTICS_EXPORT_COMMAND_ID = "PanoramaSuite.Debug.ExportDiagnostics";
export const DIAGNOSTICS_STORAGE_KEY = "pano_suite.diagnostics.v1";
export const DIAGNOSTICS_PREVIOUS_KEY = "pano_suite.diagnostics.previous.v1";
// The records kept (one a second) and the most characters one session writes to localStorage.
export const DIAGNOSTICS_RECORDS = 300;
export const DIAGNOSTICS_MAX_CHARS = 200_000;
const EVENTS = 100;
const VIDEOS_LISTED = 20;
const SAMPLE_MS = 1000;
// Samples between writes to localStorage.
const SAMPLES_PER_WRITE = 2;
const MB = 1024 * 1024;

function round(value, digits = 2) {
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function defaultStorage() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

function defaultEnvironment() {
  return {
    now: () => globalThis.performance?.now?.() ?? Date.now(),
    clock: () => Date.now(),
    storage: defaultStorage,
    document: () => globalThis.document ?? null,
    setInterval: (callback, ms) => globalThis.setInterval(callback, ms),
    clearInterval: (id) => globalThis.clearInterval(id),
    addUnload: (callback) => globalThis.addEventListener?.("beforeunload", callback),
    removeUnload: (callback) => globalThis.removeEventListener?.("beforeunload", callback),
    memory: () => globalThis.performance?.memory ?? null,
    observeLongTasks(callback) {
      const Observer = globalThis.PerformanceObserver;
      if (!Observer?.supportedEntryTypes?.includes("longtask")) return null;
      const observer = new Observer((list) => callback(list.getEntries()));
      observer.observe({ type: "longtask" });
      return () => observer.disconnect();
    },
    userAgent: () => globalThis.navigator?.userAgent ?? "",
    console: globalThis.console,
    WeakRef: globalThis.WeakRef,
    FinalizationRegistry: globalThis.FinalizationRegistry,
  };
}

export function createDiagnostics(overrides = {}) {
  const env = { ...defaultEnvironment(), ...overrides };
  let enabled = false;
  let recovered = false;
  let previous = null;
  let session = null;
  let timer = 0;
  let stopLongTasks = null;
  let samples = 0;
  let lastCost = 0;

  // Tracked elements: { ref (WeakRef), label }, dropped when collected.
  const canvases = new Set();
  const videos = new Set();
  const canvasCounts = { created: 0, released: 0, collected: 0 };
  const videoCounts = { created: 0, collected: 0 };
  const canvasRegistry = env.FinalizationRegistry
    ? new env.FinalizationRegistry((entry) => {
      canvases.delete(entry);
      canvasCounts.collected += 1;
    })
    : null;
  const videoRegistry = env.FinalizationRegistry
    ? new env.FinalizationRegistry((entry) => {
      videos.delete(entry);
      videoCounts.collected += 1;
    })
    : null;
  // WebGL contexts by entry { label, lost, disposed } while not disposed.
  const contexts = new Set();
  const contextCounts = { created: 0, lost: 0, restored: 0, disposed: 0 };
  // Rare events (contexts made, lost, restored, disposed) with their time, newest last.
  const events = [];
  // What reports itself each sample: name -> () => plain data (the three.js views, the open editor).
  const sources = new Map();
  // Frames of the editor's loop and renders of the three.js views since the last sample.
  let frames = { count: 0, maxMs: 0 };
  let renders = new Map();
  let longTasks = { count: 0, maxMs: 0 };
  // The last records: { record, text } with text its JSON, oldest first.
  const ring = [];

  function logEvent(type, label, detail = undefined) {
    events.push(detail === undefined ? { t: env.clock(), type, label } : { t: env.clock(), type, label, detail });
    if (events.length > EVENTS) events.shift();
  }

  function track(set, registry, counts, element, label) {
    if (!enabled || !element || !env.WeakRef) return element;
    const entry = { ref: new env.WeakRef(element), label };
    set.add(entry);
    registry?.register(element, entry);
    counts.created += 1;
    return element;
  }

  function trackCanvas(canvas, label = "") {
    return track(canvases, canvasRegistry, canvasCounts, canvas, label);
  }

  function trackVideo(video, label = "") {
    return track(videos, videoRegistry, videoCounts, video, label);
  }

  // A canvas of width x height when both are given, else the browser's default size. offscreen makes an
  // OffscreenCanvas where the browser has one. label names where it is made in the samples.
  function createCanvas({ label = "", width, height, offscreen = false } = {}) {
    const Offscreen = globalThis.OffscreenCanvas;
    let canvas;
    if (offscreen && typeof Offscreen !== "undefined") {
      canvas = new Offscreen(width, height);
    } else {
      canvas = env.document().createElement("canvas");
      if (width !== undefined && height !== undefined) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    return trackCanvas(canvas, label);
  }

  // Frees a canvas's pixels; it can be sized again later.
  function releaseCanvas(canvas) {
    canvas.width = 0;
    canvas.height = 0;
    if (enabled) canvasCounts.released += 1;
  }

  function createVideo(documentRef = env.document(), label = "") {
    return trackVideo(documentRef?.createElement?.("video") || null, label);
  }

  // Counts the WebGL context of a canvas and its lost and restored events. Returns the call that marks it
  // disposed, made before the context is let go so that is not counted as lost.
  function watchContext(canvas, label) {
    if (!enabled || !canvas) return () => {};
    const entry = { label, lost: false, disposed: false };
    contexts.add(entry);
    contextCounts.created += 1;
    logEvent("webgl-created", label);
    const onLost = () => {
      if (entry.disposed) return;
      entry.lost = true;
      contextCounts.lost += 1;
      logEvent("webglcontextlost", label);
    };
    const onRestored = () => {
      if (entry.disposed) return;
      entry.lost = false;
      contextCounts.restored += 1;
      logEvent("webglcontextrestored", label);
    };
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);
    return () => {
      if (entry.disposed) return;
      entry.disposed = true;
      contexts.delete(entry);
      contextCounts.disposed += 1;
      logEvent("webgl-disposed", label);
    };
  }

  // Adds a source (name -> () => plain data) read each sample; returns the call that removes it.
  function addSource(name, read) {
    sources.set(name, read);
    return () => {
      if (sources.get(name) === read) sources.delete(name);
    };
  }

  // frameStart() before a frame of work and frameEnd(start) after it; while off both do nothing.
  function frameStart() {
    return enabled ? env.now() : -1;
  }

  function frameEnd(start) {
    if (start < 0 || !enabled) return;
    const ms = env.now() - start;
    frames.count += 1;
    frames.maxMs = Math.max(frames.maxMs, ms);
  }

  // The same for a render of a three.js view, by its label.
  function renderEnd(label, start) {
    if (start < 0 || !enabled) return;
    const ms = env.now() - start;
    const entry = renders.get(label) ?? { count: 0, maxMs: 0 };
    entry.count += 1;
    entry.maxMs = Math.max(entry.maxMs, ms);
    renders.set(label, entry);
  }

  function canvasStats() {
    let alive = 0;
    let sized = 0;
    let pixels = 0;
    let largest = [0, 0];
    // label -> [alive, pixels]
    const byLabel = {};
    for (const entry of canvases) {
      const canvas = entry.ref.deref();
      if (!canvas) continue;
      alive += 1;
      const area = canvas.width * canvas.height;
      if (area > 0) sized += 1;
      pixels += area;
      if (area > largest[0] * largest[1]) largest = [canvas.width, canvas.height];
      const row = byLabel[entry.label] ?? (byLabel[entry.label] = [0, 0]);
      row[0] += 1;
      row[1] += area;
    }
    return { ...canvasCounts, alive, sized, pixels, mb: round(pixels * 4 / MB, 1), largest, byLabel };
  }

  function videoStats() {
    const list = [];
    let alive = 0;
    let playing = 0;
    for (const entry of videos) {
      const video = entry.ref.deref();
      if (!video) continue;
      alive += 1;
      const isPlaying = !video.paused && !video.ended;
      if (isPlaying) playing += 1;
      if (list.length < VIDEOS_LISTED) {
        list.push({
          label: entry.label,
          playing: isPlaying,
          src: !!(video.currentSrc || video.src),
          size: [video.videoWidth || 0, video.videoHeight || 0],
          ready: video.readyState ?? 0,
          connected: !!video.isConnected,
        });
      }
    }
    return { ...videoCounts, alive, playing, list };
  }

  function sample() {
    const start = env.now();
    const memory = env.memory();
    const record = {
      t: env.clock(),
      heap: memory
        ? { used: round(memory.usedJSHeapSize / MB, 1), total: round(memory.totalJSHeapSize / MB, 1), limit: round(memory.jsHeapSizeLimit / MB, 1) }
        : null,
      canvas: canvasStats(),
      webgl: { ...contextCounts, alive: [...contexts].filter((entry) => !entry.lost).length },
      video: videoStats(),
      frame: { count: frames.count, maxMs: round(frames.maxMs), longTasks: longTasks.count, longTaskMaxMs: round(longTasks.maxMs) },
      renders: Object.fromEntries([...renders].map(([label, entry]) => [label, { count: entry.count, maxMs: round(entry.maxMs) }])),
      sources: Object.fromEntries([...sources].map(([name, read]) => [name, read()])),
      costMs: round(lastCost, 3),
    };
    frames = { count: 0, maxMs: 0 };
    renders = new Map();
    longTasks = { count: 0, maxMs: 0 };
    ring.push({ record, text: JSON.stringify(record) });
    if (ring.length > DIAGNOSTICS_RECORDS) ring.shift();
    samples += 1;
    if (samples % SAMPLES_PER_WRITE === 0) write();
    lastCost = env.now() - start;
    return record;
  }

  // The session as JSON of at most maxChars characters: the newest records that fit.
  function serialize(maxChars = DIAGNOSTICS_MAX_CHARS) {
    const head = JSON.stringify({ ...session, events }).slice(0, -1);
    let budget = maxChars - head.length - ',"records":[]}'.length;
    let first = ring.length;
    while (first > 0 && budget - ring[first - 1].text.length - 1 >= 0) {
      first -= 1;
      budget -= ring[first].text.length + 1;
    }
    return `${head},"records":[${ring.slice(first).map((entry) => entry.text).join(",")}]}`;
  }

  function write() {
    if (!session) return;
    const storage = env.storage();
    if (!storage) return;
    session.savedAt = env.clock();
    try {
      storage.setItem(DIAGNOSTICS_STORAGE_KEY, serialize());
    } catch {
      // localStorage full or blocked: the records stay in memory only.
    }
  }

  function onUnload() {
    session.closed = true;
    session.closedAt = env.clock();
    session.closedBy = "unload";
    write();
  }

  // Moves the last session's records aside and reports them once: whether it closed normally or not
  // (the tab crashed, or the browser was killed).
  function recoverPrevious() {
    if (recovered) return previous;
    recovered = true;
    const storage = env.storage();
    if (!storage) return null;
    let text = null;
    try {
      text = storage.getItem(DIAGNOSTICS_STORAGE_KEY);
      if (text === null) {
        const kept = storage.getItem(DIAGNOSTICS_PREVIOUS_KEY);
        previous = kept === null ? null : JSON.parse(kept);
        return previous;
      }
      storage.setItem(DIAGNOSTICS_PREVIOUS_KEY, text);
      storage.removeItem(DIAGNOSTICS_STORAGE_KEY);
      previous = JSON.parse(text);
    } catch {
      return previous;
    }
    const records = Array.isArray(previous?.records) ? previous.records : [];
    const last = records.slice(-5);
    if (previous?.closed) {
      env.console.info(
        `[PanoramaStickers] Diagnostics: the previous session closed normally (${previous.closedBy || "unload"}); `
        + `${records.length} records kept. Its last records:`,
        JSON.stringify(last),
      );
    } else {
      env.console.warn(
        "[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). "
        + `Started ${new Date(previous?.startedAt || 0).toISOString()}, last saved ${new Date(previous?.savedAt || records.at(-1)?.t || 0).toISOString()}; `
        + `${records.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
        JSON.stringify(last),
      );
    }
    return previous;
  }

  function setEnabled(value) {
    const next = value === true;
    recoverPrevious();
    if (next === enabled) return;
    enabled = next;
    if (enabled) {
      session = {
        v: 1,
        session: `${env.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
        startedAt: env.clock(),
        userAgent: env.userAgent(),
        closed: false,
      };
      samples = 0;
      ring.length = 0;
      stopLongTasks = env.observeLongTasks((entries) => {
        for (const entry of entries) {
          longTasks.count += 1;
          longTasks.maxMs = Math.max(longTasks.maxMs, entry.duration);
        }
      });
      env.addUnload(onUnload);
      timer = env.setInterval(sample, SAMPLE_MS);
      write();
      return;
    }
    env.clearInterval(timer);
    timer = 0;
    stopLongTasks?.();
    stopLongTasks = null;
    env.removeUnload(onUnload);
    session.closed = true;
    session.closedAt = env.clock();
    session.closedBy = "disabled";
    write();
  }

  // Everything kept, for the exported JSON: this session's records (all of them, not cut to the
  // localStorage size) and the previous session's.
  function exportData() {
    return {
      exportedAt: env.clock(),
      enabled,
      current: session ? { ...session, events: [...events], records: ring.map((entry) => entry.record) } : null,
      previous,
    };
  }

  // Saves exportData() as a JSON file through a download link.
  function download() {
    const documentRef = env.document();
    const blob = new Blob([JSON.stringify(exportData(), null, 1)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = documentRef.createElement("a");
    link.href = url;
    link.download = `panorama-suite-diagnostics-${new Date(env.clock()).toISOString().replace(/[:.]/g, "-")}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  return {
    get enabled() {
      return enabled;
    },
    createCanvas,
    releaseCanvas,
    trackCanvas,
    createVideo,
    trackVideo,
    watchContext,
    addSource,
    frameStart,
    frameEnd,
    renderEnd,
    sample,
    serialize,
    recoverPrevious,
    setEnabled,
    exportData,
    download,
  };
}

export const diagnostics = createDiagnostics();

export const createPanoCanvas = diagnostics.createCanvas;
export const releasePanoCanvas = diagnostics.releaseCanvas;
export const trackPanoCanvas = diagnostics.trackCanvas;
export const createPanoVideo = diagnostics.createVideo;
export const trackPanoVideo = diagnostics.trackVideo;
export const addDiagnosticsSource = diagnostics.addSource;
export const diagnosticsFrameStart = diagnostics.frameStart;
export const diagnosticsFrameEnd = diagnostics.frameEnd;

// Wraps a three.js view (pano_three_view.js createThreeView) so its WebGL context, renderer.info, `scene`
// items and Spark renderers (their generates and sorts since the last sample, pano_spark_views.js) are
// sampled under `label`, and its renders are timed.
export function watchThreeView(view, label) {
  const disposeContext = diagnostics.watchContext(view.canvas, label);
  const removeSource = diagnostics.addSource(`three.${label}`, () => view.stats());
  const timed = (render) => (input) => {
    const start = diagnostics.frameStart();
    const result = render(input);
    diagnostics.renderEnd(label, start);
    return result;
  };
  return {
    ...view,
    render: timed(view.render),
    renderUnwrap: timed(view.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(options) {
      view.dispose(options);
      if (options?.lost) return;
      removeSource();
      disposeContext();
    },
  };
}

// The ComfyUI setting that turns the diagnostics on. ComfyUI calls onChange with the saved value when it
// registers the setting.
export const DIAGNOSTICS_SETTING = {
  id: DIAGNOSTICS_SETTING_ID,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second "
    + "to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: false,
  onChange: (value) => diagnostics.setEnabled(value === true),
};

// The command (Extensions › Panorama Suite menu and the command palette) that saves the records as JSON.
export const DIAGNOSTICS_EXPORT_COMMAND = {
  id: DIAGNOSTICS_EXPORT_COMMAND_ID,
  label: "Export Panorama Suite diagnostics",
  function: () => diagnostics.download(),
};

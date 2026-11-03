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
  // GPU passes since the last sample, by label: { count, ms, maxMs, draws, triangles } (gpuStart/gpuEnd), the
  // timer queries still waiting for their result, the pass under way (its draws are counted), and how the time was
  // taken ("query": EXT_disjoint_timer_query_webgl2, "finish": gl.finish() around the pass, null: none yet).
  let gpu = new Map();
  const gpuPending = [];
  let gpuPass = null;
  let gpuTimer = null;
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

  function gpuEntry(label) {
    let entry = gpu.get(label);
    if (!entry) gpu.set(label, entry = { count: 0, ms: 0, maxMs: 0, draws: 0, triangles: 0 });
    return entry;
  }

  // A pass whose time came: its time, draws and triangles go to its label together, so a sample's numbers are of the
  // same passes.
  function gpuAdd({ label, draws, triangles }, ms) {
    const entry = gpuEntry(label);
    entry.count += 1;
    entry.ms += ms;
    entry.maxMs = Math.max(entry.maxMs, ms);
    entry.draws += draws;
    entry.triangles += triangles;
  }

  // The timer queries whose results came, oldest first. A query of a lost context (an editor closed) never answers:
  // it is dropped. GPU_DISJOINT_EXT resets when read, so it is read once: a disjoint poll drops what it took.
  function gpuPoll() {
    const taken = [];
    let disjoint = false;
    while (gpuPending.length) {
      const pass = gpuPending[0];
      const { gl, ext, query } = pass;
      if (gl.isContextLost?.()) {
        gpuPending.shift();
        continue;
      }
      if (!gl.getQueryParameter(query, gl.QUERY_RESULT_AVAILABLE)) break;
      gpuPending.shift();
      if (!taken.length) disjoint = !!gl.getParameter(ext.GPU_DISJOINT_EXT);
      taken.push({ pass, ms: gl.getQueryParameter(query, gl.QUERY_RESULT) / 1e6 });
      gl.deleteQuery(query);
    }
    if (!disjoint) for (const { pass, ms } of taken) gpuAdd(pass, ms);
  }

  // A GPU pass of the WebGL2 context `gl` under `label` starts: its GPU time (a timer query, else gl.finish() around
  // it) and its draws are counted until gpuEnd(pass). Nothing while off, or while another pass is under way.
  function gpuStart(gl, label) {
    if (!enabled || !gl || gpuPass || gl.isContextLost?.()) return null;
    gpuPoll();
    const ext = gl.getExtension?.("EXT_disjoint_timer_query_webgl2") ?? null;
    const pass = { gl, ext, label, query: null, start: 0, draws: 0, triangles: 0 };
    if (ext && gpuPending.length < 64) {
      gpuTimer = "query";
      pass.query = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, pass.query);
    } else {
      gpuTimer ??= "finish";
      gl.finish();
      pass.start = env.now();
    }
    gpuPass = pass;
    return pass;
  }

  function gpuEnd(pass) {
    if (!pass || gpuPass !== pass) return;
    gpuPass = null;
    if (pass.query) {
      pass.gl.endQuery(pass.ext.TIME_ELAPSED_EXT);
      gpuPending.push(pass);
    } else {
      pass.gl.finish();
      gpuAdd(pass, env.now() - pass.start);
    }
  }

  // A draw of `vertices` vertices (mode TRIANGLES counts vertices / 3 triangles) times `instances`, in the pass under way.
  function gpuDraw(mode, vertices, instances = 1) {
    if (!gpuPass) return;
    gpuPass.draws += 1;
    if (mode === 4) gpuPass.triangles += Math.floor(vertices / 3) * instances;
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
    let loaded = 0;
    let playing = 0;
    for (const entry of videos) {
      const video = entry.ref.deref();
      if (!video) continue;
      alive += 1;
      // An element with a src holds a decoder; one released (src removed and load()ed) waits only to be collected.
      const src = !!(video.currentSrc || video.src);
      if (src) loaded += 1;
      const isPlaying = !video.paused && !video.ended;
      if (isPlaying) playing += 1;
      if (list.length < VIDEOS_LISTED) {
        list.push({
          label: entry.label,
          playing: isPlaying,
          src,
          size: [video.videoWidth || 0, video.videoHeight || 0],
          ready: video.readyState ?? 0,
          connected: !!video.isConnected,
        });
      }
    }
    return { ...videoCounts, alive, loaded, playing, list };
  }

  function gpuSample() {
    gpuPoll();
    const passes = Object.fromEntries([...gpu].map(([label, e]) => [label, { count: e.count, ms: round(e.ms), maxMs: round(e.maxMs), draws: e.draws, triangles: e.triangles }]));
    return { timer: gpuTimer, waiting: gpuPending.length, passes };
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
      gpu: gpuSample(),
      sources: Object.fromEntries([...sources].map(([name, read]) => [name, read()])),
      costMs: round(lastCost, 3),
    };
    frames = { count: 0, maxMs: 0 };
    renders = new Map();
    gpu = new Map();
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
    // A pass under way or waiting is let go (its context may be gone by the next turn on).
    gpuPass = null;
    for (const { gl, query } of gpuPending.splice(0)) if (!gl.isContextLost?.()) gl.deleteQuery(query);
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
    gpuStart,
    gpuEnd,
    gpuDraw,
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
// Each render is also a GPU pass (docs/diagnostics.md `gpu`) named by the view, the kind of render and its owner
// (`editor.render.studio-stage+lens`, `editor.erp.studio-live-erp`), with its draws counted on the view's context.
export function watchThreeView(view, label) {
  const disposeContext = diagnostics.watchContext(view.canvas, label);
  const removeSource = diagnostics.addSource(`three.${label}`, () => view.stats());
  // The view's context while its draws are counted: only while the diagnostics are on; off, it lets go of them once.
  let gl = null;
  const timed = (render, kind) => (input) => {
    const start = diagnostics.frameStart();
    if (diagnostics.enabled) gl ??= countedContext(view.canvas, true);
    else if (gl) gl = countedContext(view.canvas, false);
    const owner = typeof input?.owner === "string" ? input.owner : "-";
    const pass = diagnostics.gpuStart(gl, `${label}.${kind}.${owner}${input?.lens ? "+lens" : ""}`);
    try {
      return render(input);
    } finally {
      diagnostics.gpuEnd(pass);
      diagnostics.renderEnd(label, start);
    }
  };
  return {
    ...view,
    render: timed(view.render, "render"),
    renderUnwrap: timed(view.renderUnwrap, "unwrap"),
    renderLiveErp: timed(view.renderLiveErp, "erp"),
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

// The contexts whose draws are counted, with their own draw functions.
const countedContexts = new WeakMap();
const DRAWS = {
  drawArrays: (a) => diagnostics.gpuDraw(a[0], a[2]),
  drawElements: (a) => diagnostics.gpuDraw(a[0], a[1]),
  drawArraysInstanced: (a) => diagnostics.gpuDraw(a[0], a[2], a[3]),
  drawElementsInstanced: (a) => diagnostics.gpuDraw(a[0], a[1], a[4]),
};

// The WebGL2 context of `canvas` (already made by the view) with its draws counted into the GPU pass under way while
// `on`, or null; when not `on`, a context counted before gets its own draw functions back.
export function countedContext(canvas, on) {
  const gl = canvas?.getContext?.("webgl2") ?? null;
  if (!gl) return null;
  const own = countedContexts.get(gl);
  if (!on) {
    if (own) {
      for (const [name, draw] of Object.entries(own)) gl[name] = draw;
      countedContexts.delete(gl);
    }
    return null;
  }
  if (own) return gl;
  const kept = {};
  for (const [name, count] of Object.entries(DRAWS)) {
    const draw = gl[name];
    if (typeof draw !== "function") continue;
    kept[name] = draw;
    gl[name] = function (...args) {
      count(args);
      return draw.apply(this, args);
    };
  }
  countedContexts.set(gl, kept);
  return gl;
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

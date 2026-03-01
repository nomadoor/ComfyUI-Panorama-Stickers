# Preview Regression Notes

This file is the permanent regression log for node preview sizing and interaction.

## Current Baseline (2026-02-28)

This file contains historical incidents, including superseded approaches.
The current stable baseline is:

1. Public preview node is `PanoramaPreview` only.
2. `PanoramaPreview` uses the dedicated runtime in `web/pano_preview_previewnode.js`.
3. `PanoramaCutout` remains on the shared runtime in `web/pano_preview_runtime.js`.
4. Editor entry is widget-only for `PanoramaStickers`, `PanoramaCutout`, and `PanoramaPreview`.
5. Embedded editor buttons inside preview surfaces are not part of the stable design.
6. Runtime `node.size` correction is not an acceptable fix for live preview layout.
7. On Node2, `PanoramaPreview` wheel capture requires both:
   - `data-capture-wheel="true"` on the DOM widget root
   - actual focus inside that same root (current implementation: `tabindex="0"` + focus on pointerdown)
8. For Node2 wheel issues, do not start by moving listeners between `root/canvas/wrap`.
   First verify the frontend wheel handoff contract (`data-capture-wheel` + focus) is satisfied.

## Incident ID Convention
- Format: `PREVIEW-YYYYMMDD-XX`
- Scope: Preview/Cutout related regressions only.
- Rule: one incident ID per independently reproducible failure.
- Reference style: include `Incident ID:` line in each section header block.

## Incident Index
- `PREVIEW-20260224-01` : Evidence-first debugging failure (prediction-driven regressions)
- `PREVIEW-20260224-02` : Stickers preview locks after expand (legacy)
- `PREVIEW-20260224-03` : Legacy fixed-height recurrence with DOM wrapper style
- `PREVIEW-20260224-04` : Legacy stickers hardening
- `PREVIEW-20260224-05` : Final hardening with probe + rebind monitor
- `PREVIEW-20260224-06` : Backend duplication + node.size normalization failure
- `PREVIEW-20260224-07` : Architecture reset (Node2 main + Legacy split)
- `PREVIEW-20260224-08` : Preview node split and fail-safe attach
- `PREVIEW-20260224-09` : External Preview3D toast misattribution (`Unable to get model file path`)
- `PREVIEW-20260224-10` : Cutout black-screen cache poisoning (false-positive live draw)
- `PREVIEW-20260225-11` : Single preview node integration hardening
- `PREVIEW-20260227-12` : PanoramaPreview invisible/height-zero unresolved after hypothesis patches
- `PREVIEW-20260227-13` : Evidence-first instrumentation and verification matrix for PanoramaPreview
- `PREVIEW-20260227-14` : V2 runtime rewrite regressed real previews (Jules branch)
- `PREVIEW-20260228-15` : Node2 wheel contract speculation failed in dedicated Preview runtime

## 2026-02-28: Node2 wheel contract speculation failed in dedicated Preview runtime

Incident ID: `PREVIEW-20260228-15`

### Symptom
- `PanoramaPreview` on Node2 still does not respond to hover wheel.
- FOV does not change on the node preview, even though the modal preview works.
- Multiple attempts to "restore old standalone wheel behavior" did not fix the actual user-visible bug.

### Failed hypotheses (removed)
1. Restoring old standalone wheel helpers inside `web/pano_preview_previewnode.js`
   - Added local `stopCanvasEventUnlessResizeGrip(...)`
   - Reintroduced `lockGraphViewportSnapshot()` / `restoreGraphViewportSnapshot()`
   - Reintroduced `wrap + canvas` wheel listeners
   - Result: user reported no change

2. Adding extra DOM structure and wheel capture points
   - Added `wrap` container under `root`
   - Added host-level wheel binding on `this.root.parentElement`
   - Added `data-capture-wheel` / `tabindex` speculation
   - Result: user reported no change

3. Treating the problem as a local listener-placement bug
   - `root` vs `wrap` vs `canvas` vs host wrapper was changed repeatedly
   - Result: this did not identify the real integration point

### Confirmed lesson
- "Old standalone contract" is not automatically portable to the dedicated Preview runtime.
- Reintroducing old wheel code without proving the actual Node2 event path only adds noise.
- Failed wheel experiments must be removed instead of left in the runtime.

### Hard rule added
- Do not keep speculative Node2 wheel capture code in `web/pano_preview_previewnode.js` after a failed user repro.
- If a wheel fix does not change user-visible behavior, remove it and log the failure.
- The next attempt must start from actual frontend event flow evidence, not from standalone parity assumptions.

## 2026-02-25: Single preview node integration hardening

Incident ID: `PREVIEW-20260225-11`

### Symptom
- Preview refactor後に、ボタン重複・hook重複・描画更新不整合が同時発生しやすくなった。
- `computeSize` が自己参照になると、Run後にノード縦サイズが増殖する。
- teardown漏れ時に `onDraw*` / `onMouse*` の上書きが残留し、再追加で不安定化する。

### Guardrails (Do Not Break)
- Public preview nodeは `PanoramaPreview` 1系統のみ。Legacy公開名を戻さない。
- `computeSize` は最小必要サイズのみ返す。`node.size[1]` を算出に使わない。
- node lifecycle patchは必ずidempotent化し、double-wrapを禁止する。
- teardownで `__panoDomRestore` / `__panoLegacyRestore` を必ず実行し、hookを元に戻す。
- Stickers内previewは既定OFFだが、ON時はPreviewと同一runtime/render経路を使う。

### Quick Verification Commands
```bash
node --check web/pano_node_preview.js
node --check web/pano_preview_runtime.js
node --check web/pano_preview_hooks.js
node --check web/pano_editor.js
rg -n "computeSize|node.size\\?\\[1\\]|__panoLegacyPreviewHooked|__panoDomRestore|__panoLegacyRestore" web/pano_preview_runtime.js web/pano_node_preview.js
```

## 2026-02-27: PanoramaPreview invisible/height-zero unresolved after hypothesis patches

Incident ID: `PREVIEW-20260227-12`

### User-reported symptom (not resolved)
- `Panorama Preview` node appears at minimal size.
- Node live-preview area is missing or height becomes `0`.
- Modal button is effectively undiscoverable due to tiny node size.
- Same workflow pain recurs across frontend combinations (legacy vs node2).

### Patches attempted in this incident (all failed against user repro)
1. Standalone size guard added in runtime attach path:
   - Added `ensureStandalonePreviewVisibleSize(node)` in `web/pano_preview_runtime.js`.
   - Called from `attachStandalonePreviewUnified`, `attachStandalonePreviewDom`, `attachStandalonePreviewLegacy`.
   - Intent: force minimum visible size when node is tiny.
   - Result: user reports unchanged (`node still small`, `preview still absent`).

2. Standalone preview node name matching widened in editor registration:
   - Added `isStandalonePreviewNodeName(...)` in `web/pano_editor.js`.
   - Matched normalized names starting with `panoramapreview`.
   - Intent: catch name variants such as `(Node 2.0)`/`_Legacy`.
   - Result: user reports unchanged.

3. Early size normalization added before standalone attach in wrapper:
   - Added `ensureStandalonePreviewNodeSize(node)` in `web/pano_node_preview.js`.
   - Applied in both direct and lifecycle-attach code paths.
   - Intent: guarantee node starts large enough before DOM/legacy preview wiring.
   - Result: user reports unchanged.

### Confirmed process failure in this incident
- Hypothesis patches were applied before capturing runtime evidence from the failing session.
- No decisive attach-path evidence (`route.attach`, bind/teardown parity, widget mount dimensions) was recorded before patching.

### Hard rule added
- Do not ship additional PanoramaPreview behavior patches for this symptom without first capturing failing-session evidence for:
  1. actual `nodeData.name` seen by `beforeRegisterNodeDef`
  2. whether `installStandalonePreviewNode` executes
  3. whether `attachStandalonePreviewUnified` executes
  4. first-frame DOM mount dimensions (`root/wrap/canvas`)

### Next mandatory evidence capture (before next patch)
1. Add temporary logs at:
   - `web/pano_editor.js` `beforeRegisterNodeDef` (`nodeData.name`)
   - `web/pano_editor.js` `installStandalonePreviewNode` entry
   - `web/pano_preview_runtime.js` `attachStandalonePreviewUnified` entry
2. Reproduce once and store logs in this file.
3. Only then patch one layer at a time.

## 2026-02-27: Evidence-first instrumentation and verification matrix for PanoramaPreview

Incident ID: `PREVIEW-20260227-13`

### What changed
- Added debug-only instrumentation points:
  - `beforeRegisterNodeDef` node identity log (`nodeData.name`, `display_name`, `nodeType.title`, `comfyClass`)
  - standalone preview installer entry log
  - `attachStandalonePreviewUnified` entry log
  - DOM mount probe per-frame size log (`root/wrap/canvas` width/height)
  - teardown reason field in `teardown.done`
- Preview node identity matching source was unified via shared helper:
  - `web/pano_preview_identity.js`

### Manual Verification Matrix (required)
1. Frontend: bundled(default) / Action: add new `Panorama Preview` / Expect:
   - preview button visible
   - preview area non-zero height
   - logs include `register.node`, `install.standalone_preview_node`, `attach.unified.begin`
2. Frontend: bundled(default) / Action: workflow reload with existing node / Expect:
   - attach count remains one per node
   - no duplicate `bind` without matching `teardown`
3. Frontend: bundled(default) / Action: execute upstream image then run / Expect:
   - preview remains visible
   - no `dom_probe_timeout` unless DOM unavailable
4. Frontend: legacy (`--front-end-version Comfy-Org/ComfyUI_legacy_frontend@latest`) / Action: add new node / Expect:
   - standalone preview visible via legacy path
   - no dependency on prior Node2 attach sequence

### Static Gate
```bash
node --check web/pano_preview_identity.js
node --check web/pano_editor.js
node --check web/pano_node_preview.js
node --check web/pano_preview_runtime.js
rg -n "register\\.node|install\\.standalone_preview_node|attach\\.unified\\.begin|probe\\.frame|teardown\\.done" web/pano_editor.js web/pano_preview_runtime.js
```

### Incident Template (reuse for future)
```text
## YYYY-MM-DD: <title>
Incident ID: PREVIEW-YYYYMMDD-XX
Symptom:
Observed evidence:
Confirmed root cause:
Patch scope (single layer):
Verification:
Regression guardrails:
```

## 2026-02-27: V2 runtime rewrite regressed real previews (Jules branch)

Incident ID: `PREVIEW-20260227-14`

### Symptom
- Branch `Refactor PanoramaPreview to V2 Runtime` (`c2ed0a4`) and follow-up `Refactor PanoramaPreview to V2 Runtime (Improved)` (`bd5cc78`) introduced `web/pano_preview_v2.js`.
- User verification after pull: `PanoramaPreview` still had no visible node preview.
- User verification after pull: `PanoramaCutout` also lost its visible preview area.
- Result: the rewrite was not an isolated Preview fix; it regressed an already-working Cutout path from the user's perspective.

### Confirmed implementation risks observed in review
1. First V2 commit (`c2ed0a4`) shipped with missing functional pieces:
   - DOM button click handler was a placeholder.
   - Legacy path was placeholder-only, not a real preview.
   - `attachPreviewNode` did not pass existing runtime options (`onOpen`, button text, etc.).
2. Improved V2 commit (`bd5cc78`) filled some gaps, but the user still reported "no preview" and Cutout regression.
3. V2 introduced a new preview runtime without proving parity against existing Cutout behavior before switching PanoramaPreview wiring.

### Root cause class
- "Rewrite first, parity later" on a preview surface that already had frontend-specific layout edge cases.
- The branch changed the runtime attachment contract without a mandatory real-UI verification gate for:
  1. PanoramaPreview visible on Node2
  2. PanoramaPreview visible on Legacy
  3. Cutout unchanged on Node2
  4. Cutout unchanged on Legacy

### Hard rule added
- Do not replace `PanoramaPreview` runtime with a new file unless all four manual checks above pass first.
- Do not merge a Preview rewrite if the user reports Cutout visibility regression, even if static checks and Python tests pass.
- Static validation (`node --check`, Python unit tests) is not evidence of frontend preview correctness.

### Required verification before any future rewrite merge
1. New `PanoramaPreview` node on bundled frontend:
   - preview region visible immediately
   - modal button visible and clickable
2. New `PanoramaPreview` node on Legacy frontend:
   - preview region visible immediately
   - drag and wheel both work
3. Existing `PanoramaCutout` node on bundled frontend:
   - visible preview unchanged
4. Existing `PanoramaCutout` node on Legacy frontend:
   - visible preview unchanged

## 2026-02-24: Stickers preview locks after expand (legacy)

Incident ID: `PREVIEW-20260224-02`

### Symptom
- After increasing node height once, the node cannot be reduced again.
- DOM preview wrapper can end up with very large fixed height (example observed: `height: 1191px`).
- In DevTools, stickers canvas may appear frozen at old dimensions if sizing loop breaks.

### Confirmed Root Cause
- `widget.computeSize` referenced `node.size[1]` and computed available height from current node height.
- That creates a self-locking loop in legacy layout flow: the widget requests a large height and then prevents shrinking.

### Guardrails (Do Not Break)
- Do not reference `node.size[1]` inside `computeSize`.
- `computeSize` must return minimum required size only.
- Do not set fixed `min-height` values for preview wrappers (e.g. `100px`).
- Do not set `max-height` on preview wrappers.
- Do not reassign preview DOM height from JS sync logic.
- Never consume pointer/wheel events in the node resize-grip area (bottom-right corner).

### Current Safe Rules
- Node size is user-owned state; preview follows passively.
- DOM layout uses `height:100%`, `flex:1 1 auto`, `min-height:0`.
- Stickers canvas intrinsic size follows `canvas.clientWidth/clientHeight` (`* devicePixelRatio`, clamped).
- Stickers: `object-fit: cover`, Cutout: `object-fit: contain`.

### Regression Checklist
1. Legacy stickers: expand and shrink repeatedly (10x) without lock.
2. Node2 stickers: preview visible, drag + wheel FOV + reset work.
3. Cutout: contain behavior and resize behavior unchanged.
4. DevTools: stickers canvas width/height changes with node resize; no persistent giant wrapper height.

### Quick Verification Commands
```bash
node --check web/pano_node_preview.js
rg -n "computeSize = function|node.size\\?\\[1\\]|min-height|max-height|style.height" web/pano_node_preview.js
```

## 2026-02-24: Legacy fixed-height recurrence with DOM wrapper style

Incident ID: `PREVIEW-20260224-03`

### Observation
- Legacy still showed fixed-height behavior in some sessions.
- DevTools sample included a fixed-position wrapper with a large explicit height:
  - `position: fixed`
  - `height: 1191px`
  - `transform: scale(...)`

### What this implies
- The issue may come from parent DOMWidget container layout state, not only preview canvas intrinsic size.
- We need runtime snapshots of parent wrappers when the bug reproduces.
- `computeSize` logs must be checked with `mode`; cutout logs are not evidence for stickers failure.
- Always confirm `chosenPath` (`dom` / `legacy_draw`) before concluding root cause.
- Frontend path decision must be version-based; do not infer frontend type from `app.ui.settings`.

### Debug Logging Added
- `web/pano_node_preview.js` now supports runtime debug logging.
- Enable either one:
  - Browser console: `window.__PANO_PREVIEW_DEBUG__ = true`
  - Or: `localStorage.setItem("panoPreviewDebug", "1")`
- Verbose mode (includes cutout `computeSize` logs):
  - Browser console: `window.__PANO_PREVIEW_DEBUG_VERBOSE__ = true`
  - Or: `localStorage.setItem("panoPreviewDebugVerbose", "1")`
- Disable:
  - `window.__PANO_PREVIEW_DEBUG__ = false`
  - `localStorage.removeItem("panoPreviewDebug")`
  - `window.__PANO_PREVIEW_DEBUG_VERBOSE__ = false`
  - `localStorage.removeItem("panoPreviewDebugVerbose")`

### Logged signals
- `attach.begin` includes: `nodeId`, `nodeType`, `mode`, `legacyFrontend`, `chosenPath`, `reason`, `frontendVersionRaw`
- `computeSize` input/output and current `node.size`
- `mode` (`stickers` / `cutout`) on each `computeSize` log
- Snapshot of `root / wrap / canvas`
- Snapshot of parent wrappers (`root.parentElement`, grand parent)
- Canvas intrinsic size (`canvas.width/height`)
- Legacy stickers path logs:
  - `legacy.attach`
  - `legacy.draw` (`previewRect` + `node.size`)
  - `legacy.mousedown` (`gripHit` and pointer position)

## 2026-02-24: Legacy stickers hardening

Incident ID: `PREVIEW-20260224-04`

### Decision
- In legacy frontend runtime, stickers preview must use `onDrawForeground` path only.
- DOMWidget overlay is disabled for stickers on legacy to avoid resize-grip interception and fixed-height wrapper regressions.
- Cutout remains on DOMWidget path.
- Frontend routing source of truth:
  - Use `window.__COMFYUI_FRONTEND_VERSION__` semver validity only.
  - If valid semver => `dom`.
  - If missing/invalid => `legacy_draw`.
  - `window.__PANO_PREVIEW_FORCE_PATH__` can override for debugging.
  - Do not use `app.ui.settings` or `app.extensionManager` as frontend-type detector.

## 2026-02-24: Final hardening with probe + rebind monitor

Incident ID: `PREVIEW-20260224-05`

### Why
- Version-based routing alone was insufficient.
- We need runtime proof (probe/health) and safe rebind on frontend switch.

### Rules
- Stickers starts with DOM path (unless forced), then validates by probe.
- If probe fails, fallback once to `legacy_draw_auto`.
- If DOM health degrades (`inWidth<=0` + null/stagnant size counters), fallback once.
- Frontend signature change triggers debounced rebind (`1 switch => 1 rebind`).
- Teardown must be idempotent and centralized (`teardownPreview`).
- Cutout is isolated from monitor/probe/fallback logic.

### Logs to trust first
- `attach.begin`: `signature`, `generation`, `chosenPath`, `pathReason`
- `probe.result`: `dom_ok` / `dom_fail`
- `path.switch`: `from`, `to`, `reason`

### Repro capture protocol
1. Enable debug flag.
2. Reproduce legacy: expand node then try to shrink.
3. Confirm `attach.begin` has `mode: "stickers"` and `chosenPath: "legacy_draw"`.
4. Copy `PANO_PREVIEW` logs from console.
5. If needed, enable verbose and collect cutout logs separately.
6. Record the wrapper style line when fixed-height appears.

## 2026-02-24: Backend duplication + node.size normalization failure

Incident ID: `PREVIEW-20260224-06`

### Confirmed failure pattern
- `legacy.draw` was active while DOM preview path remained attached for the same node.
- Result: one node had two preview canvases, and one path could keep fixed-height behavior.
- `nodeSize: null` appeared even when size existed, because code assumed `Array.isArray(node.size)` only.

### Permanent guardrails
- Enforce single active backend (`dom` or `legacy_draw`) per node.
- Always run centralized idempotent teardown before switching backend.
- Do not treat `node.size` as array-only; read via normalization helper.
- Cutout must never inherit stickers fallback/health fallback behavior.

### First logs to verify
- `attach.begin`: `activeBackend`, `targetBackend`, `chosenPath`, `pathReason`
- `teardown.done`: `removedDom`, `removedLegacy`
- `probe.result`: `dom_ok` / `dom_fail`

## 2026-02-24: Architecture reset (Node2 main + Legacy split)

Incident ID: `PREVIEW-20260224-07`

### Hard rules
- `PanoramaStickers` on legacy must not call preview attach at all.
- `PanoramaStickers` node preview is disabled on all frontends. Use editor button only.
- Do not "attach then return"; branch at registration level and skip preview attach function entirely.
- Legacy standalone preview must not use DOMWidget; canvas draw only.
- `PanoramaCutout` preview path is isolated from stickers fallback logic.
- Frontend detection branches are removed from preview install flow.

### Scope rules
- Goal is "safe and non-breaking", not full live migration after runtime frontend switch.
- If frontend is switched during runtime, recovery by reload is acceptable.
- Node2-only preview node may show fallback text in legacy frontend.

### Regression checks added
1. Open/close preview modal repeatedly and verify listener count does not grow.
2. After workflow reload, `PanoramaPreview` attaches once and does not double-bind.
3. `PanoramaStickers` never mounts node preview on any frontend.
4. `Panorama Preview(Node 2.0)` DOM attach failure shows static label and does not crash.

## 2026-02-24: Preview node split and fail-safe attach

Incident ID: `PREVIEW-20260224-08`

### Confirmed causes
- Frontend detection itself became regression source.
- Standalone preview attach was skipped when initialization depended on `widgets` timing.

### Mandatory rules
- Do not use frontend detection for preview routing.
- Route by the single public node contract:
  - `PanoramaPreview` -> dedicated preview runtime
- `PanoramaPreview` DOM attach failure must degrade to static label and stop safely.
- Standalone preview install must not depend on `this.widgets` existence.

### Triage checklist
1. Confirm `PanoramaStickers` has no node preview attach call path.
2. Confirm `PanoramaPreview` install runs on create/configure/add even when widgets are absent.
3. Confirm DOM attach failure path shows label and no exception loop.

## 2026-02-24: Evidence-first debugging failure (prediction-driven regressions)

Incident ID: `PREVIEW-20260224-01`

### Observed Facts
- Multiple concerns were changed simultaneously in one pass (interaction UX, image resolve, cache behavior, and logging).
- Repeated symptom pattern:
  - Preview node did not reflect new ERP input after Run until user interaction.
  - Cutout node thumbnail did not refresh until editor was opened.
  - Black-screen/flicker regressions reappeared during fixes.
- Logs could show "resolve/load succeeded" while actual node drawing still failed.

### Confirmed Root Causes
- Prediction-driven patch chaining collapsed causal isolation.
- Resolve layer, draw layer, and input UX layer were modified together.
- Runtime exceptions were introduced by invalid debug snippets (undefined references).
- Run-time redraw contract (`onExecuted` / `onConnectionsChange`) was not guaranteed in standalone preview paths.

### Hard Prohibitions
- Do not modify multiple layers in one patch based only on hypothesis.
- Do not add debug code that references non-local/undefined symbols.
- Do not introduce URL normalization/cache-busting without direct evidence.
- Do not patch before fixing reproduction conditions and observation points.

### Evidence-first Protocol (Mandatory)
1. Fix reproduction conditions first (single workflow, single node path).
2. Fix observation points next (`resolve`, `load`, `draw`).
3. Change exactly one layer per patch.
4. Re-verify with the same reproduction.
5. Move to the next layer only after previous acceptance is met.

Required logs per iteration:
- `image-resolve.start/hit/miss`
- `image-load ok/error`
- `cutout.draw drawn`

Progress rule:
- One patch must satisfy one explicit success criterion before proceeding.

### Process Acceptance (Required for future Preview/Cutout fixes)
Every Preview/Cutout fix PR must include:
- Reproduction steps
- The 3-stage log evidence (`resolve/load/draw`)
- Explicit touched layer (`resolve` or `load` or `draw`)
- Explicit non-target layer unchanged declaration

### Static Gate
```bash
node --check web/pano_node_preview.js

## 2026-02-24: External Preview3D toast misattribution (`Unable to get model file path`)

Incident ID: `PREVIEW-20260224-09`

### Observed Facts
- Toast text is emitted by frontend `load3d` extension, not Panorama extension code.
- Emission point:
  - `3dnode/ComfyUI_frontend-c25f9a0e939145c155fbbd0fef24da4b02a40326/src/extensions/core/load3d.ts:511-515`
  - condition: `filePath = output.result?.[0]` is falsy.
- Preview3D backend execution path:
  - `3dnode/nodes_load_3d.py:108-116`
  - returns `IO.NodeOutput(ui=UI.PreviewUI3D(filename, ...))`.

### Confirmed Meaning
- `Unable to get model file path` means Preview3D frontend did not receive a valid `result[0]` path at `onExecuted`.
- This toast alone is not evidence of Panorama Preview/Cutout image-resolve failure.

### Hard Rules
- Do not attribute this toast to Panorama code without proving a direct call path.
- First isolate whether a `Preview3D` node exists/runs in the current graph.
- Fix scope must be split:
  1. Preview3D path issue (load3d frontend/backend contract)
  2. Panorama image refresh issue

### Evidence-first Triage for this toast
1. Confirm `Preview3D` node is present and executed.
2. Capture `output.result` shape at `load3d.ts` `node.onExecuted`.
3. Verify `model_file` value just before `config.configure(settings)`.
4. Only then decide whether fix belongs to `3dnode` (load3d) or Panorama.
node --check web/pano_editor.js
```

Optional guard:
```bash
rg -n "panoPreviewLog\\(|panoEditorDebug\\(" web/pano_node_preview.js web/pano_editor.js
```

### Operating Defaults
- Source of truth for this class of incidents is this file (`docs/preview_regressions.md`) only.
- Write only observable facts, confirmed causes, and preventive rules.
- Before editing Preview/Cutout behavior, read the latest section in this file first.

## 2026-02-24: Cutout black-screen cache poisoning (false-positive live draw)

Incident ID: `PREVIEW-20260224-10`

### Symptom
- `PanoramaCutout` thumbnail stays black.
- Black state persists even after Run.
- Hint text (`Open editor and add frame`) does not reappear.

### Confirmed Root Cause
- `drawCutoutProjectionPreview()` returned `true` without validating that any drawable triangle was actually rendered.
- Cutout path trusted that `true` and updated `lastGoodFrame` with an invalid/black frame.
- `drawLastGoodFrame()` reused the poisoned cache indefinitely.

### Permanent Guardrails
- In cutout projection, "success" must mean `drawnTriCount > 0`, not "loop completed".
- All shot/FOV/aspect values must be finite-normalized before projection math.
- Projection must early-return `false` for invalid rect size (`w/h <= 1` or non-finite).
- `drawLastGoodFrame()` must refuse reuse when `lastGoodImageSrc` is empty.
- Cutout logs must include `drawnTriCount` (or equivalent validated draw signal).

### Regression Checks
1. Run未実行 + `erp_image` 接続で cutout thumbnail が黒固定しない。
2. Run後に `source` が `erp_live` または `own_output` へ遷移し、黒固定しない。
3. 描画ソースがないときは必ずヒント表示に戻る。
4. `cutout.draw` ログで `drawnTriCount > 0` のときのみ `liveDrawnValidated === true`。

### Static Gate
```bash
node --check web/pano_cutout_projection.js
node --check web/pano_node_preview.js
```

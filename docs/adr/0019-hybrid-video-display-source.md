# ADR 0019 — Hybrid Video Display Source: playback via videoEl, scrub/edit via still-frame

## Status
Proposed

## Context

ADR 0018 introduced MP4/HTMLVideoElement as the ERP background source for video batch input.
The current implementation uses a single hidden `<video>` element as the direct `backgroundSource`
fed into the WebGL ERP render pipeline, for both playback and scrubbing.

This causes three intertwined problems:

### 1. Source-of-truth conflict

There are at minimum three distinct time values in the system, but no explicit ownership:

| Concept | What it means | Who sets it |
|---|---|---|
| `desiredTime` | Where the user wants to be | slider / drag |
| `requestedTime` | Last value written to `videoEl.currentTime` | `applyVideoSeekTime` |
| `presentedTime` | The frame actually decoded and on screen | browser / rVFC |

`videoEl.currentTime` serves as both the request channel and the result channel.
Setting it changes the property immediately (before decode), yet multiple callbacks
(`onVideoSeeked`, `timeupdate`, `syncVideoTransportState`, `refreshModalVideoSource`)
all read it and treat the value as "presented truth".

### 2. GL texture cache poisoning

`getRenderableMediaRevisionToken` includes `currentTime.toFixed(3)` in the revision key.
The key changes the instant `videoEl.currentTime = t_new` is set — before the frame is decoded.
If anything triggers `renderModalBackgroundLayer` in this window, the stale frame (still showing
the previous position) is uploaded under the new revision key. When the correct frame arrives,
the cache says "already current" and skips the upload. The wrong frame persists.

### 3. Scrub往復 (back-and-forth oscillation)

Because `backgroundDirty = true` can be set by `onVideoStateChange → requestDraw` (non-rVFC path,
fires on `canplay` during seek), by `onVideoTimeUpdate`, and by the rVFC re-queue loop,
multiple render passes can occur while the video element shows a frame that does not match the
user's intended position. The resulting oscillation is: old frame → new frame → old frame.

### Why the "remove videoEl from display entirely" direction is wrong for this repo

A fully JS-driven approach (frame cache, self-managed playback loop, `editorTime += dt`) would:
- Require capturing 4K/8K ERP frames as `ImageBitmap` on every decoded frame
- Add a full JS playback timing loop that discards the browser's media pipeline
- Need 8–16 frame buffer at 4K = hundreds of MB of GPU-resident data
- Solve a problem that only exists during scrub, at a cost that applies to all modes

The browser's `requestVideoFrameCallback` already provides accurate frame-delivery timing
during playback. Replacing it is not justified.

## Decision

Adopt a **hybrid display source** with an explicit mode distinction:

### Mode A — Playback
- `videoEl` is the `backgroundSource` directly (current behaviour)
- rVFC drives `backgroundDirty`; the existing guard (`|actualTime − pendingTime| > tolerance`)
  prevents stale frame uploads
- `editorTime` follows `videoEl.currentTime` (videoEl leads)
- No frame capture, no cache overhead

### Mode B — Scrub / keyframe-edit
- `videoEl` is demoted to a **pure decoder**: `videoEl.currentTime = t` is the only thing
  written to it from outside; its pixel content is never used as a display source
- A single `stillCanvas` (`OffscreenCanvas` or regular `Canvas`) holds the **last confirmed frame**
- `stillCanvas` is updated **only** when rVFC (or `seeked` in non-rVFC path) confirms that the
  presented frame matches `editorTime` within tolerance
- `stillCanvas` is the `backgroundSource` during this mode
- Between seek requests, `stillCanvas` shows the previous confirmed frame — no往復 possible
  because the canvas is never written with a stale or intermediate frame

### editorTime — the single source of truth

A new scalar `editorTime` (seconds) replaces the implicit use of `videoEl.currentTime` as truth:

- The slider value is `editorTime`, not `videoEl.currentTime`
- Keyframe markers reference `editorTime`
- `syncVideoTransportState` always receives `editorTime`, never reads `videoEl.currentTime`
  directly for display purposes
- During playback, `editorTime` is updated from `metadata.mediaTime` inside rVFC
- During scrub, `editorTime` is updated from the pointer/slider position, synchronously

### DecodeScheduler (scrub path only)

A lightweight scheduler owns all writes to `videoEl.currentTime` during scrub mode:

- Exactly one seek in-flight at a time (`seeking` flag)
- Tracks `requestedFrameNumber` separately from `presentedFrameNumber`
- On `seeked` / rVFC: if `|actualTime − editorTime| > tolerance`, issue one more seek
  (chase). Otherwise, capture frame to `stillCanvas`, mark done.
- Does **not** do prefetch. all-intra MP4 makes single-seek latency acceptable.
  Prefetch can be added later if telemetry shows it is needed.

#### Handling rapid scrubbing

- New scrub input supersedes older pending intent, but does **not** issue an immediate second
  `videoEl.currentTime` write while `seeking === true`
- Instead, the scheduler updates `requestedFrameNumber` / latest desired target and keeps at most
  one browser seek in-flight
- On `seeked`, compare the just-delivered frame against the latest requested target:
  - If it matches within tolerance, capture it to `stillCanvas` and mark the seek complete
  - If it differs, issue exactly one follow-up seek to the latest requested target
- This coalesces rapid slider movement into at most one active seek plus one latest pending target,
  preventing queue buildup and reducing scrub lag / state desynchronization

### Frame cache

Initial size: **1 frame** (`stillCanvas` only).  
The cache holds the last confirmed still. There is no multi-frame ring buffer at launch.  
If user testing shows visible lag, expand to 2–4 frames. 8–16 is not the starting point.

### Transition between modes

```
playback → scrub:
  pause videoEl
  editorTime = videoEl.currentTime  (snapshot)
  capture current confirmed playback frame into stillCanvas
  mode = scrub
  backgroundSource = stillCanvas    (shows last rVFC frame, which is correct)

scrub → playback:
  videoEl.currentTime = editorTime  (sync decoder to editor position)
  wait for seeked / canplay
  mode = playback
  backgroundSource = videoEl
  videoEl.play()
```

### Revision key

`getRenderableMediaRevisionToken` for `HTMLVideoElement` must not use `currentTime.toFixed(3)`.  
Instead, use a monotonic counter (`dataset.panoFrameIdx`) incremented only at confirmed frame
delivery (rVFC guard-pass or `seeked` in non-rVFC path). This eliminates the cache-poisoning
window that exists when `currentTime` changes before decode.

For `stillCanvas`, the revision key is a separate monotonic counter incremented each time
`stillCanvas` is written.

## Consequences

### Positive
-往復を構造的に排除する。`stillCanvas` はconfirmed frameしか受け付けないため、
  intermediate / stale frame が表示に入る経路がない
- `editorTime` が single source of truth になることで、keyframe編集UIは
  `videoEl` の状態に依存せず実装できる
- 再生中はブラウザのmedia pipelineをそのまま使うため、再生品質・パフォーマンスは現状維持
- 4K/8K ERP でもフレームキャッシュは1枚から始めるため、初期メモリコストは最小

### Negative / Trade-offs
- scrub中は最大1 seekレイテンシ分のラグが残る（all-intra MPは低いが0ではない）
- モード切り替え時に `videoEl.currentTime = editorTime` のsyncが必要で、
  切り替え瞬間に数十msのブランクが生じうる
- `stillCanvas` が1枚のため、seekが遅い環境では古いフレームが長く残る。
  この場合は将来フレーム数を増やして対処する

### Out of scope
- サムネイルストリップ（タイムラインのコマ送り表示）— 別ADR
- 複数 `videoEl` による parallel prefetch — 将来の拡張
- 低解像度proxyの導入 — パノラマの性質上採用しない

## Files affected

| File | Change |
|---|---|
| `web_src/pano_editor.js` | editorTime追加、DecodeScheduler（scrub用）、stillCanvas、backgroundSource切り替え、panoFrameIdxカウンタ、モード状態機械 |
| `web_src/components/PanoVideoTransport.vue` | sliderのvalue・表示をeditorTime基準に変更 |
| `web_src/pano_gl_renderer.js` | 原則変更なし（backgroundSource差し替えだけで済むことを目標） |
| `comfyui_pano_suite/core/video.py` | 変更なし |
| graph contract (node ports) | 変更なし |

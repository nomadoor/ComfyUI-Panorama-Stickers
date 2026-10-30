# ADR 0005: WebGL Preview Unification

## Status

Accepted

一部（共有の WebGL2 の ERP renderer と CPU の投影の fallback）は今のコードに無い。ERP の表示は three.js のビューが受け持つ（`docs/threejs-spark-integration.md`。置き換えた ADR は無い）（2026-10-11 に記す）。

## Context

The editor modal, node thumbnail preview, and standalone preview node were still
using CPU triangle projection for ERP background rendering. That caused:

- visible triangle faceting
- duplicated projection math across files
- poor performance under interaction
- different rendering behavior between modal and node previews

The repo already had enough shared camera/projection math to support a single
WebGL-backed ERP background path, but `main` did not yet ship a renderer module.

## Decision

We introduce a shared WebGL2 ERP renderer and route the following normal paths
through it:

- modal panorama background
- modal unwrap background
- modal cutout output preview background
- DOM/runtime node panorama preview background
- standalone preview node background
- cutout preview runtime background

The renderer remains display-only. It is responsible for sampling ERP imagery
into panorama, unwrap, and cutout viewports. It does not own paint semantics,
input semantics, or state semantics.

Phase 1 is intentionally narrow: WebGL owns image rendering only. Selection
outlines, handles, guides, and text labels remain Canvas2D overlays in editor
and preview code for now.

CPU projection remains only as a fallback path where the WebGL renderer is not
available. That fallback is expected to stay basic-edit-capable, but it is not
a visual parity target.

## Consequences

Positive:

- panorama/cutout/unwrap background rendering shares one sampling path
- CPU triangle projection is removed from normal preview interactions where the
  WebGL renderer can be used
- modal and node previews converge on the same rendering behavior

Tradeoffs:

- interaction visuals still remain outside the GPU path in this phase
- some CPU fallback code remains in place for compatibility and basic editing
- WebGL support is now a normal dependency for best-quality preview rendering

## Follow-up

- remove remaining CPU projection fallbacks from normal rendering paths
- consider moving selection/handles/guides/labels onto the GPU path in a later phase
- extend the renderer to cover paint/mask overlays when the paint rewrite lands

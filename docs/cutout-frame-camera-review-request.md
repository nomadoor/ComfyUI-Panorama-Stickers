# Cutout Frame Camera Redesign — Review Request

## Review status

Implementation is paused. The current branch is an uncommitted prototype and
must not be treated as an accepted design.

Please review the current code and redesign the presentation/camera contract
before further implementation. Do not merely patch the latest sizing symptom.

## Product intent

The V1 Panorama Cutout editor has `Panorama` and `Frame` tabs. They must be two
views of the same scene, not separate editable scenes.

In Frame view:

- the cutout shot is the camera
- the bright rounded rectangle is the exact output gate
- the same perspective scene remains visible across the entire canvas
- everything outside the gate is dimmed, not black or absent
- dragging navigates the shot camera
- wheel changes the shot FOV
- roll remains a camera property
- Frame has no canvas-object selection UI or floating selection menu
- the Inspector still displays the sole frame/shot without changing the
  Panorama tab's selection
- Panorama selection must survive a Panorama -> Frame -> Panorama round trip
- aspect and portrait/landscape actions live in a dedicated Vue right rail
- the gate must not overlap left, right, top, or bottom floating UI
- the gate must remain visually centered within a deliberately defined viewport

## User-observed failures in the prototype

1. The first prototype treated Frame as a movable/zoomable pasted rectangle.
2. Reusing `selectedId` for the Frame Inspector destroyed Panorama selection and
   exposed Panorama-only canvas selection UI in Frame.
3. A bounded overscan rectangle left black areas outside the rendered context
   after aspect/orientation changes.
4. Padding initially considered only the left rail and bottom dock. It ignored
   the right rail and top/bottom menus and shifted the gate off visual center.
5. Re-fitting the gate to the largest available rectangle after every aspect
   change changed the projection scale of the entire ERP view.
6. The attempted "stable screen focal length" fix reserved room for every
   supported aspect in both orientations. This made ordinary gates absurdly
   small. A screenshot showed a portrait gate occupying only a small central
   fraction of a large canvas.
7. The follow-up reduced the reservation to the current gate plus its transpose,
   but this is still an unreviewed local rule rather than a coherent camera and
   viewport model.
8. Frame inertia was removed based on a review recommendation, not an explicit
   product decision. Its desired behavior remains open.

## Current prototype implementation

Relevant files:

- `web_src/pano_editor.js`
- `web_src/pano_cutout_view_math.js`
- `web_src/components/PanoFrameRail.vue`
- `web_src/components/PanoModal.vue`
- `web/pano_editor.css`
- `tests/pano_cutout_view_math.test.mjs`
- `docs/cutout-frame-camera-view-plan.md`

Important current functions/state:

- `getFrameViewRect()` measures DOM controls and calculates the gate.
- `editor.frameGateFocalPx` is transient presentation state.
- `getStableCutoutGateFocal()` currently fits the current tangent extents and
  their exact transpose.
- `layoutCutoutGateAtFocal()` converts FOV tangent extents and a screen focal
  length into a centered gate.
- `drawFrameViewBackground()` expands the shot projection to the full canvas,
  then applies a full-canvas passepartout with a rounded gate hole.
- `scaleCutoutFovPair()` scales horizontal and vertical tangent half-extents
  together for wheel zoom.
- `applyCutoutAspect()` holds horizontal FOV and derives vertical FOV.
- `rotateCutoutAspect90()` swaps horizontal and vertical FOV values.

The branch also contains correct-looking but not yet accepted changes for:

- Frame camera drag
- grouped wheel commits
- pointer cancel restoration
- camera-aware stroke geometry cache keys
- non-persistent implicit shot selection
- removal of `editor.frameView.panX/panY/zoom`

## Central unresolved design problem

There are three quantities that cannot all be independently maximized:

1. shot camera FOV/aspect authority
2. stable full-canvas scene projection during aspect/orientation changes
3. a large gate that always fits all UI-safe bounds

The current prototype introduced a transient screen focal length but has not
established a convincing lifecycle or invariant for it.

Please determine:

- What is the canonical Frame presentation transform?
- Which value remains invariant when aspect changes?
- Which value remains invariant when orientation swaps?
- Which value remains invariant on modal resize or UI-layout changes?
- Should the gate size be derived from a target occupancy, focal length, current
  aspect-fit, or another quantity?
- When a requested aspect cannot fit without changing scene scale, what is the
  explicit product behavior?
- Can the full-canvas context and gate-exact output be rendered through one
  projection without independent horizontal/vertical stretching?
- Is swapping `(hFOV, vFOV)` the correct orientation action, or should the
  operation preserve another camera quantity?

## Required review checks

Please inspect the actual code rather than reviewing this document alone.

1. Verify the ray mapping inside and outside the gate mathematically.
2. Identify whether the full-canvas context is stretched under any aspect.
3. Test current landscape, portrait, square, and extreme legacy FOV pairs.
4. Test aspect presets followed by orientation swaps in both directions.
5. Test modal resize and changes in visible top/bottom controls.
6. Check whether DOM-measured padding can oscillate or feed back into gate size.
7. Separate scene camera state, Frame presentation state, and UI layout state.
8. Recommend the smallest coherent model, even if that means deleting the
   current `frameGateFocalPx` approach.
9. Explicitly classify which current changes should be kept, rewritten, or
   reverted before implementation resumes.

## Compatibility constraints

- Do not change node identifiers, ports, or existing persisted parameter names.
- Existing `(hFOV_deg, vFOV_deg)` pairs must load without normalization.
- `aspect_id` remains a UI intent label; backend output uses the FOV pair.
- Opening or switching tabs must not mutate persistent state.
- Existing Panorama canvas selection must not be overwritten by Frame UI.
- New modal UI must remain in Vue components.
- Do not design future 3D/lens APIs in this V1 change.

## Requested output

Return:

1. a concise diagnosis of the current architectural mistake
2. a proposed canonical model with equations and invariants
3. interaction behavior for drag, wheel, aspect, swap, resize, and cancel
4. a keep/rewrite/revert table for the current prototype
5. an implementation order with tests that prevents another visual patch cycle

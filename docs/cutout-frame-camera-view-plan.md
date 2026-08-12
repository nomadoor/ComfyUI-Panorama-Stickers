# Cutout Frame Camera View Redesign Plan

## Status

Revised after implementation review. The authoritative Frame product model is
[`ADR 0021`](adr/0021-cutout-frame-crop-view.md). `getFrameViewLayout()` derives
the focal scale every frame from `runtime.frameSafeRect` and the active shot;
no presentation scale is stored. The background remains fixed while camera FOV
changes resize the gate.

## Goal

Redesign the V1 Panorama Cutout `Frame` tab as an editable camera view of the
same panorama scene used by the `Panorama` tab.

The current Frame tab behaves like a cutout image pasted onto a separate 2D
canvas. Its presentation pan/zoom state is independent from the active cutout
shot, the inspector becomes unavailable, and the black area outside the frame
does not provide useful scene context.

The desired model is closer to a Blender camera view:

- Panorama and Frame observe and edit the same scene and persistent state.
- The difference between the tabs is projection and interaction axes, not a
  second scene or a second object coordinate system.
- The active cutout shot is the camera authority in Frame view.
- The final output boundary is shown as a camera gate.
- Scene content outside the camera gate remains visible through a dark,
  translucent overlay instead of becoming solid black.

"Show the whole ERP" in this document does **not** mean switching Frame view to
an equirectangular projection or fitting all 360 degrees into the canvas. It
means keeping the current perspective projection while allowing the surrounding
panorama scene outside the output gate to remain dimly visible.

## Confirmed product decisions

1. Entering Frame edits the effective active cutout shot, but does not write
   `state.active.selected_shot_id` merely to normalize an implicit selection.
   Frame may set `editor.selectedId` for Inspector presentation. Persistent
   selection changes only after explicit user selection.
2. Dragging the view changes the shot camera yaw and pitch.
3. Wheel input changes the shot field of view and therefore resizes the gate.
   It never changes the background presentation scale.
4. Roll edits the shot camera roll.
5. Frame and Panorama edits must immediately agree when switching tabs.
6. Frame uses the same scene entities, paint, stickers, and persistent state as
   Panorama.
7. The Inspector remains usable in Frame and edits the active shot.
8. Aspect ratio and orientation swapping remain editable.
9. The existing Panorama/Frame tab navigation can remain unchanged initially.
10. UI polish and shortcut redesign follow the coordinate-system correction.
11. Frame is a camera-only canvas view. Cursor-tool left drag and middle drag
    navigate the shot camera; Frame has no canvas object selection, transform
    handles, or floating selection menu. Paint/mask tools retain left-button input.
12. Frame camera navigation has no inertia. It is a persistent camera edit, not
    transient viewport navigation.

## Current implementation findings

The implementation is already partially migrated toward world-space editing:

- Frame paint and lasso input are converted through the active shot projection
  and saved as `ERP_GLOBAL` points.
- Sticker, raster object, and stroke-group movement in Frame converts screen
  positions back into ERP/world coordinates.
- Frame hit-test geometry projects ERP/world geometry through the active shot.
- The Frame background is rendered through the cutout camera.

The remaining architectural split is concentrated in presentation/navigation:

- `editor.frameView.panX` / `panY` move the pasted frame rectangle.
- `editor.frameView.zoom` changes the pasted rectangle size.
- `pan_frame` is separate from the panorama camera interaction controller.
- `getFrameViewRect()` depends on presentation pan/zoom rather than a stable
  camera gate fitted to the viewport.
- Inspector availability and selection behavior differ between tabs.

Older paint documentation defines Frame as a separate
`FRAME_LOCAL(frameId)` editor. That text already conflicts with the current
implementation: both frontend and backend render only `ERP_GLOBAL` strokes.
Unknown or legacy stroke records remain round-trippable data, but this project
will not add a new compatibility renderer or editor for inactive `FRAME_LOCAL`
content.

## Canonical model

```text
Scene
  + Active Shot Camera
  + Viewport Output
          |
          v
Perspective render extended across the editor canvas
          |
          +-- inside camera gate: normal brightness, exact cutout output
          +-- outside camera gate: same scene, dark translucent passepartout
```

### Scene authority

The scene remains the single source of truth for:

- panorama background
- ERP-global paint and masks
- stickers and raster objects
- cutout shots

Frame view must not clone these into a separate editable representation.

### Camera authority

The active shot's persisted `(hFOV_deg, vFOV_deg)` pair remains the source of
truth for projection and backend output compatibility:

```text
yaw_deg
pitch_deg
roll_deg
hFOV_deg
vFOV_deg
aspect_id (UI intent label, not backend projection authority)
```

`aspect_id` records the user's chosen preset such as `"16:9"`. Applying a
preset explicitly keeps `vFOV_deg` fixed and recalculates `hFOV_deg` in tangent
space. Existing loaded shots are never normalized or rewritten automatically.

Future 3D scene support may extend the camera model with focal length, sensor
size, lens shift, near/far range, and lens distortion. Phase 1 APIs must not be
generalized for those future values: they accept only the current shot fields.

### Camera gate

The camera gate is a viewport layout result, not persistent scene state.

```text
availableRect = canvasRect inset by fixed editor padding
tx = tan(hFOV / 2)
ty = tan(vFOV / 2)
fitFocal = min(availableRect.width / (2 * tx), availableRect.height / (2 * ty))
focalPx = fitFocalPx(availableRect, shot)  // getFrameViewLayout で毎フレーム導出
gateRect = centeredRect(2 * focalPx * tx, 2 * focalPx * ty, availableRect.center)
```

Properties:

- centered in the available viewport
- stable while yaw, pitch, or roll changes
- wheel/aspect/swap 後も `runtime.frameSafeRect` と shot から純粋に再導出される
- safe rectangle の変化には、保存scaleを追従させず次フレームの導出結果で応答する
- not draggable and not independently zoomable
- uses one scalar focal length for both axes; it is never axis-clamped
- uses the camera's tangent-space aspect ratio
- matches final output rays inside the gate; quantized output pixel dimensions
  may differ slightly because of backend multiple-of-8 rounding
- uses a fixed minimum padding defined by the editor layout

`editor.frameView.panX`, `panY`, and `zoom` must no longer control the gate and
may be removed directly. They are transient editor fields and are not serialized
into workflows.

### Overscan and passepartout

The editor renders the same perspective camera projection as the shot beyond the
normalized output gate. The context region is bounded by the canvas and the
absolute safe half-angle, never relative to the gate.
The gate is not a crop of an otherwise black canvas.

The area outside the gate and inside the context region receives a dark
translucent overlay. It remains visibly connected to the scene so users can
understand what lies just outside the output boundary.

The gate interior must match the actual cutout result. Overscan must not change
the projection inside the gate.

Treat the gate as the canonical sensor/output area and evaluate the same camera
rays outside it using film-plane coordinates beyond the normal `[-1, 1]` range.
`contextHalfExtentsPx(canvasSize, focalPx)` limits this continuation by canvas
half-size and `focalPx * tan(85deg)` independently per axis:

```text
halfW = min(canvasW / 2, focalPx * tan(85deg))
halfH = min(canvasH / 2, focalPx * tan(85deg))
```

This bound is deliberately gate-independent. Bounding context by gate size or
`getCutoutOverscanScale` makes the rendered background shrink with the crop and
reintroduces black margins. Canvas area beyond the absolute context region uses
the neutral editor background.

Overscan is required only for the GL Frame editor path. Node preview and export
render the output gate only. The existing coarse 2D fallback mesh is not extended
into the overscan region.

## Coordinate and interaction contract

### Projection

```text
World/ERP direction
  -> active shot camera basis (right, up, forward, including roll)
  -> perspective film-plane coordinates
  -> camera gate coordinates
  -> editor canvas coordinates
```

The inverse path is used for editing:

```text
Editor canvas point
  -> camera gate-relative film-plane coordinates
  -> active shot camera ray
  -> world/ERP direction
  -> scene entity transform or ERP paint coordinate
```

Points outside the gate but inside the bounded context region produce valid rays
for navigation, object hit-testing, and selection. Operations that write output
content, including paint and mask input, reject points outside the gate. This
preserves the existing `screenPosToFrameAsErpPoint()` boundary.

### Navigation

Control mapping preserves current conventions:

- cursor-tool left drag or middle-button drag: update active shot yaw/pitch
- wheel: update active shot FOV
- existing roll control: update active shot roll
- Frame is camera-only; its cursor-tool left drag always starts `pan_frame`

Camera interaction uses a transient draft shot. Pointer movement updates only
the draft used by render, projection, hit-test, and Inspector preview. On
pointer-up, the final draft values are copied to the persistent shot, followed
by one widget commit and one undo/history action. Cancel restores the starting
snapshot. Here, cancel means `pointercancel`, lost pointer capture, or Escape
while a camera gesture is active; an active gesture consumes Escape before the
existing modal-close behavior. Frame camera inertia is disabled.

All modal-internal readers use the draft, including the Frame render, Panorama
shot outline, projection, hit-test, and Inspector preview. Node and other
modal-external previews observe only committed state. Inspector text/select
changes commit once when the field is accepted. Continuous Inspector controls
use the same draft-during-gesture and one-commit-on-release contract.

### Field of view and aspect

Wheel zoom changes camera FOV while the focal scale is re-derived from the same
safe rectangle and shot aspect. This keeps the fitted gate stable and zooms the
ERP behind it without storing compensating presentation state.

Each wheel step scales both tangent-space half extents by the same factor:

```text
tan(hFOV' / 2) = k * tan(hFOV / 2)
tan(vFOV' / 2) = k * tan(vFOV / 2)
```

This preserves camera aspect and therefore gate shape. If either derived FOV
would exceed the accepted `[1, 179]` range, the entire wheel step is rejected;
the two axes are never clamped independently.

Persistent authority remains the existing `(hFOV_deg, vFOV_deg)` pair. The
backend continues to consume those values without a schema change. `aspect_id`
is a UI intent label.

An explicit aspect-preset action keeps vertical FOV fixed and calculates:

```text
hFOV = 2 * atan(tan(vFOV / 2) * targetAspect)
```

The result is stored back into the existing `hFOV_deg` field. It applies only when
the user invokes an aspect action; loading, opening, or switching tabs never
normalizes existing values.

Projection clamps remain compatible at `[1, 179]`. The initial Inspector control
may present a safer recommended range up to approximately 120 degrees without
changing the accepted legacy range.

Changing aspect changes `aspect_id`, explicitly derives `hFOV_deg` from the held
`vFOV_deg`, and changes
the camera gate shape and the subsequently quantized output dimensions. It does
not arbitrarily scale or pan the gate.
Orientation swap reuses the existing `aspect_id` landscape/portrait inversion;
it does not introduce persistent output-width or output-height fields.

### Roll

Roll belongs in the camera basis. It must affect:

- rendered panorama orientation
- world-to-frame projection
- frame-to-world inverse projection
- object handles and hit-testing
- paint input conversion

It must not be implemented as a post-render 2D rotation of the camera gate.

## Inspector and UI

Frame view keeps the Inspector enabled and binds it to the active shot.

Suggested initial grouping:

```text
Inspector
  Camera
    Yaw
    Pitch
    Roll
    Field of View

  Frame
    Aspect preset
    Swap orientation
    Output size/preset
```

Aspect presets and orientation swap should initially live in the Inspector
because they modify shot/output properties rather than editor presentation.

The orientation-swap action should be adjacent to aspect controls. A duplicated
floating shortcut may be considered later if real usage shows it is frequent.

No new modal structure should be built ad hoc in `pano_editor.js`; new controls
must remain Vue components.

## Compatibility requirements

1. Do not change node identifiers, ports, or existing parameter meanings.
2. Existing workflows must load without migration failure.
3. Existing shot yaw, pitch, roll, FOV, aspect, and output values retain their
   meaning. Existing FOV pairs are not normalized on load.
4. Unknown and legacy stroke records, including `FRAME_LOCAL`, must survive JSON
   round-trip unchanged. They remain inactive and are not newly rendered or edited.
5. Switching tabs or merely opening Frame must not mutate saved state, including
   persistent selected-shot state.
6. Camera navigation uses a draft and creates one persistent commit/history
   action on pointer-up.

## Proposed implementation phases

### Phase 1: Pure camera math contract

- Extract or consolidate shot camera basis with roll.
- Define world-direction to gate-point projection.
- Define gate/canvas point to world-direction inverse projection.
- Define aspect-fit camera gate layout.
- Define the gate from the tangent-space camera aspect without adding a frontend
  dependency on `output_megapixels` or duplicating backend quantization math.
- Replace explicit aspect-preset conversion with tangent-space derivation while
  preserving the existing persisted FOV pair.
- Define bounded overscan mapping with an explicit maximum multiplier and a
  higher-priority safe half-angle.
- Add round-trip and boundary tests before changing editor behavior.

Acceptance criteria:

- center ray round-trips to shot yaw/pitch
- gate corners match shot horizontal/vertical FOV
- projection/inverse projection agree under non-zero roll
- aspect changes do not mutate unrelated camera values
- applying an `aspect_id` preset makes
  `tan(hFOV/2) / tan(vFOV/2)` match its ratio within 0.5%
- existing shots remain byte-equivalent after load/open without an aspect action
- gate aspect equals `tan(hFOV/2) / tan(vFOV/2)`
- backend output quantization is allowed to introduce only its documented
  multiple-of-8 aspect rounding; pixel-grid identity is not a gate invariant
- a wheel step preserves `tan(hFOV/2) / tan(vFOV/2)` within `1e-9`
- gate rays match gate-only render rays within `1e-6` radians in the context render
- context extents remain bounded by the canvas and absolute safe half-angle,
  independently of the gate dimensions
- non-zero roll plus non-square aspect round-trips within tolerance
- resizing the canvas does not mutate any shot value

### Phase 2: Camera gate rendering and active-shot navigation

- Replace pasted-frame layout with a gate derived per frame from the safe rect and shot.
- Render bounded perspective scene context outside the gate through the GL path.
- Apply translucent passepartout outside the gate.
- Keep gate interior ray-equivalent to cutout preview/output.
- Replace `pan_frame` presentation offsets with draft shot yaw/pitch updates.
- Replace `zoomFrameViewAt()` presentation zoom with draft shot FOV updates.
- Connect roll to the same draft camera basis.
- Disable inertia and commit one undo/history action on pointer-up.
- Make `applyInitialCutoutFocus()` set only transient `editor.selectedId`; it
  must not persist an implicit fallback into `state.active.selected_shot_id`.
- Replace the Frame branch of `getStrokeGeomCacheKey()` with active/draft shot
  yaw, pitch, roll, FOV, gate, and viewport values. Preserve the intentional
  camera-independent separation in `getCutoutPreviewSurfaceRevision()`.
- Ship rendering and navigation together so no operation-free intermediate Frame
  view is exposed.

Acceptance criteria:

- gate interior matches output rays within the documented angular tolerance
- surrounding scene is visible but dimmed
- resizing the modal proportionally follows the safe rectangle without mutating shot values
- FOV changes gate size while the background remains fixed
- Frame drag changes the shot visible in Panorama
- Panorama selection reflects the changed shot immediately
- wheel zoom changes final cutout coverage
- modal-internal Panorama outlines and Inspector previews follow a live draft;
  node previews change only after commit
- pointer cancel, lost capture, and gesture-time Escape restore the snapshot
- tab switching introduces no state drift
- opening/canceling Frame without an explicit edit does not alter
  `state.active.selected_shot_id` or shot values

### Phase 3: Shared scene rendering and paint behavior

- Remove Frame object selection/transform hit paths while preserving Panorama
  selection across tab switches.
- Route all screen/world transforms through the canonical camera functions.
- Remove redundant frame-only math where behavior is already ERP-global.
- Reject paint, mask, and other output-writing input outside the gate.

Acceptance criteria:

- Panorama selection survives repeated Panorama/Frame switching
- Frame displays no canvas selection affordances or selection menu
- roll does not break handles, hit-tests, or paint placement
- gate-exterior context never leaks into final output

### Phase 4: Inspector and compatibility cleanup

- Keep active-shot Inspector controls enabled in Frame.
- Keep aspect preset and orientation swap controls in the Vue Frame right rail.
- Preserve exactly one history action when moving the existing aspect action
  from its selection popover into the Inspector.
- Remove transient `editor.frameView` pan/zoom state and obsolete cache-key terms.
- Preserve unknown/legacy stroke records without adding a compatibility renderer.
- Supersede older ADR statements that define Frame as a separate editor scene.

## Test strategy

Prefer behavior tests over source-string contracts for new camera math.

Required tests include:

- projection/inverse round-trip across yaw, pitch, roll, FOV, and aspect
- camera gate aspect-fit under landscape, portrait, square, and resized viewport
- output gate rays remain unchanged by editor canvas padding
- bounded overscan preserves gate rays and never exceeds its safe angle
- tangent-space gate aspect and documented backend quantization tolerance
- explicit aspect preset uses tangent-space math within 0.5%
- existing FOV pairs are not normalized during load/open
- wheel FOV update preserves gate rectangle
- drag update preserves aspect and roll
- one drag produces one persistent commit and one undo action
- canceled drag produces no persistent change
- Inspector field acceptance produces one commit/history action; continuous
  controls commit once on release
- Frame navigation has no post-pointer inertia
- non-zero roll world/screen transformations
- Frame/Panorama object transform parity
- ERP paint placement parity between tabs
- no mutation from tab switching or modal open/cancel
- unknown and `FRAME_LOCAL` records survive state round-trip unchanged
- existing example workflows retain node and port contracts

## Closed design questions

1. Frame is camera-only: no object selection or transform UI; output-writing
   tools remain gate-bound.
2. Camera navigation supports cursor-tool left drag and middle drag.
3. Persistent FOV compatibility range remains `[1, 179]`; UI may recommend a
   narrower practical range.
4. Explicit aspect actions hold vertical FOV and derive horizontal FOV in
   tangent space. Persisted authority remains the existing FOV pair.
5. Orientation swap reuses `aspect_id` inversion without new size fields.
6. Legacy/unknown stroke data is preserved only; no `FRAME_LOCAL` renderer is added.
7. Camera manipulation uses draft values, disables inertia, and commits once on
   pointer-up.
8. Gate context uses the same perspective continuation within a canvas- and
   absolute-angle-bounded region; no gate-relative overscan or second projection is introduced.
9. `docs/Panorama Paint Rebuild2.md` and related statements that describe Frame
   as a `FRAME_LOCAL` editor must be superseded, not treated as current design.

## Remaining product tuning

- exact camera gate padding and target screen occupancy
- exact safe context half-angle (current design value: 85 degrees)
- passepartout opacity and border styling
- practical Inspector FOV slider range within the legacy accepted range

## Follow-up review focus

The first code-level review closed the authority, persistence, compatibility,
and interaction questions above. A follow-up review should verify only that the
revised plan expresses those decisions consistently:

- bounded overscan preserves gate rays and remains usable near legacy FOV limits
- tangent-space gate aspect remains ray-correct despite backend pixel rounding
- draft camera manipulation cannot create intermediate persistent commits
- implicit effective-shot selection never mutates persistent selection state
- deleting transient `editor.frameView` presentation state leaves no stale cache
  or revision keys
- no implementation phase reintroduces a second scene or projection model

Future focal-length and lens-distortion support is intentionally outside this
plan. It should not shape the V1 camera-math API beyond avoiding needless
coupling to editor presentation state.

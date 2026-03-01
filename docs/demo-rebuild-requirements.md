## Demo Rebuild Requirements

This document freezes the requirements for rebuilding the standalone demo from scratch.

### Scope Split

- `web/` is the ComfyUI runtime UI and must stay isolated from demo-specific styling and behavior.
- `demo/` is a standalone surface and must not require changes in `web/` to function.
- Rebuild the demo only after the ComfyUI modal behavior is stable.

### ComfyUI Baseline

- Base the rebuild on the repository state before PR #34.
- Keep existing node identifiers, port semantics, and graph compatibility intact.
- Any future modal/UI adjustments for ComfyUI should be implemented and validated in `web/` first, independently of the demo.

### Demo Functional Requirements

- The demo must allow generating a panorama ERP from prompt input.
- After generation completes, the generated ERP must appear in the cutout UI automatically.
- The cutout UI must support framing a shot inside the generated panorama.
- Rendering a frame must update the visible frame preview.
- Saving the generated ERP and the rendered frame must work from the demo UI.

### Demo Integration Rules

- Do not couple demo-only layout or styling changes into `web/`.
- Prefer the simplest data path that is reliable in Gradio.
- Avoid adding routing, storage, or background machinery unless it is required by a confirmed limitation.
- If a data handoff path is changed, verify:
  - generation result becomes available to the cutout UI
  - frame preview updates
  - downloads still work

### Recovery Rule

- If demo work destabilizes the ComfyUI modal UI, revert the demo work, not the shared `web/` baseline.

# Vue UI Boundary

This repo uses Vue for DOM-based modal/editor UI and plain JS for rendering and engine logic.

## Vue-only UI surface

The following must be rendered from Vue components under `web_src/components/`:

- modal shell chrome
- toolbars and button groups
- inspector panels
- selection menus
- pickers and popovers
- confirmation dialogs and other structured DOM UI

## JS bridge surface

The following may remain in plain JS modules:

- canvas / WebGL / render core integration
- pointer math and interaction state machines
- image uploads, preview surfaces, and non-DOM rendering resources
- ComfyUI node wiring and data normalization

`web_src/pano_editor.js` should stay focused on editor orchestration and bridge code.
The editor's behavior lives in the modules of `web_src/editor/` (see `docs/editor-architecture.md`); the
rules below apply to them as they do to `pano_editor.js`.
Derived Vue-facing UI models should live in `web_src/pano_editor_ui_state.js` when they can be expressed as plain data builders.

## Forbidden pattern

Do not add new editor/modal UI by assembling DOM in `pano_editor.js` with:

- `document.createElement(...)`
- `innerHTML = ...`
- `appendChild(...)`
- large `querySelector(...)` trees whose purpose is to build or own UI structure

Bridge code may still locate Vue-rendered elements when needed for canvas mounting, size measurement, or low-level pointer integration.

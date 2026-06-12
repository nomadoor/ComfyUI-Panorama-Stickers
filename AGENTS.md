# AGENTS.md — Constitution

This file defines **non-negotiables** for coding agents working in this repo.
Put procedures, commands, and checklists in README/docs/ (or per-folder docs).

## Non-negotiables

1) **Do not break existing graphs**
- Keep **node identifiers** and **port semantics** stable.
- If a breaking change is unavoidable, add an explicit **migration path** and document it.

2) **Safety / trust**
- **No network access** unless the task explicitly requires it.
- **No file I/O** unless the node’s purpose is I/O and it’s documented.
- **No runtime code execution** (eval/exec or similar).

3) **Dependencies & assets**
- Avoid new dependencies. If unavoidable, keep it minimal and justify it in the PR.
- Never bundle model weights or large assets into the repo.

4) **Repo boundaries**
- `ops/` is managed separately. Do not modify or depend on it unless explicitly instructed.

5) **Node schema**
- Prefer **ComfyUI V3 node schema** (`io.ComfyNode` / `io.Schema`) for any node with UI or dynamic input behavior.
- Do not add new legacy `INPUT_TYPES` nodes unless there is a documented compatibility reason.

6) **Modal UI must be Vue**
- DOM-based modal UI such as buttons, inspectors, menus, pickers, and dialogs must be implemented as **Vue components** in `web_src/components/`.
- Do **not** build new modal UI with `document.createElement`, `innerHTML`, `appendChild`, or ad-hoc `querySelector` trees inside `pano_editor.js` or similar bridge files.
- Keep low-level rendering, canvas/WebGL surfaces, math, and pointer/render bridges in JS modules. The rule applies to UI structure, not the render engine.

## Stop & ask before proceeding

- Changing **node ids**, **port meaning**, or **parameter formats**.
- Adding a dependency, introducing network/file I/O, or touching licensing/redistribution.
- Any uncertainty about **coordinate conventions** (ERP axes, units, handedness).
- Introducing a new modal/editor UI element that cannot be expressed cleanly as a Vue component.

## Where details belong

- Commands, setup, workflows, benchmarks, and UI behavior notes belong in README/docs/.
- Keep this file short and stable.

## Agent Instructions

Before starting work, read `AGENT_STATE.md` if it exists.

When you finish a meaningful step, update `AGENT_STATE.md` with:
- current goal
- files changed
- checks run
- next action
- blockers

Do not rely on chat history as the source of truth.

`AGENT_STATE.md` is a local working-memory file and should not be committed.
Use `AGENT_STATE.example.md` as the shared template.

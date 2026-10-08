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

## Working principles

Procedures for these live in `docs/agents/workflow.md`.

1) **One rule, one owner**
- A rule (a default, a derived value, a clamp, a format, a conversion) lives in one place in code and one place in the specs; everything else calls or links it. A second copy drifts.
- When Python and JS must both apply a rule, both read the same JSON fixtures in a parity test.

2) **The living spec leads the code**
- Current behavior is defined by the living spec of each subsystem. A behavior change edits that spec first, as an approved diff; code follows it after a separate `GO`.
- The only exception is a change that keeps behavior: refactors, docs, mechanical edits. "Small" is not an exception.

3) **Fix the cause**
- A bug is fixed when a test that reproduced it fails before and passes after.
- State why the code allowed the bug, fix that, and fix the same cause elsewhere or record why not.

4) **Design before code across boundaries**
- A change that crosses Python/JS, the state format, editor/node surface/output, or playback/render gets a short design agreed before code.

5) **Keep changes apart**
- Refactors and behavior changes are separate commits.
- One writer per subsystem at a time.

6) **Prototypes stay prototypes**
- A prototype branch is never merged. Its parts enter the work branch only through the normal bar (spec, tests, review).
- Non-negotiables and stop conditions apply to prototypes too.

7) **Verify where it runs**
- Rendering, WebGL, video playback, and pointer input are verified in a real browser engine (headless Chromium counts), not only with fakes.
- Headless runs without the GPU, so GPU-dependent behavior also needs a check on the owner's real GPU.

8) **Delete what is obsolete**
- Superseded code, docs, flags, and dev leftovers go in the change that supersedes them.

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
- the current item's non-goals and first end-to-end slice
- which subsystem or files each parallel agent owns
- next candidates not yet filed as Issues
- how many times the current Issue has changed the same spec section or fixed the same symptom

Do not rely on chat history as the source of truth.
`AGENT_STATE.md` holds work state only. Decisions go into the living spec or an ADR, not into it.

`AGENT_STATE.md` is a local working-memory file and should not be committed.

## Agent skills

- Read `docs/agents/workflow.md` before starting repository work.
- Use `docs/agents/issue-tracker.md`, `docs/agents/labels.md`, and
  `docs/agents/domain.md` for issue, label, and domain-document decisions.
- For ComfyUI custom-node work, use the installed `comfyui-node-*` skills while
  preserving every non-negotiable and stop condition above.

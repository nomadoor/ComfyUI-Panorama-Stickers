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

## Stop & ask before proceeding

- Changing **node ids**, **port meaning**, or **parameter formats**.
- Adding a dependency, introducing network/file I/O, or touching licensing/redistribution.
- Any uncertainty about **coordinate conventions** (ERP axes, units, handedness).

## Where details belong

- Commands, setup, workflows, benchmarks, and UI behavior notes belong in README/docs/.
- Keep this file short and stable.
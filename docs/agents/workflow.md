# Engineering workflow

## Language

- Project prose language: Japanese

AI-only instruction は English で記述する。schema、identifier、template heading、tool keyword、
canonical term は English を維持する。Issue、commit message、PR、ADR、repository documentation など、
人間が review する文章には Japanese を使用する。

## Branch policy

- 最初の承認済み repository 変更の直前に、default branch から work branch を作成する。
- Phase 1 が repository を変更しない場合は、`GO` 後かつ実装開始前に作成する。
- default branch 上では repository file を変更しない。

## Specification and tickets

- new feature と behavior change には specification を必要とする。
- 明確で小さい fix、behavior-preserving refactor、documentation、mechanical configuration change では省略できる。
- 複数 session、複数 agent、または単一 context window に安全に収まらない作業には ticket を使用する。
- specification と ticket の GitHub 公開には、それぞれ明示的な承認を必要とする。
- domain-doc approval は、承認された glossary または ADR の変更だけを許可する。

## Authorization

- `GO` は implementation、tests、internal review、および review で見つかった安全な修正を許可する。
- `GO` は commit、push、Issue/PR 投稿を許可しない。
- authorization boundary を広げる必要が生じた場合は、変更前に停止して承認を求める。

## Implementation

- new behavior と bug fix は、事前に合意した public seam に対する TDD で実装する。
- documentation、comment、behavior-preserving mechanical change、generated file、external configuration では例外を認める。
- emergency change は理由を記録し、その後に regression test を追加する。
- node ID、port semantics、parameter format、ERP coordinate convention は `AGENTS.md` の stop condition に従う。

## Review

- complete uncommitted working tree を Standards と approved Spec の両方に対して review する。
- severity は P0 / P1 / P2 / P3 を使用し、P0 と P1 は commit blocker とする。
- behavior-changing commit の前に、approved requirements、存在する spec と tickets、関連 domain docs、diff、verification results を使った独立した read-only AI review を行う。
- finding は implementation session へ返し、P0 または P1 の修正後は再 review する。

## Commit, push, and PR

- commit packet を提示した後、commit には明示的な承認を必要とする。
- push と PR creation には、commit とは別の承認を必要とする。
- PR は Draft を既定とする。
- Draft PR を ready にするのは、CI 成功後かつユーザー承認後だけとする。
- merge は初期 workflow の範囲外とする。

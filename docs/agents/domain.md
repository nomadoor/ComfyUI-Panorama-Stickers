# Domain documents

## Layout

このリポジトリは単一の domain context として扱う。

- canonical terminology: root `CONTEXT.md`
- architectural decisions: `docs/adr/`

`CONTEXT.md` は必要な domain-modeling 作業が発生したときに、内容の承認を得て作成する。
複数 context を示す明確な構造が生じない限り、`CONTEXT-MAP.md` や context 別 glossary は導入しない。

## Usage

- domain または architecture の変更前に、関連する glossary と ADR を読む。
- Issue title、specification、test、code では canonical terminology を使用する。
- 既存 ADR と新しい設計が衝突する場合は、暗黙に上書きせず衝突を提示する。
- title と人間が review する文章には Japanese を使用する。heading、identifier、canonical term は English を維持する。
- glossary や ADR の承認は、その承認対象の文書変更だけを許可する。

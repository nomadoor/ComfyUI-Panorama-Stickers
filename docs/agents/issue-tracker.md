# Issue tracker

## Source of truth

仕様と実装 ticket の管理には、このリポジトリの GitHub Issues を使用する。
リポジトリは Git remote `origin` から特定する。

## Language

Issue の title、body、comment の文章には Japanese を使用する。template heading、
label、identifier、GitHub keyword、canonical term は English のまま維持する。

## Publication boundary

- specification と ticket set は、作成前に内容と依存関係を提示して明示的な承認を得る。
- 承認されるまで、Issue や comment を GitHub へ投稿しない。
- ticket は親 specification へリンクし、blocking edge には GitHub の native dependency を優先する。
- `ready-for-agent` は、公開が承認され実装開始可能になった ticket だけへ付与する。
- 完了する実装 ticket は PR の `Closes #N` により merge 時に閉じる。
- 親 specification は、全体を完了する PR のときだけ閉じる。部分実装では開いたままにする。

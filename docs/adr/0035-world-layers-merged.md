# ADR 0035: 上流の層の World の内容は、層ごとではなくまとめて一枚に畳む

## Status

Accepted

## Date

2026-10-08

---

Panorama Studio が上流の Scene を受けて層を重ねるとき、Sky は層ごとに描いて下の層から重ねるが、World の内容（`scene` の中身と `world` の Sticker）は、すべての層をまとめて `world_layer` で一枚にする（`docs/render-contract.md` の「層」）。各層の `scene` の中身を先に描き、すべての層の `world` の Sticker を中心の距離で遠い順に並べて（同じ距離では層の順、層の中では状態の順）一度に畳む。

考えた別案は、層ごとに World を一枚にしてから層の順に畳む方法である。採らなかった理由は、奥行きでの畳み込み（`over_by_depth`）が全画面の層を一枚ずつ畳む近似なので、層ごとに一枚にしてから畳むと、3 枚以上が重なる画素で間の面が消えるためである。

## Consequences

- World の内容は奥行きで混ざり、上の層の内容が上に来るわけではない。Sky だけが層の順に重なる。
- World のキャッシュのキー（`world_key`）は、すべての層の内容から作る。

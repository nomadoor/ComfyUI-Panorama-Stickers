# component_spec.md (pano-* classes)

この仕様は「Framer plugin UIの基本型（12px/30px/8px/内側1pxリング）」に寄せる。根拠はFramer公式Interfaceと、Framer Toolboxのglobals.cssおよび各controlのCSS。 :contentReference[oaicite:5]{index=5}

## 共通ベース（全コンポーネント）
- font: tokens.typography.fontFamily
- base font-size: 12px, font-weight: 500（見出し/主要ボタンは600）
- 角丸: control=8 / HUD=12 / modal=16
- コントロール高さ: 30px
- focus: box-shadow = tokens.focus.ring（input/select/textarea/number）
- hover: bg/control → bg/panel
- disabled: opacity 0.5, pointer-events none（ボタン系）

## Modal Overlay (.pano-modal-overlay)
- 背景: tokens.color.overlay.scrim
- 可能なら: backdrop-filter blur(10~14px)
- クリックで閉じるのは現状踏襲（外側のみ）

## Modal Shell (.pano-modal)
- 背景: bg/panel
- 枠: 1px border/default
- 角丸: radius/modal
- 影: shadow/panel
- 内側レイアウト: 2カラム（左 Stage / 右 Sidebar）

## Stage (.pano-stage-wrap, .pano-stage)
- 背景: bg/base（またはキャンバス用の独自黒）
- 枠は基本なし（キャンバスを主役に）
- もし境界が必要なら 1px border/default を“外側だけ”

## View Toggle (.pano-floating-top, .pano-view-toggle)
- Segmented風（Framer Toolboxの型）:
  - 高さ30px、外側角丸8px、padding 2px
  - 選択インジケータ: 角丸6px + shadow/low
  - 非選択テキスト: text/tertiary〜secondary
  - 選択テキスト: lightではaccent、darkではreversed（好みで固定でも可）

## Bottom Toolbar (.pano-floating-bottom)
- HUDガラス:
  - 背景: overlay/glass
  - 枠: 1px border/default
  - 角丸: radius/xl
  - blur: 10~14px
- ボタン:
  - 30px高、角丸8px
  - デフォルト: bg/control
  - hover: bg/panel
  - active: dark側は#232323相当（強すぎない押し込み）

## FOV HUD (.pano-floating-right)
- Bottom Toolbarと同じHUDガラス
- 数値はtabular-nums（数字が揺れない）

## Selection Floating Menu (.pano-selection-menu)
- 小HUD（HUDガラス + shadow/low）
- ボタンは“clear”寄せ（背景は薄い、hoverだけ反応）
- destructive（Delete）は文字色をdangerに寄せる

## Right Sidebar (.pano-side)
- 背景: bg/panel
- 左境界: 1px border/default
- セクション分割は divider（1px）で十分（余計なカード化はしない）

### Sidebar Header (.pano-side-head, .pano-side-title)
- title: 13~14px / 600
- サブや説明があるなら 12px / secondary

## Image Picker (.pano-picker*)
- Trigger:
  - 30px高、角丸8px、bg/control、hoverでbg/panel
- Popover:
  - 背景: bg/panel
  - 枠: 1px border/default
  - 角丸: 12px
  - 影: shadow/panel（ただし弱めでも良い）
- Item:
  - 高さ30px
  - hover: bg/control
  - active/selected: accentの薄い塗り + 文字をprimary

## Inline Utility (.pano-inline-tools)
- “リンク/ユーティリティ”扱いで良い
- 目立たせない：text/secondary、hoverでtext/primary

## Parameter Rows (.pano-field)
- 基本はInputGroup型（Framer Toolbox）:
  - 1行30px
  - Labelは左、padding-left 15px、text/secondary
  - Slider / Number の2つを右に置く場合、右側の最小幅は62px基準
  - gapは10px程度

## Sidebar Footer (.pano-side-footer)
- Cancel: secondary
- Save: primary（accent）
- モーダル閉じ（×）とCancelの競合は避ける（×は常に可視/Cancelは文脈ボタン）

## Modal Close (.pano-modal-close)
- 24〜28pxのタップ領域、アイコンは16px
- hoverでbg/control程度、押し込みは強くしない


```json
{
  "meta": {
    "name": "pano-framerish",
    "version": "0.1",
    "notes": "Framer plugin UI tokens + Framer Toolbox globals.css heuristics"
  },
  "color": {
    "bg": {
      "base": "var(--framer-color-bg, #0F0F10)",
      "panel": "var(--framer-color-bg-secondary, #171717)",
      "control": "var(--framer-color-bg-tertiary, #232323)"
    },
    "border": {
      "default": "var(--framer-color-divider, rgba(255,255,255,0.10))",
      "strong": "rgba(255,255,255,0.18)"
    },
    "text": {
      "primary": "var(--framer-color-text, rgba(255,255,255,0.92))",
      "secondary": "var(--framer-color-text-secondary, rgba(255,255,255,0.70))",
      "tertiary": "var(--framer-color-text-tertiary, rgba(255,255,255,0.48))",
      "reversed": "var(--framer-color-text-reversed, #ffffff)"
    },
    "accent": {
      "base": "var(--framer-color-tint, #0099ff)",
      "dimmed": "var(--framer-color-tint-dimmed, rgba(0,153,255,0.65))",
      "dark": "var(--framer-color-tint-dark, #0077ff)",
      "extraDark": "var(--framer-color-tint-extra-dark, #0066dd)"
    },
    "danger": {
      "base": "#ff3366",
      "hover": "#ee1155"
    },
    "overlay": {
      "scrim": "rgba(0,0,0,0.55)",
      "glass": "rgba(0,0,0,0.50)",
      "glassHover": "rgba(0,0,0,0.65)"
    }
  },
  "typography": {
    "fontFamily": "var(--framer-font-family, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif)",
    "size": {
      "xs": 11,
      "sm": 12,
      "md": 13,
      "lg": 14
    },
    "weight": {
      "base": 500,
      "semibold": 600
    },
    "lineHeight": {
      "base": 1.5
    },
    "numbers": {
      "tabular": true
    }
  },
  "size": {
    "controlHeight": 30,
    "controlMinWidth": 62,
    "icon": {
      "sm": 14,
      "md": 16,
      "lg": 20
    }
  },
  "space": {
    "1": 4,
    "2": 6,
    "3": 8,
    "4": 10,
    "5": 12,
    "6": 16,
    "7": 20,
    "8": 24
  },
  "radius": {
    "sm": 4,
    "md": 6,
    "lg": 8,
    "xl": 12,
    "modal": 16,
    "pill": 999
  },
  "shadow": {
    "low": "0px 2px 4px rgba(0,0,0,0.15)",
    "panel": "0 18px 60px rgba(0,0,0,0.55)"
  },
  "motion": {
    "durationMs": {
      "fast": 120,
      "base": 200,
      "slow": 240
    },
    "easing": {
      "standard": "cubic-bezier(0.2, 0.0, 0.0, 1.0)"
    }
  },
  "focus": {
    "ring": "inset 0 0 0 1px var(--framer-color-tint, #0099ff)"
  }
}
```
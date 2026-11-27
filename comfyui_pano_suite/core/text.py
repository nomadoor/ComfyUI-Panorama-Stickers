"""What counts as blank around a text field when Python reads a state the editor also reads (docs/scene-state-v2.md
共通の規則): exactly what JS String.prototype.trim removes. str.strip() with no argument also removes U+001C-U+001F
and U+0085 and keeps U+FEFF, so the two sides would read the same text differently."""

JS_WHITESPACE = (
    "\t\n\v\f\r              "
    "    　﻿"
)


def strip_ws(text: str) -> str:
    """`text` without leading and trailing JS whitespace, as `text.trim()` gives in JS."""
    return text.strip(JS_WHITESPACE)

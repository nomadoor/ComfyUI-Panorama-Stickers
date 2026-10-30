import { installStylesheet } from "../pano_styles.js";

// The new UI's stylesheet, web/pano_studio.css, loaded once. The old UI's web/pano_editor.css stays as it is
// (ADR 0044 "新旧の境", docs/design.md "新しい UI の見た目").
export function installStudioStylesheet() {
  return installStylesheet("pano-studio-style-link", new URL("./pano_studio.css", import.meta.url).toString());
}

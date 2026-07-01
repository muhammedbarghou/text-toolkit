import type { ToolConfig } from "../types";
import { normalizeStyledUnicode } from "../shared/unicode-maps";

export const normalizeUnicodeTextTool: ToolConfig = {
  slug: "normalize-unicode-text",
  name: "Normalize Unicode Text",
  category: "Text Formatting",
  description: "Convert styled Unicode characters back to plain ASCII text.",
  inputPlaceholder: "Paste styled Unicode text...",
  options: [],
  transform: (input) => normalizeStyledUnicode(input),
};

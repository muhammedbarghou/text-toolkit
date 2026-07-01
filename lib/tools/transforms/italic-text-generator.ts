import type { ToolConfig } from "../types";
import { applyItalic } from "../shared/unicode-maps";

export const italicTextGeneratorTool: ToolConfig = {
  slug: "italic-text-generator",
  name: "Italic Text Generator",
  category: "Text Formatting",
  description: "Convert plain text to Unicode italic characters.",
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) => applyItalic(input),
};

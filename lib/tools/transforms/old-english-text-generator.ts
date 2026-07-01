import type { ToolConfig } from "../types";
import { applyOldEnglish } from "../shared/unicode-maps";

export const oldEnglishTextGeneratorTool: ToolConfig = {
  slug: "old-english-text-generator",
  name: "Old English Text Generator",
  category: "Text Formatting",
  description: "Convert plain text to Old English Unicode style characters.",
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) => applyOldEnglish(input),
};

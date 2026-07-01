import type { ToolConfig } from "../types";
import { applyBold } from "../shared/unicode-maps";

export const boldTextGeneratorTool: ToolConfig = {
  slug: "bold-text-generator",
  name: "Bold Text Generator",
  category: "Text Formatting",
  description: "Convert plain text to Unicode bold characters.",
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) => applyBold(input),
};

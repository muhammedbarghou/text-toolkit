import type { ToolConfig } from "../types";
import { applyCursive } from "../shared/unicode-maps";

export const cursiveTextGeneratorTool: ToolConfig = {
  slug: "cursive-text-generator",
  name: "Cursive Text Generator",
  category: "Text Formatting",
  description: "Convert plain text to Unicode cursive characters.",
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) => applyCursive(input),
};

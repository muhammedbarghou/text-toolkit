import type { ToolConfig } from "../types";

export const removeEmptyLinesTool: ToolConfig = {
  slug: "remove-empty-lines",
  name: "Remove Empty Lines",
  category: "Text Manipulation",
  description: "Remove blank lines from text.",
  inputPlaceholder: "Enter multi-line text...",
  options: [],
  transform: (input) => input.split(/\r\n|\r|\n/).filter((line) => line.trim() !== "").join("\n"),
};

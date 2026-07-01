import type { ToolConfig } from "../types";

export const reverseWordsTool: ToolConfig = {
  slug: "reverse-words",
  name: "Reverse Words",
  category: "Text Manipulation",
  description: "Reverse the order of words on each line.",
  supportsSwap: true,
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) =>
    input
      .split(/\r\n|\r|\n/)
      .map((line) => line.trim().split(/\s+/).reverse().join(" "))
      .join("\n"),
};

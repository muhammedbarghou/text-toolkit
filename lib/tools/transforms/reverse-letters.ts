import type { ToolConfig } from "../types";

export const reverseLettersTool: ToolConfig = {
  slug: "reverse-letters",
  name: "Reverse Letters",
  category: "Text Manipulation",
  description: "Reverse the characters in each line.",
  supportsSwap: true,
  inputPlaceholder: "Enter text...",
  options: [],
  transform: (input) =>
    input
      .split(/\r\n|\r|\n/)
      .map((line) => [...line].reverse().join(""))
      .join("\n"),
};

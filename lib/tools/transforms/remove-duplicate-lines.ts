import type { ToolConfig } from "../types";

export const removeDuplicateLinesTool: ToolConfig = {
  slug: "remove-duplicate-lines",
  name: "Remove Duplicate Lines",
  category: "Text Manipulation",
  description: "Remove duplicate lines from text, keeping the first occurrence.",
  inputPlaceholder: "Enter text, one item per line...",
  options: [
    { type: "checkbox", key: "caseSensitive", label: "Case sensitive", default: false },
  ],
  transform: (input, options) => {
    const caseSensitive = options.caseSensitive as boolean;
    const lines = input.split(/\r\n|\r|\n/);
    const seen = new Set<string>();
    const result: string[] = [];
    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(line);
      }
    }
    return result.join("\n");
  },
};

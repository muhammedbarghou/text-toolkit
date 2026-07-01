import type { ToolConfig } from "../types";

export const wordWrapTool: ToolConfig = {
  slug: "word-wrap",
  name: "Word Wrap",
  category: "Text Formatting",
  description: "Wrap text at a specified line length, breaking at word boundaries.",
  inputPlaceholder: "Enter long text...",
  options: [
    { type: "number", key: "lineLength", label: "Line length", default: 80, min: 1 },
  ],
  transform: (input, options) => {
    const lineLength = options.lineLength as number;
    const paragraphs = input.split(/\n/);
    return paragraphs
      .map((para) => {
        if (!para.trim()) return para;
        const words = para.split(/\s+/);
        const lines: string[] = [];
        let current = "";
        for (const word of words) {
          if (!current) {
            current = word;
          } else if (current.length + 1 + word.length <= lineLength) {
            current += ` ${word}`;
          } else {
            lines.push(current);
            current = word;
          }
        }
        if (current) lines.push(current);
        return lines.join("\n");
      })
      .join("\n");
  },
};

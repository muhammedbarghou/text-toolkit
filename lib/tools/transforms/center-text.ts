import type { ToolConfig } from "../types";

export const centerTextTool: ToolConfig = {
  slug: "center-text",
  name: "Center Text",
  category: "Text Formatting",
  description: "Center each line of text within a specified width.",
  inputPlaceholder: "Enter text to center...",
  options: [
    { type: "number", key: "totalWidth", label: "Total width", default: 80, min: 1 },
  ],
  transform: (input, options) => {
    const totalWidth = options.totalWidth as number;
    return input
      .split(/\r\n|\r|\n/)
      .map((line) => {
        if (line.length >= totalWidth) return line;
        const padding = totalWidth - line.length;
        const left = Math.floor(padding / 2);
        return " ".repeat(left) + line;
      })
      .join("\n");
  },
};

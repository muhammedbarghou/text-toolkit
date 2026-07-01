import type { ToolConfig } from "../types";

export const justifyTextTool: ToolConfig = {
  slug: "justify-text",
  name: "Justify Text",
  category: "Text Formatting",
  description: "Justify text to a specified line length by adding spaces between words.",
  inputPlaceholder: "Enter text to justify...",
  options: [
    { type: "number", key: "lineLength", label: "Line length", default: 80, min: 1 },
  ],
  transform: (input, options) => {
    const lineLength = options.lineLength as number;
    const paragraphs = input.split(/\n/);

    const justifyLine = (line: string): string => {
      const words = line.trim().split(/\s+/);
      if (words.length <= 1 || line.length >= lineLength) return line;
      const totalChars = words.reduce((sum, w) => sum + w.length, 0);
      const totalSpaces = lineLength - totalChars;
      const gaps = words.length - 1;
      const baseSpaces = Math.floor(totalSpaces / gaps);
      const extra = totalSpaces % gaps;
      let result = words[0];
      for (let i = 1; i < words.length; i++) {
        const spaces = baseSpaces + (i <= extra ? 1 : 0);
        result += " ".repeat(Math.max(1, spaces)) + words[i];
      }
      return result;
    };

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
        return lines.map((line, i) => (i < lines.length - 1 ? justifyLine(line) : line)).join("\n");
      })
      .join("\n");
  },
};

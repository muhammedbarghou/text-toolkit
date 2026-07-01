import type { ToolConfig } from "../types";

export const addLineBreaksTool: ToolConfig = {
  slug: "add-line-breaks",
  name: "Add Line Breaks",
  category: "Text Manipulation",
  description: "Insert line breaks after a character count or at a delimiter.",
  inputPlaceholder: "Enter continuous text...",
  options: [
    {
      type: "select",
      key: "mode",
      label: "Mode",
      choices: [
        { value: "chars", label: "After N characters" },
        { value: "delimiter", label: "At delimiter" },
      ],
      default: "chars",
    },
    { type: "number", key: "breakAfter", label: "Break after (chars)", default: 40, min: 1 },
    { type: "text", key: "delimiter", label: "Delimiter", default: ",", placeholder: "e.g. comma" },
  ],
  transform: (input, options) => {
    const mode = options.mode as string;
    if (mode === "delimiter") {
      const delimiter = options.delimiter as string;
      if (!delimiter) return input;
      return input.split(delimiter).join(`${delimiter}\n`);
    }
    const breakAfter = Math.max(1, options.breakAfter as number);
    const lines: string[] = [];
    for (let i = 0; i < input.length; i += breakAfter) {
      lines.push(input.slice(i, i + breakAfter));
    }
    return lines.join("\n");
  },
};

import type { ToolConfig } from "../types";

export const removeLineBreaksTool: ToolConfig = {
  slug: "remove-line-breaks",
  name: "Remove Line Breaks",
  category: "Text Manipulation",
  description: "Remove line breaks and replace them with a custom string.",
  inputPlaceholder: "Enter multi-line text...",
  options: [
    { type: "text", key: "replaceWith", label: "Replace with", default: " " },
  ],
  transform: (input, options) => {
    const replaceWith = options.replaceWith as string;
    return input.replace(/\r\n|\r|\n/g, replaceWith);
  },
};

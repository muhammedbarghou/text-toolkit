import type { ToolConfig } from "../types";

export const spacesToTabsTool: ToolConfig = {
  slug: "spaces-to-tabs",
  name: "Spaces to Tabs",
  category: "Text Formatting",
  description: "Convert leading space groups to tab characters.",
  inputPlaceholder: "Enter text with spaces...",
  options: [
    { type: "number", key: "spacesPerTab", label: "Spaces per tab", default: 4, min: 1 },
  ],
  transform: (input, options) => {
    const n = options.spacesPerTab as number;
    const pattern = new RegExp(` {${n}}`, "g");
    return input.replace(pattern, "\t");
  },
};

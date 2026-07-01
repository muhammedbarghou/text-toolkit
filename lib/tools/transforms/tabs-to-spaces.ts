import type { ToolConfig } from "../types";

export const tabsToSpacesTool: ToolConfig = {
  slug: "tabs-to-spaces",
  name: "Tabs to Spaces",
  category: "Text Formatting",
  description: "Convert tab characters to spaces.",
  inputPlaceholder: "Enter text with tabs...",
  options: [
    { type: "number", key: "spacesPerTab", label: "Spaces per tab", default: 4, min: 1 },
  ],
  transform: (input, options) => {
    const spaces = " ".repeat(options.spacesPerTab as number);
    return input.replace(/\t/g, spaces);
  },
};

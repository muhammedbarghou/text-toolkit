import type { ToolConfig } from "../types";

export const reverseListTool: ToolConfig = {
  slug: "reverse-list",
  name: "Reverse List",
  category: "Basic Tools",
  description: "Reverse the order of lines in your text.",
  supportsSwap: true,
  inputPlaceholder: "Enter one item per line...",
  options: [],
  transform: (input) => input.split(/\r\n|\r|\n/).reverse().join("\n"),
};

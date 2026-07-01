import type { ToolConfig } from "../types";

export const removeLinesContainingTool: ToolConfig = {
  slug: "remove-lines-containing",
  name: "Remove Lines Containing",
  category: "Text Manipulation",
  description: "Remove or keep lines based on whether they contain search text.",
  inputPlaceholder: "Enter multi-line text...",
  options: [
    { type: "text", key: "searchText", label: "Search text", default: "" },
    {
      type: "select",
      key: "mode",
      label: "Mode",
      choices: [
        { value: "containing", label: "Remove lines containing" },
        { value: "not-containing", label: "Remove lines not containing" },
      ],
      default: "containing",
    },
  ],
  transform: (input, options) => {
    const searchText = options.searchText as string;
    const mode = options.mode as string;
    return input
      .split(/\r\n|\r|\n/)
      .filter((line) => {
        const contains = line.includes(searchText);
        return mode === "containing" ? !contains : contains;
      })
      .join("\n");
  },
};

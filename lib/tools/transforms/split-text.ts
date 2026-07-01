import type { ToolConfig } from "../types";

export const splitTextTool: ToolConfig = {
  slug: "split-text",
  name: "Split Text",
  category: "Text Manipulation",
  description: "Split text by a delimiter into new lines or columns.",
  inputPlaceholder: "Enter delimited text...",
  options: [
    { type: "text", key: "delimiter", label: "Delimiter", default: "," },
    {
      type: "select",
      key: "outputMode",
      label: "Output mode",
      choices: [
        { value: "newlines", label: "New lines" },
        { value: "columns", label: "Columns (tab-separated)" },
      ],
      default: "newlines",
    },
  ],
  transform: (input, options) => {
    const delimiter = options.delimiter as string;
    const outputMode = options.outputMode as string;
    const parts = input.split(delimiter);
    if (outputMode === "columns") {
      return parts.join("\t");
    }
    return parts.join("\n");
  },
};

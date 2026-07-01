import type { ToolConfig } from "../types";

export const extractColumnTool: ToolConfig = {
  slug: "extract-column",
  name: "Extract Column",
  category: "Text Manipulation",
  description: "Extract a column from delimited text by index.",
  inputPlaceholder: "Enter delimited text, one row per line...",
  options: [
    { type: "text", key: "delimiter", label: "Delimiter", default: "," },
    { type: "number", key: "columnIndex", label: "Column index (0-based)", default: 0, min: 0 },
  ],
  transform: (input, options) => {
    const delimiter = options.delimiter as string;
    const columnIndex = options.columnIndex as number;
    return input
      .split(/\r\n|\r|\n/)
      .map((line) => {
        const cols = line.split(delimiter);
        return cols[columnIndex] ?? "";
      })
      .join("\n");
  },
};

import type { ToolConfig } from "../types";

export const swapColumnsTool: ToolConfig = {
  slug: "swap-columns",
  name: "Swap Columns",
  category: "Text Manipulation",
  description: "Swap two columns in delimited text.",
  inputPlaceholder: "Enter delimited text, one row per line...",
  options: [
    { type: "text", key: "delimiter", label: "Delimiter", default: "," },
    { type: "number", key: "columnA", label: "Column A (0-based)", default: 0, min: 0 },
    { type: "number", key: "columnB", label: "Column B (0-based)", default: 1, min: 0 },
  ],
  transform: (input, options) => {
    const delimiter = options.delimiter as string;
    const columnA = options.columnA as number;
    const columnB = options.columnB as number;
    return input
      .split(/\r\n|\r|\n/)
      .map((line) => {
        const cols = line.split(delimiter);
        if (columnA < cols.length && columnB < cols.length) {
          [cols[columnA], cols[columnB]] = [cols[columnB], cols[columnA]];
        }
        return cols.join(delimiter);
      })
      .join("\n");
  },
};

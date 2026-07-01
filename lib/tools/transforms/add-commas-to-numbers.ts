import type { ToolConfig } from "../types";

export const addCommasToNumbersTool: ToolConfig = {
  slug: "add-commas-to-numbers",
  name: "Add Commas to Numbers",
  category: "Text Formatting",
  description: "Format numbers in text with thousand separators.",
  inputPlaceholder: "Enter text containing numbers...",
  options: [
    {
      type: "select",
      key: "separator",
      label: "Separator",
      choices: [
        { value: "comma", label: "Comma (1,000)" },
        { value: "period", label: "Period (1.000)" },
      ],
      default: "comma",
    },
  ],
  transform: (input, options) => {
    const separator = options.separator as string;
    const sep = separator === "period" ? "." : ",";
    return input.replace(/\b\d{1,3}(?:\d{3})*\b|\b\d+\b/g, (match) => {
      return match.replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    });
  },
};

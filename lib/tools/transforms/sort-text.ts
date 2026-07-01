import type { ToolConfig } from "../types";

const naturalCompare = (a: string, b: string): number =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

export const sortTextTool: ToolConfig = {
  slug: "sort-text",
  name: "Sort Text",
  category: "Basic Tools",
  description: "Sort lines of text alphabetically, naturally, in reverse, or randomly.",
  supportsSwap: true,
  inputPlaceholder: "Enter one item per line...",
  options: [
    {
      type: "select",
      key: "order",
      label: "Order",
      choices: [
        { value: "alphabetical", label: "Alphabetical" },
        { value: "natural", label: "Natural" },
        { value: "reverse", label: "Reverse" },
        { value: "random", label: "Random" },
      ],
      default: "alphabetical",
    },
    {
      type: "checkbox",
      key: "caseSensitive",
      label: "Case sensitive",
      default: false,
    },
  ],
  transform: (input, options) => {
    const order = options.order as string;
    const caseSensitive = options.caseSensitive as boolean;
    const lines = input.split(/\r\n|\r|\n/);

    const compareFn = (a: string, b: string) => {
      if (caseSensitive) {
        return order === "natural" ? naturalCompare(a, b) : a.localeCompare(b);
      }
      return order === "natural"
        ? naturalCompare(a.toLowerCase(), b.toLowerCase())
        : a.localeCompare(b, undefined, { sensitivity: "base" });
    };

    switch (order) {
      case "alphabetical":
      case "natural":
        return [...lines].sort(compareFn).join("\n");
      case "reverse":
        return [...lines].sort(compareFn).reverse().join("\n");
      case "random":
        return [...lines].sort(() => Math.random() - 0.5).join("\n");
      default:
        return input;
    }
  },
};

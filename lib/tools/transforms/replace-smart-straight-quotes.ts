import type { ToolConfig } from "../types";

const SMART_TO_STRAIGHT: Record<string, string> = {
  "\u201C": '"',
  "\u201D": '"',
  "\u2018": "'",
  "\u2019": "'",
  "\u2039": "<",
  "\u203A": ">",
  "\u00AB": "<<",
  "\u00BB": ">>",
};

const STRAIGHT_TO_SMART: Record<string, string> = {
  '"': "\u201C",
  "'": "\u2018",
};

export const replaceSmartStraightQuotesTool: ToolConfig = {
  slug: "replace-smart-straight-quotes",
  name: "Replace Smart/Straight Quotes",
  category: "Text Formatting",
  description: "Convert between smart quotes and straight quotes.",
  inputPlaceholder: "Enter text with quotes...",
  options: [
    {
      type: "select",
      key: "direction",
      label: "Direction",
      choices: [
        { value: "smart-to-straight", label: "Smart → Straight" },
        { value: "straight-to-smart", label: "Straight → Smart" },
      ],
      default: "smart-to-straight",
    },
  ],
  transform: (input, options) => {
    const direction = options.direction as string;
    const map = direction === "smart-to-straight" ? SMART_TO_STRAIGHT : STRAIGHT_TO_SMART;
    return [...input].map((char) => map[char] ?? char).join("");
  },
};

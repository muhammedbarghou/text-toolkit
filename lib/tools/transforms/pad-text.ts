import type { ToolConfig } from "../types";

export const padTextTool: ToolConfig = {
  slug: "pad-text",
  name: "Pad Text",
  category: "Text Formatting",
  description: "Pad each line to a target length with a chosen character on the left, right, or both sides.",
  inputPlaceholder: "Enter text to pad...",
  options: [
    {
      type: "select",
      key: "side",
      label: "Side",
      choices: [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
        { value: "both", label: "Both" },
      ],
      default: "left",
    },
    {
      type: "text",
      key: "padChar",
      label: "Pad character",
      default: " ",
    },
    {
      type: "number",
      key: "targetLength",
      label: "Target length",
      default: 80,
      min: 1,
    },
  ],
  transform: (input, options) => {
    const side = options.side as string;
    const padChar = (options.padChar as string) || " ";
    const targetLength = options.targetLength as number;
    const char = padChar.charAt(0);

    const padLine = (line: string): string => {
      if (line.length >= targetLength) return line;
      const diff = targetLength - line.length;
      if (side === "left") return char.repeat(diff) + line;
      if (side === "right") return line + char.repeat(diff);
      const leftPad = Math.floor(diff / 2);
      const rightPad = diff - leftPad;
      return char.repeat(leftPad) + line + char.repeat(rightPad);
    };

    return input.split(/\r\n|\r|\n/).map(padLine).join("\n");
  },
};

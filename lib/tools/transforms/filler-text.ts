import type { ToolConfig } from "../types";
import { getLoremParagraphs, getPlainEnglishParagraphs } from "../shared/word-lists";

export const fillerTextTool: ToolConfig = {
  slug: "filler-text",
  name: "Filler Text",
  category: "Random Generators",
  description: "Generate Lorem Ipsum or plain English placeholder text.",
  requiresInput: false,
  options: [
    {
      type: "select",
      key: "type",
      label: "Type",
      choices: [
        { value: "lorem", label: "Lorem ipsum" },
        { value: "plain", label: "Plain English placeholder" },
      ],
      default: "lorem",
    },
    { type: "number", key: "paragraphCount", label: "Paragraph count", default: 3, min: 1, max: 20 },
  ],
  transform: (_input, options) => {
    const type = options.type as string;
    const count = Math.max(1, options.paragraphCount as number);
    return type === "plain" ? getPlainEnglishParagraphs(count) : getLoremParagraphs(count);
  },
};

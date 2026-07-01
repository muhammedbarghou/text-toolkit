import type { ToolConfig } from "../types";

const SPLIT_MARKER = "\n---SPLIT---\n";

export const concatenateTextTool: ToolConfig = {
  slug: "concatenate-text",
  name: "Concatenate Text",
  category: "Text Manipulation",
  description: "Merge two texts line by line with an optional delimiter.",
  inputCount: 2,
  options: [
    { type: "text", key: "delimiter", label: "Delimiter", default: " " },
  ],
  transform: (input, options) => {
    const delimiter = options.delimiter as string;
    const [textA, textB] = input.split(SPLIT_MARKER);
    const linesA = (textA ?? "").split(/\r\n|\r|\n/);
    const linesB = (textB ?? "").split(/\r\n|\r|\n/);
    const maxLen = Math.max(linesA.length, linesB.length);
    const result: string[] = [];
    for (let i = 0; i < maxLen; i++) {
      const a = linesA[i] ?? "";
      const b = linesB[i] ?? "";
      result.push(`${a}${delimiter}${b}`);
    }
    return result.join("\n");
  },
};

import type { ToolConfig } from "../types";

export const addPrefixSuffixTool: ToolConfig = {
  slug: "add-prefix-suffix",
  name: "Add Prefix & Suffix",
  category: "Text Manipulation",
  description: "Add a prefix and/or suffix to each line of text.",
  inputPlaceholder: "Enter text, one line per item...",
  options: [
    { type: "text", key: "prefix", label: "Prefix", default: "" },
    { type: "text", key: "suffix", label: "Suffix", default: "" },
  ],
  transform: (input, options) => {
    const prefix = options.prefix as string;
    const suffix = options.suffix as string;
    return input.split(/\r\n|\r|\n/).map((line) => `${prefix}${line}${suffix}`).join("\n");
  },
};

import type { ToolConfig } from "../types";
import { getSecureRandomChar } from "../shared/word-lists";

const CHARSETS: Record<string, string> = {
  alphanumeric: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
};

export const randomStringGeneratorTool: ToolConfig = {
  slug: "random-string-generator",
  name: "Random String Generator",
  category: "Random Generators",
  description: "Generate random strings from various character sets.",
  requiresInput: false,
  options: [
    { type: "number", key: "length", label: "Length", default: 16, min: 1, max: 256 },
    {
      type: "select",
      key: "charset",
      label: "Character set",
      choices: [
        { value: "alphanumeric", label: "Alphanumeric" },
        { value: "letters", label: "Letters only" },
        { value: "numbers", label: "Numbers only" },
        { value: "custom", label: "Custom" },
      ],
      default: "alphanumeric",
    },
    { type: "text", key: "customCharset", label: "Custom charset", default: "abc123" },
    { type: "number", key: "count", label: "Count", default: 5, min: 1, max: 50 },
  ],
  transform: (_input, options) => {
    const length = Math.max(1, options.length as number);
    const count = Math.max(1, options.count as number);
    const charsetKey = options.charset as string;
    const charset =
      charsetKey === "custom"
        ? (options.customCharset as string) || "abc123"
        : CHARSETS[charsetKey] ?? CHARSETS.alphanumeric;

    const generate = () =>
      Array.from({ length }, () => getSecureRandomChar(charset)).join("");

    return Array.from({ length: count }, generate).join("\n");
  },
};

import type { ToolConfig } from "../types";
import { getSecureRandomChar } from "../shared/word-lists";

const VOWELS = "aeiou";
const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

const generatePronounceable = (length: number): string => {
  let result = "";
  let useConsonant = true;
  while (result.length < length) {
    if (useConsonant) {
      result += getSecureRandomChar(CONSONANTS);
    } else {
      result += getSecureRandomChar(VOWELS);
    }
    useConsonant = !useConsonant;
  }
  return result.slice(0, length);
};

export const pronounceablePasswordTool: ToolConfig = {
  slug: "pronounceable-password",
  name: "Pronounceable Password",
  category: "Random Generators",
  description: "Generate pronounceable passwords using alternating consonants and vowels.",
  requiresInput: false,
  options: [
    { type: "number", key: "length", label: "Length", default: 12, min: 4, max: 64 },
    { type: "number", key: "count", label: "Count", default: 5, min: 1, max: 50 },
  ],
  transform: (_input, options) => {
    const length = Math.max(4, options.length as number);
    const count = Math.max(1, options.count as number);
    return Array.from({ length: count }, () => generatePronounceable(length)).join("\n");
  },
};

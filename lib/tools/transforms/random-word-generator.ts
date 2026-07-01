import type { ToolConfig } from "../types";
import { RANDOM_WORDS } from "../shared/word-lists";

export const randomWordGeneratorTool: ToolConfig = {
  slug: "random-word-generator",
  name: "Random Word Generator",
  category: "Random Generators",
  description: "Generate random words within a length range.",
  requiresInput: false,
  options: [
    { type: "number", key: "wordCount", label: "Word count", default: 10, min: 1, max: 100 },
    { type: "number", key: "minLength", label: "Min length", default: 3, min: 1 },
    { type: "number", key: "maxLength", label: "Max length", default: 8, min: 1 },
  ],
  transform: (_input, options) => {
    const wordCount = Math.max(1, options.wordCount as number);
    const minLength = options.minLength as number;
    const maxLength = options.maxLength as number;
    const filtered = RANDOM_WORDS.filter((w) => w.length >= minLength && w.length <= maxLength);
    const pool = filtered.length > 0 ? filtered : RANDOM_WORDS;
    const words: string[] = [];
    for (let i = 0; i < wordCount; i++) {
      words.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return words.join("\n");
  },
};

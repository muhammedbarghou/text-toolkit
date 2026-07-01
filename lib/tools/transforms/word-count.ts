import type { ToolConfig } from "../types";
import { getWordCountStats } from "../shared/word-count-utils";

export { getWordCountStats } from "../shared/word-count-utils";
export type { WordCountStats } from "../shared/word-count-utils";

export const wordCountTool: ToolConfig = {
  slug: "word-count",
  name: "Word Count",
  category: "Basic Tools",
  description: "Count words, sentences, paragraphs, and characters in your text.",
  outputMode: "stats",
  inputPlaceholder: "Paste text to analyze...",
  options: [],
  transform: (input) => {
    const stats = getWordCountStats(input);
    return [
      `Words: ${stats.words}`,
      `Sentences: ${stats.sentences}`,
      `Paragraphs: ${stats.paragraphs}`,
      `Characters: ${stats.characters}`,
    ].join("\n");
  },
};

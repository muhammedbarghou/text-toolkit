import type { ToolConfig } from "../types";
import { getRandomUsernameWord, getSecureRandomInt } from "../shared/word-lists";

const generateUsername = (): string => {
  const word1 = getRandomUsernameWord();
  const word2 = getRandomUsernameWord();
  const num = getSecureRandomInt(1000);
  const styles = [
    () => `${word1}${word2}`,
    () => `${word1}_${word2}`,
    () => `${word1}${num}`,
    () => `${word1}.${word2}`,
    () => `${word2}${word1.charAt(0)}${num}`,
  ];
  return styles[getSecureRandomInt(styles.length)]();
};

export const usernameGeneratorTool: ToolConfig = {
  slug: "username-generator",
  name: "Username Generator",
  category: "Random Generators",
  description: "Generate random usernames.",
  requiresInput: false,
  options: [
    { type: "number", key: "count", label: "Count", default: 5, min: 1, max: 50 },
  ],
  transform: (_input, options) => {
    const count = Math.max(1, options.count as number);
    return Array.from({ length: count }, () => generateUsername()).join("\n");
  },
};

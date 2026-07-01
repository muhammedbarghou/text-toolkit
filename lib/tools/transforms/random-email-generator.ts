import type { ToolConfig } from "../types";
import { getRandomUsernameWord, getSecureRandomInt } from "../shared/word-lists";

export const randomEmailGeneratorTool: ToolConfig = {
  slug: "random-email-generator",
  name: "Random Email Generator",
  category: "Random Generators",
  description: "Generate random email addresses.",
  requiresInput: false,
  options: [
    { type: "number", key: "count", label: "Count", default: 5, min: 1, max: 50 },
    { type: "text", key: "domain", label: "Domain", default: "example.com" },
  ],
  transform: (_input, options) => {
    const count = Math.max(1, options.count as number);
    const domain = (options.domain as string) || "example.com";
    const emails: string[] = [];
    for (let i = 0; i < count; i++) {
      const local = `${getRandomUsernameWord()}${getSecureRandomInt(9999)}`;
      emails.push(`${local}@${domain}`);
    }
    return emails.join("\n");
  },
};

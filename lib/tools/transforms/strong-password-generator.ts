import type { ToolConfig } from "../types";
import { getSecureRandomChar, getSecureRandomInt } from "../shared/word-lists";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const generatePassword = (options: Record<string, string | boolean | number>): string => {
  const length = Math.max(4, options.length as number);
  const includeUppercase = options.includeUppercase as boolean;
  const includeNumbers = options.includeNumbers as boolean;
  const includeSymbols = options.includeSymbols as boolean;

  let charset = LOWERCASE;
  const required: string[] = [getSecureRandomChar(LOWERCASE)];

  if (includeUppercase) {
    charset += UPPERCASE;
    required.push(getSecureRandomChar(UPPERCASE));
  }
  if (includeNumbers) {
    charset += NUMBERS;
    required.push(getSecureRandomChar(NUMBERS));
  }
  if (includeSymbols) {
    charset += SYMBOLS;
    required.push(getSecureRandomChar(SYMBOLS));
  }

  const remaining = length - required.length;
  const chars: string[] = [...required];
  for (let i = 0; i < remaining; i++) {
    chars.push(getSecureRandomChar(charset));
  }

  for (let i = chars.length - 1; i > 0; i--) {
    const j = getSecureRandomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
};

export const strongPasswordGeneratorTool: ToolConfig = {
  slug: "strong-password-generator",
  name: "Strong Password Generator",
  category: "Random Generators",
  description: "Generate cryptographically secure strong passwords.",
  requiresInput: false,
  options: [
    {
      type: "number",
      key: "length",
      label: "Length",
      default: 16,
      min: 4,
      max: 128,
    },
    {
      type: "checkbox",
      key: "includeUppercase",
      label: "Include uppercase",
      default: true,
    },
    {
      type: "checkbox",
      key: "includeNumbers",
      label: "Include numbers",
      default: true,
    },
    {
      type: "checkbox",
      key: "includeSymbols",
      label: "Include symbols",
      default: true,
    },
    {
      type: "number",
      key: "count",
      label: "Count",
      default: 5,
      min: 1,
      max: 50,
    },
  ],
  transform: (_input, options) => {
    const count = Math.max(1, options.count as number);
    const passwords: string[] = [];
    for (let i = 0; i < count; i++) {
      passwords.push(generatePassword(options));
    }
    return passwords.join("\n");
  },
};

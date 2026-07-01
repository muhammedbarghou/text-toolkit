import type { ToolConfig } from "../types";

const toRoman = (num: number): string => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  let n = num;
  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }
  return result.toLowerCase();
};

const toLetters = (num: number): string => {
  let result = "";
  let n = num;
  while (n > 0) {
    n--;
    result = String.fromCharCode(97 + (n % 26)) + result;
    n = Math.floor(n / 26);
  }
  return result;
};

export const addLineNumbersTool: ToolConfig = {
  slug: "add-line-numbers",
  name: "Add Line Numbers",
  category: "Text Formatting",
  description: "Add line numbers, letters, or roman numerals to each line.",
  inputPlaceholder: "Enter multi-line text...",
  options: [
    {
      type: "select",
      key: "style",
      label: "Style",
      choices: [
        { value: "numbers", label: "Numbers" },
        { value: "letters", label: "Letters" },
        { value: "roman", label: "Roman numerals" },
      ],
      default: "numbers",
    },
    { type: "number", key: "startAt", label: "Start at", default: 1, min: 1 },
  ],
  transform: (input, options) => {
    const style = options.style as string;
    const startAt = options.startAt as number;
    return input
      .split(/\r\n|\r|\n/)
      .map((line, index) => {
        const num = startAt + index;
        let prefix: string;
        if (style === "letters") prefix = toLetters(num);
        else if (style === "roman") prefix = toRoman(num);
        else prefix = String(num);
        return `${prefix}. ${line}`;
      })
      .join("\n");
  },
};

import type { ToolConfig } from "../types";

export const randomNumberGeneratorTool: ToolConfig = {
  slug: "random-number-generator",
  name: "Random Number Generator",
  category: "Random Generators",
  description: "Generate random numbers within a range.",
  requiresInput: false,
  options: [
    { type: "number", key: "min", label: "Minimum", default: 1 },
    { type: "number", key: "max", label: "Maximum", default: 100 },
    { type: "number", key: "count", label: "Count", default: 10, min: 1, max: 100 },
    { type: "checkbox", key: "allowDuplicates", label: "Allow duplicates", default: true },
  ],
  transform: (_input, options) => {
    const min = options.min as number;
    const max = options.max as number;
    const count = Math.max(1, options.count as number);
    const allowDuplicates = options.allowDuplicates as boolean;
    const lo = Math.min(min, max);
    const hi = Math.max(min, max);
    const range = hi - lo + 1;

    if (!allowDuplicates && count > range) {
      return `Cannot generate ${count} unique numbers in range ${lo}-${hi}.`;
    }

    const numbers: number[] = [];
    const used = new Set<number>();

    while (numbers.length < count) {
      const num = Math.floor(Math.random() * range) + lo;
      if (allowDuplicates || !used.has(num)) {
        numbers.push(num);
        used.add(num);
      }
    }

    return numbers.join("\n");
  },
};

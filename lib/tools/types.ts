export type OptionField =
  | { type: "select"; key: string; label: string; choices: { value: string; label: string }[]; default: string }
  | { type: "text"; key: string; label: string; default: string; placeholder?: string }
  | { type: "checkbox"; key: string; label: string; default: boolean }
  | { type: "number"; key: string; label: string; default: number; min?: number; max?: number };

export type ToolCategory =
  | "Basic Tools"
  | "Text Manipulation"
  | "Text Formatting"
  | "Encode & Decode"
  | "Random Generators"
  | "Web Scraping";

export type ToolConfig = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  options: OptionField[];
  transform: (input: string, options: Record<string, string | boolean | number>) => string;
  requiresInput?: boolean;
  inputCount?: 1 | 2;
  outputMode?: "text" | "stats" | "diff";
  supportsSwap?: boolean;
  inputPlaceholder?: string;
};

export type OptionValues = Record<string, string | boolean | number>;

export const getDefaultOptions = (options: OptionField[]): OptionValues => {
  const defaults: OptionValues = {};
  for (const option of options) {
    defaults[option.key] = option.default;
  }
  return defaults;
};

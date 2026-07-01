import type { ToolConfig } from "../types";

const toTitleCase = (text: string): string =>
  text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

const toSentenceCase = (text: string): string => {
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};

const toCapitalize = (text: string): string =>
  text.replace(/\b\w/g, (char) => char.toUpperCase());

export const convertCaseTool: ToolConfig = {
  slug: "convert-case",
  name: "Convert Case",
  category: "Basic Tools",
  description: "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, or cAPITALIZE.",
  options: [
    {
      type: "select",
      key: "case",
      label: "Case",
      choices: [
        { value: "uppercase", label: "UPPERCASE" },
        { value: "lowercase", label: "lowercase" },
        { value: "title", label: "Title Case" },
        { value: "sentence", label: "Sentence case" },
        { value: "capitalize", label: "cAPITALIZE" },
      ],
      default: "uppercase",
    },
  ],
  inputPlaceholder: "Enter text to convert...",
  transform: (input, options) => {
    const caseType = options.case as string;
    switch (caseType) {
      case "uppercase":
        return input.toUpperCase();
      case "lowercase":
        return input.toLowerCase();
      case "title":
        return toTitleCase(input);
      case "sentence":
        return toSentenceCase(input);
      case "capitalize":
        return toCapitalize(input);
      default:
        return input;
    }
  },
};

import type { ToolConfig } from "../types";

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

export const emailExtractorTool: ToolConfig = {
  slug: "email-extractor",
  name: "Email Extractor",
  category: "Web Scraping",
  description: "Extract email addresses from unstructured text.",
  inputPlaceholder: "Paste text containing email addresses...",
  options: [],
  transform: (input) => {
    const matches = input.match(EMAIL_REGEX) ?? [];
    return [...new Set(matches)].join("\n");
  },
};

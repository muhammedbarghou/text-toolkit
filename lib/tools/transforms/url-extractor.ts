import type { ToolConfig } from "../types";

const URL_REGEX =
  /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)/g;

export const urlExtractorTool: ToolConfig = {
  slug: "url-extractor",
  name: "URL Extractor",
  category: "Web Scraping",
  description: "Extract URLs from unstructured text.",
  inputPlaceholder: "Paste text containing URLs...",
  options: [],
  transform: (input) => {
    const matches = input.match(URL_REGEX) ?? [];
    return [...new Set(matches)].join("\n");
  },
};

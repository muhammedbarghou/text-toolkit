import type { ToolConfig } from "../types";

export const stripHtmlTagsTool: ToolConfig = {
  slug: "strip-html-tags",
  name: "Strip HTML Tags",
  category: "Text Manipulation",
  description: "Remove HTML tags from text.",
  inputPlaceholder: "Paste HTML...",
  options: [],
  transform: (input) => input.replace(/<[^>]*>/g, ""),
};

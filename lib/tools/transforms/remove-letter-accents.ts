import type { ToolConfig } from "../types";

export const removeLetterAccentsTool: ToolConfig = {
  slug: "remove-letter-accents",
  name: "Remove Letter Accents",
  category: "Text Manipulation",
  description: "Remove accents and diacritics from letters.",
  inputPlaceholder: "Enter accented text...",
  options: [],
  transform: (input) => input.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
};

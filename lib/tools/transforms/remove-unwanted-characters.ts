import type { ToolConfig } from "../types";

export const removeUnwantedCharactersTool: ToolConfig = {
  slug: "remove-unwanted-characters",
  name: "Remove Unwanted Characters",
  category: "Text Manipulation",
  description: "Remove specific characters or all non-alphanumeric characters.",
  inputPlaceholder: "Enter text...",
  options: [
    { type: "text", key: "charactersToRemove", label: "Characters to remove", default: "" },
    { type: "checkbox", key: "removeAllNonAlphanumeric", label: "Remove all non-alphanumeric", default: false },
  ],
  transform: (input, options) => {
    const removeAll = options.removeAllNonAlphanumeric as boolean;
    if (removeAll) return input.replace(/[^a-zA-Z0-9\s]/g, "");
    const chars = options.charactersToRemove as string;
    if (!chars) return input;
    const escaped = [...new Set(chars.split(""))].map((c) => c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    return input.replace(new RegExp(escaped, "g"), "");
  },
};

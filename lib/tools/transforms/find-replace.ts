import type { ToolConfig } from "../types";

export const findReplaceTool: ToolConfig = {
  slug: "find-replace",
  name: "Find & Replace",
  category: "Basic Tools",
  description: "Find and replace text with optional regex and case sensitivity.",
  inputPlaceholder: "Enter text to search and replace...",
  options: [
    {
      type: "text",
      key: "find",
      label: "Find",
      default: "",
      placeholder: "Text to find",
    },
    {
      type: "text",
      key: "replace",
      label: "Replace with",
      default: "",
      placeholder: "Replacement text",
    },
    {
      type: "checkbox",
      key: "useRegex",
      label: "Use regex",
      default: false,
    },
    {
      type: "checkbox",
      key: "caseSensitive",
      label: "Case sensitive",
      default: false,
    },
  ],
  transform: (input, options) => {
    const find = options.find as string;
    const replace = options.replace as string;
    const useRegex = options.useRegex as boolean;
    const caseSensitive = options.caseSensitive as boolean;

    if (!find) return input;

    if (useRegex) {
      try {
        const flags = caseSensitive ? "g" : "gi";
        return input.replace(new RegExp(find, flags), replace);
      } catch {
        return input;
      }
    }

    if (caseSensitive) {
      return input.split(find).join(replace);
    }

    const escaped = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return input.replace(new RegExp(escaped, "gi"), replace);
  },
};

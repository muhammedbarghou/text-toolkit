import type { ToolConfig } from "../types";

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};

export const htmlEscapeUnescapeTool: ToolConfig = {
  slug: "html-escape-unescape",
  name: "HTML Escape/Unescape",
  category: "Encode & Decode",
  description: "Escape or unescape HTML special characters.",
  inputPlaceholder: "Enter HTML or plain text...",
  options: [
    {
      type: "select",
      key: "mode",
      label: "Mode",
      choices: [
        { value: "escape", label: "Escape" },
        { value: "unescape", label: "Unescape" },
      ],
      default: "escape",
    },
  ],
  transform: (input, options) => {
    const mode = options.mode as string;
    if (mode === "escape") {
      return [...input].map((char) => ESCAPE_MAP[char] ?? char).join("");
    }
    return input
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .replace(/&#x2F;/g, "/");
  },
};

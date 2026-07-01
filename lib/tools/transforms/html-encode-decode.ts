import type { ToolConfig } from "../types";

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const decodeHtml = (input: string): string =>
  input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)));

export const htmlEncodeDecodeTool: ToolConfig = {
  slug: "html-encode-decode",
  name: "HTML Encode/Decode",
  category: "Encode & Decode",
  description: "Encode or decode HTML entities.",
  inputPlaceholder: "Enter HTML or plain text...",
  options: [
    {
      type: "select",
      key: "mode",
      label: "Mode",
      choices: [
        { value: "encode", label: "Encode" },
        { value: "decode", label: "Decode" },
      ],
      default: "encode",
    },
  ],
  transform: (input, options) => {
    const mode = options.mode as string;
    if (mode === "decode") return decodeHtml(input);
    return [...input].map((char) => HTML_ENTITIES[char] ?? char).join("");
  },
};

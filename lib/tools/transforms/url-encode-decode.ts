import type { ToolConfig } from "../types";

export const urlEncodeDecodeTool: ToolConfig = {
  slug: "url-encode-decode",
  name: "URL Encode/Decode",
  category: "Encode & Decode",
  description: "Encode or decode URL-encoded text.",
  inputPlaceholder: "Enter URL or plain text...",
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
    try {
      return mode === "decode" ? decodeURIComponent(input) : encodeURIComponent(input);
    } catch {
      return input;
    }
  },
};

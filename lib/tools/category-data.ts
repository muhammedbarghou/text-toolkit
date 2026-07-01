import type { ToolCategory } from "./types";

export const toolCategories: ToolCategory[] = [
  "Basic Tools",
  "Text Manipulation",
  "Text Formatting",
  "Encode & Decode",
  "Random Generators",
  "Web Scraping",
];

export const categoryIntros: Record<ToolCategory, string> = {
  "Basic Tools":
    "Essential text utilities for sorting, case conversion, find-and-replace, diff comparison, and word counting — the everyday tools you reach for first.",
  "Text Manipulation":
    "Split, merge, filter, and transform lines and columns. Clean up pasted data, reformat lists, and batch-edit text without a spreadsheet.",
  "Text Formatting":
    "Pad, wrap, justify, and style text. Add line numbers, convert tabs, generate Unicode styled text, and normalize formatting for publishing.",
  "Encode & Decode":
    "Encode and decode HTML entities, URL percent-encoding, and HTML escape sequences — essential for web development and data interchange.",
  "Random Generators":
    "Generate passwords, usernames, filler text, random strings, numbers, and emails — all using secure randomness where it matters.",
  "Web Scraping":
    "Extract emails and URLs from unstructured pasted text using pattern matching — no network requests, fully client-side.",
};

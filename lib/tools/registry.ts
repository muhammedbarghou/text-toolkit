import { addCommasToNumbersTool } from "./transforms/add-commas-to-numbers";
import { addLineBreaksTool } from "./transforms/add-line-breaks";
import { addLineNumbersTool } from "./transforms/add-line-numbers";
import { addPrefixSuffixTool } from "./transforms/add-prefix-suffix";
import { boldTextGeneratorTool } from "./transforms/bold-text-generator";
import { centerTextTool } from "./transforms/center-text";
import { concatenateTextTool } from "./transforms/concatenate-text";
import { convertCaseTool } from "./transforms/convert-case";
import { cursiveTextGeneratorTool } from "./transforms/cursive-text-generator";
import { differenceCheckerTool } from "./transforms/difference-checker";
import { emailExtractorTool } from "./transforms/email-extractor";
import { extractColumnTool } from "./transforms/extract-column";
import { fillerTextTool } from "./transforms/filler-text";
import { findReplaceTool } from "./transforms/find-replace";
import { htmlEncodeDecodeTool } from "./transforms/html-encode-decode";
import { htmlEscapeUnescapeTool } from "./transforms/html-escape-unescape";
import { italicTextGeneratorTool } from "./transforms/italic-text-generator";
import { justifyTextTool } from "./transforms/justify-text";
import { normalizeUnicodeTextTool } from "./transforms/normalize-unicode-text";
import { oldEnglishTextGeneratorTool } from "./transforms/old-english-text-generator";
import { padTextTool } from "./transforms/pad-text";
import { pronounceablePasswordTool } from "./transforms/pronounceable-password";
import { randomEmailGeneratorTool } from "./transforms/random-email-generator";
import { randomNumberGeneratorTool } from "./transforms/random-number-generator";
import { randomStringGeneratorTool } from "./transforms/random-string-generator";
import { randomWordGeneratorTool } from "./transforms/random-word-generator";
import { removeDuplicateLinesTool } from "./transforms/remove-duplicate-lines";
import { removeEmptyLinesTool } from "./transforms/remove-empty-lines";
import { removeEmojisTool } from "./transforms/remove-emojis";
import { removeLetterAccentsTool } from "./transforms/remove-letter-accents";
import { removeLineBreaksTool } from "./transforms/remove-line-breaks";
import { removeLinesContainingTool } from "./transforms/remove-lines-containing";
import { removeUnwantedCharactersTool } from "./transforms/remove-unwanted-characters";
import { replaceSmartStraightQuotesTool } from "./transforms/replace-smart-straight-quotes";
import { reverseLettersTool } from "./transforms/reverse-letters";
import { reverseListTool } from "./transforms/reverse-list";
import { reverseWordsTool } from "./transforms/reverse-words";
import { sortTextTool } from "./transforms/sort-text";
import { spacesToTabsTool } from "./transforms/spaces-to-tabs";
import { splitTextTool } from "./transforms/split-text";
import { stripHtmlTagsTool } from "./transforms/strip-html-tags";
import { strongPasswordGeneratorTool } from "./transforms/strong-password-generator";
import { swapColumnsTool } from "./transforms/swap-columns";
import { tabsToSpacesTool } from "./transforms/tabs-to-spaces";
import { urlEncodeDecodeTool } from "./transforms/url-encode-decode";
import { urlExtractorTool } from "./transforms/url-extractor";
import { usernameGeneratorTool } from "./transforms/username-generator";
import { wordCountTool } from "./transforms/word-count";
import { wordWrapTool } from "./transforms/word-wrap";
import type { ToolCategory, ToolConfig } from "./types";

export const tools: ToolConfig[] = [
  // Basic Tools
  sortTextTool,
  convertCaseTool,
  findReplaceTool,
  reverseListTool,
  differenceCheckerTool,
  wordCountTool,
  // Text Manipulation
  addPrefixSuffixTool,
  addLineBreaksTool,
  removeLineBreaksTool,
  concatenateTextTool,
  splitTextTool,
  extractColumnTool,
  swapColumnsTool,
  reverseWordsTool,
  reverseLettersTool,
  removeDuplicateLinesTool,
  removeEmptyLinesTool,
  removeLetterAccentsTool,
  removeUnwantedCharactersTool,
  removeLinesContainingTool,
  removeEmojisTool,
  stripHtmlTagsTool,
  // Text Formatting
  addLineNumbersTool,
  addCommasToNumbersTool,
  replaceSmartStraightQuotesTool,
  tabsToSpacesTool,
  spacesToTabsTool,
  padTextTool,
  wordWrapTool,
  justifyTextTool,
  centerTextTool,
  boldTextGeneratorTool,
  italicTextGeneratorTool,
  oldEnglishTextGeneratorTool,
  cursiveTextGeneratorTool,
  normalizeUnicodeTextTool,
  // Encode & Decode
  htmlEncodeDecodeTool,
  urlEncodeDecodeTool,
  htmlEscapeUnescapeTool,
  // Random Generators
  usernameGeneratorTool,
  strongPasswordGeneratorTool,
  pronounceablePasswordTool,
  randomStringGeneratorTool,
  randomWordGeneratorTool,
  fillerTextTool,
  randomNumberGeneratorTool,
  randomEmailGeneratorTool,
  // Web Scraping
  emailExtractorTool,
  urlExtractorTool,
];

export const getToolBySlug = (slug: string) => tools.find((tool) => tool.slug === slug);

export const toolCategories: ToolCategory[] = [
  "Basic Tools",
  "Text Manipulation",
  "Text Formatting",
  "Encode & Decode",
  "Random Generators",
  "Web Scraping",
];

export const getToolsByCategory = (category: ToolCategory) =>
  tools.filter((tool) => tool.category === category);

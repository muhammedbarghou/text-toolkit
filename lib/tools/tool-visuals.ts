import type { LucideIcon } from "lucide-react";
import {
  AlignJustifyIcon,
  ArrowDownAZIcon,
  ArrowLeftRightIcon,
  AtSignIcon,
  BinaryIcon,
  BracesIcon,
  CaseSensitiveIcon,
  ColumnsIcon,
  FileDiffIcon,
  FileTextIcon,
  HashIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  MailIcon,
  MergeIcon,
  MinusIcon,
  PilcrowIcon,
  QuoteIcon,
  RefreshCwIcon,
  ReplaceIcon,
  ScissorsIcon,
  ShieldIcon,
  ShuffleIcon,
  SmileIcon,
  SpaceIcon,
  SplitIcon,
  SubscriptIcon,
  TableIcon,
  TextCursorInputIcon,
  TextQuoteIcon,
  TypeIcon,
  UnderlineIcon,
  UserIcon,
  WrapTextIcon,
} from "lucide-react";

export type ToolVisual = {
  icon: LucideIcon;
  bg: string;
  abbrev?: string;
};

const ICON_COLORS = [
  "#2196F3",
  "#E91E63",
  "#283593",
  "#03A9F4",
  "#4CAF50",
  "#FF9800",
  "#673AB7",
  "#009688",
  "#F44336",
  "#9C27B0",
  "#00BCD4",
  "#5C6BC0",
] as const;

const slugVisuals: Record<string, Omit<ToolVisual, "bg"> & { bg?: string }> = {
  "sort-text": { icon: ArrowDownAZIcon, abbrev: "AZ", bg: "#2196F3" },
  "convert-case": { icon: CaseSensitiveIcon, abbrev: "Aa", bg: "#E91E63" },
  "find-replace": { icon: ReplaceIcon, bg: "#283593" },
  "reverse-list": { icon: ListIcon, bg: "#03A9F4" },
  "difference-checker": { icon: FileDiffIcon, bg: "#4CAF50" },
  "word-count": { icon: HashIcon, abbrev: "123", bg: "#FF9800" },
  "add-prefix-suffix": { icon: TextCursorInputIcon, abbrev: "±", bg: "#673AB7" },
  "add-line-breaks": { icon: PilcrowIcon, bg: "#009688" },
  "remove-line-breaks": { icon: MinusIcon, bg: "#F44336" },
  "concatenate-text": { icon: MergeIcon },
  "split-text": { icon: SplitIcon },
  "extract-column": { icon: ColumnsIcon },
  "swap-columns": { icon: ArrowLeftRightIcon },
  "reverse-words": { icon: ShuffleIcon },
  "reverse-letters": { icon: RefreshCwIcon },
  "remove-duplicate-lines": { icon: ListIcon },
  "remove-empty-lines": { icon: MinusIcon },
  "remove-letter-accents": { icon: TypeIcon },
  "remove-unwanted-characters": { icon: ScissorsIcon },
  "remove-lines-containing": { icon: FileTextIcon },
  "remove-emojis": { icon: SmileIcon },
  "strip-html-tags": { icon: BracesIcon },
  "add-line-numbers": { icon: HashIcon },
  "add-commas-to-numbers": { icon: BinaryIcon },
  "replace-smart-straight-quotes": { icon: QuoteIcon },
  "tabs-to-spaces": { icon: SpaceIcon },
  "spaces-to-tabs": { icon: TableIcon },
  "pad-text": { icon: SubscriptIcon },
  "word-wrap": { icon: WrapTextIcon },
  "justify-text": { icon: AlignJustifyIcon },
  "center-text": { icon: TextQuoteIcon },
  "bold-text-generator": { icon: TypeIcon, abbrev: "B" },
  "italic-text-generator": { icon: ItalicIcon, abbrev: "I" },
  "old-english-text-generator": { icon: TypeIcon },
  "cursive-text-generator": { icon: UnderlineIcon },
  "normalize-unicode-text": { icon: TypeIcon },
  "html-encode-decode": { icon: BracesIcon },
  "url-encode-decode": { icon: LinkIcon },
  "html-escape-unescape": { icon: BracesIcon },
  "username-generator": { icon: UserIcon },
  "strong-password-generator": { icon: ShieldIcon },
  "pronounceable-password": { icon: ShieldIcon },
  "random-string-generator": { icon: ShuffleIcon },
  "random-word-generator": { icon: TypeIcon },
  "filler-text": { icon: FileTextIcon },
  "random-number-generator": { icon: HashIcon },
  "random-email-generator": { icon: AtSignIcon },
  "email-extractor": { icon: MailIcon },
  "url-extractor": { icon: LinkIcon },
};

const hashSlug = (slug: string): number => {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % ICON_COLORS.length;
  }
  return hash;
};

export const getToolVisual = (slug: string): ToolVisual => {
  const visual = slugVisuals[slug];
  const bg = visual?.bg ?? ICON_COLORS[hashSlug(slug)];

  if (visual) {
    const { bg: explicitBg, ...rest } = visual;
    return { ...rest, bg: explicitBg ?? bg };
  }

  return { icon: FileTextIcon, bg };
};

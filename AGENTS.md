# Project Brief: Text Tools Web App (Next.js)

## Goal

Build a web app containing ~49 small, focused text-processing tools (sort, convert case, find & replace, encode/decode, random generators, etc.). The entire app must be a static, client-rendered application with **no backend, no database, and no authentication** — every tool's logic runs in the browser.

The architecture must be generic: a single shared layout and routing pattern that renders any tool from a config object, rather than 49 hand-built pages. Adding a new tool in the future should require creating one transform file and one registry entry — nothing else.

---

## Tech Stack

- Next.js (App Router), TypeScript
- Tailwind CSS
- shadcn/ui for all UI components (Textarea, Select, Button, Tabs, Checkbox, Input, Tooltip, Toast/Sonner, Card)
- No external state libraries needed — local component state is sufficient (options do NOT need to sync to the URL)
- Deploy target: Vercel (but should run as a fully static export if possible)

---

## Architecture

### Folder structure

```
/app
  /tools
    page.tsx                  -> category index of all tools, with search/filter
    /[slug]
      page.tsx                -> generic tool page; looks up slug in registry, renders ToolPage
/components
  text-tool-layout.tsx        -> shared shell: input box, options panel, output box, actions
  tool-options-renderer.tsx   -> renders option controls dynamically from a tool's option schema
  diff-tool-layout.tsx        -> special two-input layout (used only by Difference Checker, Concatenate Text)
  copy-button.tsx
  download-button.tsx
  text-stats-bar.tsx          -> shows live char/word/line count under any input box
/lib
  /tools
    types.ts                  -> ToolConfig, OptionField, and related types
    registry.ts                -> single exported array of all ToolConfig entries, built from transforms
    /transforms
      sort-text.ts
      convert-case.ts
      find-replace.ts
      reverse-list.ts
      difference-checker.ts
      word-count.ts
      add-prefix-suffix.ts
      add-line-breaks.ts
      remove-line-breaks.ts
      concatenate-text.ts
      split-text.ts
      extract-column.ts
      swap-columns.ts
      reverse-words.ts
      reverse-letters.ts
      remove-duplicate-lines.ts
      remove-empty-lines.ts
      remove-letter-accents.ts
      remove-unwanted-characters.ts
      remove-lines-containing.ts
      remove-emojis.ts
      strip-html-tags.ts
      add-line-numbers.ts
      add-commas-to-numbers.ts
      replace-smart-straight-quotes.ts
      tabs-to-spaces.ts
      spaces-to-tabs.ts
      pad-text.ts
      word-wrap.ts
      justify-text.ts
      center-text.ts
      bold-text-generator.ts
      italic-text-generator.ts
      old-english-text-generator.ts
      cursive-text-generator.ts
      normalize-unicode-text.ts
      html-encode-decode.ts
      url-encode-decode.ts
      html-escape-unescape.ts
      username-generator.ts
      strong-password-generator.ts
      pronounceable-password.ts
      random-string-generator.ts
      random-word-generator.ts
      filler-text.ts
      random-number-generator.ts
      random-email-generator.ts
      email-extractor.ts
      url-extractor.ts
    /shared
      unicode-maps.ts          -> shared character maps for bold/italic/old-english/cursive generators
      word-lists.ts             -> shared word lists for filler text, random words, usernames
```

### Core types (implement this first, exactly as specified)

```ts
export type OptionField =
  | { type: "select"; key: string; label: string; choices: { value: string; label: string }[]; default: string }
  | { type: "text"; key: string; label: string; default: string; placeholder?: string }
  | { type: "checkbox"; key: string; label: string; default: boolean }
  | { type: "number"; key: string; label: string; default: number; min?: number; max?: number };

export type ToolCategory =
  | "Basic Tools"
  | "Text Manipulation"
  | "Text Formatting"
  | "Encode & Decode"
  | "Random Generators"
  | "Web Scraping";

export type ToolConfig = {
  slug: string;
  name: string;
  category: ToolCategory;
  description: string;
  options: OptionField[];
  transform: (input: string, options: Record<string, string | boolean | number>) => string;
  requiresInput?: boolean;   // default true; set false for generators that don't need input text
  inputCount?: 1 | 2;        // default 1; set 2 for Difference Checker, Concatenate Text
};
```

`registry.ts` exports `export const tools: ToolConfig[]`, simply importing and listing every tool from `/transforms`.

---

## Shared Components

### `TextToolLayout`
The default layout used by all single-input tools. Responsibilities:
- Renders the input `Textarea` (hidden entirely if `requiresInput === false`)
- Renders option controls dynamically via `ToolOptionsRenderer`, based on the active tool's `options` array
- Renders a "Run" / live-update output `Textarea` (read-only)
- Renders `CopyButton` and `DownloadButton` (download as `.txt`) on the output
- Renders `TextStatsBar` under the input (char / word / line count), shown globally on every tool, not just Word Count
- Includes a "Clear" button and, where it makes sense (Sort Text, Reverse List, Reverse Words, etc.), a "Swap input/output" button
- Transform should run live on input/option change (debounced ~150ms) rather than requiring a manual button click, except for the Random Generators category, which need an explicit "Generate" button since they have no input to react to

### `DiffToolLayout`
Used only when `inputCount === 2`. Two side-by-side input textareas instead of one. For Difference Checker, output should be a visual diff (highlight additions/removals) — this can use a simple line-by-line diff algorithm (implement directly, no need for an external diff library if avoidable, but use one like `diff` from npm if it simplifies things). For Concatenate Text, output is simply the two texts merged line by line with an optional delimiter option.

### `ToolOptionsRenderer`
Takes a tool's `options: OptionField[]` plus current values and an `onChange` handler, and renders the right shadcn control for each field type (`Select` for `select`, `Input` for `text`/`number`, `Checkbox` for `checkbox`).

---

## Full Tool List (registry contents)

Group these under their categories exactly as below. For each, implement a pure `transform` function plus the listed options. Where "no options" is noted, `options: []`.

### Basic Tools
| Tool | Slug | Options |
|---|---|---|
| Sort Text | `sort-text` | order: select (alphabetical, natural, reverse, random); case-sensitive: checkbox |
| Convert Case | `convert-case` | case: select (UPPERCASE, lowercase, Title Case, Sentence case, cAPITALIZE) |
| Find & Replace | `find-replace` | find: text; replace: text; useRegex: checkbox; caseSensitive: checkbox |
| Reverse List | `reverse-list` | no options (reverses line order) |
| Difference Checker | `difference-checker` | **inputCount: 2**, no options |
| Word Count | `word-count` | no options — output is a stats summary (words/sentences/paragraphs/characters), not transformed text |

### Text Manipulation
| Tool | Slug | Options |
|---|---|---|
| Add Prefix & Suffix | `add-prefix-suffix` | prefix: text; suffix: text |
| Add Line Breaks | `add-line-breaks` | breakAfter: number (chars) OR delimiter: text — support splitting by character count or by a delimiter string |
| Remove Line Breaks | `remove-line-breaks` | replaceWith: text (default: single space) |
| Concatenate Text | `concatenate-text` | **inputCount: 2**, delimiter: text (default: space) |
| Split Text | `split-text` | delimiter: text (default: comma); outputMode: select (new lines, columns) |
| Extract Column | `extract-column` | delimiter: text; columnIndex: number |
| Swap Columns | `swap-columns` | delimiter: text; columnA: number; columnB: number |
| Reverse Words | `reverse-words` | no options (reverses word order per line) |
| Reverse Letters | `reverse-letters` | no options |
| Remove Duplicate Lines | `remove-duplicate-lines` | caseSensitive: checkbox |
| Remove Empty Lines | `remove-empty-lines` | no options |
| Remove Letter Accents | `remove-letter-accents` | no options (use Unicode NFD normalization + strip diacritics) |
| Remove Unwanted Characters | `remove-unwanted-characters` | charactersToRemove: text; removeAllNonAlphanumeric: checkbox |
| Remove Lines Containing | `remove-lines-containing` | searchText: text; mode: select (containing, not containing) |
| Remove Emojis | `remove-emojis` | no options |
| Strip HTML Tags | `strip-html-tags` | no options |

### Text Formatting
| Tool | Slug | Options |
|---|---|---|
| Add Line Numbers | `add-line-numbers` | style: select (numbers, letters, roman numerals); startAt: number |
| Add Commas to Numbers | `add-commas-to-numbers` | separator: select (comma, period) |
| Replace Smart/Straight Quotes | `replace-smart-straight-quotes` | direction: select (smart→straight, straight→smart) |
| Tabs to Spaces | `tabs-to-spaces` | spacesPerTab: number (default 4) |
| Spaces to Tabs | `spaces-to-tabs` | spacesPerTab: number (default 4) |
| Pad Text | `pad-text` | side: select (left, right, both); padChar: text (default space); targetLength: number |
| Word Wrap | `word-wrap` | lineLength: number (default 80) |
| Justify Text | `justify-text` | lineLength: number (default 80) |
| Center Text | `center-text` | totalWidth: number (default 80) |
| Bold Text Generator | `bold-text-generator` | no options |
| Italic Text Generator | `italic-text-generator` | no options |
| Old English Text Generator | `old-english-text-generator` | no options |
| Cursive Text Generator | `cursive-text-generator` | no options |
| Normalize Unicode Text | `normalize-unicode-text` | no options (reverts styled Unicode chars back to plain ASCII) |

### Encode & Decode
| Tool | Slug | Options |
|---|---|---|
| HTML Encode/Decode | `html-encode-decode` | mode: select (encode, decode) |
| URL Encode/Decode | `url-encode-decode` | mode: select (encode, decode) |
| HTML Escape/Unescape | `html-escape-unescape` | mode: select (escape, unescape) |

### Random Generators
All of these have `requiresInput: false`.

| Tool | Slug | Options |
|---|---|---|
| Username Generator | `username-generator` | count: number (default 5) |
| Strong Password Generator | `strong-password-generator` | length: number (default 16); includeUppercase, includeNumbers, includeSymbols: checkboxes; count: number |
| Pronounceable Password | `pronounceable-password` | length: number; count: number |
| Random String Generator | `random-string-generator` | length: number; charset: select (alphanumeric, letters only, numbers only, custom); count: number |
| Random Word Generator | `random-word-generator` | wordCount: number; minLength/maxLength: number |
| Filler Text | `filler-text` | type: select (lorem ipsum, plain English placeholder); paragraphCount: number |
| Random Number Generator | `random-number-generator` | min: number; max: number; count: number; allowDuplicates: checkbox |
| Random Email Generator | `random-email-generator` | count: number; domain: text (default: example.com) |

### Web Scraping
These extract matches from pasted unstructured text via regex — no external network calls.

| Tool | Slug | Options |
|---|---|---|
| Email Extractor | `email-extractor` | no options |
| URL Extractor | `url-extractor` | no options |

---

## Implementation Notes (important — follow these)

1. **Unicode text generators** (Bold, Italic, Old English, Cursive) and **Normalize Unicode Text** must share a single character-mapping module at `/lib/tools/shared/unicode-maps.ts` rather than duplicating maps in each transform file. Normalize should reverse all of these mappings back to plain ASCII.
2. **True randomness for security-sensitive generators**: Strong Password Generator and Pronounceable Password must use `crypto.getRandomValues()`, not `Math.random()`. Other generators (random word, random number for non-security use) can use `Math.random()`.
3. **Difference Checker** and **Concatenate Text** are the only two tools needing `inputCount: 2` — make sure the `[slug]/page.tsx` route checks this flag and renders `DiffToolLayout` instead of `TextToolLayout` when true.
4. **Word Count** technically doesn't "transform" text — design its output as a read-only stats panel (word/sentence/paragraph/character counts) rather than forcing it through the standard textarea-to-textarea output pattern, while still reusing the rest of `TextToolLayout`.
5. **Remove Letter Accents**: use `string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")` as the core technique.
6. **All transform functions must be pure** — no side effects, same input/options always produce same output. This makes them trivially unit-testable later.
7. **Generators category** needs an explicit "Generate" button in the UI (since there's no input to react to), while every other category should transform live as the user types/changes options (debounced).

---

## Build Order (phases)

**Phase 1 — Skeleton & one tool end-to-end**
Scaffold Next.js + Tailwind + shadcn. Implement `types.ts`, `TextToolLayout`, `ToolOptionsRenderer`, and exactly one tool (Convert Case) fully wired through the dynamic route. Confirm it works in the browser before proceeding.

**Phase 2 — Validate the pattern against edge cases**
Implement one tool from each tricky category to confirm the generic layout handles all shapes before mass-producing:
- Sort Text (select + checkbox)
- Find & Replace (multiple text inputs + checkboxes)
- Pad Text (select + text + number)
- Strong Password Generator (no input, generate button, crypto random)
- Difference Checker (two-input layout)
- Word Count (stats-style output)

**Phase 3 — Bulk implementation**
Implement the remaining ~40 tools. Group by category per work session, and build shared helpers (`unicode-maps.ts`, `word-lists.ts`) before the tools that depend on them.

**Phase 4 — Index & navigation**
Build `/tools` page: cards grouped by category, each linking to its slug, plus a client-side search/filter input over the registry array (no backend).

**Phase 5 — Polish**
- `generateMetadata` per tool page using registry `name`/`description` for SEO
- Toast notification on copy
- Download-as-.txt on outputs
- Swap input/output button where applicable
- Responsive layout (mobile: stack input/options/output vertically)
- Empty states (helpful placeholder text in input boxes per tool)

---

## Deliverable Checklist

- [ ] All 49 tools implemented with pure, tested transform functions
- [ ] Single generic `[slug]/page.tsx` route serving all single-input tools
- [ ] Special two-input layout serving Difference Checker and Concatenate Text
- [ ] `/tools` category index page with search
- [ ] No backend/API routes/database — fully client-side
- [ ] Copy-to-clipboard and download-as-txt on every tool's output
- [ ] Live char/word/line stats bar on every input
- [ ] Responsive on mobile
- [ ] SEO metadata per tool page
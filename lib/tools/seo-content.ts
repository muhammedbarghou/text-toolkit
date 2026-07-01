import type { ToolSeoFields } from "./types";

const privacyFaq = {
  question: "Is my text uploaded to a server?",
  answer:
    "No. All processing happens entirely in your browser. Your text never leaves your device.",
};

const createSeo = (fields: ToolSeoFields): ToolSeoFields => fields;

export const seoContent: Record<string, ToolSeoFields> = {
  "sort-text": createSeo({
    seoTitle: "Sort Text Online – Alphabetical & Natural Line Sorter | Text Toolkit",
    keywords: ["sort text online", "alphabetical sort lines", "sort list alphabetically"],
    longDescription:
      "Sort lines of text alphabetically, using natural numeric order, in reverse, or randomly — instantly in your browser. Paste a list of names, SKUs, log entries, or any line-based data and reorder it with one click. Choose case-sensitive sorting when capitalization matters, or natural sort when your list contains numbers like item2 and item10. Perfect for cleaning up exported spreadsheets, organizing code imports, or preparing sorted datasets for reports without opening Excel.",
    example: {
      label: "Alphabetical sort",
      before: "zebra\napple\nBanana\napple",
      after: "apple\napple\nBanana\nzebra",
    },
    faq: [
      {
        question: "What is natural sort?",
        answer:
          "Natural sort treats numbers inside text as numeric values, so item2 comes before item10 instead of after it alphabetically.",
      },
      privacyFaq,
      {
        question: "Can I sort in reverse order?",
        answer: "Yes. Select Reverse from the Order dropdown to flip the sorted result.",
      },
    ],
  }),
  "convert-case": createSeo({
    seoTitle: "Text Case Converter – Uppercase to Lowercase Online | Text Toolkit",
    keywords: ["uppercase to lowercase converter", "text case converter", "change text case online"],
    longDescription:
      "Convert text between UPPERCASE, lowercase, Title Case, Sentence case, and cAPITALIZE instantly — a free uppercase to lowercase converter that runs entirely in your browser. Fix inconsistent capitalization in documents, normalize headings for CMS imports, or reformat copied text from PDFs and emails. No upload required: paste your text, pick a case style, and copy the result. Ideal for editors, developers cleaning user input, and anyone who needs quick, reliable case conversion without installing software.",
    example: {
      label: "Convert to Title Case",
      before: "hello world from text toolkit",
      after: "Hello World From Text Toolkit",
    },
    faq: [
      {
        question: "What is Sentence case?",
        answer: "Sentence case lowercases the entire string, then capitalizes only the first character.",
      },
      privacyFaq,
      {
        question: "Does Title Case capitalize every word?",
        answer: "Yes. Each word's first letter is uppercased and the rest lowercased.",
      },
    ],
  }),
  "find-replace": createSeo({
    seoTitle: "Find and Replace Text Online – Free Text Replacer | Text Toolkit",
    keywords: ["find and replace text online", "text replacer", "search and replace"],
    longDescription:
      "Find and replace text in bulk with optional regex and case-sensitive matching — a fast online text replacer for editing large blocks of content. Rename variables across a code snippet, swap terminology in documentation, or fix repeated typos in exported data. Toggle regex mode for pattern-based replacements like dates or phone numbers, and control whether letter casing must match exactly. Everything runs locally in your browser, so confidential documents stay on your machine.",
    example: {
      label: "Simple replacement",
      before: "Hello world. Hello again.",
      after: "Hi world. Hi again.",
    },
    faq: [
      {
        question: "How do I use regular expressions?",
        answer: "Enable the Use regex checkbox, then enter a valid JavaScript regex pattern in the Find field.",
      },
      privacyFaq,
      {
        question: "Can I replace with an empty string?",
        answer: "Yes. Leave the Replace field blank to delete matched text.",
      },
    ],
  }),
  "reverse-list": createSeo({
    seoTitle: "Reverse List Order Online – Flip Lines of Text | Text Toolkit",
    keywords: ["reverse list order online", "reverse lines of text", "flip list order"],
    longDescription:
      "Reverse the order of lines in any list with one click. Paste numbered steps, changelog entries, ranked items, or stack traces and flip them instantly — useful when you need last-first ordering or want to undo a previous sort. The tool preserves each line's content exactly; only the sequence changes. Runs entirely in your browser with no file upload, making it safe for internal data and quick enough for everyday editing tasks.",
    example: {
      before: "first\nsecond\nthird",
      after: "third\nsecond\nfirst",
    },
    faq: [
      privacyFaq,
      {
        question: "Does this reverse characters or lines?",
        answer: "It reverses line order, not individual characters within each line.",
      },
    ],
  }),
  "difference-checker": createSeo({
    seoTitle: "Text Difference Checker – Compare Two Texts Online | Text Toolkit",
    keywords: ["text diff online", "compare two texts", "difference checker"],
    longDescription:
      "Compare two blocks of text side by side and highlight added and removed lines — a free online diff tool for reviewing edits, config changes, or version differences. Paste an original and a revised version to see exactly what changed, with green for additions and red for deletions. Useful for proofreading, code review snippets, legal document comparison, and verifying export transformations. All comparison runs locally; nothing is sent to a server.",
    example: {
      label: "Line diff",
      before: "Line one\nLine two\nLine three",
      after: "Line one\nLine two changed\nLine four",
    },
    faq: [
      privacyFaq,
      {
        question: "Does this compare word by word?",
        answer: "This tool compares line by line. Changed words within the same line show as a removed and added line pair.",
      },
    ],
  }),
  "word-count": createSeo({
    seoTitle: "Word Counter Online – Count Words, Sentences & Characters | Text Toolkit",
    keywords: ["word counter online", "character count", "count words in text"],
    longDescription:
      "Count words, sentences, paragraphs, and characters in any text — a free online word counter for writers, students, and SEO professionals. Paste an article draft, essay, meta description, or social post to see live statistics as you type. Track length limits for Twitter, meta tags, or assignment requirements without copying into a word processor. Statistics update automatically with a short debounce so you can edit naturally while watching counts change.",
    example: {
      before: "Hello world. This is a test.\n\nSecond paragraph here.",
      after: "Words: 9 | Sentences: 2 | Paragraphs: 2 | Characters: 52",
    },
    faq: [
      privacyFaq,
      {
        question: "How are paragraphs counted?",
        answer: "Paragraphs are blocks of text separated by one or more blank lines.",
      },
    ],
  }),
  "add-prefix-suffix": createSeo({
    keywords: ["add prefix to lines", "add suffix to text", "prefix suffix each line"],
    longDescription:
      "Add a custom prefix and/or suffix to every line of text — ideal for wrapping list items in HTML tags, quoting CSV fields, or batch-formatting log lines. Enter your prefix (like - or <li>) and suffix (like </li>) once and apply them to hundreds of lines instantly. Commonly used when converting plain lists to Markdown bullets, SQL IN clauses, or JSON string arrays during data prep workflows.",
    example: {
      before: "apple\nbanana\ncherry",
      after: '- "apple"\n- "banana"\n- "cherry"',
    },
    faq: [privacyFaq, { question: "Can I use only a prefix?", answer: "Yes. Leave the suffix field empty to add a prefix alone." }],
  }),
  "add-line-breaks": createSeo({
    keywords: ["insert line breaks", "split text by character count", "wrap text at length"],
    longDescription:
      "Insert line breaks after a specific character count or at a delimiter — useful for breaking long URLs, formatting prose for narrow columns, or splitting comma-separated values onto separate lines. Choose character-count mode to hard-wrap at N characters, or delimiter mode to break after each comma, semicolon, or custom separator. Helpful for preparing text for SMS segments, fixed-width displays, or cleaning pasted PDF content.",
    example: {
      before: "one,two,three,four",
      after: "one,\ntwo,\nthree,\nfour",
    },
    faq: [privacyFaq],
  }),
  "remove-line-breaks": createSeo({
    seoTitle: "Remove Line Breaks Online – Delete Newlines from Text | Text Toolkit",
    keywords: ["remove line breaks online", "remove newlines from text", "join lines"],
    longDescription:
      "Remove line breaks and join lines into continuous text — the fastest way to remove newlines from text copied from PDFs, emails, or wrapped web pages. Replace breaks with a space, empty string, or any custom separator. Essential for fixing broken sentences in legal documents, preparing single-line database fields, or converting multiline addresses into one line for forms.",
    example: {
      before: "This is a sentence\nthat was broken\nacross lines.",
      after: "This is a sentence that was broken across lines.",
    },
    faq: [
      privacyFaq,
      {
        question: "Does this handle Windows (CRLF) line endings?",
        answer: "Yes. The tool normalizes \\r\\n, \\r, and \\n line breaks.",
      },
    ],
  }),
  "concatenate-text": createSeo({
    keywords: ["concatenate text online", "merge two texts", "combine lines"],
    longDescription:
      "Merge two texts line by line with a custom delimiter — combine columns from separate exports, join first and last names, or stitch parallel datasets row by row. Paste Text A and Text B side by side; each line pair is joined with your chosen delimiter (space, comma, tab, etc.). Perfect for spreadsheet-free data merging when you only need a quick one-off combination.",
    example: {
      before: "A lines: John\nJane\nB lines: Smith\nDoe",
      after: "John Smith\nJane Doe",
    },
    faq: [privacyFaq],
  }),
  "split-text": createSeo({
    keywords: ["split text by delimiter", "split string online", "text splitter"],
    longDescription:
      "Split text by any delimiter into new lines or tab-separated columns. Break apart comma-separated values, pipe-delimited logs, or custom-separated exports without a spreadsheet. Output as one value per line or as columns on a single row — handy for quick CSV inspection, converting inline lists to line lists, or reformatting data for another tool.",
    example: {
      before: "red,green,blue",
      after: "red\ngreen\nblue",
    },
    faq: [privacyFaq],
  }),
  "extract-column": createSeo({
    keywords: ["extract column from csv", "get column from delimited text"],
    longDescription:
      "Extract one column from delimited text by index — pull email addresses from a CSV export, isolate usernames from pipe-separated logs, or grab the third field from any structured paste. Set the delimiter (comma, tab, pipe) and zero-based column index to output just the values you need, one per line.",
    example: {
      before: "John,25,NYC\nJane,30,LA",
      after: "25\n30",
    },
    faq: [privacyFaq, { question: "Are column indexes zero-based?", answer: "Yes. The first column is index 0." }],
  }),
  "swap-columns": createSeo({
    keywords: ["swap csv columns", "reorder delimited columns"],
    longDescription:
      "Swap two columns in delimited text without Excel — reorder name/surname fields, exchange date and amount columns, or fix misaligned CSV exports. Specify delimiter and the two column indexes to exchange; every row is updated consistently. Runs in-browser for quick fixes during data cleanup.",
    example: {
      before: "Doe,John\nSmith,Jane",
      after: "John,Doe\nJane,Smith",
    },
    faq: [privacyFaq],
  }),
  "reverse-words": createSeo({
    keywords: ["reverse word order", "reverse words in sentence"],
    longDescription:
      "Reverse the order of words on each line while keeping characters within words unchanged. Useful for language puzzles, testing palindrome logic, or creating intentional word-order effects. Each line is processed independently so multiline text stays structured.",
    example: {
      before: "hello world today",
      after: "today world hello",
    },
    faq: [privacyFaq],
  }),
  "reverse-letters": createSeo({
    keywords: ["reverse text", "reverse string online", "backwards text"],
    longDescription:
      "Reverse all characters in each line — flip strings backwards for encoding games, generating mirror text, or checking symmetric patterns. Processes line by line so multiline input keeps its row structure. Instant results with no upload required.",
    example: {
      before: "hello",
      after: "olleh",
    },
    faq: [privacyFaq],
  }),
  "remove-duplicate-lines": createSeo({
    seoTitle: "Remove Duplicate Lines Online – Dedupe Text Lists | Text Toolkit",
    keywords: ["remove duplicate lines online", "dedupe list", "remove repeated lines"],
    longDescription:
      "Remove duplicate lines from any list while keeping the first occurrence — essential for cleaning email lists, deduplicating log files, merging contact exports, or tidying tag lists. Toggle case-sensitive mode when Mail@example.com and mail@example.com should be treated as different entries. Fast, private, and browser-based.",
    example: {
      before: "apple\nbanana\napple\ncherry\nbanana",
      after: "apple\nbanana\ncherry",
    },
    faq: [privacyFaq],
  }),
  "remove-empty-lines": createSeo({
    keywords: ["remove blank lines", "delete empty lines online"],
    longDescription:
      "Strip blank lines from text — collapse extra whitespace in copied content, tighten up code or config files, or prepare clean single-spaced lists. Lines containing only spaces are treated as empty. One click to remove all of them while preserving non-blank content.",
    example: {
      before: "line one\n\n\nline two\n\nline three",
      after: "line one\nline two\nline three",
    },
    faq: [privacyFaq],
  }),
  "remove-letter-accents": createSeo({
    keywords: ["remove accents from text", "strip diacritics", "normalize accented characters"],
    longDescription:
      "Remove accents and diacritics from letters using Unicode NFD normalization — convert café to cafe, naïve to naive, and ü to u. Essential for search indexing, ASCII-only system imports, URL slug generation, and matching international names in databases that don't support extended characters.",
    example: {
      before: "café résumé naïve",
      after: "cafe resume naive",
    },
    faq: [privacyFaq],
  }),
  "remove-unwanted-characters": createSeo({
    keywords: ["remove special characters", "strip characters from text"],
    longDescription:
      "Delete specific characters or strip all non-alphanumeric symbols from text. Specify exactly which symbols to remove, or enable remove-all-non-alphanumeric for a quick letters-and-numbers-only pass. Useful for sanitizing user input, cleaning scraped data, or preparing text for legacy systems with limited character sets.",
    example: {
      before: "Hello, World! #2024",
      after: "Hello World 2024",
    },
    faq: [privacyFaq],
  }),
  "remove-lines-containing": createSeo({
    keywords: ["remove lines containing text", "filter lines by keyword"],
    longDescription:
      "Remove or keep lines based on whether they contain specific text — filter log files by error codes, drop header rows from exports, or extract only lines mentioning a product name. Choose remove-lines-containing or keep-only-matching mode depending on your cleanup goal.",
    example: {
      before: "INFO started\nERROR failed\nINFO done",
      after: "INFO started\nINFO done",
    },
    faq: [privacyFaq],
  }),
  "remove-emojis": createSeo({
    keywords: ["remove emojis from text", "strip emoji online"],
    longDescription:
      "Strip emoji characters from text while preserving regular letters and symbols. Clean social media exports, normalize user comments for analysis, or prepare plain-text versions of messages that included emoji reactions. Handles common emoji ranges including skin tones and combined sequences.",
    example: {
      before: "Hello 👋 World 🌍",
      after: "Hello  World ",
    },
    faq: [privacyFaq],
  }),
  "strip-html-tags": createSeo({
    seoTitle: "Remove HTML Tags from Text – HTML Tag Stripper Online | Text Toolkit",
    keywords: ["remove html tags from text", "html tag stripper", "strip html online"],
    longDescription:
      "Remove HTML tags from text and get plain content — paste rendered page source, email HTML, or CMS exports and strip all markup instantly. Ideal for extracting readable text from snippets, cleaning scraped content before analysis, or recovering copy when you only have HTML. No parsing server involved; safe for private HTML content.",
    example: {
      before: "<p>Hello <strong>world</strong></p>",
      after: "Hello world",
    },
    faq: [privacyFaq],
  }),
  "add-line-numbers": createSeo({
    keywords: ["add line numbers to text", "number lines online"],
    longDescription:
      "Add line numbers, letters, or roman numerals to each line of text. Choose starting number and numbering style for code samples, legal exhibits, poetry analysis, or documentation. Outputs prefixed numbers like 1. First line for easy reference in discussions or bug reports.",
    example: {
      before: "alpha\nbeta\ngamma",
      after: "1. alpha\n2. beta\n3. gamma",
    },
    faq: [privacyFaq],
  }),
  "add-commas-to-numbers": createSeo({
    keywords: ["add commas to numbers", "number formatter", "thousands separator"],
    longDescription:
      "Format numbers with thousand separators — add commas or periods to large integers embedded in text. Fix unformatted figures in financial reports, localize number display, or prepare readable statistics for presentations without manual editing.",
    example: {
      before: "Revenue was 1000000 dollars.",
      after: "Revenue was 1,000,000 dollars.",
    },
    faq: [privacyFaq],
  }),
  "replace-smart-straight-quotes": createSeo({
    keywords: ["smart quotes to straight quotes", "convert curly quotes"],
    longDescription:
      "Convert between smart (curly) quotes and straight quotes — fix typography from Word documents for code strings, normalize quotes for JSON, or apply typographic quotes for published content. Bidirectional conversion handles common single and double quote variants.",
    example: {
      before: "\u201CHello\u201D she said.",
      after: '"Hello" she said.',
    },
    faq: [privacyFaq],
  }),
  "tabs-to-spaces": createSeo({
    keywords: ["tabs to spaces converter", "convert tab to spaces"],
    longDescription:
      "Convert tab characters to spaces with a configurable tab width — standardize indentation in pasted code, align text for email, or meet style guides that require spaces instead of tabs. Default is four spaces per tab, adjustable to two or eight as needed.",
    example: {
      before: "hello\tworld",
      after: "hello    world",
    },
    faq: [privacyFaq],
  }),
  "spaces-to-tabs": createSeo({
    keywords: ["spaces to tabs converter", "convert spaces to tab"],
    longDescription:
      "Convert groups of spaces to tab characters — reverse space-based indentation back to tabs for editors that prefer tab-based formatting. Uses configurable spaces-per-tab to match your project's indentation settings.",
    example: {
      before: "    indented line",
      after: "\tindented line",
    },
    faq: [privacyFaq],
  }),
  "pad-text": createSeo({
    keywords: ["pad text online", "add padding to lines", "align text with spaces"],
    longDescription:
      "Pad each line to a target length with a chosen character on the left, right, or both sides. Create fixed-width columns, align numbers for monospace display, or build formatted tables in plain text. Choose space, zero, or any single character as padding.",
    example: {
      before: "42\n100\n7",
      after: "  42\n 100\n   7",
    },
    faq: [privacyFaq],
  }),
  "word-wrap": createSeo({
    keywords: ["word wrap online", "wrap text at column", "line wrap tool"],
    longDescription:
      "Wrap text at a specified line length, breaking at word boundaries rather than mid-word. Format README paragraphs, email bodies, or comments to fit character limits while keeping words intact. Default wrap width is 80 characters, adjustable for your target column.",
    example: {
      before: "This is a long sentence that needs wrapping at a narrow width.",
      after: "This is a long sentence that needs wrapping at a narrow\nwidth.",
    },
    faq: [privacyFaq],
  }),
  "justify-text": createSeo({
    keywords: ["justify text online", "full justify paragraph"],
    longDescription:
      "Justify text to a fixed line width by expanding spaces between words — create even left and right margins in plain text for ASCII art documents, terminal output, or formatted plain-text reports. Each line except the last is padded to the target length.",
    example: {
      before: "The quick brown fox.",
      after: "The   quick  brown  fox.",
    },
    faq: [privacyFaq],
  }),
  "center-text": createSeo({
    keywords: ["center text online", "center align text"],
    longDescription:
      "Center each line of text within a specified total width — useful for banners, ASCII headers, terminal splash screens, or social post formatting in monospace fonts. Set the total width and each line is padded with leading spaces to center it.",
    example: {
      before: "Title",
      after: "       Title       ",
    },
    faq: [privacyFaq],
  }),
  "bold-text-generator": createSeo({
    keywords: ["bold text generator", "unicode bold letters", "fake bold text"],
    longDescription:
      "Generate Unicode bold text for social posts, Discord, Instagram bios, and messaging apps that don't support HTML formatting. Converts regular Latin letters and numbers to mathematical bold Unicode characters that look bold in most modern apps. Copy and paste anywhere rich text isn't available.",
    example: {
      before: "Bold message",
      after: "𝗕𝗼𝗹𝗱 𝗺𝗲𝘀𝘀𝗮𝗴𝗲",
    },
    faq: [privacyFaq],
  }),
  "italic-text-generator": createSeo({
    keywords: ["italic text generator", "unicode italic", "slanted text generator"],
    longDescription:
      "Create Unicode italic text for platforms without native italic formatting. Converts standard characters to mathematical italic Unicode symbols for emphasis in tweets, bios, and chat messages. Works with Latin alphabet characters for stylish emphasis without markdown.",
    example: {
      before: "Italic style",
      after: "𝘐𝘵𝘢𝘭𝘪𝘤 𝘴𝘵𝘺𝘭𝘦",
    },
    faq: [privacyFaq],
  }),
  "old-english-text-generator": createSeo({
    keywords: ["old english font generator", "gothic text generator", "fraktur text"],
    longDescription:
      "Transform plain text into Old English / Fraktur-style Unicode characters for decorative usernames, medieval-themed content, and social media styling. Each supported letter maps to a corresponding Unicode blackletter symbol for instant ornate text without installing fonts.",
    example: {
      before: "Hello",
      after: "ℌ𝔢𝔩𝔩𝔬",
    },
    faq: [privacyFaq],
  }),
  "cursive-text-generator": createSeo({
    keywords: ["cursive text generator", "script font generator", "fancy text cursive"],
    longDescription:
      "Convert text to cursive/script Unicode characters for Instagram, TikTok, and other platforms. Creates elegant flowing letterforms from regular ASCII input — perfect for bios, captions, and usernames where a handwritten look stands out without image text.",
    example: {
      before: "Script",
      after: "𝒮𝒸𝓇𝒾𝓅𝓉",
    },
    faq: [privacyFaq],
  }),
  "normalize-unicode-text": createSeo({
    keywords: ["normalize unicode text", "convert fancy text to normal", "unicode to ascii"],
    longDescription:
      "Convert styled Unicode characters back to plain ASCII — reverse bold, italic, cursive, and Old English letterforms to normal letters. Essential for cleaning pasted social media text, normalizing user input for search, or extracting readable content from decorative Unicode strings.",
    example: {
      before: "𝗛𝗲𝗹𝗹𝗼",
      after: "Hello",
    },
    faq: [privacyFaq],
  }),
  "html-encode-decode": createSeo({
    keywords: ["html encode online", "html decode entities", "html entity converter"],
    longDescription:
      "Encode or decode HTML entities — convert special characters like <, >, and & to safe entity form for web pages, or decode entities back to readable text. Essential for debugging templating output, preparing text for HTML insertion, or reading encoded content from APIs.",
    example: {
      before: "<div>Tom & Jerry</div>",
      after: "&lt;div&gt;Tom &amp; Jerry&lt;/div&gt;",
    },
    faq: [privacyFaq],
  }),
  "url-encode-decode": createSeo({
    keywords: ["url encode online", "url decode", "percent encoding"],
    longDescription:
      "URL-encode or decode text using percent-encoding — prepare query string values, decode encoded URLs from logs, or debug API parameters. Handles standard encodeURIComponent / decodeURIComponent behavior for safe transmission in URLs.",
    example: {
      before: "hello world & more",
      after: "hello%20world%20%26%20more",
    },
    faq: [privacyFaq],
  }),
  "html-escape-unescape": createSeo({
    keywords: ["html escape online", "escape html characters"],
    longDescription:
      "Escape or unescape HTML special characters for safe embedding in documents and templates. Escape mode converts &, <, >, quotes, and slashes to entities; unescape reverses the process. Used when sanitizing output or recovering literal HTML from escaped storage.",
    example: {
      before: '<script>alert("x")</script>',
      after: "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    },
    faq: [privacyFaq],
  }),
  "username-generator": createSeo({
    keywords: ["random username generator", "username maker online"],
    longDescription:
      "Generate random usernames by combining word pairs and numbers — get creative handle ideas for games, forums, and social accounts. Generate multiple suggestions at once and pick your favorite. Uses cryptographically secure randomness for number suffixes.",
    example: {
      before: "(click Generate)",
      after: "cloudtiger482\nnovaember739",
    },
    faq: [privacyFaq],
  }),
  "strong-password-generator": createSeo({
    seoTitle: "Random Password Generator – Secure Strong Passwords | Text Toolkit",
    keywords: ["random password generator", "secure password generator", "strong password maker"],
    longDescription:
      "Generate cryptographically secure strong passwords with customizable length and character sets — a free random password generator that uses crypto.getRandomValues(), not weak pseudo-random math. Toggle uppercase, numbers, and symbols; generate multiple passwords at once for new accounts. Nothing is stored or transmitted; passwords exist only in your browser session.",
    example: {
      before: "(click Generate)",
      after: "K9#mPx$vL2nQ8rTz",
    },
    faq: [
      privacyFaq,
      {
        question: "Are these passwords truly random?",
        answer: "Yes. This tool uses crypto.getRandomValues() for cryptographically secure randomness.",
      },
    ],
  }),
  "pronounceable-password": createSeo({
    keywords: ["pronounceable password generator", "memorable password generator"],
    longDescription:
      "Generate pronounceable passwords by alternating consonants and vowels — easier to read aloud and type than random symbol strings, while still unpredictable. Useful for temporary credentials, Wi-Fi passwords you need to share verbally, or accounts where memorability matters alongside reasonable entropy.",
    example: {
      before: "(click Generate)",
      after: "vemokatubi",
    },
    faq: [privacyFaq],
  }),
  "random-string-generator": createSeo({
    keywords: ["random string generator", "random alphanumeric string"],
    longDescription:
      "Generate random strings from alphanumeric, letter-only, number-only, or custom character sets. Create API keys placeholders, test tokens, unique IDs for fixtures, or sample data for development. Generate multiple strings in one click with secure randomness.",
    example: {
      before: "(click Generate)",
      after: "a7Kx9mP2nQ",
    },
    faq: [privacyFaq],
  }),
  "random-word-generator": createSeo({
    keywords: ["random word generator", "generate random words"],
    longDescription:
      "Generate random words filtered by minimum and maximum length — useful for word games, creative writing prompts, placeholder content, or brainstorming exercises. Pulls from a curated English word list and outputs one word per line.",
    example: {
      before: "(click Generate)",
      after: "river\nforest\nplanet",
    },
    faq: [privacyFaq],
  }),
  "filler-text": createSeo({
    keywords: ["lorem ipsum generator", "placeholder text generator"],
    longDescription:
      "Generate Lorem Ipsum or plain English placeholder paragraphs for mockups, design comps, and development templates. Choose paragraph count and text style — classic Latin filler or readable English placeholder prose. Instant copy for filling layout gaps before final content arrives.",
    example: {
      before: "(click Generate)",
      after: "Lorem ipsum dolor sit amet...",
    },
    faq: [privacyFaq],
  }),
  "random-number-generator": createSeo({
    keywords: ["random number generator", "pick random numbers online"],
    longDescription:
      "Generate random numbers within a min-max range — pick lottery-style numbers, create test datasets, or simulate dice rolls. Control count and whether duplicates are allowed when you need unique values. Fast and browser-based for quick random picks.",
    example: {
      before: "Range 1–10, count 3",
      after: "7\n2\n9",
    },
    faq: [privacyFaq],
  }),
  "random-email-generator": createSeo({
    keywords: ["random email generator", "fake email generator for testing"],
    longDescription:
      "Generate random email addresses for form testing, QA scenarios, and development fixtures — not for spam. Customize the domain and batch count to populate test databases or demo accounts. Addresses are randomly generated and not tied to real inboxes.",
    example: {
      before: "(click Generate)",
      after: "cloudtiger482@example.com",
    },
    faq: [privacyFaq],
  }),
  "email-extractor": createSeo({
    keywords: ["extract emails from text", "email extractor online"],
    longDescription:
      "Extract email addresses from unstructured text — pull contacts from web page copy, document dumps, log files, or chat exports using regex pattern matching. Duplicate addresses are removed automatically. No network requests; extraction runs entirely on pasted content in your browser.",
    example: {
      before: "Contact us at help@example.com or sales@company.org for info.",
      after: "help@example.com\nsales@company.org",
    },
    faq: [privacyFaq],
  }),
  "url-extractor": createSeo({
    keywords: ["extract urls from text", "url extractor online", "find links in text"],
    longDescription:
      "Extract URLs from unstructured text — find all http and https links in pasted content from documents, emails, or scraped pages. Deduplicates results for a clean link list. Useful for SEO audits snippets, broken-link checks on copied content, or building crawl lists from raw text.",
    example: {
      before: "Visit https://example.com and also http://test.org/page.",
      after: "https://example.com\nhttp://test.org/page",
    },
    faq: [privacyFaq],
  }),
};

export const getToolSeo = (slug: string): ToolSeoFields => {
  const content = seoContent[slug];
  if (!content) {
    return {
      longDescription: "Free online text tool. Process your text instantly in the browser with no upload required.",
      example: { before: "Input text", after: "Output text" },
      faq: [privacyFaq],
    };
  }
  return content;
};

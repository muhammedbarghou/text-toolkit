export const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.`;

export const PLAIN_ENGLISH_PLACEHOLDER = `The quick brown fox jumps over the lazy dog. This sample text can be used to fill space in designs and mockups. Replace it with your own content when ready.

Design systems help teams build consistent user interfaces. Good typography, spacing, and color choices make products easier to use and more pleasant to look at.

When writing placeholder text, keep sentences varied in length. Short ones work well. Longer sentences give readers a sense of rhythm and flow that mirrors real content more closely than repetitive filler ever could.`;

export const USERNAME_WORDS = [
  "alpha", "beta", "cloud", "delta", "echo", "flux", "ghost", "hawk",
  "iron", "jade", "kite", "luna", "mint", "nova", "onyx", "pixel",
  "quest", "river", "storm", "tiger", "ultra", "vortex", "wave", "zen",
  "spark", "blaze", "frost", "ember", "swift", "brave", "clever", "bright",
];

export const RANDOM_WORDS = [
  "apple", "bridge", "candle", "dragon", "ember", "forest", "garden", "harbor",
  "island", "journey", "kitten", "lighthouse", "mountain", "nectar", "ocean", "planet",
  "quartz", "river", "sunset", "thunder", "umbrella", "violet", "whisper", "xenon",
  "yellow", "zephyr", "anchor", "breeze", "crystal", "dawn", "eagle", "falcon",
  "glacier", "horizon", "ivory", "jungle", "kingdom", "legend", "meadow", "night",
  "oracle", "prairie", "quiver", "rainbow", "silver", "temple", "universe", "valley",
];

export const getRandomWord = (): string =>
  RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];

export const getRandomUsernameWord = (): string =>
  USERNAME_WORDS[Math.floor(Math.random() * USERNAME_WORDS.length)];

export const getLoremParagraphs = (count: number): string => {
  const paragraphs = LOREM_IPSUM.split("\n\n");
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(paragraphs[i % paragraphs.length]);
  }
  return result.join("\n\n");
};

export const getPlainEnglishParagraphs = (count: number): string => {
  const paragraphs = PLAIN_ENGLISH_PLACEHOLDER.split("\n\n");
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(paragraphs[i % paragraphs.length]);
  }
  return result.join("\n\n");
};

export const getSecureRandomInt = (max: number): number => {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
};

export const getSecureRandomChar = (charset: string): string =>
  charset[getSecureRandomInt(charset.length)];

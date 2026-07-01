export type WordCountStats = {
  words: number;
  sentences: number;
  paragraphs: number;
  characters: number;
};

export const getWordCountStats = (input: string): WordCountStats => {
  const characters = input.length;
  const words = input.trim() ? input.trim().split(/\s+/).length : 0;
  const sentences = input.trim()
    ? (input.match(/[^.!?]+[.!?]+/g) ?? [input.trim()]).filter((s) => s.trim()).length
    : 0;
  const paragraphs = input.trim()
    ? input.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;

  return { words, sentences, paragraphs, characters };
};

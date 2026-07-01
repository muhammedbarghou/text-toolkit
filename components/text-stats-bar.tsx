type TextStatsBarProps = {
  text: string;
};

export const getTextStats = (text: string) => {
  const characters = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? text.split(/\r\n|\r|\n/).length : 0;

  return { characters, words, lines };
};

export const TextStatsBar = ({ text }: TextStatsBarProps) => {
  const { characters, words, lines } = getTextStats(text);

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span>{characters} characters</span>
      <span>{words} words</span>
      <span>{lines} lines</span>
    </div>
  );
};

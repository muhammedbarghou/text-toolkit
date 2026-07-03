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
    <div className="mt-2 flex gap-4 font-mono text-xs text-muted-foreground">
      <span>
        Characters: <strong className="text-foreground">{characters}</strong>
      </span>
      <span>
        Words: <strong className="text-foreground">{words}</strong>
      </span>
      <span>
        Lines: <strong className="text-foreground">{lines}</strong>
      </span>
    </div>
  );
};

type ToolLongDescriptionProps = {
  content: string;
};

export const ToolLongDescription = ({ content }: ToolLongDescriptionProps) => (
  <section className="mt-10">
    <h2 className="text-xl font-semibold tracking-tight">About this tool</h2>
    <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
      {content.split("\n\n").map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  </section>
);

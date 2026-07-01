import type { ToolExample as ToolExampleData } from "@/lib/tools/types";

type ToolExampleProps = {
  example: ToolExampleData;
};

export const ToolExampleSection = ({ example }: ToolExampleProps) => (
  <section className="mt-10">
    <h2 className="text-xl font-semibold tracking-tight">
      {example.label ? `Example: ${example.label}` : "Example"}
    </h2>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">Before</p>
        <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 font-mono text-sm whitespace-pre-wrap">
          {example.before}
        </pre>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-muted-foreground">After</p>
        <pre className="overflow-x-auto rounded-lg border bg-muted/30 p-4 font-mono text-sm whitespace-pre-wrap">
          {example.after}
        </pre>
      </div>
    </div>
  </section>
);

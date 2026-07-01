import Link from "next/link";

import { categoryToAnchor, type ToolMeta } from "@/lib/tools/types";

type RelatedToolsProps = {
  tools: ToolMeta[];
  category: ToolMeta["category"];
};

export const RelatedTools = ({ tools, category }: RelatedToolsProps) => {
  if (tools.length === 0) return null;

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold tracking-tight">Related tools</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.slug}>
            <Link
              href={`/tools/${tool.slug}`}
              className="block rounded-lg border px-4 py-3 text-sm transition-colors hover:bg-muted/50"
            >
              <span className="font-medium">{tool.name}</span>
              <span className="mt-0.5 block text-muted-foreground line-clamp-1">{tool.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <Link
          href={`/tools#${categoryToAnchor(category)}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          More {category} tools →
        </Link>
      </p>
    </section>
  );
};

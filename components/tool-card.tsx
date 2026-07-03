import Link from "next/link";

import { getToolVisual } from "@/lib/tools/tool-visuals";
import type { ToolMeta } from "@/lib/tools/types";

type ToolCardProps = {
  tool: ToolMeta;
};

export const ToolCard = ({ tool }: ToolCardProps) => {
  const { icon: Icon, bg, abbrev } = getToolVisual(tool.slug);

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex h-full items-stretch overflow-hidden rounded border border-border bg-card transition-shadow hover:shadow-md"
    >
      <div
        className="flex w-16 shrink-0 items-center justify-center text-white"
        style={{ backgroundColor: bg }}
        aria-hidden
      >
        {abbrev ? (
          <span className="text-sm font-bold">{abbrev}</span>
        ) : (
          <Icon className="size-6" strokeWidth={2.25} />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-3 py-2.5">
        <h3 className="truncate text-sm font-semibold text-foreground group-hover:text-primary">
          {tool.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-muted-foreground">
          {tool.description}
        </p>
      </div>
    </Link>
  );
};

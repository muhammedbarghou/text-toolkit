import Link from "next/link";

import { categoryToAnchor, type ToolMeta } from "@/lib/tools/types";

type ToolBreadcrumbsProps = {
  tool: ToolMeta;
};

export const ToolBreadcrumbs = ({ tool }: ToolBreadcrumbsProps) => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
    <ol className="flex flex-wrap items-center gap-1.5">
      <li>
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
      </li>
      <li aria-hidden="true">/</li>
      <li>
        <Link href={`/tools#${categoryToAnchor(tool.category)}`} className="hover:text-foreground">
          {tool.category}
        </Link>
      </li>
      <li aria-hidden="true">/</li>
      <li className="text-foreground">{tool.name}</li>
    </ol>
  </nav>
);

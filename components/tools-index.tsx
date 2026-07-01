"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getToolsByCategory, toolCategories } from "@/lib/tools/registry";

export const ToolsIndex = () => {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return toolCategories.map((category) => ({
        category,
        tools: getToolsByCategory(category),
      }));
    }

    return toolCategories
      .map((category) => ({
        category,
        tools: getToolsByCategory(category).filter(
          (tool) =>
            tool.name.toLowerCase().includes(normalized) ||
            tool.description.toLowerCase().includes(normalized) ||
            tool.category.toLowerCase().includes(normalized) ||
            tool.slug.toLowerCase().includes(normalized),
        ),
      }))
      .filter((group) => group.tools.length > 0);
  }, [query]);

  const totalResults = filteredCategories.reduce((sum, group) => sum + group.tools.length, 0);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Text Tools</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Free online text processing tools. Sort, convert, encode, generate, and transform text — all
          in your browser, no upload required.
        </p>
      </div>

      <div className="relative max-w-md">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search tools..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="pl-9"
          aria-label="Search tools"
        />
      </div>

      {totalResults === 0 ? (
        <p className="text-muted-foreground">No tools match your search.</p>
      ) : (
        filteredCategories.map(({ category, tools: categoryTools }) => (
          <section key={category}>
            <h2 className="mb-4 text-xl font-semibold">{category}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryTools.map((tool) => (
                <Link key={tool.slug} href={`/tools/${tool.slug}`}>
                  <Card className="h-full transition-colors hover:bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-base">{tool.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
};

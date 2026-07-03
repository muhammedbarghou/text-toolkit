"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import { ToolCard } from "@/components/tool-card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toolCategories } from "@/lib/tools/category-data";
import { categoryToAnchor, type ToolCategory, type ToolMeta } from "@/lib/tools/types";

type ToolsIndexProps = {
  tools: ToolMeta[];
};

const ALL_CATEGORIES = "all";

export const ToolsIndex = ({ tools }: ToolsIndexProps) => {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>(ALL_CATEGORIES);

  const filteredCategories = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const filterTools = (category: ToolCategory) => {
      const categoryTools = tools.filter((tool) => tool.category === category);
      if (!normalized) return categoryTools;
      return categoryTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(normalized) ||
          tool.description.toLowerCase().includes(normalized) ||
          tool.category.toLowerCase().includes(normalized) ||
          tool.slug.toLowerCase().includes(normalized) ||
          tool.keywords?.some((keyword) => keyword.toLowerCase().includes(normalized)),
      );
    };

    const categories =
      categoryFilter === ALL_CATEGORIES
        ? toolCategories
        : toolCategories.filter((category) => category === categoryFilter);

    return categories
      .map((category) => ({
        category,
        tools: filterTools(category),
      }))
      .filter((group) => group.tools.length > 0);
  }, [categoryFilter, query, tools]);

  const totalResults = filteredCategories.reduce((sum, group) => sum + group.tools.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-9 border-border bg-card pl-9"
              aria-label="Search tools"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="h-9 w-full border-border bg-card sm:w-44" aria-label="Filter by category">
              <SelectValue placeholder="All Tools" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL_CATEGORIES}>All Tools</SelectItem>
              {toolCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6">
        {totalResults === 0 ? (
          <p className="text-muted-foreground">No tools match your search.</p>
        ) : (
          <div className="flex flex-col gap-8">
            {filteredCategories.map(({ category, tools: categoryTools }) => (
              <section key={category} id={categoryToAnchor(category)}>
                <h2 className="mb-3 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  {category}
                </h2>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {categoryTools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

import { categoryIntros, toolCategories } from "./category-data";
import { getToolSeo } from "./seo-content";
import { tools } from "./registry";
import type { ToolCategory, ToolMeta } from "./types";

export { categoryIntros, toolCategories };

export const toolMeta: ToolMeta[] = tools.map((tool) => {
  const seo = getToolSeo(tool.slug);
  return {
    slug: tool.slug,
    name: tool.name,
    category: tool.category,
    description: tool.description,
    requiresInput: tool.requiresInput,
    inputCount: tool.inputCount,
    outputMode: tool.outputMode,
    supportsSwap: tool.supportsSwap,
    inputPlaceholder: tool.inputPlaceholder,
    ...seo,
  };
});

export const getToolMetaBySlug = (slug: string): ToolMeta | undefined =>
  toolMeta.find((tool) => tool.slug === slug);

export const getRelatedTools = (tool: ToolMeta, limit = 5): ToolMeta[] => {
  if (tool.relatedSlugs?.length) {
    return tool.relatedSlugs
      .map((slug) => getToolMetaBySlug(slug))
      .filter((item): item is ToolMeta => item !== undefined)
      .slice(0, limit);
  }

  return toolMeta
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
    .slice(0, limit);
};

export const getToolsByCategory = (category: ToolCategory) =>
  toolMeta.filter((tool) => tool.category === category);

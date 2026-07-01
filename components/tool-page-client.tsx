"use client";

import { notFound } from "next/navigation";

import { DiffToolLayout } from "@/components/diff-tool-layout";
import { TextToolLayout } from "@/components/text-tool-layout";
import { getToolBySlug } from "@/lib/tools/registry";

type ToolPageClientProps = {
  slug: string;
};

export const ToolPageClient = ({ slug }: ToolPageClientProps) => {
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  if (tool.inputCount === 2) {
    return <DiffToolLayout tool={tool} />;
  }

  return <TextToolLayout tool={tool} />;
};

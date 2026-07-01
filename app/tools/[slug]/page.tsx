import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ToolPageClient } from "@/components/tool-page-client";
import { getToolBySlug, tools } from "@/lib/tools/registry";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => tools.map((tool) => ({ slug: tool.slug }));

export const generateMetadata = async ({ params }: ToolPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  return {
    title: `${tool.name} | Text Toolkit`,
    description: tool.description,
  };
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  return <ToolPageClient slug={slug} />;
}

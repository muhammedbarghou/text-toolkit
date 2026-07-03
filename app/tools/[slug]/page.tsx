import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { RelatedTools } from "@/components/seo/related-tools";
import { ToolBreadcrumbs } from "@/components/seo/tool-breadcrumbs";
import { ToolExampleSection } from "@/components/seo/tool-example";
import { ToolFaq } from "@/components/seo/tool-faq";
import { ToolLongDescription } from "@/components/seo/tool-long-description";
import {
  getToolPageTitle,
  ToolStructuredData,
} from "@/components/seo/tool-structured-data";
import { ToolInteractive } from "@/components/tool-interactive";
import { getRelatedTools, getToolMetaBySlug, toolMeta } from "@/lib/tools/meta-registry";
import { getSiteUrl } from "@/lib/tools/site-config";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => toolMeta.map((tool) => ({ slug: tool.slug }));

export const generateMetadata = async ({ params }: ToolPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const tool = getToolMetaBySlug(slug);

  if (!tool) {
    return { title: "Tool Not Found" };
  }

  const title = getToolPageTitle(tool);
  const url = `${getSiteUrl()}/tools/${tool.slug}`;

  return {
    title: {
      absolute: title,
    },
    description: tool.description,
    keywords: tool.keywords,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title,
      description: tool.description,
      url,
      type: "website",
    },
  };
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolMetaBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(tool);

  return (
    <>
      <ToolStructuredData tool={tool} />
      <article className="mx-auto w-full max-w-6xl px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <ToolBreadcrumbs tool={tool} />
          <header className="mb-8">
            <h1 className="mb-1 text-2xl font-bold text-foreground">
              {tool.name} – Free Online Tool
            </h1>
            <p className="mb-8 text-sm text-muted-foreground">{tool.description}</p>
          </header>

          <ToolInteractive slug={slug} inputCount={tool.inputCount} />
        </div>

        <ToolLongDescription content={tool.longDescription} />
        <ToolExampleSection example={tool.example} />
        <ToolFaq faq={tool.faq} />
        <RelatedTools tools={relatedTools} category={tool.category} />
      </article>
    </>
  );
}

import { getSiteUrl, SITE_NAME } from "@/lib/tools/site-config";
import { categoryToAnchor, type ToolMeta } from "@/lib/tools/types";

type ToolStructuredDataProps = {
  tool: ToolMeta;
};

export const ToolStructuredData = ({ tool }: ToolStructuredDataProps) => {
  const siteUrl = getSiteUrl();
  const pageUrl = `${siteUrl}/tools/${tool.slug}`;
  const categoryUrl = `${siteUrl}/tools#${categoryToAnchor(tool.category)}`;

  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: pageUrl,
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.category,
        item: categoryUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.name,
        item: pageUrl,
      },
    ],
  };

  const schemas = [softwareApplication, faqPage, breadcrumbList];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export const getToolPageTitle = (tool: ToolMeta): string =>
  tool.seoTitle ?? `${tool.name} – Free Online Tool | ${SITE_NAME}`;

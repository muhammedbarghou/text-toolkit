import type { Metadata } from "next";

import { ToolsIndex } from "@/components/tools-index";
import { toolMeta } from "@/lib/tools/meta-registry";
import { getSiteUrl, SITE_NAME } from "@/lib/tools/site-config";

export const metadata: Metadata = {
  title: {
    absolute: `All Text Tools | ${SITE_NAME}`,
  },
  description:
    "Browse all free online text processing tools — sort, convert, encode, generate, and more.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: `All Text Tools | ${SITE_NAME}`,
    description:
      "Browse all free online text processing tools — sort, convert, encode, generate, and more.",
    url: `${getSiteUrl()}/tools`,
    type: "website",
  },
};

export default function ToolsPage() {
  return <ToolsIndex tools={toolMeta} />;
}

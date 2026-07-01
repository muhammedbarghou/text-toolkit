import type { Metadata } from "next";

import { ToolsIndex } from "@/components/tools-index";

export const metadata: Metadata = {
  title: "All Text Tools | Text Toolkit",
  description:
    "Browse all free online text processing tools — sort, convert, encode, generate, and more.",
};

export default function ToolsPage() {
  return <ToolsIndex />;
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { AppToaster } from "@/components/app-toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSiteUrl, SITE_NAME } from "@/lib/tools/site-config";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_NAME} — Free Online Text Tools`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A collection of free online text processing tools. Sort, convert, encode, generate, and transform text — all in your browser.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <TooltipProvider>
          <main className="flex-1">{children}</main>
          <AppToaster />
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}

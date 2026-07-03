"use client";

import { ThemeProvider } from "next-themes";

import { Toaster } from "@/components/ui/sonner";

export const AppToaster = () => (
  <ThemeProvider attribute="class" forcedTheme="light" disableTransitionOnChange>
    <Toaster />
  </ThemeProvider>
);

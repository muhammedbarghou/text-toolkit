"use client";

import Link from "next/link";
import { ExternalLinkIcon, SettingsIcon } from "lucide-react";

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 bg-header shadow-sm">
    <div className="relative mx-auto flex h-12 max-w-6xl items-center justify-center px-4">
      <Link
        href="/tools"
        className="font-display text-lg font-bold tracking-wide text-primary-foreground uppercase"
      >
        Text Tools
      </Link>
      <div className="absolute right-4 flex items-center gap-3 text-primary-foreground/90">
        <button
          type="button"
          className="rounded p-1 transition-colors hover:bg-white/15"
          aria-label="Settings"
        >
          <SettingsIcon className="size-5" />
        </button>
        <button
          type="button"
          className="rounded p-1 transition-colors hover:bg-white/15"
          aria-label="Share"
        >
          <ExternalLinkIcon className="size-5" />
        </button>
      </div>
    </div>
  </header>
);

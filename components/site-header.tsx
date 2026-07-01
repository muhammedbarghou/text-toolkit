import Link from "next/link";

export const SiteHeader = () => (
  <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
      <Link href="/tools" className="text-lg font-semibold tracking-tight">
        Text Toolkit
      </Link>
      <nav>
        <Link
          href="/tools"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All Tools
        </Link>
      </nav>
    </div>
  </header>
);

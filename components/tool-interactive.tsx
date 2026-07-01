"use client";

import { useEffect, useState } from "react";

import { DiffToolLayout } from "@/components/diff-tool-layout";
import { TextToolLayout } from "@/components/text-tool-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { loadToolRuntime } from "@/lib/tools/load-tool-runtime";
import type { ToolRuntime } from "@/lib/tools/types";

type ToolInteractiveProps = {
  slug: string;
  inputCount?: 1 | 2;
};

const ToolSkeleton = ({ twoInput }: { twoInput?: boolean }) => (
  <div className="flex flex-col gap-6">
    <div className={twoInput ? "grid gap-6 lg:grid-cols-2" : "flex flex-col gap-6"}>
      <Card>
        <CardHeader className="pb-3">
          <Skeleton className="h-5 w-24" />
        </CardHeader>
        <CardContent>
          <Skeleton className="min-h-48 w-full rounded-lg" />
        </CardContent>
      </Card>
      {twoInput && (
        <Card>
          <CardHeader className="pb-3">
            <Skeleton className="h-5 w-24" />
          </CardHeader>
          <CardContent>
            <Skeleton className="min-h-48 w-full rounded-lg" />
          </CardContent>
        </Card>
      )}
    </div>
    <Card>
      <CardHeader className="pb-3">
        <Skeleton className="h-5 w-20" />
      </CardHeader>
      <CardContent>
        <Skeleton className="min-h-48 w-full rounded-lg" />
      </CardContent>
    </Card>
  </div>
);

const ToolInteractiveInner = ({ slug, inputCount }: ToolInteractiveProps) => {
  const [runtime, setRuntime] = useState<ToolRuntime | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadToolRuntime(slug)
      .then((loaded) => {
        if (!cancelled) {
          if (loaded) setRuntime(loaded);
          else setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (error) {
    return (
      <p className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Failed to load this tool. Please refresh the page.
      </p>
    );
  }

  if (!runtime) {
    return <ToolSkeleton twoInput={inputCount === 2} />;
  }

  if (runtime.inputCount === 2) {
    return <DiffToolLayout runtime={runtime} />;
  }

  return <TextToolLayout runtime={runtime} />;
};

export const ToolInteractive = ({ slug, inputCount }: ToolInteractiveProps) => (
  <ToolInteractiveInner key={slug} slug={slug} inputCount={inputCount} />
);

"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowLeftRightIcon, RefreshCwIcon, Trash2Icon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { DownloadButton } from "@/components/download-button";
import { TextStatsBar } from "@/components/text-stats-bar";
import { ToolOptionsRenderer } from "@/components/tool-options-renderer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getWordCountStats } from "@/lib/tools/shared/word-count-utils";
import { getDefaultOptions, type ToolRuntime } from "@/lib/tools/types";

type TextToolLayoutProps = {
  runtime: ToolRuntime;
};

const useDebouncedValue = <T,>(value: T, delay: number): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    {children}
  </p>
);

export const TextToolLayout = ({ runtime }: TextToolLayoutProps) => {
  const requiresInput = runtime.requiresInput !== false;
  const isGenerator = runtime.requiresInput === false;
  const isStatsOutput = runtime.outputMode === "stats";

  const [input, setInput] = useState("");
  const [options, setOptions] = useState(() => getDefaultOptions(runtime.options));
  const [generatedOutput, setGeneratedOutput] = useState("");

  const debouncedInput = useDebouncedValue(input, 150);
  const debouncedOptions = useDebouncedValue(options, 150);

  const liveOutput = useMemo(() => {
    if (isGenerator) return generatedOutput;
    try {
      return runtime.transform(debouncedInput, debouncedOptions);
    } catch {
      return "";
    }
  }, [debouncedInput, debouncedOptions, generatedOutput, isGenerator, runtime]);

  const stats = useMemo(
    () => (isStatsOutput ? getWordCountStats(debouncedInput) : null),
    [debouncedInput, isStatsOutput],
  );

  const output = liveOutput;

  const handleOptionChange = (key: string, value: string | boolean | number) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleClear = () => {
    setInput("");
    if (isGenerator) {
      setGeneratedOutput("");
    }
  };

  const handleGenerate = () => {
    try {
      setGeneratedOutput(runtime.transform("", options));
    } catch {
      setGeneratedOutput("");
    }
  };

  const handleSwap = () => {
    setInput(output);
  };

  const downloadFilename = useMemo(() => `${runtime.slug}.txt`, [runtime.slug]);

  return (
    <div className="flex flex-col gap-6">
      {requiresInput && (
        <section>
          <SectionLabel>Input</SectionLabel>
          <Textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={runtime.inputPlaceholder ?? "Enter your text here..."}
            aria-label="Input text"
          />
          <TextStatsBar text={input} />
        </section>
      )}

      {runtime.options.length > 0 && (
        <div className="mb-4 flex flex-wrap items-end gap-4 rounded border border-border bg-card p-4">
          <ToolOptionsRenderer
            options={runtime.options}
            values={options}
            onChange={handleOptionChange}
          />
        </div>
      )}

      <section>
        <div className="mb-2 flex flex-row items-start justify-between gap-4">
          <SectionLabel>{isStatsOutput ? "Statistics" : "Output"}</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {requiresInput && (
              <Button type="button" variant="outline" size="sm" onClick={handleClear}>
                <Trash2Icon />
                Clear
              </Button>
            )}
            {runtime.supportsSwap && (
              <Button type="button" variant="outline" size="sm" onClick={handleSwap}>
                <ArrowLeftRightIcon />
                Swap
              </Button>
            )}
            {isGenerator && (
              <Button type="button" size="sm" onClick={handleGenerate}>
                <RefreshCwIcon />
                Generate
              </Button>
            )}
            {!isStatsOutput && (
              <>
                <CopyButton text={output} />
                <DownloadButton text={output} filename={downloadFilename} />
              </>
            )}
          </div>
        </div>

        {isStatsOutput && stats ? (
          <div className="grid gap-4 sm:grid-cols-2">
            <StatItem label="Words" value={stats.words} />
            <StatItem label="Sentences" value={stats.sentences} />
            <StatItem label="Paragraphs" value={stats.paragraphs} />
            <StatItem label="Characters" value={stats.characters} />
          </div>
        ) : (
          <Textarea
            value={output}
            readOnly
            placeholder={
              isGenerator
                ? "Generated output will appear here..."
                : "Output will appear here..."
            }
            aria-label="Output text"
            aria-readonly
          />
        )}
      </section>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-lg border border-border bg-muted/30 p-4">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-semibold tabular-nums">{value.toLocaleString()}</p>
  </div>
);

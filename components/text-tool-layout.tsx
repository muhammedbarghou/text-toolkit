"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeftRightIcon, RefreshCwIcon, Trash2Icon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { DownloadButton } from "@/components/download-button";
import { TextStatsBar } from "@/components/text-stats-bar";
import { ToolOptionsRenderer } from "@/components/tool-options-renderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Input</CardTitle>
            <CardDescription>Paste or type your text below.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={runtime.inputPlaceholder ?? "Enter your text here..."}
              className="min-h-48 font-mono text-sm"
              aria-label="Input text"
            />
            <TextStatsBar text={input} />
          </CardContent>
        </Card>
      )}

      {runtime.options.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Options</CardTitle>
          </CardHeader>
          <CardContent>
            <ToolOptionsRenderer
              options={runtime.options}
              values={options}
              onChange={handleOptionChange}
            />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4 pb-3">
          <div>
            <CardTitle className="text-base">{isStatsOutput ? "Statistics" : "Output"}</CardTitle>
            <CardDescription>
              {isGenerator
                ? "Click Generate to create new output."
                : "Updates automatically as you type."}
            </CardDescription>
          </div>
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
        </CardHeader>
        <CardContent>
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
              className="min-h-48 font-mono text-sm"
              aria-label="Output text"
              aria-readonly
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: number }) => (
  <div className="rounded-lg border bg-muted/30 p-4">
    <p className="text-sm text-muted-foreground">{label}</p>
    <p className="mt-1 text-2xl font-semibold tabular-nums">{value.toLocaleString()}</p>
  </div>
);

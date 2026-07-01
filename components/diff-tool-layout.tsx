"use client";

import { useEffect, useMemo, useState } from "react";
import { Trash2Icon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { DownloadButton } from "@/components/download-button";
import { TextStatsBar } from "@/components/text-stats-bar";
import { ToolOptionsRenderer } from "@/components/tool-options-renderer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getDefaultOptions, type ToolConfig } from "@/lib/tools/types";

type DiffToolLayoutProps = {
  tool: ToolConfig;
};

const useDebouncedValue = <T,>(value: T, delay: number): T => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

type DiffLine = {
  type: "added" | "removed" | "unchanged";
  text: string;
};

const computeLineDiff = (textA: string, textB: string): DiffLine[] => {
  const linesA = textA.split(/\r\n|\r|\n/);
  const linesB = textB.split(/\r\n|\r|\n/);
  const m = linesA.length;
  const n = linesB.length;

  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (linesA[i - 1] === linesB[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const result: DiffLine[] = [];
  let i = m;
  let j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && linesA[i - 1] === linesB[j - 1]) {
      result.unshift({ type: "unchanged", text: linesA[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: "added", text: linesB[j - 1] });
      j--;
    } else {
      result.unshift({ type: "removed", text: linesA[i - 1] });
      i--;
    }
  }

  return result;
};

export const DiffToolLayout = ({ tool }: DiffToolLayoutProps) => {
  const isDiffOutput = tool.outputMode === "diff";

  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [options, setOptions] = useState(() => getDefaultOptions(tool.options));

  const debouncedA = useDebouncedValue(inputA, 150);
  const debouncedB = useDebouncedValue(inputB, 150);
  const debouncedOptions = useDebouncedValue(options, 150);

  const combinedInput = useMemo(
    () => `${debouncedA}\n---SPLIT---\n${debouncedB}`,
    [debouncedA, debouncedB],
  );

  const output = useMemo(() => {
    try {
      return tool.transform(combinedInput, debouncedOptions);
    } catch {
      return "";
    }
  }, [combinedInput, debouncedOptions, tool]);

  const diffLines = useMemo(
    () => (isDiffOutput ? computeLineDiff(debouncedA, debouncedB) : []),
    [debouncedA, debouncedB, isDiffOutput],
  );

  const handleOptionChange = (key: string, value: string | boolean | number) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleClear = () => {
    setInputA("");
    setInputB("");
  };

  const downloadFilename = useMemo(() => `${tool.slug}.txt`, [tool.slug]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{tool.name}</h1>
        <p className="mt-1 text-muted-foreground">{tool.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Input A</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Textarea
              value={inputA}
              onChange={(event) => setInputA(event.target.value)}
              placeholder="Paste first text here..."
              className="min-h-48 font-mono text-sm"
              aria-label="Input A"
            />
            <TextStatsBar text={inputA} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Input B</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Textarea
              value={inputB}
              onChange={(event) => setInputB(event.target.value)}
              placeholder="Paste second text here..."
              className="min-h-48 font-mono text-sm"
              aria-label="Input B"
            />
            <TextStatsBar text={inputB} />
          </CardContent>
        </Card>
      </div>

      {tool.options.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Options</CardTitle>
          </CardHeader>
          <CardContent>
            <ToolOptionsRenderer
              options={tool.options}
              values={options}
              onChange={handleOptionChange}
            />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4 pb-3">
          <div>
            <CardTitle className="text-base">Output</CardTitle>
            <CardDescription>Updates automatically as you type.</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" size="sm" onClick={handleClear}>
              <Trash2Icon />
              Clear
            </Button>
            {!isDiffOutput && (
              <>
                <CopyButton text={output} />
                <DownloadButton text={output} filename={downloadFilename} />
              </>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {isDiffOutput ? (
            <div className="min-h-48 overflow-auto rounded-lg border font-mono text-sm">
              {diffLines.length === 0 ? (
                <p className="p-4 text-muted-foreground">Diff will appear here...</p>
              ) : (
                diffLines.map((line, index) => (
                  <div
                    key={`${line.type}-${index}`}
                    className={
                      line.type === "added"
                        ? "bg-green-500/10 px-3 py-0.5 text-green-700 dark:text-green-400"
                        : line.type === "removed"
                          ? "bg-red-500/10 px-3 py-0.5 text-red-700 dark:text-red-400"
                          : "px-3 py-0.5"
                    }
                  >
                    <span className="mr-2 select-none text-muted-foreground">
                      {line.type === "added" ? "+" : line.type === "removed" ? "-" : " "}
                    </span>
                    {line.text || "\u00A0"}
                  </div>
                ))
              )}
            </div>
          ) : (
            <Textarea
              value={output}
              readOnly
              placeholder="Output will appear here..."
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

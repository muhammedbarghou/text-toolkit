"use client";

import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type DownloadButtonProps = {
  text: string;
  filename?: string;
  label?: string;
  disabled?: boolean;
};

export const DownloadButton = ({
  text,
  filename = "output.txt",
  label = "Download",
  disabled,
}: DownloadButtonProps) => {
  const handleDownload = () => {
    if (!text) return;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleDownload}
      disabled={disabled || !text}
      aria-label="Download output as text file"
    >
      <DownloadIcon />
      {label}
    </Button>
  );
};

"use client";

import { CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type CopyButtonProps = {
  text: string;
  label?: string;
  disabled?: boolean;
};

export const CopyButton = ({ text, label = "Copy", disabled }: CopyButtonProps) => {
  const handleCopy = async () => {
    if (!text) {
      toast.error("Nothing to copy");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={handleCopy}
      disabled={disabled || !text}
      aria-label="Copy output to clipboard"
    >
      <CopyIcon />
      {label}
    </Button>
  );
};

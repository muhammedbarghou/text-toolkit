"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { OptionField, OptionValues } from "@/lib/tools/types";

type ToolOptionsRendererProps = {
  options: OptionField[];
  values: OptionValues;
  onChange: (key: string, value: string | boolean | number) => void;
};

export const ToolOptionsRenderer = ({
  options,
  values,
  onChange,
}: ToolOptionsRendererProps) => {
  if (options.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => {
        const id = `option-${option.key}`;

        if (option.type === "select") {
          return (
            <div key={option.key} className="grid gap-2">
              <Label htmlFor={id} className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {option.label}
              </Label>
              <Select
                value={String(values[option.key] ?? option.default)}
                onValueChange={(value) => onChange(option.key, value)}
              >
                <SelectTrigger id={id} className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {option.choices.map((choice) => (
                    <SelectItem key={choice.value} value={choice.value}>
                      {choice.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        }

        if (option.type === "text") {
          return (
            <div key={option.key} className="grid gap-2">
              <Label htmlFor={id} className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {option.label}
              </Label>
              <Input
                id={id}
                type="text"
                value={String(values[option.key] ?? option.default)}
                placeholder={option.placeholder}
                onChange={(event) => onChange(option.key, event.target.value)}
              />
            </div>
          );
        }

        if (option.type === "number") {
          return (
            <div key={option.key} className="grid gap-2">
              <Label htmlFor={id} className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {option.label}
              </Label>
              <Input
                id={id}
                type="number"
                min={option.min}
                max={option.max}
                value={Number(values[option.key] ?? option.default)}
                onChange={(event) => onChange(option.key, Number(event.target.value))}
              />
            </div>
          );
        }

        return (
          <div key={option.key} className="flex items-center gap-2 pt-6">
            <Checkbox
              id={id}
              checked={Boolean(values[option.key] ?? option.default)}
              onCheckedChange={(checked) => onChange(option.key, checked === true)}
            />
            <Label htmlFor={id} className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {option.label}
            </Label>
          </div>
        );
      })}
    </div>
  );
};

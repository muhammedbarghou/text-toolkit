import type { ToolConfig } from "../types";

export const differenceCheckerTool: ToolConfig = {
  slug: "difference-checker",
  name: "Difference Checker",
  category: "Basic Tools",
  description: "Compare two texts side by side and highlight the differences.",
  inputCount: 2,
  outputMode: "diff",
  options: [],
  transform: () => "",
};

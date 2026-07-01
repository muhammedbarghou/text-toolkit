export const SITE_NAME = "Text Toolkit";

export const getSiteUrl = (): string =>
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://texttoolkit.vercel.app";

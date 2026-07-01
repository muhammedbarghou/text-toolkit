# SEO Launch Checklist

## Before launch

1. Set `NEXT_PUBLIC_SITE_URL` in production to your real domain (see `.env.example`).
2. Run `npm run build` and verify `/sitemap.xml` and `/robots.txt` in the `out/` folder.
3. View page source on a tool page (e.g. `/tools/convert-case`) — confirm H1, description, FAQ, and JSON-LD appear without JavaScript.
4. Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results).

## Google Search Console

1. Verify domain ownership.
2. Submit `https://your-domain.com/sitemap.xml`.
3. Monitor impressions vs. CTR per URL — rising impressions with flat CTR may indicate AI Overview interception above your listing.

## Analytics

1. Add GA4 or a privacy-friendly analytics tool.
2. Segment by landing page to see which of the 49 tools pull traffic.
3. Double down on content and internal links for high-impression tools.

## Off-page signals

1. Submit to tool directories (Product Hunt, AlternativeTo, dev tool lists).
2. Share on r/webdev, r/SideProject, dev.to, or Hacker News once polished.
3. Consider open-sourcing the repo — GitHub README mentions help both traditional SEO and AI citation models.

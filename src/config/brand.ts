/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Site identity and font names used by layouts, components, and SEO metadata.
 *
 * Fonts flow into   → astro.config.mjs  (Astro 7 built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 *
 * Colors & radius live in ONE place: src/styles/theme.css (@theme block).
 * Edit theme.css directly — do not duplicate values here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Birds On The Grid 🐦 🏙️', // Birds 🐦 Backpacks 🎒 & Big Cities 🏙️
  name_short: 'Birds On The Grid - Val. Lucet',
  tagline: 'Birds are on the move. How do cities shape their journeys?',
  url: 'https://example.com',
  locale: 'en_US',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  // To swap fonts: change the `name` values here AND update astro.config.mjs
  // to match (both must stay in sync so Astro can optimise the correct files).
  fonts: {
    body: 'Scope One',
    display: '',
  },
} as const;

export type Brand = typeof brand;

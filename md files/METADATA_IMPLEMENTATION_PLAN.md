# The Reach Smart — Full Website Metadata Implementation Plan

> **Framework:** Next.js 16 (App Router) · **Domain:** `https://thereachsmart.net` · **Languages:** BG (primary), EN, FR

---

## 1. What Is "Full Metadata" and Why It Matters

Metadata is the hidden layer of the website that search engines, social platforms, browsers, and AI scrapers read **before** a human ever loads the page. Getting it right affects:

- **SEO** — how Google discovers, indexes, and ranks the pages
- **Social sharing** — how links look when shared on LinkedIn, Facebook, X/Twitter, WhatsApp
- **Brand trust** — favicons, manifest, app-name in mobile home-screen bookmarks
- **Rich results** — structured data (Schema.org) that enables star ratings, FAQ dropdowns, organisation cards in Google SERPs
- **Crawlability** — `robots.txt`, `sitemap.xml` tell search bots what to crawl
- **Performance signals** — `canonical`, `alternate` hreflang, `theme-color`

---

## 2. Current State Audit

### What already exists in `src/app/layout.js`

| Field | Status | Notes |
|---|---|---|
| `title` | ✅ Set | Mixed BG/EN — needs refinement |
| `description` | ✅ Set | BG only — needs EN & FR variants |
| `keywords` | ✅ Set | Basic 6 keywords — needs expansion |
| `metadataBase` | ✅ Set | `https://thereachsmart.net` |
| `openGraph.title` | ✅ Set | EN only |
| `openGraph.description` | ✅ Set | EN only |
| `openGraph.url` | ✅ Set | Correct |
| `openGraph.siteName` | ✅ Set | `The Reach Smart` |
| `openGraph.images` | ⚠️ Partial | Uses `/logo.png` — not optimised OG dimensions (1200×630) |
| `openGraph.locale` | ⚠️ Weak | `bg_BG` only — no `alternate` locales |
| `openGraph.type` | ✅ Set | `website` |
| `icons.icon` | ⚠️ Partial | Only PNG — missing `.ico`, multiple sizes |
| `icons.shortcut` | ⚠️ Partial | Same file, not sized correctly |
| `icons.apple` | ⚠️ Partial | Needs 180×180 dedicated file |
| Twitter Card | ❌ Missing | No `twitter:*` meta tags |
| `robots` | ❌ Missing | No crawl directives |
| `canonical` | ❌ Missing | No self-referencing canonical |
| `hreflang` (alternate) | ❌ Missing | No language targeting for EN/FR |
| `themeColor` | ❌ Missing | No `theme-color` meta |
| `manifest` | ❌ Missing | No `site.webmanifest` / PWA manifest |
| Schema.org JSON-LD | ❌ Missing | No structured data |
| `sitemap.xml` | ❌ Missing | Not generated |
| `robots.txt` | ❌ Missing | No crawl policy file |
| Google Site Verification | ❌ Unknown | GA4 exists, GSC verification TBD |
| OG image (proper) | ❌ Missing | Needs 1200×630 branded image |

---

## 3. Things to Implement

### 3.1 Favicon & App Icons

The browser tab icon, mobile bookmark icon, and PWA icon family.

**Required files** (to create and place in `/public/`):

| File | Size | Purpose |
|---|---|---|
| `favicon.ico` | 16×16 + 32×32 multi-res | Classic browser tab favicon |
| `favicon-16x16.png` | 16×16 | Small tabs |
| `favicon-32x32.png` | 32×32 | Retina tabs |
| `apple-touch-icon.png` | 180×180 | iOS home-screen bookmark |
| `android-chrome-192x192.png` | 192×192 | Android PWA icon |
| `android-chrome-512x512.png` | 512×512 | Android PWA splash |
| `og-image.jpg` | 1200×630 | Open Graph preview card |
| `og-image-square.jpg` | 1200×1200 | Instagram/WhatsApp square variant |

**Source:** All derived from `REACHSMART LOGO.png` (already in project root — 4 MB PNG).

**Updated `icons` object in `layout.js`:**
```js
icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  other: [
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0d0d0d" },
  ],
},
```

---

### 3.2 Web App Manifest (`site.webmanifest`)

Enables "Add to Home Screen" on Android/iOS and defines PWA appearance.

**File:** `/public/site.webmanifest`

```json
{
  "name": "The Reach Smart",
  "short_name": "Reach Smart",
  "description": "AI automations for SaaS & e-commerce",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0d0d0d",
  "theme_color": "#0d0d0d",
  "icons": [
    { "src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

**Add to `layout.js` metadata:**
```js
manifest: "/site.webmanifest",
```

---

### 3.3 Open Graph (OG) Tags — Full & Multilingual

The "link preview" when the URL is shared on LinkedIn, Facebook, Messenger, WhatsApp, Slack, etc.

**Required additions/fixes:**

| Field | Current | Required |
|---|---|---|
| `og:image` | `/logo.png` (512×512) | `/og-image.jpg` (1200×630) |
| `og:image:width` | 512 | 1200 |
| `og:image:height` | 512 | 630 |
| `og:image:type` | `image/png` | `image/jpeg` |
| `og:locale:alternate` | missing | `en_US`, `fr_FR` |
| `og:image:alt` | generic | descriptive sentence |

**Final OG object:**
```js
openGraph: {
  title: "The Reach Smart — AI Automations for SaaS & E-commerce",
  description: "AI systems that take over customer support, lead discovery, personalized outreach, UGC ad variations, and post-purchase communication.",
  url: "https://thereachsmart.net",
  siteName: "The Reach Smart",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "The Reach Smart — AI automation systems for SaaS and e-commerce",
      type: "image/jpeg",
    },
  ],
  locale: "bg_BG",
  alternateLocale: ["en_US", "fr_FR"],
  type: "website",
},
```

---

### 3.4 Twitter / X Card Tags

Controls how the URL appears when shared on X (formerly Twitter).

**Missing entirely. To add:**
```js
twitter: {
  card: "summary_large_image",
  site: "@thereachsmart",      // update with actual handle if different
  creator: "@thereachsmart",
  title: "The Reach Smart — AI Automations for SaaS & E-commerce",
  description: "AI systems that handle support, lead gen, outreach, UGC, and post-purchase — built around your business.",
  images: ["/og-image.jpg"],
},
```

> **Note:** Confirm the actual X/Twitter handle to fill in `@thereachsmart`. If no account exists yet, omit `site`/`creator` for now.

---

### 3.5 Multilingual `hreflang` (Alternate Language Tags)

Tells Google which URL to serve to users in each language/country. Critical for BG/EN/FR targeting.

The site currently uses a **single-page with client-side language switching** (query-param-free, using `localStorage`). This is an SEO limitation — all three language versions share the same URL `https://thereachsmart.net`.

**Two options:**

#### Option A — Single-URL approach (current architecture, minimal change)
Add `alternates.canonical` pointing to the canonical URL and declare all three locales on the same page. Google will interpret the page as multilingual.

```js
alternates: {
  canonical: "https://thereachsmart.net",
  languages: {
    "bg": "https://thereachsmart.net",
    "en": "https://thereachsmart.net",
    "fr": "https://thereachsmart.net",
  },
},
```

> Limitation: Google cannot independently rank `bg`, `en`, and `fr` content — it sees one page.

#### Option B — Subpath routing (recommended for long-term SEO)
Create separate Next.js routes: `/` (BG), `/en/`, `/fr/` with proper `hreflang` declarations and full language-specific metadata per page. Each language version gets independently indexed.

> This requires creating additional page routes in Next.js App Router and is a larger architectural change. Recommended to plan as a Phase 2 if SEO in EN/FR markets is a priority.

**For now, implement Option A** and note Option B as a future improvement.

---

### 3.6 Robots Meta & `robots.txt`

**`robots` field in `layout.js` metadata:**
```js
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
```

**`/public/robots.txt`** (static file — served as-is):
```txt
User-agent: *
Allow: /

Sitemap: https://thereachsmart.net/sitemap.xml
```

---

### 3.7 Sitemap (`sitemap.xml`)

Tells search engines all the pages to crawl and their priority.

**Approach:** Use Next.js App Router's built-in `src/app/sitemap.js` (generates `/sitemap.xml` at build time).

**Structure for current single-page site:**
```js
// src/app/sitemap.js
export default function sitemap() {
  return [
    {
      url: "https://thereachsmart.net",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          bg: "https://thereachsmart.net",
          en: "https://thereachsmart.net",
          fr: "https://thereachsmart.net",
        },
      },
    },
  ];
}
```

If `/en/` and `/fr/` routes are added later, they are simply appended to this array.

---

### 3.8 Schema.org Structured Data (JSON-LD)

Enables Google rich results: organisation card in Knowledge Graph, FAQ accordion in SERPs, potential review stars.

**To implement as a `<Script>` component in `layout.js`:**

#### 3.8.1 Organisation Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Reach Smart",
  "url": "https://thereachsmart.net",
  "logo": "https://thereachsmart.net/android-chrome-512x512.png",
  "description": "AI automation agency building systems for SaaS and e-commerce: customer support, lead generation, outreach, UGC content, and post-purchase communication.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["Bulgarian", "English", "French"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/reach-smart"
  ],
  "areaServed": ["BG", "US", "FR", "GB"]
}
```

#### 3.8.2 Professional Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Reach Smart",
  "serviceType": "AI Automation Consulting",
  "provider": { "@id": "https://thereachsmart.net/#organization" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Automation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Customer Support Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead Generation AI" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personalized Outreach Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UGC Ad Content Generation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Purchase Communication Automation" } }
    ]
  }
}
```

#### 3.8.3 FAQ Schema
Pull questions from the FAQ section of `copy.js` and inject as:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here",
      "acceptedAnswer": { "@type": "Answer", "text": "Answer text here" }
    }
  ]
}
```

> FAQ schema items must match the FAQ content visible on the page.

#### 3.8.4 WebSite Schema (Sitelinks Search Box eligibility)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Reach Smart",
  "url": "https://thereachsmart.net"
}
```

---

### 3.9 Theme Color & Browser UI

**`theme-color` meta tag** — colours the mobile browser chrome (Android Chrome address bar):

```js
// In layout.js metadata:
themeColor: [
  { media: "(prefers-color-scheme: dark)", color: "#0d0d0d" },
  { media: "(prefers-color-scheme: light)", color: "#0d0d0d" },
],
```

Also add in `<head>` (via layout): 
```html
<meta name="color-scheme" content="dark" />
<meta name="msapplication-TileColor" content="#0d0d0d" />
<meta name="msapplication-config" content="/browserconfig.xml" />
```

---

### 3.10 Title & Description — Refined per Language

The current title mixes Bulgarian and English in one string. Proper approach: set the **root layout default** in English (for social bots), and let language-specific pages override. Since we're single-page for now:

**Refined default title template:**
```js
title: {
  default: "The Reach Smart — AI Automations for SaaS & E-commerce",
  template: "%s | The Reach Smart",
},
description: "Reach Smart builds AI systems for SaaS and e-commerce: customer support, lead generation, personalized outreach, UGC ad content, and post-purchase communication.",
```

**Keywords — expanded:**
```js
keywords: [
  // English
  "AI automations", "AI automation agency", "SaaS automation", "e-commerce AI",
  "customer support automation", "lead generation AI", "outreach automation",
  "UGC content automation", "post-purchase automation", "AI systems for business",
  // Bulgarian
  "AI автоматизации", "автоматизация за SaaS", "AI за e-commerce",
  "автоматизация на клиентска поддръжка", "lead generation", "Reach Smart",
  // French
  "automatisation IA", "automatisation SaaS", "IA e-commerce",
],
```

---

### 3.11 Verification Tags

**Google Search Console:**
```js
verification: {
  google: "YOUR_GSC_VERIFICATION_TOKEN",
  // yandex: "token_if_needed",
  // bing: "token_if_needed",
},
```

> Requires going to Google Search Console → Add property → HTML tag method → copy token. Currently the site has GA4 (`G-9RXBGT3LLL`) but GSC verification token needs to be confirmed.

---

### 3.12 Author & Publisher Meta

```js
authors: [{ name: "The Reach Smart", url: "https://thereachsmart.net" }],
creator: "The Reach Smart",
publisher: "The Reach Smart",
category: "Technology",
```

---

### 3.13 OG Image Design Specification

The `/og-image.jpg` (1200×630) needs to be designed and generated. It should contain:

| Element | Detail |
|---|---|
| Background | Dark (`#0d0d0d`) matching site theme |
| Logo | REACH SMART wordmark — top left |
| Headline | "AI Automations for SaaS & E-commerce" |
| Sub-text | "thereachsmart.net" |
| Visual | Subtle orbit/AI visual motif (matching hero) |
| Brand colour accent | Purple/blue gradient accent (matching site palette) |

This image is used for every link preview until page-specific OG images are created.

---

## 4. Files to Create / Modify

### New Files

| File | Location | Purpose |
|---|---|---|
| `site.webmanifest` | `/public/site.webmanifest` | PWA manifest |
| `robots.txt` | `/public/robots.txt` | Crawl policy |
| `sitemap.js` | `/src/app/sitemap.js` | Auto-generated sitemap |
| `favicon.ico` | `/public/favicon.ico` | Browser favicon |
| `favicon-16x16.png` | `/public/favicon-16x16.png` | Small tab icon |
| `favicon-32x32.png` | `/public/favicon-32x32.png` | Retina tab icon |
| `apple-touch-icon.png` | `/public/apple-touch-icon.png` | iOS home-screen |
| `android-chrome-192x192.png` | `/public/android-chrome-192x192.png` | Android PWA icon |
| `android-chrome-512x512.png` | `/public/android-chrome-512x512.png` | Android splash |
| `og-image.jpg` | `/public/og-image.jpg` | OG link preview (1200×630) |
| `og-image-square.jpg` | `/public/og-image-square.jpg` | Square OG variant (opt.) |
| `safari-pinned-tab.svg` | `/public/safari-pinned-tab.svg` | Safari pinned tab mask |
| `browserconfig.xml` | `/public/browserconfig.xml` | Windows tile config |

### Files to Modify

| File | Changes |
|---|---|
| `src/app/layout.js` | Full metadata object rewrite + JSON-LD scripts + theme-color |
| `next.config.mjs` | Add headers for `X-Robots-Tag` if needed for API routes |

---

## 5. Open Questions / Decisions Required

> [!IMPORTANT]
> The following require confirmation before implementation:

1. **Twitter/X handle** — What is the official @handle? Or does one not exist yet? Doesn't exist.
2. **LinkedIn company URL** — What is the LinkedIn company page URL for `sameAs` in Organization schema? No linkedin
3. **GSC Verification** — Has Google Search Console been set up? If yes, share the HTML tag verification token. google-site-verification=iFRkxqBcJhT61P02dEe2yTlrneOHCEkHvGPaWEjOmuI
4. **OG Image** — Should the OG image be generated (AI-assisted design) or do you have a branded design to provide? Yes generate one.
5. **`hreflang` architecture** — Do we stay with Option A (single URL, all languages) for now, or invest in Option B (subpath routes `/en/`, `/fr/`) for proper multilingual SEO? We will stay with Option A for now.
6. **Safari Pinned Tab SVG** — This requires a monochrome SVG version of the logo. Should we create one from the existing logo PNG? Yes generate one.
7. **`browserconfig.xml`** (Windows tiles) — Is Windows tile support a priority? Low impact but completes the icon set. If not complex, do it. otherwise skip.
8. **FAQ Schema** — The FAQ schema should be in **which language** — BG, EN, all three? Since Google indexes the page in the primary language, BG is recommended for the default schema. All 3 lang, but englishh as the primary.

---

## 6. Priority Order for Implementation

| Priority | Item | Impact |
|---|---|---|
| 🔴 High | OG Image (1200×630) | Every social share looks broken without it |
| 🔴 High | Twitter Card tags | LinkedIn + X sharing quality |
| 🔴 High | `robots.txt` + `sitemap.xml` | Search engine discoverability |
| 🔴 High | Favicon family (`.ico`, sizes) | Browser tab + mobile bookmarks |
| 🟡 Medium | Schema.org — Organisation + Service | Google Knowledge Panel eligibility |
| 🟡 Medium | Schema.org — FAQ | FAQ rich results in SERPs |
| 🟡 Medium | `hreflang` alternates | Multilingual targeting |
| 🟡 Medium | GSC Verification tag | Search Console access |
| 🟢 Low | `site.webmanifest` | PWA "Add to Home Screen" |
| 🟢 Low | `theme-color` / `browserconfig.xml` | Mobile browser chrome colour |
| 🟢 Low | `safari-pinned-tab.svg` | Safari pinned tabs |
| 🟢 Low | Author/publisher/category meta | Marginal SEO signal |

---

## 7. Verification Checklist (post-implementation)

After implementation, verify using these tools:

- [ ] **Facebook Sharing Debugger** — `developers.facebook.com/tools/debug/` — paste URL, check OG preview
- [ ] **LinkedIn Post Inspector** — `linkedin.com/post-inspector/` — check LinkedIn card
- [ ] **Twitter Card Validator** — `cards-dev.twitter.com/validator`
- [ ] **Google Rich Results Test** — `search.google.com/test/rich-results` — check JSON-LD schemas
- [ ] **Schema.org Validator** — `validator.schema.org` — validate structured data
- [ ] **Google Search Console** — after GSC setup, check Coverage + Sitemaps report
- [ ] **Favicon Checker** — `realfavicongenerator.net/favicon_checker` — validate all icon sizes
- [ ] **PageSpeed Insights** — `pagespeed.web.dev` — check LCP, CLS not impacted by metadata additions
- [ ] **ahrefs / Screaming Frog** — crawl for missing/duplicate tags (optional)

---

*Last updated: August 2026*

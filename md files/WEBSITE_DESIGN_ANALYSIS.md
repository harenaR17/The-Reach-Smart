# Website Design Analysis — videosalesletter.de (VIDFUNNELS)

> **Source:** https://videosalesletter.de/  
> **Brand:** VIDFUNNELS by CKLX GmbH — Hamburg, Germany  
> **Purpose:** VSL (Video Sales Letter) production agency for B2B, SaaS, and coaches in the DACH region  
> **Analysis Date:** July 2026

---

## 1. Overall Aesthetic & Mood

The site has a **premium dark-mode agency aesthetic** — deeply dark backgrounds, vibrant neon-pink-to-purple-to-indigo gradient accents, and sleek glassmorphism surfaces. The overall feeling is:

- **High-end / production studio**: confident, technical, premium
- **Bold and minimal**: very little noise, lots of breathing room
- **Motion-forward**: video loops, marquee scrolling, scroll-triggered reveals
- **Trust-focused**: structured conversion funnel with clear social proof and CTAs

The design language sits in the intersection of **Apple-dark**, **Framer-style agency**, and **Stripe-like precision**. It is clearly optimized for conversion (VSL landing page DNA), not just aesthetics.

---

## 2. Color Palette

The palette is defined entirely as CSS custom properties (HSL-based) with two themes (dark default, optional light).

### Primary Dark Theme

| Token | Value | Usage |
|---|---|---|
| `--vf-bg-base` | `#09090B` | Page background (near-black, slightly blue-grey) |
| `--vf-bg-raised` | `#111113` | Cards, raised surfaces |
| `--vf-bg-overlay` | `#18181B` | Modals, overlays |
| `--vf-bg-subtle` | `#1C1C20` | Section backgrounds |
| `--vf-bg-muted` | `#232328` | Muted containers |
| `--vf-bg-glass` | `rgba(17,17,19,0.72)` | Glassmorphism (nav, floating elements) |
| `--vf-border-subtle` | `#1E1E23` | Barely-visible borders |
| `--vf-border-default` | `#27272D` | Standard card/section borders |
| `--vf-border-strong` | `#38383F` | Emphasized borders |
| `--vf-text-primary` | `#F0F0F2` | Main text (off-white) |
| `--vf-text-secondary` | `#A0A0A8` | Secondary / body text (mid-grey) |
| `--vf-text-tertiary` | `#62626D` | Placeholder, footnote text |

### Brand Accent Colors (the gradient trio)

| Token | Hex | Description |
|---|---|---|
| `--vf-pink-400` | `#E8607A` | **Primary Pink** — main brand color, CTAs, highlights |
| `--vf-pink-500` | `#D94D6A` | Darker pink variant |
| Purple mid | `#9B4DCA` | Purple midpoint (gradient) |
| Indigo end | `#6366F1` | Indigo endpoint (gradient) |

### Key Gradients

```css
/* Brand signature gradient — pink → purple → indigo */
--vf-gradient-brand: linear-gradient(135deg, #E8607A 0%, #9B4DCA 50%, #6366F1 100%);

/* CTA button gradient */
--gradient-cta: linear-gradient(135deg, hsl(350 75% 64%), hsl(330 70% 60%));

/* Glow radial — used behind hero, section accents */
--vf-gradient-glow: radial-gradient(ellipse at center, rgba(232,96,122,0.15) 0%, transparent 70%);

/* Subtle tinted backgrounds */
--vf-gradient-subtle: linear-gradient(135deg, rgba(232,96,122,0.04) 0%, rgba(155,77,202,0.02) 100%);

/* Glowing border gradient */
--vf-gradient-border: linear-gradient(135deg, rgba(232,96,122,0.5) 0%, rgba(155,77,202,0.3) 50%, rgba(99,102,241,0.15) 100%);
```

**Takeaway:** The entire brand identity is built on a **hot pink → violet → indigo** diagonal gradient at 135°. This gradient appears on borders, glows, CTAs, text highlights, and decorative elements throughout. The background uses near-black (not pure black) for depth.

---

## 3. Typography

### Font Families

| Font | Variable Name | Usage |
|---|---|---|
| **PP Monument Extended** | `font-headline` | ALL headings (h1–h6) — a wide, bold, condensed-grotesque |
| **PP Neue Montreal** | `font-body` | All body text, nav, CTAs |
| `system-ui, sans-serif` | — | System font fallback |

> **Note:** Both fonts are from **Pangram Pangram Foundry** (PP). They are premium custom fonts, self-hosted at `/fonts/PPNeueMontreal-Regular.woff2` and `/fonts/PPMonumentExtended-Bold.woff2`. For our project, we can substitute with similar free alternatives like **Satoshi** (body) + **Clash Display** (headings) from Fontshare, or **Inter** + **Space Grotesk** from Google Fonts.

### Typography Scale

| Class | Size | Line-Height | Usage |
|---|---|---|---|
| `text-xs` | 0.75rem (12px) | 1rem | Fine print, badges |
| `text-sm` | 0.875rem (14px) | 1.25rem | Labels, metadata |
| `text-base` | 1rem (16px) | 1.5rem | Body paragraphs |
| `text-lg` | 1.125rem (18px) | 1.75rem | Lead text |
| `text-xl` | 1.25rem (20px) | 1.75rem | Sub-headings |
| `text-2xl` | 1.5rem (24px) | 2rem | Section sub-titles |
| `text-3xl` | 1.875rem (30px) | 2.25rem | Section headings |
| `text-4xl` | 2.25rem (36px) | 2.5rem | Page section H2s |
| `text-5xl` | 3rem (48px) | 1 (tight) | Hero headline |

### Typography Styles

- **Headings:** PP Monument Extended, `letter-spacing: -0.025em`, `font-weight: 700–900`
- **Body:** PP Neue Montreal, `font-weight: 400–500`
- **CTA Buttons:** uppercase or title-case, very wide letter-spacing (`0.14em` to `0.22em`)
- **Eyebrow labels:** `text-xs`, `uppercase`, `tracking-widest`, colored with brand gradient
- **Anti-aliasing:** `webkit-font-smoothing: antialiased`

---

## 4. Layout & Spacing

### Container

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;        /* 24px horizontal */
  max-width: 1200px;        /* at ≥1200px breakpoint */
}
```

### Section Spacing

- Section vertical padding: `5rem` to `6rem` (80px–96px)
- Hero top padding: `7rem` to `8rem` (112px–128px) to clear sticky nav
- Section-to-section gap: typically 96px–128px

### Grid System

- CSS Grid: 1, 2, 3, 4 column layouts
- Mobile-first, responsive
- Key breakpoints: sm (640px), md (768px), lg (1024px), xl (1200px)

---

## 5. Navigation / Header

- **Sticky** with **glassmorphism**: `backdrop-filter: blur(8px)` + `background: rgba(17,17,19,0.72)`
- Height: ~56px–64px
- Contains: Logo (left) + nav links (center) + CTA button (right)
- Nav items: `text-sm`, `font-medium`, subtle hover color transition
- Becomes more opaque on scroll (border-bottom fades in)

---

## 6. Hero Section

- **Background:** Autoplay looping video (`.webp` poster preloaded for LCP)
- **Layout:** Centered content stack over video — eyebrow label → H1 → subtitle → dual CTAs
- **Eyebrow label:** `text-xs uppercase tracking-widest` gradient-colored pill badge
- **H1:** Massive `3rem+` PP Monument Extended, tight line-height `leading-[0.95]`
- **Subtitle:** `text-lg text-secondary`, `max-w-2xl` centered
- **CTAs:** Primary (gradient fill + glow) + secondary (ghost outline)
- **Glow effect:** Radial gradient behind the headline — pink/purple halo

---

## 7. Call-to-Action (CTA) Buttons

### Primary CTA

```css
/* Primary button */
background:    linear-gradient(135deg, hsl(350 75% 64%), hsl(330 70% 60%));
color:         hsl(240 7% 4%);          /* near-black text on gradient */
font-weight:   600;
letter-spacing: 0.14em–0.22em;         /* wide tracking */
border-radius: 9999px;                  /* pill shape */
padding:       12px 28px (approx);
box-shadow:    0 0 30px -5px rgba(232,96,122,0.4);  /* pink glow */
transition:    all 0.2s ease-out;
/* On hover: */
box-shadow:    0 0 40px -5px rgba(232,96,122,0.5);
transform:     scale(1.01);
```

### Secondary CTA (Ghost)

```css
background:    transparent;
border:        1.5px solid rgba(232,96,122,0.3);  /* subtle pink border */
color:         #F0F0F2;
border-radius: 9999px;
```

---

## 8. Cards & Surfaces

### Standard Card

```css
background:    #111113;          /* raised surface */
border:        1px solid #27272D;
border-radius: 12px;
box-shadow:    0 4px 12px rgba(0,0,0,0.25);
```

### Glassmorphism Card

```css
background:         rgba(17,17,19,0.72);
backdrop-filter:    blur(8px);
border:             1px solid [gradient border — pink→purple→indigo];
```

### Border Radius System

| Value | Usage |
|---|---|
| 6px | Chips, tags |
| 8px | Input fields |
| 12px | Standard cards |
| 16px | Large cards |
| 20px | Feature cards |
| 9999px | Buttons, badges |

---

## 9. Page Sections (Top to Bottom)

Based on the JS bundle lazy-loaded chunks and schema markup:

| # | Section | Notes |
|---|---|---|
| 1 | **Sticky Nav** | Logo + links + CTA button |
| 2 | **Hero** | Showreel video loop, headline, dual CTAs, glow |
| 3 | **Client Logos Marquee** | Infinite horizontal scroll of client logos |
| 4 | **Process Steps** | Numbered step-by-step workflow |
| 5 | **Portfolio / Showreel** | Embedded VSL video examples |
| 6 | **Stats Row** | Large numbers — e.g. "14 days", "50+ VSLs" |
| 7 | **Features / Benefits** | Icon + text cards |
| 8 | **Testimonials / Quotes** | Quote blocks with client attribution |
| 9 | **Comparison Table** | VSL vs. Webinar vs. Erklärvideo etc. |
| 10 | **Pricing / Packages** | Service tiers (€€€) |
| 11 | **FAQ Accordion** | Collapsible Q&A |
| 12 | **Final CTA / Contact** | "Erstgespräch buchen" (Book discovery call) |
| 13 | **Footer** | Links, legal, Hamburg address, social |

---

## 10. Animations & Interactive Elements

### Marquee / Logo Scroll

```css
@keyframes marquee {
  0%   { transform: translate(0); }
  100% { transform: translate(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

### Micro-animations

- **Button hover:** `scale(1.01)` + stronger glow — `transition: 0.2s ease-out`
- **Card hover:** border brightening + subtle lift
- **Scroll reveals:** fade + translateY (elements animate in on viewport entry)
- **Pulse on badges:** `animation: pulse 2s cubic-bezier(.4,0,.6,1) infinite`

### Timing System

| Token | Value | Usage |
|---|---|---|
| `instant` | 80ms | Instant feedback |
| `fast` | 150ms | Quick interactions |
| `normal` | 200ms | Hover effects |
| `slow` | 300ms | Modal open/close |
| `emphasis` | 400ms | Featured animations |
| `ease-spring` | `cubic-bezier(.34,1.56,.64,1)` | Bouncy/spring feel |

---

## 11. Shadows & Glow Effects

```css
/* Standard shadows */
--shadow-sm:   0 1px 2px rgba(0,0,0,0.30);
--shadow-md:   0 4px 12px rgba(0,0,0,0.25);
--shadow-lg:   0 8px 24px rgba(0,0,0,0.35);

/* Signature pink glow */
--shadow-glow:        0 0 20px rgba(232,96,122,0.15);
--shadow-glow-cta:    0 0 30px -5px rgba(232,96,122,0.4);
--shadow-glow-strong: 0 0 40px -5px rgba(232,96,122,0.5);
```

Glow appears on: CTA buttons (hover), hero headline, featured cards, section dividers.

---

## 12. Visual Elements

- **Hero video:** Autoplay, muted, looped `.webm`/`.mp4` with `.webp` poster (LCP optimized)
- **Icons:** Lucide React icon library
- **Decorative blurs:** Large `blur-3xl` colored orbs at negative margins acting as ambient glows
- **Gradient borders:** Pseudo-element technique to create glowing bordered cards
- **Founder photo:** Real person photo for trust/authority
- **Aspect ratios:** `16:9` for video embeds, `1:1` for avatars/logos

---

## 13. Design Principles to Adopt for Our Website

### ✅ Must-Have

1. **Dark near-black base** (`#09090B`) with 4-level surface system for depth
2. **Signature gradient** — define OUR brand gradient and use consistently everywhere
3. **Premium display font** (headline) + **clean grotesque** (body)
4. **Pill-shaped CTA buttons** with gradient fill + glow shadow
5. **Glassmorphism sticky nav** — blurred, semi-transparent
6. **Radial glow** behind hero headlines
7. **Tight tracking** on headings (`-0.025em`), **wide tracking** on labels/badges
8. **Gradient borders** on featured cards
9. **Marquee animation** for social proof (logos, stats)
10. **Video/looping content** in hero

### ✅ Should-Have

11. Layered surface system (bg-base → bg-raised → bg-overlay → bg-subtle)
12. Section flow: Hero → Proof → Process → Results → Testimonials → FAQ → CTA
13. Stats/numbers row with large typography impact
14. Spring easing for micro-animations
15. FAQ accordion section
16. Comparison table (us vs. alternatives)

---

## 14. Font Substitution Recommendations

Since PP Monument Extended and PP Neue Montreal are commercial fonts:

| VIDFUNNELS Font | Free Alternative | Source |
|---|---|---|
| PP Monument Extended | **Clash Display** | Fontshare (free) |
| PP Monument Extended | **Bebas Neue** | Google Fonts |
| PP Neue Montreal | **Satoshi** | Fontshare (free) |
| PP Neue Montreal | **Inter** | Google Fonts |
| PP Neue Montreal | **Geist** | Google Fonts |

**Best combination:** Clash Display (headings) + Satoshi (body)  
**Google-only option:** Space Grotesk (headings) + Inter (body)

---

## 15. Ready-to-Use CSS Variables Template

```css
:root {
  /* Backgrounds */
  --bg-base:    #09090B;
  --bg-raised:  #111113;
  --bg-overlay: #18181B;
  --bg-subtle:  #1C1C20;
  --bg-glass:   rgba(17, 17, 19, 0.72);

  /* Text */
  --text-primary:   #F0F0F2;
  --text-secondary: #A0A0A8;
  --text-tertiary:  #62626D;

  /* Borders */
  --border-subtle:  #1E1E23;
  --border-default: #27272D;
  --border-strong:  #38383F;

  /* Brand Accents — CUSTOMIZE FOR OUR BRAND */
  --brand-primary: #E8607A;   /* hot pink */
  --brand-mid:     #9B4DCA;   /* purple */
  --brand-accent:  #6366F1;   /* indigo */

  /* Gradients */
  --gradient-brand:  linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-mid) 50%, var(--brand-accent) 100%);
  --gradient-glow:   radial-gradient(ellipse at center, rgba(232,96,122,0.15) 0%, transparent 70%);
  --gradient-cta:    linear-gradient(135deg, var(--brand-primary), #C43A57);
  --gradient-border: linear-gradient(135deg, rgba(232,96,122,0.5) 0%, rgba(155,77,202,0.3) 50%, rgba(99,102,241,0.15) 100%);

  /* Shadows */
  --shadow-md:         0 4px 12px rgba(0,0,0,0.25);
  --shadow-lg:         0 8px 24px rgba(0,0,0,0.35);
  --shadow-glow:       0 0 20px rgba(232,96,122,0.15);
  --shadow-glow-cta:   0 0 30px -5px rgba(232,96,122,0.4);

  /* Border radius */
  --radius-sm:   6px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  20px;
  --radius-full: 9999px;

  /* Transitions */
  --ease-spring: cubic-bezier(.34, 1.56, .64, 1);
  --ease-out:    cubic-bezier(0, 0, .2, 1);
  --duration-fast:   150ms;
  --duration-normal: 200ms;
  --duration-slow:   300ms;
}
```

---

*Analysis compiled from: HTML metadata, compiled CSS custom properties, JS bundle route structure, and Schema.org structured data from https://videosalesletter.de/*

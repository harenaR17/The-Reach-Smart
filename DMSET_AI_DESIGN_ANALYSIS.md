# Website Design Analysis — dmset.ai

> **Source:** https://www.dmset.ai/  
> **Brand:** dmset.ai — AI that books calls inside Instagram DMs  
> **Purpose:** SaaS tool for high-ticket coaches and info-product founders to replace human DM setters  
> **Target Audience:** High-ticket coaches, consultants, course creators, agencies  
> **Analysis Date:** July 2026

> [!IMPORTANT]
> **Key contrast from VIDFUNNELS:** dmset.ai is a **LIGHT-MODE** site — white backgrounds, clean minimal surfaces. Completely opposite aesthetic to the dark-mode VIDFUNNELS site. Both are premium, but via opposite approaches.

---

## 1. Overall Aesthetic & Mood

The site is **clean, light, and conversion-obsessed**. It feels like a premium SaaS product page (think Linear, Raycast, Vercel) rather than an agency. The aesthetic is:

- **Light, airy, and modern** — white and near-white backgrounds with the content doing the heavy lifting
- **Data-forward**: the hero showcases a live interactive phone mockup of an Instagram DM conversation
- **Conversion-first copywriting** — every section is engineered to answer objections
- **Interactive product previews** — animated mockups of actual UI in every feature section
- **Trust through proof** — real Stripe receipts, named case studies, verified Instagram accounts

The mood is **confident, direct, and product-led**. The design gets out of the way and lets the product speak.

---

## 2. Color Palette

All colors are defined as CSS custom properties inline in the `<style>` tag — unusually clean and organized.

### Core Colors

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#ffffff` | Main page background |
| `--bg-soft` | `#fafbff` | Alternating section backgrounds |
| `--bg-alt` | `#f6f8fd` | Tinted/muted section backgrounds |
| `--bg-dark` | `#06070a` | Dark sections |
| `--bg-deep` | `#0a0b11` | Deepest dark (footer dark variant) |
| `--text` | `#0b0d14` | Primary text (near-black) |
| `--text-2` | `#3a3f52` | Secondary text (dark grey) |
| `--text-3` | `#6a7084` | Tertiary text (medium grey) |
| `--text-muted` | `#9aa0b4` | Muted labels, placeholders |

### Brand Accent Colors

| Variable | Value | Usage |
|---|---|---|
| `--accent` | `#2E5BFF` | Primary brand color — electric blue |
| `--accent-2` | `#1B3BCC` | Darker blue (gradient endpoint) |
| `--accent-tint` | `#7C9DFF` | Light blue tint |
| `--violet` | `#7c3aed` | Secondary accent — violet/purple |
| `--violet-2` | `#6d28d9` | Darker violet |
| `--amber` | `#f59e0b` | Warning / highlight amber |
| `--green` | `#10b981` | Success / positive / revenue green |
| `--red` | `#ef4444` | Error / negative / competitor column |

### Tinted Backgrounds (for icon containers, badges)

```css
--accent-bg:  rgba(46,91,255,0.06);    /* barely-tinted blue */
--violet-bg:  rgba(124,58,237,0.08);   /* barely-tinted violet */
--amber-bg:   rgba(245,158,11,0.08);   /* barely-tinted amber */
--green-bg:   rgba(16,185,129,0.08);   /* barely-tinted green */
```

### Key Gradients

```css
/* Primary brand gradient — deep electric blue */
--grad-primary: linear-gradient(135deg, #2E5BFF 0%, #1B3BCC 100%);

/* Revenue / success gradient — emerald green */
--grad-revenue: linear-gradient(135deg, #10b981 0%, #059669 100%);
```

**The AI message bubble** (in the phone mockup) uses a striking multi-stop gradient:
```css
background: linear-gradient(135deg, #4f5bff 0%, #a15bff 55%, #ff4fa8 100%);
/* blue → purple → hot pink */
```

### Borders & Shadows

```css
--border:        #e7e9ef;    /* standard border */
--border-soft:   #eef0f5;    /* lighter border */
--border-light:  #f3f4f8;    /* barely-there border */

--shadow-sm: 0 1px 2px rgba(14,18,30,0.04);
--shadow:    0 2px 8px rgba(14,18,30,0.05), 0 1px 3px rgba(14,18,30,0.03);
--shadow-md: 0 8px 24px rgba(14,18,30,0.06), 0 2px 8px rgba(14,18,30,0.04);
--shadow-lg: 0 24px 64px rgba(14,18,30,0.08), 0 4px 16px rgba(14,18,30,0.04);
```

**Note:** Shadows are extremely subtle (max 8% opacity) — this creates depth without heaviness, keeping the light aesthetic clean.

---

## 3. Typography

### Font Families

| Font | Role | Usage |
|---|---|---|
| **DM Sans** | Primary body/UI font | Everything — body, nav, CTAs, labels |
| **DM Serif Display** | Decorative serif | Brand logo `.ai` suffix, italic accent words |
| **Instrument Serif** (italic) | Accent serif | Italic emphasis words in headlines (`.italic-serif`) |

> All three fonts are loaded from **Google Fonts** — completely free and available.  
> Import URL: `family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400...&family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1`

### The `.italic-serif` Technique — SIGNATURE DESIGN PATTERN

The most distinctive typographic pattern on the site: **mixing a bold geometric sans-serif headline with italic serif words**, creating a premium editorial contrast:

```css
.italic-serif {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.015em;
}
```

Used in every major headline:
- `"AI That Books Calls Inside Your Instagram DMs"` — "Books Calls" in italic serif
- `"AI that sells like you."` — "sells like you" in italic serif
- `"Sounds exactly like you. Not AI-ish."` — "exactly" in italic serif
- `"Real clients. Real numbers."` — "numbers" in italic serif
- `"Questions, answered."` — "answered" in italic serif

### Logo Typography

The `dmset.ai` logotype is typeset inline with CSS classes:
- `dmset` — DM Sans, weight 900, letter-spacing -0.02em, `--text` color
- `.` — DM Serif Display, regular, `--accent` blue color
- `ai` — DM Serif Display, italic, `--accent` blue color

### Typography Scale

| Usage | Size | Weight | Letter-Spacing |
|---|---|---|---|
| Hero H1 | `clamp(38px, 6vw, 76px)` | 600 | -0.035em |
| Section H2 | `clamp(30px, 4vw, 54px)` | 600 | -0.035em |
| Feature H3 | `clamp(26px, 3.2vw, 40px)` | 600 | -0.03em |
| Section sub | 17px | 400 | normal |
| Body | 16px | 400 | normal |
| Eyebrow label | 11px | 600 | 0.14em |
| Small label | 12–12.5px | 500–600 | 0.04–0.12em |
| Nav links | 14px | 500 | normal |
| Chat messages | 14px | 400 | -0.005em |

**Line heights:** 1.05 (tight hero), 1.1 (section headings), 1.65 (body), 1.6 (sub-text)

---

## 4. Layout & Spacing

### Container System (3 widths)

```css
.wrap         { max-width: 1160px; padding: 0 32px; }   /* standard content */
.wrap-narrow  { max-width: 760px;  padding: 0 32px; }   /* centered text blocks */
.wrap-wide    { max-width: 1240px; padding: 0 32px; }   /* full-bleed showcases */
```

### Section Spacing

- Standard section: `padding: 120px 32px`
- Hero: `padding: 20px 32px 64px` (+ 96px top when `.hero-top`)
- Authority strip: `padding: 40px 0 28px`
- Stats bar: `padding: 56px 32px`

### Alternating Section Backgrounds

The sections alternate to create natural visual breaks:
1. `bg` (white) — hero
2. `border-top/bottom` divider strip — creator marquee
3. `bg` (white) — stats bar
4. `bg-soft` (#fafbff) — How It Works
5. `bg-soft` — Conversation Engine
6. `bg` — Voice Training
7. `bg-soft` — Pipeline Visibility
8. `bg` — Post-Booking Sequence
9. `bg-soft` — Configure/Deploy/Scale
10. `bg` — Comparison Table
11. `bg-soft` — Case Studies
12. `bg` — Testimonial Wall
13. `bg` — FAQ
14. CTA section (dark)
15. Footer

---

## 5. Navigation / Header

```css
/* Floating pill nav */
.nav {
  max-width: 1100px;
  background: var(--bg);        /* white */
  border: 1px solid var(--border);
  border-radius: 9999px;        /* pill shape */
  box-shadow: var(--shadow);
  padding: 8px 10px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Scrolled state — glassmorphism */
.nav-outer.scrolled {
  background: rgba(255,255,255,0.82);
  backdrop-filter: blur(24px) saturate(180%);
  box-shadow: 0 1px 0 rgba(14,18,30,0.06);
}
```

**Key design choice:** The nav is a **floating pill** that appears to float above the page. On scroll, the outer container switches to frosted glass. This is a distinctive pattern — the nav pill itself stays white, but the background blurs.

**Nav CTA button:**
```css
.nav-cta {
  background: var(--text);       /* near-black #0b0d14 */
  color: #fff;
  border-radius: 9999px;
  font-weight: 600;
  padding: 9px 18px;
}
.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
```

**Notable:** The primary CTA uses **black background, not blue** — this creates a strong contrast anchor rather than competing with blue accents elsewhere.

---

## 6. Hero Section

**Structure (top to bottom):**

1. **Micro-strip / authority badge** — green pulsing dot + uppercase "LIVE · AI active 24/7" style label
2. **Eyebrow ticker** — green pill: `"✓ Trusted by 50+ creators"` or similar
3. **H1** — `"AI That Books Calls Inside Your Instagram DMs"` (with italic serif emphasis)
4. **Subtitle** — `"dmset.ai replaces your human DM setters with AI that qualifies leads, handles objections, and books calls. 24/7, for a fraction of the cost."`
5. **CTA row** — Primary black button + secondary outline button
6. **Guarantee badge** — blue pill: guarantee copy
7. **Phone mockup** — Interactive 3D-tilting iPhone with live animated Instagram DM conversation

**Hero animations (staggered fade-up):**
```css
@keyframes hero-fade-up {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Stagger delays: ticker .15s, h1 .35s, subtitle .6s, CTAs .8s, phone 1s */
```

**Background orbs:**
```css
/* Blue orb — top left */
.hero::before { background: radial-gradient(circle, rgba(46,91,255,0.12) 0%, transparent 65%); animation: orb-drift 22s infinite; }
/* Violet orb — top right */
.hero::after  { background: radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 65%); animation: orb-drift-2 28s infinite; }

@keyframes orb-drift    { 50% { transform: translate(-60px, 40px) scale(1.15); } }
@keyframes orb-drift-2  { 50% { transform: translate(80px, -30px) scale(1.1); } }
```

**Phone 3D tilt effect (desktop only):**
```javascript
// Follows mouse movement in the hero, rotating ±6 degrees on X and Y axes
phoneTilt.style.transform = `rotateY(${x*6}deg) rotateX(${-y*6}deg)`;
```

---

## 7. CTA Buttons

### Primary Button (Black)

```css
.btn-primary {
  background: var(--text);       /* #0b0d14 — near-black */
  color: #fff;
  border-radius: 9999px;         /* pill */
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.005em;
  transition: all .25s cubic-bezier(0.16,1,0.3,1);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
}
/* Arrow icon slides right on hover: */
.btn-primary:hover svg { transform: translateX(3px); }
```

### Secondary / Outline Button

```css
.btn-outline {
  background: var(--bg);          /* white */
  border: 1px solid var(--border);
  color: var(--text-2);
  border-radius: 9999px;
  padding: 14px 26px;
  font-size: 15px;
  font-weight: 500;
}
.btn-outline:hover {
  color: var(--text);
  border-color: var(--text-3);
  background: var(--bg-alt);
}
```

**Key insight:** Both buttons are **neutral-colored** (black / white) — the blue accent is NOT used for primary CTAs. This keeps the accent color precious and meaningful when used elsewhere (eyebrows, icons, comparison table).

---

## 8. Cards & Surfaces

### Feature/Step Cards

```css
.step-card {
  background: var(--bg);          /* white */
  border: 1px solid var(--border);
  border-radius: 18px;            /* --radius-lg */
  padding: 28px 24px;
  box-shadow: var(--shadow-sm);
  transition: all .3s ease;
}
.step-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: rgba(46,91,255,0.2); /* blue tint on hover */
}
```

### App Mockup Cards

```css
.mockup {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 24px;            /* --radius-xl */
  padding: 28px;
  box-shadow: 0 24px 64px rgba(14,18,30,0.08), 0 4px 16px rgba(14,18,30,0.04);
  position: relative;
  overflow: hidden;
}
/* Subtle blue gradient wash at top of each mockup */
.mockup::before {
  background: linear-gradient(180deg, rgba(46,91,255,0.04), transparent);
}
```

### Mockup chrome dots (macOS-style):
```css
.mockup-dot.red    { background: #ff5f57; }
.mockup-dot.yellow { background: #ffbd2e; }
.mockup-dot.green  { background: #28ca42; }
```

### Phone Mockup

The iPhone is rendered fully in CSS + HTML (no image):
- Black casing (`#0a0a0a`), `border-radius: 62px`
- Dynamic island: absolute positioned pill at top
- White screen interior
- Live animated message thread (JavaScript-driven)

```css
.phone-outer {
  background: #0a0a0a;
  border-radius: 62px;
  box-shadow: 0 32px 80px rgba(14,18,30,0.18), 0 8px 24px rgba(14,18,30,0.08), 0 0 0 1px rgba(0,0,0,0.1);
}
```

---

## 9. Page Sections — Full Structure & Copy

| # | Section | Eyebrow | Headline |
|---|---|---|---|
| 1 | **Floating nav** | — | dmset.ai logo |
| 2 | **Authority microstrip** | — | Green dot + "LIVE · AI active" |
| 3 | **Hero** | Green ticker | "AI That Books Calls Inside Your Instagram DMs" |
| 4 | **Hero VSL** | — | Wistia video embed (below phone mockup) |
| 5 | **Creator Marquee** | "Trusted by creators" | Infinite scroll of creator avatars |
| 6 | **Stats Bar** | — | 5 key metric cells |
| 7 | **How It Works** | "How It Works" | "Four steps, then the calls just start coming." |
| 8 | **Core Intelligence #1** | "Core Intelligence" | "AI that *sells like you.*" |
| 9 | **Voice Training** | — | "Sounds *exactly* like you. Not 'AI-ish.'" |
| 10 | **Pipeline Visibility** | — | "Every lead. Every stage. *Real time.*" |
| 11 | **Post-Booking Sequence** | "Show Rate System" | "Booking the call is step one. *Showing up* is step two." |
| 12 | **Done-For-You** | "Done-For-You Build" | "Live in five business days. *30 minutes of your time.*" |
| 13 | **Controls** | "Operator Controls" | "Configure. Deploy. *Scale.*" |
| 14 | **Comparison Table** | "Head to Head" | "Human DM setters vs *dmset.ai.*" |
| 15 | **Case Studies** | "Case Studies" | "Real clients. Real *numbers.*" |
| 16 | **Wins Wall** | "Proof" | "Not a single script. Just *real wins.*" |
| 17 | **FAQ** | "FAQ" | "Questions, *answered.*" |
| 18 | **Final CTA** | "Ready when you are" | "Stop paying commission on every deal. *Start booking more calls.*" |
| 19 | **Footer** | — | Links + Instagram social |

---

## 10. Stats Bar

5-column grid with white background, border, subtle hover:

| Stat | Label |
|---|---|
| `< 3 sec` | Avg response time |
| `24/7` | Always on |
| `5 biz days` | Time to live |
| `0%` | Commission on deals |
| `76%` | Proposed → Booked rate |

---

## 11. How It Works — 4 Steps

4-column card grid:

| Step | Title | Body |
|---|---|---|
| STEP 01 | Connect Your Inbox | "Plug dmset.ai into your existing ManyChat. No rebuild, no teardown..." |
| STEP 02 | Train on Your Voice | "We extract 127+ of your real DMs and build a voice profile..." |
| STEP 03 | Set Your Playbook | "Tell the AI what qualifies a lead, how to handle your top three objections..." |
| STEP 04 | You Watch Calls Land | "Leads qualified, objections handled, calendars filled — every hour, every day..." |

---

## 12. Comparison Table

3-column grid: **Feature / Human DM Setters (red) / dmset.ai (green)**

| Topic | Human Setters | dmset.ai |
|---|---|---|
| Ramp-up | Weeks of training | Live in 5 business days |
| Setting Quality | Often bad even after training | Actually good at DM setting |
| Voice Match | Doesn't sound like founder | Sounds exactly like creator |
| Time Zones | Gaps in coverage | Works 24/7/365 |
| Speed to Lead | Replies in minutes or hours | First reply in seconds |
| Cost | **5% commission forever** | **0% commission, flat monthly** |
| Data Tracking | EODs forgotten/inaccurate | Every lead tracked in real time |
| Follow-Ups | Forgotten, leads go cold | Automatic, nothing falls through |

---

## 13. Case Studies

**Mitchell Saron — @mitchellsaron — Club Kaya — Fitness Coaching**  
*"$4K/mo on setters gone. Every single DM gets answered in seconds now."*  
- Setter spend: $0 (from $4K/mo)
- Show rate: ↑ 28%
- Leads tracked: 2,100+

**Justin Mucci — @justinmucci — Mucci Strength — Strength Coaching**  
*"Cut my setter team overnight. The AI closes harder than they did."*  
- Commission saved: 5%
- Calls booked: ↑ 41%
- Leads tracked: 1,850+

---

## 14. Wins Wall (Testimonials)

Stripe earnings screenshots with KPI overlays:
- **$93.13K** gross volume · 30 days · Fitness coaching offer · +100%
- **$77.93K** gross volume · 30 days · Dating coaching offer · +100%
- **$4.1K** gross volume · 48 hours · Low-ticket e-commerce DM upsells · +100%

---

## 15. FAQ Topics

1. How long does setup actually take?
2. Do I have to rebuild my existing ManyChat flows?
3. Can the AI really sound like me?
4. What happens if the AI says something off-brand?
5. Is this Instagram TOS compliant?
6. Can I jump in and take over a conversation manually?
7. What if a lead asks something the AI doesn't know?
8. How does pricing work? (flat monthly, no commission, no lock-in)
9. Does this work with my niche?

---

## 16. Animations & Interactive Elements

### Scroll Reveal System

```javascript
// IntersectionObserver — elements fade + slide up when entering viewport
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); })
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
```

```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s, transform .7s; }
.reveal.visible { opacity: 1; transform: translateY(0); }
/* Stagger delays: rd1=.08s, rd2=.16s, rd3=.24s, rd4=.32s */
```

### Lenis Smooth Scroll (desktop only)

```javascript
new Lenis({ duration: 1.15, easing: easeOutExpo, smoothWheel: true, lerp: 0.09 })
```

### Live DM Conversation (JavaScript-driven)

The phone mockup plays an animated DM conversation on loop:
1. Shows typing indicator (3 bouncing dots)
2. Replaces with message after 850ms
3. Scrolls to latest message
4. After full conversation, resets and replays

```javascript
// Typing animation timing: TYPING_MS = 850, READ_MS = 1500, FINAL_HOLD_MS = 4000
```

### Hero Background Orbs (CSS animation)

```css
@keyframes orb-drift   { 50% { transform: translate(-60px, 40px) scale(1.15); } }
@keyframes orb-drift-2 { 50% { transform: translate(80px, -30px) scale(1.1); } }
/* Duration: 22s and 28s — very slow drift */
```

### Funnel Stages Animation

Each funnel stage card animates in with a different width (100% → 90% → 78% → 66% → 54%) as they scroll into view, creating a tapering funnel visual effect with staggered delays (0s, 0.3s, 0.6s, 0.9s, 1.2s).

### Creator Marquee

```css
@keyframes marquee-scroll { to { transform: translateX(-50%); } }
.marquee-track { animation: marquee-scroll 30s linear infinite; }
/* Faded edges using mask-image gradient */
```

### Timing System

| Variable | Value | Usage |
|---|---|---|
| `--ease` | `cubic-bezier(0.16,1,0.3,1)` | Standard ease (snappy deceleration) |
| `--ease-out` | `cubic-bezier(0.22,1,0.36,1)` | Even snappier ease-out |
| Hover transitions | 200–250ms | All hover effects |
| Reveal transitions | 700ms | Scroll-triggered reveals |
| Conversation loop | 850ms typing | DM animation |

---

## 17. Design Principles to Adopt

### ✅ Must-Have (from dmset.ai)

1. **The italic serif accent technique** — mixing a bold sans-serif headline with an italic serif word for premium editorial feel. `font-family: 'Instrument Serif', serif; font-style: italic;`
2. **Alternating light section backgrounds** — `#fff` → `#fafbff` → `#f6f8fd` creates natural visual rhythm without borders
3. **Floating pill nav** with frosted glass on scroll
4. **Black CTA buttons** (not colored) — keeps accents precious; adds weight and authority
5. **Animated DM/product mockup in hero** — show the product, not just describe it
6. **Green pulsing dot + green ticker badge** — signals "active/live" status
7. **IntersectionObserver scroll reveals** with staggered `rd1`–`rd6` delays
8. **3D tilt effect** on hero visual (mouse-tracking, desktop only)
9. **Slow-drifting radial gradient orbs** in hero background
10. **Section eyebrow labels** — small caps, 0.14em letter-spacing, brand color

### ✅ Should-Have

11. **Multi-stop gradient for AI/tech elements** — `#4f5bff → #a15bff → #ff4fa8`
12. **macOS-style window chrome** (red/yellow/green dots) on app mockups
13. **Verified badge rendering** (Instagram blue badge SVG) for social proof cards
14. **Comparison table** with red column (competitor) and green column (us) with top accent bars
15. **Wins wall** — show Stripe/revenue screenshots with KPI overlays
16. **Lenis smooth scroll** for premium feel (desktop only, skip mobile)
17. **Funnel visualization** with tapering width cards
18. **Marquee with fade-mask edges** (`mask-image` gradient on sides)

---

## 18. Font Recommendations

All three dmset.ai fonts are **free on Google Fonts**:

```html
<link href="https://fonts.googleapis.com/css2?
  family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400
  &family=DM+Serif+Display:ital@0;1
  &family=Instrument+Serif:ital@0;1
  &display=swap" rel="stylesheet">
```

Or if we want our own brand identity:
| Role | dmset.ai | Our Alternative Options |
|---|---|---|
| Primary body | DM Sans | Inter, Geist, Satoshi |
| Accent display | DM Serif Display | Playfair Display, Cormorant |
| Italic serif | Instrument Serif | Lora (italic), EB Garamond |

---

## 19. Ready-to-Use CSS Variables Template (Light Mode)

```css
:root {
  /* Backgrounds */
  --bg:       #ffffff;
  --bg-soft:  #fafbff;
  --bg-alt:   #f6f8fd;
  --bg-dark:  #06070a;

  /* Text */
  --text:       #0b0d14;    /* near-black */
  --text-2:     #3a3f52;    /* secondary */
  --text-3:     #6a7084;    /* tertiary */
  --text-muted: #9aa0b4;    /* muted */

  /* Borders */
  --border:       #e7e9ef;
  --border-soft:  #eef0f5;
  --border-light: #f3f4f8;

  /* Brand Accents — CUSTOMIZE */
  --accent:       #2E5BFF;    /* electric blue */
  --accent-2:     #1B3BCC;    /* darker blue */
  --violet:       #7c3aed;    /* purple */
  --green:        #10b981;    /* emerald */
  --amber:        #f59e0b;    /* warning */
  --red:          #ef4444;    /* error */

  /* Tinted backgrounds */
  --accent-bg: rgba(46,91,255,0.06);
  --violet-bg: rgba(124,58,237,0.08);
  --green-bg:  rgba(16,185,129,0.08);

  /* Gradients */
  --grad-primary: linear-gradient(135deg, #2E5BFF 0%, #1B3BCC 100%);
  --grad-revenue: linear-gradient(135deg, #10b981 0%, #059669 100%);
  --grad-ai-msg:  linear-gradient(135deg, #4f5bff 0%, #a15bff 55%, #ff4fa8 100%);

  /* Shadows (very subtle for light mode) */
  --shadow-sm: 0 1px 2px rgba(14,18,30,0.04);
  --shadow:    0 2px 8px rgba(14,18,30,0.05), 0 1px 3px rgba(14,18,30,0.03);
  --shadow-md: 0 8px 24px rgba(14,18,30,0.06), 0 2px 8px rgba(14,18,30,0.04);
  --shadow-lg: 0 24px 64px rgba(14,18,30,0.08), 0 4px 16px rgba(14,18,30,0.04);

  /* Border radius */
  --radius:    12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --pill:      9999px;

  /* Content widths */
  --wrap:        1160px;
  --wrap-narrow: 760px;
  --wrap-wide:   1240px;

  /* Easing */
  --ease:     cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

/* The italic serif technique */
.italic-serif {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.015em;
}

/* Eyebrow labels */
.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
  display: block;
}

/* Scroll reveal */
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s var(--ease), transform .7s var(--ease); }
.reveal.visible { opacity: 1; transform: translateY(0); }
.rd1 { transition-delay: .08s; }
.rd2 { transition-delay: .16s; }
.rd3 { transition-delay: .24s; }
.rd4 { transition-delay: .32s; }
```

---

## 20. Key Comparison: dmset.ai vs. videosalesletter.de

| Dimension | dmset.ai (Light) | videosalesletter.de (Dark) |
|---|---|---|
| Mode | Light (#fff base) | Dark (#09090B base) |
| Primary font | DM Sans (Google, free) | PP Neue Montreal (commercial) |
| Display font | DM Serif Display (italic) | PP Monument Extended (bold) |
| Brand accent | Electric blue #2E5BFF | Hot pink #E8607A → purple |
| CTA color | **Black** (not accent) | **Pink gradient** |
| Primary technique | Italic serif contrast | Gradient glow + glassmorphism |
| Hero element | Animated phone mockup | Autoplay video loop |
| Social proof | Stripe screenshots | Client logos + testimonials |
| Section rhythm | Light/lighter alternating | Sections with glow separators |
| Animations | Scroll reveal + mouse tilt | Marquee + glow pulses |
| Smooth scroll | Lenis.js (1.15s duration) | CSS scroll-behavior: smooth |

---

*Analysis compiled from full inline CSS (1,556-line HTML file) and complete body content from https://www.dmset.ai/*

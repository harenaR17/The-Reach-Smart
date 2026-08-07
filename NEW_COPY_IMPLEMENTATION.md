# NEW COPY IMPLEMENTATION PLAN
## Reach Smart Website — Full Rebuild

> **Source:** `new copy.md` (Bulgarian original)
> **Translations:** `new_copy_EN.md` · `new_copy_FR.md`
> **Goal:** Replace the current website copy entirely with the new version, section by section, across all languages.

---

## CHECKLIST OVERVIEW

- [x] **Phase 0** — Pre-implementation audit *(Completed)*
- [ ] **Phase 1** — Navigation & global UI elements
- [ ] **Phase 2** — Hero section
- [ ] **Phase 3** — Problem section
- [ ] **Phase 4** — Solution section
- [ ] **Phase 5** — Services (SaaS tab)
- [ ] **Phase 6** — Services (E-commerce tab)
- [ ] **Phase 7** — Custom Automations block
- [ ] **Phase 8** — How It Works / Process section
- [ ] **Phase 9** — Results section
- [ ] **Phase 10** — Case Study section
- [ ] **Phase 11** — Why Reach Smart section
- [ ] **Phase 12** — Free Diagnostic CTA section
- [ ] **Phase 13** — FAQ section
- [ ] **Phase 14** — Final CTA section
- [ ] **Phase 15** — Booking form
- [ ] **Phase 16** — Footer
- [ ] **Phase 17** — SEO & meta
- [ ] **Phase 18** — QA & cross-language review

---

## PHASE 0 — Pre-Implementation Audit (COMPLETED)

**Goal:** Understand the current site structure before touching any code.

- [x] Map every current section/component to its file in `src/`
- [x] Identify which components hold hardcoded copy vs. dynamic/i18n strings
- [x] Check current language switching mechanism (if any)
- [x] List all CTAs and forms in the current site
- [x] Confirm which analytics or tracking events are tied to current copy (button labels, form fields)
- [x] Back up or tag the current copy in git before any changes

### Audit Findings Summary:
1. **Component Mapping:**
   - Main page router: [src/app/page.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/page.js)
   - Copy storage: [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js)
   - Nav: [src/components/NavHeader.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/NavHeader.js)
   - Hero: [src/components/HeroSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/HeroSection.js)
   - Problem: [src/components/ProblemSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ProblemSection.js)
   - Solution: [src/components/SolutionSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/SolutionSection.js)
   - Services: [src/components/ServicesSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ServicesSection.js)
   - Process / How It Works: [src/components/HowItWorksSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/HowItWorksSection.js)
   - Results / Proof: [src/components/ProofSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ProofSection.js) & [src/components/CaseStudyModal.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/CaseStudyModal.js)
   - Why Us: [src/components/WhyUsSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/WhyUsSection.js)
   - FAQ: [src/components/FaqSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/FaqSection.js)
   - CTA: [src/components/CtaSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/CtaSection.js)
   - Contact Modal / Form: [src/components/ContactFormModal.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ContactFormModal.js)
   - Footer: [src/components/FooterSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/FooterSection.js)

2. **Copy & i18n Architecture:**
   - Centralized dictionary in `src/app/copy.js` export object `copy = { bg: {...}, en: {...} }`.
   - `page.js` injects `activeCopy = copy[lang]` into all section components.
   - Language selector toggles state `lang` ('bg' | 'en') stored in `localStorage` ('reach-smart-lang'). French ('fr') will be seamlessly integrated into `copy.js` and the language selector dropdown.

3. **Form & CTAs:**
   - All main CTA buttons trigger `setModalOpen(true)` to open `ContactFormModal.js`.
   - Contact form sends payload `{ name, email, company, message, lang }` to `/api/contact`. Form state will be updated to support the new fields (website, process category, process description).


---

## PHASE 1 — Navigation & Global UI Elements

**Files likely affected:** navbar component, layout file, i18n strings

**Changes:**
- [ ] Update nav menu items:
  - BG: Услуги · Как работим · Резултати · Защо Reach Smart · Въпроси
  - EN: Services · How We Work · Results · Why Reach Smart · Questions
  - FR: Services · Comment nous travaillons · Résultats · Pourquoi Reach Smart · Questions
- [ ] Update main CTA button label:
  - BG: Запази безплатна диагностика
  - EN: Book a Free Diagnostic
  - FR: Réserver un diagnostic gratuit
- [ ] Verify anchor links match new section IDs

---

## PHASE 2 — Hero Section

**Changes:**
- [ ] Replace headline
- [ ] Replace subheadline and body paragraph
- [ ] Replace CTA button label + microcopy under it
- [ ] Implement the 5 short highlight badges:
  - AI Support / Lead Finder / Outreach / UGC Content / Post-Purchase
- [ ] Verify mobile layout of highlights strip

---

## PHASE 3 — Problem Section

**Changes:**
- [ ] Replace headline
- [ ] Replace the 4 bullet-point problem statements
- [ ] Replace the "you can add people / remove work" paragraph
- [ ] Replace the punchline closing line

---

## PHASE 4 — Solution Section

**Changes:**
- [ ] Replace headline + subheadline ("Every system must return time, revenue, or both")
- [ ] Replace the 4 diagnostic questions
- [ ] Replace the 5 result bullets
- [ ] Ensure section is visually distinct from Problem section

---

## PHASE 5 — Services: SaaS Tab

**Changes (3 service cards):**

### AI Chat Support Agent
- [ ] Replace hook line
- [ ] Replace body copy (4 paragraphs)
- [ ] Replace result line
- [ ] Update "See how it works" button

### Lead Finder System
- [ ] Replace hook line
- [ ] Replace body + filtering list (4 bullets)
- [ ] Replace result line
- [ ] Update "See how it works" button

### Lead Finder + Outreach System
- [ ] Replace hook line
- [ ] Replace body copy
- [ ] Replace tracking list (5 bullets)
- [ ] Replace result line
- [ ] Update "See how it works" button

---

## PHASE 6 — Services: E-commerce Tab

**Changes (3 service cards):**

### AI Customer Support
- [ ] Replace hook line
- [ ] Replace 5 example question bullets
- [ ] Replace body copy
- [ ] Replace result line
- [ ] Update "See how it works" button

### UGC Content Engine
- [ ] Replace hook line
- [ ] Replace body copy
- [ ] Replace 5-item "system can use" list
- [ ] Replace result line
- [ ] Update "See how it works" button

### Post-Purchase Revenue Flow
- [ ] Replace hook line
- [ ] Replace body copy
- [ ] Replace 6-item inclusion list
- [ ] Replace result line
- [ ] Update "See how it works" button

---

## PHASE 7 — Custom Automations Block

**New section** (may need to be added to the page if not currently present)

- [ ] Add/update headline ("Don't see your process in the list?")
- [ ] Add body paragraph
- [ ] Add 3-bullet direct answer list
- [ ] Add "Discuss your process" CTA button

---

## PHASE 8 — How It Works / Process Section

**Changes (5 steps, was 4 previously):**

- [ ] Update headline and subheadline
- [ ] Replace Step 01 — Diagnostic
- [ ] Replace Step 02 — Design and Build
- [ ] Replace Step 03 — Testing and Launch
- [ ] Replace Step 04 — Optimization *(new name, was "Launch and tuning")*
- [ ] **Add Step 05 — Measurement** *(new step with 7 metric bullets)*

> **Note:** The new copy has 5 steps vs the old version's 4. A new step card component may be needed.

---

## PHASE 9 — Results Section

**Changes:**

- [ ] Update headline (2-line version: "We don't measure how smart... / We measure what it accomplished.")
- [ ] Update Stat 1: 45–60% of support inquiries resolved without human involvement
- [ ] Update Stat 2: 350–500 targeted contacts in 30 days
- [ ] Update Stat 3: Under 30 seconds — initial response time
- [ ] Update Stat 4: Up to 90 variations per month for ad testing
- [ ] Add disclaimer paragraph below stats

---

## PHASE 10 — Case Study Section

**New section** (may be new to the site or replacing existing proof section)

- [ ] Add section headline ("We use the same system...")
- [ ] Add case study title
- [ ] Add "The Situation" paragraph
- [ ] Add "What We Automated" list (4 bullets)
- [ ] Add "Monthly Results" stat block:
  - ~2,000 emails / ~8% reply rate / 30+ conversations / 3–6 clients / 0 hours manual research
- [ ] Add "Why We Show Our Own Results" closing paragraph

---

## PHASE 11 — Why Reach Smart Section

**Changes (4 value pillars):**

- [ ] Update headline
- [ ] Update Pillar 1 — "We start from the economics"
- [ ] Update Pillar 2 — "We build around your business"
- [ ] Update Pillar 3 — "We keep humans where they're needed"
- [ ] Update Pillar 4 — "We'll tell you when it's not worth it"
- [ ] Remove old "Level-headed people in a hype-driven industry" framing

---

## PHASE 12 — Free Diagnostic CTA Section

**New dedicated section** (expanded from a simple CTA)

- [ ] Add headline ("What you get from the first conversation")
- [ ] Add subheadline ("Not an AI demo. A working plan...")
- [ ] Add 6-bullet list of what happens during the call
- [ ] Add closing reassurance paragraph
- [ ] Add CTA button + microcopy ("30 minutes. No commitment. No technical presentation.")

---

## PHASE 13 — FAQ Section

**Changes (9 questions, was 7 previously):**

- [ ] Update Q1: Which automation to start with?
- [ ] Update Q2: How long does the build take?
- [ ] Update Q3: Will it work with existing tools?
- [ ] Update Q4: Do we need technical expertise?
- [ ] Update Q5: Will customers know it's AI?
- [ ] Update Q6: What if the system makes a mistake?
- [ ] **Add Q7: What data will be needed?** *(new question)*
- [ ] Update Q8: How much does it cost?
- [ ] **Add Q9: How will we know if it's worth it?** *(new question)*

---

## PHASE 14 — Final CTA Section

**Changes:**

- [ ] Update headline ("Where does the most time leak...")
- [ ] Replace body paragraph
- [ ] Update CTA button label (matches nav CTA)
- [ ] Update microcopy ("No commitment. No AI jargon. Just a concrete plan.")

---

## PHASE 15 — Booking Form

**Changes:**

- [ ] Update form headline + subheadline
- [ ] Update field labels and placeholders (all 6 fields)
- [ ] Update dropdown options for "Which process?" (7 options)
- [ ] Update textarea label and placeholder
- [ ] Update submit button label
- [ ] Update below-button disclaimer text
- [ ] Update success/confirmation message (2-part)
- [ ] Test form submission + webhook/API endpoint still works
- [ ] Test all field validations

---

## PHASE 16 — Footer

**Changes:**

- [ ] Update brand tagline
- [ ] Update navigation links (6 items, including "Contact" which may be new)
- [ ] Verify email address: hello@thereachsmart.net
- [ ] Verify location: Silistra, Bulgaria
- [ ] Update copyright line: © 2026 The Reach Smart
- [ ] Confirm Privacy Policy and Terms of Service links are functional

---

## PHASE 17 — SEO & Meta

**Changes:**

- [ ] Update `<title>` tag for each language version
- [ ] Update `<meta name="description">` for each language
- [ ] Update Open Graph tags (og:title, og:description)
- [ ] Verify heading hierarchy (H1 → H2 → H3) matches new structure
- [ ] Update `alt` text on any images that reference old copy
- [ ] Update sitemap if language routing changes

---

## PHASE 18 — QA & Cross-Language Review

**Final checks before shipping:**

- [ ] Read-through of EN version on live site — no BG text leaking through
- [ ] Read-through of FR version — no BG or EN text leaking through
- [ ] Read-through of BG version — verify original language is intact
- [ ] All CTA buttons navigate or scroll to the correct target
- [ ] Booking form works in all 3 language contexts
- [ ] Mobile responsive check on all new/changed sections
- [ ] Check for any hardcoded old copy still in the codebase (`grep` for old phrases)
- [ ] Analytics events still firing on form submit and CTA clicks
- [ ] Lighthouse / Core Web Vitals check after changes

---

## NOTES & OPEN QUESTIONS

> **1. Language routing:** Does the current site use i18n routing (e.g., `/en/`, `/fr/`) or a switcher? This affects how we handle the 3 language versions.

> **2. "See how it works" buttons:** These currently link to… where? Service detail pages, anchors, or a modal? Confirm before implementing.

> **3. Step 05 — Measurement:** This is a new step. Do we add a 5th card to the existing "How It Works" component, or does the layout need to be adjusted?

> **4. Case Study section:** Confirm whether this replaces the current "Proof Section" or is added alongside it.

> **5. Custom Automations block:** Is this a new section entirely, or should it be appended to the Services section?

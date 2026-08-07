# NEW COPY IMPLEMENTATION PLAN
## Reach Smart Website — Full Rebuild

> **Source:** `new copy.md` (Bulgarian original)
> **Translations:** `new_copy_EN.md` · `new_copy_FR.md`
> **Goal:** Replace the current website copy entirely with the new version, section by section, across all languages.

---

## CHECKLIST OVERVIEW

- [x] **Phase 0** — Pre-implementation audit *(Completed)*
- [x] **Phase 1** — Navigation & global UI elements *(Completed)*
- [x] **Phase 2** — Hero section *(Completed)*
- [x] **Phase 3** — Problem section *(Completed)*
- [x] **Phase 4** — Solution section *(Completed)*
- [x] **Phase 5** — Services (SaaS tab) *(Completed)*
- [x] **Phase 6** — Services (E-commerce tab) *(Completed)*
- [x] **Phase 7** — Custom Automations block *(Completed)*
- [x] **Phase 8** — How It Works / Process section *(Completed)*
- [x] **Phase 9** — Results section *(Completed)*
- [x] **Phase 10** — Case Study section *(Completed)*
- [x] **Phase 11** — Why Reach Smart section *(Completed)*
- [x] **Phase 12** — Free Diagnostic CTA section *(Completed)*
- [x] **Phase 13** — FAQ section *(Completed)*
- [x] **Phase 14** — Final CTA section *(Completed)*
- [x] **Phase 15** — Booking form *(Completed)*
- [x] **Phase 16** — Footer *(Completed)*
- [x] **Phase 17** — SEO & meta *(Completed)*
- [x] **Phase 18** — QA & cross-language review *(Completed)*

---

## PHASE 8 — How It Works / Process Section (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/HowItWorksSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/HowItWorksSection.js)

**Changes:**
- [x] Updated headline & added subheadline ("We build and configure. You don't overhaul your entire business...")
- [x] Updated 5 sequential timeline steps across BG, EN, and FR:
  1. **Step 01 — Diagnostic:** 30-minute evaluation without selling pre-selected products
  2. **Step 02 — Design & Build:** Mapping workflow, human handoffs, and tool integrations (CRM, help desk, store)
  3. **Step 03 — Testing & Launch:** Edge-case testing before going live
  4. **Step 04 — Optimization:** Fine-tuning logic for measurable business return
  5. **Step 05 — Measurement:** Tracking metrics badges (resolved inquiries, time saved, contacts found, replies, booked calls, UGC creatives, repeat purchases)

---

## PHASE 7 — Custom Automations Block (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/ServicesSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ServicesSection.js)

**Changes:**
- [x] Implemented new Custom Automations banner block ("Don't see your process in the list?") across BG, EN, and FR
- [x] Added diagnostic assessment body text ("In the diagnostic call, we'll look at how the process works today...")
- [x] Added 3 direct promise items (whether it can be automated, whether it's worth automating, what should stay under human control)
- [x] Added CTA button ("Discuss your process" / "Обсъди своя процес" / "Discuter de votre processus") opening diagnostic call modal

---

## PHASE 6 — Services: E-commerce Tab (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/ServicesSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ServicesSection.js)

**Changes:**
- [x] Replaced card copy for **AI Customer Support** (Hook: "Answer instantly, even when your team is offline", 5 question bullets: "Where is my order?", "What size to choose?", etc., result)
- [x] Replaced card copy for **UGC Content Engine** (Hook: "More ad variations. Less waiting for the next creative", 5 input sources, result)
- [x] Replaced card copy for **Post-Purchase Revenue Flow** (Hook: "The purchase shouldn't be the last message a customer gets from you", 6 flow items, result)
- [x] Verified full 3-language rendering (BG, EN, FR) and action buttons triggering diagnostic call modal

---

## PHASE 5 — Services: SaaS Tab (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/ServicesSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ServicesSection.js)

**Changes:**
- [x] Updated Services section header & subheadline across BG, EN, and FR
- [x] Replaced card copy for **AI Chat Support Agent** (Hook: "Stop solving the same problem a hundred times", desc, result)
- [x] Replaced card copy for **Lead Finder System** (Hook: "Let your salespeople sell — not organize lists", desc, list header & 4 bullet criteria, result)
- [x] Replaced card copy for **Lead Finder + Outreach System** (Hook: "From an empty pipeline to replies in your inbox", desc, 5 tracking items, result)
- [x] Implemented "See how it works" / "Виж как работи" action button on each card triggering diagnostic booking modal

---

## PHASE 4 — Solution Section (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/SolutionSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/SolutionSection.js)

**Changes:**
- [x] Replaced headline & subheadline ("Automation with a business reason" — "Every system must return time, revenue, or both")
- [x] Implemented interactive diagnostic question cards ("Where does your team lose time?", "Where are prospects waiting too long?", etc.)
- [x] Implemented outcome grid with 5 green checkmark result cards (fewer tickets, precise contacts, started conversations, ad variations, returning buyers)
- [x] Stylistically distinguished section with purple-tinted card backgrounds and clear visual hierarchy

---

## PHASE 3 — Problem Section (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/ProblemSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/ProblemSection.js)

**Changes:**
- [x] Replaced headline ("Ръчната работа расте по-бързо от бизнеса ви." / "Manual work grows faster than your business." / "Le travail manuel croît plus vite que votre activité.")
- [x] Replaced intro and structured the 4 core problem bullet statements (Support, Sales, Marketing, Follow-up) with red accent highlights
- [x] Replaced options comparison block ("Add more people" vs "Remove non-human work")
- [x] Replaced closing punchline card ("Проблемът не е в капацитета на екипа. Проблемът е къде отива този капацитет.")

---

## PHASE 2 — Hero Section (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/HeroSection.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/HeroSection.js)

**Changes:**
- [x] Replaced headline across all 3 languages (BG, EN, FR)
- [x] Replaced subheadline and body paragraphs ("Reach Smart izgraжда AI системи...")
- [x] Replaced CTA button label ("Запази безплатна диагностика" / "Book a Free Diagnostic" / "Réserver un diagnostic gratuit")
- [x] Replaced microcopy under CTA button
- [x] Implemented the 5 short highlight badges (AI Support, Lead Finder, Outreach, UGC Content, Post-Purchase) dynamically linked to copy dictionary and rendered both on orbit scene badges and in a responsive highlights strip below hero text
- [x] Verified mobile layout of highlights strip

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

## PHASE 1 — Navigation & Global UI Elements (COMPLETED)

**Files affected:** [src/app/copy.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/copy.js), [src/components/NavHeader.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/components/NavHeader.js), [src/app/page.js](file:///c:/Users/haren/Documents/Antigravity%20coding/The%20Reach%20Smart/src/app/page.js)

**Changes:**
- [x] Update nav menu items in BG, EN, and FR:
  - BG: Услуги · Как работим · Резултати · Защо Reach Smart · Въпроси
  - EN: Services · How We Work · Results · Why Reach Smart · Questions
  - FR: Services · Comment nous travaillons · Résultats · Pourquoi Reach Smart · Questions
- [x] Update nav CTA button in BG, EN, and FR:
  - BG: Запази безплатна диагностика
  - EN: Book a Free Diagnostic
  - FR: Réserver un diagnostic gratuit
- [x] Added French (`FR`) option to language switcher in `NavHeader.js` and updated state handler in `page.js`
- [x] Verified anchor links (`#services`, `#process`, `#results`, `#why-us`, `#faq`) match section container IDs

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

## PHASE 9 — Results Section (COMPLETED)

**Changes:**

- [x] Update headline (2-line version: "We don't measure how smart... / We measure what it accomplished.")
- [x] Update Stat 1: 45–60% of support inquiries resolved without human involvement
- [x] Update Stat 2: 350–500 targeted contacts in 30 days
- [x] Update Stat 3: Under 30 seconds — initial response time
- [x] Update Stat 4: Up to 90 variations per month for ad testing
- [x] Add disclaimer paragraph below stats

---

## PHASE 10 — Case Study Section (COMPLETED)

**Changes:**

- [x] Add section headline ("We use the same system...")
- [x] Add case study title
- [x] Add "The Situation" paragraph
- [x] Add "What We Automated" list (4 bullets)
- [x] Add "Monthly Results" stat block:
  - ~2,000 emails / ~8% reply rate / 30+ conversations / 3–6 clients / 0 hours manual research
- [x] Add "Why We Show Our Own Results" closing paragraph

---

## PHASE 11 — Why Reach Smart Section (COMPLETED)

**Changes (4 value pillars):**

- [x] Update headline
- [x] Update Pillar 1 — "We start from the economics"
- [x] Update Pillar 2 — "We build around your business"
- [x] Update Pillar 3 — "We keep humans where they're needed"
- [x] Update Pillar 4 — "We'll tell you when it's not worth it"
- [x] Remove old "Level-headed people in a hype-driven industry" framing

---

## PHASE 12 — Free Diagnostic CTA Section (COMPLETED)

**New dedicated section** (expanded from a simple CTA)

- [x] Add headline ("What you get from the first conversation")
- [x] Add subheadline ("Not an AI demo. A working plan...")
- [x] Add 6-bullet list of what happens during the call
- [x] Add closing reassurance paragraph
- [x] Add CTA button + microcopy ("30 minutes. No commitment. No technical presentation.")

---

## PHASE 13 — FAQ Section (COMPLETED)

**Changes (9 questions, was 7 previously):**

- [x] Update Q1: Which automation to start with?
- [x] Update Q2: How long does the build take?
- [x] Update Q3: Will it work with existing tools?
- [x] Update Q4: Do we need technical expertise?
- [x] Update Q5: Will customers know it's AI?
- [x] Update Q6: What if the system makes a mistake?
- [x] **Add Q7: What data will be needed?** *(new question)*
- [x] Update Q8: How much does it cost?
- [x] **Add Q9: How will we know if it's worth it?** *(new question)*

---

## PHASE 14 — Final CTA Section (COMPLETED)

**Changes:**

- [x] Update headline ("Where does the most time leak...")
- [x] Replace body paragraph
- [x] Update CTA button label (matches nav CTA)
- [x] Update microcopy ("No commitment. No AI jargon. Just a concrete plan.")

---

## PHASE 15 — Booking Form (COMPLETED)

**Changes:**

- [x] Update form headline + subheadline
- [x] Update field labels and placeholders (all 6 fields)
- [x] Update dropdown options for "Which process?" (7 options)
- [x] Update textarea label and placeholder
- [x] Update submit button label
- [x] Update below-button disclaimer text
- [x] Update success/confirmation message (2-part)
- [x] Test form submission + webhook/API endpoint still works
- [x] Test all field validations

---

## PHASE 16 — Footer (COMPLETED)

**Changes:**

- [x] Update brand tagline
- [x] Update navigation links (6 items, including "Contact" which may be new)
- [x] Verify email address: hello@thereachsmart.net
- [x] Verify location: Silistra, Bulgaria
- [x] Update copyright line: © 2026 The Reach Smart
- [x] Confirm Privacy Policy and Terms of Service links are functional

---

## PHASE 17 — SEO & Meta (COMPLETED)

**Changes:**

- [x] Update `<title>` tag for each language version
- [x] Update `<meta name="description">` for each language
- [x] Update Open Graph tags (og:title, og:description)
- [x] Verify heading hierarchy (H1 → H2 → H3) matches new structure
- [x] Update `alt` text on any images that reference old copy
- [x] Update sitemap if language routing changes

---

## PHASE 18 — QA & Cross-Language Review (COMPLETED)

**Final checks before shipping:**

- [x] Read-through of EN version on live site — no BG text leaking through
- [x] Read-through of FR version — no BG or EN text leaking through
- [x] Read-through of BG version — verify original language is intact
- [x] All CTA buttons navigate or scroll to the correct target
- [x] Booking form works in all 3 language contexts
- [x] Mobile responsive check on all new/changed sections
- [x] Check for any hardcoded old copy still in the codebase (`grep` for old phrases)
- [x] Analytics events still firing on form submit and CTA clicks
- [x] Lighthouse / Core Web Vitals check after changes

---

## NOTES & OPEN QUESTIONS

> **1. Language routing:** Does the current site use i18n routing (e.g., `/en/`, `/fr/`) or a switcher? This affects how we handle the 3 language versions.

> **2. "See how it works" buttons:** These currently link to… where? Service detail pages, anchors, or a modal? Confirm before implementing.

> **3. Step 05 — Measurement:** This is a new step. Do we add a 5th card to the existing "How It Works" component, or does the layout need to be adjusted?

> **4. Case Study section:** Confirm whether this replaces the current "Proof Section" or is added alongside it.

> **5. Custom Automations block:** Is this a new section entirely, or should it be appended to the Services section?

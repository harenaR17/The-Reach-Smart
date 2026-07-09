# Scroll-Animated Value Timeline Implementation Guide

This guide provides a detailed blueprint and implementation plan for recreating the scroll-animated **Value Timeline** component in any web application. The implementation uses **React**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**.

---

## 1. Architectural Overview

The Value Timeline is split into two layers to separate data/styling from the scroll-animation mechanics:

```
┌────────────────────────────────────────────────────────┐
│              ValueTimeline.tsx (Content)                │
│   - Defines the data structure (titles, text, cards)   │
│   - Uses Lucide icons and customized grids             │
└───────────────────────────┬────────────────────────────┘
                            │ Passes data array
                            ▼
┌────────────────────────────────────────────────────────┐
│             timeline.tsx (Animation Engine)            │
│   - Tracks scrolling progress via Framer Motion        │
│   - Renders the vertical track with gradient pulse     │
│   - Positions sticky indicators and responsive content │
└────────────────────────────────────────────────────────┘
```

1. **Content Wrapper (`ValueTimeline.tsx`)**: Declares the list of items to display. Each item contains a text `title` and a React Node `content` (custom landing cards, icon grids, call-to-action buttons).
2. **Animation Engine (`timeline.tsx`)**: Reusable UI component that measures the container height, hooks into scroll events, and renders the sticky progress indicators, timeline nodes, and the scroll-linked animated indicator line.

---

## 2. Core Dependencies & Prerequisites

To implement this component, ensure the following packages are installed:

```bash
npm install framer-motion lucide-react
```

### Tailwind Theme Color Requirements
The timeline styles reference custom colors. If implementing on a new website, you must either add these key definitions to your `tailwind.config.js` or map them to your own brand color palette:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#00234A',       // Primary background for dark timeline sections
          navyHover: '#003A78',  // Secondary background for hover states & timeline dots
          teal: '#06BFBC',       // Active scroll line color, dot color
          tealHover: '#059E9C',  // Buttons hover state inside cards
          aqua: '#4DE0DD',       // Accent border & highlight color
        }
      }
    }
  }
}
```

### Required CSS Classes
Add these utility classes in your global stylesheet (`index.css` or equivalent):

```css
/* Glow effect for timeline buttons */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(6, 191, 188, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(6, 191, 188, 0.8);
  }
}

.glow-effect {
  animation: glow 3s infinite;
}

/* Gradient text utility */
.gradient-text-dark-bg {
  background: linear-gradient(to right, #06BFBC, #4DE0DD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 3. Step-by-Step Implementation

### Step 1: Create the Reusable Timeline Engine
Create `components/ui/timeline.tsx`. This component calculates the heights and dynamically tracks vertical page scrolling to draw the animated connecting line.

```tsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure the total height of the scroll container once loaded
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Track the scroll position relative to containerRef
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Triggers start when top of container reaches 10% viewport height,
    // and ends when bottom of container passes 50% viewport height
    offset: ["start 10%", "end 50%"],
  });

  // Maps scroll progress [0, 1] to pixel heights and opacities
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
      id="timeline-container"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-10 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl gradient-text-dark-bg">
          Our Value-Packed AI Suite Includes:
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-sm">
          Comprehensive tools designed to transform your business with cutting-edge technology.
        </p>
      </div>

      {/* Timeline List */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 z-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Sticky Indicator Dot & Title (Desktop Only) */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-brand-navyHover flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-brand-teal border border-brand-aqua p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-brand-teal">
                {item.title}
              </h3>
            </div>

            {/* Mobile Title & Card Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-brand-teal">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Scroll Trace Tracks (Gradients and Mask) */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/10 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated Active Line */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-brand-teal via-brand-navy to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
```

---

### Step 2: Create the Custom Content Wrapper
Create `components/ValueTimeline.tsx`. Define your card layouts, grids, Lucide icons, and button triggers here.

```tsx
import React from "react";
import { Timeline } from "./ui/timeline";
import { Clock, BarChart2, Calendar, Headset } from "lucide-react";

export function ValueTimeline() {
  const data = [
    {
      title: "Conversion Architecture",
      content: (
        <div className="bg-brand-navyHover/80 p-6 rounded-lg border border-white/10 hover:border-brand-teal/40 transition-all">
          <div className="flex items-start mb-4">
            <Clock className="w-8 h-8 text-brand-teal mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Built for speed and high decision traffic</h4>
              <p className="text-white/80 text-sm md:text-base">
                Turning a high-intent visitor into a conversion. Clean paths from landing page to booking.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-brand-navy/80 p-4 rounded-lg border border-white/10">
              <p className="text-brand-teal font-semibold mb-2">Optimized Speeds</p>
              <p className="text-white/70 text-sm">Lightning fast pages that retain user attention instantly.</p>
            </div>
            <div className="bg-brand-navy/80 p-4 rounded-lg border border-white/10">
              <p className="text-brand-teal font-semibold mb-2">Frictionless Flow</p>
              <p className="text-white/70 text-sm">Direct pathways designed to capture intent in one click.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Authority & Credibility",
      content: (
        <div className="bg-brand-navyHover/80 p-6 rounded-lg border border-white/10 hover:border-brand-teal/40 transition-all">
          <div className="flex items-start mb-4">
            <BarChart2 className="w-8 h-8 text-brand-aqua mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Trust signals and strategic proof placement</h4>
              <p className="text-white/80 text-sm md:text-base">
                Structured layouts that build visitor confidence in under 15 seconds.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-brand-navy/80 p-4 rounded-lg border border-white/10">
              <p className="text-brand-aqua font-semibold mb-2">Proof Architecture</p>
              <p className="text-white/70 text-sm">Highlighting client validations where decisions are made.</p>
            </div>
            <div className="bg-brand-navy/80 p-4 rounded-lg border border-white/10">
              <p className="text-brand-aqua font-semibold mb-2">Premium Placement</p>
              <p className="text-white/70 text-sm">Visually outstanding presentation that positions you at the top.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Interactive Call to Action",
      content: (
        <div className="bg-brand-navyHover/80 p-6 rounded-lg border border-white/10 hover:border-brand-teal/40 transition-all">
          <div className="flex items-start mb-4">
            <Headset className="w-8 h-8 text-brand-teal mr-4 mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white">Integrated user pathways</h4>
              <p className="text-white/80 text-sm md:text-base">
                Easily hook into local actions like forms, chats, or overlays.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                // Dispatch a custom event to trigger overlays anywhere in the page
                document.dispatchEvent(new CustomEvent('openContactForm'));
              }}
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-brand-teal hover:bg-brand-tealHover transition-all glow-effect tracking-wide text-white"
            >
              Get Started Now
            </button>
          </div>
        </div>
      ),
    }
  ];

  return (
    <div className="relative">
      <Timeline data={data} />
    </div>
  );
}
```

---

### Step 3: Add to App/Page Section
Integrate the wrapper inside your main entry point file (e.g., `App.tsx` or `page.tsx`). Make sure to wrap it inside a containing section that handles background styling.

```tsx
import { ValueTimeline } from './components/ValueTimeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy">
      {/* Other page sections */}
      
      <section id="value-stack" className="bg-brand-navy transition-all duration-500">
        <ValueTimeline />
      </section>
      
      {/* Other page sections */}
    </main>
  );
}
```

---

## 4. Key Mechanics & Troubleshooting

### Scroll Tracking Math
* **Element Height Measurement**: The component uses a dynamic React state `height`. The `useEffect` registers the offset box boundary `getBoundingClientRect().height` on mounting. Without this, the background line path wouldn't know when to stop drawing itself.
* **Scroll Offset**:
  ```tsx
  offset: ["start 10%", "end 50%"]
  ```
  This indicates that progress starts tracking (`0`) when the *start* (top) of the timeline reaches `10%` from the top of the browser window. It reaches maximum length (`1`) when the *end* (bottom) of the timeline reaches `50%` (the middle) of the viewport.

### Mask Image Fade
To make the timeline fade out cleanly at the top and bottom edges, a linear CSS mask is applied:
```css
[mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]
```
This forces the timeline vertical lines to dissolve into nothing at the first and last `10%` of their total vertical length.

### Responsive Alignment
* **Desktop layout**: The indicator dots are absolutely matched to a vertical tracking system, aligning on the left (`md:left-8`). Title nodes sit next to them as sticky headers (`top-40 sticky`).
* **Mobile layout**: Screen widths are narrower, so titles are automatically hidden on the left side (`hidden md:block`) and instead display directly above each card on the right side (`md:hidden block`). The indicator dot line remains in the left padding gutter so users still see the scrolling line animation on mobile.

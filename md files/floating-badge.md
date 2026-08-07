# FloatBadge Feature — Implementation Plan

A reusable system of animated glass badges orbiting a central element (video, image, or component). Fully implemented in Next.js + Tailwind + Framer Motion.

---

## Table of Contents

1. [Visual Anatomy](#1-visual-anatomy)
2. [Component Architecture](#2-component-architecture)
3. [The FloatBadge Component](#3-the-floatbadge-component)
4. [The Center Element](#4-the-center-element)
5. [The Orbit Container](#5-the-orbit-container)
6. [Positioning System](#6-positioning-system)
7. [Animation Spec](#7-animation-spec)
8. [Accessibility](#8-accessibility)
9. [Responsive Behaviour](#9-responsive-behaviour)
10. [Full Usage Example](#10-full-usage-example)
11. [Variants & Extensions](#11-variants--extensions)

---

## 1. Visual Anatomy

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│         ┌──────────────┐                               │
│         │ ✍ OfficeSuite│  ← FloatBadge (top-left)     │
│         └──────────────┘                               │
│                              ┌──────────────┐          │
│                              │ 📄 MobiPDF   │ ← (top-right)
│                              └──────────────┘          │
│    ┌──────────────────────────────────┐                 │
│    │                                  │                 │
│    │        CENTER ELEMENT            │ ← video / img  │
│    │     (mascot video / image)       │                 │
│    │                                  │                 │
│    └──────────────────────────────────┘                 │
│  ┌──────────────┐                                       │
│  │ 📊 Sheets    │  ← FloatBadge (bottom-left)          │
│  └──────────────┘                                       │
│                         ┌──────────────────┐            │
│                         │ ☁ MobiDrive 20GB │ ← (bottom-right)
│                         └──────────────────┘            │
│                  ┌──────────────┐                       │
│                  │ 🎯 Slides    │  ← FloatBadge (mid-right)
│                  └──────────────┘                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Each badge has:**
- Glassmorphism surface (`backdrop-filter: blur`)
- An icon block (colored background circle or rounded square)
- A text label
- A continuous vertical float animation with a unique delay

**The center has:**
- A slow-rotating decorative ring
- An optional radial glow behind it
- The main visual (video, image, or any React node)

---

## 2. Component Architecture

```
<OrbitScene>
  ├── <CenterElement>        — video / image / SVG / any node
  ├── <OrbitRing />          — rotating CSS border ring
  └── <FloatBadge /> × N    — each badge positioned absolutely
```

Three files to create:

```
src/components/ui/
├── FloatBadge.tsx
├── OrbitRing.tsx
└── OrbitScene.tsx          ← composes the above
```

---

## 3. The FloatBadge Component

### 3.1 Props

```tsx
// src/components/ui/FloatBadge.tsx

interface FloatBadgeProps {
  icon: React.ReactNode         // emoji, SVG, or <Image />
  label: string
  iconBg?: string               // Tailwind bg class e.g. 'bg-blue-500/20'
  iconColor?: string            // Tailwind text class e.g. 'text-blue-400'
  delay?: number                // animation delay in seconds (default: 0)
  amplitude?: number            // float distance in px (default: 8)
  duration?: number             // float cycle in seconds (default: 3)
  className?: string            // for absolute positioning from parent
}
```

### 3.2 Implementation

```tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function FloatBadge({
  icon,
  label,
  iconBg = 'bg-white/10',
  iconColor = 'text-white',
  delay = 0,
  amplitude = 8,
  duration = 3,
  className,
}: FloatBadgeProps) {
  return (
    <motion.div
      className={cn(
        // Glass surface
        'absolute flex items-center gap-2',
        'px-3.5 py-2 rounded-xl',
        'bg-navy-glass backdrop-blur-md',
        'border border-white/[0.12]',
        // Typography
        'text-xs font-medium text-white whitespace-nowrap',
        // Pointer
        'pointer-events-none select-none',
        className
      )}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Icon block */}
      <span
        className={cn(
          'flex items-center justify-center',
          'w-6 h-6 rounded-md flex-shrink-0 text-sm',
          iconBg,
          iconColor
        )}
      >
        {icon}
      </span>

      {/* Label */}
      <span>{label}</span>
    </motion.div>
  )
}
```

### 3.3 Tailwind token for glass background

Add this to your `tailwind.config.ts` so `bg-navy-glass` works:

```ts
// tailwind.config.ts
theme: {
  extend: {
    backgroundColor: {
      'navy-glass': 'rgba(10, 21, 48, 0.55)',
    }
  }
}
```

Or use an arbitrary value inline: `bg-[rgba(10,21,48,0.55)]`.

---

## 4. The Center Element

The center element is whatever you want to orbit — a `<video>`, `<Image>`, or any React node. It is **not** a separate component; it is passed as `children` to `<OrbitScene>`.

### 4.1 Video (mascot animation)

```tsx
// Inside OrbitScene children
<video
  className="w-full rounded-2xl block object-cover"
  autoPlay
  muted
  loop
  playsInline
  src="/videos/mascot-animation.mp4"
  // Preload hint — add to <head> via next/head or metadata
  // <link rel="preload" as="video" href="/videos/mascot-animation.mp4" />
/>
```

**Video file requirements:**
- Format: MP4, H.264 (widest browser support) or H.265 for smaller file
- Resolution: 720p is enough for this display size
- Target file size: under 8MB (compress with HandBrake)
- The animation itself: slow idle movement, gentle camera bob — anything beyond that is unnecessary

### 4.2 Static image fallback

```tsx
import Image from 'next/image'

<Image
  src="/images/mascot.png"
  alt="MobiSystems mascot"
  width={580}
  height={435}
  priority
  className="w-full rounded-2xl"
/>
```

---

## 5. The Orbit Container

`<OrbitScene>` is the positioning root. Everything inside uses `position: absolute` relative to it.

```tsx
// src/components/ui/OrbitScene.tsx
'use client'

import { cn } from '@/lib/utils'
import { OrbitRing } from './OrbitRing'

interface OrbitSceneProps {
  children: React.ReactNode           // the center element
  badges: React.ReactNode             // <FloatBadge /> nodes
  className?: string
  maxWidth?: string                   // default: 'max-w-[580px]'
  showRing?: boolean                  // default: true
  showGlow?: boolean                  // default: true
  glowColor?: string                  // default: cobalt blue
}

export function OrbitScene({
  children,
  badges,
  className,
  maxWidth = 'max-w-[580px]',
  showRing = true,
  showGlow = true,
  glowColor = 'rgba(26,107,255,0.18)',
}: OrbitSceneProps) {
  return (
    <div className={cn('relative w-full', maxWidth, className)}>

      {/* Optional radial glow behind center */}
      {showGlow && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            transform: 'scale(1.4)',
          }}
        />
      )}

      {/* Rotating ring */}
      {showRing && <OrbitRing />}

      {/* Center content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Badges — rendered in the same positioning context */}
      {badges}
    </div>
  )
}
```

---

## 6. The Orbit Ring Component

```tsx
// src/components/ui/OrbitRing.tsx

export function OrbitRing() {
  return (
    <div
      className={[
        'absolute -inset-8',             // extends 30px beyond the center element
        'rounded-full',
        'border border-cobalt/20',       // subtle ring
        'pointer-events-none',
        'animate-spin-slow',             // custom Tailwind animation (see below)
      ].join(' ')}
    >
      {/* Orbiting dot — sits at the left midpoint of the ring */}
      <span
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                   w-2 h-2 rounded-full bg-cyan"
      />
    </div>
  )
}
```

Register the custom animation in `tailwind.config.ts`:

```ts
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    }
  }
}
```

`animate-spin` uses the built-in Tailwind spin keyframe — just override the duration via the custom animation name.

---

## 7. Positioning System

Badges are positioned absolutely inside `<OrbitScene>`. Use the `className` prop to place each one.

### 7.1 The 5-badge layout used in MobiSystems

```tsx
const BADGES = [
  {
    icon: '✍',
    label: 'OfficeSuite Writer',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    delay: 0,
    className: 'top-[8%] -left-[10%]',       // top-left
  },
  {
    icon: '📄',
    label: 'MobiPDF',
    iconBg: 'bg-red-500/20',
    iconColor: 'text-red-400',
    delay: 0.8,
    className: 'top-[12%] -right-[8%]',      // top-right
  },
  {
    icon: '📊',
    label: 'Sheets',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    delay: 1.6,
    className: 'bottom-[18%] -left-[12%]',   // bottom-left
  },
  {
    icon: '☁',
    label: 'MobiDrive 20GB',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    delay: 0.4,
    className: 'bottom-[12%] -right-[6%]',   // bottom-right
  },
  {
    icon: '🎯',
    label: 'Presentations',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-400',
    delay: 1.2,
    className: 'top-[48%] -right-[14%]',     // mid-right
  },
]
```

### 7.2 Positioning rules

```
top-[N%]    — vertical anchor from the top of the center element
-left-[N%]  — negative = badge overlaps / bleeds outside left edge
-right-[N%] — negative = badge overlaps / bleeds outside right edge
```

**Minimum clearance:** Keep badges at least `8%` from the top/bottom edge so they don't clip during the float animation. Factor in `amplitude` (default 8px): a badge at `top-[2%]` will animate off-screen if the container has `overflow: hidden`.

> **Do not set `overflow: hidden` on `<OrbitScene>`** — badges intentionally bleed outside the container bounds.

### 7.3 Adapting to different badge counts

| Count | Suggested positions |
|---|---|
| 3 | top-left · top-right · bottom-center |
| 4 | top-left · top-right · bottom-left · bottom-right |
| 5 | top-left · top-right · mid-right · bottom-left · bottom-right |
| 6 | top-left · top-center · top-right · bottom-left · bottom-center · bottom-right |

Avoid placing two badges on the same horizontal level — they will collide on narrow screens. Stagger vertical positions by at least `12%`.

---

## 8. Animation Spec

### 8.1 Float keyframes

Each badge floats vertically with a sinusoidal ease:

```
y: 0px → -8px → 0px   (one full cycle)
duration: 3s
easing: easeInOut
repeat: Infinity
```

**Stagger delays used in the 5-badge layout:**

| Badge | Delay |
|---|---|
| OfficeSuite Writer | 0s |
| MobiDrive | 0.4s |
| MobiPDF | 0.8s |
| Presentations | 1.2s |
| Sheets | 1.6s |

The 0.4s stagger ensures no two adjacent badges are at the same Y position simultaneously, which creates natural visual rhythm without coordination overhead.

### 8.2 Entrance animation (optional)

Badges can fade+slide in on mount using Framer Motion `initial`/`animate`:

```tsx
// Add to FloatBadge.tsx motion.div
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}    // this merges with the float keyframes below
// For entrance + continuous float, use a separate wrapper:
```

Because Framer Motion cannot merge `animate` arrays, use a wrapper for entrance:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: delay + 0.3 }}
>
  <motion.div
    animate={{ y: [0, -amplitude, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    className={cn('flex items-center gap-2 ...', className)}
  >
    ...
  </motion.div>
</motion.div>
```

### 8.3 Orbit ring animation

```css
/* Tailwind: animate-spin-slow — duration: 20s, linear, infinite */
/* The ring rotates; the dot is a child so it orbits with it */
```

The ring is purely decorative. It reinforces the "orbiting" metaphor without competing with badge motion.

### 8.4 Reduced motion

```tsx
// FloatBadge.tsx
import { useReducedMotion } from 'framer-motion'

const prefersReduced = useReducedMotion()

animate={prefersReduced ? {} : { y: [0, -amplitude, 0] }}
transition={prefersReduced ? {} : { duration, delay, repeat: Infinity, ease: 'easeInOut' }}
```

```tsx
// OrbitRing.tsx
<div className={cn('...', prefersReduced ? '' : 'animate-spin-slow')}>
```

---

## 9. Responsive Behaviour

### 9.1 Hide badges on small screens

Badges bleed outside the container bounds, which breaks layouts on narrow viewports. Hide them below `md`:

```tsx
// FloatBadge.tsx — add to className
'hidden md:flex'
```

### 9.2 Reduce bleed on medium screens

On `md` (768px), the negative offsets may push badges off-screen. Reduce them:

```tsx
// Per-badge className — use responsive Tailwind classes
className: '-left-[5%] md:-left-[10%]'
```

Or use CSS clamp equivalents with inline styles if you need continuous scaling:

```tsx
style={{ left: 'clamp(-40px, -10%, -20px)' }}
```

### 9.3 Full layout at breakpoints

| Breakpoint | Badge visibility | Badge position offsets |
|---|---|---|
| `< 768px` (`sm`) | Hidden | — |
| `768px–1024px` (`md`) | Visible | Reduce bleed to `~5%` |
| `> 1024px` (`lg`) | Visible | Full bleed at `-8%` to `-14%` |

---

## 10. Full Usage Example

```tsx
// src/components/sections/Hero.tsx
import { OrbitScene } from '@/components/ui/OrbitScene'
import { FloatBadge } from '@/components/ui/FloatBadge'

const badges = [
  { icon: '✍', label: 'OfficeSuite Writer', iconBg: 'bg-blue-500/20',   iconColor: 'text-blue-400',   delay: 0,   className: 'top-[8%] -left-[10%]' },
  { icon: '📄', label: 'MobiPDF',           iconBg: 'bg-red-500/20',    iconColor: 'text-red-400',    delay: 0.8, className: 'top-[12%] -right-[8%]' },
  { icon: '📊', label: 'Sheets',            iconBg: 'bg-green-500/20',  iconColor: 'text-green-400',  delay: 1.6, className: 'bottom-[18%] -left-[12%]' },
  { icon: '☁',  label: 'MobiDrive 20GB',   iconBg: 'bg-cyan-500/20',   iconColor: 'text-cyan-400',   delay: 0.4, className: 'bottom-[12%] -right-[6%]' },
  { icon: '🎯', label: 'Presentations',     iconBg: 'bg-yellow-500/20', iconColor: 'text-yellow-400', delay: 1.2, className: 'top-[48%] -right-[14%]' },
]

export function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen items-center px-[5vw] pt-24">

      {/* Left: copy */}
      <div>
        <h1>Work smarter. Every file. Every device.</h1>
        <p>The complete office suite...</p>
        <a href="/download">Download Free →</a>
      </div>

      {/* Right: orbit scene */}
      <div className="flex justify-center">
        <OrbitScene
          badges={badges.map((b) => (
            <FloatBadge key={b.label} {...b} />
          ))}
          showRing
          showGlow
        >
          <video
            className="w-full rounded-2xl block"
            autoPlay muted loop playsInline
            src="/videos/mascot-animation.mp4"
          />
        </OrbitScene>
      </div>

    </section>
  )
}
```

---

## 11. Variants & Extensions

### 11.1 Stat badge (with number)

```tsx
// A badge that shows a number + label, no icon
<FloatBadge
  icon={<span className="text-xs font-bold">4.7★</span>}
  label="App Store"
  iconBg="bg-yellow-500/20"
  iconColor="text-yellow-300"
  delay={0.6}
  className="top-[30%] -left-[14%]"
/>
```

### 11.2 Badge with live indicator dot

Add an optional `live` prop that renders a pulsing green dot:

```tsx
// FloatBadge.tsx — add to JSX before icon
{live && (
  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
)}
```

### 11.3 Clickable badge (pointer-events enabled)

Remove `pointer-events-none` and add:

```tsx
<motion.a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className={cn('cursor-pointer hover:border-cobalt/40 transition-colors', ...)}
  ...
>
```

### 11.4 Different center elements

The system is center-agnostic. Swap the video for:

```tsx
// A product screenshot
<Image src="/screenshots/writer.png" alt="Writer" width={580} height={400} className="rounded-2xl w-full" priority />

// An SVG illustration
<MySVGIllustration className="w-full" />

// A Lottie animation
<Lottie animationData={mascotData} loop className="w-full" />

// A Spline 3D embed (if moving to interactive 3D later)
<Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" className="w-full rounded-2xl" />
```

### 11.5 Horizontal float variant

For badges on the left or right sides, swap vertical float for horizontal:

```tsx
animate={{ x: [0, 6, 0] }}     // gentle side nudge instead of y
```

### 11.6 Scroll-linked entrance (viewport trigger)

Wrap `<OrbitScene>` in a Framer Motion `<motion.div>` with `whileInView`:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <OrbitScene ...>...</OrbitScene>
</motion.div>
```

This delays badge reveal until the section scrolls into view, which is cleaner than animating off-screen from page load.

---

*End of FloatBadge implementation plan.*
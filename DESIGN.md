# DESIGN.md — Predictable Pipeline Systems
## Design System Source of Truth

> This file is the canonical design authority for all visual, typographic, copy, and structural decisions made across the Predictable Pipeline Systems website. Every component, page, and interaction must be traceable back to a rule defined here.

---

## 1. Brand Category

**Category:** B2B Revenue Infrastructure / Pipeline Operations  
**Sector:** Enterprise SaaS-adjacent, GTM Systems, Revenue Engineering  
**Audience:** Operators, Revenue Leaders, Founders scaling GTM motion  
**Positioning:** Not an agency. Not a SaaS tool. A structured operating system for pipeline predictability.

The brand occupies the white space between strategy consulting and technical tooling — authoritative, measured, and infrastructure-native in its communication.

---

## 2. Design Mood

| Dimension         | Expression                                                                 |
|-------------------|----------------------------------------------------------------------------|
| **Tone**          | Editorial authority. Command-center clarity. Engineered precision.         |
| **Feel**          | A Bloomberg terminal crossed with an engineering operations dashboard.     |
| **Texture**       | Warm ivory surfaces, structured steel grids, live-signal accents.          |
| **Energy**        | Controlled. Deliberate. Nothing decorative. Everything functional.         |
| **Anti-patterns** | No agency warmth. No SaaS gradient playfulness. No stock photo humanity.   |

The overriding mood is: **infrastructure you trust because it looks like it was built by people who understand consequence.**

---

## 3. Color System

### 3.1 Primary Palette

```css
:root {
  /* Canvas */
  --color-canvas:          #F5F0E8;  /* Warm Ivory — primary background */
  --color-canvas-soft:     #EDE8DF;  /* Ivory Shade — section depth */
  --color-canvas-inset:    #E4DDD2;  /* Inset panels, table rows, rule fills */

  /* Structure */
  --color-charcoal:        #1C1C1E;  /* Primary text, headings, borders */
  --color-steel:           #3A3D42;  /* Secondary text, subheadings */
  --color-smoke:           #6B6F75;  /* Muted text, captions, labels */
  --color-rule:            #C8C2B8;  /* Dividers, table lines, grid separators */

  /* Authority */
  --color-oxblood:         #6B1A1A;  /* Primary CTA, section anchors, authority marks */
  --color-oxblood-hover:   #7E2020;  /* CTA hover state */
  --color-oxblood-muted:   #8C3333;  /* Secondary emphasis, inline accents */

  /* Pathway */
  --color-copper:          #B5651D;  /* Process indicators, step connectors, tactical details */
  --color-copper-light:    #C97B38;  /* Hover copper states, warm highlights */
  --color-copper-muted:    #D4956A;  /* Copper at reduced weight, diagrams */

  /* Monitored Signal */
  --color-mint:            #3DAA6E;  /* Live status only — system active, pipeline flowing */
  --color-mint-dim:        #2E7D52;  /* Less prominent mint — non-primary signal states */
  --color-mint-pulse:      rgba(61, 170, 110, 0.15); /* Pulse glow for live indicators */
}
```

### 3.2 Surface Hierarchy

```
Canvas (Ivory)
  └── Page Background:       --color-canvas
  └── Section Alternate:     --color-canvas-soft
  └── Inset / Table / Panel: --color-canvas-inset
  └── Card Surface:          #FFFFFF with subtle border --color-rule
```

### 3.3 Dark Command Panel

For dashboard fragments, terminal blocks, and system maps only:

```css
:root {
  --color-panel-bg:         #111214;  /* Near-black command surface */
  --color-panel-border:     #2A2D31;  /* Panel edge definition */
  --color-panel-text:       #D4CFC6;  /* Ivory-tinted terminal text */
  --color-panel-label:      #6B6F75;  /* Muted panel labels */
}
```

---

## 4. Accent Usage Rules

### Oxblood (`--color-oxblood`)
- Use for: Primary CTA buttons, section anchors, authority headings, key stat callouts
- Frequency: **Sparse.** Maximum 2–3 oxblood elements per viewport
- Never use as: Background fill across large areas, decorative borders, icon fills
- Pairing: Always on ivory or white; never on dark backgrounds unless inverted CTA

### Copper (`--color-copper`)
- Use for: Process step connectors, numbered pathway indicators, hover states on links, routing diagram edges, tactical footnote markers
- Frequency: **Moderate.** Present in process sections and diagram components
- Never use as: Primary CTA color, heading color, or standalone background
- Pairing: Best on ivory canvas. Also works on inset panels.

### Mint (`--color-mint`)
- Use for: **Live status indicators only.** Active pipeline signal, "System: Live" badges, real-time metric labels
- Frequency: **Minimal and intentional.** Never decorative. Never dominant.
- Never use as: Section accent, header fill, gradient color, hover state outside of status context
- Rule: If the element is not communicating **live monitored status**, mint must not appear.
- Animation: Mint elements may use a slow pulse keyframe (`opacity: 1 → 0.5 → 1`, 2s loop) to signal live state

### Charcoal + Steel + Smoke
- These govern all text hierarchy. Use in strict layered sequence: Charcoal → Steel → Smoke
- Structure borders, grid lines, and rule dividers always use `--color-rule`

---

## 5. Typography System

### 5.1 Font Families

```css
:root {
  /* Editorial / Structural Headings */
  --font-display:  'Playfair Display', Georgia, serif;

  /* Body / Interface / Data */
  --font-body:     'Inter', system-ui, -apple-system, sans-serif;

  /* Mono / Terminal / Metrics */
  --font-mono:     'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

**Loading:** Import via Google Fonts. Weights: Playfair Display 600, 700. Inter 400, 500, 600. JetBrains Mono 400, 500.

### 5.2 Scale

```css
:root {
  --text-xs:    0.6875rem;  /* 11px — data labels, badges */
  --text-sm:    0.8125rem;  /* 13px — captions, footnotes */
  --text-base:  1rem;       /* 16px — body copy */
  --text-md:    1.125rem;   /* 18px — secondary body, intro text */
  --text-lg:    1.375rem;   /* 22px — card headings, section leads */
  --text-xl:    1.75rem;    /* 28px — H3 equivalents */
  --text-2xl:   2.25rem;    /* 36px — H2 equivalents */
  --text-3xl:   3rem;       /* 48px — H1 equivalents */
  --text-4xl:   4rem;       /* 64px — Hero headline */
}
```

### 5.3 Usage Rules

| Element               | Family             | Size          | Weight | Color                  |
|-----------------------|--------------------|---------------|--------|------------------------|
| Hero Headline (H1)    | `--font-display`   | `--text-4xl`  | 700    | `--color-charcoal`     |
| Section Headline (H2) | `--font-display`   | `--text-2xl`  | 600    | `--color-charcoal`     |
| Card Headline (H3)    | `--font-body`      | `--text-lg`   | 600    | `--color-charcoal`     |
| Body Copy             | `--font-body`      | `--text-base` | 400    | `--color-steel`        |
| Intro Paragraph       | `--font-body`      | `--text-md`   | 400    | `--color-charcoal`     |
| Label / Eyebrow       | `--font-body`      | `--text-xs`   | 600    | `--color-smoke`        |
| Caption               | `--font-body`      | `--text-sm`   | 400    | `--color-smoke`        |
| Metric / Data Point   | `--font-mono`      | `--text-xl`   | 500    | `--color-charcoal`     |
| Terminal / Code Block | `--font-mono`      | `--text-sm`   | 400    | `--color-panel-text`   |
| CTA Button Text       | `--font-body`      | `--text-sm`   | 600    | `#FFFFFF`              |

### 5.4 Typographic Rules
- **Eyebrows:** Always uppercase, tracked wide (`letter-spacing: 0.12em`), in `--color-smoke`. Used above H1/H2 to categorize sections (e.g., `PIPELINE INFRASTRUCTURE`, `HOW IT WORKS`).
- **Headline max-width:** Constrain display headlines to `14ch`–`20ch` for editorial authority. Never let them span full container width.
- **Line height:** Body: `1.7`. Headings: `1.15`. Mono: `1.6`.
- **No italic body copy.** Italics reserved for editorial pull quotes only, in `--font-display`.

---

## 6. Spacing System

```css
:root {
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
}
```

### Section Rhythm
- **Between major sections:** `--space-24` minimum. `--space-32` for page-defining breaks.
- **Within a section (between text blocks):** `--space-8` to `--space-12`
- **Within a card (internal padding):** `--space-6` to `--space-8`
- **Eyebrow to headline gap:** `--space-3`
- **Headline to body gap:** `--space-4`
- **Body to CTA gap:** `--space-8`

### Layout Grid
- **Max content width:** `1160px` (not 1280 — tighter frames read more authoritative)
- **Column grid:** 12-column, `--space-6` gutter
- **Side padding (mobile):** `--space-4`; **tablet:** `--space-8`; **desktop:** `--space-12`

---

## 7. Card System

Cards surface structured data, proof points, and feature explanations. They must never feel decorative or "feature box" generic.

### 7.1 Base Card

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid var(--color-rule);
  border-radius: 3px;       /* Minimal radius. Sharp corners = engineered. */
  padding: var(--space-8);
}
```

**Rules:**
- No box shadows by default. Use `border` only.
- Hover state: `border-color: var(--color-copper)` + `transition: border-color 200ms ease`
- No rounded corners beyond 3px — the brand is structured, not soft.

### 7.2 Stat Card

Used for quantified proof: revenue numbers, pipeline metrics, conversion rates.

```
┌─────────────────────────────┐
│ METRIC LABEL (eyebrow)      │
│                             │
│  $4.2M                      │  ← --font-mono, --text-3xl, --color-charcoal
│  Pipeline Generated         │  ← --font-body, --text-sm, --color-smoke
│                             │
│  ↑ 62% YoY                  │  ← mint signal only if live/active
└─────────────────────────────┘
```

- Metric value always in `--font-mono`
- Percentage gains may use `--color-mint` if they represent live/current state
- Static historical stats use `--color-copper-light`

### 7.3 Process Card

Used in how-it-works, pipeline phase breakdowns, or system step explanations.

```
┌─────────────────────────────┐
│ 01 ─────────────────────    │  ← step number in --font-mono, copper rule line
│                             │
│ Stage Title                 │  ← --font-body, 600, charcoal
│ Concise explanation of      │
│ what this stage does.       │  ← --font-body, 400, steel
└─────────────────────────────┘
```

- Step numbers and the connecting rule use `--color-copper`
- Cards connect visually with copper `→` or `─` connector glyphs between them

### 7.4 Evidence Card

Used for case study snippets, client outcomes, and sector proof.

```
┌─────────────────────────────┐
│ ■ SECTOR                    │  ← small oxblood square + eyebrow
│                             │
│ "Direct quote from outcome  │
│  or system result."         │  ← --font-display italic, --text-lg
│                             │
│ Company · Role              │  ← --font-body, --text-sm, --color-smoke
└─────────────────────────────┘
```

- The `■` authority mark: `--color-oxblood`, 8×8px block
- Quotes use `--font-display` in italic only here (the one exception)

---

## 8. Proof Component System

Proof is the primary conversion mechanism. Every proof component must be traceable to a specific operational outcome — not a generic testimonial.

### 8.1 Proof Types (in order of authority)

1. **Metric-Anchored Outcomes** — Lead with numbers. `$X pipeline`, `Y% conversion lift`, `Z days to first meeting`.
2. **System Diagrams** — Visual rendering of a client's pipeline configuration (anonymized if needed). Shows the system *worked*.
3. **Sector Evidence** — Short, attributed statements. Sector + role visible. Name optional.
4. **Phase Audit Snapshots** — Before/after dashboard fragments showing pipeline state change.

### 8.2 Proof Section Layout Rules

- Never stack more than 3 proof cards in a horizontal row without a visual break
- Alternate: Row of 3 stats → Full-width system diagram → Row of 2 evidence cards
- Stat cards always precede testimonial proof (numbers establish credibility before voice)
- Every proof block must answer: **What changed? By how much? In what timeframe?**

### 8.3 Prohibited Proof Patterns
- No star ratings or review widget embeds
- No generic "happy client" portraits
- No vague sentiment quotes ("Amazing experience!", "Highly recommend!")
- No proof that cannot be tied to a pipeline, revenue, or operational metric

---

## 9. CTA Rules

### 9.1 Primary CTA

```css
.cta-primary {
  background-color: var(--color-oxblood);
  color: #FFFFFF;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 200ms ease;
}

.cta-primary:hover {
  background-color: var(--color-oxblood-hover);
}
```

### 9.2 Secondary CTA

```css
.cta-secondary {
  background-color: transparent;
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: var(--space-4) var(--space-8);
  border: 1.5px solid var(--color-charcoal);
  border-radius: 2px;
  cursor: pointer;
  transition: border-color 200ms ease, color 200ms ease;
}

.cta-secondary:hover {
  border-color: var(--color-copper);
  color: var(--color-copper);
}
```

### 9.3 CTA Copy Rules
- **Primary:** Specific action with implied system outcome. E.g., `Audit My Pipeline`, `Map the System`, `Request Infrastructure Scope`
- **Secondary:** Navigational or informational next step. E.g., `See How It Works`, `View Case Studies`
- **Forbidden CTA copy:** `Get Started`, `Learn More`, `Contact Us`, `Let's Talk`, `Book a Call`
- **Length:** 2–4 words. Never exceed 5.
- **No punctuation** in CTA buttons (no exclamation marks, no arrows as punctuation)

### 9.4 CTA Placement Rules
- Hero: One primary CTA only. No secondary CTA in hero.
- Section endings: Primary + optional secondary (right-justified pair)
- Sticky nav: One primary CTA, small, always visible
- No more than **2 CTAs per viewport** at any time

---

## 10. Artifact Styling Rules

Artifacts are structured visual elements that communicate system state, routing logic, or pipeline architecture — not decorative graphics.

### 10.1 System Maps
- Rendered as structured node-edge diagrams using dark panel surfaces (`--color-panel-bg`)
- Node labels: `--font-mono`, `--text-xs`, `--color-panel-text`
- Edge connectors: `--color-copper` for active routes, `--color-rule` for inactive
- Active state nodes: `--color-mint` border (1px) with `--color-mint-pulse` glow
- Never use color fills inside nodes — border color communicates state

### 10.2 Dashboard Fragments
- Cropped, realistic representations of a pipeline monitoring interface
- Use dark command panel theme (`--color-panel-bg`)
- Show real metric types: open opportunities, stage velocity, close rate by segment
- Always show a live indicator badge: `● LIVE` in `--color-mint`, `--font-mono`, `--text-xs`
- Never show generic bar charts — use funnel metrics, stage distribution, or time-series line data

### 10.3 Routing Diagrams
- Show pipeline stages as a horizontal flow: `COLD → QUALIFIED → ACTIVE → CLOSE`
- Stages connected by `──→` in `--color-copper`
- Stage labels in `--font-mono`, uppercase
- Volume/conversion rates shown below each stage label in `--color-smoke`

### 10.4 Structured Iconography
- Style: Thin-stroke, geometric line icons only (no filled blobs, no rounded playful icons)
- Color: `--color-charcoal` default; `--color-copper` on hover or emphasis state
- Size: 20×20px standard, 16×16px inline
- Source: Lucide Icons or equivalent thin-stroke set

---

## 11. Homepage Rules

### 11.1 Above-the-Fold (Hero)
- **Background:** `--color-canvas` (warm ivory) — no image, no gradient, no pattern
- **Eyebrow:** Category label in uppercase smoke — e.g., `PIPELINE INFRASTRUCTURE`
- **Headline:** 2-line max, `--font-display`, 700, `--text-4xl`. Keep under 16 words total.
- **Subheadline:** 1–2 sentences. `--font-body`, `--text-md`, `--color-steel`. Explains mechanism, not aspiration.
- **CTA:** One primary button only. Oxblood. Right of or below subheadline.
- **Supporting artifact:** To the right (desktop) or below (mobile): a dashboard fragment or routing diagram. Never a hero image.
- **No background textures, no particle effects, no animated gradient.** Static and deliberate.

### 11.2 Section Order (Homepage)
1. **Hero** — Headline + mechanism + CTA + dashboard artifact
2. **Trust Strip** — Logos or sector labels (no testimonials yet). Thin horizontal band.
3. **Problem Statement** — The gap in predictable pipeline. 2–3 crisp sentences, full-width editorial.
4. **System Overview** — How the infrastructure works. 3–4 process cards with copper connectors.
5. **Proof Block** — Stat cards + evidence cards. Alternating layout. Numbers first.
6. **Sector Fit** — Who this is engineered for. Clean grid of operator archetypes.
7. **Phase Audit CTA** — Dedicated section for primary conversion. Oxblood section anchor. One CTA.
8. **Footer** — Minimal. Nav links, legal, brand mark.

### 11.3 Section Rules
- Every section starts with an uppercase eyebrow label
- Every section has a 2-line max headline in `--font-display`
- Alternate section backgrounds between `--color-canvas` and `--color-canvas-soft`
- No full-bleed photography anywhere on the homepage
- The Phase Audit CTA section may use `--color-charcoal` as background (inverted section) with ivory text

---

## 12. Copy Rules

### 12.1 Voice & Tone
- **Infrastructure-first:** Write about systems, not feelings. Mechanism before aspiration.
- **Objective:** Remove all superlatives unless quantified. "Best" is forbidden unless cited.
- **Scan-first:** Every block of copy must survive being read as headline → subheadline → list items only.
- **Precision:** Prefer specific over general. "Qualified opportunities" over "leads." "Stage velocity" over "speed." "Close rate" over "results."

### 12.2 Headline Formulas
```
[Measurable Outcome] + [System That Produces It]
→ "Predictable Pipeline. Engineered, Not Guessed."

[Problem Named Precisely] + [Structural Resolution]
→ "Unforecasted Revenue Starts With Unstructured Pipeline."

[What Changes] + [How It Changes]
→ "From Reactive Outreach to Monitored Revenue Infrastructure."
```

### 12.3 Forbidden Copy Patterns
- `We help businesses grow` — vague, every agency says this
- `Unlock your potential` — aspirational fluff
- `Game-changing`, `revolutionary`, `innovative` — empty modifiers
- `Let's build something together` — agency vibe
- `Solutions` as a standalone noun — corporate vacancy
- Em dashes used decoratively — use only for syntactic function
- Exclamation marks anywhere on the site

### 12.4 Scan-Friendly Formatting
- **Short paragraphs:** Maximum 3 sentences per body paragraph
- **Lists:** Use when enumerating 3+ items. Never use bullet points for single items.
- **Bold within body:** Use sparingly — highlight the key term in a sentence, not entire sentences
- **No orphaned line widths:** Set `max-width: 65ch` on all body copy blocks

---

## 13. Technical Build Rules

### 13.1 Stack
- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS + CSS Modules (per-component styles). All global tokens in `globals.css` under `:root`
- **Fonts:** Google Fonts via `next/font/google` — no external font CDN
- **Icons:** Lucide React
- **No Tailwind.** No styled-components. No Emotion.
- **No UI component libraries** (no shadcn, no MUI, no Radix primitives for visual components — logic utilities like `@radix-ui/react-dialog` for accessibility are acceptable)

### 13.2 File Structure (enforced)

```
/app
  layout.tsx          ← font loading, global meta
  page.tsx            ← homepage assembly
  /[section]          ← route pages if needed

/components
  /ui                 ← base atoms: Button, Badge, Rule, Eyebrow
  /sections           ← full page sections: Hero, ProofBlock, SystemOverview
  /artifacts          ← DashboardFragment, SystemMap, RoutingDiagram

/styles
  globals.css         ← :root tokens, reset, base typography
  /modules            ← [ComponentName].module.css per component

/public
  /icons              ← SVG icons, thin-stroke only
  /diagrams           ← exported system maps, routing diagrams
```

### 13.3 CSS Rules
- All color, spacing, and font references must use CSS variables — no hardcoded hex values in component CSS
- No `!important` anywhere
- Responsive breakpoints:
  ```css
  /* Mobile first */
  /* Tablet */  @media (min-width: 768px)  { }
  /* Desktop */ @media (min-width: 1024px) { }
  /* Wide */    @media (min-width: 1280px) { }
  ```
- Transitions: `200ms ease` standard. `300ms ease` for panel reveals. Never `500ms+` unless scroll-triggered.

### 13.4 Animation Rules
- **Allowed:** Mint pulse (2s loop, opacity), copper border hover transitions, card border-color transitions, subtle fade-in on scroll entry (`opacity: 0 → 1`, `translateY: 8px → 0`, triggered by IntersectionObserver)
- **Forbidden:** Parallax, auto-playing looping video, entrance animations that subtract from content legibility, any animation that delays content display beyond 300ms

### 13.5 Performance Rules
- No image hero (eliminates LCP risk)
- Diagrams and system maps as inline SVG wherever possible
- Dashboard fragments as carefully crafted HTML/CSS — not images
- `next/image` for any raster images used in proof sections
- Target Lighthouse score: 90+ Performance, 100 Accessibility, 100 Best Practices

### 13.6 Semantic HTML Rules
- One `<h1>` per page — always the hero headline
- Section landmarks: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Interactive elements must have accessible labels (`aria-label` on icon-only buttons)
- Data points in stat cards: use `<dl>`, `<dt>`, `<dd>` structure

---

## Appendix: Design Anti-Pattern Reference

Use this as a checklist before shipping any new component or page section.

| Anti-Pattern                          | Replacement                                               |
|---------------------------------------|-----------------------------------------------------------|
| Stock photo hero                      | Dashboard fragment or routing diagram artifact            |
| Gradient background section           | Flat `--color-canvas-soft` or charcoal inverted section   |
| Generic icon grid (features section)  | Process cards with copper step connectors                 |
| Star rating testimonials              | Metric-anchored outcome cards                             |
| Blue primary CTA button               | Oxblood CTA only                                          |
| Rounded pill buttons                  | `border-radius: 2px` rectangular CTAs                     |
| "Let's talk" CTA                      | `Audit My Pipeline` or `Map the System`                   |
| Animated gradient text                | Flat charcoal or oxblood heading weight                   |
| Card drop shadows                     | Single-pixel `--color-rule` border                        |
| Mint used decoratively                | Mint only for live status indicators                      |
| Full-bleed photography                | System maps, diagrams, dashboard fragments                |
| Vague social proof ("great team!")    | Sector + metric + timeframe proof cards                   |
| Sans-serif headline only              | `--font-display` (Playfair Display) for H1/H2             |

---

*Last updated: 2026-04-07*  
*Owner: Predictable Pipeline Systems — Design System*  
*Maintain this file alongside the codebase. When a design decision is made that is not covered here, add it here before implementing it.*

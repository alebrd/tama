# TAMA — Design Standards

> This document is the single source of truth for the visual language of the TAMA website.
> Every developer and designer working on this project must follow these standards.

---

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#000000` | Page background (pure black) |
| `--foreground` | `#ffffff` | Primary text, buttons |
| `--color-dark-grey` | `#121212` | Footer background |
| `--color-mid-grey` | `#242424` | Dividers, subtle backgrounds |
| `--color-light-grey` | `#e0e0e0` | Secondary text, subtitles, body copy |
| Card surface | `#0a0a0a` | Cards and elevated surfaces |
| `--glass-bg` | `rgba(255, 255, 255, 0.03)` | Glass utility background |
| `--glass-border` | `rgba(255, 255, 255, 0.08)` | Glass borders, dividers |
| Card border | `rgba(255, 255, 255, 0.08)` | Borders on cards and surface elements |
| Hover glow | `rgba(255, 255, 255, 0.2)` | Button hover glow |

> **IMPORTANT:** TAMA's background is **pure black `#000000`**, not a dark grey.
> Always use explicit `#0a0a0a` backgrounds on cards — never rely on transparent glass over black.

---

## 2. Typography

### Fonts
| Font | Variable | Usage |
|---|---|---|
| **Outfit** (Google Fonts) | `--font-outfit` | All body copy, UI labels, all text |

### Heading Base (h1–h6)
```
text-transform: uppercase
letter-spacing: 2px
font-weight: 700
```

### Type Scale
| Role | Size | Notes |
|---|---|---|
| Hero title | `clamp(2.5rem, 8vw, 5rem)` | line-height `0.9` |
| Section title | `clamp(2rem, 5vw, 3rem)` | |
| Page subtitle (eyebrow) | `0.75rem` | uppercase, letter-spacing `2px`, opacity `0.6` |
| Page sub-description | `0.9rem` | uppercase, letter-spacing `3px`, opacity `0.7` |
| Card title | `1rem` | uppercase, letter-spacing `2px` |
| Card body | `0.9375rem` | `var(--color-light-grey)`, line-height `1.8` |
| Nav links (desktop) | `0.8rem` | uppercase, letter-spacing `1.5px`, font-weight `600` |
| Mobile nav links | `1.4rem` | uppercase, letter-spacing `3px`, font-weight `700` |
| Footer headings | `0.75rem` | uppercase, letter-spacing `2px`, opacity `0.5` |
| Footer links | `0.875rem` | `var(--color-light-grey)` |
| Language button | `0.7rem` | uppercase, letter-spacing `2px` |

---

## 3. Border Radius

| Context | Value |
|---|---|
| All cards | `4px` |
| Buttons | `4px` |
| `.glass` utility | `4px` |
| Modals (Gallery, Map) | `4px` |
| Circular elements | `50%` |

> **Standard is `4px` everywhere.** Do not use 8px, 12px, or 16px.

---

## 4. Spacing & Layout

### Container
```
max-width:  1200px
margin:     0 auto
padding:    0 2rem
```

### Page Top Padding (accounts for fixed 64px navbar)
| Breakpoint | Value |
|---|---|
| Desktop | `calc(3rem + 64px)` |
| Mobile (≤ 768px) | `calc(2rem + 64px)` |

### Navbar
| Property | Value |
|---|---|
| Height | `64px` |
| Background | `rgba(0, 0, 0, 0.75)` + `backdrop-filter: blur(12px)` |
| Scrolled background | `rgba(0, 0, 0, 0.85)` |
| Border bottom | `1px solid var(--glass-border)` |
| Nav link gap | `2rem` |

### Footer
| Property | Value |
|---|---|
| Background | `#121212` |
| Top border | `1px solid var(--glass-border)` |
| Desktop grid | `1.5fr 1fr 1fr 1fr` |
| Tablet (≤ 900px) | `1fr 1fr` |
| Mobile (≤ 560px) | full-width brand + `1fr 1fr 1fr` |
| Padding top | `4rem` desktop / `1.5rem` mobile |

### Card Grid
| Breakpoint | Columns | Gap |
|---|---|---|
| Desktop | `repeat(2, 1fr)` | `1.5rem` |
| Mobile | `1fr` | `1.5rem` |

---

## 5. Components

### Primary Button (`.btn`)
```
background:     #ffffff
color:          #000000
border:         1px solid #ffffff
border-radius:  4px
padding:        0.75rem 1.5rem
font-weight:    600
text-transform: uppercase
letter-spacing: 1px
transition:     all 0.3s ease
```
Hover: `background: transparent`, `color: #ffffff`, glow `rgba(255,255,255,0.2)`

### Outline Button (`.btn-outline`)
```
background:  transparent
color:       #ffffff
```
Hover: fills white, text turns black.

### Cards
```
background:    #0a0a0a
border:        1px solid rgba(255, 255, 255, 0.08)
border-radius: 4px
padding:       2.5rem
gap:           1.25rem
transition:    transform 0.3s ease, border-color 0.3s ease
```
Hover: `transform: translateY(-4px)`

### Glass Utility (`.glass`)
```
background:        rgba(255, 255, 255, 0.03)
backdrop-filter:   blur(12px)
border:            1px solid rgba(255, 255, 255, 0.08)
border-radius:     4px
```

---

## 6. Transitions & Animation

| Context | Value |
|---|---|
| Default link | `opacity 0.2s ease` |
| Button | `all 0.3s ease` |
| Card hover | `transform 0.3s ease, border-color 0.3s ease` |
| Image hover | `filter 0.4s ease, transform 0.4s ease` |
| Modal entrance | `cubic-bezier(0.16, 1, 0.3, 1) 0.4s` |
| Card lift | `translateY(-4px)` |

### Noise Overlay
A global SVG noise texture is rendered via `.noise-overlay` at `opacity: 0.03` (fixed, pointer-events none). Do not remove.

---

## 7. Responsive Breakpoints

| Name | Breakpoint | Key changes |
|---|---|---|
| Mobile | `≤ 768px` | 1-col layouts, hamburger nav, reduced padding |
| Tablet | `≤ 900px` | 2-col footer, stacked space rows |
| Desktop | `> 900px` | Full grids, side-by-side layouts, desktop nav |

---

## 8. Navigation Structure

**Header (PL):** TAMA · Przestrzenie · Wynajem · Kontakt

**Header (EN):** TAMA · Spaces · Venue · Contact

**Footer only (both langs):** Merch · Świadomość / Awareness · Praca / Jobs

**Routes hidden but alive:** /program · /en/program

**Rule:** Every new page must be added to `plLinks`, `enLinks`, and `pathMap` in `Navbar.tsx`.

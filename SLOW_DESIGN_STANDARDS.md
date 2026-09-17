# SLOW — Design Standards

> This document is the single source of truth for the visual language of the SLOW Club website.
> SLOW inherits the TAMA base globals but overrides them with its own dark red identity.

---

## 1. Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--background` | `#070707` | Page background (near-black, slightly warmer than TAMA) |
| `--foreground` | `#ffffff` | Primary text (inherited from TAMA globals) |
| `--color-slow-dark` | `#070707` | Same as background |
| `--color-slow-purple` | `#7c3aed` | Primary brand accent (aliased to `--color-slow-red`) |
| `--color-slow-purple-glow` | `rgba(124, 58, 237, 0.35)` | Deep ultraviolet glow for shadows and drop-shadows |
| `--color-slow-gradient` | `linear-gradient(135deg, #8b5cf6, #581c87)` | Brand gradient (royal violet → deep midnight purple) |
| `--color-light-grey` | `#e0e0e0` | Secondary text (inherited from TAMA globals) |
| Glass background | `rgba(7, 7, 7, 0.4)` | Glass card background |
| Glass border | `rgba(124, 58, 237, 0.15)` | Subtle purple-tinted glass border |
| Card border (default) | `rgba(124, 58, 237, 0.15)` | SLOW card borders |
| Card border (hover) | `rgba(124, 58, 237, 0.45)` | SLOW card borders on hover |
| Banner border | `rgba(124, 58, 237, 0.2)` | Event flyer/banner border |

> **IMPORTANT:** SLOW's background is `#070707` (not pure `#000000` like TAMA).
> The key chromatic identity is the **deep ultraviolet purple accent** `#7c3aed` matching the official SLOW neon sign and the ambient club lighting. All typography font colors remain unified with TAMA's pure white `#ffffff` and light-grey scale.

---

## 2. Typography

### Fonts
| Font | Variable | Usage |
|---|---|---|
| **Outfit** (Google Fonts) | `--font-outfit` | All body copy, UI elements, navigation |
| **Virtuose** (Local, Bold OTF) | `--font-virtuose` | Brand display titles (`.text-gradient-slow`) |

> **Virtuose** is a local font loaded from `public/fonts/virtuose-bold.otf`. It is exclusive to SLOW and must NOT be used in TAMA.

### SLOW Display Title (`.text-gradient-slow`)
```
font-family:    var(--font-virtuose)
letter-spacing: 4px
font-weight:    900
color:          var(--foreground, #ffffff)   /* Unified with TAMA */
```

### Heading Base (inherited from TAMA globals)
```
text-transform: uppercase
letter-spacing: 2px
font-weight:    700
```

### Type Scale
| Role | Size | Notes |
|---|---|---|
| Hero title | `clamp(3rem, 10vw, 6rem)` | line-height `0.9` |
| Section / card title | `1.25rem` | uppercase, letter-spacing `2px`, font-weight `700` |
| Eyebrow label | `0.75rem` | uppercase, letter-spacing `2px`, `var(--color-light-grey)`, opacity `0.6` |
| Body / subtitle | `0.9375rem` | `var(--color-light-grey)`, line-height `1.6`, opacity `0.7` |
| Email / social links | `1.125rem` | font-weight `600`, `var(--foreground)`, hover glow |
| Nav links (desktop) | `0.8rem` | uppercase, letter-spacing `1.5px`, font-weight `600` (unified with TAMA) |
| Mobile nav links | `1.4rem` | uppercase, letter-spacing `3px`, font-weight `700` (unified with TAMA) |
| Mobile sub-links | `1.05rem` | uppercase, letter-spacing `2.5px`, font-weight `600` (unified with TAMA) |

---

## 3. Border Radius

| Context | Value |
|---|---|
| All cards | `4px` |
| Buttons | `4px` |
| `.glass-slow` utility | `4px` |
| Event flyer / banner | `4px` |
| Modals | `4px` |
| Circular elements | `50%` |

> **Standard is `4px` everywhere** — same as TAMA. Consistency is required across both sub-brands.

---

## 4. Spacing & Layout

### Container
Inherits from TAMA globals:
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

### Header / Hero Bottom Spacing
| Breakpoint | Value |
|---|---|
| Desktop | `3rem` – `3.5rem` |
| Mobile (≤ 768px) | `2rem` (32px) |

> **Rule:** Never combine `padding-bottom` on `.hero` with `margin-bottom` on mobile. The gap between the header/hero text and the first section or card must remain exactly `2rem` on mobile.

### Navbar
| Property | Value |
|---|---|
| Height | `64px` |
| Logos | Both TAMA and SLOW logos present across all pages (`.logoGroup`, `gap: 0.5rem`, height `50px`) matching landing page |
| Nav link gap | `2rem` |
| Layout | Right-aligned nav links (matching TAMA), `margin-left: auto`, container `gap: 2.5rem` |

### Hero Section
| Property | Value |
|---|---|
| Min height | `100vh` |
| Content alignment | `center / center` |
| Padding top | `80px` (accounts for navbar) |

### Banner / Flyer
```
aspect-ratio:  21 / 9
border-radius: 4px
border:        1px solid rgba(255, 26, 26, 0.2)
box-shadow:    0 10px 30px rgba(0, 0, 0, 0.5)
```
Hover: `border-color: rgba(168, 85, 247, 0.5)`, `transform: translateY(-4px)`

---

## 5. Components

### SLOW Button (`.btn-slow`)
```
background:     transparent
color:          var(--color-slow-purple)
border:         1px solid rgba(124, 58, 237, 0.35)
border-radius:  4px
padding:        0.85rem 2rem
font-size:      0.8rem
font-weight:    700
text-transform: uppercase
letter-spacing: 2px
box-shadow:     0 0 8px rgba(124, 58, 237, 0.2)
transition:     all 0.3s ease
```
Hover: fills white `#ffffff`, text turns black, glow `rgba(124, 58, 237, 0.5)`, lifts `translateY(-2px)`

### Cards
```
background:    rgba(7, 7, 7, 0.6)
border:        1px solid rgba(124, 58, 237, 0.15)
border-radius: 4px
padding:       2.5rem
gap:           1rem
```
Hover: `border-color: rgba(124, 58, 237, 0.45)`
> **Rule:** Non-clickable informational containers remain stationary on hover. Hover lifts (`translateY`) apply exclusively to clickable card links and buttons.

### Glass Utility (`.glass-slow`)
```
background:        rgba(7, 7, 7, 0.4)
backdrop-filter:   blur(12px)
border:            1px solid rgba(124, 58, 237, 0.15)
box-shadow:        0 4px 30px rgba(0, 0, 0, 0.1)
border-radius:     4px
```

---

## 6. Effects & Animation

### Hero Logo Pulse Glow
```css
@keyframes pulseGlow {
  0%   { filter: brightness(0.92) saturate(1.02); }
  100% { filter: brightness(1.10) saturate(1.18) contrast(1.04); }
}
animation: pulseGlow 3s infinite alternate ease-in-out;
```

### Background Image Treatment
```
filter:    blur(8px) saturate(1.5) brightness(0.6)
transform: scale(1.1)
```
Overlay gradient: `linear-gradient(to bottom, rgba(7,7,7,0.2) 0%, rgba(7,7,7,1) 100%)`

### Standard Transitions
| Context | Value |
|---|---|
| Button | `all 0.3s ease` |
| Card hover (border) | `border-color 0.3s ease` |
| Clickable card lift | `translateY(-2px)` (buttons) / `translateY(-3px)` (clickable links only) |
| Flyer hover | `translateY(-4px)` |
| Image filter | `filter 0.5s ease, transform 0.5s ease` |
| Email/social link glow | `color 0.2s ease, text-shadow 0.2s ease` |

### Noise Overlay
Global noise texture at `opacity: 0.03` (inherited from TAMA globals). **Do not remove.**

---

## 7. Responsive Breakpoints

| Name | Breakpoint | Key changes |
|---|---|---|
| Mobile | `≤ 768px` | Reduced title size, compact flyer margin, hamburger nav |
| Desktop | `≥ 768px` | 2-column grids, full hero treatment |

---

## 8. Navigation Structure

**Header links (PL):** Home (/) · TAMA (/tama) · SLOW (/slowclub) · Oferta (/slowclub/oferta) · Kontakt (/slowclub/kontakt)

**Header links (EN):** Home (/en) · TAMA (/en/tama) · SLOW (/en/slowclub) · Offer (/en/slowclub/offer) · Contact (/en/slowclub/contact)

**Footer:** Centered cluster layout (Navigation · Visit Us · Social) matching TAMA with full set of SLOW links (SLOW · Oferta / Offer · Kontakt / Contact · TAMA cross-link · Socials · Map Modal) symmetrically balanced in the center of the page. Redundant brand column removed; brand attribution anchored in bottom copyright bar.

**Unified Navbar:** To ensure cross-brand consistency, the navigation menu (desktop links, dropdown menus, hamburger icon, mobile overlay, typographic sub-links, and language switcher) uses the exact same typography, colors, and styling across TAMA and SLOW, using unified monochrome typography (pure white text, glow, and underlines) with zero red color on navigation links.

**Browser Favicon:** Uses the official white SLOW geometric wordmark on a solid black background (`/slow/favicon-32.png` and `/slow/apple-icon.png`), matching the site's brand logo and remaining crisp in both light and dark browser tabs.

---

## 9. Brand Identity Notes

- SLOW's visual identity is built on the tension between **darkness** and **red energy**.
- The red `#c41010` should be used sparingly as an accent — it is the focal point, not the fill.
- The Virtuose typeface is what makes SLOW headings feel visceral and distinct from TAMA's cleaner Outfit-based aesthetic.
- Avoid using white glow effects (that's TAMA's language). SLOW uses **red glow only**.

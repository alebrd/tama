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
| `--color-slow-red` | `#c41010` | Primary brand accent — buttons, highlights, eyebrows, links |
| `--color-slow-red-glow` | `rgba(196, 16, 16, 0.4)` | Red glow for shadows and drop-shadows |
| `--color-slow-gradient` | `linear-gradient(135deg, #e01212, #d45000)` | Brand gradient (red → deep orange) |
| `--color-light-grey` | `#e0e0e0` | Secondary text (inherited from TAMA globals) |
| Glass background | `rgba(7, 7, 7, 0.4)` | Glass card background |
| Glass border | `rgba(224, 18, 18, 0.1)` | Subtle red-tinted glass border |
| Card border (default) | `rgba(255, 26, 26, 0.1)` | SLOW card borders |
| Card border (hover) | `rgba(255, 26, 26, 0.4)` | SLOW card borders on hover |
| Banner border | `rgba(255, 26, 26, 0.2)` | Event flyer/banner border |

> **IMPORTANT:** SLOW's background is `#070707` (not pure `#000000` like TAMA).
> The key chromatic identity is the **red accent** `#c41010` which replaces all white accents from TAMA.

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
color:          var(--color-slow-red)   /* #c41010 */
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
| Eyebrow label | `0.7rem` | uppercase, letter-spacing `4px`, `var(--color-slow-red)` |
| Body / subtitle | `0.9375rem` | `var(--color-light-grey)`, line-height `1.6`, opacity `0.7` |
| Email / social links | `1.125rem` | font-weight `600`, `var(--color-slow-red)` |
| Button label | `0.8rem` | uppercase, letter-spacing `2px`, font-weight `700` |
| Nav links | `0.75rem` | uppercase, letter-spacing `2px` |

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

### Navbar
| Property | Value |
|---|---|
| Height | `64px` |
| Logo height | `50px` |
| Nav link gap | `2rem` |

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
Hover: `border-color: rgba(196,16,16,0.5)`, `transform: translateY(-4px)`

---

## 5. Components

### SLOW Button (`.btn-slow`)
```
background:     transparent
color:          var(--color-slow-red)
border:         1px solid var(--color-slow-red)
border-radius:  4px
padding:        0.85rem 2rem
font-size:      0.8rem
font-weight:    700
text-transform: uppercase
letter-spacing: 2px
box-shadow:     0 0 6px rgba(224, 18, 18, 0.15)
transition:     all 0.3s ease
```
Hover: fills red `#c41010`, text turns white, glow `rgba(224,18,18,0.3)`, lifts `translateY(-2px)`

### Cards
```
background:    rgba(7, 7, 7, 0.6)
border:        1px solid rgba(255, 26, 26, 0.1)
border-radius: 4px
padding:       2.5rem
gap:           1rem
```
Hover: `border-color: rgba(255,26,26,0.4)`, `box-shadow: 0 10px 30px rgba(255,26,26,0.1)`, `translateY(-3px)`

### Glass Utility (`.glass-slow`)
```
background:        rgba(7, 7, 7, 0.4)
backdrop-filter:   blur(12px)
border:            1px solid rgba(224, 18, 18, 0.1)
box-shadow:        0 4px 30px rgba(0, 0, 0, 0.1)
border-radius:     4px
```

---

## 6. Effects & Animation

### Hero Logo Pulse Glow
```css
@keyframes pulseGlow {
  0%   { filter: drop-shadow(0 0 8px rgba(255, 26, 26, 0.6)); }
  100% { filter: drop-shadow(0 0 24px rgba(255, 26, 26, 1))
                 drop-shadow(0 0 50px rgba(255, 26, 26, 0.4)); }
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
| Card hover lift | `translateY(-3px)` |
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

**Header links (PL):** SLOW (logo/home) · Program · Kontakt

**Header links (EN):** SLOW (logo/home) · Program · Contact

**Footer:** Full set of SLOW links including socials and TAMA cross-link.

**TAMA cross-link in Navbar:** Rendered as a link with red hover glow:
```css
color: var(--color-light-grey)
hover color: #ff1a1a
hover text-shadow: 0 0 15px rgba(255, 26, 26, 0.5)
```

---

## 9. Brand Identity Notes

- SLOW's visual identity is built on the tension between **darkness** and **red energy**.
- The red `#c41010` should be used sparingly as an accent — it is the focal point, not the fill.
- The Virtuose typeface is what makes SLOW headings feel visceral and distinct from TAMA's cleaner Outfit-based aesthetic.
- Avoid using white glow effects (that's TAMA's language). SLOW uses **red glow only**.

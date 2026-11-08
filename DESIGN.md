---
name: Vestigium
description: Ecological-creative community association, Zagreb. Bilingual EN/HR static site.
colors:
  forest-green: "#2E7D32"
  leaf-green: "#4CAF50"
  deep-forest: "#1B5E20"
  paper-white: "#FFFFFF"
  mist-gray: "#F5F5F5"
  stone-gray: "#b3b3b3"
  charcoal: "#424242"
  ink: "#212121"
  ink-muted: "#595959"
  hairline: "#E0E0E0"
  footer-accent: "#A5D6A7"
  hero-panel: "#fefdfdbb"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Figtree, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  body-lead:
    fontFamily: "Figtree, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Figtree, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "1rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "6rem"
  5xl: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.5rem"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.deep-forest}"
    textColor: "{colors.paper-white}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest-green}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1.5rem"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.paper-white}"
  button-on-green:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.forest-green}"
    rounded: "{rounded.md}"
  service-card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "3rem"
  hero-panel:
    backgroundColor: "{colors.hero-panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
  cta-band:
    backgroundColor: "{colors.forest-green}"
    textColor: "{colors.paper-white}"
    padding: "6rem 0"
  footer:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper-white}"
---

# Design System: Vestigium

> Status: documented from the incumbent code (`src/assets/css/main.css`, `navigation-advanced.css`) on 2026-11-08. The qualitative language below (North Star, philosophy) is **provisional**: the owner skipped the naming round, so it describes what the code does today and should be confirmed before it drives new work.

## Overview

**Creative North Star: "The Neighbourhood Garden" (provisional)**

A single, confident forest green growing over clean white and pale-gray ground. The look is plain and approachable rather than designed-to-impress: system fonts, generous vertical padding, centred section headings, and real photography of the association's own space (the hero is the storefront with its hand-painted mural). Personality comes from the real place and people, not from ornament.

Sections alternate white (`services`) and mist-gray (`about`) bands, closing on a solid green call-to-action band and a charcoal footer. Density is low; each section breathes with 96px vertical padding.

**Key Characteristics:**
- One accent colour family (greens) on neutral ground.
- Fraunces + Figtree, self-hosted (~100 KB total): warm titles, legible text.
- Real photos of the community space carry the identity.
- Mobile-first, centred content, 1200px max container.
- Every string bilingual (EN/HR) through `data-i18n`.

## Colors

A one-family palette: forest greens for identity and action, warm-free neutrals for everything else.

### Primary
- **Forest Green** (#2E7D32): headings (section titles, hero title), primary buttons, CTA band, icon strokes, card hover border. Also the PWA `theme_color`.
- **Deep Forest** (#1B5E20): hover/focus state of primary buttons.
- **Leaf Green** (#4CAF50): lighter accent; use sparingly, never for text on white (fails contrast).

### Neutral
- **Paper White** (#FFFFFF): page ground, cards, text on green.
- **Mist Gray** (#F5F5F5): alternating section bands (`.about`).
- **Hairline** (#E0E0E0): card and header borders.
- **Stone Gray** (#b3b3b3): decorative only; not a text colour.
- **Ink** (#212121): body text and card titles.
- **Ink Muted** (#595959): secondary text and card descriptions.
- **Charcoal** (#424242): footer ground.
- **Footer Accent** (#A5D6A7): green text on Charcoal (footer headings, awards); 6.1:1. Use instead of Leaf Green on dark grounds.
- **Hero Panel** (#fefdfdbb): translucent white panel over the hero photo.

### Named Rules
**The One Family Rule.** Greens are the only hue. A new colour needs a reason in PRODUCT.md, not taste.
**The Green Is Earned Rule.** Forest Green marks titles and actions; body copy stays Ink.

## Typography

**Display Font:** Fraunces (variable, self-hosted; fallback Georgia, serif)
**Body Font:** Figtree (variable, self-hosted; fallback system sans)
**Mono:** `'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace` (debug/technical only)

**Character:** a soft, slightly crafted serif for titles, the wordmark and date numerals, paired with a clear, friendly sans for everything people read. Warm and handmade without losing legibility. Both cover Latin Extended (č ć š ž đ); files and OFL licence in `src/assets/fonts/`.

### Hierarchy
- **Display** (Fraunces 600, 2.25rem, 1.25): hero title and `h1`, Forest Green.
- **Headline** (Fraunces 600, 1.875rem, 1.25): section titles (`h2`), Forest Green, centred in `services`, left-aligned in `about`.
- **Title** (Fraunces 600, 1.25rem): card titles (`h3`), Ink.
- **Body lead** (400, 1.125rem, 1.75): hero subtitle, CTA text; max ~600px wide.
- **Body** (400, 1rem, 1.5): running text; card descriptions use 1.75 line-height in Ink Muted.
- **Label** (500, 0.875rem): navigation and small UI text.

Scale tokens available: 0.75 / 0.875 / 1 / 1.125 / 1.25 / 1.5 / 1.875 / 2.25 / 3 rem.

## Layout

- Mobile-first; breakpoints 640 / 768 / 1024 / 1280 / 1536 px. Container max 1200px with 16px side padding (24px from the `md` breakpoint).
- Large screens: the root size (14px base) rises to 16px at 1440px, 18px at 1920px and 22px at 2560px, and the container widens to 90vw from 1440px. Size components in rem so they scale with it.
- The hero photo is a single centred image (`background-size: cover`), never tiled.
- Sections after the hero alternate white / Mist Gray by position (`.main > section:nth-of-type`), so a new section inherits the rhythm automatically.
- Spacing scale on a 4px base: 4, 8, 16, 24, 32, 48, 64, 96, 128 px. Sections use 96px vertical padding.
- Services use a responsive card grid; about sections pair text with a photo carousel.
- Sticky white header (z-index 100) with logo left, primary links + hamburger + language switcher right.

## Elevation & Depth

Flat at rest, lifted on interaction. Cards and buttons sit flat with hairline borders; hover lifts them (`translateY(-1px…-4px)`) and adds a shadow. Depth between sections comes from tonal banding (white / mist / green / charcoal), not shadows.

### Shadow Vocabulary
- **sm** (`0 1px 2px 0 rgba(0,0,0,0.05)`): subtle separation.
- **md** (`0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)`): button hover.
- **lg** (`0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`): card hover.

**The Flat-By-Default Rule.** Shadows appear only as a response to hover or focus.

## Shapes

Soft but not rounded-pill: 4 / 6 / 8 / 16 px radii. Buttons 6px, cards 8px, the hero text panel 16px. Borders are 1px Hairline (cards, header) or 2px (buttons).

## Components

- **Logo**: footprint with a leaf (`src/assets/images/logo/logo-mark.png`, trimmed; `logo-png.png` square master). Foot in Deep Forest `#1B5E20`, leaf in Leaf Green `#4CAF50`. In the header it sits left of the Fraunces wordmark at 1.5em, the pair being one link to the homepage. Favicons are generated from the same mark.
- **Get involved** (`.involve`): one section with two groups divided by a hairline, "Here in the neighbourhood" and "From abroad: European programmes" (with the Erasmus+ logo). Each group has a title column and cards with title (Fraunces), a green "who it's for" line, description and a "Write to us" mailto link.
- **Buttons** (`.button`, `--primary`, `--secondary`): 44px min height for touch, 2px border, medium weight. Primary is solid Forest Green → Deep Forest on hover; secondary is a green outline that fills on hover. On the green CTA band the primary inverts to white with green text. Transition 0.3s ease-in-out.
- **Service card** (`.service-card`): white, hairline border, 8px radius, 48px padding, centred; 64px green SVG icon from an inline sprite (`<use href="#icon-…">`), Ink title, Ink Muted description. Hover lifts 4px, shadow-lg, green border.
- **Hero** (`.hero`): full-width storefront photo with a translucent white panel (`#fefdfdbb`, 16px radius) holding the green display title and lead text. Below the lead text, `.hero__next` names the recurring next activity (EKO PLAC, Saturday 9–11, Rudeška 142) and `.hero__actions` holds a primary "See what's on" (→ calendar) and a secondary "Get involved".
- **Event card** (`.event-card`, Coming up section): Forest Green date tile (day + short month; Deep Forest for Brezovica), weekday and time in green, title in Ink, place in Ink Muted; 16px radius, hairline border, no shadow.
- **Calendar**: one full-width Google Calendar embed combining both calendars (Vrbani `#0B8043`, Brezovica `#33B679`, matched by the legend dots); month view 16:9 from 768px, agenda view below.
- **Gallery page**: story cards (4:3 photo, title, green meta line, text, "See photos" link that filters), pill filter chips (selected = Forest Green), masonry photo grid (2–5 columns, 8px radius) and a dark `<dialog>` lightbox with keyboard and swipe navigation.
- **CTA band** (`.cta`): solid Forest Green, white title and lead text, inverted primary button.
- **Navigation**: sticky header, multi-level dropdowns on desktop, hamburger drawer on mobile, flag + language dropdown.
- **Carousel** (`.about__carousel`): auto-advancing photo slider (4s) with prev/next, dots, keyboard arrows, pause on hover.
- **Footer**: compact Charcoal band. Four columns from 1024px (contact, links, get involved, recognition with the Erasmus+ logo on a white plate), one bottom row with copyright, tagline and visitor counter.
- **Icons**: inline SVG sprite for activity icons; add new ones as Lucide SVGs with `tools/add-icon.sh <name>` into `src/assets/icons/`, coloured with `currentColor`.

## Do's and Don'ts

**Do**
- Use the CSS custom properties in `main.css`; add a token before adding a raw value.
- Keep text on white at Ink or Ink Muted; Forest Green for titles and actions only.
- Show real photos of Vestigium's space and activities.
- Add every new string in both `en` and `hr`.
- Keep touch targets at least 44px.

**Don't**
- Don't use Leaf Green or Stone Gray for text on white (insufficient contrast).
- Don't introduce a second hue or another typeface without updating this file.
- Don't add hard-coded colours; promote them to tokens in `main.css` and here.
- Don't add shadows to elements at rest.

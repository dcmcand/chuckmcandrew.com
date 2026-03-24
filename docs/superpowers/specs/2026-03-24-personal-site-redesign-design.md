# Personal Site Redesign - Design Spec

## Overview

Complete rebuild of chuckmcandrew.com as a retro-modern personal website and blog for Chuck McAndrew, Director of Infrastructure Engineering at OpenTeams. Replaces the current Hugo + Adritian theme setup with a custom-built Astro site.

## Goals

- Professional home base with equal weight on blog and personal presence
- Retro-modern aesthetic: dark theme with terminal accents, modern layout and typography
- Accessible (WCAG AAA contrast compliance)
- Blog-ready with markdown authoring, tags, RSS
- Deployable to GitHub Pages
- Future-ready for: Projects page, Talks page, Spanish localization

## Tech Stack

- **Framework:** Astro (static site generation)
- **Styling:** Tailwind CSS + DaisyUI
- **Fonts:** Fira Code (monospace - headings, nav, code), Inter (sans-serif - body text)
- **Deployment:** GitHub Pages
- **Content:** Markdown with Astro content collections

## Color Palette

All combinations pass WCAG AAA.

| Token | Hex | Usage |
|-------|-----|-------|
| base | `#0f0f1a` | Page background |
| surface | `#1c1c30` | Cards, code blocks, nav |
| surface-border | `rgba(255, 255, 255, 0.06)` | Card borders, dividers |
| accent | `#fbbf24` | Links, buttons, highlights, headings (monospace) |
| accent-dim | `rgba(251, 191, 36, 0.12)` | Tag backgrounds, subtle accent areas |
| text | `#f0f0f5` | Primary body text |
| text-secondary | `#b8b8cc` | Meta text, dates, descriptions |

### WCAG Contrast Ratios

- text on base: 16.7:1 (AAA)
- text on surface: 14.2:1 (AAA)
- secondary on base: 9.5:1 (AAA)
- secondary on surface: 8.1:1 (AAA)
- accent on base: 9.8:1 (AAA)
- accent on surface: 8.4:1 (AAA)
- base on accent (buttons): 9.8:1 (AAA)

## DaisyUI Theme

Define a custom DaisyUI theme called `"retro-terminal"` that maps the palette above to DaisyUI's semantic color tokens (primary, base-100, base-200, etc.). All DaisyUI components inherit the theme automatically.

## Logo

SVG monogram: "CM" in Fira Code bold, inside a terminal window frame (rounded rect with subtle amber border). Includes a blinking cursor animation at full size.

- Full size: used in about page, og:image
- Nav size: 40x28px terminal frame with CM
- Favicon: 32x32px simplified version (no frame detail, just CM on dark background with rounded corners)

## Navigation

- Left: CM terminal window logo
- Right: monospace links - `home`, `about`, `blog`, `experience`, `contact`
- Text wordmark `chuckMcAndrew` used alongside logo on wider viewports (camelCase, like a variable name)
- Mobile: hamburger menu (DaisyUI dropdown)
- Active page highlighted in accent color

## Pages

### Homepage

1. **Hero section**
   - Decorative prompt: `$ whoami`
   - Name: "Chuck McAndrew" (sans-serif, large)
   - Title: "Director of Infrastructure Engineering"
   - Short bio (1-2 sentences)
   - Two CTAs: "read the blog" (filled amber button), "about me" (outlined amber button)

2. **Recent blog posts** (3 most recent)
   - Section heading: `~/blog - recent posts` (monospace)
   - Cards with: date, read time, title, excerpt, tags
   - Cards have surface background, subtle border, amber hover state

3. **Experience preview** (latest 3 jobs)
   - Section heading: `~/experience` (monospace)
   - Timeline with amber dot markers, left border
   - Each entry: date, title, company

4. **Section dividers:** box-drawing characters in dim amber (`════════`)

5. **Footer:** copyright, links to GitHub/LinkedIn/email/RSS

### About

- Long-form prose page telling Chuck's career story (Marine, librarian, infra engineer arc)
- No skills bars or percentage charts
- Links to GitHub, LinkedIn at bottom

### Blog

**List page:**
- Post cards: title, date, excerpt, tags, read time
- Tag filtering
- Sorted by date descending

**Post page:**
- File-path breadcrumb: `~/blog / post-slug`
- Title, date, read time, tags
- Body: prose in Inter at 16px/1.8 line-height, max-width 680px
- Headings (h2): monospace, amber, with subtle bottom border
- Headings (h3): sans-serif, white
- Links: amber with subtle underline, full underline on hover
- Blockquotes: left amber border, surface background, italic
- Inline code: monospace, amber text, surface background
- Code blocks: surface background with border, filename label, syntax highlighting (anchor colors: purple keywords, green strings, blue functions, amber numbers - implementer extends to full token set using these as the palette basis)
- Author bio card at bottom with CM avatar, name, short description
- Previous/next post navigation cards

**RSS feed:** auto-generated from blog posts

### Experience

- Full career timeline (all positions)
- Same timeline visual as homepage but expanded
- Each entry: dates, title, company, tech stack, brief description
- Education section at bottom

### Contact

- Simple page with email, GitHub, LinkedIn links
- No contact form

## Content Architecture

```
src/
  content/
    blog/           # Markdown posts with frontmatter
    experience/     # Career entries as markdown with structured frontmatter (Astro content collection)
  pages/
    index.astro     # Homepage
    about.astro     # About page
    blog/
      index.astro   # Blog list
      [slug].astro  # Blog post template
    experience.astro
    contact.astro
  components/
    Nav.astro
    Footer.astro
    BlogCard.astro
    ExperienceEntry.astro
    Logo.astro      # SVG logo component
  layouts/
    Base.astro      # HTML shell, meta tags, fonts
    Post.astro      # Blog post layout
  styles/
    global.css      # Tailwind imports, DaisyUI theme definition, custom utilities
```

### Blog Post Frontmatter Schema

```yaml
title: string        # Post title
date: date           # Publication date
description: string  # Excerpt / meta description
tags: string[]       # List of tags
draft: boolean       # Exclude from production build
```

### Experience Entry Schema

```yaml
title: string        # Job title
company: string      # Company name
location: string     # Location
startDate: string    # Start date
endDate: string      # End date or "Present"
tech: string[]       # Technologies used
description: string  # Brief description
```

## Terminal Accent Details

These small touches create the retro-modern feel without making it gimmicky:

- `$ whoami` prompt above hero name
- `~/blog`, `~/experience` as section headings (like directory paths)
- File-path breadcrumbs on blog posts
- Box-drawing character dividers (`════════`) in dim amber
- Monospace font for nav, headings, tags, code, meta text
- Blinking cursor in the full-size logo only
- camelCase wordmark: `chuckMcAndrew`

Body text, paragraphs, and long-form content stay in Inter sans-serif for readability. The terminal flavor is decorative, not structural.

## Accessibility

- All color combinations meet WCAG AAA contrast ratios
- Semantic HTML: proper heading hierarchy, nav landmarks, article elements
- Keyboard navigable: skip links, focus-visible styles, tab order
- Images: alt text on all images (when added)
- Reduced motion: respect prefers-reduced-motion (disable blinking cursor, transitions)
- Screen reader friendly: ARIA labels where semantic HTML isn't sufficient

## Deployment

- GitHub Pages via GitHub Actions (trigger on push to main)
- Astro static output mode (`output: 'static'`)
- Build: `npm run build` produces `dist/` directory
- Custom domain: chuckmcandrew.com (CNAME configuration)
- og:image: static fallback image using the CM logo on dark background (per-post generated images are out of scope for v1)

## Out of Scope (for now)

- Spanish localization (English-only, but no decisions that block adding it)
- Projects page
- Talks/speaking page
- Migration of old blog posts (clean slate)
- Light theme (dark only for now)
- Analytics
- Comments system
- Search

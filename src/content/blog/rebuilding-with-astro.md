---
title: "Rebuilding My Site with Astro, Tailwind, and DaisyUI"
date: 2026-03-24
description: "Why I ditched Hugo after years and rebuilt my personal site from scratch with Astro, Tailwind CSS v4, and DaisyUI v5."
tags: ["astro", "tailwind", "webdev"]
draft: false
---

My old site ran on Hugo with the Beautiful Hugo theme. It worked fine for years, but I hadn't touched it since 2020 and the theme was starting to show its age. When I finally sat down to update it, I realized I didn't want to update it. I wanted to start over.

## Why not Hugo?

Hugo is great software. It's fast, it's stable, and it has a big theme ecosystem. I used it happily for three years of fairly active blogging. But Hugo's Go templating language always felt like fighting the tool. Every time I wanted to customize something beyond what the theme provided, I'd spend more time reading Hugo docs than actually building.

The other issue was control. Theme-based workflows are convenient until you want something that doesn't fit the theme's opinion. I wanted a specific retro-modern aesthetic for the new site, and bending an existing Hugo theme to match that vision would have been more work than building from scratch.

## Why Astro?

Astro is a static site generator built on the JavaScript ecosystem. If you haven't looked at it, the pitch is simple: it outputs plain HTML by default with zero client-side JavaScript unless you explicitly opt in. That's what a personal blog needs.

What sold me on Astro specifically:

- **Content collections** with typed frontmatter schemas. You define a Zod schema for your blog posts, and Astro validates every markdown file at build time. If I typo a frontmatter field, the build tells me. Hugo has content types too, but the validation isn't as strict.
- **Component-based layouts.** Astro components look like HTML with a script block on top. No framework required. Coming from Hugo's partial template system, this felt immediately more intuitive.
- **Scoped CSS.** Styles in a component only apply to that component. After years of wrestling with global CSS in Hugo themes, this was a relief.

The build is slower than Hugo (nothing is faster than Hugo), but we're talking 1.3 seconds for my six-page site. I can live with that.

## The styling stack: Tailwind CSS v4 + DaisyUI v5

I went with Tailwind CSS v4 and DaisyUI v5. Years ago, I used to watch livestreams of the Tailwind devs redoing sites using Tailwind, and I always wanted to build something with it. This felt like a good opportunity to finally give it a go.

If you haven't used Tailwind v4 yet, it's a big departure from v3. There is no `tailwind.config.js` file anymore. All configuration happens in CSS using `@theme` blocks. The old `@astrojs/tailwind` integration is deprecated, and you use `@tailwindcss/vite` as a Vite plugin instead.

DaisyUI sits on top of Tailwind and gives you pre-built component classes (buttons, cards, navbars, dropdowns) with reasonable accessibility defaults. The key feature for me was its theming system. I defined a custom theme called "retro-terminal" that maps my color palette to DaisyUI's semantic tokens, and every component inherits it automatically.

Here's roughly what the theme definition looks like in `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "retro-terminal";
  default: true;
  --color-base-100: oklch(from #0f0f1a l c h);
  --color-base-200: oklch(from #1c1c30 l c h);
  --color-primary: oklch(from #fbbf24 l c h);
  --color-primary-content: oklch(from #0f0f1a l c h);
  /* ... more color tokens */
}
```

Define your colors once, and DaisyUI's `btn-primary`, `bg-base-200`, and all the other classes just work with your palette. No fighting with CSS overrides.

## The aesthetic

I wanted something that nodded to old-school BBS terminals without being gimmicky about it. The site uses a dark navy background with amber accents, which is a direct reference to amber phosphor monitors. Section headings look like directory paths (`~/blog`, `~/experience`). The hero section has a `$ whoami` prompt. There are box-drawing character dividers between sections.

But the body text is in Inter (a clean sans-serif), the layout is modern and responsive, and blog posts are designed for comfortable reading at 680px max-width. The terminal flavor is decorative. It sets a tone without getting in the way of actually reading things.

I spent real time on accessibility. Every color combination on the site passes WCAG AAA contrast ratios. The amber accent (`#fbbf24`) on the dark navy base (`#0f0f1a`) hits a 9.8:1 contrast ratio, well above the 7:1 AAA threshold. The secondary text color was the trickiest to get right, since muted text on dark backgrounds can easily fall below minimum contrast.

## Content collections in practice

Astro 5 changed how content collections work, and the documentation can be confusing if you're looking at older tutorials. The config file moved from `src/content/config.ts` to `src/content.config.ts` at the project root. Collections now require an explicit `glob()` loader instead of inferring file locations from the directory structure. And `post.slug` was replaced by `post.id`.

Here's my blog collection schema:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

To create a new post, I drop a markdown file in `src/content/blog/` with the right frontmatter and it shows up. No `hugo new` command, no archetype templates. Just a file.

## Deployment

The site deploys to GitHub Pages via a GitHub Actions workflow that triggers on push to main. The workflow installs dependencies, runs `npm run build`, and uploads the `dist/` directory. The whole build-and-deploy cycle takes about a minute.

I chose GitHub Pages because it's free, I've used it before, and it requires zero infrastructure management on my part. For a personal blog, that's exactly the right amount of complexity.

## What I'd do differently

If I were starting again tomorrow, I'd probably spend less time on the DaisyUI theme definition upfront. I went back and forth on color values when I could have picked something close enough and refined it later. The oklch color space that DaisyUI v5 uses is powerful, but it's also another thing to learn when you just want to set some hex colors.

I'd also consider adding a simple search feature from the start. Astro has good support for client-side search with libraries like Pagefind, and it's easier to set up during initial development than to bolt on later.

## The stack in summary

- **Astro 6** for static site generation
- **Tailwind CSS v4** for utility-first styling (configured in CSS, not JS)
- **DaisyUI v5** for accessible component classes and theming
- **Shiki** for syntax highlighting (built into Astro)
- **GitHub Pages** for hosting
- **GitHub Actions** for CI/CD

Total dependencies: five. Total client-side JavaScript: zero (unless you count the DaisyUI dropdown for mobile nav). Build time: 1.3 seconds.

If you're thinking about rebuilding your own site and you're comfortable with HTML and CSS, Astro is worth a serious look. The learning curve is gentle if you've used any static site generator before, and the component model makes it easy to build exactly what you want without fighting someone else's theme.

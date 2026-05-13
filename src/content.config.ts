import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    tech: z.array(z.string()).default([]),
    order: z.number(),
  }),
});

const openSourceWork = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/open-source-work' }),
  schema: z.object({
    name: z.string(),
    shortDescription: z.string(),
    github: z.string().url().optional(),
    site: z.string().url().optional(),
    tech: z.array(z.string()),
    status: z.enum(['production', 'active', 'deprecated']),
    role: z.string(),
    order: z.number(),
  }),
});

export const collections = { blog, experience, openSourceWork };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    keywords: z.array(z.string()).default([]),
    cta: z.enum(['mentoria', 'guia']).default('mentoria'),
  }),
});

export const collections = { blog };

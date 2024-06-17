import { defineCollection, z } from 'astro:content';
const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    author: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    badge: z.string().optional(),
    excerpt: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  blog: articleCollection,
};

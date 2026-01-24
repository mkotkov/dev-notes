import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    category: z.string().optional(),         
    tags: z.array(z.string()).default([]),   
    summary: z.string().optional()
  }),
});

export const collections = {
  posts,
};

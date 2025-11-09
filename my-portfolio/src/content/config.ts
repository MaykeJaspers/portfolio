import { defineCollection, z } from "astro:content";
export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
  }),
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};

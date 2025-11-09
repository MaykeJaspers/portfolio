import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tag: z.string(),              
      image: z.string().optional(), 
    }),
  }),
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
    }),
  }),
};

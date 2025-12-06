import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tag: z.string(),            // visual-design, motion, 3d, etc.
    description: z.string(),
    image: z.string().optional(),
    date: z.date(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    video: z.string().optional(),
    date: z.date(),
  }),
});

const tools = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  projects,
  blog,
  tools,
};


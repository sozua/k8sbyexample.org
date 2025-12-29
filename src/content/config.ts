import { defineCollection, z } from 'astro:content';

const lessonSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

const lessons = defineCollection({
  type: 'content',
  schema: lessonSchema,
});

const lessonsPtBr = defineCollection({
  type: 'content',
  schema: lessonSchema,
});

export const collections = { lessons, 'lessons-pt-br': lessonsPtBr };

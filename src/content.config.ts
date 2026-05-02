import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const episodesSchema = z.array(z.object({
  number: z.number(),
  title: z.string(),
  type: z.enum(['canon', 'relleno', 'mixto']),
  duration: z.string().optional(),
}));

const anime = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/animes",
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    synopsis: z.string(),
    status: z.enum(["finalizado", "en emisión", "cancelado"]),
    coverImage: z.url(),
    trailerUrl: z.url().optional(),
    genres: z.array(z.string()),
    episodesCount: z.number(),
    year: z.number(),
    viewtime: z.object({
      canon: z.string(),
      full: z.string(),
    }),
    episodes: episodesSchema.optional(),
  }),
});

export const collections = { anime };

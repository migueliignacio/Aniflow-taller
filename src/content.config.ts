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
    status: z.enum(["finished", "ongoing"]),
    coverImage: z.url(),
    trailerUrl: z.url().optional(),
    genres: z.array(z.string()),
    episodesTotal: z.number(),
    canonEpisodes: z.number(),
    fillerEpisodes: z.number(),
    mixedEpisodes: z.number(),
    year: z.number(),
    studio: z.string(),
    viewtime: z.object({
      canon: z.string(),
      full: z.string(),
    }),
    episodes: episodesSchema.optional(),
  }).transform((data) => {
    const total = data.episodesTotal;
    
    return {
      ...data,
      
      stats: {
        canonPercent: total > 0 ? Math.round((data.canonEpisodes / total) * 100) : 0,
        fillerPercent: total > 0 ? Math.round((data.fillerEpisodes / total) * 100) : 0,
        mixedPercent: total > 0 ? Math.round((data.mixedEpisodes / total) * 100) : 0,
      }
    };
  }),
});

export const collections = { anime };
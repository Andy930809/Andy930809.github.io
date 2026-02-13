import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			titleZhTw: z.string().optional(),
			titleEn: z.string().optional(),
			description: z.string(),
			descriptionZhTw: z.string().optional(),
			descriptionEn: z.string().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			category: z.string().optional(),
			featured: z.boolean().default(false),
		}),
});

export const collections = { blog };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
			featured: z.boolean().optional(),
			author: z.string().optional(),
			// Affiliate program keys (see src/affiliates.ts) to surface as
			// "Recommended tools" CTA cards at the end of the article.
			affiliates: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };

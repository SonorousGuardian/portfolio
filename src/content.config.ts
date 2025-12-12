import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			icon: z.string().optional(),
		}),
	}),
	certifications: defineCollection({
		schema: z.object({
			title: z.string(),
			issuer: z.string(),
			date: z.string(),
			icon: z.string().optional(),
			// REMOVED .url() so "#" is allowed now
			link: z.string().optional(), 
			badge: z.string().optional(),
		}),
	}),
};
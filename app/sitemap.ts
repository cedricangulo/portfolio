import type { MetadataRoute } from "next";
import { WorkList } from "./works/data/workslist";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://cdrcangulo.vercel.app";

	// Homepage
	const homepage: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
	];

	// Dynamic work pages
	const workPages: MetadataRoute.Sitemap = WorkList.filter(
		(work) => work.slug
	).map((work) => ({
		url: `${baseUrl}/works/${work.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [...homepage, ...workPages];
}

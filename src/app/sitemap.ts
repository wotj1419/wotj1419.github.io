import { MetadataRoute } from 'next';

const domain = 'https://wotj1419.github.io';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: domain,
			lastModified: new Date(),
			changeFrequency: 'always',
			priority: 1,
		},
	];
}

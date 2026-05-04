import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { DEFAULT_LANG, createLocalizedPath } from '../i18n/config';

export async function GET(context) {
	const posts = await getCollection('blog');
	const site = new URL(import.meta.env.BASE_URL, context.site);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: site.toString(),
		items: posts.map((post) => ({
			...post.data,
			link: createLocalizedPath(DEFAULT_LANG, `/blog/${post.id}`),
		})),
	});
}

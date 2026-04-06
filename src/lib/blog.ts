import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { SiteLang } from '../i18n/config';

export type BlogPost = CollectionEntry<'blog'>;

export async function getSortedPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getLocalizedPostTitle(post: BlogPost, lang: SiteLang): string {
	if (lang === 'zh-tw' && post.data.titleZhTw) {
		return post.data.titleZhTw;
	}
	if (lang === 'en' && post.data.titleEn) {
		return post.data.titleEn;
	}
	return post.data.title;
}

export function getLocalizedPostDescription(post: BlogPost, lang: SiteLang): string {
	if (lang === 'zh-tw' && post.data.descriptionZhTw) {
		return post.data.descriptionZhTw;
	}
	if (lang === 'en' && post.data.descriptionEn) {
		return post.data.descriptionEn;
	}
	return post.data.description;
}

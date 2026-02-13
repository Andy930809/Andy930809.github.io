export const SUPPORTED_LANGS = ['zh-cn', 'zh-tw', 'en'] as const;
export type SiteLang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: SiteLang = 'zh-cn';

export const LANG_LABELS: Record<SiteLang, string> = {
	'zh-cn': '简体中文',
	'zh-tw': '繁體中文',
	en: 'English',
};

const DATE_LOCALES: Record<SiteLang, string> = {
	'zh-cn': 'zh-CN',
	'zh-tw': 'zh-TW',
	en: 'en-US',
};

export function isSiteLang(value: string): value is SiteLang {
	return SUPPORTED_LANGS.includes(value as SiteLang);
}

export function createLocalizedPath(lang: SiteLang, path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const trimmed = normalized.replace(/^\/+|\/+$/g, '');
	return trimmed ? `/${lang}/${trimmed}/` : `/${lang}/`;
}

export function switchLanguagePath(pathname: string, targetLang: SiteLang): string {
	const segments = pathname.split('/').filter(Boolean);
	if (segments.length === 0) {
		return `/${targetLang}/`;
	}
	if (isSiteLang(segments[0])) {
		segments[0] = targetLang;
	} else {
		segments.unshift(targetLang);
	}
	return `/${segments.join('/')}/`;
}

export function formatDateByLang(value: Date, lang: SiteLang): string {
	return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(value);
}

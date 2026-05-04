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

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

export function isSiteLang(value: string): value is SiteLang {
	return SUPPORTED_LANGS.includes(value as SiteLang);
}

export function withBasePath(path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return BASE_PATH ? `${BASE_PATH}${normalized}` : normalized;
}

export function createLocalizedPath(lang: SiteLang, path: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	const trimmed = normalized.replace(/^\/+|\/+$/g, '');
	const localizedPath = trimmed ? `/${lang}/${trimmed}/` : `/${lang}/`;
	return withBasePath(localizedPath);
}

export function switchLanguagePath(pathname: string, targetLang: SiteLang): string {
	const localizedPath = BASE_PATH && pathname.startsWith(BASE_PATH)
		? pathname.slice(BASE_PATH.length) || '/'
		: pathname;
	const segments = localizedPath.split('/').filter(Boolean);
	if (segments.length === 0) {
		return createLocalizedPath(targetLang, '/');
	}
	if (isSiteLang(segments[0])) {
		segments[0] = targetLang;
	} else {
		segments.unshift(targetLang);
	}
	return withBasePath(`/${segments.join('/')}/`);
}

export function formatDateByLang(value: Date, lang: SiteLang): string {
	return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(value);
}

import type { SiteLang } from './config';

export interface ProjectItem {
	title: string;
	summary: string;
	stack: string[];
	link: string;
	result: string;
}

export interface SiteContent {
	siteName: string;
	siteDescription: string;
	heroTitle: string;
	heroSubtitle: string;
	heroBody: string;
	nav: {
		home: string;
		projects: string;
		blog: string;
		about: string;
		contact: string;
	};
	sections: {
		projects: string;
		featuredPosts: string;
		about: string;
		contact: string;
	};
	about: {
		title: string;
		intro: string;
		detail: string;
		skillsTitle: string;
		skills: string[];
	};
	blog: {
		title: string;
		intro: string;
		categories: string[];
		empty: string;
		readMore: string;
	};
	projects: ProjectItem[];
}

export const CONTACT_LINKS = {
	email: 'mailto:changkt930809@gmail.com',
	github: 'https://github.com/Andy930809',
	bilibili: 'https://space.bilibili.com/3546663765412010',
};

const PROJECT_LINK = 'https://github.com/Andy930809/DC_Codex_Gateway';

const PROJECTS: Record<SiteLang, ProjectItem[]> = {
	'zh-cn': [
		{
			title: 'Discord Codex Gateway',
			summary: '一个把本地 Codex 会话映射到 Discord 群组里的单机服务，目标很清楚：让机器人真正成为可协作的开发入口。',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'asyncio'],
			link: PROJECT_LINK,
			result: '项目坚持单机优先、协议优先和最小暴露，只做真正需要的桥接能力。',
		},
		{
			title: '群组里的交互方式',
			summary: '通过 `@bot` 聊天、控制面板按钮和审批消息，把会话切换、提权审批和流式回复放进 Discord。',
			stack: ['Streaming Reply', 'Approval Flow', 'Session Control'],
			link: PROJECT_LINK,
			result: '复杂操作尽量留给按钮和弹窗，群消息只保留必要对话。',
		},
		{
			title: '技术边界',
			summary: '项目直接对接官方 `codex app-server`，不做完整 TUI、跨机器控制台或额外 Web Console。',
			stack: ['codex app-server', 'SQLite State', 'Local Runtime'],
			link: PROJECT_LINK,
			result: '边界越清楚，结构越容易长期维护。',
		},
	],
	'zh-tw': [
		{
			title: 'Discord Codex Gateway',
			summary: '一個把本地 Codex 會話映射到 Discord 群組裡的單機服務，目標很清楚：讓機器人成為真正可協作的開發入口。',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'asyncio'],
			link: PROJECT_LINK,
			result: '項目堅持單機優先、協議優先和最小暴露，只做真正需要的橋接能力。',
		},
		{
			title: '群組裡的互動方式',
			summary: '透過 `@bot` 聊天、控制面板按鈕和審批消息，把會話切換、提權審批和流式回覆放進 Discord。',
			stack: ['Streaming Reply', 'Approval Flow', 'Session Control'],
			link: PROJECT_LINK,
			result: '複雜操作盡量留給按鈕和彈窗，群消息只保留必要對話。',
		},
		{
			title: '技術邊界',
			summary: '項目直接對接官方 `codex app-server`，不做完整 TUI、跨機器控制台或額外 Web Console。',
			stack: ['codex app-server', 'SQLite State', 'Local Runtime'],
			link: PROJECT_LINK,
			result: '邊界越清楚，結構越容易長期維護。',
		},
	],
	en: [
		{
			title: 'Discord Codex Gateway',
			summary: 'A single-machine bridge that maps local Codex sessions into Discord so a bot can act as a practical collaboration entry point.',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'asyncio'],
			link: PROJECT_LINK,
			result: 'The project stays single-machine, protocol-first, and intentionally narrow in scope.',
		},
		{
			title: 'Interaction Model',
			summary: 'Chat happens through `@bot`, while session control, approvals, and status flow through panel actions and approval messages.',
			stack: ['Streaming Reply', 'Approval Flow', 'Session Control'],
			link: PROJECT_LINK,
			result: 'Complex actions stay out of the chat stream whenever possible.',
		},
		{
			title: 'Technical Boundary',
			summary: 'It talks directly to the official `codex app-server` and does not expand into a full TUI, multi-node console, or extra web surface.',
			stack: ['codex app-server', 'SQLite State', 'Local Runtime'],
			link: PROJECT_LINK,
			result: 'Clear scope keeps the implementation maintainable.',
		},
	],
};

export const SITE_COPY: Record<SiteLang, SiteContent> = {
	'zh-cn': {
		siteName: 'ChangKT 个人站',
		siteDescription: '项目、读书笔记和前端实践的个人主页。',
		heroTitle: '项目、文章和持续更新的个人主页',
		heroSubtitle: '一个以内容为中心的 Astro 静态站',
		heroBody: '这里先放我最近在做的项目和刚写下来的读书心得，结构尽量简单，信息尽量直接。',
		nav: {
			home: '首页',
			projects: '项目',
			blog: '博客',
			about: '关于',
			contact: '联系',
		},
		sections: {
			projects: '项目介绍',
			featuredPosts: '最新博客',
			about: '关于我',
			contact: '联系',
		},
		about: {
			title: '关于我',
			intro: '我是 ChangKT，正在持续整理自己的项目、阅读记录和页面实现过程。',
			detail: '我更在意结构、可读性和长期维护，而不是堆很多视觉噱头。这个站点后面会继续补真实项目内容。',
			skillsTitle: '当前关注',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: '博客',
			intro: '目前先放一篇《思考，快与慢》的读书心得，后面再继续补项目文章。',
			categories: ['读书', '项目', '前端'],
			empty: '暂时还没有文章。',
			readMore: '阅读全文',
		},
		projects: PROJECTS['zh-cn'],
	},
	'zh-tw': {
		siteName: 'ChangKT 個人站',
		siteDescription: '項目、讀書筆記和前端實踐的個人主頁。',
		heroTitle: '項目、文章和持續更新的個人主頁',
		heroSubtitle: '一個以內容為中心的 Astro 靜態站',
		heroBody: '這裡先放我最近在做的項目和剛寫下來的讀書心得，結構盡量簡單，資訊盡量直接。',
		nav: {
			home: '首頁',
			projects: '項目',
			blog: '博客',
			about: '關於',
			contact: '聯絡',
		},
		sections: {
			projects: '項目介紹',
			featuredPosts: '最新博客',
			about: '關於我',
			contact: '聯絡',
		},
		about: {
			title: '關於我',
			intro: '我是 ChangKT，正在持續整理自己的項目、閱讀記錄與頁面實現過程。',
			detail: '我更在意結構、可讀性和長期維護，而不是堆很多視覺噱頭。這個站點後面會繼續補真實項目內容。',
			skillsTitle: '目前關注',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: '博客',
			intro: '目前先放一篇《思考，快與慢》的讀書心得，後面再繼續補項目文章。',
			categories: ['讀書', '項目', '前端'],
			empty: '暫時還沒有文章。',
			readMore: '閱讀全文',
		},
		projects: PROJECTS['zh-tw'],
	},
	en: {
		siteName: 'ChangKT Homepage',
		siteDescription: 'A personal site for projects, reading notes, and frontend work.',
		heroTitle: 'Projects, writing, and a homepage that keeps evolving',
		heroSubtitle: 'A content-first Astro static site',
		heroBody: 'This site keeps things simple. It highlights one recent project, one reading note, and the work behind the pages.',
		nav: {
			home: 'Home',
			projects: 'Projects',
			blog: 'Blog',
			about: 'About',
			contact: 'Contact',
		},
		sections: {
			projects: 'Project Overview',
			featuredPosts: 'Latest Post',
			about: 'About',
			contact: 'Contact',
		},
		about: {
			title: 'About',
			intro: 'I am ChangKT, documenting my projects, reading notes, and the way I build pages.',
			detail: 'I care more about structure, readability, and maintenance than visual noise. This site will keep moving toward real project content.',
			skillsTitle: 'Current Focus',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: 'Blog',
			intro: 'For now, the blog starts with a reading note on Thinking, Fast and Slow.',
			categories: ['Reading', 'Projects', 'Frontend'],
			empty: 'No posts yet.',
			readMore: 'Read the post',
		},
		projects: PROJECTS.en,
	},
};

export function getSiteCopy(lang: SiteLang): SiteContent {
	return SITE_COPY[lang];
}

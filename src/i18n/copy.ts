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

const PROJECTS: Record<SiteLang, ProjectItem[]> = {
	'zh-cn': [
		{
			title: '个人主页 V2 演示',
			summary: '以杂志感布局重构个人站点，强化视觉层次与内容引导。',
			stack: ['Astro', 'TypeScript', 'CSS'],
			link: 'https://github.com/Andy930809/Andy930809.github.io',
			result: '建立可持续迭代的页面结构，支持三语路由。',
		},
		{
			title: '内容发布工作台演示',
			summary: '用于整理文章草稿、发布节奏和主题规划的前端原型。',
			stack: ['Astro', 'Markdown', 'Design Tokens'],
			link: 'https://github.com/Andy930809',
			result: '将内容维护流程拆解为可复用模块，降低更新成本。',
		},
		{
			title: '创作日志可视化演示',
			summary: '以时间轴形式展示学习记录与阶段成果，提升可读性。',
			stack: ['Static Site', 'Grid Layout', 'Responsive Design'],
			link: 'https://space.bilibili.com/3546663765412010',
			result: '统一项目叙事方式，便于访客快速理解重点。',
		},
	],
	'zh-tw': [
		{
			title: '個人主頁 V2 演示',
			summary: '以雜誌感布局重構個人站點，強化視覺層次與內容引導。',
			stack: ['Astro', 'TypeScript', 'CSS'],
			link: 'https://github.com/Andy930809/Andy930809.github.io',
			result: '建立可持續迭代的頁面結構，支援三語路由。',
		},
		{
			title: '內容發布工作台演示',
			summary: '用於整理文章草稿、發布節奏和主題規劃的前端原型。',
			stack: ['Astro', 'Markdown', 'Design Tokens'],
			link: 'https://github.com/Andy930809',
			result: '將內容維護流程拆解為可複用模組，降低更新成本。',
		},
		{
			title: '創作日誌可視化演示',
			summary: '以時間軸形式展示學習記錄與階段成果，提升可讀性。',
			stack: ['Static Site', 'Grid Layout', 'Responsive Design'],
			link: 'https://space.bilibili.com/3546663765412010',
			result: '統一項目敘事方式，便於訪客快速理解重點。',
		},
	],
	en: [
		{
			title: 'Personal Homepage V2 Demo',
			summary: 'A magazine-inspired rebuild focused on hierarchy, clarity, and narrative flow.',
			stack: ['Astro', 'TypeScript', 'CSS'],
			link: 'https://github.com/Andy930809/Andy930809.github.io',
			result: 'A maintainable page system with explicit tri-language routing.',
		},
		{
			title: 'Content Publishing Workspace Demo',
			summary: 'A frontend prototype for draft planning, release rhythm, and topic tracking.',
			stack: ['Astro', 'Markdown', 'Design Tokens'],
			link: 'https://github.com/Andy930809',
			result: 'Content workflow was modularized to reduce long-term maintenance.',
		},
		{
			title: 'Creation Log Visualization Demo',
			summary: 'A timeline-focused presentation of learning milestones and deliverables.',
			stack: ['Static Site', 'Grid Layout', 'Responsive Design'],
			link: 'https://space.bilibili.com/3546663765412010',
			result: 'A unified storytelling pattern that improves first-visit comprehension.',
		},
	],
};

export const SITE_COPY: Record<SiteLang, SiteContent> = {
	'zh-cn': {
		siteName: 'ChangKT 个人主页',
		siteDescription: '一个记录前端实践、项目演示与创作思考的个人主页。',
		heroTitle: '把想法做成看得见、用得上的网页',
		heroSubtitle: '面向泛互联网读者的个人数字空间',
		heroBody:
			'这里不是品牌站点，而是我持续打磨的个人主页。内容围绕前端设计、构建过程与阶段复盘，保持真实、清晰与长期可维护。',
		nav: {
			home: '首页',
			projects: '项目',
			blog: '博客',
			about: '关于',
			contact: '联系',
		},
		sections: {
			projects: '代表项目',
			featuredPosts: '精选文章',
			about: '关于我',
			contact: '联系入口',
		},
		about: {
			title: '关于我',
			intro: '我是 ChangKT，正在持续建设这个个人主页并记录前端实践。',
			detail:
				'我偏好从结构、可读性和用户路径出发做设计，再用简单稳定的工程方案落地。这个站点会持续迭代，逐步补齐内容与项目细节。',
			skillsTitle: '常用技能',
			skills: ['Astro', 'TypeScript', 'CSS Architecture', 'Responsive Design', 'GitHub Pages', 'Content Writing'],
		},
		blog: {
			title: '博客',
			intro: '记录前端设计、页面实现和个人开发日志。',
			categories: ['前端设计', '工程实践', '学习记录'],
			empty: '当前没有文章，请稍后回来查看。',
			readMore: '继续阅读',
		},
		projects: PROJECTS['zh-cn'],
	},
	'zh-tw': {
		siteName: 'ChangKT 個人主頁',
		siteDescription: '一個記錄前端實踐、項目演示與創作思考的個人主頁。',
		heroTitle: '把想法做成看得見、用得上的網頁',
		heroSubtitle: '面向泛互聯網讀者的個人數字空間',
		heroBody:
			'這裡不是品牌站點，而是我持續打磨的個人主頁。內容圍繞前端設計、構建過程與階段複盤，保持真實、清晰與長期可維護。',
		nav: {
			home: '首頁',
			projects: '項目',
			blog: '博客',
			about: '關於',
			contact: '聯絡',
		},
		sections: {
			projects: '代表項目',
			featuredPosts: '精選文章',
			about: '關於我',
			contact: '聯絡入口',
		},
		about: {
			title: '關於我',
			intro: '我是 ChangKT，正在持續建設這個個人主頁並記錄前端實踐。',
			detail:
				'我偏好從結構、可讀性和用戶路徑出發做設計，再用簡單穩定的工程方案落地。這個站點會持續迭代，逐步補齊內容與項目細節。',
			skillsTitle: '常用技能',
			skills: ['Astro', 'TypeScript', 'CSS Architecture', 'Responsive Design', 'GitHub Pages', 'Content Writing'],
		},
		blog: {
			title: '博客',
			intro: '記錄前端設計、頁面實現和個人開發日誌。',
			categories: ['前端設計', '工程實踐', '學習記錄'],
			empty: '目前沒有文章，請稍後再查看。',
			readMore: '繼續閱讀',
		},
		projects: PROJECTS['zh-tw'],
	},
	en: {
		siteName: 'ChangKT Homepage',
		siteDescription: 'A personal homepage about frontend craft, project demos, and build notes.',
		heroTitle: 'Turning ideas into usable and memorable web pages',
		heroSubtitle: 'A personal space built for a broad internet audience',
		heroBody:
			'This is not a brand website. It is my evolving personal homepage, focused on frontend design, build decisions, and practical iteration notes.',
		nav: {
			home: 'Home',
			projects: 'Projects',
			blog: 'Blog',
			about: 'About',
			contact: 'Contact',
		},
		sections: {
			projects: 'Featured Projects',
			featuredPosts: 'Featured Posts',
			about: 'About Me',
			contact: 'Contact',
		},
		about: {
			title: 'About',
			intro: 'I am ChangKT, building this personal homepage as an evolving frontend practice.',
			detail:
				'I design from structure, readability, and user flow first, then ship with straightforward and reliable engineering decisions. This site will keep evolving over time.',
			skillsTitle: 'Core Skills',
			skills: ['Astro', 'TypeScript', 'CSS Architecture', 'Responsive Design', 'GitHub Pages', 'Content Writing'],
		},
		blog: {
			title: 'Blog',
			intro: 'Notes on frontend design, implementation, and personal build logs.',
			categories: ['Frontend Design', 'Engineering Practice', 'Learning Journal'],
			empty: 'No posts yet. Please check back soon.',
			readMore: 'Read More',
		},
		projects: PROJECTS.en,
	},
};

export function getSiteCopy(lang: SiteLang): SiteContent {
	return SITE_COPY[lang];
}

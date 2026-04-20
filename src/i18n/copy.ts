import type { SiteLang } from './config';

export type ProjectStatus = 'published' | 'draft';

export interface ProjectItem {
	id: string;
	title: string;
	summary: string;
	stack: string[];
	result: string;
	status: ProjectStatus;
	sourceRef: string;
	highlights: string[];
	link?: string;
}

interface ProjectBoardCopy {
	intro: string;
	featuredLabel: string;
	pipelineLabel: string;
	sourceLabel: string;
	highlightsLabel: string;
	openSourceLabel: string;
	draftHint: string;
	metrics: {
		total: string;
		published: string;
		draft: string;
		latestPost: string;
	};
	status: Record<ProjectStatus, string>;
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
	projectBoard: ProjectBoardCopy;
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
			id: 'discord-codex-gateway-mobile',
			title: 'Discord Codex Gateway（移动端协作）',
			summary: '把本地 Codex 会话接到 Discord，在手机上可以完成会话查看、审批和基础控制。',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'AsyncIO'],
			result: '核心链路已可用，后续补管理策略与文档整理。',
			status: 'published',
			sourceRef: '展示项/在手机上操控Codex_discord-codex-gateway',
			highlights: ['手机端可完成基础运维动作', '会话与审批流保持单机闭环', '协议边界明确，便于继续扩展'],
			link: PROJECT_LINK,
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT（OpenClaw 简化实现）',
			summary: '参考 OpenClaw 思路实现轻量 Python Agent 运行时，重点验证最小可用能力。',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: '仓库结构和主流程已搭好，正在补全稳定性测试。',
			status: 'draft',
			sourceRef: '展示项/仿照openclaw的简化python实现_FuanBOT',
			highlights: ['实现从输入到执行的主链路', '保留简化架构，避免过度抽象', '测试目录已建立'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: '树莓派物联网车机系统',
			summary: '车端采集传感器与摄像头数据，服务端进行目标检测与回传。',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: '已有可运行 demo，正在整理模块文档与演示材料。',
			status: 'draft',
			sourceRef: '展示项/基于树莓派的物联网实践_车机系统',
			highlights: ['前后端脚本已分离', '包含视频与模型资产', '具备端到端联动样例'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet 表情识别实践',
			summary: '基于 ResNet 的表情分类实验，聚焦模型训练与效果分析。',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: '训练脚本和项目报告已归档，待补线上展示页面。',
			status: 'draft',
			sourceRef: '展示项/ResNet实践_表情识别',
			highlights: ['包含可复现实验代码', '有完整课程型报告', '可迁移到实时识别场景'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod 数据库全栈项目',
			summary: '围绕数据库与 Web 后端的全栈实践，目标是打通数据模型到接口交付。',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: '代码材料已收集，正在统一命名与模块边界。',
			status: 'draft',
			sourceRef: '展示项/数据库全栈项目_XMUmod',
			highlights: ['覆盖数据建模到页面交互', '适合作为全栈能力展示位', '后续补充部署说明'],
		},
		{
			id: 'agentdesigner-thesis',
			title: '毕业设计 AgentDesigner',
			summary: '毕业设计方向，聚焦 Agent 工作流编排与可视化设计。',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: '处于资料汇总阶段，后续逐步补齐实验与结论。',
			status: 'draft',
			sourceRef: '展示项/毕业设计_AgentDesigner',
			highlights: ['目标明确为可视化编排', '计划输出论文与演示双线成果', '可作为长期更新项目'],
		},
	],
	'zh-tw': [
		{
			id: 'discord-codex-gateway-mobile',
			title: 'Discord Codex Gateway（行動端協作）',
			summary: '把本地 Codex 會話接到 Discord，在手機上可完成會話查看、審批與基礎控制。',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'AsyncIO'],
			result: '核心鏈路已可用，後續補管理策略與文件整理。',
			status: 'published',
			sourceRef: '展示項/在手機上操控Codex_discord-codex-gateway',
			highlights: ['手機端可完成基礎運維動作', '會話與審批流保持單機閉環', '協議邊界明確，便於繼續擴展'],
			link: PROJECT_LINK,
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT（OpenClaw 簡化實作）',
			summary: '參考 OpenClaw 思路實作輕量 Python Agent 執行時，重點驗證最小可用能力。',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: '倉庫結構與主流程已搭好，正在補齊穩定性測試。',
			status: 'draft',
			sourceRef: '展示項/仿照openclaw的简化python实现_FuanBOT',
			highlights: ['實作從輸入到執行的主鏈路', '保留簡化架構，避免過度抽象', '測試目錄已建立'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: '樹莓派物聯網車機系統',
			summary: '車端採集感測器與鏡頭資料，服務端進行目標檢測與回傳。',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: '已有可運行 demo，正在整理模組文件與展示材料。',
			status: 'draft',
			sourceRef: '展示項/基於樹莓派的物聯網實踐_車機系統',
			highlights: ['前後端腳本已分離', '包含影片與模型資產', '具備端到端聯動樣例'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet 表情識別實踐',
			summary: '基於 ResNet 的表情分類實驗，聚焦模型訓練與效果分析。',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: '訓練腳本與專案報告已歸檔，待補線上展示頁。',
			status: 'draft',
			sourceRef: '展示項/ResNet實踐_表情識別',
			highlights: ['包含可復現實驗程式碼', '有完整課程型報告', '可遷移到即時識別場景'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod 資料庫全端專案',
			summary: '圍繞資料庫與 Web 後端的全端實踐，目標是打通資料模型到介面交付。',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: '程式材料已收集，正在統一命名與模組邊界。',
			status: 'draft',
			sourceRef: '展示項/資料庫全端項目_XMUmod',
			highlights: ['覆蓋資料建模到頁面互動', '適合作為全端能力展示位', '後續補充部署說明'],
		},
		{
			id: 'agentdesigner-thesis',
			title: '畢業設計 AgentDesigner',
			summary: '畢業設計方向，聚焦 Agent 工作流編排與可視化設計。',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: '處於資料彙整階段，後續逐步補齊實驗與結論。',
			status: 'draft',
			sourceRef: '展示項/畢業設計_AgentDesigner',
			highlights: ['目標明確為可視化編排', '計畫輸出論文與展示雙線成果', '可作為長期更新專案'],
		},
	],
	en: [
		{
			id: 'discord-codex-gateway-mobile',
			title: 'Discord Codex Gateway (Mobile Ops)',
			summary: 'Bridges local Codex sessions into Discord so core session checks and approvals can be handled from mobile.',
			stack: ['Python 3.11+', 'discord.py', 'aiosqlite', 'AsyncIO'],
			result: 'Core workflow is running. Governance and docs are being refined next.',
			status: 'published',
			sourceRef: 'showcase/在手机上操控Codex_discord-codex-gateway',
			highlights: ['Mobile-first operations path', 'Single-machine approval loop', 'Clear protocol boundaries for growth'],
			link: PROJECT_LINK,
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT (OpenClaw-Inspired Minimal Runtime)',
			summary: 'A simplified Python agent runtime inspired by OpenClaw, focused on validating a minimal useful loop.',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: 'Repository layout and main loop are in place. Stability tests are being expanded.',
			status: 'draft',
			sourceRef: 'showcase/仿照openclaw的简化python实现_FuanBOT',
			highlights: ['Input-to-execution core path works', 'Architecture stays intentionally lean', 'Test suite scaffold is ready'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: 'Raspberry Pi IoT Vehicle System',
			summary: 'Collects sensor and camera data on the client side, with detection and response handled on the server side.',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: 'A runnable demo exists. Documentation and showcase materials are being organized.',
			status: 'draft',
			sourceRef: 'showcase/基于树莓派的物联网实践_车机系统',
			highlights: ['Client/server scripts are separated', 'Video and model assets are included', 'End-to-end workflow is demonstrable'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet Facial Expression Recognition',
			summary: 'A ResNet-based expression classification practice focused on model training and evaluation.',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: 'Training scripts and report are archived. Public-facing project page is pending.',
			status: 'draft',
			sourceRef: 'showcase/ResNet实践_表情识别',
			highlights: ['Reproducible experiment code', 'Complete project report', 'Portable to real-time scenarios'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod Full-Stack Database Project',
			summary: 'A full-stack project around data modeling and web backend delivery, from schema to usable endpoints.',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: 'Core materials are collected. Naming and module boundaries are being standardized.',
			status: 'draft',
			sourceRef: 'showcase/数据库全栈项目_XMUmod',
			highlights: ['Covers data model to UI flow', 'Strong full-stack showcase candidate', 'Deployment notes are planned'],
		},
		{
			id: 'agentdesigner-thesis',
			title: 'AgentDesigner Graduation Project',
			summary: 'A thesis-focused effort on agent workflow orchestration and visual design tooling.',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: 'Currently in material consolidation stage. Experiments and conclusions will be published iteratively.',
			status: 'draft',
			sourceRef: 'showcase/毕业设计_AgentDesigner',
			highlights: ['Visual orchestration is the core goal', 'Thesis and demo outputs are both planned', 'Designed as a long-running project thread'],
		},
	],
};

export const SITE_COPY: Record<SiteLang, SiteContent> = {
	'zh-cn': {
		siteName: 'ChangKT 个人站',
		siteDescription: '项目、读书笔记和前端实践的个人主页。',
		heroTitle: '项目、文章和持续更新的个人主页',
		heroSubtitle: '一个以内容为中心的 Astro 静态站',
		heroBody: '项目区已切换为“已发布 + 整理中”结构，先把展示位搭好，再逐步补全每个项目细节。',
		nav: {
			home: '首页',
			projects: '项目',
			blog: '博客',
			about: '关于',
			contact: '联系',
		},
		sections: {
			projects: '项目展示板',
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
		projectBoard: {
			intro: '以下项目来源于本地“展示项”目录。已完成项目直接展示，未整理完成项目先以占位卡片管理。',
			featuredLabel: '主展示项目',
			pipelineLabel: '待补全项目',
			sourceLabel: '来源目录',
			highlightsLabel: '关键点',
			openSourceLabel: '查看仓库',
			draftHint: '资料整理中',
			metrics: {
				total: '项目总数',
				published: '已发布',
				draft: '整理中',
				latestPost: '最新文章',
			},
			status: {
				published: '已发布',
				draft: '整理中',
			},
		},
		projects: PROJECTS['zh-cn'],
	},
	'zh-tw': {
		siteName: 'ChangKT 個人站',
		siteDescription: '項目、讀書筆記和前端實踐的個人主頁。',
		heroTitle: '項目、文章和持續更新的個人主頁',
		heroSubtitle: '一個以內容為中心的 Astro 靜態站',
		heroBody: '項目區已切換成「已發布 + 整理中」結構，先把展示位搭好，再逐步補齊每個項目細節。',
		nav: {
			home: '首頁',
			projects: '項目',
			blog: '博客',
			about: '關於',
			contact: '聯絡',
		},
		sections: {
			projects: '項目展示板',
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
		projectBoard: {
			intro: '以下項目來源於本地「展示項」目錄。已完成項目直接展示，未整理完成項目先以占位卡片管理。',
			featuredLabel: '主展示項目',
			pipelineLabel: '待補齊項目',
			sourceLabel: '來源目錄',
			highlightsLabel: '關鍵點',
			openSourceLabel: '查看倉庫',
			draftHint: '資料整理中',
			metrics: {
				total: '項目總數',
				published: '已發布',
				draft: '整理中',
				latestPost: '最新文章',
			},
			status: {
				published: '已發布',
				draft: '整理中',
			},
		},
		projects: PROJECTS['zh-tw'],
	},
	en: {
		siteName: 'ChangKT Homepage',
		siteDescription: 'A personal site for projects, reading notes, and frontend work.',
		heroTitle: 'Projects, writing, and a homepage that keeps evolving',
		heroSubtitle: 'A content-first Astro static site',
		heroBody: 'The project area now runs as a published-plus-draft board so slots can be visible before each project write-up is complete.',
		nav: {
			home: 'Home',
			projects: 'Projects',
			blog: 'Blog',
			about: 'About',
			contact: 'Contact',
		},
		sections: {
			projects: 'Project Board',
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
		projectBoard: {
			intro: 'These entries are mapped from a local showcase folder. Published projects are fully visible while unfinished ones stay as managed placeholders.',
			featuredLabel: 'Featured Project',
			pipelineLabel: 'Draft Queue',
			sourceLabel: 'Source Folder',
			highlightsLabel: 'Highlights',
			openSourceLabel: 'Open Repository',
			draftHint: 'Materials in progress',
			metrics: {
				total: 'Total Projects',
				published: 'Published',
				draft: 'In Draft',
				latestPost: 'Latest Post',
			},
			status: {
				published: 'Published',
				draft: 'In Draft',
			},
		},
		projects: PROJECTS.en,
	},
};

export function getSiteCopy(lang: SiteLang): SiteContent {
	return SITE_COPY[lang];
}

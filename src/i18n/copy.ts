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
	image?: string;
	link?: string;
}

interface ProjectBoardCopy {
	intro: string;
	featuredLabel: string;
	pipelineLabel: string;
	sourceLabel: string;
	highlightsLabel: string;
	stackLabel: string;
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
			highlights: ['网关模块分层', '移动会话控制', '审批切换可用'],
			image: '/project-images/discord-codex-gateway-mobile.png',
			link: PROJECT_LINK,
		},
		{
			id: 'opencv-graphics-practice',
			title: 'OpenCV 图形学实践',
			summary: '围绕 C++ 图形渲染、模型加载和着色器流程完成的课程实践，包含源码、纹理资源与实验报告。',
			stack: ['C++', 'GLSL', '3D Graphics', 'Model Loading'],
			result: '代码、资源和报告均已归档，可作为大学项目展示位。',
			status: 'draft',
			sourceRef: '展示项/OpenCV实践',
			highlights: ['渲染模块拆分', '图形场景演示', '模型贴图跑通'],
			image: '/project-images/opencv-graphics-practice.png',
		},
		{
			id: 'msp430-smart-car',
			title: 'MSP430 小车',
			summary: '以 MSP430 为核心的电子工艺实践，围绕小车搭建、基础控制和实物展示完成项目整理。',
			stack: ['MSP430', 'Embedded System', 'Electronics', 'Control'],
			result: '实验报告和展示图片已保留，适合作为嵌入式课程项目展示。',
			status: 'draft',
			sourceRef: '展示项/MSP430小车',
			highlights: ['原理图PCB成套', '自动小车制作', '实物报告齐备'],
			image: '/project-images/msp430-smart-car.png',
		},
		{
			id: 'computer-network-labs',
			title: '计算机网络实验',
			summary: '覆盖 Socket 通信、路由转发与抓包分析的一组课程实验，代码与实验报告按任务阶段整理。',
			stack: ['C', 'Python', 'Socket', 'Network Analysis'],
			result: '实验目录、报告与抓包材料齐全，后续可继续细化每个任务说明。',
			status: 'draft',
			sourceRef: '展示项/计算机网路实验',
			image: '/project-images/computer-network-labs.jpg',
			highlights: ['实验任务分层', '验证协议通信', '抓包路由完成'],
		},
		{
			id: 'computer-organization-labs',
			title: '计算机组成原理实验',
			summary: '围绕指令系统、微指令和课程实验讲解材料整理出的大学项目条目，适合作为体系结构学习记录。',
			stack: ['Computer Architecture', 'Microinstruction', 'Instruction Design', 'Course Lab'],
			result: '现有材料以实验课件和练习为主，展示位已建立，后续补充实验结论。',
			status: 'draft',
			sourceRef: '展示项/计算机组成原理实验',
			image: '/project-images/computer-organization-labs.jpg',
			highlights: ['课件练习分组', '理解指令系统', '实验材料齐备'],
		},
		{
			id: 'operating-system-labs',
			title: '操作系统实验',
			summary: '从 Nachos 线程同步到内核内存分配与 RAMFS 的系列实验，覆盖课程中的多个核心主题。',
			stack: ['C/C++', 'Nachos', 'Kernel Module', 'RAMFS'],
			result: '源码、实验报告和分阶段目录已经整理完成，内容完整度较高。',
			status: 'draft',
			sourceRef: '展示项/操作系统实验',
			image: '/project-images/operating-system-labs.png',
			highlights: ['实验目录分阶段', '实现内核机制', '内核实验完成'],
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT（OpenClaw 简化实现）',
			summary: '参考 OpenClaw 思路实现轻量 Python Agent 运行时，重点验证最小可用能力。',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: '仓库结构和主流程已搭好，正在补全稳定性测试。',
			status: 'draft',
			sourceRef: '展示项/仿照openclaw的简化python实现_FuanBOT',
			image: '/project-images/fuanbot-openclaw-inspired.jpg',
			highlights: ['控制平面分层', '轻量Agent运行', '主链路已打通'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: '树莓派物联网车机系统',
			summary: '车端采集传感器与摄像头数据，服务端进行目标检测与回传。',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: '已有可运行 demo，正在整理模块文档与演示材料。',
			status: 'draft',
			sourceRef: '展示项/基于树莓派的物联网实践_车机系统',
			image: '/project-images/raspberrypi-iot-car-system.png',
			highlights: ['端云模块拆分', '辅助驾驶识别', '车端联动可演示'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet 表情识别实践',
			summary: '基于 ResNet 的表情分类实验，聚焦模型训练与效果分析。',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: '训练脚本和项目报告已归档，待补线上展示页面。',
			status: 'draft',
			sourceRef: '展示项/ResNet实践_表情识别',
			image: '/project-images/resnet-expression-recognition.png',
			highlights: ['数据模型分离', '七类表情识别', '训练评估完成'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod 数据库全栈项目',
			summary: '围绕数据库与 Web 后端的全栈实践，目标是打通数据模型到接口交付。',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: '代码材料已收集，正在统一命名与模块边界。',
			status: 'draft',
			sourceRef: '展示项/数据库全栈项目_XMUmod',
			image: '/project-images/xmumod-fullstack-db.jpg',
			highlights: ['前后端数据分层', '课程数据库建模', '大作业已成型'],
		},
		{
			id: 'agentdesigner-thesis',
			title: '毕业设计 AgentDesigner',
			summary: '毕业设计方向，聚焦 Agent 工作流编排与可视化设计。',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: '处于资料汇总阶段，后续逐步补齐实验与结论。',
			status: 'draft',
			sourceRef: '展示项/毕业设计_AgentDesigner',
			image: '/project-images/agentdesigner-graduation-project.png',
			highlights: ['配置流程分层', '智能体编排设计', '系统方案成稿'],
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
			highlights: ['網關模組分層', '行動會話控制', '審批切換可用'],
			image: '/project-images/discord-codex-gateway-mobile.png',
			link: PROJECT_LINK,
		},
		{
			id: 'opencv-graphics-practice',
			title: 'OpenCV 圖形學實踐',
			summary: '圍繞 C++ 圖形渲染、模型載入與著色器流程完成的課程實踐，包含原始碼、紋理資源與實驗報告。',
			stack: ['C++', 'GLSL', '3D Graphics', 'Model Loading'],
			result: '程式、資源與報告均已歸檔，可作為大學專案展示位。',
			status: 'draft',
			sourceRef: '展示項/OpenCV实践',
			highlights: ['渲染模組拆分', '圖形場景展示', '模型貼圖跑通'],
			image: '/project-images/opencv-graphics-practice.png',
		},
		{
			id: 'msp430-smart-car',
			title: 'MSP430 小車',
			summary: '以 MSP430 為核心的電子工藝實踐，圍繞小車搭建、基礎控制與實物展示完成專案整理。',
			stack: ['MSP430', 'Embedded System', 'Electronics', 'Control'],
			result: '實驗報告與展示圖片已保留，適合作為嵌入式課程專案展示。',
			status: 'draft',
			sourceRef: '展示項/MSP430小车',
			highlights: ['原理圖PCB成套', '自動小車製作', '實物報告齊備'],
			image: '/project-images/msp430-smart-car.png',
		},
		{
			id: 'computer-network-labs',
			title: '計算機網路實驗',
			summary: '覆蓋 Socket 通訊、路由轉發與抓包分析的一組課程實驗，程式與實驗報告按任務階段整理。',
			stack: ['C', 'Python', 'Socket', 'Network Analysis'],
			result: '實驗目錄、報告與抓包材料齊全，後續可持續細化各任務說明。',
			status: 'draft',
			sourceRef: '展示項/计算机网路实验',
			image: '/project-images/computer-network-labs.jpg',
			highlights: ['實驗任務分層', '驗證協議通訊', '抓包路由完成'],
		},
		{
			id: 'computer-organization-labs',
			title: '計算機組成原理實驗',
			summary: '圍繞指令系統、微指令與課程實驗講解材料整理出的大學專案條目，適合作為體系結構學習記錄。',
			stack: ['Computer Architecture', 'Microinstruction', 'Instruction Design', 'Course Lab'],
			result: '現有材料以實驗課件與練習為主，展示位已建立，後續補充實驗結論。',
			status: 'draft',
			sourceRef: '展示項/计算机组成原理实验',
			image: '/project-images/computer-organization-labs.jpg',
			highlights: ['課件練習分組', '理解指令系統', '實驗材料齊備'],
		},
		{
			id: 'operating-system-labs',
			title: '操作系統實驗',
			summary: '從 Nachos 執行緒同步到核心記憶體分配與 RAMFS 的系列實驗，覆蓋課程中的多個核心主題。',
			stack: ['C/C++', 'Nachos', 'Kernel Module', 'RAMFS'],
			result: '原始碼、實驗報告與分階段目錄已整理完成，內容完整度較高。',
			status: 'draft',
			sourceRef: '展示項/操作系统实验',
			image: '/project-images/operating-system-labs.png',
			highlights: ['實驗目錄分階段', '實作核心機制', '核心實驗完成'],
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT（OpenClaw 簡化實作）',
			summary: '參考 OpenClaw 思路實作輕量 Python Agent 執行時，重點驗證最小可用能力。',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: '倉庫結構與主流程已搭好，正在補齊穩定性測試。',
			status: 'draft',
			sourceRef: '展示項/仿照openclaw的简化python实现_FuanBOT',
			image: '/project-images/fuanbot-openclaw-inspired.jpg',
			highlights: ['控制平面分層', '輕量Agent執行', '主鏈路已打通'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: '樹莓派物聯網車機系統',
			summary: '車端採集感測器與鏡頭資料，服務端進行目標檢測與回傳。',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: '已有可運行 demo，正在整理模組文件與展示材料。',
			status: 'draft',
			sourceRef: '展示項/基於樹莓派的物聯網實踐_車機系統',
			image: '/project-images/raspberrypi-iot-car-system.png',
			highlights: ['端雲模組拆分', '輔助駕駛識別', '車端聯動可展示'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet 表情識別實踐',
			summary: '基於 ResNet 的表情分類實驗，聚焦模型訓練與效果分析。',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: '訓練腳本與專案報告已歸檔，待補線上展示頁。',
			status: 'draft',
			sourceRef: '展示項/ResNet實踐_表情識別',
			image: '/project-images/resnet-expression-recognition.png',
			highlights: ['資料模型分離', '七類表情識別', '訓練評估完成'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod 資料庫全端專案',
			summary: '圍繞資料庫與 Web 後端的全端實踐，目標是打通資料模型到介面交付。',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: '程式材料已收集，正在統一命名與模組邊界。',
			status: 'draft',
			sourceRef: '展示項/資料庫全端項目_XMUmod',
			image: '/project-images/xmumod-fullstack-db.jpg',
			highlights: ['前後端資料分層', '課程資料庫建模', '大作業已成型'],
		},
		{
			id: 'agentdesigner-thesis',
			title: '畢業設計 AgentDesigner',
			summary: '畢業設計方向，聚焦 Agent 工作流編排與可視化設計。',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: '處於資料彙整階段，後續逐步補齊實驗與結論。',
			status: 'draft',
			sourceRef: '展示項/畢業設計_AgentDesigner',
			image: '/project-images/agentdesigner-graduation-project.png',
			highlights: ['配置流程分層', '智能體編排設計', '系統方案成稿'],
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
			highlights: ['Gateway layers split', 'Mobile session control', 'Approval flow works'],
			image: '/project-images/discord-codex-gateway-mobile.png',
			link: PROJECT_LINK,
		},
		{
			id: 'opencv-graphics-practice',
			title: 'OpenCV Graphics Practice',
			summary: 'A coursework project around C++ rendering, model loading, and shader workflows, with source files, texture assets, and a report already archived.',
			stack: ['C++', 'GLSL', '3D Graphics', 'Model Loading'],
			result: 'Code, assets, and report are already collected and ready to be shown as a university project.',
			status: 'draft',
			sourceRef: 'showcase/OpenCV实践',
			highlights: ['Render modules split', 'Graphics scene demo', 'Model pipeline works'],
			image: '/project-images/opencv-graphics-practice.png',
		},
		{
			id: 'msp430-smart-car',
			title: 'MSP430 Smart Car',
			summary: 'An electronics craft project built around an MSP430-based car, organized as a compact embedded systems showcase with report and visuals.',
			stack: ['MSP430', 'Embedded System', 'Electronics', 'Control'],
			result: 'The report and showcase image are preserved, making it a solid entry for the university project board.',
			status: 'draft',
			sourceRef: 'showcase/MSP430小车',
			highlights: ['PCB assets bundled', 'Smart car build', 'Hardware report ready'],
			image: '/project-images/msp430-smart-car.png',
		},
		{
			id: 'computer-network-labs',
			title: 'Computer Networks Lab',
			summary: 'A set of coursework labs covering socket communication, routing, and packet analysis, with code and reports organized by task stage.',
			stack: ['C', 'Python', 'Socket', 'Network Analysis'],
			result: 'Experiment folders, reports, and packet-capture materials are all present and ready for later detail expansion.',
			status: 'draft',
			sourceRef: 'showcase/计算机网路实验',
			image: '/project-images/computer-network-labs.jpg',
			highlights: ['Lab tasks staged', 'Protocol communication', 'Routing capture done'],
		},
		{
			id: 'computer-organization-labs',
			title: 'Computer Organization Lab',
			summary: 'A university project entry organized from lab decks and exercises on instruction systems and microinstructions, focused on architecture learning.',
			stack: ['Computer Architecture', 'Microinstruction', 'Instruction Design', 'Course Lab'],
			result: 'Current materials are mostly experiment slides and exercises, but the showcase slot is now ready for later conclusions.',
			status: 'draft',
			sourceRef: 'showcase/计算机组成原理实验',
			image: '/project-images/computer-organization-labs.jpg',
			highlights: ['Slides grouped', 'Instruction study', 'Lab materials ready'],
		},
		{
			id: 'operating-system-labs',
			title: 'Operating Systems Lab',
			summary: 'A series of labs ranging from Nachos thread synchronization to kernel memory allocation and RAMFS, covering several core OS topics.',
			stack: ['C/C++', 'Nachos', 'Kernel Module', 'RAMFS'],
			result: 'Source code, reports, and staged experiment folders are already organized with strong overall completeness.',
			status: 'draft',
			sourceRef: 'showcase/操作系统实验',
			image: '/project-images/operating-system-labs.png',
			highlights: ['Staged lab folders', 'Kernel mechanism work', 'OS labs completed'],
		},
		{
			id: 'fuanbot-openclaw-inspired',
			title: 'FuanBOT (OpenClaw-Inspired Minimal Runtime)',
			summary: 'A simplified Python agent runtime inspired by OpenClaw, focused on validating a minimal useful loop.',
			stack: ['Python', 'uv', 'pytest', 'MCP'],
			result: 'Repository layout and main loop are in place. Stability tests are being expanded.',
			status: 'draft',
			sourceRef: 'showcase/仿照openclaw的简化python实现_FuanBOT',
			image: '/project-images/fuanbot-openclaw-inspired.jpg',
			highlights: ['Control plane layered', 'Lite agent runtime', 'Core loop working'],
		},
		{
			id: 'raspberrypi-iot-car-system',
			title: 'Raspberry Pi IoT Vehicle System',
			summary: 'Collects sensor and camera data on the client side, with detection and response handled on the server side.',
			stack: ['Raspberry Pi', 'Python', 'YOLOv8', 'Socket'],
			result: 'A runnable demo exists. Documentation and showcase materials are being organized.',
			status: 'draft',
			sourceRef: 'showcase/基于树莓派的物联网实践_车机系统',
			image: '/project-images/raspberrypi-iot-car-system.png',
			highlights: ['Edge-cloud modules', 'Assist driving demo', 'Vehicle loop works'],
		},
		{
			id: 'resnet-expression-recognition',
			title: 'ResNet Facial Expression Recognition',
			summary: 'A ResNet-based expression classification practice focused on model training and evaluation.',
			stack: ['PyTorch', 'ResNet', 'Computer Vision'],
			result: 'Training scripts and report are archived. Public-facing project page is pending.',
			status: 'draft',
			sourceRef: 'showcase/ResNet实践_表情识别',
			image: '/project-images/resnet-expression-recognition.png',
			highlights: ['Data-model split', 'Emotion classification', 'Training run done'],
		},
		{
			id: 'xmumod-fullstack-db',
			title: 'XMUmod Full-Stack Database Project',
			summary: 'A full-stack project around data modeling and web backend delivery, from schema to usable endpoints.',
			stack: ['Database', 'Backend API', 'Frontend'],
			result: 'Core materials are collected. Naming and module boundaries are being standardized.',
			status: 'draft',
			sourceRef: 'showcase/数据库全栈项目_XMUmod',
			image: '/project-images/xmumod-fullstack-db.jpg',
			highlights: ['Data tiers split', 'Database modeling', 'Course project ready'],
		},
		{
			id: 'agentdesigner-thesis',
			title: 'AgentDesigner Graduation Project',
			summary: 'A thesis-focused effort on agent workflow orchestration and visual design tooling.',
			stack: ['Agent Workflow', 'System Design', 'UI Prototype'],
			result: 'Currently in material consolidation stage. Experiments and conclusions will be published iteratively.',
			status: 'draft',
			sourceRef: 'showcase/毕业设计_AgentDesigner',
			image: '/project-images/agentdesigner-graduation-project.png',
			highlights: ['Config flow layered', 'Agent workflow design', 'System draft ready'],
		},
	],
};

export const SITE_COPY: Record<SiteLang, SiteContent> = {
	'zh-cn': {
		siteName: 'ChangKT 个人站',
		siteDescription: '项目、读书笔记和前端实践的个人主页。',
		heroTitle: '项目、文章和持续更新的个人主页',
		heroSubtitle: '一个以内容为中心的 Astro 静态站',
		heroBody: '包含我的大学项目以及个人探索，希望在空余时间建立好的小空间',
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
			detail: '这个站点用来记录我的想法或者小项目，持续更新',
			skillsTitle: '当前关注',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: '博客',
			intro: '这里会持续整理项目实践、部署记录和一些技术笔记。',
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
			stackLabel: '技术栈',
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
		heroBody: '包含我的大學項目以及個人探索，希望在空餘時間建立好的小空間',
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
			detail: '這個站點用來記錄我的想法或者小項目，持續更新',
			skillsTitle: '目前關注',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: '博客',
			intro: '這裡會持續整理項目實踐、部署記錄與一些技術筆記。',
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
			stackLabel: '技術棧',
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
		heroBody: 'This space brings together my university projects and personal explorations, built gradually in the free time I can protect for it.',
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
			detail: 'This site is where I keep track of ideas and small projects, with steady updates over time.',
			skillsTitle: 'Current Focus',
			skills: ['Astro', 'TypeScript', 'Python', 'Content Design', 'GitHub Pages', 'Writing'],
		},
		blog: {
			title: 'Blog',
			intro: 'This section collects project notes, deployment write-ups, and practical technical posts.',
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
			stackLabel: 'Tech Stack',
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

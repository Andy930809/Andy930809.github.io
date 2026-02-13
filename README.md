# ChangKT Personal Homepage

基于 Astro 的个人主页项目，包含以下能力：

1. 三语路由：`/zh-cn/`、`/zh-tw/`、`/en/`
2. 混合结构首页：个人叙事 + 代表项目 + 精选文章 + 联系入口
3. 多语言切换按钮与统一视觉系统
4. GitHub Pages 自动部署（`.github/workflows/astro.yml`）

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 内容维护

博客内容位于 `src/content/blog/`，可在 frontmatter 中使用以下字段：

- `title` / `titleZhTw` / `titleEn`
- `description` / `descriptionZhTw` / `descriptionEn`
- `pubDate`
- `category`
- `featured`

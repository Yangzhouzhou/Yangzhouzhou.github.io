# 📖 使用说明 - User Guide

本文档提供完整的使用和维护指南，帮助你快速上手并轻松更新你的学术主页。

## 📋 目录

- [快速开始](#快速开始)
- [内容修改指南](#内容修改指南)
- [功能特性说明](#功能特性说明)
- [常见问题](#常见问题)
- [部署和更新](#部署和更新)

## 🚀 快速开始

### 前置要求

- Node.js 18+ 和 pnpm
- Git 和 GitHub 账号
- （可选）VS Code 或其他代码编辑器

### 本地开发

1. **克隆或下载项目**
   ```bash
   # 如果是 git 仓库
   git clone https://github.com/your-username/your-username.github.io.git
   cd your-username.github.io
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **启动开发服务器**
   ```bash
   pnpm dev
   # 或
   coze dev
   ```

4. **访问网站**
   打开浏览器访问：http://localhost:5000

### 开发模式说明

- **热更新**：修改代码后自动刷新，无需重启
- **实时预览**：修改内容立即生效
- **错误提示**：控制台显示详细错误信息

## ✏️ 内容修改指南

### 1. 修改个人信息

**文件**：`src/app/page.tsx`

**搜索关键词**：`Yang Zhou`、`Ph.D.`、`Your University`

**修改内容**：
```typescript
// 修改姓名
<h1 className="text-5xl font-bold mb-3">
  {t('about.title')}  {/* 在 LanguageContext.tsx 中修改翻译 */}
</h1>

// 修改职位
<p className="text-2xl text-muted-foreground mb-5 font-medium">
  {t('about.position')}  {/* 在 LanguageContext.tsx 中修改翻译 */}
</p>

// 修改地点
<span>{t('about.location')}</span>
```

**添加真实头像**：
1. 将图片放到 `public/` 目录
2. 命名为 `avatar.jpg` 或 `avatar.png`
3. 修改头像显示代码：
   ```typescript
   <img src="/avatar.jpg" alt="Avatar" className="w-72 h-72" />
   ```

### 2. 修改工作/论文项目（最重要）

**文件**：`src/data/works.ts`

**项目结构**：
```typescript
{
  id: 'work-1',                    // 唯一标识符（不能重复）
  title: '项目标题',              // 中文标题
  titleEn: 'Project Title',       // 英文标题
  description: '简短描述',        // 中文描述
  descriptionEn: 'Short description', // 英文描述
  status: 'ongoing' | 'completed', // 状态
  date: '2024-01',                // 日期（YYYY-MM）
  tags: ['NLP', 'AI'],            // 标签
  type: 'work' | 'publication',  // 类型
  // 以下是详细内容（用于详情页）
  abstract: '摘要内容...',
  abstractEn: 'Abstract...',
  methodology: '方法描述...',
  methodologyEn: 'Methodology...',
  results: '结果描述...',
  resultsEn: 'Results...',
  conclusion: '结论...',
  conclusionEn: 'Conclusion...',
  references: [                   // 参考文献
    'Author et al. (Year). Title.',
  ],
  links: {                        // 资源链接
    paper: 'https://...',         // 论文链接
    code: 'https://...',          // 代码链接
    demo: 'https://...',          // 演示链接
    poster: 'https://...',        // 海报链接
  },
  charts: [                       // 图表数据
    {
      type: 'image' | 'chart',
      title: '图表标题',
      titleEn: 'Chart Title',
      data: { /* ... */ }
    }
  ]
}
```

**添加新项目示例**：

```typescript
{
  id: 'work-new',
  title: '大语言模型在医疗领域的应用',
  titleEn: 'LLM Applications in Healthcare',
  description: '探索大语言模型在医疗诊断中的应用潜力',
  descriptionEn: 'Exploring the potential of LLMs in medical diagnosis',
  status: 'ongoing',
  date: '2024-03',
  tags: ['LLM', 'Healthcare', 'AI'],
  type: 'work',
  abstract: '本研究提出了一种基于大语言模型的医疗诊断系统...',
  abstractEn: 'This research proposes an LLM-based medical diagnosis system...',
  methodology: '我们使用 GPT-4 作为基础模型...',
  methodologyEn: 'We use GPT-4 as the base model...',
  results: '在三个医疗数据集上取得了 85% 的准确率...',
  resultsEn: 'Achieved 85% accuracy on three medical datasets...',
  conclusion: '该方法展示了在医疗领域的巨大潜力...',
  conclusionEn: 'The method shows great potential in healthcare...',
  references: [
    'Smith et al. (2023). LLM in Medicine.',
    'Johnson et al. (2024). Medical AI Systems.',
  ],
  links: {
    paper: 'https://arxiv.org/abs/2024.xxxxx',
    code: 'https://github.com/your-username/project',
  },
  charts: [
    {
      type: 'chart',
      title: '性能对比',
      titleEn: 'Performance Comparison',
      data: {
        labels: ['Baseline', 'Our Method', 'SOTA'],
        values: [80, 85, 83],
      }
    }
  ]
}
```

### 3. 修改教育背景

**文件**：`src/app/page.tsx`

**搜索**：`Ph.D. in Computer Science`、`M.S.`、`B.S.`

**修改内容**：
```typescript
<div className="border-l-4 border-primary pl-8 pb-6">
  <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
  <p className="text-lg font-medium text-primary mb-3">北京大学</p>
  <p className="text-muted-foreground">
    研究方向：自然语言处理<br />
    导师：张教授
  </p>
</div>
```

### 4. 修改研究经历

**文件**：`src/app/page.tsx`

**搜索**：`Research Intern`、`Graduate Research Assistant`

**修改内容**：
```typescript
<div className="border-l-4 border-primary pl-8 pb-6">
  <h3 className="text-xl font-semibold">研究实习生</h3>
  <p className="text-lg font-medium text-primary mb-3">清华大学智能信息实验室</p>
  <ul className="list-disc list-inside space-y-2">
    <li>开发了深度学习模型用于图像识别</li>
    <li>在 CVPR 发表了研究论文</li>
  </ul>
</div>
```

### 5. 修改联系方式

**文件**：`src/app/page.tsx`

**搜索**：`your.email@example.com`、`北京市海淀区`

**修改内容**：
```typescript
<a href="mailto:your.real.email@example.com">
  your.real.email@example.com
</a>
<p className="text-lg font-medium">
  你所在的城市
</p>
```

**添加社交媒体链接**：
```typescript
<a
  href="https://linkedin.com/in/your-profile"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin className="w-5 h-5" />
</a>
```

### 6. 修改中英文翻译

**文件**：`src/contexts/LanguageContext.tsx`

**添加新翻译**：
```typescript
'new.key': '中文翻译',
```

**英文翻译**：
```typescript
'new.key': 'English translation',
```

**使用翻译**：
```typescript
{t('new.key')}
```

### 7. 修改网站元数据

**文件**：`src/app/layout.tsx`

**修改内容**：
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Academic Homepage',
  description: 'Personal academic website of Your Name',
  keywords: 'Your Name, Academic, Research, AI, ML',
  authors: [{ name: 'Your Name' }],
};
```

## 🎨 功能特性说明

### 1. Markdown 详情页

工作/论文详情页现在支持 Markdown 风格的渲染：

- **自动生成**：系统会根据数据自动生成 Markdown 内容
- **复制功能**：点击"复制 Markdown"按钮，一键复制内容
- **样式美化**：优化的排版，类似技术文档的阅读体验

**查看详情**：
- 主页点击"查看详情"按钮
- 系统自动生成 Markdown 格式内容
- 顶部有操作按钮：下载资源、复制 Markdown

### 2. 板块顺序调整

主页板块顺序（从上到下）：
1. 个人信息区域
2. 最新工作
3. 发表论文
4. 教育背景
5. 研究经历
6. 奖项荣誉
7. 联系方式

### 3. 论文详情页

- 发表论文项目也有"查看详情"按钮
- 点击后进入与工作详情相同风格的页面
- 支持显示论文的完整信息（摘要、方法、结果、结论等）

### 4. 图表展示

支持两种图表类型：

**1. 图片类型** (`type: 'image'`)：
```typescript
{
  type: 'image',
  title: '系统架构图',
  titleEn: 'System Architecture',
  data: { description: '系统整体架构，包含三个主要模块' }
}
```

**2. 数据图表** (`type: 'chart'`)：
```typescript
{
  type: 'chart',
  title: '性能对比',
  titleEn: 'Performance Comparison',
  data: {
    labels: ['Baseline', 'Our Method', 'SOTA'],
    values: [65, 75, 73],
  }
}
```

## ❓ 常见问题

### Q1: 如何添加个人头像？

**A**:
1. 准备一张方形图片（建议 500x500 像素）
2. 重命名为 `avatar.jpg` 或 `avatar.png`
3. 放到项目根目录的 `public/` 文件夹中
4. 修改 `src/app/page.tsx`，替换头像显示代码

### Q2: 如何修改网站主题颜色？

**A**:
修改 `src/app/globals.css` 中的颜色变量：
```css
:root {
  --primary: 190 100% 50%; /* 调整主色调 */
  --secondary: 270 100% 50%; /* 调整副色调 */
}
```

### Q3: 如何添加更多的社交媒体链接？

**A**:
在 `src/app/page.tsx` 的头像区域添加：
```typescript
<a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
  <Twitter className="w-5 h-5" />
</a>
```

### Q4: 详情页显示"Work Not Found"怎么办？

**A**:
检查 `src/data/works.ts` 中的 `id` 是否正确：
- 确保每个项目的 `id` 是唯一的
- 确保主页的链接 `/work/${work.id}` 与 `id` 匹配

### Q5: 如何在静态构建后测试网站？

**A**:
```bash
# 构建静态文件
pnpm build

# 使用本地服务器预览
npx serve out

# 或使用 Python
python -m http.server 8000 --directory out
```

### Q6: 修改后网站没有更新？

**A**:
1. 检查是否提交并推送了代码：
   ```bash
   git status
   git add .
   git commit -m "Update content"
   git push origin main
   ```
2. 访问 GitHub 仓库的 Actions 标签，查看部署状态
3. 等待 1-3 分钟，刷新页面

## 🚀 部署和更新

### 部署到 GitHub Pages

详见 📘 **[完整部署指南](DEPLOYMENT.md)**

### 更新网站内容

每次修改后的标准流程：

```bash
# 1. 查看修改
git status

# 2. 添加修改的文件
git add .

# 3. 提交（写清楚修改内容）
git commit -m "feat: 添加新的工作项目 'LLM in Healthcare'"

# 4. 推送到 GitHub
git push origin main
```

### 推送的 Git 提交信息规范

使用 Conventional Commits 格式：

```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 修改样式
refactor: 重构代码
chore: 更新依赖
```

### 多人协作

如果多人协作维护网站：

```bash
# 拉取最新代码
git pull origin main

# 创建新分支（可选）
git checkout -b update-content

# 修改内容...

# 提交并推送
git add .
git commit -m "Update: 添加新论文"
git push origin update-content

# 创建 Pull Request（可选）
```

## 📊 性能优化建议

### 1. 图片优化

- 使用 WebP 格式（比 JPG 小 30%）
- 压缩图片：https://tinypng.com/
- 适当尺寸：头像 500x500，其他图片按需

### 2. 代码优化

- 避免在循环中使用大数组
- 使用 useMemo 和 useCallback 优化组件
- 减少不必要的重渲染

### 3. SEO 优化

- 每个页面添加 unique title
- 添加 meta description
- 使用语义化 HTML 标签

## 🔧 高级功能

### 自定义域名

1. 在 `public/` 创建 `CNAME` 文件
2. 写入你的域名：`www.yourdomain.com`
3. 在域名提供商配置 DNS
4. GitHub Pages 会自动配置 SSL 证书

### 添加分析工具

在 `src/app/layout.tsx` 添加 Google Analytics：
```typescript
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
```

### 添加评论功能

使用 [Giscus](https://giscus.app/) 或 [Disqus](https://disqus.com/)：

1. 在 `src/app/work/[id]/page.tsx` 添加评论组件
2. 配置仓库和讨论主题
3. 用户可以在详情页留言

## 📚 进一步学习

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui 组件库](https://ui.shadcn.com)
- [TypeScript 手册](https://www.typescriptlang.org/docs)

## 🆘 获取帮助

如果遇到问题：

1. 查看 📘 **[完整部署指南](DEPLOYMENT.md)**
2. 查看 ⚡ **[快速修改指南](QUICK_GUIDE.md)**
3. 检查 [常见问题](#常见问题)
4. 在 GitHub 创建 Issue

---

**祝你使用愉快！如有任何问题，欢迎提问。** 🎉

# 🎓 学术简历主页 - Academic Resume Homepage

这是基于 [Next.js 16](https://nextjs.org) + [shadcn/ui](https://ui.shadcn.com) 的学术个人主页项目，专为研究人员和学者设计。

## ✨ 项目特点

- 🌐 **中英文双语切换**：支持中文和英文无缝切换
- 🌟 **最新工作展示**：突出展示正在进行的研究项目
- 📄 **详细内容页**：类似博客的阅读体验，支持图表展示
- 📝 **Markdown 文件管理**：使用 .md 文件轻松管理内容（新功能！）
- 👥 **作者机构展示**：详情页显示作者和机构信息（新功能！）
- 🎨 **现代化设计**：美观的蓝紫色渐变配色，玻璃态效果
- 📱 **完全响应式**：完美支持移动端、平板和桌面
- 🌙 **深色模式**：自动跟随系统主题
- ⚡ **性能优化**：快速加载，流畅动画
- 🔍 **SEO 友好**：易于搜索引擎收录

## 🚀 快速开始

### 本地预览

```bash
# 启动开发服务器
pnpm dev

# 或者使用 coze 命令
coze dev
```

访问 [http://localhost:5000](http://localhost:5000) 查看效果。

### 使用 Markdown 管理内容（推荐）

新增功能！现在可以直接使用 Markdown 文件来管理你的论文和工作内容：

1. 在 `content/publications/` 或 `content/works/` 目录下创建 `.md` 文件
2. 编辑文件，添加 Frontmatter 和内容
3. 保存后系统自动加载并生成博客页面

**⚠️ 注意事项**：
- 首次添加或修改文件后，可能需要刷新浏览器或重启开发服务器
- 如果内容没有显示，请检查 API 路由是否正常：访问 `http://localhost:5000/api/works?type=works` 和 `http://localhost:5000/api/works?type=publications`
- 确保文件格式正确，包含所有必填字段

详细说明请查看 📝 **[Markdown 内容管理指南](MARKDOWN_GUIDE.md)**

### 构建生产版本

```bash
pnpm build
```

## 📚 文档导航

- 📘 **[完整部署指南](DEPLOYMENT.md)** - GitHub Pages 部署步骤和配置
- 📖 **[详细内容修改指南](CONTENT_GUIDE.md)** - 如何修改各项内容
- 📝 **[Markdown 内容管理指南](MARKDOWN_GUIDE.md)** - 使用 .md 文件管理内容（推荐！）
- ⚡ **[快速修改指南](QUICK_GUIDE.md)** - 快速定位修改位置
- 🎨 **[功能说明](FEATURES.md)** - 新功能详细介绍
- 📝 **[使用说明](USAGE.md)** - 完整的使用和维护指南

### 新手建议

如果你是第一次使用这个模板，建议按以下顺序阅读：

1. 📘 先看 **[完整部署指南](DEPLOYMENT.md)** - 了解如何部署网站
2. 📝 再看 **[Markdown 内容管理指南](MARKDOWN_GUIDE.md)** - 学习如何用 .md 文件添加内容
3. 📖 需要时查阅 **[详细内容修改指南](CONTENT_GUIDE.md)** - 其他修改方法
4. ⚡ 需要时查阅 **[快速修改指南](QUICK_GUIDE.md)** - 快速找到修改位置

## 📦 部署到 GitHub Pages

### 最简单的方式（推荐）

1. **创建 GitHub 仓库**
   - 仓库名称：`your-username.github.io`
   - 例如：`Yangzhouzhou.github.io`

2. **推送代码到 GitHub**

   ```bash
   # 初始化 git（如果还没有）
   git init

   # 添加远程仓库
   git remote add origin https://github.com/Yangzhouzhou/Yangzhouzhou.github.io.git

   # 提交所有文件
   git add .
   git commit -m "Initial commit: Academic homepage"

   # 推送到 GitHub
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**

   - 进入仓库 Settings > Pages
   - Source 选择：**GitHub Actions**
   - 点击 Save

4. **等待部署完成**

   - 访问仓库的 Actions 标签查看部署进度
   - 通常需要 1-3 分钟
   - 完成后访问：`https://your-username.github.io/`

### 详细步骤

查看 📘 **[完整部署指南](DEPLOYMENT.md)** 获取详细的部署步骤、故障排除和手动部署方法。

## ✏️ 如何修改内容

### 📖 详细教程

查看 📖 **[详细内容修改指南](CONTENT_GUIDE.md)** 获取完整的修改教程，包括：

1. ✏️ **修改个人信息** - 姓名、职位、简介、头像
2. 📚 **添加/修改最新工作** - 项目列表和详细内容
3. 📄 **添加/修改发表论文** - 论文列表和详细信息
4. 🎓 **修改教育背景** - 学历信息
5. 💼 **修改研究经历** - 工作和实习经历
6. 🏆 **修改奖项与荣誉** - 奖项列表
7. 📧 **修改联系方式** - 邮箱、电话、地址等
8. 🔗 **修改网站链接** - GitHub、LinkedIn、Google Scholar
9. 📄 **添加自定义页面** - 创建新的页面
10. 🎨 **常见修改场景** - 主题色、标题、图标等

### 修改位置速查

| 修改内容 | 文件位置 | 优先级 |
|---------|---------|--------|
| **工作和论文** | `src/data/works.ts` | ⭐⭐⭐ 最重要 |
| 个人信息 | `src/app/page.tsx` | ⭐⭐ |
| 中英文翻译 | `src/contexts/LanguageContext.tsx` | ⭐⭐ |
| 教育背景 | `src/app/page.tsx` | ⭐ |
| 研究经历 | `src/app/page.tsx` | ⭐ |
| 联系方式 | `src/app/page.tsx` | ⭐ |
| 网站标题 | `src/app/layout.tsx` | ⭐ |

### 快速修改示例

#### 1. 添加新的工作项目

编辑 `src/data/works.ts`：

```typescript
{
  id: 'work-new',
  title: '你的工作标题',
  titleEn: 'Your Work Title',
  description: '工作描述',
  descriptionEn: 'Work description',
  status: 'ongoing',
  date: '2024-03',
  tags: ['NLP', 'AI'],
  type: 'work',
  abstract: '摘要内容...',
  abstractEn: 'Abstract...',
  methodology: '方法描述...',
  methodologyEn: 'Methodology...',
  // ... 更多字段
}
```

#### 2. 修改个人信息

编辑 `src/contexts/LanguageContext.tsx`（推荐）或 `src/app/page.tsx`：

```typescript
// 在 LanguageContext.tsx 中
zh: {
  about: {
    title: '你的姓名',
    position: '你的职位',
    location: '你的位置',
  }
}

en: {
  about: {
    title: 'Your Name',
    position: 'Your Position',
    location: 'Your Location',
  }
}
```

#### 3. 添加个人头像

1. 将头像图片放到 `public/` 目录
2. 命名为 `avatar.jpg` 或 `avatar.png`
3. 编辑 `src/app/page.tsx`（参考详细指南）

### 更多示例和详细说明

查看 📖 **[详细内容修改指南](CONTENT_GUIDE.md)** 获取：

- ✅ 完整的字段说明
- ✅ 更多修改示例
- ✅ 常见修改场景
- ✅ 最佳实践和技巧
- ✅ 修改检查清单

## 🔄 更新网站

每次修改内容后：

```bash
# 查看修改
git status

# 添加修改
git add .

# 提交（写清楚修改了什么）
git commit -m "Update: 添加新的工作项目"

# 推送到 GitHub
git push origin main
```

GitHub Actions 会自动重新部署，1-3 分钟后网站就会更新。

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx                    # 主页（个人信息、教育、论文等）
│   ├── layout.tsx                  # 根布局和元数据
│   ├── globals.css                 # 全局样式
│   └── work/[id]/page.tsx          # 工作详情页
├── contexts/
│   └── LanguageContext.tsx         # 语言上下文和翻译字典
├── data/
│   └── works.ts                    # 工作和论文数据（重要！）
└── components/
    ├── LanguageToggle.tsx          # 语言切换按钮
    └── ui/                         # shadcn/ui 组件库

.github/
└── workflows/
    └── deploy.yml                  # 自动部署配置

public/                            # 静态资源（图片等）
```

## 🎨 页面结构

### 主页
- 导航栏（含语言切换）
- 个人信息区域（头像、简介、研究兴趣）
- 最新工作（卡片展示）
- 教育背景（时间线）
- 研究经历（时间线）
- 发表论文（列表）
- 奖项荣誉
- 联系方式
- 页脚

### 详情页
- 标题和基本信息
- 下载链接区
- 摘要
- 方法论
- 图表展示
- 实验结果
- 结论
- 参考文献

## 🛠️ 技术栈

- **框架**：Next.js 16 (App Router)
- **UI 组件**：shadcn/ui
- **样式**：Tailwind CSS v4
- **图标**：Lucide React
- **语言**：TypeScript
- **部署**：GitHub Pages + GitHub Actions

## ❓ 常见问题

### 网站显示 404？
- 确保仓库名称格式正确：`your-username.github.io`
- 检查 GitHub Pages 设置是否正确
- 等待几分钟让部署完成

### 修改后网站没有更新？
- 确认已经 `git commit` 并 `git push`
- 查看 GitHub Actions 是否部署成功
- 清除浏览器缓存（Ctrl+F5）

### 如何撤销更改？
```bash
git log --oneline
git reset --hard HEAD~1
git push origin main --force
```

更多问题请查看 📘 **[完整部署指南](DEPLOYMENT.md)**。

## 📞 获取帮助

- 📘 **[完整部署指南](DEPLOYMENT.md)** - 部署相关问题
- ⚡ **[快速修改指南](QUICK_GUIDE.md)** - 修改内容相关问题
- 🎨 **[功能说明](FEATURES.md)** - 功能使用说明
- 📖 GitHub Pages 官方文档：https://docs.github.com/en/pages

## 📄 许可证

MIT License - 可自由使用和修改

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React 框架
- [shadcn/ui](https://ui.shadcn.com/) - UI 组件库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Lucide](https://lucide.dev/) - 图标库

---

**祝你的学术主页越来越精彩！** 🎉

如有问题或建议，欢迎提 Issue 或 PR。

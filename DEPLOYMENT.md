# 🚀 完整部署指南

本指南将帮助你：
1. 将网站部署到 GitHub Pages
2. 更新网站后重新部署
3. 解决部署过程中的常见问题

> 💡 **需要修改内容？** 查看 📖 **[详细内容修改指南](CONTENT_GUIDE.md)**

---

## 📦 第一部分：部署到 GitHub Pages

### 方法一：使用 GitHub Actions 自动部署（推荐）

#### 步骤 1：准备 GitHub 仓库

确保你的 GitHub 仓库名称格式为：`your-username.github.io`

例如：`Yangzhouzhou.github.io`

如果还没有仓库，需要先创建：
1. 访问 https://github.com/new
2. 仓库名填写：`Yangzhouzhou.github.io`（替换为你的用户名）
3. 设置为 Public 或 Private 都可以
4. 点击 Create repository

#### 步骤 2：上传代码到 GitHub

如果你已经在本地有代码：

```bash
# 初始化 git（如果还没有）
cd /workspace/projects
git init

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/Yangzhouzhou/Yangzhouzhou.github.io.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Academic homepage"

# 推送到 GitHub
git branch -M main
git push -u origin main
```

#### 步骤 3：启用 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击顶部的 **Settings** 标签
3. 在左侧菜单中找到并点击 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source** 选择：**GitHub Actions**
   - 会提示 "GitHub Actions is not configured yet"
5. 仓库中已经有 `.github/workflows/deploy.yml` 配置文件，所以无需额外配置
6. 推送代码后，GitHub Actions 会自动运行部署流程

#### 步骤 4：查看部署状态

1. 点击仓库顶部的 **Actions** 标签
2. 你会看到一个名为 "Deploy to GitHub Pages" 的工作流正在运行
3. 点击工作流可以查看详细日志
4. 通常需要 1-3 分钟完成
5. 完成后，状态会变为绿色 ✅

#### 步骤 5：访问网站

部署成功后，访问：`https://yangzhouzhou.github.io/`

（替换为你的用户名）

---

### 方法二：手动构建和部署

如果自动部署不工作，可以使用手动方式：

#### 步骤 1：安装依赖

```bash
cd /workspace/projects
pnpm install
```

#### 步骤 2：构建项目

```bash
pnpm build
```

构建完成后，会在项目根目录生成 `out` 文件夹，里面包含所有静态文件。

#### 步骤 3：部署到 GitHub

选择以下方法之一：

##### 方法 A：使用 gh-pages 工具

```bash
# 安装 gh-pages 工具
pnpm add -D gh-pages

# 部署到 gh-pages 分支
pnpm gh-pages -d out

# 或者部署到 main 分支
pnpm gh-pages -d out -b main
```

##### 方法 B：手动复制并推送

```bash
# 创建临时分支
git checkout -b gh-pages

# 复制构建产物
cp -r out/* .

# 添加并提交
git add .
git commit -m "Deploy to GitHub Pages"

# 推送
git push origin gh-pages

# 切换回主分支
git checkout main
```

#### 步骤 4：在 GitHub 设置中配置

1. 进入仓库 Settings > Pages
2. **Source** 选择：Deploy from a branch
3. **Branch** 选择：`gh-pages`（或你部署的分支）
4. **Directory** 选择：/ (root)
5. 点击 Save

---

## 📝 更新网站内容

### 如何修改网站内容

如果你需要修改网站内容（个人信息、工作项目、论文等），请查看：

📖 **[详细内容修改指南](CONTENT_GUIDE.md)**

该指南包含：
- ✏️ 修改个人信息
- 📚 添加/修改最新工作
- 📄 添加/修改发表论文
- 🎓 修改教育背景
- 💼 修改研究经历
- 🏆 修改奖项与荣誉
- 📧 修改联系方式
- 🎨 常见修改场景

### 提交修改并部署

修改完成后，按照以下步骤提交并部署：

#### 步骤 1：查看修改

```bash
git status
```

#### 步骤 2：添加修改

```bash
git add .
```

#### 步骤 3：提交修改

```bash
# 写清楚你修改了什么
git commit -m "Update: 添加新的工作项目"
```

**提交信息规范**：
- 添加新内容：`Add: 新增论文/工作项目`
- 修改内容：`Update: 修改个人信息`
- 修复问题：`Fix: 修复链接错误`
- 删除内容：`Remove: 删除旧项目`

#### 步骤 4：推送到 GitHub

```bash
git push origin main
```

#### 步骤 5：等待自动部署

GitHub Actions 会自动运行部署流程：
1. 访问仓库的 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流
3. 等待状态变为绿色 ✅（通常 1-3 分钟）
4. 部署完成后访问你的网站

---

## 🎯 快速检查清单

### 部署前检查

- [ ] 修改了个人信息
- [ ] 添加/修改了工作和论文
- [ ] 更新了教育背景和研究经历
- [ ] 检查所有链接是否有效
- [ ] 测试中英文切换功能
- [ ] 本地预览效果正常

### 部署步骤

- [ ] 提交代码：`git add .`、`git commit -m "..."`
- [ ] 推送到 GitHub：`git push origin main`
- [ ] 查看 Actions 状态
- [ ] 等待部署完成（1-3 分钟）
- [ ] 访问网站检查效果

---

## ❓ 常见问题

### Q1: 修改后网站没有更新？

**可能原因**：

1. **浏览器缓存**：尝试强制刷新（Ctrl+Shift+R 或 Cmd+Shift+R）
2. **部署失败**：检查 GitHub Actions 的日志
3. **DNS 缓存**：等待几分钟后再试

**解决方法**：

```bash
# 查看部署状态
git push origin main

# 等待 1-3 分钟后访问 Actions 标签查看状态
```

### Q2: GitHub Actions 部署失败？

**常见原因**：

1. **分支名称错误**：确保仓库名为 `your-username.github.io`
2. **构建错误**：运行 `pnpm build` 查看错误信息
3. **配置文件错误**：检查 `.github/workflows/deploy.yml`

**解决方法**：

```bash
# 本地测试构建
pnpm build

# 如果成功，查看 Actions 日志找到失败原因
# 常见问题：
# - Node.js 版本不兼容
# - 依赖安装失败
# - 静态导出配置错误
```

### Q3: 如何撤销更改？

```bash
# 查看提交历史
git log

# 回退到上一个版本
git reset --hard HEAD~1

# 强制推送
git push origin main --force
```

### Q4: 如何查看网站的访问统计？

**方法 1：使用 GitHub Analytics**

1. 进入仓库 Settings > Pages
2. 滚动到 "Analytics" 部分
3. 点击 "View analytics"

**方法 2：使用 Google Analytics**

1. 注册 Google Analytics 账号
2. 获取跟踪 ID（如：UA-XXXXX-Y）
3. 在 `src/app/layout.tsx` 中添加：

```tsx
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // 添加其他元数据
};
```

然后在 `src/app/layout.tsx` 的 `<body>` 中添加 Google Analytics 脚本。

---

## 📚 参考资源

### 官方文档

- [Next.js 官方文档](https://nextjs.org/docs)
- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [shadcn/ui 文档](https://ui.shadcn.com)

### 相关教程

- [Next.js 部署到 GitHub Pages](https://nextjs.org/docs/deployments/static-exports)
- [使用 GitHub Actions 自动部署](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

### 工具和插件

- [gh-pages](https://www.npmjs.com/package/gh-pages) - 手动部署工具
- [Vercel](https://vercel.com) - 替代部署平台（更简单）

---

## 💡 部署建议

### 定期更新

建议定期更新项目依赖：

```bash
# 更新依赖
pnpm update

# 测试构建
pnpm build

# 如果正常，提交更新
git add .
git commit -m "Update: 更新依赖"
git push origin main
```

### 备份网站

定期备份你的 `out` 目录：

```bash
# 构建后备份
pnpm build
cp -r out out.backup.$(date +%Y%m%d)
```

### 使用自定义域名

如果你想使用自己的域名：

1. 在 `public/` 目录创建 `CNAME` 文件
2. 文件内容：`yourdomain.com`
3. 在域名提供商处配置 DNS（CNAME 记录）

---

祝你部署顺利！🎉

如果遇到问题，请：
1. 查看 [常见问题](#常见问题) 部分
2. 检查 GitHub Actions 日志
3. 查看 [详细内容修改指南](CONTENT_GUIDE.md)

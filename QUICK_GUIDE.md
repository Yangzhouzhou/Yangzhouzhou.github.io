# ⚡ 快速修改指南

本指南帮助你快速找到需要修改的文件和位置。

---

## 📋 文件结构速查

```
src/
├── app/
│   ├── page.tsx           # 主页内容（个人信息、教育、论文等）
│   ├── layout.tsx         # 网站标题和元数据
│   ├── work/[id]/page.tsx # 详情页（一般不需要修改）
│   └── globals.css        # 全局样式（通常不需要修改）
├── contexts/
│   └── LanguageContext.tsx  # 中英文翻译字典
├── data/
│   └── works.ts           # 工作和论文数据（重要！）
└── components/
    └── LanguageToggle.tsx # 语言切换按钮（通常不需要修改）
```

---

## 🎯 常用修改位置

### 1. 修改个人信息

**文件**：`src/app/page.tsx`

**位置**：第 80-150 行左右

**需要修改的内容**：
- 姓名
- 职位
- 位置
- 个人简介（两段）
- 研究兴趣标签

**快速定位**：搜索 `关于我` 或 `个人简介`

---

### 2. 修改教育背景

**文件**：`src/app/page.tsx`

**位置**：第 220-280 行左右

**需要修改的内容**：
- 学位名称
- 大学名称
- 时间
- 研究方向
- 导师姓名

**快速定位**：搜索 `教育背景` 或 `Education`

---

### 3. 修改研究经历

**文件**：`src/app/page.tsx`

**位置**：第 300-360 行左右

**需要修改的内容**：
- 职位名称
- 机构名称
- 时间
- 工作内容列表

**快速定位**：搜索 `研究经历` 或 `Research Experience`

---

### 4. 添加/修改工作和论文 ⭐

**文件**：`src/data/works.ts`

**这是最重要的文件！**

**所有的工作和论文数据都在这里定义。**

**添加新项目的步骤**：

1. 打开 `src/data/works.ts`
2. 复制一个现有的工作或论文对象
3. 修改 `id`（必须唯一）
4. 修改标题、描述、日期等
5. 根据需要添加图表、链接等

**快速定位**：搜索 `worksData` 或 `export const worksData`

---

### 5. 修改联系方式

**文件**：`src/app/page.tsx`

**位置**：第 450-500 行左右

**需要修改的内容**：
- 邮箱地址
- GitHub 用户名
- LinkedIn 链接
- Google Scholar ID

**快速定位**：搜索 `联系方式` 或 `Contact`

---

### 6. 修改中英文翻译

**文件**：`src/contexts/LanguageContext.tsx`

**位置**：第 20-100 行左右

**需要修改的内容**：
- 添加新的翻译键值对
- 修改现有翻译文本

**快速定位**：搜索 `translations` 或 `const translations`

---

### 7. 修改网站标题和描述

**文件**：`src/app/layout.tsx`

**位置**：第 10-25 行左右

**需要修改的内容**：
- 网站标题
- 网站描述
- 关键词

**快速定位**：搜索 `metadata` 或 `export const metadata`

---

## 🔄 修改后的部署流程

### 方式一：使用命令行

```bash
# 1. 进入项目目录
cd /workspace/projects

# 2. 查看修改了哪些文件
git status

# 3. 添加所有修改
git add .

# 4. 提交（写清楚修改了什么）
git commit -m "Update: 添加新的工作项目"

# 5. 推送到 GitHub
git push origin main
```

### 方式二：使用 GitHub 网页界面

1. 访问你的 GitHub 仓库
2. 点击要修改的文件
3. 点击右上角的 ✏️ 编辑按钮
4. 修改内容
5. 滚动到底部，填写提交信息
6. 点击 "Commit changes"

---

## 📝 修改示例

### 示例 1：添加一个新的工作项目

编辑 `src/data/works.ts`，在 `worksData` 数组中添加：

```typescript
{
  id: 'work-llm-chatbot',
  title: '基于大语言模型的智能客服系统',
  titleEn: 'Intelligent Customer Service System Based on LLM',
  description: '开发了一个智能客服系统，能够理解用户问题并提供准确的答案。',
  descriptionEn: 'Developed an intelligent customer service system that can understand user questions and provide accurate answers.',
  status: 'ongoing',
  date: '2024-03',
  tags: ['LLM', 'RAG', 'Customer Service'],
  type: 'work',
  abstract: '本研究提出了一种新型的智能客服系统架构...',
  abstractEn: 'This research proposes a novel intelligent customer service system architecture...',
  methodology: '我们采用了一个三阶段的架构...',
  methodologyEn: 'We adopted a three-stage architecture...',
  results: '在测试集上，系统达到了90%的准确率。',
  resultsEn: 'On the test set, the system achieved 90% accuracy.',
  conclusion: '该系统在实际应用中表现优异。',
  conclusionEn: 'The system performs well in practical applications.',
  links: {
    demo: 'https://demo.example.com',
    code: 'https://github.com/yourusername/llm-chatbot',
  },
}
```

### 示例 2：修改个人简介

编辑 `src/app/page.tsx`，找到个人简介部分：

```tsx
<p className="text-lg leading-relaxed">
  我是一名热情的研究员，专注于<strong>计算机科学</strong>和<strong>人工智能</strong>领域。
  我的研究兴趣集中在机器学习、深度神经网络及其在实际问题中的应用。
  目前，我正在清华大学攻读博士学位，致力于自然语言处理和计算机视觉的前沿研究。
</p>
```

### 示例 3：添加个人头像

1. 将头像图片放到 `public/` 目录
2. 命名为 `avatar.jpg`
3. 编辑 `src/app/page.tsx`，找到头像部分：

```tsx
<div className="w-72 h-72 rounded-2xl overflow-hidden mb-6 shadow-2xl">
  <img
    src="/avatar.jpg"
    alt="Yang Zhou"
    className="w-full h-full object-cover"
  />
</div>
```

---

## ⚠️ 注意事项

### 1. ID 必须唯一

在 `src/data/works.ts` 中，每个项目的 `id` 必须唯一，否则会出错。

**推荐格式**：
- 工作：`work-` + 描述，如 `work-llm-chatbot`
- 论文：`pub-` + 年份 + 编号，如 `pub-2024-01`

### 2. 日期格式

统一使用 `YYYY-MM` 格式，如 `2024-03`。

### 3. 状态设置

- `ongoing`：进行中的项目
- `completed`：已完成的项目

### 4. 类型设置

- `work`：工作项目（会显示在"最新工作"部分）
- `publication`：发表论文（会显示在"发表论文"部分）

### 5. Git 提交信息

建议使用清晰的提交信息：
- `Update: 添加新的工作项目`
- `Fix: 修复教育背景的时间错误`
- `Style: 优化导航栏样式`

---

## 🔍 快速搜索

在编辑器中使用以下关键词快速定位：

| 搜索关键词 | 定位到 |
|-----------|--------|
| `Yang Zhou` | 个人信息 |
| `教育背景` | 教育背景 |
| `研究经历` | 研究经历 |
| `最新工作` | 最新工作部分 |
| `发表论文` | 发表论文 |
| `联系方式` | 联系方式 |
| `worksData` | 工作和论文数据 |
| `translations` | 翻译字典 |
| `metadata` | 网站元数据 |

---

## 💡 提示

1. **先备份**：修改前可以先备份文件
2. **逐步修改**：一次修改一个部分，测试后再继续
3. **保存后刷新**：本地修改后，浏览器会自动刷新（HMR）
4. **查看效果**：确认无误后再推送到 GitHub

---

**需要更多帮助？** 查看 `DEPLOYMENT.md` 获取完整的部署指南！

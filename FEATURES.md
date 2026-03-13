# 新功能说明

## 🎉 最新更新

本次更新为学术简历主页添加了三个重要功能：

### 1. 🌐 中英文切换功能

**功能描述：**
- 页面右上角添加了语言切换按钮
- 支持中文和英文两种语言
- 实时切换，无需刷新页面
- 所有文本内容都支持双语显示

**使用方法：**
- 点击导航栏右侧的"中文/EN"按钮即可切换语言
- 语言设置会在当前会话中保持

**技术实现：**
- 使用 React Context 管理语言状态
- 翻译字典存储在 `src/contexts/LanguageContext.tsx`
- 所有页面文本通过 `t()` 函数获取对应语言的内容

### 2. 🌟 最新工作展示

**功能描述：**
- 在论文之前添加了"最新工作"部分
- 展示正在进行中的研究项目和最新完成的工作
- 卡片式布局，包含项目状态、标签、日期等信息
- 支持点击查看详细信息

**位置：**
- 导航栏中添加了"最新工作"链接
- 主页中位于个人信息之后、教育背景之前

**工作类型：**
- **进行中（Ongoing）**：蓝色标记，当前正在进行的项目
- **已完成（Completed）**：灰色标记，已完成的工作

### 3. 📄 工作/论文详情页

**功能描述：**
- 点击工作或论文可进入详情页面
- 类似博客的阅读体验
- 详细的学术内容展示，包括：
  - 摘要（Abstract）
  - 方法论（Methodology）
  - 结果（Results）
  - 结论（Conclusion）
  - 参考文献（References）
  - 下载链接（Paper、Code、Demo、Poster）
  - 图表展示（Charts & Visualizations）

**详情页结构：**
```
/work/[id]
├── 标题和基本信息（日期、状态、标签）
├── 下载链接区
├── 摘要
├── 方法论
├── 图表展示（如果有）
├── 实验结果
├── 结论
├── 参考文献
└── 返回按钮
```

**图表展示类型：**
- **图片型**：展示系统架构图、流程图等
- **数据图表**：展示性能对比、实验数据等（使用进度条可视化）

## 📝 如何添加新工作/论文

### 方法 1: 修改数据文件

编辑 `src/data/works.ts` 文件，添加新的工作或论文：

```typescript
{
  id: 'work-new',
  title: '新工作标题',
  titleEn: 'New Work Title',
  description: '中文描述',
  descriptionEn: 'English description',
  status: 'ongoing', // 或 'completed'
  date: '2024-03',
  tags: ['标签1', '标签2'],
  type: 'work', // 或 'publication'
  abstract: '中文摘要',
  abstractEn: 'English abstract',
  methodology: '中文方法论',
  methodologyEn: 'English methodology',
  results: '中文结果',
  resultsEn: 'English results',
  conclusion: '中文结论',
  conclusionEn: 'English conclusion',
  references: ['参考文献1', '参考文献2'],
  links: {
    paper: '论文链接',
    code: '代码链接',
    demo: '演示链接',
  },
  charts: [
    {
      type: 'chart',
      title: '图表标题',
      titleEn: 'Chart Title',
      data: {
        labels: ['A', 'B', 'C'],
        values: [10, 20, 30],
      },
    },
  ],
}
```

### 方法 2: 添加翻译

在 `src/contexts/LanguageContext.tsx` 中添加新的翻译键：

```typescript
const translations: Record<Language, Record<string, string>> = {
  zh: {
    'your_new_key': '中文内容',
  },
  en: {
    'your_new_key': 'English content',
  },
};
```

然后在组件中使用：
```tsx
{t('your_new_key')}
```

## 🎨 自定义建议

### 修改语言切换按钮样式
编辑 `src/components/LanguageToggle.tsx`，可以更改按钮的外观和图标。

### 调整最新工作卡片数量
在 `src/app/page.tsx` 中，修改 `.slice(0, 3)` 中的数字来控制显示的工作数量。

### 添加更多图表类型
在 `src/app/work/[id]/page.tsx` 中，扩展 `charts` 的渲染逻辑，支持更多图表类型。

## 🔧 技术细节

### 文件结构
```
src/
├── contexts/
│   └── LanguageContext.tsx    # 语言上下文和翻译字典
├── data/
│   └── works.ts               # 工作和论文数据
├── components/
│   ├── LanguageToggle.tsx     # 语言切换组件
│   └── ui/                    # shadcn/ui 组件
└── app/
    ├── page.tsx               # 主页（已更新）
    └── work/
        └── [id]/
            └── page.tsx       # 详情页（新增）
```

### 状态管理
- 语言状态通过 React Context 在整个应用中共享
- 工作和论文数据存储在 TypeScript 文件中，类型安全

### 路由
- 动态路由 `/work/[id]` 用于展示详情页
- 使用 Next.js 16 的 App Router

## 📱 响应式设计

所有新增功能都支持响应式设计：
- 语言切换按钮在移动端保持可用
- 最新工作卡片在移动端单列显示，桌面端多列显示
- 详情页在移动端自动调整布局

## 🚀 下一步

可以考虑添加的功能：
1. 搜索功能：搜索工作和论文
2. 分类过滤：按研究领域过滤内容
3. 评论系统：允许访问者留言
4. 阅读进度：记录用户的阅读历史
5. 暗黑模式优化：为详情页优化暗黑主题

## 📞 问题反馈

如果在使用过程中遇到问题或建议，欢迎通过以下方式联系：
- GitHub Issues: [项目仓库地址]
- Email: [你的邮箱]

---

**更新日期**：2024年3月
**版本**：v2.0

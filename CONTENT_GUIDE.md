# 📚 详细内容修改指南

本指南将详细说明如何修改网站的各项内容，包括个人信息、最新工作、发表论文、教育背景等。

---

## 📑 目录

1. [修改个人信息](#1-修改个人信息)
2. [添加/修改最新工作](#2-添加修改最新工作)
3. [添加/修改发表论文](#3-添加修改发表论文)
4. [修改教育背景](#4-修改教育背景)
5. [修改研究经历](#5-修改研究经历)
6. [修改奖项与荣誉](#6-修改奖项与荣誉)
7. [修改联系方式](#7-修改联系方式)
8. [修改网站链接](#8-修改网站链接)
9. [添加自定义页面](#9-添加自定义页面)
10. [常见修改场景](#10-常见修改场景)

---

## 1. 修改个人信息

### 1.1 修改姓名和职位

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`Yang Zhou`、`Ph.D.`

**修改位置**（约第 85-100 行）：

```tsx
<section id="about" className="mb-20">
  <div className="grid md:grid-cols-[300px_1fr] gap-10">
    {/* 个人简介 */}
    <div className="space-y-8">
      <div>
        {/* 修改姓名 */}
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-primary/60 bg-clip-text">
          {t('about.title')}  {/* 这里使用翻译，需要在 LanguageContext.tsx 中修改 */}
        </h1>

        {/* 修改职位 */}
        <p className="text-2xl text-muted-foreground mb-5 font-medium">
          {t('about.position')}  {/* 这里使用翻译，需要在 LanguageContext.tsx 中修改 */}
        </p>

        {/* 修改地点 */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{t('about.location')}</span>
        </div>
      </div>

      {/* 修改个人简介 */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          {isZh ? (
            <>
              我是一名热情的研究员，专注于<strong>计算机科学</strong>和<strong>人工智能</strong>领域。
              我的研究兴趣集中在机器学习、深度神经网络及其在实际问题中的应用。
            </>
          ) : (
            <>
              I am a passionate researcher specializing in <strong>Computer Science</strong> and <strong>Artificial Intelligence</strong>.
              My research interests lie in the intersection of machine learning, deep neural networks, and their applications.
            </>
          )}
        </p>
      </div>
    </div>
  </div>
</section>
```

### 1.2 在翻译文件中修改姓名和职位

**文件位置**：`src/contexts/LanguageContext.tsx`

**搜索关键词**：`about:`

**修改位置**（约第 50-70 行）：

```tsx
const translations = {
  zh: {
    nav: {
      about: '关于',
      latest_work: '最新工作',
      publications: '发表论文',
      // ...
    },
    about: {
      title: '杨洲',  // 修改姓名
      position: '研究员 | 博士研究生',  // 修改职位
      location: '中国，北京',  // 修改地点
      research_interests: '研究兴趣',
      // ...
    },
    // ...
  },
  en: {
    nav: {
      about: 'About',
      latest_work: 'Latest Work',
      publications: 'Publications',
      // ...
    },
    about: {
      title: 'Yang Zhou',  // 修改姓名
      position: 'Researcher | PhD Student',  // 修改职位
      location: 'Beijing, China',  // 修改地点
      research_interests: 'Research Interests',
      // ...
    },
    // ...
  },
};
```

### 1.3 修改研究兴趣标签

**文件位置**：`src/contexts/LanguageContext.tsx`

**搜索关键词**：`research:`

**修改位置**（约第 80-120 行）：

```tsx
const translations = {
  zh: {
    research: {
      ml: '机器学习',
      dl: '深度学习',
      nlp: '自然语言处理',
      cv: '计算机视觉',
      llm: '大语言模型',
      ai: '人工智能',
      // 添加新的研究兴趣
      rl: '强化学习',
      data_mining: '数据挖掘',
    },
    // ...
  },
  en: {
    research: {
      ml: 'Machine Learning',
      dl: 'Deep Learning',
      nlp: 'Natural Language Processing',
      cv: 'Computer Vision',
      llm: 'Large Language Models',
      ai: 'Artificial Intelligence',
      // 添加新的研究兴趣
      rl: 'Reinforcement Learning',
      data_mining: 'Data Mining',
    },
    // ...
  },
};
```

**然后在 `src/app/page.tsx` 中添加标签**（约第 145 行）：

```tsx
<div className="flex flex-wrap gap-2">
  {['ml', 'dl', 'nlp', 'cv', 'llm', 'ai', 'rl', 'data_mining'].map((key) => (
    <Badge key={key} variant="secondary" className="text-sm px-3 py-1.5">
      {t(`research.${key}`)}
    </Badge>
  ))}
</div>
```

### 1.4 修改或添加头像

#### 方式 A：使用渐变文字头像（当前方式）

无需修改，会自动显示姓名的首字母。

#### 方式 B：使用真实头像图片

1. **准备头像图片**
   - 推荐尺寸：500x500 像素或更高
   - 支持格式：JPG、PNG、WEBP
   - 建议文件大小：小于 500KB

2. **上传图片**
   - 将图片放到 `public/` 目录
   - 命名为 `avatar.jpg` 或 `avatar.png`

3. **修改代码**
   
   **文件位置**：`src/app/page.tsx`
   
   **搜索关键词**：`w-72 h-72 rounded-2xl`
   
   **找到这段代码**（约第 90-100 行）：
   
   ```tsx
   <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-primary/10">
     <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-600 animate-pulse-soft">
       YZ
     </span>
   </div>
   ```
   
   **替换为**：
   
   ```tsx
   <div className="w-72 h-72 rounded-2xl overflow-hidden mb-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-primary/10">
     <img
       src="/avatar.jpg"
       alt="Profile"
       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
     />
   </div>
   ```

### 1.5 修改社交链接

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`github.com/Yangzhouzhou`

**修改位置**（约第 100-115 行）：

```tsx
<div className="flex gap-3 justify-center md:justify-start">
  {/* GitHub */}
  <a
    href="https://github.com/Yangzhouzhou"  {/* 修改为你的 GitHub 链接 */}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
    aria-label="GitHub"
  >
    <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/your-profile"  {/* 修改为你的 LinkedIn 链接 */}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
  </a>

  {/* Email */}
  <a
    href="mailto:your.email@example.com"  {/* 修改为你的邮箱 */}
    className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
    aria-label="Email"
  >
    <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
  </a>
</div>
```

---

## 2. 添加/修改最新工作

### 2.1 了解工作数据结构

**文件位置**：`src/data/works.ts`

```typescript
export interface WorkItem {
  id: string;              // 唯一标识符（不能重复）
  title: string;           // 中文标题
  titleEn: string;         // 英文标题
  description: string;     // 中文描述（简短，显示在卡片上）
  descriptionEn: string;   // 英文描述
  status: 'ongoing' | 'completed';  // 状态
  date: string;            // 日期（格式：YYYY-MM）
  tags: string[];          // 标签数组
  type: 'work' | 'publication';  // 类型：工作或论文
  // 以下是详细内容（用于详情页）
  abstract?: string;       // 中文摘要
  abstractEn?: string;     // 英文摘要
  methodology?: string;    // 中文方法描述
  methodologyEn?: string;  // 英文方法描述
  results?: string;        // 中文结果描述
  resultsEn?: string;      // 英文结果描述
  conclusion?: string;     // 中文结论
  conclusionEn?: string;   // 英文结论
  references?: string[];   // 参考文献
  links?: {                // 资源链接
    paper?: string;        // 论文链接
    code?: string;         // 代码链接
    demo?: string;         // 演示链接
    poster?: string;       // 海报链接
  };
  charts?: {               // 图表数据
    type: 'image' | 'chart';
    data: any;
    title: string;
    titleEn: string;
  }[];
}
```

### 2.2 添加一个新的工作项目

**文件位置**：`src/data/works.ts`

**在 `worksData` 数组中添加新项**：

```typescript
export const worksData: WorkItem[] = [
  // ... 现有项目 ...

  // 新增项目 - 添加到合适的位置
  {
    id: 'work-new-project',  // 唯一 ID，建议格式：work-{项目名}
    title: '大语言模型在医疗诊断中的应用',
    titleEn: 'LLM Applications in Medical Diagnosis',
    description: '探索大语言模型在医疗诊断领域的应用潜力，开发智能辅助诊断系统。',
    descriptionEn: 'Exploring the potential of LLMs in medical diagnosis, developing intelligent diagnostic assistance systems.',
    status: 'ongoing',  // 'ongoing' 或 'completed'
    date: '2024-03',
    tags: ['LLM', 'Healthcare', 'Medical AI', 'NLP'],
    type: 'work',  // 'work' 会显示在"最新工作"部分
    // 详细内容
    abstract: '本研究提出了一种基于大语言模型的医疗诊断系统，通过结合检索增强生成（RAG）技术和医疗知识图谱，系统能够准确理解患者症状并提供诊断建议。实验结果表明，在多个医疗数据集上，系统达到了 85% 的诊断准确率。',
    abstractEn: 'This research proposes an LLM-based medical diagnosis system that combines Retrieval Augmented Generation (RAG) with medical knowledge graphs. The system can accurately understand patient symptoms and provide diagnostic suggestions. Experimental results show the system achieved 85% diagnostic accuracy on multiple medical datasets.',
    methodology: '我们采用了三阶段架构：1）症状理解与意图识别，使用 BERT 模型进行文本分类；2）相关知识检索，通过向量检索和知识图谱检索相结合；3）诊断建议生成，使用 GPT-4 作为基础模型，结合检索到的医疗知识生成诊断建议。',
    methodologyEn: 'We adopted a three-stage architecture: 1) Symptom understanding and intent recognition using BERT model; 2) Relevant knowledge retrieval combining vector retrieval and knowledge graph retrieval; 3) Diagnostic suggestion generation using GPT-4 as the base model, combined with retrieved medical knowledge.',
    results: '在三个公开医疗数据集上的测试结果：数据集 A（呼吸系统疾病）准确率 87%，数据集 B（消化系统疾病）准确率 83%，数据集 C（心血管疾病）准确率 85%。平均准确率达到 85%，比基线模型提高 12%。',
    resultsEn: 'Test results on three public medical datasets: Dataset A (respiratory diseases) 87% accuracy, Dataset B (digestive diseases) 83% accuracy, Dataset C (cardiovascular diseases) 85% accuracy. Average accuracy reached 85%, a 12% improvement over the baseline model.',
    conclusion: '本研究证明了结合 RAG 技术和知识图谱的大语言模型在医疗诊断领域的巨大潜力。未来的工作将集中在优化检索效率、提升多轮对话能力，以及在更多医疗场景中的应用验证。',
    conclusionEn: 'This study demonstrates the great potential of LLMs combining RAG and knowledge graphs in medical diagnosis. Future work will focus on optimizing retrieval efficiency, enhancing multi-turn dialogue capabilities, and validation in more medical scenarios.',
    // 参考文献
    references: [
      'Smith et al. (2023). Large Language Models in Healthcare: A Survey. Nature Medicine.',
      'Johnson et al. (2024). Knowledge Graphs for Medical Diagnosis. IEEE Transactions on Biomedical Engineering.',
      'Brown et al. (2023). Retrieval-Augmented Generation for Medical Question Answering. JAMIA.',
    ],
    // 资源链接
    links: {
      paper: 'https://arxiv.org/abs/2024.03045',
      code: 'https://github.com/your-username/medical-llm-diagnosis',
      demo: 'https://demo.example.com',
    },
    // 图表数据（可选）
    charts: [
      {
        type: 'chart',
        title: '诊断准确率对比',
        titleEn: 'Diagnostic Accuracy Comparison',
        data: {
          labels: ['Dataset A', 'Dataset B', 'Dataset C', 'Average'],
          values: [87, 83, 85, 85],
        },
      },
    ],
  },
];
```

### 2.3 修改现有工作项目

**文件位置**：`src/data/works.ts`

**找到要修改的项目，直接编辑对应的字段**：

```typescript
{
  id: 'work-1',  // 通过 id 找到项目
  title: '原项目标题',  // 修改这里
  titleEn: 'Original Project Title',
  description: '原描述...',  // 修改这里
  descriptionEn: 'Original description...',
  status: 'ongoing',  // 修改状态：ongoing 或 completed
  date: '2024-01',  // 修改日期
  tags: ['LLM', 'RAG'],  // 修改或添加标签
  // 修改其他字段...
  abstract: '修改摘要内容...',
  // ...
}
```

### 2.4 删除工作项目

**文件位置**：`src/data/works.ts`

**从 `worksData` 数组中删除对应的项目**：

```typescript
export const worksData: WorkItem[] = [
  { id: 'work-1', ... },  // 保留
  // { id: 'work-to-delete', ... },  // 删除这一行
  { id: 'work-2', ... },  // 保留
];
```

### 2.5 修改主页显示的工作数量

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`latestWorks = worksData`

**修改位置**（约第 45 行）：

```typescript
// 获取最新的工作（按日期排序）
const latestWorks = worksData
  .filter((w) => w.status === 'ongoing' || (w.type === 'work' && new Date(w.date) > new Date('2023-06-01')))
  .slice(0, 3);  // 修改这里：数字 3 表示显示 3 个项目
```

---

## 3. 添加/修改发表论文

### 3.1 添加新的论文

**文件位置**：`src/data/works.ts`

**在 `worksData` 数组中添加新项，确保 `type: 'publication'`**：

```typescript
{
  id: 'pub-new-paper',  // 唯一 ID，建议格式：pub-{论文标识}
  title: '基于 Transformer 的多模态情感分析',
  titleEn: 'Transformer-Based Multimodal Sentiment Analysis',
  description: '提出了一种新颖的多模态情感分析方法，结合文本、音频和视觉信息进行情感识别。',
  descriptionEn: 'Proposed a novel multimodal sentiment analysis method that combines text, audio, and visual information for emotion recognition.',
  status: 'completed',  // 论文通常是 completed
  date: '2024-02',
  tags: ['Multimodal', 'Sentiment Analysis', 'Transformer', 'Deep Learning'],
  type: 'publication',  // 关键：设置为 'publication'
  // 详细内容
  abstract: '本文提出了一种基于 Transformer 的多模态情感分析框架，通过跨模态注意力机制融合文本、音频和视觉特征。该框架能够有效捕捉不同模态之间的语义关联，在多个数据集上取得了最先进的性能。',
  abstractEn: 'This paper proposes a Transformer-based multimodal sentiment analysis framework that fuses text, audio, and visual features through cross-modal attention mechanisms. The framework can effectively capture semantic associations between different modalities, achieving state-of-the-art performance on multiple datasets.',
  methodology: '我们设计了多模态编码器，分别处理文本、音频和视觉输入。通过自注意力机制学习模态内特征，使用跨模态注意力机制学习模态间交互。最后，通过融合层进行情感分类。',
  methodologyEn: 'We designed a multimodal encoder to process text, audio, and visual inputs separately. Intra-modal features are learned through self-attention, while inter-modal interactions are learned through cross-modal attention. Finally, sentiment classification is performed through a fusion layer.',
  results: '在 CMU-MOSEI 数据集上，准确率达到 82.3%，比之前的最佳方法提高了 4.5%。在 IEMOCAP 数据集上，F1 分数达到 78.9%。',
  resultsEn: 'On the CMU-MOSEI dataset, accuracy reached 82.3%, a 4.5% improvement over the previous best method. On the IEMOCAP dataset, F1 score reached 78.9%.',
  conclusion: '该方法证明了跨模态注意力机制在情感分析任务中的有效性。未来的工作将探索更复杂的模态融合策略和在更多数据集上的泛化能力。',
  conclusionEn: 'This method demonstrates the effectiveness of cross-modal attention mechanisms in sentiment analysis tasks. Future work will explore more complex modality fusion strategies and generalization capabilities on more datasets.',
  // 参考文献
  references: [
    'Vaswani et al. (2017). Attention Is All You Need. NeurIPS.',
    'Poria et al. (2017). Contextual Attention-Based Multimodal Sentiment Analysis. ACL.',
    'Zadeh et al. (2018). Tensor Fusion Network for Multimodal Sentiment Analysis. AAAI.',
  ],
  // 资源链接
  links: {
    paper: 'https://arxiv.org/abs/2024.02234',
    code: 'https://github.com/your-username/multimodal-sentiment',
    poster: 'https://example.com/poster.pdf',
  },
}
```

### 3.2 修改现有论文

**文件位置**：`src/data/works.ts`

**找到要修改的论文（`type: 'publication'`），编辑对应字段**：

```typescript
{
  id: 'pub-1',
  type: 'publication',  // 确保是 publication
  title: '原论文标题',  // 修改这里
  titleEn: 'Original Paper Title',
  // ... 修改其他字段
}
```

### 3.3 修改 Google Scholar 链接

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`scholar.google.com`

**修改位置**（约第 220 行）：

```tsx
<a
  href="https://scholar.google.com/citations?user=YOUR_ID"  {/* 修改这里：替换 YOUR_ID */}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
>
  {t('publications.view_all')}
  <ArrowUpRight className="w-4 h-4" />
</a>
```

**如何获取你的 Google Scholar ID**：

1. 访问 https://scholar.google.com
2. 点击右上角头像 > "我的个人资料"
3. 查看浏览器地址栏，URL 格式为：`https://scholar.google.com/citations?user=XXXXXXXXXXXXXXXXX`
4. 复制 `user=` 后面的字符，就是你的 ID

---

## 4. 修改教育背景

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`education`

**找到教育背景部分**（约第 270 行）：

```tsx
<section id="education" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <GraduationCap className="w-6 h-6 text-primary" />
    </div>
    {t('education.title')}
  </h2>

  <div className="space-y-6">
    {/* 第一个教育经历 */}
    <div className="border-l-4 border-primary pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>  {/* 修改学位 */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>2021 - Present</span>  {/* 修改时间 */}
        </div>
      </div>
      <p className="text-lg font-medium text-primary mb-3">[Your University Name]</p>  {/* 修改学校 */}
      <p className="text-muted-foreground leading-relaxed">
        研究方向：自然语言处理和大语言模型。<br />  {/* 修改研究方向 */}
        导师：[Advisor Name]  {/* 修改导师 */}
      </p>
    </div>

    {/* 第二个教育经历 */}
    <div className="border-l-4 border-primary/60 pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold">M.S. in Computer Science</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>2018 - 2021</span>
        </div>
      </div>
      <p className="text-lg font-medium text-primary mb-3">[Your University Name]</p>
      <p className="text-muted-foreground leading-relaxed">
        论文：[Thesis Title]<br />
        GPA：[Your GPA]
      </p>
    </div>

    {/* 第三个教育经历 */}
    <div className="border-l-4 border-primary/40 pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold">B.S. in Computer Science</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>2014 - 2018</span>
        </div>
      </div>
      <p className="text-lg font-medium text-primary mb-3">[Your University Name]</p>
      <p className="text-muted-foreground leading-relaxed">
        GPA：[Your GPA] - [Honors/Awards]
      </p>
    </div>
  </div>
</section>
```

### 4.1 添加新的教育经历

```tsx
{/* 新增教育经历 - 复制以下代码块 */}
<div className="border-l-4 border-primary pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
    <h3 className="text-xl font-semibold">你的学位名称</h3>
    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
      <Calendar className="w-4 h-4" />
      <span>开始年份 - 结束年份</span>
    </div>
  </div>
  <p className="text-lg font-medium text-primary mb-3">你的学校名称</p>
  <p className="text-muted-foreground leading-relaxed">
    学院/专业：xxx<br />
    GPA：xxx<br />
    其他信息：xxx
  </p>
</div>
```

---

## 5. 修改研究经历

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`experience`

**找到研究经历部分**（约第 320 行）：

```tsx
<section id="experience" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <Briefcase className="w-6 h-6 text-primary" />
    </div>
    {t('experience.title')}
  </h2>

  <div className="space-y-6">
    {/* 第一个研究经历 */}
    <div className="border-l-4 border-primary pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold">研究实习生</h3>  {/* 修改职位 */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>2023年夏季</span>  {/* 修改时间 */}
        </div>
      </div>
      <p className="text-lg font-medium text-primary mb-3">[Research Lab/Company Name]</p>  {/* 修改机构 */}
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>开发了[特定任务]的新算法</li>  {/* 修改内容 */}
        <li>在[会议/期刊]发表了研究论文</li>
        <li>与[数量]人的研究团队协作</li>
      </ul>
    </div>

    {/* 第二个研究经历 */}
    <div className="border-l-4 border-primary/60 pl-8 pb-6 hover:bg-primary/5 transition-colors rounded-r-lg -ml-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold">研究生研究助理</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0 bg-muted/50 px-3 py-1 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>2021 - Present</span>
        </div>
      </div>
      <p className="text-lg font-medium text-primary mb-3">[University Name], [Lab Name]</p>
      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
        <li>主导[主题]研究项目</li>
        <li>指导[数量]名本科生</li>
        <li>获得[金额]研究经费</li>
      </ul>
    </div>
  </div>
</section>
```

---

## 6. 修改奖项与荣誉

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`awards`

**找到奖项部分**（约第 370 行）：

```tsx
<section id="awards" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <Award className="w-6 h-6 text-primary" />
    </div>
    {t('awards.title')}
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    {[
      { name: '[Award Name]', year: '[Year]' },
      { name: '[Award Name]', year: '[Year]' },
      { name: '[Award Name]', year: '[Year]' },
      { name: '[Award Name]', year: '[Year]' },
    ].map((award, index) => (
      <Card key={index} className="card-enhanced hover-lift">
        <CardContent className="p-5">
          <div className="flex items-center justify-between">
            <span className="font-medium">{award.name}</span>
            <Badge variant="outline">{award.year}</Badge>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>
```

### 6.1 修改奖项内容

**修改数组中的奖项**：

```tsx
{[
  { name: '国家奖学金', year: '2023' },
  { name: 'ACM 竞赛一等奖', year: '2022' },
  { name: '优秀研究生', year: '2021' },
  { name: '最佳论文奖', year: '2023' },
].map((award, index) => (
  // ...
))}
```

### 6.2 添加更多奖项

```tsx
{[
  { name: '国家奖学金', year: '2023' },
  { name: 'ACM 竞赛一等奖', year: '2022' },
  { name: '优秀研究生', year: '2021' },
  { name: '最佳论文奖', year: '2023' },
  { name: '创新奖学金', year: '2022' },  // 新增
  { name: '优秀毕业论文', year: '2021' },  // 新增
  { name: '校长特别奖', year: '2020' },  // 新增
  { name: '学术新星奖', year: '2020' },  // 新增
].map((award, index) => (
  // ...
))}
```

---

## 7. 修改联系方式

**文件位置**：`src/app/page.tsx`

**搜索关键词**：`contact`

**找到联系方式部分**（约第 410 行）：

```tsx
<section id="contact" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <Mail className="w-6 h-6 text-primary" />
    </div>
    {t('contact.title')}
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {/* 邮箱 */}
    <Card className="card-enhanced hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t('contact.email')}</p>
            <a href="mailto:your.email@example.com" className="text-lg font-medium hover:text-primary transition-colors">
              your.email@example.com  {/* 修改邮箱 */}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>

    {/* 位置 */}
    <Card className="card-enhanced hover-lift">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">{t('contact.location')}</p>
            <p className="text-lg font-medium">
              Beijing, China  {/* 修改位置 */}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
```

### 7.1 添加更多联系方式（如电话、地址等）

```tsx
<div className="grid md:grid-cols-2 gap-6">
  {/* 邮箱 */}
  <Card className="card-enhanced hover-lift">
    <CardContent className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{t('contact.email')}</p>
          <a href="mailto:your.email@example.com" className="text-lg font-medium hover:text-primary transition-colors">
            your.email@example.com
          </a>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* 电话 - 新增 */}
  <Card className="card-enhanced hover-lift">
    <CardContent className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
          <Phone className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">电话</p>
          <a href="tel:+86-xxx-xxxx-xxxx" className="text-lg font-medium hover:text-primary transition-colors">
            +86-xxx-xxxx-xxxx
          </a>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* 位置 */}
  <Card className="card-enhanced hover-lift">
    <CardContent className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{t('contact.location')}</p>
          <p className="text-lg font-medium">
            Beijing, China
          </p>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* 办公室 - 新增 */}
  <Card className="card-enhanced hover-lift">
    <CardContent className="p-6">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 rounded-lg">
          <Building2 className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">办公室</p>
          <p className="text-lg font-medium">
            XX 大学 XX 楼 XXX 室
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
```

**注意**：需要导入新增的图标：

```tsx
import { Mail, MapPin, Phone, Building2, ... } from 'lucide-react';
```

---

## 8. 修改网站链接

### 8.1 修改 GitHub 链接

在多个地方修改 GitHub 链接：

**位置 1：主页头像下的社交链接**（`src/app/page.tsx`，约第 100 行）：

```tsx
<a
  href="https://github.com/Yangzhouzhou"  {/* 修改 */}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
  aria-label="GitHub"
>
  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
</a>
```

**位置 2：工作项目中的 GitHub 链接**（在 `src/data/works.ts` 中）：

```typescript
links: {
  code: 'https://github.com/Yangzhouzhou/project-name',  {/* 修改 */}
}
```

### 8.2 修改 LinkedIn 链接

**文件位置**：`src/app/page.tsx`（约第 100 行）：

```tsx
<a
  href="https://linkedin.com/in/your-profile"  {/* 修改 */}
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
  aria-label="LinkedIn"
>
  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
</a>
```

### 8.3 修改 Google Scholar 链接

**文件位置**：`src/app/page.tsx`（约第 220 行）：

```tsx
<a
  href="https://scholar.google.com/citations?user=YOUR_ID"  {/* 修改 YOUR_ID */}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
>
  {t('publications.view_all')}
  <ArrowUpRight className="w-4 h-4" />
</a>
```

---

## 9. 添加自定义页面

如果你想添加额外的页面（如关于页、资源页等）：

### 9.1 创建新页面

**步骤 1：在 `src/app` 目录下创建新文件夹**

```bash
mkdir -p src/app/about
```

**步骤 2：创建页面文件**

创建 `src/app/about/page.tsx`：

```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">关于我</h1>
        <p className="text-lg leading-relaxed">
          这是关于页面的内容...
        </p>
      </main>
    </div>
  );
}
```

**步骤 3：在导航栏中添加链接**

**文件位置**：`src/app/page.tsx`（约第 30 行）：

```tsx
<div className="hidden md:flex gap-6 text-sm font-medium">
  <a href="#about" className="hover:text-primary transition-colors relative group">
    {t('nav.about')}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
  </a>
  <a href="#latest-work" className="hover:text-primary transition-colors relative group">
    {t('nav.latest_work')}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
  </a>
  {/* 添加新链接 */}
  <a href="/about" className="hover:text-primary transition-colors relative group">
    更多
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
  </a>
</div>
```

---

## 10. 常见修改场景

### 场景 1：修改网站主题色

**文件位置**：`src/app/globals.css`

**搜索关键词**：`--primary`

**修改 CSS 变量**：

```css
:root {
  --primary: 190 100% 50%;  /* 修改主色调（HSL 格式） */
  --primary-foreground: 0 0% 100%;
  /* ... */
}
```

**HSL 颜色格式说明**：
- 第一个数字：色相（0-360）
  - 0 = 红色，120 = 绿色，240 = 蓝色
- 第二个数字：饱和度（0-100%）
- 第三个数字：亮度（0-100%）

### 场景 2：修改网站标题

**文件位置**：`src/app/layout.tsx`

**搜索关键词**：`<title>`

```tsx
export const metadata: Metadata = {
  title: 'Yang Zhou - Academic Homepage',  {/* 修改这里 */}
  description: 'Researcher specializing in AI and NLP',
};
```

### 场景 3：修改网页图标（Favicon）

1. 准备一个 32x32 或 64x64 的 PNG/ICO 文件
2. 将文件命名为 `favicon.ico`
3. 放到 `public/` 目录
4. 重启开发服务器

### 场景 4：添加自定义 CSS

**文件位置**：`src/app/globals.css`

**在文件末尾添加**：

```css
/* 自定义样式 */
.my-custom-class {
  /* 你的样式 */
}

/* 响应式 */
@media (max-width: 768px) {
  .my-custom-class {
    /* 移动端样式 */
  }
}
```

### 场景 5：修改动画效果

**文件位置**：`src/app/globals.css`

**搜索关键词**：`@keyframes`

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 修改动画时长或效果 */
.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;  {/* 修改 0.6s 为其他值 */}
}
```

---

## 📝 修改检查清单

在完成修改后，建议检查以下内容：

- [ ] 所有链接都能正常打开
- [ ] 中文和英文翻译都正确
- [ ] 图片都能正常显示
- [ ] 响应式布局在不同设备上正常
- [ ] 详情页内容完整
- [ ] 颜色和样式符合预期
- [ ] 运行 `pnpm build` 确保没有错误

---

## 💡 最佳实践

1. **定期备份**：在修改前备份关键文件
2. **使用版本控制**：使用 Git 追踪修改历史
3. **测试预览**：每次修改后本地预览效果
4. **渐进式修改**：一次修改一个部分，便于定位问题
5. **参考现有代码**：复制现有代码结构进行修改

---

## ❓ 遇到问题？

如果遇到问题，请：

1. 检查浏览器控制台的错误信息
2. 确保所有文件路径正确
3. 检查代码语法是否正确
4. 查看部署文档（DEPLOYMENT.md）
5. 查看快速指南（QUICK_GUIDE.md）

---

祝你的学术主页搭建顺利！🎉

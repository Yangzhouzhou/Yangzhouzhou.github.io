# 📝 使用 Markdown 文件管理内容

本指南将教你如何使用 Markdown 文件来管理你的论文和工作项目内容。

---

## 📚 目录

1. [为什么使用 Markdown 文件](#为什么使用-markdown-文件)
2. [文件夹结构](#文件夹结构)
3. [Markdown 文件格式](#markdown-文件格式)
4. [添加新内容](#添加新内容)
5. [Frontmatter 字段说明](#frontmatter-字段说明)
6. [Markdown 内容规范](#markdown-内容规范)
7. [示例文件](#示例文件)

---

## 为什么使用 Markdown 文件

使用 Markdown 文件管理内容有以下优势：

✅ **内容与代码分离**：直接编辑 Markdown 文件，无需修改代码
✅ **易于维护**：使用熟悉的 Markdown 语法
✅ **自动加载**：系统自动读取并生成博客内容
✅ **版本控制友好**：Git 可以更好地追踪内容变化
✅ **支持富文本**：支持标题、列表、代码块等丰富格式

---

## 文件夹结构

在项目根目录下创建以下文件夹结构：

```
your-project/
├── content/
│   ├── publications/      # 发表论文文件夹
│   │   ├── pub-1.md
│   │   ├── pub-2.md
│   │   └── pub-3.md
│   └── works/            # 最新工作文件夹
│       ├── work-1.md
│       ├── work-2.md
│       └── work-3.md
```

**文件命名规范**：
- 论文：`pub-{标识}.md`，例如：`pub-llm-healthcare.md`
- 工作：`work-{标识}.md`，例如：`work-qa-system.md`

---

## Markdown 文件格式

每个 Markdown 文件由两部分组成：

### 1. Frontmatter（元数据）

在文件顶部使用 `---` 包围的 YAML 格式元数据：

```yaml
---
title: "论文标题"
titleEn: "Paper Title"
authors:
  - "作者1"
  - "作者2"
institutions:
  - "机构1"
  - "机构2"
date: "2024-01"
tags:
  - "NLP"
  - "AI"
type: "publication"
status: "completed"
description: "简短描述"
descriptionEn: "Short description"
links:
  paper: "https://..."
  code: "https://..."
---
```

### 2. Markdown 内容

Frontmatter 下方是正常的 Markdown 内容：

```markdown
# 摘要

摘要内容...

# Abstract

Abstract content...

# 方法

方法描述...

# Results

结果描述...
```

---

## 添加新内容

### 步骤 1：创建新的 Markdown 文件

#### 添加新的论文

在 `content/publications/` 目录下创建新文件：

```bash
# Linux/Mac
touch content/publications/pub-new-paper.md

# Windows
echo. > content/publications\pub-new-paper.md
```

#### 添加新的工作

在 `content/works/` 目录下创建新文件：

```bash
# Linux/Mac
touch content/works/work-new-project.md

# Windows
echo. > content/works\work-new-project.md
```

### 步骤 2：编辑文件内容

打开新创建的文件，添加 Frontmatter 和内容：

```markdown
---
title: "大语言模型在医疗诊断中的应用"
titleEn: "LLM Applications in Medical Diagnosis"
authors:
  - "杨洲"
  - "张三"
institutions:
  - "北京大学"
  - "清华大学"
date: "2024-03"
tags:
  - "LLM"
  - "Healthcare"
  - "Medical AI"
type: "publication"
status: "completed"
description: "探索大语言模型在医疗诊断领域的应用潜力"
descriptionEn: "Exploring the potential of LLMs in medical diagnosis"
links:
  paper: "https://arxiv.org/abs/2024.xxxxx"
  code: "https://github.com/username/project"
---

# 摘要

本研究提出了一种基于大语言模型的医疗诊断系统...

# Abstract

This research proposes an LLM-based medical diagnosis system...

# 方法

我们采用了...

# Methodology

We adopted...

# 结果

实验结果...

# Results

Experimental results...

# 结论

本研究证明了...

# Conclusion

This study demonstrates...

# 参考文献

1. Smith et al. (2023). Title.
2. Johnson et al. (2024). Title.

# References

1. Smith et al. (2023). Title.
2. Johnson et al. (2024). Title.
```

### 步骤 3：自动加载

保存文件后，系统会自动：
1. 读取 Markdown 文件
2. 解析 Frontmatter 和内容
3. 生成博客页面
4. 在主页显示新的论文/工作

无需修改任何代码！

---

## Frontmatter 字段说明

### 必填字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `title` | string | 中文标题 | "大语言模型应用" |
| `titleEn` | string | 英文标题 | "LLM Applications" |
| `date` | string | 日期（YYYY-MM） | "2024-01" |
| `tags` | string[] | 标签数组 | ["NLP", "AI"] |
| `type` | string | 类型：`work` 或 `publication` | "publication" |
| `status` | string | 状态：`ongoing` 或 `completed` | "completed" |

### 可选字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `authors` | string[] | 作者列表 | ["张三", "李四"] |
| `institutions` | string[] | 机构列表 | ["北京大学", "MIT"] |
| `description` | string | 中文描述（简短） | "探索LLM的应用" |
| `descriptionEn` | string | 英文描述（简短） | "Exploring LLM apps" |
| `links` | object | 资源链接 | 见下方说明 |

### links 字段说明

```yaml
links:
  paper: "https://arxiv.org/abs/xxxx"    # 论文链接
  code: "https://github.com/xxx"         # 代码链接
  demo: "https://demo.example.com"       # 演示链接
  poster: "https://example.com/poster.pdf" # 海报链接
```

---

## Markdown 内容规范

### 推荐的章节结构

#### 论文

```markdown
# 摘要
# Abstract
# 方法
# Methodology
# 结果
# Results
# 结论
# Conclusion
# 参考文献
# References
```

#### 工作

```markdown
# 摘要
# Abstract
# 方法
# Methodology
# 结果
# Results
# 结论
# Conclusion
# 参考文献
# References
```

### Markdown 语法示例

```markdown
# 标题（Heading 1）
## 标题（Heading 2）
### 标题（Heading 3）

**粗体文本**
*斜体文本*
`行内代码`

- 列表项 1
- 列表项 2
  - 子项 2.1
  - 子项 2.2

1. 有序列表项 1
2. 有序列表项 2

> 引用文本

[链接文字](https://example.com)

![图片描述](/path/to/image.jpg)

---

```代码块
代码内容
```
```

---

## 示例文件

### 示例 1：论文（Publication）

文件：`content/publications/pub-novel-nlp.md`

```markdown
---
title: "A Novel Approach to NLP Tasks"
titleEn: "A Novel Approach to NLP Tasks"
authors:
  - "Yang Zhou"
  - "John Smith"
institutions:
  - "Peking University"
  - "MIT"
date: "2023-05"
tags:
  - "NLP"
  - "Deep Learning"
  - "Transformers"
type: "publication"
status: "completed"
description: "提出了一种新颖的自然语言处理方法"
descriptionEn: "Proposed a novel NLP method"
links:
  paper: "https://arxiv.org/abs/2305.xxxxx"
  code: "https://github.com/username/nlp-paper"
---

# 摘要

本文提出了一种基于Transformer的新型架构，通过引入自适应注意力机制，提高了模型在长文本处理上的性能。

# Abstract

This paper proposes a novel Transformer-based architecture that improves model performance on long-text processing by introducing adaptive attention mechanisms.

# 方法

我们在标准Transformer基础上，引入了位置感知的注意力权重和稀疏注意力机制。

## 主要创新点

1. **自适应注意力机制**：根据输入复杂度动态调整权重
2. **稀疏注意力模式**：减少不必要的计算
3. **位置感知编码**：增强长距离依赖捕捉

# Methodology

Building on the standard Transformer, we introduced position-aware attention weights and sparse attention mechanisms.

## Key Innovations

1. **Adaptive Attention**: Dynamically adjusts weights based on input complexity
2. **Sparse Attention Pattern**: Reduces unnecessary computations
3. **Position-Aware Encoding**: Enhances long-distance dependency capture

# 结果

在GLUE基准测试上，平均得分达到89.2%，比BERT基线高4.5%。

## 性能对比

- MNLI-m: 90.1%
- QQP: 89.8%
- QNLI: 91.2%

# Results

On the GLUE benchmark, the average score reached 89.2%, 4.5% higher than the BERT baseline.

## Performance Comparison

- MNLI-m: 90.1%
- QQP: 89.8%
- QNLI: 91.2%

# 结论

该方法在保持模型性能的同时显著提高了计算效率，为实际应用提供了可行方案。

# Conclusion

This method significantly improves computational efficiency while maintaining model performance.

# 参考文献

1. Devlin et al. (2019). BERT: Pre-training of Deep Bidirectional Transformers.
2. Vaswani et al. (2017). Attention Is All You Need.
```

### 示例 2：工作（Work）

文件：`content/works/work-qa-system.md`

```markdown
---
title: "基于大语言模型的智能问答系统"
titleEn: "Intelligent QA System Based on LLMs"
authors:
  - "杨洲"
  - "张三"
institutions:
  - "北京大学"
date: "2024-01"
tags:
  - "LLM"
  - "RAG"
  - "Knowledge Graph"
type: "work"
status: "ongoing"
description: "开发智能问答系统"
descriptionEn: "Developing intelligent QA system"
links:
  code: "https://github.com/username/qa-system"
  demo: "https://demo.example.com"
---

# 摘要

本研究提出了一种新型的智能问答系统架构，结合了检索增强生成（RAG）技术和知识图谱。

# Abstract

This research proposes a novel intelligent QA system architecture combining RAG and knowledge graphs.

# 方法

我们采用三阶段架构：问题理解、知识检索、答案生成。

## 架构设计

1. **问题理解模块**：BERT 分类和意图识别
2. **检索模块**：向量数据库 + 知识图谱
3. **生成模块**：GPT-4 生成答案

# Methodology

We adopted a three-stage architecture: question understanding, knowledge retrieval, and answer generation.

## Architecture Design

1. **Question Understanding Module**: BERT for classification and intent recognition
2. **Retrieval Module**: Vector database + knowledge graph
3. **Generation Module**: GPT-4 for answer generation

# 结果

在Natural Questions数据集上，准确率达到75%，比基线提高10%。

## 性能指标

- EM (Exact Match): 75.2%
- F1 Score: 83.5%

# Results

On the Natural Questions dataset, accuracy reached 75%, a 10% improvement over baseline.

## Performance Metrics

- EM (Exact Match): 75.2%
- F1 Score: 83.5%

# 结论

本研究展示了RAG与知识图谱结合的巨大潜力。

# Conclusion

This study demonstrates the great potential of combining RAG with knowledge graphs.

# 参考文献

1. Lewis et al. (2020). Retrieval-Augmented Generation.
2. Chen et al. (2023). Knowledge Graphs for NLP.
```

---

## 💡 最佳实践

### 1. 文件命名

- 使用英文短横线命名：`pub-novel-nlp.md`
- 避免使用空格和特殊字符
- 文件名应简洁且有意义

### 2. 内容组织

- 摘要应简明扼要（1-2段）
- 方法部分详细描述技术细节
- 结果部分使用数据支撑
- 结论部分总结贡献和未来工作

### 3. 多语言支持

- 所有主要章节都提供中英文版本
- Frontmatter 中的 `title` 和 `titleEn` 必须对应
- 内容中的中文和英文章节要对应

### 4. 格式规范

- 使用 Markdown 标准语法
- 代码块使用三反引号包裹
- 链接使用描述性文字
- 图片使用相对路径（放在 `public/` 目录）

### 5. 版本控制

- 每次修改后提交到 Git
- 使用清晰的提交信息：
  - `Add: 新增论文 pub-llm-healthcare.md`
  - `Update: 更新 work-qa-system.md`
  - `Fix: 修复 pub-nlp.md 中的链接错误`

---

## 🔄 内容更新流程

### 修改现有内容

1. 打开对应的 `.md` 文件
2. 修改 Frontmatter 或内容
3. 保存文件
4. 提交并推送：
   ```bash
   git add content/
   git commit -m "Update: 更新论文 pub-nlp.md"
   git push origin main
   ```

### 删除内容

1. 删除对应的 `.md` 文件：
   ```bash
   rm content/publications/pub-old-paper.md
   ```
2. 提交并推送：
   ```bash
   git add content/
   git commit -m "Remove: 删除旧论文 pub-old-paper.md"
   git push origin main
   ```

---

## ❓ 常见问题

### Q1: 如何添加图片？

1. 将图片放到 `public/images/` 目录
2. 在 Markdown 中引用：
   ```markdown
   ![图片描述](/images/figure1.jpg)
   ```

### Q2: Frontmatter 写错了怎么办？

系统会忽略错误的 Frontmatter 字段，不会导致崩溃。检查语法：
- 冒号后要有空格
- 列表项前要有 `- `
- 字符串建议用引号包裹

### Q3: 如何添加数学公式？

使用 LaTeX 语法：

```markdown
行内公式：$E = mc^2$

块级公式：
$$
\sum_{i=1}^{n} x_i = x_1 + x_2 + \dots + x_n
$$
```

### Q4: 内容没有显示？

检查以下几点：
1. 文件是否在正确的文件夹（`content/publications/` 或 `content/works/`）
2. Frontmatter 格式是否正确
3. `type` 字段是否设置正确（`work` 或 `publication`）
4. 查看浏览器控制台是否有错误

---

## 📚 相关文档

- [详细内容修改指南](CONTENT_GUIDE.md) - 其他内容修改方法
- [部署指南](DEPLOYMENT.md) - 如何部署网站
- [快速指南](QUICK_GUIDE.md) - 快速定位修改位置

---

祝你使用愉快！🎉

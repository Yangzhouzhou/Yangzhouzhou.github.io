import { loadMarkdownFiles, ParsedContent } from '@/lib/content-loader';
import { WorkItem } from './works';
import path from 'path';

/**
 * 从 ParsedContent 转换为 WorkItem
 * @param content 解析的内容
 * @returns WorkItem 对象
 */
function convertToWorkItem(content: ParsedContent): WorkItem {
  return {
    id: content.id,
    title: content.title,
    titleEn: content.titleEn,
    description: content.description || content.sections[0]?.content || '',
    descriptionEn: content.descriptionEn || content.sections[0]?.content || '',
    authors: content.authors,
    institutions: content.institutions,
    status: content.status,
    date: content.date,
    tags: content.tags,
    type: content.type,
    // 从章节中提取详细内容
    abstract: getSection(content, '摘要', 'Abstract'),
    abstractEn: getSection(content, 'Abstract', '摘要'),
    methodology: getSection(content, '方法', 'Methodology', 'Method'),
    methodologyEn: getSection(content, 'Methodology', 'Method', '方法'),
    results: getSection(content, '结果', 'Results', 'Result'),
    resultsEn: getSection(content, 'Results', 'Result', '结果'),
    conclusion: getSection(content, '结论', 'Conclusion'),
    conclusionEn: getSection(content, 'Conclusion', '结论'),
    references: extractReferences(content),
    links: content.links,
  };
}

/**
 * 从章节中获取内容
 * @param content 解析的内容
 * @param keywords 关键词列表（按优先级）
 * @returns 章节内容
 */
function getSection(content: ParsedContent, ...keywords: string[]): string | undefined {
  for (const keyword of keywords) {
    const section = content.sections.find((s) =>
      s.heading.toLowerCase().includes(keyword.toLowerCase())
    );
    if (section) {
      return section.content;
    }
  }
  return undefined;
}

/**
 * 提取参考文献
 * @param content 解析的内容
 * @returns 参考文献数组
 */
function extractReferences(content: ParsedContent): string[] | undefined {
  const refsSection = content.sections.find((s) =>
    s.heading.toLowerCase().includes('reference') ||
    s.heading.toLowerCase().includes('参考') ||
    s.heading.toLowerCase().includes('bibliography')
  );

  if (!refsSection) {
    return undefined;
  }

  // 解析参考文献列表
  const lines = refsSection.content.split('\n');
  const refs: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    // 跳过空行和标题
    if (trimmed && !trimmed.startsWith('#')) {
      refs.push(trimmed);
    }
  }

  return refs.length > 0 ? refs : undefined;
}

/**
 * 加载所有内容（从 .md 文件和 works.ts 合并）
 * @returns WorkItem 数组
 */
export function loadAllWorks(): WorkItem[] {
  const works: WorkItem[] = [];

  // 1. 加载 publications 文件夹中的 .md 文件
  const pubDir = path.join(process.cwd(), 'content', 'publications');
  const publications = loadMarkdownFiles(pubDir);
  publications.forEach((content) => {
    works.push(convertToWorkItem(content));
  });

  // 2. 加载 works 文件夹中的 .md 文件
  const worksDir = path.join(process.cwd(), 'content', 'works');
  const projectWorks = loadMarkdownFiles(worksDir);
  projectWorks.forEach((content) => {
    works.push(convertToWorkItem(content));
  });

  // 3. 如果没有 .md 文件，返回默认数据（从 works.ts 导入）
  // 这样可以保持向后兼容
  if (works.length === 0) {
    const { worksData } = require('./works');
    return worksData;
  }

  // 按日期排序
  works.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return works;
}

/**
 * 获取单个内容
 * @param id 内容 ID
 * @returns WorkItem 对象或 undefined
 */
export function getWorkById(id: string): WorkItem | undefined {
  const allWorks = loadAllWorks();
  return allWorks.find((w) => w.id === id);
}

/**
 * 获取所有工作（type = 'work'）
 * @returns WorkItem 数组
 */
export function getWorks(): WorkItem[] {
  return loadAllWorks().filter((w) => w.type === 'work');
}

/**
 * 获取所有论文（type = 'publication'）
 * @returns WorkItem 数组
 */
export function getPublications(): WorkItem[] {
  return loadAllWorks().filter((w) => w.type === 'publication');
}

/**
 * 生成静态参数（用于 Next.js 静态导出）
 * @returns 参数数组
 */
export function generateWorkParams() {
  const allWorks = loadAllWorks();
  return allWorks.map((work) => ({
    id: work.id,
  }));
}

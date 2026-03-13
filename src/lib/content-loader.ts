import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

/**
 * Markdown 文件的 Frontmatter 类型
 */
export interface ContentFrontmatter {
  title: string;
  titleEn: string;
  authors?: string[];
  institutions?: string[];
  date: string;
  tags: string[];
  type: 'work' | 'publication';
  status: 'ongoing' | 'completed';
  description?: string;
  descriptionEn?: string;
  links?: {
    paper?: string;
    code?: string;
    demo?: string;
    poster?: string;
  };
}

/**
 * 解析的 Markdown 内容
 */
export interface ParsedContent extends ContentFrontmatter {
  id: string;
  content: string;
  sections: {
    heading: string;
    content: string;
  }[];
}

/**
 * 解析 Markdown 文件
 * @param filePath 文件路径
 * @returns 解析后的内容
 */
export function parseMarkdownFile(filePath: string): ParsedContent {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // 基础校验：没有必要的 frontmatter 时直接跳过该文件
  if (
    !data ||
    typeof data.title !== 'string' ||
    typeof data.titleEn !== 'string' ||
    typeof data.date !== 'string' ||
    !Array.isArray(data.tags) ||
    (data.type !== 'work' && data.type !== 'publication') ||
    (data.status !== 'ongoing' && data.status !== 'completed')
  ) {
    throw new Error(
      `Invalid frontmatter in "${path.basename(filePath)}": title/titleEn/date/tags/type/status are required.`
    );
  }

  // 提取 id（从文件名）
  const id = path.basename(filePath, '.md');

  // 解析内容为章节
  const sections = parseContentSections(content);

  // 如果没有 description，从内容中提取
  const description = (data.description as string) || extractDescription(content);
  const descriptionEn = (data.descriptionEn as string) || extractDescription(content);

  return {
    id,
    title: data.title as string,
    titleEn: data.titleEn as string,
    authors: (Array.isArray(data.authors) ? data.authors : []) as string[],
    institutions: (Array.isArray(data.institutions) ? data.institutions : []) as string[],
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    type: data.type as 'work' | 'publication',
    status: data.status as 'ongoing' | 'completed',
    description,
    descriptionEn,
    links: data.links as any,
    content,
    sections,
  };
}

/**
 * 解析 Markdown 内容为章节
 * @param content Markdown 内容
 * @returns 章节数组
 */
function parseContentSections(content: string): { heading: string; content: string }[] {
  const sections: { heading: string; content: string }[] = [];
  const lines = content.split('\n');
  let currentHeading = '';
  let currentContent: string[] = [];

  for (const line of lines) {
    // 检测标题（## 开头的）
    if (line.startsWith('## ')) {
      // 保存前一个章节
      if (currentHeading || currentContent.length > 0) {
        sections.push({
          heading: currentHeading,
          content: currentContent.join('\n').trim(),
        });
      }

      // 开始新章节
      currentHeading = line.substring(3).trim();
      currentContent = [];
    } else {
      currentContent.push(line);
    }
  }

  // 保存最后一个章节
  if (currentHeading || currentContent.length > 0) {
    sections.push({
      heading: currentHeading,
      content: currentContent.join('\n').trim(),
    });
  }

  return sections;
}

/**
 * 从内容中提取描述（取第一段非标题文本）
 * @param content Markdown 内容
 * @returns 描述文本
 */
function extractDescription(content: string): string {
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // 跳过空行、标题、分隔线
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---')) {
      return trimmed.substring(0, 150); // 限制长度
    }
  }
  return '';
}

/**
 * 加载指定目录下的所有 Markdown 文件
 * @param directory 目录路径
 * @returns 解析后的内容数组
 */
export function loadMarkdownFiles(directory: string): ParsedContent[] {
  const contents: ParsedContent[] = [];

  // 检查目录是否存在
  if (!fs.existsSync(directory)) {
    return contents;
  }

  // 读取目录中的所有文件
  const files = fs.readdirSync(directory);

  // 过滤出 .md 文件
  const mdFiles = files.filter((file) => file.endsWith('.md'));

  // 解析每个文件
  for (const file of mdFiles) {
    const filePath = path.join(directory, file);
    try {
      const parsed = parseMarkdownFile(filePath);
      contents.push(parsed);
    } catch (error) {
      console.error(`Error parsing file ${file}:`, error);
    }
  }

  // 按日期排序（最新的在前）
  contents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return contents;
}

/**
 * 根据章节名称获取特定章节内容
 * @param content 解析的内容
 * @param sectionName 章节名称（如 "摘要"、"Abstract"）
 * @returns 章节内容
 */
export function getSectionContent(content: ParsedContent, sectionName: string): string | undefined {
  const section = content.sections.find((s) =>
    s.heading.toLowerCase() === sectionName.toLowerCase() ||
    s.heading.toLowerCase().includes(sectionName.toLowerCase())
  );
  return section?.content;
}

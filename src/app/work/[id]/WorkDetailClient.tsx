'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { WorkItem } from '@/data/works';
import { ArrowLeft, Calendar, Tag, Download, ExternalLink, Github, BarChart, FileText, Share2, BookOpen, Lightbulb, TrendingUp, CheckCircle, Copy, Users, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface WorkDetailClientProps {
  work: WorkItem;
}

export default function WorkDetailClient({ work }: WorkDetailClientProps) {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const isZh = language === 'zh';
  const title = isZh ? work.title : work.titleEn;
  const description = isZh ? work.description : work.descriptionEn;
  const abstract = isZh ? work.abstract : work.abstractEn;
  const methodology = isZh ? work.methodology : work.methodologyEn;
  const results = isZh ? work.results : work.resultsEn;
  const conclusion = isZh ? work.conclusion : work.conclusionEn;

  // 生成 Markdown 内容
  const generateMarkdown = () => {
    const typeText = work.type === 'publication'
      ? (isZh ? '## 论文' : '## Paper')
      : (isZh ? '## 项目' : '## Project');

    const statusText = work.status === 'ongoing'
      ? (isZh ? '进行中' : 'Ongoing')
      : (isZh ? '已完成' : 'Completed');

    const tagsText = work.tags.join(', ');

    const linksSection = [];
    if (work.links?.paper) linksSection.push(`- [Paper](${work.links.paper})`);
    if (work.links?.code) linksSection.push(`- [Code](${work.links.code})`);
    if (work.links?.demo) linksSection.push(`- [Demo](${work.links.demo})`);
    if (work.links?.poster) linksSection.push(`- [Poster](${work.links.poster})`);

    const referencesSection = work.references
      ? `## ${isZh ? '参考文献' : 'References'}\n\n` + work.references.map((ref, i) => `${i + 1}. ${ref}`).join('\n')
      : '';

    return `
# ${title}

**${isZh ? '日期' : 'Date'}**: ${work.date} | **${isZh ? '状态' : 'Status'}**: ${statusText} | **${isZh ? '标签' : 'Tags'}**: ${tagsText}

---

${description}

---

${abstract ? `## ${isZh ? '摘要' : 'Abstract'}\n\n${abstract}\n\n` : ''}${methodology ? `## ${isZh ? '方法' : 'Methodology'}\n\n${methodology}\n\n` : ''}${results ? `## ${isZh ? '结果' : 'Results'}\n\n${results}\n\n` : ''}${conclusion ? `## ${isZh ? '结论' : 'Conclusion'}\n\n${conclusion}\n\n` : ''}${linksSection.length > 0 ? `## ${isZh ? '资源链接' : 'Resources'}\n\n${linksSection.join('\n')}\n\n` : ''}${referencesSection}
    `.trim();
  };

  const markdownContent = generateMarkdown();

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground gradient-bg">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="gap-2 hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('latest_work.back_to_list')}
            </Button>
            <div className="flex items-center gap-3">
              <span className="font-bold text-xl">Yang Zhou</span>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-primary/10 transition-colors"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: title,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 - Markdown 风格 */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* 操作按钮 */}
        <div className="mb-6 flex justify-end gap-2">
          {work.links && Object.keys(work.links).length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="btn-enhanced hover:bg-primary hover:text-primary-foreground hover:border-primary"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              <Download className="w-4 h-4 mr-2" />
              {t('work.downloads')}
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="btn-enhanced hover:bg-primary hover:text-primary-foreground hover:border-primary"
            onClick={handleCopyMarkdown}
          >
            <Copy className="w-4 h-4 mr-2" />
            {copied ? (isZh ? '已复制' : 'Copied!') : (isZh ? '复制 Markdown' : 'Copy Markdown')}
          </Button>
        </div>

        {/* 内容渲染 */}
        <div className="bg-background rounded-lg border border-border/50 shadow-sm">
          <Card className="card-enhanced border-0 shadow-none">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20">
                {/* 标题 */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-4 border-b border-border/50">
                  {title}
                </h1>

                {/* 元数据 */}
                <div className="mb-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{isZh ? '日期' : 'Date'}</span>: {work.date} | <span className="font-semibold text-foreground">{isZh ? '状态' : 'Status'}</span>: {work.status === 'ongoing' ? (isZh ? '进行中' : 'Ongoing') : (isZh ? '已完成' : 'Completed')} | <span className="font-semibold text-foreground">{isZh ? '标签' : 'Tags'}</span>: {work.tags.join(', ')}
                </div>

                {/* 作者和机构 */}
                {(work.authors && work.authors.length > 0) || (work.institutions && work.institutions.length > 0) ? (
                  <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-border/30">
                    {work.authors && work.authors.length > 0 && (
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-foreground mr-2">
                          <Users className="w-4 h-4 inline mr-1" />
                          {isZh ? '作者' : 'Authors'}:
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {work.authors.join(', ')}
                        </span>
                      </div>
                    )}
                    {work.institutions && work.institutions.length > 0 && (
                      <div>
                        <span className="text-sm font-semibold text-foreground mr-2">
                          <Building2 className="w-4 h-4 inline mr-1" />
                          {isZh ? '机构' : 'Institutions'}:
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {work.institutions.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                ) : null}

                <hr className="my-8 border-border/50" />

                {/* 描述 */}
                <p className="leading-relaxed text-muted-foreground mb-4 text-lg">
                  {description}
                </p>

                {/* 摘要 */}
                {abstract && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '摘要' : 'Abstract'}
                    </h2>
                    <p className="leading-relaxed text-muted-foreground mb-4">
                      {abstract}
                    </p>
                  </>
                )}

                {/* 方法 */}
                {methodology && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '方法' : 'Methodology'}
                    </h2>
                    <p className="leading-relaxed text-muted-foreground mb-4">
                      {methodology}
                    </p>
                  </>
                )}

                {/* 结果 */}
                {results && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '结果' : 'Results'}
                    </h2>
                    <p className="leading-relaxed text-muted-foreground mb-4">
                      {results}
                    </p>
                  </>
                )}

                {/* 结论 */}
                {conclusion && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '结论' : 'Conclusion'}
                    </h2>
                    <p className="leading-relaxed text-muted-foreground mb-4">
                      {conclusion}
                    </p>
                  </>
                )}

                {/* 资源链接 */}
                {work.links && Object.keys(work.links).length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <Download className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '资源链接' : 'Resources'}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
                      {work.links.paper && (
                        <li className="text-muted-foreground leading-relaxed">
                          <a
                            href={work.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 inline-flex"
                          >
                            Paper <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </li>
                      )}
                      {work.links.code && (
                        <li className="text-muted-foreground leading-relaxed">
                          <a
                            href={work.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 inline-flex"
                          >
                            Code <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </li>
                      )}
                      {work.links.demo && (
                        <li className="text-muted-foreground leading-relaxed">
                          <a
                            href={work.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 inline-flex"
                          >
                            Demo <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </li>
                      )}
                      {work.links.poster && (
                        <li className="text-muted-foreground leading-relaxed">
                          <a
                            href={work.links.poster}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 inline-flex"
                          >
                            Poster <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </>
                )}

                {/* 参考文献 */}
                {work.references && work.references.length > 0 && (
                  <>
                    <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-3">
                      <div className="p-1.5 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      {isZh ? '参考文献' : 'References'}
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 mb-4 pl-2">
                      {work.references.map((ref, index) => (
                        <li key={index} className="text-muted-foreground leading-relaxed">
                          {ref}
                        </li>
                      ))}
                    </ol>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 图表展示 */}
        {work.charts && work.charts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
                <BarChart className="w-5 h-5 text-primary" />
              </div>
              {isZh ? '图表展示' : 'Charts & Visualizations'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {work.charts.map((chart, index) => (
                <Card key={index} className="card-enhanced hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {isZh ? chart.title : chart.titleEn}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {chart.type === 'image' && (
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg flex items-center justify-center border border-border/50">
                        <p className="text-muted-foreground text-sm text-center px-4">
                          {chart.data.description}
                        </p>
                      </div>
                    )}
                    {chart.type === 'chart' && (
                      <div className="space-y-4 p-4">
                        {chart.data.labels.map((label: string, i: number) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{label}</span>
                              <span className="text-primary font-semibold">{chart.data.values[i]}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-500"
                                style={{
                                  width: `${(chart.data.values[i] / Math.max(...chart.data.values)) * 100}%`,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* 返回按钮 */}
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            onClick={() => router.push('/')}
            className="gap-2 px-8 btn-enhanced hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('latest_work.back_to_list')}
          </Button>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border/50 mt-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {t('about.title')}. {t('footer.copyright')}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

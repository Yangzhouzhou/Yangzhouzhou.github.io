'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { WorkItem } from '@/data/works';
import { Mail, MapPin, Github, Linkedin, FileText, ExternalLink, GraduationCap, Briefcase, BookOpen, Award, Calendar, ArrowRight, Star, Clock, Tag as TagIcon, Sparkles, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const { t, language } = useLanguage();
  const isZh = language === 'zh';

  // 使用 state 来存储数据
  const [latestWorks, setLatestWorks] = useState<WorkItem[]>([]);
  const [publications, setPublications] = useState<WorkItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 从 API 获取数据
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // 获取最新工作
        const worksResponse = await fetch('/api/works?type=works');
        if (worksResponse.ok) {
          const worksData = await worksResponse.json();
          setLatestWorks(worksData);
        }

        // 获取论文
        const pubsResponse = await fetch('/api/works?type=publications');
        if (pubsResponse.ok) {
          const pubsData = await pubsResponse.json();
          setPublications(pubsData);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground gradient-bg">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-bold text-xl hover:text-primary transition-colors">
              Yang Zhou
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-6 text-sm font-medium">
                <a href="#about" className="hover:text-primary transition-colors relative group">
                  {t('nav.about')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#latest-work" className="hover:text-primary transition-colors relative group">
                  {t('nav.latest_work')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#publications" className="hover:text-primary transition-colors relative group">
                  {t('nav.publications')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#education" className="hover:text-primary transition-colors relative group">
                  {t('nav.education')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#experience" className="hover:text-primary transition-colors relative group">
                  {t('nav.experience')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#awards" className="hover:text-primary transition-colors relative group">
                  {t('nav.awards')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-primary transition-colors relative group">
                  {t('nav.contact')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              </div>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-5xl">
        {/* 个人信息区域 */}
        <section id="about" className="mb-20 animate-fade-in-up">
          <div className="grid md:grid-cols-[300px_1fr] gap-10">
            {/* 头像 */}
            <div className="flex flex-col items-center md:items-start animate-scale-in relative">
              <div className="w-64 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300 border border-primary/10 overflow-hidden">
                  <img src="/avatar.jpg" alt="Avatar" className="w-full h-auto object-contain" />
              </div>
              <div className="flex gap-3 justify-center md:justify-start absolute bottom-8 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0">
                <a
                  href="https://github.com/Yangzhouzhou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#contact"
                  className="p-3 border rounded-xl hover:bg-primary/10 hover:border-primary/30 hover:scale-110 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* 个人简介 */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-foreground to-primary/60 bg-clip-text">
                  {t('about.title')}
                </h1>
                <p className="text-2xl text-muted-foreground mb-5 font-medium">
                  {t('about.position')}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{t('about.location')}</span>
                </div>
              </div>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {isZh ? (
                    <>
                      我现任中国科学院空天信息创新研究院（AIRCAS）工程师，在数字地球重点实验室、可持续发展大数据中心从事科研工作。2015 年至 2022 年就读于中国地质大学（北京），先后获得学士学位与硕士学位。目前主要研究方向为三维激光雷达点云数据智能处理及应用研究。<strong>三维激光雷达点云数据智能处理及应用研究</strong>。
                    </>
                  ) : (
                    <>
                      I am currently an Engineer at the Aerospace Information Research Institute, Chinese Academy of Sciences (AIRCAS), engaged in research at the Key Laboratory of Digital Earth and the Big Data Center for Sustainable Development.I received my Bachelor's and Master's degrees from China University of Geosciences (Beijing) from 2015 to 2022. My current research focuses on <strong>intelligent processing and applications of 3D LiDAR point cloud data</strong> .
                    </>
                  )}
                </p>
                <p className="leading-relaxed">
                  {isZh ? (
                    <>
                      我的工作重点包括三维语义分割、三维软件开发以及 3D 高斯散射（3DGS）等新兴技术研究，并将相关技术应用于电力、林业、测绘等多个行业领域。
                    </>
                  ) : (
                    <>
                      My research focuses on 3D semantic segmentation, 3D software development, and emerging technologies such as 3D Gaussian Splatting (3DGS), with applications in power, forestry, surveying and mapping, and other related fields.
                    </>
                  )}
                </p>
              </div>

              {/* 研究兴趣标签 */}
              <div>
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {t('about.research_interests')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ml', 'dl', 'nlp', 'cv', 'llm', 'ai'].map((key) => (
                    <Badge key={key} variant="secondary" className="text-sm px-3 py-1.5 badge-enhanced hover:bg-primary hover:text-primary-foreground cursor-default">
                      {t(`research.${key}`)}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 最新工作 */}
        <section id="latest-work" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
              <Star className="w-6 h-6 text-primary" />
            </div>
            {t('latest_work.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestWorks.map((work, index) => (
              <Card key={work.id} className="card-enhanced hover-lift group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant={work.status === 'ongoing' ? 'default' : 'secondary'} className="gap-1.5 badge-enhanced">
                      <Clock className="w-3 h-3" />
                      {work.status === 'ongoing' ? t('work.ongoing') : t('work.completed')}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">{work.date}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors leading-relaxed">
                    {isZh ? work.title : work.titleEn}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {isZh ? work.description : work.descriptionEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {work.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs gap-1 badge-enhanced hover:border-primary">
                        <TagIcon className="w-3 h-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full btn-enhanced group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                    <Link href={`/work/${work.id}`} className="gap-2">
                      {t('latest_work.view_details')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 发表论文 - 已移到最新工作后面 */}
        <section id="publications" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            {t('publications.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <Card key={pub.id} className="card-enhanced hover-lift group overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="gap-1.5 badge-enhanced">
                      <FileText className="w-3 h-3" />
                      {t('publications.publication')}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium">{pub.date}</span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors leading-relaxed">
                    {isZh ? pub.title : pub.titleEn}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {isZh ? pub.description : pub.descriptionEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pub.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs gap-1 badge-enhanced hover:border-primary">
                        <TagIcon className="w-3 h-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full btn-enhanced group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary" asChild>
                    <Link href={`/work/${pub.id}`} className="gap-2">
                      {t('publications.view_paper')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 工作经历 */}
<section id="experience" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <Briefcase className="w-6 h-6 text-primary" />
    </div>
    {t('experience.title')}
  </h2>
  <div className="space-y-6">
    <Card className="card-enhanced hover-lift">
      <CardHeader>
        <CardTitle className="text-xl">
          {isZh ? '中国科学院空天信息创新研究院 可持续发展大数据中心' : 'International Research Center of Big Data for Sustainable Development Goals, AIRCAS'}
        </CardTitle>
        <CardDescription>
          2023 - {isZh ? '至今' : 'Present'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>{isZh ? '研究面向输电/变电场景的3DGS模型重建以及单体化分割' : 'Research on 3DGS model reconstruction and instance segmentation for power transmission/substation scenes'}</li>
        </ul>
      </CardContent>
    </Card>
    <Card className="card-enhanced hover-lift">
      <CardHeader>
        <CardTitle className="text-xl">
          {isZh ? '中国科学院空天信息创新研究院 定量遥感重点实验室' : 'State Key Laboratory of Remote Sensing Science, AIRCAS'}
        </CardTitle>
        <CardDescription>
          2022 - 2023
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>{isZh ? '开发了基于LiDAR数据的室内房屋布局自动生成算法和软件' : 'Developed an algorithm and software for automatically generating indoor house layouts based on LiDAR data'}</li>
            <li>{isZh ? '开发了输电线路多类别语义分割模型' : 'Developed a multi-class semantic segmentation model for power lines'}</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</section>

<div className="border-t border-border/50 my-16"></div>

        {/* 教育背景 */}
<section id="education" className="mb-20">
  <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
    <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
      <GraduationCap className="w-6 h-6 text-primary" />
    </div>
    {t('education.title')}
  </h2>
  <div className="space-y-6">
    <Card className="card-enhanced hover-lift">
      <CardHeader>
        <CardTitle className="text-xl">
          {isZh ? '中国科学院空天信息创新研究院' : 'Aerospace Information Research Institute, CAS'}
        </CardTitle>
        <CardDescription>
          2015 - 2019 | {isZh ? '在职科研进修 · 三维激光雷达应用' : 'On-the-job Research · 3D LiDAR Application'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {isZh
            ? '研究方向：激光雷达语义分割、3DGS单体化。' : 'Research Interests: LiDAR Semantic Segmentation, 3DGS Monetization.'}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {isZh
            ? '在职期间深入研究三维激光雷达点云智能处理技术，聚焦电力、林业、测绘等领域的工程化应用。'
            : 'During on-the-job period, I deeply studied 3D LiDAR point cloud intelligent processing technology, focusing on engineering applications in power, forestry, surveying and mapping fields.'}
        </p>
      </CardContent>
    </Card>
    <Card className="card-enhanced hover-lift">
      <CardHeader>
        <CardTitle className="text-xl">
          {isZh ? '中国地质大学（北京）' : 'China University of Geosciences (Beijing)'}
        </CardTitle>
        <CardDescription>
          2019 - 2022 | {isZh ? '硕士 · 测绘科学与技术' : 'Master · Surveying and Mapping Engineering'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <span className="text-primary text-lg leading-relaxed">•</span>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {isZh
              ? '研究方向：车载道路杆状地物提取，行人轨迹预测'
              : 'Research Interests: MLS Pole-like Objection Extraction, Pedestrian Trajectory Prediction'}
          </p>
        </div>
       <div className="flex items-start gap-3">
          <span className="text-primary text-lg leading-relaxed">•</span>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {isZh
              ? '硕士阶段聚焦三维点云处理、遥感数据挖掘方向，开展相关科研课题研究，为后续工程实践奠定核心技术基础。'
              : 'During master studies, I focused on 3D point cloud processing and remote sensing data mining, carried out research on related scientific topics, and laid a core technical foundation for subsequent engineering practice.'}
          </p>
        </div>
      </CardContent>
    </Card>
    <Card className="card-enhanced hover-lift">
      <CardHeader>
        <CardTitle className="text-xl">
          {isZh ? '中国地质大学（北京）' : 'China University of Geosciences (Beijing)'}
        </CardTitle>
        <CardDescription>
          2022 - 至今 | {isZh ? '本科 · 测绘工程' : 'Bachelor · Surveying and Mapping Engineering'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-3">
          <span className="text-primary text-lg leading-relaxed">•</span>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {isZh
              ? 'GPA: 3.4/4.0, 荣誉：优秀毕业生， 保研'
              : 'GPA: 3.4/4.0, Honors: Outstanding Graduate, Promotion'}
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-primary text-lg leading-relaxed">•</span>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {isZh
              ? '本科阶段系统学习地理信息系统、遥感原理、空间数据库等基础课程，构建了资源环境信息工程的知识体系。'
              : 'During undergraduate studies, I systematically learned basic courses such as geographic information systems, remote sensing principles, and spatial databases, building a knowledge system for resources and environmental information engineering.'}
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 荣誉奖项 */}
        <section id="awards" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
            </div>
            {t('awards.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-enhanced hover-lift">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">
                    {isZh ? '优秀毕业生' : 'Outstanding Graduate'}
                  </CardTitle>
                </div>
                <CardDescription>
                  2022 | {isZh ? '中国地质大学（北京）' : 'China University of Geosciences (Beijing)'}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 联系方式 */}
        <section id="contact" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            {t('contact.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-enhanced hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {isZh ? '邮箱' : 'Email'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">yangzhou@example.com</p>
              </CardContent>
            </Card>

            <Card className="card-enhanced hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Github className="w-5 h-5 text-primary" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/Yangzhouzhou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  github.com/Yangzhouzhou
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="card-enhanced hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {isZh ? '地址' : 'Location'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {isZh ? '北京市海淀区' : 'Haidian District, Beijing, China'}
                </p>
              </CardContent>
            </Card>

            <Card className="card-enhanced hover-lift">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-primary" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  linkedin.com/in/yangzhou
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="border-t border-border/50 my-16"></div>

        {/* 页脚 */}
        <footer className="text-center text-muted-foreground py-8">
          <p>© {new Date().getFullYear()} Yang Zhou. {t('footer.rights')}</p>
        </footer>
      </main>
    </div>
  );
}

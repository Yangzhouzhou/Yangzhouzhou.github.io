'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      zh: {
        'nav.about': '关于',
        'nav.education': '教育背景',
        'nav.latest_work': '最新工作',
        'nav.experience': '研究经历',
        'nav.publications': '发表论文',
        'nav.awards': '奖项荣誉',
        'nav.contact': '联系方式',
        'about.title': '杨洲',
        'about.position': '研究员 | 博士研究生',
        'about.location': '中国，北京',
        'about.research_interests': '研究兴趣',
        'research.ml': '机器学习',
        'research.dl': '深度学习',
        'research.nlp': '激光雷达',
        'research.cv': '计算机视觉',
        'research.llm': '语义分割',
        'research.ai': '软件开发',
        'latest_work.title': '最新工作',
        'latest_work.view_details': '查看详情',
        'latest_work.back_to_list': '返回列表',
        'education.title': '教育背景',
        'experience.title': '研究经历',
        'publications.title': '发表论文',
        'publications.publication': '论文',
        'publications.paper': '论文',
        'publications.code': '代码',
        'publications.view_all': '查看 Google Scholar',
        'awards.title': '奖项荣誉',
        'contact.title': '联系方式',
        'contact.email': '邮箱',
        'contact.location': '位置',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer.copyright': '版权所有',
        'footer.website_source': '网站源码',
        'read_more': '阅读更多',
        'work.status': '项目状态',
        'work.ongoing': '进行中',
        'work.completed': '已完成',
        'work.abstract': '摘要',
        'work.methodology': '方法',
        'work.results': '结果',
        'work.conclusion': '结论',
        'work.references': '参考文献',
        'work.downloads': '下载',
      },
      en: {
        'nav.about': 'About',
        'nav.education': 'Education',
        'nav.latest_work': 'Latest Work',
        'nav.experience': 'Experience',
        'nav.publications': 'Publications',
        'nav.awards': 'Awards',
        'nav.contact': 'Contact',
        'about.title': 'Yang Zhou',
        'about.position': 'Researcher | PhD Candidate',
        'about.location': 'Beijing, China',
        'about.research_interests': 'Research Interests',
        'research.ml': 'Machine Learning',
        'research.dl': 'Deep Learning',
        'research.nlp': 'LiDAR',
        'research.cv': 'Computer Vision',
        'research.llm': 'Semantic Segmentation',
        'research.ai': 'Software Development',
        'latest_work.title': 'Latest Work',
        'latest_work.view_details': 'View Details',
        'latest_work.back_to_list': 'Back to List',
        'education.title': 'Education',
        'experience.title': 'Research Experience',
        'publications.title': 'Publications',
        'publications.publication': 'Publication',
        'publications.paper': 'Paper',
        'publications.code': 'Code',
        'publications.view_all': 'View all publications on Google Scholar',
        'awards.title': 'Awards & Honors',
        'contact.title': 'Contact',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'contact.github': 'GitHub',
        'contact.linkedin': 'LinkedIn',
        'footer.copyright': 'All rights reserved',
        'footer.website_source': 'Website Source',
        'read_more': 'Read More',
        'work.status': 'Status',
        'work.ongoing': 'Ongoing',
        'work.completed': 'Completed',
        'work.abstract': 'Abstract',
        'work.methodology': 'Methodology',
        'work.results': 'Results',
        'work.conclusion': 'Conclusion',
        'work.references': 'References',
        'work.downloads': 'Downloads',
      },
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

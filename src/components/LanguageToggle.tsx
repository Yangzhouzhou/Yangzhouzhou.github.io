'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
      className="gap-2 btn-enhanced hover:bg-primary/10"
    >
      <Languages className="w-4 h-4" />
      <span className="font-medium">{language === 'zh' ? 'EN' : '中文'}</span>
    </Button>
  );
}

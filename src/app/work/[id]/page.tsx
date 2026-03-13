import { getWorkById, generateWorkParams } from '@/data/works-loader';
import { ArrowLeft, Calendar, Tag, Download, ExternalLink, Github, BarChart, FileText, Share2, BookOpen, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import WorkDetailClient from './WorkDetailClient';

// 为静态导出生成所有可能的参数（从 Markdown 文件）
export async function generateStaticParams() {
  return generateWorkParams();
}

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const work = getWorkById(id);

  if (!work) {
    return (
      <div className="min-h-screen bg-background text-foreground gradient-bg flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Work Not Found</h1>
          <Button variant="ghost" asChild className="btn-enhanced">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return <WorkDetailClient work={work} />;
}

import { NextResponse } from 'next/server';
import { getWorks, getPublications } from '@/data/works-loader';

// 静态导出：在构建时生成一次数据
export const dynamic = 'force-static';

export async function GET() {

  try {
    // 最新进行中的工作（取前 3 条）
    const latestWorks = getWorks()
      .filter((w) => w.status === 'ongoing')
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);

    // 所有论文
    const publications = getPublications();

    return NextResponse.json({
      latestWorks,
      publications,
    });
  } catch (error) {
    console.error('Error fetching works:', error);
    return NextResponse.json({ error: 'Failed to fetch works', details: String(error) }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getWorks, getPublications } from '@/data/works-loader';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    if (type === 'works') {
      // 获取正在进行的最新工作
      const worksData = getWorks()
        .filter((w) => w.status === 'ongoing')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

      return NextResponse.json(worksData);
    } else if (type === 'publications') {
      const publications = getPublications();
      return NextResponse.json(publications);
    } else {
      // 返回所有数据
      const allWorks = getWorks().concat(getPublications());
      return NextResponse.json(allWorks);
    }
  } catch (error) {
    console.error('Error fetching works:', error);
    return NextResponse.json({ error: 'Failed to fetch works', details: String(error) }, { status: 500 });
  }
}

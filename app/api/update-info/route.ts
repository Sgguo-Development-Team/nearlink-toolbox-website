import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://haohanyh-ctcc.gcxstudio.cn/software-updater.json', {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching update info:', error);
    return NextResponse.json(
      { error: '获取更新信息失败，请稍后再试' },
      { status: 500 }
    );
  }
}

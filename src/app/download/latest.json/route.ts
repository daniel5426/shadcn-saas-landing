import { getPrysmWindowsDownloadConfig } from '@/lib/prysm-download';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const config = await getPrysmWindowsDownloadConfig();

    if (!config.available) {
      return NextResponse.json(
        {
          error: 'Latest public GitHub release does not contain a Windows installer',
          version: config.version,
          pageUrl: new URL('/download', request.url).toString(),
          releaseNotes: config.releaseNotes,
        },
        {
          status: 503,
          headers: {
            'cache-control': 'no-store',
          },
        },
      );
    }

    const pageUrl = new URL('/download', request.url).toString();

    return NextResponse.json(
      {
        version: config.version,
        downloadUrl: config.downloadUrl,
        pageUrl,
        releaseNotes: config.releaseNotes,
      },
      {
        headers: {
          'cache-control': 'no-store',
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : 'Failed to fetch latest GitHub release',
      },
      {
        status: 502,
        headers: {
          'cache-control': 'no-store',
        },
      },
    );
  }
}

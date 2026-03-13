import type { NextConfig } from 'next';
import path from 'path';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  // 只在生产环境使用静态导出
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ['*.dev.coze.site'],
};

export default nextConfig;

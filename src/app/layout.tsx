import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Yang Zhou - Academic Homepage',
    template: '%s | Yang Zhou',
  },
  description: 'Personal academic website of Yang Zhou - Researcher and Scholar',
  keywords: [
    'Yang Zhou',
    'Academic',
    'Research',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Computer Vision',
    'Large Language Models',
  ],
  authors: [{ name: 'Yang Zhou' }],
  openGraph: {
    title: 'Yang Zhou - Academic Homepage',
    description: 'Personal academic website of Yang Zhou - Researcher and Scholar',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <LanguageProvider>
          {isDev && <Inspector />}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

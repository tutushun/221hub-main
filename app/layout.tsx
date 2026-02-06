import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: '株式会社221Hub - 不動産情報の透明性を構築する',
    template: '%s | 221Hub',
  },
  description: '221Hubは不動産情報の透明性を構築し、事故物件データベース「JikoMap」、外国人向け住居支援、資産価値再生コンサルティングを提供する不動産テクノロジー企業です。',
  keywords: ['221Hub', '不動産', '事故物件', 'JikoMap', '外国人支援', '資産価値再生', 'PropTech'],
  authors: [{ name: '株式会社221Hub' }],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://221hub.com',
    siteName: '株式会社221Hub',
    title: '株式会社221Hub - 不動産情報の透明性を構築する',
    description: '事故物件データベース「JikoMap」、外国人向け住居支援、資産価値再生コンサルティングを提供。',
    images: [
      {
        url: 'https://221hub.com/og-image.png',
        width: 1200,
        height: 630,
        alt: '221Hub - 不動産情報の透明性を構築する',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社221Hub - 不動産情報の透明性を構築する',
    description: '事故物件データベース「JikoMap」、外国人向け住居支援、資産価値再生コンサルティングを提供。',
    images: ['https://221hub.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="lang-ja">
        <a href="#main-content" className="skip-link">
          メインコンテンツへスキップ
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getInsightBySlug, getAllInsightSlugs } from '@/lib/notion';
import styles from './page.module.css';

export const revalidate = 60;

// 静的生成用のパラメータを取得
export async function generateStaticParams() {
  const slugs = await getAllInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

// メタデータの生成
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getInsightBySlug(params.slug);

  if (!article) {
    return {
      title: '記事が見つかりません',
    };
  }

  return {
    title: article.title,
    description: article.lead,
    openGraph: {
      title: article.title,
      description: article.lead,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function InsightArticlePage({ params }: { params: { slug: string } }) {
  const article = await getInsightBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className={styles.page}>
      {/* Article Header */}
      <header className={styles.articleHeader}>
        <div className={styles.articleHeaderInner}>
          <Link href="/insights" className={styles.backLink}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span data-lang="ja">インサイト一覧</span>
            <span data-lang="en">All Insights</span>
          </Link>

          <div className={styles.articleMeta}>
            <span
              className={styles.categoryTag}
              style={{ background: `${article.iconColor}20`, color: article.iconColor }}
            >
              <span data-lang="ja">{article.category}</span>
              <span data-lang="en">{article.categoryEn}</span>
            </span>
            <time>{article.publishedAt}</time>
            <span className={styles.readingTime}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span data-lang="ja">{article.readingTime}</span>
              <span data-lang="en">{article.readingTimeEn}</span>
            </span>
          </div>

          <h1>
            <span data-lang="ja">{article.title}</span>
            <span data-lang="en">{article.titleEn || article.title}</span>
          </h1>

          <p className={styles.articleLead}>
            <span data-lang="ja">{article.lead}</span>
            <span data-lang="en">{article.leadEn || article.lead}</span>
          </p>
        </div>
      </header>

      {/* Article Content */}
      <article className={styles.articleContent}>
        <div className={styles.articleContentInner}>
          {/* Table of Contents - Sidebar */}
          <aside className={styles.toc}>
            <div className={styles.tocSticky}>
              <div className={styles.tocTitle}>
                <span data-lang="ja">目次</span>
                <span data-lang="en">Contents</span>
              </div>
              {/* TOC will be generated from content headings */}

              <div className={styles.shareSection}>
                <div className={styles.shareTitle}>
                  <span data-lang="ja">シェア</span>
                  <span data-lang="en">Share</span>
                </div>
                <div className={styles.shareButtons}>
                  <button className={styles.shareBtn} aria-label="Share on X">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </button>
                  <button className={styles.shareBtn} aria-label="Share on LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button className={styles.shareBtn} aria-label="Copy link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <div className={styles.articleBody}>
            <div
              className={styles.markdownContent}
              dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(article.content) }}
            />
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <h2>
            <span data-lang="ja">関連記事</span>
            <span data-lang="en">Related Articles</span>
          </h2>
          <div className={styles.relatedGrid}>
            {/* Related articles will be fetched and displayed here */}
            <p className={styles.comingSoon}>
              <span data-lang="ja">関連記事を準備中です</span>
              <span data-lang="en">Related articles coming soon</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  if (!markdown) return '';

  let html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gm, '<li>$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br />');

  // Wrap in paragraph tags
  html = `<p>${html}</p>`;

  // Clean up list items
  html = html.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');

  return html;
}

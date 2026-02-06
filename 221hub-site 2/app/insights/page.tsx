import Link from 'next/link';
import { getInsights } from '@/lib/notion';
import styles from './page.module.css';

export const revalidate = 60; // ISR: 60秒ごとに再生成

export const metadata = {
  title: 'インサイト',
  description: '221Hubが提供する不動産市場の分析、テクノロジー解説、法規制情報などの最新インサイト記事一覧。',
};

// カテゴリーアイコンのマッピング
const categoryIcons: Record<string, React.ReactNode> = {
  '市場分析': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-4-4-5 5" />
    </svg>
  ),
  'テクノロジー': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
    </svg>
  ),
  '法規制': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  '外国人支援': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  '資産価値': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  '相続・資産': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>
  ),
};

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>INSIGHTS</span>
          <h1>
            <span data-lang="ja">最新のインサイト</span>
            <span data-lang="en">Latest Insights</span>
          </h1>
          <p className={styles.heroLead}>
            <span data-lang="ja">
              不動産市場の分析、テクノロジー解説、法規制情報など、<br />
              221Hubが提供する専門的な知見をお届けします。
            </span>
            <span data-lang="en">
              Market analysis, technology insights, regulatory updates,<br />
              and expert knowledge from 221Hub.
            </span>
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.articlesInner}>
          {insights.length === 0 ? (
            <div className={styles.emptyState}>
              <p>
                <span data-lang="ja">記事がありません。</span>
                <span data-lang="en">No articles found.</span>
              </p>
            </div>
          ) : (
            <div className={styles.articlesGrid}>
              {insights.map((article, index) => (
                <article
                  key={article.id}
                  className={`${styles.articleCard} ${index === 0 ? styles.featured : ''}`}
                >
                  <Link href={`/insights/${article.slug}`} className={styles.articleLink}>
                    <div
                      className={styles.articleImage}
                      style={{ background: `linear-gradient(135deg, ${article.iconColor} 0%, ${article.iconColor}99 100%)` }}
                    >
                      <div className={styles.articleIcon}>
                        {categoryIcons[article.category] || categoryIcons['市場分析']}
                      </div>
                      <span className={styles.articleCategory}>
                        <span data-lang="ja">{article.category}</span>
                        <span data-lang="en">{article.categoryEn}</span>
                      </span>
                    </div>
                    <div className={styles.articleContent}>
                      <div className={styles.articleMeta}>
                        <time>{article.publishedAt}</time>
                        <span className={styles.articleReadTime}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span data-lang="ja">{article.readingTime}</span>
                          <span data-lang="en">{article.readingTimeEn}</span>
                        </span>
                      </div>
                      <h2>
                        <span data-lang="ja">{article.title}</span>
                        <span data-lang="en">{article.titleEn || article.title}</span>
                      </h2>
                      <p>
                        <span data-lang="ja">{article.lead}</span>
                        <span data-lang="en">{article.leadEn || article.lead}</span>
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

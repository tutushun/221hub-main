import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>Real Estate × Technology</span>
            <h1 className={styles.heroTitle}>
              <span data-lang="ja">
                不動産情報の<br />
                <span className={styles.highlight}>透明性</span>を構築する
              </span>
              <span data-lang="en">
                Building<br />
                <span className={styles.highlight}>Transparency</span><br />
                in Real Estate
              </span>
            </h1>
            <p className={styles.heroLead}>
              <span data-lang="ja">
                221Hubは、不動産取引における情報の非対称性を解消し、
                すべての人が安心して住まいを選べる社会を創ります。
              </span>
              <span data-lang="en">
                221Hub resolves information asymmetry in real estate transactions,
                creating a society where everyone can choose their home with confidence.
              </span>
            </p>
            <div className={styles.heroKeywords}>
              <span className={styles.keyword}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span data-lang="ja">事故物件DB</span>
                <span data-lang="en">Stigmatized Property DB</span>
              </span>
              <span className={styles.keyword}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span data-lang="ja">外国人支援</span>
                <span data-lang="en">Foreign Support</span>
              </span>
              <span className={styles.keyword}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span data-lang="ja">住宅再生</span>
                <span data-lang="en">Housing Renewal</span>
              </span>
            </div>
            <div className={styles.heroCta}>
              <Link href="/jikomap" className="btn btn-primary">
                <span data-lang="ja">事業を見る</span>
                <span data-lang="en">View Our Business</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <span data-lang="ja">無料相談</span>
                <span data-lang="en">Free Consultation</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCanvas}></div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className={styles.businessSection} id="business">
        <div className={styles.businessInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>OUR BUSINESS</span>
            <h2>
              <span data-lang="ja">3つの事業領域</span>
              <span data-lang="en">Three Business Areas</span>
            </h2>
            <p>
              <span data-lang="ja">情報・サービス・コンサルティングの3軸で、不動産市場の課題を解決します</span>
              <span data-lang="en">We solve real estate market challenges through information, services, and consulting</span>
            </p>
          </div>

          <div className={styles.businessGrid}>
            {/* JikoMap */}
            <Link href="/jikomap" className={styles.businessCard}>
              <div className={styles.businessCardIcon} style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.businessCardContent}>
                <span className={styles.businessCardLabel}>Information Platform</span>
                <h3>JikoMap</h3>
                <p>
                  <span data-lang="ja">事故物件情報データベース。全国の心理的瑕疵物件情報を収集・検証し、地図上で可視化。</span>
                  <span data-lang="en">Stigmatized property database. Collecting and verifying psychological defect property information nationwide.</span>
                </p>
              </div>
              <span className={styles.businessCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            {/* Foreign Support */}
            <Link href="/foreign-support" className={styles.businessCard}>
              <div className={styles.businessCardIcon} style={{ background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className={styles.businessCardContent}>
                <span className={styles.businessCardLabel}>Housing Service</span>
                <h3>
                  <span data-lang="ja">外国人向け住居支援</span>
                  <span data-lang="en">Foreign Resident Support</span>
                </h3>
                <p>
                  <span data-lang="ja">言語・文化の壁を越えた住まい探しの総合支援。多言語対応、契約支援、入居後フォロー。</span>
                  <span data-lang="en">Comprehensive housing support crossing language and cultural barriers. Multilingual support, contract assistance.</span>
                </p>
              </div>
              <span className={styles.businessCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            {/* Asset Renewal */}
            <Link href="/asset-renewal" className={styles.businessCard}>
              <div className={styles.businessCardIcon} style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className={styles.businessCardContent}>
                <span className={styles.businessCardLabel}>Consulting</span>
                <h3>
                  <span data-lang="ja">資産価値再生</span>
                  <span data-lang="en">Asset Value Renewal</span>
                </h3>
                <p>
                  <span data-lang="ja">訳あり物件の価値最大化コンサルティング。適正評価、再生戦略、出口戦略の立案支援。</span>
                  <span data-lang="en">Value maximization consulting for stigmatized properties. Proper valuation and exit strategy support.</span>
                </p>
              </div>
              <span className={styles.businessCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGrid}></div>
        <div className={styles.ctaInner}>
          <div className={styles.ctaHeader}>
            <span className={styles.ctaLabel}>GET STARTED</span>
            <h2>
              <span data-lang="ja">あなたに合った入り口から</span>
              <span data-lang="en">Find Your Starting Point</span>
            </h2>
            <p>
              <span data-lang="ja">それぞれのニーズに合わせた最適なソリューションをご提案します</span>
              <span data-lang="en">We offer tailored solutions to meet your specific needs</span>
            </p>
          </div>

          <div className={styles.ctaCards}>
            <Link href="/contact" className={`${styles.ctaCard} ${styles.owner}`}>
              <div className={styles.ctaCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className={styles.ctaCardBody}>
                <span className={styles.ctaCardTarget}>
                  <span data-lang="ja">不動産オーナー様へ</span>
                  <span data-lang="en">For Property Owners</span>
                </span>
                <h3>
                  <span data-lang="ja">訳あり物件の価値を最大化する</span>
                  <span data-lang="en">Maximize Your Property Value</span>
                </h3>
                <p>
                  <span data-lang="ja">訳あり物件の売却・再生・アフォーダブル住宅化のご相談</span>
                  <span data-lang="en">Consultation on selling, revitalizing stigmatized properties</span>
                </p>
              </div>
              <span className={styles.ctaCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/contact" className={`${styles.ctaCard} ${styles.partner}`}>
              <div className={styles.ctaCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className={styles.ctaCardBody}>
                <span className={styles.ctaCardTarget}>
                  <span data-lang="ja">自治体・パートナー企業様へ</span>
                  <span data-lang="en">For Municipalities & Partners</span>
                </span>
                <h3>
                  <span data-lang="ja">地域の住宅課題を共に解決する</span>
                  <span data-lang="en">Solve Regional Housing Challenges Together</span>
                </h3>
                <p>
                  <span data-lang="ja">居住支援・地域再生スキームの共同開発</span>
                  <span data-lang="en">Joint development of housing support schemes</span>
                </p>
              </div>
              <span className={styles.ctaCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

            <Link href="/vision" className={`${styles.ctaCard} ${styles.investor}`}>
              <div className={styles.ctaCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className={styles.ctaCardBody}>
                <span className={styles.ctaCardTarget}>
                  <span data-lang="ja">投資家様へ</span>
                  <span data-lang="en">For Investors</span>
                </span>
                <h3>
                  <span data-lang="ja">社会課題解決と収益性の両立</span>
                  <span data-lang="en">Social Impact Meets Financial Returns</span>
                </h3>
                <p>
                  <span data-lang="ja">ESG/インパクト投資としての事業進捗資料請求</span>
                  <span data-lang="en">Request business progress materials as ESG/impact investment</span>
                </p>
              </div>
              <span className={styles.ctaCardArrow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

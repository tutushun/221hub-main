import Link from 'next/link';
import styles from './page.module.css';

export default function JikoMapPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" fill="#fff" />
              </svg>
              <span data-lang="ja">事故物件情報プラットフォーム</span>
              <span data-lang="en">Stigmatized Property Platform</span>
            </span>
            <h1 className={styles.heroTitle}>JikoMap</h1>
            <p className={styles.heroSubtitle}>
              <span data-lang="ja">
                事故物件情報を地図上で可視化し、<br />
                物件選びの判断材料を提供する
              </span>
              <span data-lang="en">
                Visualizing stigmatized property information on maps,<br />
                providing decision-making support for property selection
              </span>
            </p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>10,000+</span>
                <span className={styles.heroStatLabel}>
                  <span data-lang="ja">登録物件数</span>
                  <span data-lang="en">Properties</span>
                </span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>47</span>
                <span className={styles.heroStatLabel}>
                  <span data-lang="ja">都道府県</span>
                  <span data-lang="en">Prefectures</span>
                </span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatValue}>24/7</span>
                <span className={styles.heroStatLabel}>
                  <span data-lang="ja">データ更新</span>
                  <span data-lang="en">Updates</span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.mapGrid}></div>
            <div className={styles.mapPin} style={{ top: '30%', left: '20%' }}></div>
            <div className={styles.mapPin} style={{ top: '50%', left: '45%' }}></div>
            <div className={styles.mapPin} style={{ top: '25%', left: '70%' }}></div>
            <div className={styles.mapPin} style={{ top: '65%', left: '30%' }}></div>
            <div className={styles.mapPin} style={{ top: '70%', left: '65%' }}></div>
            <div className={styles.mapLabel}>
              <span className={styles.mapLabelText}>
                <span data-lang="ja">リアルタイムデータ更新中</span>
                <span data-lang="en">Real-time data updating</span>
              </span>
              <span className={styles.mapLabelStatus}>LIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>THE PROBLEM</span>
            <h2>
              <span data-lang="ja">なぜ事故物件情報が必要なのか</span>
              <span data-lang="en">Why Stigmatized Property Information Matters</span>
            </h2>
            <p>
              <span data-lang="ja">不動産取引における情報の非対称性が、入居者の不安と不信を生んでいます</span>
              <span data-lang="en">Information asymmetry in real estate transactions creates anxiety and distrust among tenants</span>
            </p>
          </div>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">告知義務の曖昧さ</span>
                <span data-lang="en">Ambiguous Disclosure Obligations</span>
              </h3>
              <p>
                <span data-lang="ja">法的な告知義務の基準が明確でなく、オーナーや仲介業者によって対応が異なる</span>
                <span data-lang="en">Legal disclosure standards are unclear, leading to inconsistent responses</span>
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">情報収集の困難さ</span>
                <span data-lang="en">Difficulty in Gathering Information</span>
              </h3>
              <p>
                <span data-lang="ja">入居者が独自に調査することは難しく、時間と労力がかかる</span>
                <span data-lang="en">It's difficult for tenants to conduct their own research</span>
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">心理的な不安</span>
                <span data-lang="en">Psychological Concerns</span>
              </h3>
              <p>
                <span data-lang="ja">入居後に事実を知った場合の精神的ダメージと後悔</span>
                <span data-lang="en">Mental distress and regret when facts are discovered after moving in</span>
              </p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">信頼性の欠如</span>
                <span data-lang="en">Lack of Trust</span>
              </h3>
              <p>
                <span data-lang="ja">噂や口コミに頼らざるを得ない現状が、不確実な情報を蔓延させている</span>
                <span data-lang="en">Reliance on rumors spreads uncertain information</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR SOLUTION</span>
            <h2>
              <span data-lang="ja">JikoMapが提供する価値</span>
              <span data-lang="en">Value JikoMap Provides</span>
            </h2>
          </div>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <span className={styles.solutionNumber}>01</span>
              <h3>
                <span data-lang="ja">全国の事故物件を網羅</span>
                <span data-lang="en">Nationwide Coverage</span>
              </h3>
              <p>
                <span data-lang="ja">独自の収集システムと地域ネットワークにより、全国の事故物件情報を収集・検証。公開情報と独自調査を組み合わせ、信頼性の高いデータベースを構築しています。</span>
                <span data-lang="en">Our proprietary collection system and regional network gather and verify stigmatized property information nationwide.</span>
              </p>
            </div>
            <div className={styles.solutionCard}>
              <span className={styles.solutionNumber}>02</span>
              <h3>
                <span data-lang="ja">地図ベースの直感的検索</span>
                <span data-lang="en">Intuitive Map-Based Search</span>
              </h3>
              <p>
                <span data-lang="ja">物件周辺の事故物件情報を地図上で一目で確認。住所検索、駅検索、エリア絞り込みなど、多彩な検索機能で効率的な情報収集が可能です。</span>
                <span data-lang="en">View stigmatized property information around your target property at a glance on the map.</span>
              </p>
            </div>
            <div className={styles.solutionCard}>
              <span className={styles.solutionNumber}>03</span>
              <h3>
                <span data-lang="ja">詳細情報と信頼性スコア</span>
                <span data-lang="en">Detailed Info & Reliability Score</span>
              </h3>
              <p>
                <span data-lang="ja">各物件の詳細情報（発生日時、事案種別、情報ソース）を提供。情報の信頼性を独自のスコアリングで評価し、判断材料として活用できます。</span>
                <span data-lang="en">Provides detailed information for each property with our proprietary reliability scoring.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className={styles.targetSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>WHO IT'S FOR</span>
            <h2>
              <span data-lang="ja">こんな方におすすめ</span>
              <span data-lang="en">Recommended For</span>
            </h2>
          </div>
          <div className={styles.targetGrid}>
            <div className={styles.targetCard}>
              <div className={styles.targetCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4>
                <span data-lang="ja">賃貸検討者</span>
                <span data-lang="en">Renters</span>
              </h4>
              <p>
                <span data-lang="ja">入居前に確認</span>
                <span data-lang="en">Check before moving</span>
              </p>
            </div>
            <div className={styles.targetCard}>
              <div className={styles.targetCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h4>
                <span data-lang="ja">購入検討者</span>
                <span data-lang="en">Buyers</span>
              </h4>
              <p>
                <span data-lang="ja">購入前のリスク確認</span>
                <span data-lang="en">Risk check before buying</span>
              </p>
            </div>
            <div className={styles.targetCard}>
              <div className={styles.targetCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h4>
                <span data-lang="ja">不動産業者</span>
                <span data-lang="en">Real Estate Agents</span>
              </h4>
              <p>
                <span data-lang="ja">デューデリジェンス</span>
                <span data-lang="en">Due diligence</span>
              </p>
            </div>
            <div className={styles.targetCard}>
              <div className={styles.targetCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h4>
                <span data-lang="ja">投資家</span>
                <span data-lang="en">Investors</span>
              </h4>
              <p>
                <span data-lang="ja">投資判断の参考</span>
                <span data-lang="en">Investment decisions</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>
            <span data-lang="ja">まずは無料でお試しください</span>
            <span data-lang="en">Start Your Free Trial</span>
          </h2>
          <p>
            <span data-lang="ja">基本的な物件検索機能は無料でご利用いただけます。<br />まずは気になるエリアの情報をチェックしてみてください。</span>
            <span data-lang="en">Basic property search features are free to use.<br />Start by checking information for areas you're interested in.</span>
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span data-lang="ja">JikoMapを試す</span>
            <span data-lang="en">Try JikoMap</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <span className={styles.ctaNote}>
            <span data-lang="ja">※ 登録不要で基本機能をご利用いただけます</span>
            <span data-lang="en">※ No registration required for basic features</span>
          </span>
        </div>
      </section>
    </div>
  );
}

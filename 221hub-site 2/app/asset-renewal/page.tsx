import Link from 'next/link';
import styles from './page.module.css';

export default function AssetRenewalPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroBadge}>
            <span data-lang="ja">コンサルティングサービス</span>
            <span data-lang="en">Consulting Service</span>
          </span>
          <h1 className={styles.heroTitle}>
            <span data-lang="ja">
              訳あり物件の<br />
              <span className={styles.highlight}>価値を最大化</span>する
            </span>
            <span data-lang="en">
              <span className={styles.highlight}>Maximize Value</span><br />
              of Stigmatized Properties
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span data-lang="ja">
              事故物件・訳あり物件の適正評価から再生戦略、<br />
              出口戦略まで一貫してサポート
            </span>
            <span data-lang="en">
              Comprehensive support from proper valuation to<br />
              revitalization and exit strategies
            </span>
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className={styles.heroBtnPrimary}>
              <span data-lang="ja">無料診断を申し込む</span>
              <span data-lang="en">Apply for Free Assessment</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR PROCESS</span>
            <h2>
              <span data-lang="ja">価値再生のプロセス</span>
              <span data-lang="en">Value Renewal Process</span>
            </h2>
            <p>
              <span data-lang="ja">3つのステップで訳あり物件の価値を最大化します</span>
              <span data-lang="en">Three steps to maximize the value of stigmatized properties</span>
            </p>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>01</div>
              <div className={styles.processContent}>
                <h3>
                  <span data-lang="ja">価値診断</span>
                  <span data-lang="en">Value Assessment</span>
                </h3>
                <p>
                  <span data-lang="ja">物件の現状分析、市場調査、心理的瑕疵の影響度評価を行い、適正な市場価値を算出します。</span>
                  <span data-lang="en">We analyze the property's current state, conduct market research, and evaluate the impact of psychological defects to calculate proper market value.</span>
                </p>
                <ul className={styles.processList}>
                  <li>
                    <span data-lang="ja">現地調査・状態確認</span>
                    <span data-lang="en">On-site inspection</span>
                  </li>
                  <li>
                    <span data-lang="ja">周辺相場・競合分析</span>
                    <span data-lang="en">Market & competitor analysis</span>
                  </li>
                  <li>
                    <span data-lang="ja">瑕疵影響度の定量評価</span>
                    <span data-lang="en">Quantitative defect assessment</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>02</div>
              <div className={styles.processContent}>
                <h3>
                  <span data-lang="ja">戦略立案</span>
                  <span data-lang="en">Strategy Planning</span>
                </h3>
                <p>
                  <span data-lang="ja">診断結果に基づき、最適な活用方法・再生戦略を提案。売却、賃貸、リノベーションなど多角的に検討します。</span>
                  <span data-lang="en">Based on assessment results, we propose optimal utilization methods and renewal strategies, considering sale, rental, and renovation options.</span>
                </p>
                <ul className={styles.processList}>
                  <li>
                    <span data-lang="ja">複数シナリオの比較検討</span>
                    <span data-lang="en">Multiple scenario comparison</span>
                  </li>
                  <li>
                    <span data-lang="ja">収支シミュレーション</span>
                    <span data-lang="en">Financial simulation</span>
                  </li>
                  <li>
                    <span data-lang="ja">リスク・リターン分析</span>
                    <span data-lang="en">Risk-return analysis</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processNumber}>03</div>
              <div className={styles.processContent}>
                <h3>
                  <span data-lang="ja">実行支援</span>
                  <span data-lang="en">Execution Support</span>
                </h3>
                <p>
                  <span data-lang="ja">決定した戦略の実行をサポート。専門家ネットワークを活用し、スムーズな価値再生を実現します。</span>
                  <span data-lang="en">We support the execution of the decided strategy, utilizing our expert network for smooth value renewal.</span>
                </p>
                <ul className={styles.processList}>
                  <li>
                    <span data-lang="ja">リノベーション業者手配</span>
                    <span data-lang="en">Renovation contractor arrangement</span>
                  </li>
                  <li>
                    <span data-lang="ja">売却・賃貸のマッチング</span>
                    <span data-lang="en">Sale/rental matching</span>
                  </li>
                  <li>
                    <span data-lang="ja">契約・手続きサポート</span>
                    <span data-lang="en">Contract & procedure support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>SOLUTIONS</span>
            <h2>
              <span data-lang="ja">提供するソリューション</span>
              <span data-lang="en">Our Solutions</span>
            </h2>
          </div>
          <div className={styles.solutionsGrid}>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">売却支援</span>
                <span data-lang="en">Sale Support</span>
              </h3>
              <p>
                <span data-lang="ja">適正価格での売却を実現。訳あり物件に理解のある買い手とのマッチングを支援。</span>
                <span data-lang="en">Achieve sale at fair price. We match with buyers who understand stigmatized properties.</span>
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">賃貸運用</span>
                <span data-lang="en">Rental Operation</span>
              </h3>
              <p>
                <span data-lang="ja">アフォーダブル住宅として再活用。家賃を抑えたい入居希望者とのマッチング。</span>
                <span data-lang="en">Reuse as affordable housing. Matching with tenants looking for lower rent.</span>
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">リノベーション</span>
                <span data-lang="en">Renovation</span>
              </h3>
              <p>
                <span data-lang="ja">物件の魅力を高めるリノベーション提案。心理的障壁を軽減する設計・デザイン。</span>
                <span data-lang="en">Renovation proposals to enhance property appeal. Design to reduce psychological barriers.</span>
              </p>
            </div>
            <div className={styles.solutionCard}>
              <div className={styles.solutionIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">自治体連携</span>
                <span data-lang="en">Municipality Cooperation</span>
              </h3>
              <p>
                <span data-lang="ja">空き家対策、居住支援施策との連携。地域の住宅課題解決に貢献。</span>
                <span data-lang="en">Cooperation with vacant house measures and housing support policies.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection}>
        <div className={styles.resultsInner}>
          <div className={styles.resultItem}>
            <span className={styles.resultValue}>150+</span>
            <span className={styles.resultLabel}>
              <span data-lang="ja">再生実績</span>
              <span data-lang="en">Properties Renewed</span>
            </span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultValue}>30%</span>
            <span className={styles.resultLabel}>
              <span data-lang="ja">平均価値向上</span>
              <span data-lang="en">Avg. Value Increase</span>
            </span>
          </div>
          <div className={styles.resultItem}>
            <span className={styles.resultValue}>95%</span>
            <span className={styles.resultLabel}>
              <span data-lang="ja">顧客満足度</span>
              <span data-lang="en">Client Satisfaction</span>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>
            <span data-lang="ja">まずは無料診断から</span>
            <span data-lang="en">Start with Free Assessment</span>
          </h2>
          <p>
            <span data-lang="ja">お持ちの物件の価値を無料で診断します。<br />お気軽にご相談ください。</span>
            <span data-lang="en">We'll assess your property's value for free.<br />Feel free to contact us.</span>
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span data-lang="ja">無料診断を申し込む</span>
            <span data-lang="en">Apply for Free Assessment</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <span className={styles.ctaNote}>
            <span data-lang="ja">※ 初回相談・簡易診断は無料です</span>
            <span data-lang="en">※ First consultation and basic assessment are free</span>
          </span>
        </div>
      </section>
    </div>
  );
}

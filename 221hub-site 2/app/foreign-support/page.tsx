import Link from 'next/link';
import styles from './page.module.css';

export default function ForeignSupportPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroContent}>
            <div className={styles.heroLanguages}>
              <span>🇯🇵 日本語</span>
              <span>🇺🇸 English</span>
              <span>🇨🇳 中文</span>
              <span>🇻🇳 Tiếng Việt</span>
            </div>
            <h1 className={styles.heroTitle}>
              <span data-lang="ja">
                言語と文化の壁を越えて、<br />
                日本での住まい探しをサポート
              </span>
              <span data-lang="en">
                Supporting Your Housing Search in Japan,<br />
                Beyond Language and Cultural Barriers
              </span>
            </h1>
            <p className={styles.heroSubtitle}>
              <span data-lang="ja">
                外国人居住者が直面する課題を深く理解し、<br />
                母国語対応と文化的配慮で安心の住まい探しを実現
              </span>
              <span data-lang="en">
                Understanding the challenges foreign residents face,<br />
                providing native language support and cultural consideration
              </span>
            </p>
            <Link href="/contact" className={styles.heroBtn}>
              <span data-lang="ja">無料相談を予約</span>
              <span data-lang="en">Book Free Consultation</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardIcon}>🏠</div>
              <span>
                <span data-lang="ja">物件探し</span>
                <span data-lang="en">Property Search</span>
              </span>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardIcon}>📝</div>
              <span>
                <span data-lang="ja">契約サポート</span>
                <span data-lang="en">Contract Support</span>
              </span>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardIcon}>🤝</div>
              <span>
                <span data-lang="ja">入居後フォロー</span>
                <span data-lang="en">After Move-in Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className={styles.challengeSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>THE CHALLENGE</span>
            <h2>
              <span data-lang="ja">外国人居住者が直面する課題</span>
              <span data-lang="en">Challenges Foreign Residents Face</span>
            </h2>
          </div>
          <div className={styles.challengeGrid}>
            <div className={styles.challengeCard}>
              <div className={styles.challengeCardNumber}>01</div>
              <h3>
                <span data-lang="ja">言語の壁</span>
                <span data-lang="en">Language Barrier</span>
              </h3>
              <p>
                <span data-lang="ja">物件情報、契約書、重要事項説明書など、専門的な日本語の理解が困難</span>
                <span data-lang="en">Difficulty understanding technical Japanese in property listings and contracts</span>
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeCardNumber}>02</div>
              <h3>
                <span data-lang="ja">保証人問題</span>
                <span data-lang="en">Guarantor Issues</span>
              </h3>
              <p>
                <span data-lang="ja">日本人の連帯保証人を見つけることが難しく、契約のハードルに</span>
                <span data-lang="en">Finding a Japanese guarantor can be a major hurdle for contracts</span>
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeCardNumber}>03</div>
              <h3>
                <span data-lang="ja">文化の違い</span>
                <span data-lang="en">Cultural Differences</span>
              </h3>
              <p>
                <span data-lang="ja">敷金・礼金制度、ゴミ出しルールなど、日本特有の慣習への適応</span>
                <span data-lang="en">Adapting to Japanese customs like key money and garbage sorting rules</span>
              </p>
            </div>
            <div className={styles.challengeCard}>
              <div className={styles.challengeCardNumber}>04</div>
              <h3>
                <span data-lang="ja">入居拒否</span>
                <span data-lang="en">Housing Discrimination</span>
              </h3>
              <p>
                <span data-lang="ja">外国人であることを理由に入居を断られるケースが依然として存在</span>
                <span data-lang="en">Cases of rejection based on being a foreign national still exist</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR SERVICES</span>
            <h2>
              <span data-lang="ja">提供するサービス</span>
              <span data-lang="en">Our Services</span>
            </h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">多言語対応</span>
                <span data-lang="en">Multilingual Support</span>
              </h3>
              <p>
                <span data-lang="ja">日本語、英語、中国語、ベトナム語など多言語でのコミュニケーションをサポート。契約書類の翻訳や通訳サービスも提供。</span>
                <span data-lang="en">Support in Japanese, English, Chinese, Vietnamese and more. We also provide document translation and interpretation services.</span>
              </p>
              <ul className={styles.serviceFeatures}>
                <li>
                  <span data-lang="ja">契約書類の翻訳</span>
                  <span data-lang="en">Contract translation</span>
                </li>
                <li>
                  <span data-lang="ja">内見時の通訳同行</span>
                  <span data-lang="en">Interpretation during viewings</span>
                </li>
                <li>
                  <span data-lang="ja">重要事項説明の通訳</span>
                  <span data-lang="en">Important matter explanation</span>
                </li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">契約支援</span>
                <span data-lang="en">Contract Support</span>
              </h3>
              <p>
                <span data-lang="ja">保証人不要の物件紹介や、保証会社の手配をサポート。必要書類の準備から契約締結まで一貫してお手伝い。</span>
                <span data-lang="en">We help with properties that don't require guarantors and arrange guarantee companies. Support from document preparation to contract signing.</span>
              </p>
              <ul className={styles.serviceFeatures}>
                <li>
                  <span data-lang="ja">保証会社の手配</span>
                  <span data-lang="en">Guarantee company arrangement</span>
                </li>
                <li>
                  <span data-lang="ja">必要書類の準備サポート</span>
                  <span data-lang="en">Document preparation support</span>
                </li>
                <li>
                  <span data-lang="ja">契約内容の説明</span>
                  <span data-lang="en">Contract explanation</span>
                </li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">入居後フォロー</span>
                <span data-lang="en">After Move-in Support</span>
              </h3>
              <p>
                <span data-lang="ja">ライフラインの開設手続き、近隣とのコミュニケーション、トラブル時の対応など、入居後も継続してサポート。</span>
                <span data-lang="en">Continued support after moving in, including utility setup, neighbor communication, and trouble resolution.</span>
              </p>
              <ul className={styles.serviceFeatures}>
                <li>
                  <span data-lang="ja">ライフライン開設サポート</span>
                  <span data-lang="en">Utility setup support</span>
                </li>
                <li>
                  <span data-lang="ja">生活ルールの説明</span>
                  <span data-lang="en">Living rules explanation</span>
                </li>
                <li>
                  <span data-lang="ja">トラブル時の相談窓口</span>
                  <span data-lang="en">Trouble consultation service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>
              <span data-lang="ja">サポート実績</span>
              <span data-lang="en">Support Cases</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>
              <span data-lang="ja">契約成功率</span>
              <span data-lang="en">Contract Success Rate</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>4.9</span>
            <span className={styles.statLabel}>
              <span data-lang="ja">顧客満足度</span>
              <span data-lang="en">Customer Satisfaction</span>
            </span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>10+</span>
            <span className={styles.statLabel}>
              <span data-lang="ja">対応言語</span>
              <span data-lang="en">Languages Supported</span>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>
            <span data-lang="ja">まずは無料相談から</span>
            <span data-lang="en">Start with a Free Consultation</span>
          </h2>
          <p>
            <span data-lang="ja">お気軽にご相談ください。あなたの状況に合わせた<br />最適なサポートプランをご提案します。</span>
            <span data-lang="en">Feel free to contact us. We'll propose<br />the best support plan for your situation.</span>
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span data-lang="ja">無料相談を予約</span>
            <span data-lang="en">Book Free Consultation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

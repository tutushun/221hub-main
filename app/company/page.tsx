import Link from 'next/link';
import styles from './page.module.css';

export default function CompanyPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>ABOUT US</span>
          <h1 className={styles.heroTitle}>
            <span data-lang="ja">会社概要</span>
            <span data-lang="en">Company Profile</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span data-lang="ja">不動産情報の透明性を構築し、<br />すべての人が安心して住まいを選べる社会を創る</span>
            <span data-lang="en">Building transparency in real estate information,<br />creating a society where everyone can choose housing with confidence</span>
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.sectionInner}>
          <div className={styles.infoCard}>
            <h2>
              <span data-lang="ja">基本情報</span>
              <span data-lang="en">Basic Information</span>
            </h2>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <th>
                    <span data-lang="ja">会社名</span>
                    <span data-lang="en">Company Name</span>
                  </th>
                  <td>
                    <span data-lang="ja">株式会社221Hub</span>
                    <span data-lang="en">221Hub Inc.</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span data-lang="ja">設立</span>
                    <span data-lang="en">Founded</span>
                  </th>
                  <td>2026年</td>
                </tr>
                <tr>
                  <th>
                    <span data-lang="ja">代表者</span>
                    <span data-lang="en">CEO</span>
                  </th>
                  <td>
                    <span data-lang="ja">筒井 瞬</span>
                    <span data-lang="en">Shun Tsutsui</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span data-lang="ja">所在地</span>
                    <span data-lang="en">Location</span>
                  </th>
                  <td>
                    <span data-lang="ja">東京都新宿区</span>
                    <span data-lang="en">Shinjuku, Tokyo</span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span data-lang="ja">事業内容</span>
                    <span data-lang="en">Business</span>
                  </th>
                  <td>
                    <span data-lang="ja">
                      事故物件情報プラットフォーム運営<br />
                      外国人向け住居支援<br />
                      資産価値再生コンサルティング
                    </span>
                    <span data-lang="en">
                      Stigmatized property information platform<br />
                      Housing support for foreign residents<br />
                      Asset value renewal consulting
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    <span data-lang="ja">連絡先</span>
                    <span data-lang="en">Contact</span>
                  </th>
                  <td>info@221hub.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionInner}>
          <span className={styles.missionLabel}>OUR MISSION</span>
          <p className={styles.missionText}>
            <span data-lang="ja">
              不動産情報の透明性を構築する
            </span>
            <span data-lang="en">
              Building Transparency in Real Estate Information
            </span>
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR VALUES</span>
            <h2>
              <span data-lang="ja">私たちの価値観</span>
              <span data-lang="en">Our Values</span>
            </h2>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>01</span>
              <h3>
                <span data-lang="ja">透明性</span>
                <span data-lang="en">Transparency</span>
              </h3>
              <p>
                <span data-lang="ja">情報の非対称性を解消し、すべての人が公平に情報にアクセスできる環境を創る</span>
                <span data-lang="en">Eliminating information asymmetry, creating an environment where everyone has fair access to information</span>
              </p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>02</span>
              <h3>
                <span data-lang="ja">包摂性</span>
                <span data-lang="en">Inclusivity</span>
              </h3>
              <p>
                <span data-lang="ja">外国人、低所得者など、住居弱者と呼ばれる人々にも選択肢を提供する</span>
                <span data-lang="en">Providing options to housing-vulnerable people including foreign residents and low-income individuals</span>
              </p>
            </div>
            <div className={styles.valueCard}>
              <span className={styles.valueNumber}>03</span>
              <h3>
                <span data-lang="ja">持続可能性</span>
                <span data-lang="en">Sustainability</span>
              </h3>
              <p>
                <span data-lang="ja">既存ストックの有効活用を通じて、持続可能な住宅市場の発展に貢献する</span>
                <span data-lang="en">Contributing to sustainable housing market development through effective use of existing stock</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className={styles.businessSection}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OUR BUSINESS</span>
            <h2>
              <span data-lang="ja">事業内容</span>
              <span data-lang="en">Our Business</span>
            </h2>
          </div>
          <div className={styles.businessGrid}>
            <Link href="/jikomap" className={styles.businessCard}>
              <div className={styles.businessIcon} style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>JikoMap</h3>
              <p>
                <span data-lang="ja">事故物件情報プラットフォーム</span>
                <span data-lang="en">Stigmatized Property Platform</span>
              </p>
            </Link>
            <Link href="/foreign-support" className={styles.businessCard}>
              <div className={styles.businessIcon} style={{ background: 'linear-gradient(135deg, #22c55e 0%, #15803d 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">外国人向け住居支援</span>
                <span data-lang="en">Foreign Resident Support</span>
              </h3>
              <p>
                <span data-lang="ja">多言語対応の住まい探し支援</span>
                <span data-lang="en">Multilingual housing search support</span>
              </p>
            </Link>
            <Link href="/asset-renewal" className={styles.businessCard}>
              <div className={styles.businessIcon} style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3>
                <span data-lang="ja">資産価値再生</span>
                <span data-lang="en">Asset Value Renewal</span>
              </h3>
              <p>
                <span data-lang="ja">訳あり物件のコンサルティング</span>
                <span data-lang="en">Consulting for stigmatized properties</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2>
            <span data-lang="ja">お問い合わせ</span>
            <span data-lang="en">Contact Us</span>
          </h2>
          <p>
            <span data-lang="ja">サービスに関するご質問、取材依頼、<br />パートナーシップのご相談はこちらから</span>
            <span data-lang="en">For service inquiries, press requests,<br />and partnership discussions</span>
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            <span data-lang="ja">お問い合わせ</span>
            <span data-lang="en">Contact</span>
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

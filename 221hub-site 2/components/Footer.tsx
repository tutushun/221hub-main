import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  business: [
    { href: '/jikomap', label: { ja: 'JikoMap', en: 'JikoMap' } },
    { href: '/foreign-support', label: { ja: '外国人向け住居支援', en: 'Foreign Support' } },
    { href: '/asset-renewal', label: { ja: '資産価値再生', en: 'Asset Renewal' } },
    { href: '/b2b', label: { ja: '法人向けサービス', en: 'B2B Services' } },
  ],
  company: [
    { href: '/company', label: { ja: '会社概要', en: 'Company' } },
    { href: '/about', label: { ja: '我々について', en: 'About Us' } },
    { href: '/policy', label: { ja: '方針・信頼性', en: 'Policy' } },
    { href: '/media', label: { ja: 'メディア掲載', en: 'Media' } },
  ],
  support: [
    { href: '/contact', label: { ja: 'お問い合わせ', en: 'Contact' } },
    { href: '/download', label: { ja: '資料ダウンロード', en: 'Downloads' } },
    { href: '/contact', label: { ja: '訂正・削除申請', en: 'Correction Request' } },
  ],
};

const socialLinks = [
  { href: 'https://x.com/221hub', label: 'X (Twitter)', icon: 'x' },
  { href: 'https://www.linkedin.com/company/221hub', label: 'LinkedIn', icon: 'linkedin' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              221Hub
            </Link>
            <p>
              <span data-lang="ja">不動産情報の透明性を構築する</span>
              <span data-lang="en">Building Transparency in Real Estate</span>
            </p>
            <div className={styles.footerSocial}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  {link.icon === 'x' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {link.icon === 'linkedin' && (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.footerNav}>
            <div className={styles.footerSection}>
              <h4>
                <span data-lang="ja">事業内容</span>
                <span data-lang="en">BUSINESS</span>
              </h4>
              <ul className={styles.footerLinks}>
                {footerLinks.business.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span data-lang="ja">{link.label.ja}</span>
                      <span data-lang="en">{link.label.en}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>
                <span data-lang="ja">企業情報</span>
                <span data-lang="en">COMPANY</span>
              </h4>
              <ul className={styles.footerLinks}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span data-lang="ja">{link.label.ja}</span>
                      <span data-lang="en">{link.label.en}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4>
                <span data-lang="ja">サポート</span>
                <span data-lang="en">SUPPORT</span>
              </h4>
              <ul className={styles.footerLinks}>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span data-lang="ja">{link.label.ja}</span>
                      <span data-lang="en">{link.label.en}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>© {currentYear} 221Hub Inc. All Rights Reserved.</p>
            <div className={styles.footerBottomLinks}>
              <Link href="/policy">
                <span data-lang="ja">プライバシーポリシー</span>
                <span data-lang="en">Privacy Policy</span>
              </Link>
              <Link href="/policy">
                <span data-lang="ja">利用規約</span>
                <span data-lang="en">Terms of Service</span>
              </Link>
            </div>
          </div>
          <div className={styles.footerBadge}>
            <span className={styles.footerBadgeDot}></span>
            <span data-lang="ja">全サービス稼働中</span>
            <span data-lang="en">All Services Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

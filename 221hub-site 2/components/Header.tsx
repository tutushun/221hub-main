'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navigation = [
  {
    label: { ja: '事業内容', en: 'Business' },
    items: [
      { href: '/jikomap', label: { ja: 'JikoMap', en: 'JikoMap' } },
      { href: '/foreign-support', label: { ja: '外国人向け住居支援', en: 'Foreign Support' } },
      { href: '/asset-renewal', label: { ja: '資産価値再生', en: 'Asset Renewal' } },
      { href: '/b2b', label: { ja: '法人向けサービス', en: 'B2B Services' } },
    ],
  },
  {
    label: { ja: '企業情報', en: 'Company' },
    items: [
      { href: '/company', label: { ja: '会社概要', en: 'Company' } },
      { href: '/about', label: { ja: '我々について', en: 'About Us' } },
      { href: '/vision', label: { ja: 'IRビジョン', en: 'IR Vision' } },
      { href: '/policy', label: { ja: '方針・信頼性', en: 'Policy' } },
    ],
  },
  { href: '/insights', label: { ja: 'インサイト', en: 'Insights' } },
  { href: '/contact', label: { ja: 'お問い合わせ', en: 'Contact' } },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>221Hub</span>
        </Link>

        <nav className={styles.nav}>
          {navigation.map((item, index) => (
            'items' in item ? (
              <div
                key={index}
                className={styles.dropdown}
                onMouseEnter={() => setOpenDropdown(item.label.ja)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className={styles.dropdownToggle}>
                  <span data-lang="ja">{item.label.ja}</span>
                  <span data-lang="en">{item.label.en}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className={`${styles.dropdownMenu} ${openDropdown === item.label.ja ? styles.open : ''}`}>
                  {item.items.map((subItem, subIndex) => (
                    <Link key={subIndex} href={subItem.href} className={styles.dropdownItem}>
                      <span data-lang="ja">{subItem.label.ja}</span>
                      <span data-lang="en">{subItem.label.en}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={index} href={item.href} className={styles.navLink}>
                <span data-lang="ja">{item.label.ja}</span>
                <span data-lang="en">{item.label.en}</span>
              </Link>
            )
          ))}
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.langSwitch}>
            <button className={styles.langBtn}>JP</button>
            <button className={styles.langBtn}>EN</button>
          </div>
          <Link href="/contact" className={styles.ctaBtn}>
            <span data-lang="ja">お問い合わせ</span>
            <span data-lang="en">Contact</span>
          </Link>
        </div>

        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="メニューを開く"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavContent}>
          {navigation.map((item, index) => (
            'items' in item ? (
              <div key={index} className={styles.mobileNavGroup}>
                <span className={styles.mobileNavGroupLabel}>{item.label.ja}</span>
                {item.items.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subItem.label.ja}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label.ja}
              </Link>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}

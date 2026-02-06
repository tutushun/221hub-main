'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.page}>
        <section className={styles.successSection}>
          <div className={styles.successInner}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h1>
              <span data-lang="ja">送信完了</span>
              <span data-lang="en">Submission Complete</span>
            </h1>
            <p>
              <span data-lang="ja">お問い合わせありがとうございます。<br />内容を確認の上、担当者よりご連絡いたします。</span>
              <span data-lang="en">Thank you for your inquiry.<br />We will review and contact you soon.</span>
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>CONTACT</span>
          <h1 className={styles.heroTitle}>
            <span data-lang="ja">お問い合わせ</span>
            <span data-lang="en">Contact Us</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span data-lang="ja">サービスに関するご質問、取材依頼、パートナーシップのご相談など<br />お気軽にお問い合わせください</span>
            <span data-lang="en">Feel free to contact us for service inquiries,<br />press requests, or partnership discussions</span>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="category">
                <span data-lang="ja">お問い合わせ種別</span>
                <span data-lang="en">Inquiry Type</span>
                <span className={styles.required}>*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">
                  選択してください / Please select
                </option>
                <option value="service">
                  サービスについて / Service Inquiry
                </option>
                <option value="partnership">
                  パートナーシップ / Partnership
                </option>
                <option value="press">
                  取材・メディア / Press & Media
                </option>
                <option value="career">
                  採用について / Career
                </option>
                <option value="other">
                  その他 / Other
                </option>
              </select>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  <span data-lang="ja">お名前</span>
                  <span data-lang="en">Name</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="山田 太郎 / Taro Yamada"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">
                  <span data-lang="ja">メールアドレス</span>
                  <span data-lang="en">Email</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">
                <span data-lang="ja">会社名・組織名</span>
                <span data-lang="en">Company / Organization</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="株式会社〇〇 / Company Name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">
                <span data-lang="ja">お問い合わせ内容</span>
                <span data-lang="en">Message</span>
                <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="お問い合わせ内容をご記入ください / Please enter your message"
              />
            </div>

            <div className={styles.formNote}>
              <p>
                <span data-lang="ja">※ 通常2〜3営業日以内にご返信いたします</span>
                <span data-lang="en">※ We typically respond within 2-3 business days</span>
              </p>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span data-lang="ja">送信中...</span>
                  <span data-lang="en">Sending...</span>
                </>
              ) : (
                <>
                  <span data-lang="ja">送信する</span>
                  <span data-lang="en">Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>
              <span data-lang="ja">その他のお問い合わせ方法</span>
              <span data-lang="en">Other Contact Methods</span>
            </h3>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className={styles.contactLabel}>Email</span>
                <a href="mailto:info@221hub.com">info@221hub.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

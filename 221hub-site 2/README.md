# 221Hub Website

221Hubの公式ウェブサイト - Next.js + Notion CMS

## 🚀 セットアップ手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. Notionの設定

詳細は `NOTION_SETUP.md` を参照してください。

1. [Notion Integrations](https://www.notion.so/my-integrations) でインテグレーションを作成
2. Notionでデータベースを作成し、インテグレーションを接続
3. 環境変数を設定

### 3. 環境変数の設定

`.env.local` ファイルを作成：

```
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxx
NOTION_INSIGHTS_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://221hub.com
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でサイトを確認できます。

## 📁 プロジェクト構成

```
221hub-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 共通レイアウト
│   ├── page.tsx            # ホームページ
│   ├── insights/           # インサイト（記事一覧・詳細）
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── jikomap/            # JikoMapページ
│   ├── foreign-support/    # 外国人支援ページ
│   ├── asset-renewal/      # 資産価値再生ページ
│   ├── b2b/                # 法人向けページ
│   ├── company/            # 会社概要ページ
│   ├── about/              # 我々についてページ
│   ├── contact/            # お問い合わせページ
│   └── ...
├── components/             # 共通コンポーネント
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                    # ユーティリティ
│   └── notion.ts           # Notion API連携
├── styles/                 # スタイル
│   └── globals.css
└── public/                 # 静的ファイル
```

## 🌐 Vercelへのデプロイ

### 1. GitHubにプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/221hub-site.git
git push -u origin main
```

### 2. Vercelでプロジェクトをインポート

1. [Vercel](https://vercel.com) にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. 環境変数を設定：
   - `NOTION_API_KEY`
   - `NOTION_INSIGHTS_DATABASE_ID`
   - `NEXT_PUBLIC_SITE_URL`
5. 「Deploy」をクリック

### 3. カスタムドメインの設定

1. Vercelプロジェクトの「Settings」→「Domains」
2. `221hub.com` を追加
3. DNSレコードを設定（Onamae.comの場合）：
   - Aレコード: `@` → `76.76.21.21`
   - CNAMEレコード: `www` → `cname.vercel-dns.com`

## 📝 記事の追加方法

1. Notionのデータベースに新しい行を追加
2. 各プロパティを入力（タイトル、カテゴリ、公開日など）
3. ページを開いて本文を執筆
4. 「公開状態」にチェックを入れる
5. 自動的にサイトに反映（最大60秒）

## 🔧 開発コマンド

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # Lintチェック
```

## 📄 ライセンス

© 2026 221Hub Inc. All Rights Reserved.

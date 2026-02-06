import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

// Notion クライアントの初期化
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Markdown 変換用インスタンス
const n2m = new NotionToMarkdown({ notionClient: notion });

// 記事の型定義
export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  publishedAt: string;
  readingTime: string;
  readingTimeEn: string;
  lead: string;
  leadEn: string;
  content: string;
  contentEn: string;
  isPublished: boolean;
  iconColor: string;
  createdAt: string;
  updatedAt: string;
}

// カテゴリーとアイコンカラーのマッピング
const categoryColors: Record<string, string> = {
  '市場分析': '#3b82f6',
  'Market': '#3b82f6',
  'テクノロジー': '#8b5cf6',
  'Technology': '#8b5cf6',
  '法規制': '#ef4444',
  'Regulations': '#ef4444',
  '外国人支援': '#22c55e',
  'Foreign Support': '#22c55e',
  '資産価値': '#f59e0b',
  'Asset Value': '#f59e0b',
  '相続・資産': '#6366f1',
  'Inheritance': '#6366f1',
};

// Notionプロパティから値を安全に取得するヘルパー
function getPropertyValue(property: any, type: string): string {
  if (!property) return '';
  
  switch (type) {
    case 'title':
      return property.title?.[0]?.plain_text || '';
    case 'rich_text':
      return property.rich_text?.[0]?.plain_text || '';
    case 'select':
      return property.select?.name || '';
    case 'date':
      return property.date?.start || '';
    case 'checkbox':
      return property.checkbox ? 'true' : 'false';
    default:
      return '';
  }
}

// 記事一覧を取得
export async function getInsights(): Promise<InsightArticle[]> {
  const databaseId = process.env.NOTION_INSIGHTS_DATABASE_ID;
  
  if (!databaseId) {
    console.error('NOTION_INSIGHTS_DATABASE_ID is not set');
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: '公開状態',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: '公開日',
          direction: 'descending',
        },
      ],
    });

    const articles: InsightArticle[] = [];

    for (const page of response.results) {
      if (!('properties' in page)) continue;
      
      const props = page.properties;
      const category = getPropertyValue(props['カテゴリ'], 'select');
      
      articles.push({
        id: page.id,
        slug: getPropertyValue(props['スラッグ'], 'rich_text') || page.id.replace(/-/g, ''),
        title: getPropertyValue(props['タイトル'], 'title'),
        titleEn: getPropertyValue(props['タイトル（英語）'], 'rich_text'),
        category: category,
        categoryEn: getPropertyValue(props['カテゴリ（英語）'], 'rich_text') || category,
        publishedAt: getPropertyValue(props['公開日'], 'date'),
        readingTime: getPropertyValue(props['読了時間'], 'rich_text') || '5分で読める',
        readingTimeEn: getPropertyValue(props['読了時間（英語）'], 'rich_text') || '5 min read',
        lead: getPropertyValue(props['リード文'], 'rich_text'),
        leadEn: getPropertyValue(props['リード文（英語）'], 'rich_text'),
        content: '', // 一覧では本文は取得しない
        contentEn: '',
        isPublished: getPropertyValue(props['公開状態'], 'checkbox') === 'true',
        iconColor: categoryColors[category] || '#6b7280',
        createdAt: 'created_time' in page ? page.created_time : '',
        updatedAt: 'last_edited_time' in page ? page.last_edited_time : '',
      });
    }

    return articles;
  } catch (error) {
    console.error('Error fetching insights:', error);
    return [];
  }
}

// 個別記事を取得
export async function getInsightBySlug(slug: string): Promise<InsightArticle | null> {
  const databaseId = process.env.NOTION_INSIGHTS_DATABASE_ID;
  
  if (!databaseId) {
    console.error('NOTION_INSIGHTS_DATABASE_ID is not set');
    return null;
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: 'スラッグ',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];
    if (!('properties' in page)) return null;

    const props = page.properties;
    const category = getPropertyValue(props['カテゴリ'], 'select');

    // ページの本文をMarkdownに変換
    const mdBlocks = await n2m.pageToMarkdown(page.id);
    const mdContent = n2m.toMarkdownString(mdBlocks);

    return {
      id: page.id,
      slug: getPropertyValue(props['スラッグ'], 'rich_text') || page.id.replace(/-/g, ''),
      title: getPropertyValue(props['タイトル'], 'title'),
      titleEn: getPropertyValue(props['タイトル（英語）'], 'rich_text'),
      category: category,
      categoryEn: getPropertyValue(props['カテゴリ（英語）'], 'rich_text') || category,
      publishedAt: getPropertyValue(props['公開日'], 'date'),
      readingTime: getPropertyValue(props['読了時間'], 'rich_text') || '5分で読める',
      readingTimeEn: getPropertyValue(props['読了時間（英語）'], 'rich_text') || '5 min read',
      lead: getPropertyValue(props['リード文'], 'rich_text'),
      leadEn: getPropertyValue(props['リード文（英語）'], 'rich_text'),
      content: mdContent.parent,
      contentEn: '', // 英語版は別途対応
      isPublished: getPropertyValue(props['公開状態'], 'checkbox') === 'true',
      iconColor: categoryColors[category] || '#6b7280',
      createdAt: 'created_time' in page ? page.created_time : '',
      updatedAt: 'last_edited_time' in page ? page.last_edited_time : '',
    };
  } catch (error) {
    console.error('Error fetching insight by slug:', error);
    return null;
  }
}

// 全スラッグを取得（静的生成用）
export async function getAllInsightSlugs(): Promise<string[]> {
  const insights = await getInsights();
  return insights.map((insight) => insight.slug);
}

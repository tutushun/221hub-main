/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com', 'www.notion.so'],
  },
  // 静的エクスポートが必要な場合はコメントを外す
  // output: 'export',
}

module.exports = nextConfig

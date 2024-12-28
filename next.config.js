/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'default',
    path: '/',
    domains: ['localhost'],
  },
  basePath: '',
  distDir: 'out',
  assetPrefix: './',
}

module.exports = nextConfig 
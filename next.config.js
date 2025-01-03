/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader']
    });
    return config;
  }
}

module.exports = nextConfig 
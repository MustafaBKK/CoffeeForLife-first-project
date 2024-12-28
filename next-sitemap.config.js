/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://coffeeprojectforus.netlify.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/500'],
} 
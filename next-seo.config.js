export default {
  titleTemplate: '%s | Coffee World',
  defaultTitle: 'Coffee World - Kahvenin Büyülü Dünyası',
  description: 'Dünyanın en özel kahve çekirdeklerini ve hikayelerini keşfedin.',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://coffeeprojectforus.netlify.app/',
    siteName: 'Coffee World',
    images: [
      {
        url: 'https://coffeeprojectforus.netlify.app/coffee-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Coffee World',
      },
    ],
  },
  twitter: {
    handle: '@coffeeworld',
    site: '@coffeeworld',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#2c1810',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
} 
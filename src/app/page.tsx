"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Türk Kahvesi'nin Tarihi",
    date: "15 Mayıs 2024",
    readTime: "5 dk okuma",
    summary: "Türk kahvesi kültürünün zengin tarihi ve gelenekleri hakkında bilgi edinin.",
    image: "/turkish-coffee.jpg",
    content: `
      Türk kahvesi, UNESCO tarafından "İnsanlığın Somut Olmayan Kültürel Mirası" listesine alınmış benzersiz bir içecektir. 16. yüzyılda Osmanlı İmparatorluğu döneminde İstanbul'a gelen kahve, kısa sürede saray ve toplum hayatının vazgeçilmez bir parçası haline geldi.

      Türk kahvesi hazırlama yöntemi, kahve kültürüne benzersiz bir katkı sağlamıştır. İnce öğütülmüş kahve, su ve isteğe bağlı şeker ile cezve içinde pişirilir. Bu yöntem, kahvenin tüm aromalarını ve lezzetini en üst düzeyde ortaya çıkarır.

      Türk kahvesi sadece bir içecek değil, aynı zamanda sosyal hayatın, misafirperverliğin ve gelecek falının da önemli bir parçasıdır. Kahve ikramı, sohbetin başlangıcı ve dostluğun simgesidir.
    `
  },
  {
    title: "Ethiopia Kahve Hikayesi",
    date: "12 Mayıs 2024",
    readTime: "7 dk okuma",
    summary: "Kahvenin anavatanı Ethiopia'nın kahve kültürü ve üretim yöntemleri.",
    image: "/ethiopia-story.jpg",
    content: `
      Kahvenin hikayesi, Ethiopia'nın yeşil tepelerinde başlar. Efsaneye göre, 9. yüzyılda yaşayan Kaldi adlı bir keçi çobanı, keçilerinin bazı kırmızı meyveleri yedikten sonra unusual derecede enerjik olduklarını fark eder.

      Bu keşif, kahvenin dünya serüveninin başlangıcı olur. Ethiopia'nın Kaffa bölgesi, kahvenin anavatanı olarak kabul edilir. Burada yetişen yabani kahve ağaçları, bugün bildiğimiz tüm kahve çeşitlerinin atasıdır.

      Ethiopia'da kahve sadece bir içecek değil, aynı zamanda kutsal bir ritüeldir. Geleneksel kahve seremonisi, topluluk bağlarını güçlendirir ve misafirperverliğin en önemli göstergesidir.
    `
  },
  {
    title: "Japon Kahve Kültürü",
    date: "10 Mayıs 2024",
    readTime: "6 dk okuma",
    summary: "Japonya'nın benzersiz kahve kültürü ve modern demleme teknikleri.",
    image: "/japan-coffee.jpg",
    content: `
      Japonya'nın kahve kültürü, geleneksel çay seremonisinin inceliği ile modern kahve demleme tekniklerinin mükemmel bir birleşimidir. 1800'lerin sonlarında başlayan kahve serüveni, bugün dünya kahve kültürüne önemli katkılar sağlamaktadır.

      Japon kahve ustalarının geliştirdiği pour-over yöntemi, dünya çapında kabul görmüş bir demleme tekniğidir. Bu yöntem, her bir damla suyun kahve ile mükemmel temasını sağlayarak, en iyi aromayı ortaya çıkarır.

      Tokyo'nun dar sokaklarındaki küçük kahve dükkanlarından, modern üçüncü dalga kahvecilere kadar, Japon kahve kültürü sürekli evrim geçirmektedir. Ancak değişmeyen tek şey, mükemmeliyetçilik ve kalite arayışıdır.
    `
  }
];

const coffeeOrigins = [
  {
    name: "Arabica",
    image: "/arabica.jpg",
    description: "Dünya'nın en popüler kahve türü, yumuşak ve aromatik tadıyla bilinir."
  },
  {
    name: "Robusta",
    image: "/robusta.jpg",
    description: "Güçlü ve yoğun tada sahip, yüksek kafeinli kahve türü."
  },
  {
    name: "Liberica",
    image: "/liberica.jpg",
    description: "Nadir bulunan, meyvemsi ve çiçeksi aromaya sahip özel kahve türü."
  },
  {
    name: "Brasil",
    image: "/brasil.jpg",
    description: "Düşük asidite, yoğun çikolata ve fındık notalarıyla tanınan yumuşak içimli kahve."
  },
  {
    name: "Ethiopia",
    image: "/ethiopia.jpg",
    description: "Çiçeksi ve meyvemsi notalar, yüksek asidite ile kahvenin anavatanından gelen özel tat."
  }
];

const coffeeRecipes = [
  {
    name: "Türk Kahvesi",
    image: "/turkish-coffee.jpg",
    description: "Geleneksel Türk kahvesi hazırlama yöntemi.",
    recipe: "İnce öğütülmüş kahve + su + isteğe bağlı şeker, cezve ile pişirilir"
  },
  {
    name: "White Mocha",
    image: "/white-mocha.jpg",
    description: "Beyaz çikolata ve espresso'nun muhteşem uyumu.",
    recipe: "Espresso + beyaz çikolata sosu + buharlanmış süt + süt köpüğü"
  },
  {
    name: "Spanish Latte",
    image: "/spanish-latte.jpg",
    description: "Yoğunlaştırılmış süt ile hazırlanan özel latte.",
    recipe: "Espresso + yoğunlaştırılmış süt + buharlanmış süt"
  },
  {
    name: "Latte",
    image: "/latte.jpg",
    description: "Kadifemsi süt köpüğü ile hazırlanan klasik latte.",
    recipe: "Espresso + buharlanmış süt + ince süt köpüğü"
  },
  {
    name: "Cappuccino",
    image: "/cappuccino.jpg",
    description: "Eşit oranda espresso, süt ve süt köpüğü.",
    recipe: "Espresso + buharlanmış süt + yoğun süt köpü��ü"
  },
  {
    name: "Chemex",
    image: "/chemex.jpg",
    description: "El yapımı filtre kahve demleme yöntemi.",
    recipe: "30g kahve + 500ml su (94°C) + Chemex filtre kağıdı"
  },
  {
    name: "V60 Pour Over",
    image: "/v60.jpg",
    description: "Japon tarzı damlatma yöntemi ile hazırlanan kahve.",
    recipe: "22g kahve + 350ml su (92-96°C) + V60 filtre kağıdı"
  },
  {
    name: "Cold Brew",
    image: "/cold-brew-coffee.jpg",
    description: "Soğuk demleme yöntemi ile hazırlanan kahve.",
    recipe: "100g kahve + 1L su, 12-24 saat soğuk demleme"
  }
];

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <main className="min-h-screen bg-[#f8f3e7]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810] bg-opacity-90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Sol Menü */}
            <div className="flex items-center gap-8">
              <a href="#coffee-types" className="hover:text-[#d4a574] transition-colors">
                {language === 'tr' ? 'Kahve Çeşitleri' : 'Coffee Types'}
              </a>
            </div>

            {/* Orta Logo */}
            <span className="flex items-center gap-3 text-lg">
              <span className="text-[#d4a574] text-xl">◇</span>
              <span className="font-serif tracking-wider text-[#e5b585]">Made by Mustafa</span>
              <span className="text-[#d4a574] text-xl">◇</span>
            </span>

            {/* Sağ Menü ve Dil Seçimi */}
            <div className="flex items-center gap-8">
              <a href="#recipes" className="hover:text-[#d4a574] transition-colors">
                {language === 'tr' ? 'Tarifler' : 'Recipes'}
              </a>
              
              {/* Dil Seçimi */}
              <div className="flex items-center gap-2 bg-[#1a110b] rounded-full p-1">
                <button
                  onClick={() => setLanguage('tr')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    language === 'tr'
                      ? 'bg-[#d4a574] text-[#2c1810]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  TR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-[#d4a574] text-[#2c1810]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/coffee-hero.jpg"
            alt="Kahve"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {language === 'tr' ? 'Kahvenin Büyülü Dünyası' : 'The Magical World of Coffee'}
          </h1>
          <p className="text-xl md:text-2xl">
            {language === 'tr' 
              ? 'Dünyanın en özel kahve çekirdeklerini ve hikayelerini keşfedin'
              : 'Discover the world\'s most special coffee beans and their stories'
            }
          </p>
        </div>
      </section>

      {/* Kahve Türleri Section */}
      <section id="coffee-types" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">
          {language === 'tr' ? 'Popüler Kahve Türleri' : 'Popular Coffee Types'}
        </h2>
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="flex gap-8 w-max px-4 snap-x snap-mandatory">
              {coffeeOrigins.map((coffee, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0 transition-transform hover:scale-105 snap-center"
                >
                  <div className="h-48 relative">
                    <Image
                      src={coffee.image}
                      alt={coffee.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{coffee.name}</h3>
                    <p className="text-gray-600">{coffee.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Buttons */}
          <button 
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#2c1810]/80 text-white p-3 rounded-full hover:bg-[#2c1810] transition-colors"
          >
            ←
          </button>
          <button 
            onClick={() => {
              const container = document.querySelector('.overflow-x-auto');
              if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2c1810]/80 text-white p-3 rounded-full hover:bg-[#2c1810] transition-colors"
          >
            →
          </button>
        </div>
      </section>

      {/* Kahve Tarifleri Section */}
      <section id="recipes" className="py-20 px-4 md:px-8 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">
          {language === 'tr' ? 'Kahve Hazırlama Yöntemleri' : 'Coffee Brewing Methods'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coffeeRecipes.map((coffee, index) => (
            <div key={index} className="bg-[#f8f3e7] rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{coffee.name}</h3>
                <p className="text-gray-600 mb-4">{coffee.description}</p>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    {language === 'tr' ? 'Tarif:' : 'Recipe:'}
                  </h4>
                  <p className="text-sm text-gray-600">{coffee.recipe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 bg-[#f8f3e7]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">
            {language === 'tr' ? 'Kahve Hikayeleri' : 'Coffee Stories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <button className="text-[#2c1810] font-semibold hover:text-[#8b4513] transition-colors">
                    {language === 'tr' ? 'Devamını Oku' : 'Read More →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-[#2c1810]">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                <span>{selectedPost.date}</span>
              </div>
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* İletişim */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:mustafakokcok@outlook.com" className="hover:text-[#d4a574] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    mustafakokcok@outlook.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MustafaBKK" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mustafa-kökçok-365b90340/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Hızlı Bağlantılar */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">
                {language === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#coffee-types" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'Kahve Çeşitleri' : 'Coffee Types'}
                  </a>
                </li>
                <li>
                  <a href="#recipes" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'Tarifler' : 'Recipes'}
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'Blog' : 'Blog'}
                  </a>
                </li>
              </ul>
            </div>

            {/* Yasal */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">
                {language === 'tr' ? 'Yasal' : 'Legal'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'Kullanım Şartları' : 'Terms of Use'}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    {language === 'tr' ? 'KVKK' : 'Privacy Notice'}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© 2024 {language === 'tr' ? 'Kahve Dünyası' : 'Coffee World'}. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

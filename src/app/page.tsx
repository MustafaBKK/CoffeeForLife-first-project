"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  content: string;
}

interface Recipe {
  name: string;
  image: string;
  description: string;
  recipe: string;
}

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  // Sabit veriler component içinde tanımlanıyor
  const blogPosts: BlogPost[] = [
    {
      title: language === 'tr' ? "Kahvenin Sağlığa Faydaları" : "Health Benefits of Coffee",
      date: language === 'tr' ? "15 Mayıs 2024" : "May 15, 2024",
      readTime: language === 'tr' ? "5 dk okuma" : "5 min read",
      summary: language === 'tr'
        ? "Düzenli kahve tüketiminin vücut ve zihin sağlığına olan olumlu etkileri."
        : "Positive effects of regular coffee consumption on body and mind health.",
      image: "/coffee-benefits.jpg",
      content: language === 'tr'
        ? `Kahve, sadece lezzetli bir içecek değil, aynı zamanda sağlığımıza birçok faydası olan doğal bir kaynaktır. Bilimsel araştırmalar, düzenli kahve tüketiminin çeşitli sağlık yararları sağladığını göstermektedir.

          Antioksidan Kaynağı: Kahve, polifenoller başta olmak üzere güçlü antioksidanlar içerir. Bu bileşikler, vücudumuzu serbest radikallere karşı korur ve yaşlanma karşıtı etki gösterir. Düzenli kahve tüketimi, hücre hasarını önlemeye yardımcı olur.

          Metabolizma ve Enerji: Kahvenin içerdiği kafein, metabolizma hızını artırır ve yağ yakımını destekler. Fiziksel performansı artırarak egzersiz verimliliğini yükseltir. Ayrıca enerji seviyelerini artırarak günlük aktivitelerde daha dinç olmamızı sağlar.

          Zihinsel Performans: Kahve, dikkat ve konsantrasyonu artırır, hafızayı güçlendirir. Düzenli kahve tüketimi, bilişsel fonksiyonların korunmasına yardımcı olur ve yaşa bağlı mental gerilemeyi yavaşlatabilir.

          Karaciğer Sağlığı: Araştırmalar, kahve tüketiminin karaciğer sağlığını desteklediğini ve karaciğer hastalıkları riskini azaltabileceğini göstermektedir.`
        : `Coffee is not just a delicious beverage, but also a natural source with many health benefits. Scientific research shows that regular coffee consumption provides various health benefits.

          Antioxidant Source: Coffee contains powerful antioxidants, especially polyphenols. These compounds protect our body against free radicals and show anti-aging effects. Regular coffee consumption helps prevent cell damage.

          Metabolism and Energy: The caffeine in coffee increases metabolism rate and supports fat burning. It enhances physical performance and exercise efficiency. It also increases energy levels, making us more vigorous in daily activities.

          Mental Performance: Coffee improves attention and concentration, strengthens memory. Regular coffee consumption helps maintain cognitive functions and may slow down age-related mental decline.

          Liver Health: Research shows that coffee consumption supports liver health and may reduce the risk of liver diseases.`
    },
    {
      title: language === 'tr' ? "Kahve Demleme Sanatı" : "The Art of Coffee Brewing",
      date: language === 'tr' ? "12 Mayıs 2024" : "May 12, 2024",
      readTime: language === 'tr' ? "4 dk okuma" : "4 min read",
      summary: language === 'tr'
        ? "Farklı demleme teknikleri ve püf noktaları."
        : "Different brewing techniques and tips.",
      image: "/brewing-art.jpg",
      content: language === 'tr'
        ? `Kahve demleme, basit gibi görünse de aslında ince ayarlar ve dikkat gerektiren bir sanattır. Her bir demleme yöntemi, kahvenin farklı özelliklerini ortaya çıkarır.

          Pour-over yöntemi, kahvenin tüm aromalarını açığa çıkaran hassas bir tekniktir. Su sıcaklığı, kahve granül boyutu ve demleme süresi gibi faktörler, final tadını önemli ölçüde etkiler.

          French Press, kahvenin yağlarını ve zengin tatlarını koruyan geleneksel bir yöntemdir. Doğru bekleme süresi ve presleme tekniği, mükemmel bir fincan için kritik öneme sahiptir.

          Espresso hazırlama ise başlı başına bir uzmanlık gerektirir. Doğru basınç, su sıcaklığı ve öğütme inceliği, kusursuz bir espresso için şarttır.`
        : `Coffee brewing, although it seems simple, is an art that requires fine adjustments and attention. Each brewing method brings out different characteristics of coffee.

          The pour-over method is a precise technique that reveals all the aromas of coffee. Factors such as water temperature, coffee particle size, and brewing time significantly affect the final taste.

          French Press is a traditional method that preserves coffee oils and rich flavors. The correct steeping time and pressing technique are critical for a perfect cup.

          Espresso preparation requires expertise in itself. Correct pressure, water temperature, and grinding fineness are essential for a perfect espresso.`
    },
    {
      title: language === 'tr' ? "Japon Kahve Kültürü" : "Japanese Coffee Culture",
      date: language === 'tr' ? "10 Mayıs 2024" : "May 10, 2024",
      readTime: language === 'tr' ? "6 dk okuma" : "6 min read",
      summary: language === 'tr'
        ? "Japonya'nın benzersiz kahve kültürü ve modern demleme teknikleri."
        : "Japan's unique coffee culture and modern brewing techniques.",
      image: "/japan-coffee.jpg",
      content: language === 'tr'
        ? `Japonya'nın kahve kültürü, geleneksel çay seremonisinin inceliği ile modern kahve demleme tekniklerinin mükemmel bir birleşimidir. 1800'lerin sonlarında başlayan kahve serüveni, bugün dünya kahve kültürüne önemli katkılar sağlamaktadır.

          Japon kahve ustalarının geliştirdiği pour-over yöntemi, dünya çapında kabul görmüş bir demleme tekniğidir. Bu yöntem, her bir damla suyun kahve ile mükemmel temasını sağlayarak, en iyi aromayı ortaya çıkarır.

          Tokyo'nun dar sokaklarındaki küçük kahve dükkanlarından, modern üçüncü dalga kahvecilere kadar, Japon kahve kültürü sürekli evrim geçirmektedir. Ancak değişmeyen tek şey, mükemmeliyetçilik ve kalite arayışıdır.`
        : `Japanese coffee culture is a perfect blend of traditional tea ceremony finesse and modern coffee brewing techniques. The coffee journey that began in the late 1800s makes significant contributions to world coffee culture today.

          The pour-over method developed by Japanese coffee masters is a globally accepted brewing technique. This method ensures perfect contact between each drop of water and coffee, bringing out the best aroma.

          From small coffee shops in Tokyo's narrow streets to modern third-wave coffee shops, Japanese coffee culture is constantly evolving. However, the one thing that remains unchanged is the pursuit of perfection and quality.`
    }
  ];

  const coffeeOrigins = [
    {
      name: "Arabica",
      image: "/arabica.jpg",
      description: language === 'tr' 
        ? "Dünya'nın en popüler kahve türü, yumuşak ve aromatik tadıyla bilinir."
        : "World's most popular coffee type, known for its smooth and aromatic taste."
    },
    {
      name: "Robusta",
      image: "/robusta.jpg",
      description: language === 'tr'
        ? "Güçlü ve yoğun tada sahip, yüksek kafeinli kahve türü."
        : "High caffeine coffee type with strong and intense taste."
    },
    {
      name: "Liberica",
      image: "/liberica.jpg",
      description: language === 'tr'
        ? "Nadir bulunan, meyvemsi ve çiçeksi aromaya sahip özel kahve türü."
        : "Rare coffee type with fruity and floral aroma."
    },
    {
      name: "Brasil",
      image: "/brasil.jpg",
      description: language === 'tr'
        ? "Düşük asidite, yoğun çikolata ve fındık notalarıyla tanınan yumuşak içimli kahve."
        : "Smooth coffee known for its low acidity, intense chocolate and nutty notes."
    },
    {
      name: "Ethiopia",
      image: "/ethiopia.jpg",
      description: language === 'tr'
        ? "Çiçeksi ve meyvemsi notalar, yüksek asidite ile kahvenin anavatanından gelen özel tat."
        : "Special taste from the homeland of coffee with floral and fruity notes, high acidity."
    },
    {
      name: "Brasil Irmas Pereira",
      image: "/brasil-irmas.jpg",
      description: language === 'tr'
        ? "Karamel tatlılığı, badem ve çikolata notaları ile öne çıkan, kadın üreticilerden gelen özel kahve."
        : "Special coffee from women producers, featuring caramel sweetness, almond and chocolate notes."
    },
    {
      name: "Colombia Monte Blanco",
      image: "/colombia-monte.jpg",
      description: language === 'tr'
        ? "Yüksek rakımda yetiştirilen, şeftali ve bergamot notalarıyla zengin, dengeli asiditeye sahip kahve."
        : "High-altitude coffee with rich peach and bergamot notes, balanced acidity."
    },
    {
      name: "Colombia El Mirador Koji",
      image: "/colombia-mirador.jpg",
      description: language === 'tr'
        ? "Koji fermentasyonu ile işlenen, tropik meyve ve karamel notalarına sahip özel işlem kahve."
        : "Specially processed coffee with Koji fermentation, featuring tropical fruit and caramel notes."
    },
    {
      name: "Rwanda Kilimbi Nyamasheke",
      image: "/rwanda-kilimbi.jpg",
      description: language === 'tr'
        ? "Böğürtlen ve narenciye notaları ile parlak asiditeye sahip, Rwanda'nın seçkin kahvelerinden."
        : "One of Rwanda's finest coffees with blackberry and citrus notes, bright acidity."
    }
  ];

  const coffeeRecipes = [
    {
      name: language === 'tr' ? "Türk Kahvesi" : "Turkish Coffee",
      image: "/turkish-coffee.jpg",
      description: language === 'tr'
        ? "Geleneksel Türk kahvesi hazırlama yöntemi."
        : "Traditional Turkish coffee brewing method.",
      recipe: language === 'tr'
        ? "İnce öğütülmüş kahve + su + isteğe bağlı şeker, cezve ile pişirilir"
        : "Finely ground coffee + water + optional sugar, brewed in cezve"
    },
    {
      name: "White Mocha",
      image: "/white-mocha.jpg",
      description: language === 'tr'
        ? "Beyaz çikolata ve espresso'nun muhteşem uyumu."
        : "Perfect harmony of white chocolate and espresso.",
      recipe: language === 'tr'
        ? "Espresso + beyaz çikolata sosu + buharlanmış süt + süt köpüğü"
        : "Espresso + white chocolate sauce + steamed milk + milk foam"
    },
    {
      name: "Spanish Latte",
      image: "/spanish-latte.jpg",
      description: language === 'tr'
        ? "Yoğunlaştırılmış süt ile hazırlanan özel latte."
        : "Special latte prepared with condensed milk.",
      recipe: language === 'tr'
        ? "Espresso + yoğunlaştırılmış süt + buharlanmış süt"
        : "Espresso + condensed milk + steamed milk"
    },
    {
      name: "Latte",
      image: "/latte.jpg",
      description: language === 'tr'
        ? "Kadifemsi süt köpüğü ile hazırlanan klasik latte."
        : "Classic latte prepared with velvety milk foam.",
      recipe: language === 'tr'
        ? "Espresso + buharlanmış süt + ince süt köpüğü"
        : "Espresso + steamed milk + thin milk foam"
    },
    {
      name: "Cappuccino",
      image: "/cappuccino.jpg",
      description: language === 'tr'
        ? "Eşit oranda espresso, süt ve süt köpüğü."
        : "Equal parts of espresso, milk and milk foam.",
      recipe: language === 'tr'
        ? "Espresso + buharlanmış süt + yoğun süt köpüğü"
        : "Espresso + steamed milk + thick milk foam"
    },
    {
      name: "Chemex",
      image: "/chemex.jpg",
      description: language === 'tr'
        ? "El yapımı filtre kahve demleme yöntemi."
        : "Handcrafted filter coffee brewing method.",
      recipe: language === 'tr'
        ? "30g kahve + 500ml su (94°C) + Chemex filtre kağıdı"
        : "30g coffee + 500ml water (94°C) + Chemex filter paper"
    },
    {
      name: "V60 Pour Over",
      image: "/v60.jpg",
      description: language === 'tr'
        ? "Japon tarzı damlatma yöntemi ile hazırlanan kahve."
        : "Coffee prepared with Japanese-style drip method.",
      recipe: language === 'tr'
        ? "22g kahve + 350ml su (92-96°C) + V60 filtre kağıdı"
        : "22g coffee + 350ml water (92-96°C) + V60 filter paper"
    },
    {
      name: "Cold Brew",
      image: "/cold-brew-coffee.jpg",
      description: language === 'tr'
        ? "Soğuk demleme yöntemi ile hazırlanan kahve."
        : "Coffee prepared with cold brewing method.",
      recipe: language === 'tr'
        ? "100g kahve + 1L su, 12-24 saat soğuk demleme"
        : "100g coffee + 1L water, 12-24 hours cold brewing"
    }
  ];

  // İlk yüklemede localStorage'dan verileri al
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPost = localStorage.getItem('selectedPost');
      const savedRecipe = localStorage.getItem('selectedRecipe');

      if (savedPost) setSelectedPost(JSON.parse(savedPost));
      if (savedRecipe) setSelectedRecipe(JSON.parse(savedRecipe));
    }
  }, []);

  // State değişikliklerini localStorage'a kaydet
  useEffect(() => {
    if (selectedPost) {
      localStorage.setItem('selectedPost', JSON.stringify(selectedPost));
    } else {
      localStorage.removeItem('selectedPost');
    }
  }, [selectedPost]);

  useEffect(() => {
    if (selectedRecipe) {
      localStorage.setItem('selectedRecipe', JSON.stringify(selectedRecipe));
    } else {
      localStorage.removeItem('selectedRecipe');
    }
  }, [selectedRecipe]);

  return (
    <main className="min-h-screen bg-[#f8f3e7]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810] bg-opacity-90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <span className="flex items-center gap-3 text-lg">
              <span className="text-[#d4a574] text-xl">♤</span>
              <span className="font-serif tracking-wider text-[#e5b585] logo-text">Made by Mustafa</span>
              <span className="text-[#d4a574] text-xl">♤</span>
            </span>

            {/* Desktop Menu */}
            <div className="navbar-menu">
              <a href="#coffee-types" className="hover:text-[#d4a574] transition-colors">
                {language === 'tr' ? 'Kahve Çeşitleri' : 'Coffee Types'}
              </a>
              <Link href="/discover" className="px-4 py-2 bg-[#d4a574] text-[#2c1810] rounded-full hover:bg-[#e5b585] transition-colors font-medium">
                {language === 'tr' ? 'Keşfet' : 'Discover'}
              </Link>
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

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-button"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <a 
                href="#coffee-types" 
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'tr' ? 'Kahve Çeşitleri' : 'Coffee Types'}
              </a>
              <Link 
                href="/discover" 
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'tr' ? 'Keşfet' : 'Discover'}
              </Link>
              <a 
                href="#recipes" 
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'tr' ? 'Tarifler' : 'Recipes'}
              </a>
              
              {/* Mobile Language Selection */}
              <div className="px-4 py-2">
                <div className="flex items-center gap-2 bg-[#1a110b] rounded-full p-1 w-fit">
                  <button
                    onClick={() => {
                      setLanguage('tr');
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      language === 'tr'
                        ? 'bg-[#d4a574] text-[#2c1810]'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    TR
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setIsMenuOpen(false);
                    }}
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
      <section id="recipes" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2c1810]">
            {language === 'tr' ? 'Kahve Tarifleri' : 'Coffee Recipes'}
        </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coffeeRecipes.map((recipe, index) => (
              <div 
                key={index}
                className="bg-[#f8f3e7] rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedRecipe(recipe)}
              >
              <div className="h-48 relative">
                <Image
                    src={recipe.image}
                    alt={recipe.name}
                  fill
                  className="object-cover"
                  priority={recipe.name === "Cappuccino"}
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {recipe.name}
                  </h3>
              </div>
                
                <div className="p-4">
                  <p className="text-gray-700 text-sm mb-4">
                    {recipe.description}
                  </p>
                  <button 
                    className="w-full bg-[#d4a574] text-white py-2 px-4 rounded-full hover:bg-[#2c1810] transition-colors text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRecipe(recipe);
                    }}
                  >
                    {language === 'tr' ? 'Tarifi Gör' : 'View Recipe'}
                  </button>
                </div>
              </div>
            ))}
            </div>
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
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPost(post);
                    }}
                    className="text-[#2c1810] font-semibold hover:text-[#8b4513] transition-colors"
                  >
                    {language === 'tr' ? 'Devamını Oku' : 'Read More →'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => {
            setSelectedRecipe(null);
            localStorage.removeItem('selectedRecipe');
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedRecipe.image}
                alt={selectedRecipe.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
                {selectedRecipe.name}
              </h2>
                <button
                onClick={() => {
                  setSelectedRecipe(null);
                  localStorage.removeItem('selectedRecipe');
                }}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                <span className="text-2xl">×</span>
                </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-gray-700 mb-4">
                  {selectedRecipe.description}
                </p>
              </div>

              {/* Malzemeler */}
              <div className="bg-[#f8f3e7] rounded-lg p-4">
                <h4 className="font-semibold text-[#2c1810] mb-3">
                  {language === 'tr' ? 'Malzemeler' : 'Ingredients'}
                </h4>
                <ul className="text-gray-600 space-y-2">
                  {selectedRecipe.recipe.split('+').map((ingredient, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-[#d4a574] mr-2">•</span>
                      {ingredient.trim()}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hazırlanış */}
              <div className="bg-[#f8f3e7] rounded-lg p-4">
                <h4 className="font-semibold text-[#2c1810] mb-3">
                  {language === 'tr' ? 'Hazırlanış' : 'Instructions'}
                </h4>
                {selectedRecipe.name === "Türk Kahvesi" ? (
                  <ol className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">1.</span>
                      {language === 'tr' 
                        ? "Kişi başı bir kahve fincanı su cezveye eklenir"
                        : "Add one coffee cup of water per person to the cezve"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">2.</span>
                      {language === 'tr'
                        ? "Her fincan için 2 tatlı kaşığı kahve ve isteğe göre şeker eklenir"
                        : "Add 2 teaspoons of coffee and sugar (optional) per cup"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">3.</span>
                      {language === 'tr'
                        ? "Kısık ateşte karıştırarak pişirilir"
                        : "Cook on low heat while stirring"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">4.</span>
                      {language === 'tr'
                        ? "Köpürmeye başlayınca fincanlara pay edilir"
                        : "When it starts to foam, distribute to cups"}
                    </li>
                  </ol>
                ) : selectedRecipe.name === "V60 Pour Over" ? (
                  <ol className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">1.</span>
                      {language === 'tr'
                        ? "Filtreyi ıslatın ve ön-ısıtma yapın"
                        : "Wet the filter and pre-heat"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">2.</span>
                      {language === 'tr'
                        ? "Kahveyi orta-ince öğütün ve filtreye ekleyin"
                        : "Grind coffee medium-fine and add to filter"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">3.</span>
                      {language === 'tr'
                        ? "İlk demleme için 50ml su ekleyip 30 saniye bekleyin"
                        : "Add 50ml water for blooming and wait 30 seconds"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">4.</span>
                      {language === 'tr'
                        ? "Dairesel hareketlerle kalan suyu ekleyin"
                        : "Add remaining water in circular motions"}
                    </li>
                  </ol>
                ) : selectedRecipe.name === "Spanish Latte" ? (
                  <ol className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">1.</span>
                      {language === 'tr'
                        ? "Espresso'yu hazırlayın"
                        : "Prepare the espresso"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">2.</span>
                      {language === 'tr'
                        ? "Yoğunlaştırılmış sütü bardağın dibine ekleyin"
                        : "Add condensed milk to the bottom of the glass"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">3.</span>
                      {language === 'tr'
                        ? "Espresso'yu yavaşça ekleyin"
                        : "Slowly pour in the espresso"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">4.</span>
                      {language === 'tr'
                        ? "Buharlanmış sütü üzerine ekleyin"
                        : "Top with steamed milk"}
                    </li>
                  </ol>
                ) : selectedRecipe.name === "White Mocha" ? (
                  <ol className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">1.</span>
                      {language === 'tr'
                        ? "Bardağın dibine beyaz çikolata sosunu ekleyin"
                        : "Add white chocolate sauce to the bottom of the cup"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">2.</span>
                      {language === 'tr'
                        ? "Espresso'yu hazırlayıp sosun üzerine ekleyin"
                        : "Prepare espresso and pour over the sauce"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">3.</span>
                      {language === 'tr'
                        ? "Karıştırarak sosun erimesini sağlayın"
                        : "Stir to dissolve the sauce"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">4.</span>
                      {language === 'tr'
                        ? "Buharlanmış süt ve süt köpüğü ile tamamlayın"
                        : "Finish with steamed milk and milk foam"}
                    </li>
                  </ol>
                ) : selectedRecipe.name === "Cappuccino" ? (
                  <ol className="text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">1.</span>
                      {language === 'tr'
                        ? "Espresso'yu hazırlayın"
                        : "Prepare the espresso"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">2.</span>
                      {language === 'tr'
                        ? "Sütü buharla ısıtın ve köpürtün"
                        : "Steam and froth the milk"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">3.</span>
                      {language === 'tr'
                        ? "Espresso'nun üzerine buharlanmış sütü ekleyin"
                        : "Pour steamed milk over the espresso"}
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d4a574] font-bold mr-2">4.</span>
                      {language === 'tr'
                        ? "Yoğun süt köpüğü ile tamamlayın"
                        : "Top with thick milk foam"}
                    </li>
                  </ol>
                ) : (
                  <p className="text-gray-600">
                    {language === 'tr'
                      ? "Tüm malzemeleri belirtilen sırayla ekleyip hazırlayın"
                      : "Add all ingredients in the specified order and prepare"}
                  </p>
                )}
              </div>

              {/* Püf Noktaları */}
              <div className="bg-[#f8f3e7] rounded-lg p-4">
                <h4 className="font-semibold text-[#2c1810] mb-3">
                  {language === 'tr' ? 'Püf Noktaları' : 'Tips'}
                </h4>
                <ul className="text-gray-600">
                  {selectedRecipe.name === "Türk Kahvesi" ? (
                    <>
                      <li className="flex items-center mb-2">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "Kahveyi çok karıştırmayın, köpüğü kaçar"
                          : "Don't stir too much, it will lose its foam"}
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "Kısık ateşte sabırla pişirin"
                          : "Cook patiently on low heat"}
                      </li>
                    </>
                  ) : selectedRecipe.name === "V60 Pour Over" ? (
                    <>
                      <li className="flex items-center mb-2">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "Su sıcaklığı 92-96°C arasında olmalı"
                          : "Water temperature should be 92-96°C"}
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "Toplam demleme süresi 2.5-3 dakika olmalı"
                          : "Total brewing time should be 2.5-3 minutes"}
                      </li>
                    </>
                  ) : selectedRecipe.name === "Spanish Latte" || selectedRecipe.name === "White Mocha" || selectedRecipe.name === "Cappuccino" ? (
                    <>
                      <li className="flex items-center mb-2">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "Sütü yakmaktan kaçının, ideal sıcaklık 65°C"
                          : "Avoid burning the milk, ideal temperature is 65°C"}
                      </li>
                      <li className="flex items-center">
                        <span className="text-[#d4a574] mr-2">•</span>
                        {language === 'tr'
                          ? "En iyi sonuç için taze çekilmiş kahve kullanın"
                          : "Use freshly ground coffee for best results"}
                      </li>
                    </>
                  ) : (
                    <li className="flex items-center">
                      <span className="text-[#d4a574] mr-2">•</span>
                      {language === 'tr'
                        ? "En iyi sonuç için taze çekilmiş kahve kullanın"
                        : "Use freshly ground coffee for best results"}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedPost(null);
            localStorage.removeItem('selectedPost');
          }}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#2c1810]">{selectedPost.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{selectedPost.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <div className="prose max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph.trim()}</p>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  localStorage.removeItem('selectedPost');
                }}
                className="mt-6 px-4 py-2 bg-[#d4a574] text-white rounded-full hover:bg-[#2c1810] transition-colors"
              >
                {language === 'tr' ? 'Kapat' : 'Close'}
              </button>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mustafakokcok@outlook.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/MustafaBKK" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mustafa-kökçok-365b90340/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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

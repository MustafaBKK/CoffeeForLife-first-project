"use client";

import Image from "next/image";
import { useState } from "react";

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
    name: "Colombia",
    image: "/colombia.jpg",
    description: "Dengeli asidite, karamel tatlılığı ve fındık aromasıyla öne çıkan premium kahve."
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
    name: "Latte",
    image: "/latte.jpg",
    description: "Espresso ve buharla ısıtılmış süt ile hazırlanan, kadifemsi dokuya sahip klasik bir içecek.",
    recipe: "1 shot espresso + 120ml buharla ısıtılmış süt + süt köpüğü"
  },
  {
    name: "Cappuccino",
    image: "/cappuccino.jpg",
    description: "Eşit oranda espresso, sıcak süt ve süt köpüğünden oluşan İtalyan kahve klasiği.",
    recipe: "1 shot espresso + 60ml buharla ısıtılmış süt + 60ml süt köpüğü"
  },
  {
    name: "Americano",
    image: "/americano.jpg",
    description: "Espresso ve sıcak su ile hazırlanan, filtre kahve tadında yoğun bir içecek.",
    recipe: "1 shot espresso + 120ml sıcak su"
  },
  {
    name: "V60",
    image: "/v60.jpg",
    description: "Özel filtre kağıdı ve V60 dripper kullanılarak hazırlanan, temiz içimli pour-over kahve.",
    recipe: "18g kahve + 300ml su (92-96°C) + 3 dakika demleme"
  },
  {
    name: "Chemex",
    image: "/chemex.jpg",
    description: "Özel tasarım Chemex ile hazırlanan, berrak ve aromalı pour-over kahve.",
    recipe: "30g kahve + 500ml su (92-96°C) + 4 dakika demleme"
  },
  {
    name: "Mocha",
    image: "/mocha.jpg",
    description: "Espresso, sıcak çikolata ve süt ile hazırlanan tatlı bir kahve içeceği.",
    recipe: "1 shot espresso + 30ml sıcak çikolata + 120ml buharla ısıtılmış süt"
  },
  {
    name: "Spanish Latte",
    image: "/spanish-latte.jpg",
    description: "Yoğunlaştırılmış süt (condensed milk) ile hazırlanan tatlı ve kremamsı latte.",
    recipe: "1 shot espresso + 30ml yoğunlaştırılmış süt + 90ml buharla ısıtılmış süt"
  },
  {
    name: "White Chocolate Mocha",
    image: "/white-mocha.jpg",
    description: "Beyaz çikolata sosu ile hazırlanan, tatlı ve kremamsı bir mocha çeşidi.",
    recipe: "1 shot espresso + 30ml beyaz çikolata sosu + 120ml buharla ısıtılmış süt"
  }
];

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  content: string;
}

interface TranslationType {
  header: {
    coffeeTypes: string;
    recipes: string;
    madeBy: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    coffeeTypes: {
      title: string;
    };
    recipes: {
      title: string;
      recipe: string;
    };
    blog: {
      title: string;
      readMore: string;
    };
  };
  coffeeOrigins: {
    name: string;
    description: string;
  }[];
  coffeeRecipes: {
    name: string;
    description: string;
    recipe: string;
  }[];
  blogPosts: {
    title: string;
    date: string;
    readTime: string;
    summary: string;
    content: string;
  }[];
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

// Çeviri sistemi
const translations = {
  tr: {
    header: {
      coffeeTypes: "Kahve Çeşitleri",
      recipes: "Tarifler",
      madeBy: "Made by Mustafa"
    },
    hero: {
      title: "Kahvenin Büyülü Dünyası",
      subtitle: "Dünyanın en özel kahve çekirdeklerini ve hikayelerini keşfedin"
    },
    sections: {
      coffeeTypes: {
        title: "Popüler Kahve Türleri"
      },
      recipes: {
        title: "Kahve Hazırlama Yöntemleri",
        recipe: "Tarif"
      },
      blog: {
        title: "Kahve Hikayeleri",
        subtitle: "Dünya'nın dört bir yanından kahve kültürü, gelenekleri ve ilginç hikayeleri keşfedin",
        readMore: "Devamını Oku"
      }
    },
    coffeeOrigins: [
      {
        name: "Arabica",
        description: "Dünya'nın en popüler kahve türü, yumuşak ve aromatik tadıyla bilinir."
      },
      {
        name: "Robusta",
        description: "Güçlü ve yoğun tada sahip, yüksek kafeinli kahve türü."
      },
      {
        name: "Liberica",
        description: "Nadir bulunan, meyvemsi ve çiçeksi aromaya sahip özel kahve türü."
      },
      {
        name: "Colombia",
        description: "Dengeli asidite, karamel tatlılığı ve fındık aromasıyla öne çıkan premium kahve."
      },
      {
        name: "Brasil",
        description: "Düşük asidite, yoğun çikolata ve fındık notalarıyla tanınan yumuşak içimli kahve."
      },
      {
        name: "Ethiopia",
        description: "Çiçeksi ve meyvemsi notalar, yüksek asidite ile kahvenin anavatanından gelen özel tat."
      }
    ],
    coffeeRecipes: [
      {
        name: "Latte",
        description: "Espresso ve buharla ısıtılmış süt ile hazırlanan, kadifemsi dokuya sahip klasik bir içecek.",
        recipe: "1 shot espresso + 120ml buharla ısıtılmış süt + süt köpüğü"
      },
      {
        name: "Cappuccino",
        description: "Eşit oranda espresso, sıcak süt ve süt köpüğünden oluşan İtalyan kahve klasiği.",
        recipe: "1 shot espresso + 60ml buharla ısıtılmış süt + 60ml süt köpüğü"
      },
      {
        name: "Americano",
        description: "Espresso ve sıcak su ile hazırlanan, filtre kahve tadında yoğun bir içecek.",
        recipe: "1 shot espresso + 120ml sıcak su"
      },
      {
        name: "V60",
        description: "Özel filtre kağıdı ve V60 dripper kullanılarak hazırlanan, temiz içimli pour-over kahve.",
        recipe: "18g kahve + 300ml su (92-96°C) + 3 dakika demleme"
      },
      {
        name: "Chemex",
        description: "Özel tasarım Chemex ile hazırlanan, berrak ve aromalı pour-over kahve.",
        recipe: "30g kahve + 500ml su (92-96°C) + 4 dakika demleme"
      },
      {
        name: "Mocha",
        description: "Espresso, sıcak çikolata ve süt ile hazırlanan tatlı bir kahve içeceği.",
        recipe: "1 shot espresso + 30ml sıcak çikolata + 120ml buharla ısıtılmış süt"
      },
      {
        name: "Spanish Latte",
        description: "Yoğunlaştırılmış süt (condensed milk) ile hazırlanan tatlı ve kremamsı latte.",
        recipe: "1 shot espresso + 30ml yoğunlaştırılmış süt + 90ml buharla ısıtılmış süt"
      },
      {
        name: "White Chocolate Mocha",
        description: "Beyaz çikolata sosu ile hazırlanan, tatlı ve kremamsı bir mocha çeşidi.",
        recipe: "1 shot espresso + 30ml beyaz çikolata sosu + 120ml buharla ısıtılmış süt"
      }
    ],
    blogPosts: [
      {
        title: "Türk Kahvesi'nin Tarihi",
        date: "15 Mayıs 2024",
        readTime: "5 dk okuma",
        summary: "Türk kahvesi kültürünün zengin tarihi ve gelenekleri hakkında bilgi edinin.",
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
        content: `
          Japonya'nın kahve kültürü, geleneksel çay seremonisinin inceliği ile modern kahve demleme tekniklerinin mükemmel bir birleşimidir. 1800'lerin sonlarında başlayan kahve serüveni, bugün dünya kahve kültürüne önemli katkılar sağlamaktadır.

          Japon kahve ustalarının geliştirdiği pour-over yöntemi, dünya çapında kabul görmüş bir demleme tekniğidir. Bu yöntem, her bir damla suyun kahve ile mükemmel temasını sağlayarak, en iyi aromayı ortaya çıkarır.

          Tokyo'nun dar sokaklarındaki küçük kahve dükkanlarından, modern üçüncü dalga kahvecilere kadar, Japon kahve kültürü sürekli evrim geçirmektedir. Ancak değişmeyen tek şey, mükemmeliyetçilik ve kalite arayışıdır.
        `
      }
    ]
  },
  en: {
    header: {
      coffeeTypes: "Coffee Types",
      recipes: "Recipes",
      madeBy: "Made by Mustafa"
    },
    hero: {
      title: "Magical World of Coffee",
      subtitle: "Discover the world's most special coffee beans and their stories"
    },
    sections: {
      coffeeTypes: {
        title: "Popular Coffee Types"
      },
      recipes: {
        title: "Coffee Brewing Methods",
        recipe: "Recipe"
      },
      blog: {
        title: "Coffee Stories",
        subtitle: "Discover coffee culture, traditions and interesting stories from around the world",
        readMore: "Read More"
      }
    },
    coffeeOrigins: [
      {
        name: "Arabica",
        description: "The world's most popular coffee type, known for its smooth and aromatic taste."
      },
      {
        name: "Robusta",
        description: "A coffee type with strong and intense taste, high in caffeine."
      },
      {
        name: "Liberica",
        description: "A rare coffee type with fruity and floral aromas."
      },
      {
        name: "Colombia",
        description: "Premium coffee featuring balanced acidity, caramel sweetness, and nutty notes."
      },
      {
        name: "Brasil",
        description: "Smooth coffee known for low acidity, intense chocolate and nutty notes."
      },
      {
        name: "Ethiopia",
        description: "Special taste from coffee's homeland with floral and fruity notes, high acidity."
      }
    ],
    coffeeRecipes: [
      {
        name: "Latte",
        description: "A classic drink prepared with espresso and steamed milk, featuring a velvety texture.",
        recipe: "1 shot espresso + 120ml steamed milk + milk foam"
      },
      {
        name: "Cappuccino",
        description: "An Italian coffee classic made with equal parts espresso, hot milk, and milk foam.",
        recipe: "1 shot espresso + 60ml steamed milk + 60ml milk foam"
      },
      {
        name: "Americano",
        description: "A strong drink prepared with espresso and hot water, similar to filter coffee.",
        recipe: "1 shot espresso + 120ml hot water"
      },
      {
        name: "V60",
        description: "Clean-tasting pour-over coffee prepared using special filter paper and V60 dripper.",
        recipe: "18g coffee + 300ml water (92-96°C) + 3 minutes brewing"
      },
      {
        name: "Chemex",
        description: "Clear and aromatic pour-over coffee prepared with specially designed Chemex.",
        recipe: "30g coffee + 500ml water (92-96°C) + 4 minutes brewing"
      },
      {
        name: "Mocha",
        description: "A sweet coffee drink prepared with espresso, hot chocolate, and milk.",
        recipe: "1 shot espresso + 30ml hot chocolate + 120ml steamed milk"
      },
      {
        name: "Spanish Latte",
        description: "Sweet and creamy latte prepared with condensed milk.",
        recipe: "1 shot espresso + 30ml condensed milk + 90ml steamed milk"
      },
      {
        name: "White Chocolate Mocha",
        description: "A sweet and creamy mocha variety prepared with white chocolate sauce.",
        recipe: "1 shot espresso + 30ml white chocolate sauce + 120ml steamed milk"
      }
    ],
    blogPosts: [
      {
        title: "History of Turkish Coffee",
        date: "May 15, 2024",
        readTime: "5 min read",
        summary: "Learn about the rich history and traditions of Turkish coffee culture.",
        content: `
          Turkish coffee is a unique beverage that has been inscribed on UNESCO's Intangible Cultural Heritage List. Coffee arrived in Istanbul during the Ottoman Empire in the 16th century and quickly became an indispensable part of palace and social life.

          The Turkish coffee preparation method has made a unique contribution to coffee culture. Finely ground coffee is cooked in a cezve with water and optional sugar. This method brings out all the flavors and taste of coffee at the highest level.

          Turkish coffee is not just a beverage, but also an important part of social life, hospitality, and fortune-telling. Coffee serving is the beginning of conversation and a symbol of friendship.
        `
      },
      {
        title: "Ethiopian Coffee Story",
        date: "May 12, 2024",
        readTime: "7 min read",
        summary: "Coffee culture and production methods of Ethiopia, the birthplace of coffee.",
        content: `
          The story of coffee begins in the green hills of Ethiopia. According to legend, a goat herder named Kaldi in the 9th century noticed that his goats became unusually energetic after eating some red berries.

          This discovery marks the beginning of coffee's world adventure. Ethiopia's Kaffa region is considered the birthplace of coffee. The wild coffee trees growing here are the ancestors of all coffee varieties we know today.

          In Ethiopia, coffee is not just a beverage, but also a sacred ritual. The traditional coffee ceremony strengthens community bonds and is the most important sign of hospitality.
        `
      },
      {
        title: "Japanese Coffee Culture",
        date: "May 10, 2024",
        readTime: "6 min read",
        summary: "Japan's unique coffee culture and modern brewing techniques.",
        content: `
          Japan's coffee culture is a perfect blend of traditional tea ceremony finesse and modern coffee brewing techniques. The coffee adventure that began in the late 1800s now makes significant contributions to world coffee culture.

          The pour-over method developed by Japanese coffee masters is a globally accepted brewing technique. This method ensures perfect contact between each drop of water and coffee, bringing out the best aroma.

          From small coffee shops in Tokyo's narrow streets to modern third-wave coffee shops, Japanese coffee culture continues to evolve. However, the one thing that never changes is the pursuit of perfectionism and quality.
        `
      }
    ]
  }
};

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<'tr' | 'en'>('tr');
  const [selectedPost, setSelectedPost] = useState<(typeof translations.tr.blogPosts)[0] | null>(null);
  const t = translations[selectedLanguage];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2c1810] bg-opacity-90 text-white z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#coffee-types" className="hover:text-[#d4a574] transition-colors">
              {t.header.coffeeTypes}
            </a>
            <div className="font-serif text-xl tracking-wider text-[#d4a574] hover:text-[#e5b785] transition-all duration-300 transform hover:scale-105 cursor-pointer select-none" 
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  fontFamily: 'Palatino, "Palatino Linotype", "Book Antiqua", serif'
                }}>
              ✧ {t.header.madeBy} ✧
            </div>
            <div className="flex items-center gap-6">
              <a href="#recipes" className="hover:text-[#d4a574] transition-colors">
                {t.header.recipes}
              </a>
              <div className="flex items-center gap-2 ml-4">
                <button 
                  onClick={() => setSelectedLanguage('tr')}
                  className={`transition-all duration-300 ${selectedLanguage === 'tr' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
                >
                  <Image 
                    src="https://flagcdn.com/w40/tr.png"
                    alt="Türkçe"
                    width={24}
                    height={24}
                    className="rounded-sm"
                    unoptimized
                  />
                </button>
                <button 
                  onClick={() => setSelectedLanguage('en')}
                  className={`transition-all duration-300 ${selectedLanguage === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}
                >
                  <Image 
                    src="https://flagcdn.com/w40/gb.png"
                    alt="English"
                    width={24}
                    height={24}
                    className="rounded-sm"
                    unoptimized
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-[#f8f3e7]">
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
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl">{t.hero.subtitle}</p>
          </div>
        </section>

        {/* Kahve Türleri Section */}
        <section id="coffee-types" className="py-20 px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">{t.sections.coffeeTypes.title}</h2>
          <div className="relative">
            <div className="overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex gap-8 w-max px-4">
                {t.coffeeOrigins.map((coffee, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-[350px] flex-shrink-0 transition-transform hover:scale-105">
                    <div className="h-48 relative">
                      <Image
                        src={coffeeOrigins[index].image}
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 bg-gradient-to-r from-[#f8f3e7] to-transparent h-full pointer-events-none"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 bg-gradient-to-l from-[#f8f3e7] to-transparent h-full pointer-events-none"></div>
          </div>
        </section>

        {/* Kahve Tarifleri Section */}
        <section id="recipes" className="py-20 px-4 md:px-8 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">{t.sections.recipes.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {t.coffeeRecipes.map((coffee, index) => (
              <div key={index} className="bg-[#f8f3e7] rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image
                    src={coffeeRecipes[index].image}
                    alt={coffee.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{coffee.name}</h3>
                  <p className="text-gray-600 mb-4">{coffee.description}</p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{t.sections.recipes.recipe}:</h4>
                    <p className="text-sm text-gray-600">{coffee.recipe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <div className="py-16 bg-[#f8f3e7]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">{t.sections.blog.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="h-48 relative">
                    <Image
                      src={blogPosts[index].image}
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
                      {t.sections.blog.readMore} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
      </main>

      {/* Footer */}
      <footer className="bg-[#2c1810] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* İletişim */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">{selectedLanguage === 'tr' ? 'İletişim' : 'Contact'}</h3>
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
                <li className="flex items-center gap-4 mt-4">
                  <a href="https://github.com/MustafaBKK" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/mustafa-kökçok-365b90340/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hızlı Bağlantılar */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#coffee-types" className="hover:text-[#d4a574] transition-colors">
                    {t.header.coffeeTypes}
                  </a>
                </li>
                <li>
                  <a href="#recipes" className="hover:text-[#d4a574] transition-colors">
                    {t.header.recipes}
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#d4a574] transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Telif Hakkı */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#d4a574]">Yasal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    Gizlilik Politikası
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    Kullanım Şartları
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#d4a574] transition-colors">
                    KVKK
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© 2024 Kahve Dünyası. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

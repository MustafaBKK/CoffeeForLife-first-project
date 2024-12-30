"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HistoryModal {
  title: string;
  content: string;
  image: string;
}

export default function Discover() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');
  const [selectedHistory, setSelectedHistory] = useState<HistoryModal | null>(null);

  const historyContent = {
    discovery: {
      title: language === 'tr' ? 'Kahvenin Keşfi' : 'Discovery of Coffee',
      content: language === 'tr' 
        ? `Kahvenin keşif hikayesi, Ethiopia'nın Kaffa bölgesinde başlar. Efsaneye göre, 9. yüzyılda yaşayan Kaldi adlı bir keçi çobanı, keçilerinin bazı kırmızı meyveleri yedikten sonra unusual derecede enerjik olduklarını fark eder.

          Bu gözlem üzerine, merak eden Kaldi bu meyveleri toplar ve yakındaki bir manastıra götürür. Manastırdaki keşişler başlangıçta şüpheyle yaklaşsalar da, meyveleri kaynatıp içtiklerinde, uzun gece ayinlerinde uyanık kalmalarına yardımcı olduğunu keşfederler.

          Kahve çekirdekleri daha sonra Yemen'e ulaşır ve burada ilk kez kavrulup öğütülerek bugün bildiğimiz şekliyle içilmeye başlanır. Yemen'den tüm Orta Doğu'ya, oradan da dünyaya yayılan kahve, artık global bir kültür fenomeni haline gelmiştir.

          Kahvenin keşfi, insanlık tarihinin en önemli rastlantısal buluşlarından biri olarak kabul edilir. Bu keşif, sadece bir içecek değil, aynı zamanda sosyal ve kültürel bir devrim başlatmıştır.`
        : `The story of coffee's discovery begins in the Kaffa region of Ethiopia. According to legend, a goat herder named Kaldi in the 9th century noticed that his goats became unusually energetic after eating certain red berries.

          Intrigued by this observation, Kaldi collected these berries and took them to a nearby monastery. Although the monks were initially skeptical, they discovered that when they boiled and drank the berries, it helped them stay awake during long night vigils.

          The coffee beans later reached Yemen, where they were first roasted and ground to be consumed as we know it today. From Yemen, coffee spread throughout the Middle East and then to the world, becoming a global cultural phenomenon.

          The discovery of coffee is considered one of the most important accidental findings in human history. This discovery initiated not just a beverage, but a social and cultural revolution.`,
      image: "/coffee-discovery.jpg"
    },
    turkish: {
      title: language === 'tr' ? 'Türk Kahvesi Tarihi' : 'Turkish Coffee History',
      content: language === 'tr'
        ? `Türk kahvesi, 16. yüzyılda Osmanlı İmparatorluğu döneminde İstanbul'a gelmiştir. Yemen Valisi Özdemir Paşa tarafından Kanuni Sultan Süleyman'a tanıtılan kahve, kısa sürede saray ve toplum hayatının vazgeçilmez bir parçası haline gelmiştir.

          Osmanlı'da ilk kahvehaneler 1555 yılında açılmış ve bu mekanlar, sosyal ve kültürel hayatın merkezi olmuştur. Kahvehaneler, sadece kahve içilen yerler değil, aynı zamanda edebiyat, sanat ve siyasetin konuşulduğu entelektüel merkezler haline gelmiştir.

          Türk kahvesi hazırlama yöntemi, dünya kahve kültürüne benzersiz bir katkı sağlamıştır. İnce öğütülmüş kahvenin cezve içinde, köpüklü şekilde pişirilmesi, kahvenin tüm aromalarını ve lezzetini en üst düzeyde ortaya çıkarır.

          2013 yılında UNESCO tarafından "İnsanlığın Somut Olmayan Kültürel Mirası" listesine alınan Türk kahvesi, sadece bir içecek değil, aynı zamanda misafirperverliğin, dostluğun ve paylaşmanın da simgesidir.`
        : `Turkish coffee arrived in Istanbul during the Ottoman Empire in the 16th century. Introduced to Sultan Suleiman the Magnificent by the Governor of Yemen, Özdemir Pasha, coffee quickly became an indispensable part of palace and social life.

          The first coffeehouses in the Ottoman Empire opened in 1555 and became centers of social and cultural life. These establishments were not just places to drink coffee but evolved into intellectual centers where literature, art, and politics were discussed.

          The Turkish coffee brewing method has made a unique contribution to world coffee culture. Brewing finely ground coffee in a cezve with foam brings out all the aromas and flavors of coffee at the highest level.

          Listed as "Intangible Cultural Heritage of Humanity" by UNESCO in 2013, Turkish coffee is not just a beverage but also a symbol of hospitality, friendship, and sharing.`,
      image: "/turkish-coffee-history.jpg"
    },
    world: {
      title: language === 'tr' ? 'Dünya Kahve Kültürleri' : 'World Coffee Cultures',
      content: language === 'tr'
        ? `Kahve, dünya genelinde farklı kültürlerde benzersiz şekillerde hazırlanır ve tüketilir. Her ülke ve bölge, kendi geleneklerini ve tercihlerini kahve kültürüne yansıtmıştır.

          İtalya: Espresso kültürünün merkezi olan İtalya'da, kahve günlük yaşamın vazgeçilmez bir parçasıdır. Barista kültürü ve espresso bazlı içecekler buradan dünyaya yayılmıştır.

          Japonya: Hassas demleme teknikleri ve pour-over yöntemiyle tanınan Japon kahve kültürü, mükemmeliyetçi yaklaşımıyla bilinir. Özellikle el yapımı seramik ekipmanlar ve hassas ölçümler önemlidir.

          Vietnam: Yoğunlaştırılmış süt ile hazırlanan Vietnam kahvesi, ülkenin sıcak iklimine uygun benzersiz bir içecektir. Phin filtre kullanılarak damla damla demlenir.

          İskandinav Ülkeleri: "Fika" olarak bilinen kahve molası kültürü, sosyal yaşamın önemli bir parçasıdır. Açık kavrulmuş kahveler ve uzun demlemeler tercih edilir.

          Brezilya: Dünyanın en büyük kahve üreticisi olan Brezilya'da, kahve sadece bir içecek değil, aynı zamanda ekonomik ve kültürel bir güçtür. Cafezinho, günlük yaşamın vazgeçilmezidir.`
        : `Coffee is prepared and consumed in unique ways across different cultures worldwide. Each country and region has reflected its own traditions and preferences in coffee culture.

          Italy: As the center of espresso culture, coffee is an indispensable part of daily life in Italy. Barista culture and espresso-based drinks have spread from here to the world.

          Japan: Known for precise brewing techniques and the pour-over method, Japanese coffee culture is characterized by its perfectionist approach. Hand-made ceramic equipment and precise measurements are particularly important.

          Vietnam: Vietnamese coffee, prepared with condensed milk, is a unique beverage suited to the country's hot climate. It is brewed drop by drop using a phin filter.

          Scandinavian Countries: The coffee break culture known as "fika" is an important part of social life. Light roasted coffees and long brews are preferred.

          Brazil: As the world's largest coffee producer, coffee in Brazil is not just a beverage but also an economic and cultural force. Cafezinho is indispensable in daily life.`,
      image: "/world-coffee-cultures.jpg"
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f3e7]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2c1810] bg-opacity-90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Sol Menü */}
            <div className="flex items-center gap-8">
              <Link href="/" className="hover:text-[#d4a574] transition-colors">
                {language === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
            </div>

            {/* Orta Logo */}
            <span className="flex items-center gap-3 text-lg">
              <span className="text-[#d4a574] text-xl">♢</span>
              <span className="font-serif tracking-wider text-[#e5b585]">Made by Mustafa</span>
              <span className="text-[#d4a574] text-xl">♢</span>
            </span>

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
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brewing-methods.jpg"
            alt="Kahve Demleme"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            {language === 'tr' ? 'Demleme Teknikleri' : 'Brewing Methods'}
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
            {language === 'tr' 
              ? "Her damlanın arkasındaki bilim ve sanatı keşfedin"
              : "Discover the science and art behind every drop"
            }
          </p>
          <a 
            href="#brewing-methods"
            className="inline-block px-10 py-5 bg-[#d4a574] text-white rounded-full hover:bg-[#2c1810] transition-colors text-xl font-medium hover:scale-105 transform duration-200"
          >
            {language === 'tr' ? 'Demleme Yöntemlerini Keşfet' : 'Explore Brewing Methods'}
          </a>
        </div>
      </section>

      {/* Demleme Teknikleri Detay */}
      <section id="brewing-methods" className="py-20 px-4 bg-[#f8f3e7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2c1810]">
            {language === 'tr' ? 'Popüler Demleme Yöntemleri' : 'Popular Brewing Methods'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pour Over */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/v60.jpg"
                  alt="Pour Over"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2c1810]">Pour Over</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'tr'
                    ? "Damla damla demlenen, berrak ve aromatik bir fincan kahve. Her adımı kontrol edebildiğiniz hassas bir demleme yöntemi."
                    : "A clear and aromatic cup of coffee brewed drop by drop. A precise brewing method where you control every step."}
                </p>
                <div className="bg-[#f8f3e7] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-[#2c1810]">
                    {language === 'tr' ? 'Temel Adımlar:' : 'Basic Steps:'}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• {language === 'tr' ? 'Kahveyi orta-ince öğütün' : 'Grind coffee medium-fine'}</li>
                    <li>• {language === 'tr' ? 'Filtreyi ıslatın ve ön-ısıtın' : 'Wet and pre-heat filter'}</li>
                    <li>• {language === 'tr' ? '30 saniye bloom yapın' : '30 second bloom'}</li>
                    <li>• {language === 'tr' ? 'Dairesel hareketlerle su ekleyin' : 'Add water in circular motions'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* French Press */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/french-press.jpg"
                  alt="French Press"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2c1810]">French Press</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'tr'
                    ? "Tam gövdeli ve yoğun aromalı kahve için klasik bir yöntem. Basit ama etkili bir demleme tekniği."
                    : "A classic method for full-bodied and richly aromatic coffee. Simple yet effective brewing technique."}
                </p>
                <div className="bg-[#f8f3e7] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-[#2c1810]">
                    {language === 'tr' ? 'Temel Adımlar:' : 'Basic Steps:'}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• {language === 'tr' ? 'Kaba çekilmiş kahve kullanın' : 'Use coarsely ground coffee'}</li>
                    <li>• {language === 'tr' ? 'S��cak su ekleyin ve karıştırın' : 'Add hot water and stir'}</li>
                    <li>• {language === 'tr' ? '4 dakika bekleyin' : 'Wait 4 minutes'}</li>
                    <li>• {language === 'tr' ? 'Yavaşça presleyin' : 'Press down slowly'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aeropress */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/aeropress.jpg"
                  alt="Aeropress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2c1810]">Aeropress</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'tr'
                    ? "Hızlı ve temiz bir fincan kahve için modern bir çözüm. Seyahat için ideal, çok yönlü bir demleme aleti."
                    : "A modern solution for a quick and clean cup of coffee. Versatile brewing device, perfect for travel."}
                </p>
                <div className="bg-[#f8f3e7] p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-[#2c1810]">
                    {language === 'tr' ? 'Temel Adımlar:' : 'Basic Steps:'}
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• {language === 'tr' ? 'İnce-orta öğütülmüş kahve kullanın' : 'Use fine-medium ground coffee'}</li>
                    <li>• {language === 'tr' ? 'Sıcak su ekleyip karıştırın' : 'Add hot water and stir'}</li>
                    <li>• {language === 'tr' ? '1-2 dakika bekleyin' : 'Wait 1-2 minutes'}</li>
                    <li>• {language === 'tr' ? 'Nazikçe bastırın' : 'Press gently'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kahve Tarihi Bölümü */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#2c1810]">
            {language === 'tr' ? 'Kahve Tarihi' : 'Coffee History'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Kahvenin Keşfi */}
            <div className="bg-[#f8f3e7] rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/coffee-discovery.jpg"
                  alt="Kahvenin Keşfi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">
                  {language === 'tr' ? 'Kahvenin Keşfi' : 'Discovery of Coffee'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'tr'
                    ? "Ethiopia'da bir keçi çobanının kahve meyvelerini keşfetmesiyle başlayan büyülü yolculuk. Kahvenin Yemen'den dünyaya yayılış hikayesi."
                    : "The magical journey that began with a goat herder discovering coffee cherries in Ethiopia. The story of coffee spreading from Yemen to the world."}
                </p>
                <button 
                  onClick={() => setSelectedHistory(historyContent.discovery)}
                  className="inline-block px-6 py-3 bg-[#d4a574] text-white rounded-full hover:bg-[#2c1810] transition-colors transform hover:scale-105"
                >
                  {language === 'tr' ? 'Daha Fazla' : 'Learn More'}
                </button>
              </div>
            </div>

            {/* Türk Kahvesi Tarihi */}
            <div className="bg-[#f8f3e7] rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/turkish-coffee-history.jpg"
                  alt="Türk Kahvesi Tarihi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">
                  {language === 'tr' ? 'Türk Kahvesi Tarihi' : 'Turkish Coffee History'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'tr'
                    ? "Osmanlı sarayından günümüze uzanan beş asırlık gelenek. UNESCO Somut Olmayan Kültürel Miras Listesi'nde yer alan eşsiz kültür."
                    : "A five-century tradition from Ottoman palace to present day. A unique culture listed in UNESCO Intangible Cultural Heritage."}
                </p>
                <button 
                  onClick={() => setSelectedHistory(historyContent.turkish)}
                  className="inline-block px-6 py-3 bg-[#d4a574] text-white rounded-full hover:bg-[#2c1810] transition-colors transform hover:scale-105"
                >
                  {language === 'tr' ? 'Daha Fazla' : 'Learn More'}
                </button>
              </div>
            </div>

            {/* Dünya Kahve Kültürleri */}
            <div className="bg-[#f8f3e7] rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/world-coffee-cultures.jpg"
                  alt="Dünya Kahve Kültürleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#2c1810]">
                  {language === 'tr' ? 'Dünya Kahve Kültürleri' : 'World Coffee Cultures'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'tr'
                    ? "İtalyan espresso geleneğinden Japon pour-over ritüeline, Vietnam'ın süt kahvesinden İskandinav kahve molalarına uzanan dünya turu."
                    : "A world tour from Italian espresso tradition to Japanese pour-over ritual, from Vietnamese milk coffee to Scandinavian coffee breaks."}
                </p>
                <button 
                  onClick={() => setSelectedHistory(historyContent.world)}
                  className="inline-block px-6 py-3 bg-[#d4a574] text-white rounded-full hover:bg-[#2c1810] transition-colors transform hover:scale-105"
                >
                  {language === 'tr' ? 'Daha Fazla' : 'Learn More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedHistory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedHistory(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-105"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-96">
              <Image
                src={selectedHistory.image}
                alt={selectedHistory.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedHistory(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-[#2c1810]">{selectedHistory.title}</h2>
              <div className="prose prose-lg max-w-none">
                {selectedHistory.content.split('\n\n').map((paragraph, index) => (
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
  );
} 
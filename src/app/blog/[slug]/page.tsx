import Image from 'next/image';
import Link from 'next/link';

const blogContent = {
  'turk-kahvesi-unesco': {
    title: "Türk Kahvesi: UNESCO Kültürel Miras Listesinde",
    image: "/turkish-coffee.jpg",
    date: "15 Mart 2024",
    content: `
      Türk kahvesi, yüzyıllardır süregelen bir geleneğin ve kültürün temsilcisidir. 2013 yılında UNESCO tarafından İnsanlığın Somut Olmayan Kültürel Mirası listesine alınan bu değerli içecek, sadece bir kahve değil, aynı zamanda bir yaşam biçimidir.

      Türk kahvesinin hazırlanışı başlı başına bir ritüeldir. Özel olarak öğütülmüş kahve, cezveye konur ve yavaş yavaş pişirilir. Bu süreç sabır ve ustalık gerektirir. Köpüğü, kıvamı ve sunumu ile Türk kahvesi, misafirperverliğin ve dostluğun sembolüdür.

      UNESCO'nun bu kararı, Türk kahvesinin dünya kültür mirasındaki önemini vurgular. Bu karar, sadece kahvenin kendisini değil, etrafında şekillenen tüm kültürel öğeleri de kapsar: kahve falı geleneği, sohbet kültürü ve misafir ağırlama ritüelleri.

      Günümüzde Türk kahvesi, modern kahve kültürü i��inde özel bir yere sahiptir. Geleneksel yöntemlerle hazırlanması ve sunumu, fast-food kültürüne bir alternatif sunar. Bu yönüyle, yavaş yaşam ve mindfulness kavramlarıyla da örtüşür.
    `,
    readTime: "5 dk okuma"
  },
  'ethiopia-kahve-hikayesi': {
    title: "Ethiopia: Kahvenin Doğduğu Topraklar",
    image: "/ethiopia-story.jpg",
    date: "12 Mart 2024",
    content: `
      Kahvenin hikayesi, Ethiopia'nın yeşil tepelerinde başlar. Efsaneye göre, 9. yüzyılda yaşayan Kaldi adlı bir keçi çobanı, keçilerinin bazı kırmızı meyveleri yedikten sonra unusual derecede enerjik olduklarını fark eder.

      Bu keşif, kahvenin dünya serüveninin başlangıcı olur. Ethiopia'nın Kaffa bölgesi, kahvenin anavatanı olarak kabul edilir. Burada yetişen yabani kahve ağaçları, bugün bildiğimiz tüm kahve çeşitlerinin atasıdır.

      Ethiopia kahve kültürü, geleneksel kahve seremonisi ile ünlüdür. Bu seremoni, kahvenin çiğ çekirdekten fincanınıza gelene kadar geçirdiği tüm aşamaları kapsar. Tütsüler, özel kaplar ve ritüeller eşliğinde gerçekleşen bu seremoni, saatlerce sürebilir.

      Bugün Ethiopia, dünyanın en kaliteli Arabica kahvelerinin üreticisidir. Yegacheffe, Sidamo ve Harrar gibi bölgelerden gelen kahveler, kendine özgü aromaları ve tatlarıyla dünya çapında tanınır.
    `,
    readTime: "7 dk okuma"
  },
  'japonya-kahve-kulturu': {
    title: "Japonya'nın Kahve Kültürü",
    image: "/japan-coffee.jpg",
    date: "10 Mart 2024",
    content: `
      Japonya, çay kültürüyle tanınsa da, son yıllarda gelişen kahve kültürü ile de dikkat çeker. Japon kahve kültürü, geleneksel çay seremonisinin inceliğini ve detaycılığını kahve dünyasına taşır.

      Kissaten adı verilen geleneksel Japon kahve dükkanları, slow coffee akımının öncülerindendir. Bu mekanlarda kahve, adeta bir sanat eseri gibi özenle hazırlanır. Pour-over yöntemi, Japonya'da mükemmelleştirilmiş ve dünyaya yayılmıştır.

      Japon kahve ekipmanları, tasarım ve işlevselliği bir araya getirir. Hario V60, Kalita Wave gibi pour-over ekipmanları, Japon tasarımının mükemmel örnekleridir. Bu ekipmanlar, kahve demleme sürecini hem bir bilim hem de bir sanat haline getirir.

      Modern Japon kahve kültürü, geleneksel ve yenilikçi yaklaşımları harmanlayarak benzersiz bir deneyim sunar. Third wave coffee akımının önemli merkezlerinden biri olan Tokyo, dünya kahve trendlerini belirleyen şehirlerden biridir.
    `,
    readTime: "6 dk okuma"
  }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug as keyof typeof blogContent];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8f3e7] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2c1810] mb-4">Sayfa Bulunamadı</h1>
          <Link href="/" className="text-[#d4a574] hover:text-[#2c1810] transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f3e7]">
      <div className="relative h-[50vh] mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <div className="prose prose-lg prose-stone mx-auto">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#d4a574] hover:text-[#2c1810] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </article>
    </main>
  );
} 
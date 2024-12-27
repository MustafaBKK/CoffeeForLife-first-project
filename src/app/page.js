import Image from "next/image";

export default function Home() {
  return (
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Kahvenin Büyülü Dünyası</h1>
          <p className="text-xl md:text-2xl">Dünya'nın en özel kahve çekirdeklerini ve hikayelerini keşfedin</p>
        </div>
      </section>

      {/* Kahve Türleri Section */}
      <section className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#2c1810]">Popüler Kahve Türleri</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Arabica */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/arabica.jpg"
                alt="Arabica Kahvesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Arabica</h3>
              <p className="text-gray-600">Dünya'nın en popüler kahve türü, yumuşak ve aromatik tadıyla bilinir.</p>
            </div>
          </div>

          {/* Robusta */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/robusta.jpg"
                alt="Robusta Kahvesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Robusta</h3>
              <p className="text-gray-600">Güçlü ve yoğun tada sahip, yüksek kafeinli kahve türü.</p>
            </div>
          </div>

          {/* Liberica */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 relative">
              <Image
                src="/liberica.jpg"
                alt="Liberica Kahvesi"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Liberica</h3>
              <p className="text-gray-600">Nadir bulunan, meyvemsi ve çiçeksi aromaya sahip özel kahve türü.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

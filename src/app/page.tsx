import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Beranda() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative w-full min-h-[520px] overflow-hidden bg-black text-white">
        {/* Background foto tampak depan vihara */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        />
        {/* Overlay gelap tipis */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Konten teks */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center space-y-4">
          <p className="text-lg italic">
            Namo Tassa Bhagavato Arahato Sammāsambuddhassa
          </p>
          <p className="text-sm md:text-base">
            Terpujilah Sang Bhagava Yang Maha Suci, Yang telah mencapai Penerangan Sempurna.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Menumbuhkan Kebajikan, Menjalani Kehidupan yang Bermakna
          </h1>
          <p className="max-w-2xl text-sm md:text-base">
            Vihara Buddha Dharma Citaviriyo adalah tempat puja bakti, pembelajaran
            Dhamma, meditasi, dan kegiatan sosial untuk menjalani kehidupan yang
            lebih bermakna sesuai ajaran Buddha.
          </p>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kegiatan Utama
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan spiritual dan sosial yang kami selenggarakan untuk 
              kemaslahatan bersama
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Waisak Puja */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-64">
                <img 
                  src="/activities/waisak.jpg"
                  alt="Waisak Puja"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Waisak Puja</h3>
                <p className="text-gray-600 leading-relaxed">
                  Peringatan suci kelahiran, pencerahan, dan parinibbāna Buddha Gautama 
                  yang diperingati setiap tahun dengan penuh khidmat.
                </p>
              </div>
            </div>

            {/* Card 2: Kathina */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-64">
                <img 
                  src="/activities/kathina.jpg"
                  alt="Kathina"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Kathina</h3>
                <p className="text-gray-600 leading-relaxed">
                  Upacara suci pemberian jubah Kathina kepada para bhikkhu sebagai bentuk 
                  dana dan penghormatan kepada Sangha.
                </p>
              </div>
            </div>

            {/* Card 3: Bakti Sosial */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-64">
                <img 
                  src="/activities/baksos.jpg"
                  alt="Bakti Sosial"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bakti Sosial</h3>
                <p className="text-gray-600 leading-relaxed">
                  Kegiatan sosial seperti donor darah, bantuan kepada masyarakat yang 
                  membutuhkan, dan kegiatan kemanusiaan lainnya.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link 
              href="/kegiatan"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Lihat Semua Kegiatan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

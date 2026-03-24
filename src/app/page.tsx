import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { featuredActivities, featuredActivitiesSection, heroContent } from '@/data/beranda'

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
          <p className="text-lg italic">{heroContent.paliText}</p>
          <p className="text-sm md:text-base">{heroContent.translation}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-sm md:text-base">{heroContent.description}</p>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {featuredActivitiesSection.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {featuredActivitiesSection.description}
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredActivities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-full h-64">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link
              href="/kegiatan"
              className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              {featuredActivitiesSection.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { featuredActivities, featuredActivitiesSection, heroContent } from '@/data/beranda'

export default function Beranda() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative w-full min-h-[560px] overflow-hidden bg-black text-white sm:min-h-[620px]" data-reveal>
        {/* Background foto tampak depan vihara */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-[1.01]"
          style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        />
        {/* Overlay gelap tipis */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />

        {/* Konten teks */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4 px-4 py-24 text-center sm:px-6 sm:py-28">
          <p className="max-w-3xl text-base italic sm:text-lg">{heroContent.paliText}</p>
          <p className="max-w-3xl text-sm sm:text-base md:text-lg">{heroContent.translation}</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg">{heroContent.description}</p>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="60">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center sm:mb-14 lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
              {featuredActivitiesSection.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {featuredActivitiesSection.description}
            </p>
          </div>

          {/* Activity Cards */}
          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredActivities.map((activity, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-orange-100/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-reveal
                data-reveal-delay={String(index * 70)}
              >
                <div className="h-56 w-full overflow-hidden sm:h-60">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">{activity.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center sm:mt-14" data-reveal data-reveal-delay="120">
            <Link
              href="/kegiatan"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-500 px-8 py-3 text-base font-medium text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
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

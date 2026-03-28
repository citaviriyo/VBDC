import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { activities, kegiatanPageContent } from '@/data/kegiatan'

export default function Kegiatan() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-orange-100">
            <Image
              src="/vbdc-logo.PNG"
              alt="Vihara Buddha Dharma Citaviriyo"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {kegiatanPageContent.title}
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {kegiatanPageContent.description}
          </p>
        </div>
      </section>

      {/* Grid Kegiatan Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="60">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-orange-100/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-reveal
                data-reveal-delay={String(index * 65)}
              >
                {/* Activity Image */}
                <div className="relative h-56 w-full overflow-hidden sm:h-60">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
                    {activity.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 px-4 py-14 sm:px-6 sm:py-16 lg:py-20" data-reveal data-reveal-delay="90">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {kegiatanPageContent.ctaTitle}
          </h2>

          <div className="mx-auto max-w-2xl rounded-2xl border border-orange-100 bg-white p-7 shadow-md sm:p-8">
            <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              {kegiatanPageContent.ctaDescription}
            </p>
            <p className="text-2xl font-serif italic text-orange-500 sm:text-3xl">
              {kegiatanPageContent.ctaQuote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { developmentPlans, mainActivities, tentangContent } from '@/data/tentang'

export default function Tentang() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-16 lg:py-20" data-reveal>
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-orange-100">
            <img
              src="/vbdc-logo.PNG"
              alt="Vihara Buddha Dharma Citaviriyo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {tentangContent.title}
          </h1>

          <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-gray-600 sm:space-y-6 sm:text-lg">
            {tentangContent.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="60">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-800 sm:mb-12 sm:text-4xl md:text-5xl">
            {tentangContent.mainActivitiesTitle}
          </h2>

          <div className="rounded-2xl border border-orange-100/60 bg-white p-6 shadow-md sm:p-8">
            <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
              {mainActivities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 rounded-lg bg-orange-50/50 px-3 py-2.5"
                  data-reveal
                  data-reveal-delay={String(index * 45)}
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <span className="text-base text-gray-700 sm:text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rencana Pengembangan Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="80">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-800 sm:mb-14 sm:text-4xl md:text-5xl">
            {tentangContent.developmentPlansTitle}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2">
            {developmentPlans.map((plan, index) => (
              <div
                key={index}
                className="rounded-2xl border border-orange-100/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-8"
                data-reveal
                data-reveal-delay={String(index * 80)}
              >
                <h3 className="mb-4 text-xl font-semibold tracking-tight text-gray-800">{plan.title}</h3>
                <p className="text-base leading-relaxed text-gray-600">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penutup Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="100">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-2xl bg-orange-50 p-8 shadow-sm ring-1 ring-orange-100 sm:p-10 md:p-12">
            <p className="mb-8 text-3xl font-serif italic text-orange-500 sm:text-4xl">
              {tentangContent.closingQuote}
            </p>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              {tentangContent.closingDescription}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

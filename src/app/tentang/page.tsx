import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { developmentPlans, mainActivities, tentangContent } from '@/data/tentang'

export default function Tentang() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <img
              src="/vbdc-logo.PNG"
              alt="Vihara Buddha Dharma Citaviriyo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            {tentangContent.title}
          </h1>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {tentangContent.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            {tentangContent.mainActivitiesTitle}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainActivities.map((activity, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 text-lg">{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Rencana Pengembangan Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
            {tentangContent.developmentPlansTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.title}</h3>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penutup Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-orange-50 rounded-lg p-12">
            <p className="text-3xl md:text-4xl text-orange-500 font-serif italic mb-8">
              {tentangContent.closingQuote}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {tentangContent.closingDescription}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

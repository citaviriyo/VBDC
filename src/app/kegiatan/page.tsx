import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { activities, kegiatanPageContent } from '@/data/kegiatan'

export default function Kegiatan() {
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

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {kegiatanPageContent.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {kegiatanPageContent.description}
          </p>
        </div>
      </section>

      {/* Grid Kegiatan Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Activity Image */}
                <div className="w-full h-64">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {kegiatanPageContent.ctaTitle}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {kegiatanPageContent.ctaDescription}
            </p>
            <p className="text-2xl text-orange-500 font-serif italic">
              {kegiatanPageContent.ctaQuote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { contactItems, kontakPageContent, mapEmbedUrl } from '@/data/kontak'

const contactIcons = [MapPin, Mail, Phone, Clock]

export default function Kontak() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <img
              src="vbdc-logo.PNG"
              alt="Vihara Buddha Dharma Citaviriyo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {kontakPageContent.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {kontakPageContent.description}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kolom Kiri: Informasi Kontak */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                {kontakPageContent.contactSectionTitle}
              </h2>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const Icon = contactIcons[index]

                  return (
                    <div key={item.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">
                          {item.lines.map((line, lineIndex) => (
                            <span key={lineIndex}>
                              {line}
                              {lineIndex < item.lines.length - 1 && <><br /></>}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Kolom Kanan: Lokasi Kami */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                {kontakPageContent.locationSectionTitle}
              </h2>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {kontakPageContent.locationDescription}
              </p>

              {/* Google Maps Embed */}
              <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>Petunjuk:</strong> {kontakPageContent.directions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kunjungi Kami Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            {kontakPageContent.visitTitle}
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              {kontakPageContent.visitDescription}
            </p>

            <p className="text-2xl text-orange-500 font-serif italic">
              {kontakPageContent.visitQuote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import { contactItems, kontakPageContent, mapEmbedUrl } from '@/data/kontak'

export const metadata = {
  title: 'Kontak Vihara Buddha Dharma Citaviriyo (VBDC)',
  description:
    'Temukan informasi kontak Vihara Buddha Dharma Citaviriyo, termasuk alamat, email, telepon, jam operasional, dan lokasi vihara.',
  openGraph: {
    title: 'Kontak Vihara Buddha Dharma Citaviriyo (VBDC)',
    description:
      'Hubungi Vihara Buddha Dharma Citaviriyo melalui informasi alamat, email, telepon, dan peta lokasi untuk memudahkan kunjungan Anda.',
    url: 'https://vbdc.or.id/kontak',
    siteName: 'Vihara Buddha Dharma Citaviriyo',
    locale: 'id_ID',
    type: 'website',
  },
}

const contactIcons = [MapPin, Mail, Phone, Clock]

export default function Kontak() {
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
            {kontakPageContent.title}
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {kontakPageContent.description}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="60">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Kolom Kiri: Informasi Kontak */}
            <div className="rounded-2xl border border-orange-100/60 bg-white p-6 shadow-md sm:p-8" data-reveal>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
                {kontakPageContent.contactSectionTitle}
              </h2>

              <div className="space-y-4 sm:space-y-5">
                {contactItems.map((item, index) => {
                  const Icon = contactIcons[index]

                  return (
                    <div
                      key={item.title}
                      className="flex items-start space-x-4 rounded-xl bg-orange-50/60 px-4 py-3 transition-colors duration-200 hover:bg-orange-100/70"
                      data-reveal
                      data-reveal-delay={String(index * 60)}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100">
                        <Icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-600 sm:text-base">
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
            <div className="rounded-2xl border border-orange-100/60 bg-white p-6 shadow-md sm:p-8" data-reveal data-reveal-delay="70">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
                {kontakPageContent.locationSectionTitle}
              </h2>

              <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                {kontakPageContent.locationDescription}
              </p>

              {/* Google Maps Embed */}
              <div className="h-[300px] w-full overflow-hidden rounded-xl ring-1 ring-orange-100 sm:h-[350px]">
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

              <div className="mt-6 rounded-xl bg-orange-50 p-4 ring-1 ring-orange-100">
                <p className="text-sm text-orange-700 sm:text-base">
                  <strong>Petunjuk:</strong> {kontakPageContent.directions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kunjungi Kami Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:py-24" data-reveal data-reveal-delay="90">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
            {kontakPageContent.visitTitle}
          </h2>

          <div className="rounded-2xl border border-orange-100/60 bg-white p-8 shadow-md sm:p-10 md:p-12">
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-700 sm:text-lg">
              {kontakPageContent.visitDescription}
            </p>

            <p className="text-2xl font-serif italic text-orange-500 sm:text-3xl">
              {kontakPageContent.visitQuote}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

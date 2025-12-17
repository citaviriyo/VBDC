import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

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
            Kontak
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Jangan ragu untuk menghubungi kami jika Anda ingin mengetahui lebih lanjut 
            tentang kegiatan vihara, program pembelajaran Dhamma, atau informasi lainnya. 
            Kami siap membantu dan menjawab pertanyaan Anda.
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
                Informasi Kontak
              </h2>
              
              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Komplek Toho Blok N1 & N3<br />
                      Jakarta Utara 14470
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@vbdc.or.id</p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Telepon</h3>
                    <p className="text-gray-600">+6281287866663</p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin – Minggu<br />
                      07.00 – 19.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Lokasi Kami */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">
                Lokasi Kami
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Vihara Buddha Dharma Citaviriyo mudah diakses dari berbagai penjuru kota. 
                Lokasi kami strategis dan dapat dicapai dengan kendaraan pribadi maupun 
                transportasi umum.
              </p>

              {/* Google Maps Embed */}
              <div style={{width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden'}}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.994370651216!2d106.74860187434392!3d-6.131457493855347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d66e7ea7e6d%3A0x706023ab09a7612e!2sVihara%20buddha%20dharma%20citaviriyo!5e0!3m2!1sid!2sid!4v1764060771295!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{border: '0'}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700">
                  <strong>Petunjuk:</strong> Gunakan GPS dengan keyword "Vihara Buddha Dharma Citaviriyo" 
                  atau "Komplek Toho Blok N1 & N3, Jakarta Utara"
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
            Kunjungi Kami
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Kami dengan senang hati menyambut Anda untuk bergabung dalam kegiatan-kegiatan 
              spiritual dan sosial kami. Datanglah untuk bermeditasi, belajar Dhamma, atau 
              sekadar mencari ketenangan batin di tengah kesibukan hidup.
            </p>
            
            <p className="text-2xl text-orange-500 font-serif italic">
              Semoga semua makhluk hidup berbahagia.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Tentang() {
  const mainActivities = [
    'Waisak Puja',
    'Kathina',
    'Pattidana',
    'Fang Shen',
    'Cheng Beng',
    'Bakti Sosial',
    'Pemasangan Lampion'
  ]

  const developmentPlans = [
    {
      title: 'Dhamma School',
      description: 'Kelas pembelajaran Dhamma terstruktur untuk segala usia, mulai dari anak-anak hingga dewasa, dengan kurikulum yang komprehensif.'
    },
    {
      title: 'Kelas Meditasi',
      description: 'Program meditasi rutin dengan bimbingan para instruktur berpengalaman untuk mengembangkan ketenangan batin dan kesadaran.'
    },
    {
      title: 'Pelatihan Sukarelawan',
      description: 'Program pelatihan untuk sukarelawan yang ingin berpartisipasi aktif dalam kegiatan vihara dan sosial.'
    },
    {
      title: 'Publikasi Edukatif',
      description: 'Penerbitan buku, majalah, dan konten digital untuk menyebarkan ajaran Buddha secara luas dan mudah diakses.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <img 
              src="/vbdc-logo.png" 
              alt="Vihara Buddha Dharma Citaviriyo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Tentang Kami
          </h1>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              Vihara Buddha Dharma Citaviriyo adalah tempat pembelajaran, praktik, dan pelestarian 
              ajaran Buddha yang autentik. Kami berkomitmen untuk menjadi pusat spiritual yang 
              mendukung pengembangan batin dan kebijaksanaan bagi semua umat.
            </p>
            <p>
              Dengan mengedepankan nilai-nilai welas asih, kebijaksanaan, dan ketenangan, kami 
              berusaha membantu umat untuk memperdalam pemahaman Dhamma dan menjalani kehidupan 
              yang lebih bermakna sesuai ajaran Buddha.
            </p>
          </div>
        </div>
      </section>

      {/* Kegiatan Utama Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Kegiatan Utama
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
            Rencana Pengembangan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentPlans.map((plan, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
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
              Semoga semua makhluk hidup berbahagia.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Mari bersama-sama terus menumbuhkan kebajikan dalam hati, menjalankan 
              ajaran Buddha dengan tekun, dan memberikan manfaat bagi semua makhluk 
              tanpa terkecuali. Melalui praktik Dhamma yang benar, kita dapat menciptakan 
              kedamaian dan kebahagiaan sejati.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
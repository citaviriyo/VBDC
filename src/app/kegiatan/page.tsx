import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Kegiatan() {
  const activities = [
    {
      title: 'Waisak Puja',
      description: 'Peringatan suci kelahiran, pencerahan, dan parinibbāna Buddha Gautama yang diperingati setiap tahun dengan penuh khidmat.',
      image: '/activities/waisak.jpg'
    },
    {
      title: 'Kathina',
      description: 'Upacara suci pemberian jubah Kathina kepada para bhikkhu sebagai bentuk dana dan penghormatan kepada Sangha.',
      image: '/activities/kathina.jpg'
    },
    {
      title: 'Pattidana',
      description: 'Upacara pemberian sumbangan kepada para bhikkhu sebagai bentuk dukungan terhadap kehidupan spiritual.',
      image: '/activities/Pattidana.jpg'
    },
    {
      title: 'Fang Shen',
      description: 'Ritual pelepasan makhluk hidup sebagai bentuk pengamalan kasih sayang dan kebaikan universal.',
      image: '/activities/FangShen.jpg'
    },
    {
      title: 'Cheng Beng',
      description: 'Tradisi menghormati leluhur sebagai bentuk bakti dan penghargaan kepada para pendahulu.',
      image: '/activities/Chengbeng.jpg'
    },
    {
      title: 'Bakti Sosial',
      description: 'Kegiatan sosial seperti donor darah, bantuan kepada masyarakat yang membutuhkan, dan kegiatan kemanusiaan.',
      image: '/activities/baksos.jpg'
    },
    {
      title: 'Pemasangan Lampion',
      description: 'Tradisi memasang lampion sebagai simbol penerangan kebijaksanaan dan kebahagiaan universal.',
      image: '/activities/lampion.jpg'
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Kegiatan di Vihara Buddha Dharma Citaviriyo
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Berbagai kegiatan spiritual dan sosial yang kami selenggarakan untuk 
            mendukung pembelajaran Dhamma, pengembangan spiritual, serta kemaslahatan 
            bersama demi kebahagiaan semua makhluk.
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
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
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
            Bergabunglah dengan Kami
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mari bersama-sama mengamalkan ajaran Buddha untuk menciptakan kedamaian 
              dan kebahagiaan bagi semua makhluk hidup.
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

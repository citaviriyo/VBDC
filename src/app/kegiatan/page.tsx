import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Kegiatan() {
  const activities = [
    {
      title: 'Waisak Puja',
      description: 'Peringatan suci kelahiran, pencerahan, dan parinibbāna Buddha Gautama yang diperingati setiap tahun dengan penuh khidmat.',
      image: 'https://z-cdn-media.chatglm.cn/files/564e0350-d79a-4bd5-83b7-bdd1ce845d55_waisak.jpg?auth_key=1864058688-f419dfd080934447aecc8633418c08ee-0-891e3425e1ff599df7160d8e435e90ad'
    },
    {
      title: 'Kathina',
      description: 'Upacara suci pemberian jubah Kathina kepada para bhikkhu sebagai bentuk dana dan penghormatan kepada Sangha.',
      image: 'https://z-cdn-media.chatglm.cn/files/27600308-fdea-4b16-a9fc-1de2903f308c_kathina.jpg?auth_key=1864058688-dede204a4fce4d0da516e8d2c79de412-0-fc76203aa0578bf383a416125201f964'
    },
    {
      title: 'Pattidana',
      description: 'Upacara pemberian sumbangan kepada para bhikkhu sebagai bentuk dukungan terhadap kehidupan spiritual.',
      image: 'https://z-cdn-media.chatglm.cn/files/daac102d-3b1d-4f43-8583-fe77535ed0c6_Pattidana.jpg?auth_key=1864058688-08d7e8bc908f4be2926762a241c1bbb2-0-8b085fd99e1b80d00a5298769db711d1'
    },
    {
      title: 'Fang Shen',
      description: 'Ritual pelepasan makhluk hidup sebagai bentuk pengamalan kasih sayang dan kebaikan universal.',
      image: 'https://z-cdn-media.chatglm.cn/files/e2098164-be4d-4773-ba63-f99d8e56acd8_FangShen.jpg?auth_key=1864058688-c00b1fac57384285975b55f0699d7dfa-0-5dc9a87bcbd407a393209d00c8c1218b'
    },
    {
      title: 'Cheng Beng',
      description: 'Tradisi menghormati leluhur sebagai bentuk bakti dan penghargaan kepada para pendahulu.',
      image: 'https://z-cdn-media.chatglm.cn/files/31241e6a-4b54-4a21-b4f8-1094ab576648_Cheng%20beng.jpg?auth_key=1864058688-83e0c89df5ad49e9bb82ec4d302ff7da-0-4f49b8f0dc7e02cadff2b967f7919381'
    },
    {
      title: 'Bakti Sosial',
      description: 'Kegiatan sosial seperti donor darah, bantuan kepada masyarakat yang membutuhkan, dan kegiatan kemanusiaan.',
      image: 'https://z-cdn-media.chatglm.cn/files/e4d4cf19-43a5-494c-a39a-9c6c5ace3eb9_baksos.jpg?auth_key=1864058688-8eb3b96dfd134cb3941feac2e32968d7-0-468d92f8c1b8ee774cfd00c2199ab678'
    },
    {
      title: 'Pemasangan Lampion',
      description: 'Tradisi memasang lampion sebagai simbol penerangan kebijaksanaan dan kebahagiaan universal.',
      image: 'https://z-cdn-media.chatglm.cn/files/222f5294-0244-4ede-b4f9-df070d9639df_lampion.jpg?auth_key=1864058688-b668eefbd9a8481f8065b201d8ae39ae-0-78a01823caf36705632362d7458a252c'
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
              src="https://z-cdn-media.chatglm.cn/files/1b0e9596-1f2a-4e10-99eb-cd854c9fe890_logo%20vbdc.png?auth_key=1864058688-be79ca02eb584e29a49158e278be615b-0-2e9acf7b4a82f93a48dfaa932467e856" 
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
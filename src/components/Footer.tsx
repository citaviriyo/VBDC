'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom 1: Nama Yayasan + Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/vbdc-logo.PNG" 
                  alt="Vihara Buddha Dharma Citaviriyo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">Vihara Buddha Dharma Citaviriyo</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Tempat pembelajaran Dhamma, meditasi, dan puja bakti untuk menumbuhkan kebajikan dan menjalani kehidupan yang bermakna.
            </p>
          </div>

          {/* Kolom 2: Menu Cepat */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Beranda
              </Link>
              <Link href="/kegiatan" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Kegiatan
              </Link>
              <Link href="/tentang" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Tentang Kami
              </Link>
              <Link href="/kontak" className="block text-gray-300 hover:text-orange-400 transition-colors duration-200">
                Kontak
              </Link>
            </nav>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-start">
                <span className="font-medium mr-2">Alamat:</span>
                <span>Komplek Toho Blok N1 & N3, Jakarta Utara 14470</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Email:</span>
                <span>info@vbdc.or.id</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Telepon:</span>
                <span>+6281287866663</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2">Jam:</span>
                <span>Senin–Minggu 07.00–19.00</span>
              </p>
            </div>
            
            {/* Dukungan Dana */}
            <div className="pt-4 border-t border-gray-700">
              <h4 className="text-sm font-semibold mb-2">Dukungan Dana</h4>
              <p className="text-xs text-gray-300 mb-2">
                Anda dapat mendukung kegiatan Dhamma dan sosial Vihara melalui dana kebajikan.
              </p>
              <p className="text-sm text-gray-300">
                BCA – 1793455678 (Yayasan VBDC)
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Vihara Buddha Dharma Citaviriyo. Semua hak dilindungi.
          </p>
          <p className="text-orange-400 mt-2 text-sm italic">
            Semoga semua makhluk hidup berbahagia.
          </p>
        </div>
      </div>
    </footer>
  )
}
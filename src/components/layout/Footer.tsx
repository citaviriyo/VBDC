'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear())

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Kolom 1: Nama Yayasan + Deskripsi */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-sm ring-1 ring-white/30">
                <img
                  src="/vbdc-logo.PNG"
                  alt="Vihara Buddha Dharma Citaviriyo"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold leading-tight tracking-tight">Vihara Buddha Dharma Citaviriyo</h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300 sm:text-base">
              Tempat pembelajaran Dhamma, meditasi, dan puja bakti untuk menumbuhkan kebajikan dan menjalani kehidupan yang bermakna.
            </p>
          </div>

          {/* Kolom 2: Menu Cepat */}
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold">Tautan Cepat</h3>
            <nav className="space-y-2.5">
              <Link href="/" className="block rounded-md py-1 text-base text-gray-300 transition-colors duration-200 hover:text-orange-300">
                Beranda
              </Link>
              <Link href="/kegiatan" className="block rounded-md py-1 text-base text-gray-300 transition-colors duration-200 hover:text-orange-300">
                Kegiatan
              </Link>
              <Link href="/tentang" className="block rounded-md py-1 text-base text-gray-300 transition-colors duration-200 hover:text-orange-300">
                Tentang Kami
              </Link>
              <Link href="/kontak" className="block rounded-md py-1 text-base text-gray-300 transition-colors duration-200 hover:text-orange-300">
                Kontak
              </Link>
            </nav>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div className="space-y-4">
            <h3 className="mb-4 text-lg font-semibold">Informasi Kontak</h3>
            <div className="space-y-2.5 text-sm text-gray-300 sm:text-base">
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
            <div className="border-t border-gray-700 pt-4">
              <h4 className="text-sm font-semibold mb-2">Dukungan Dana</h4>
              <p className="text-xs text-gray-300 mb-2">
                Anda dapat mendukung kegiatan Dhamma dan sosial Vihara melalui dana kebajikan.
              </p>
              <p className="text-sm text-gray-200">
                BCA – 1793455678 (Yayasan VBDC)
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Vihara Buddha Dharma Citaviriyo. Semua hak dilindungi.
          </p>
          <p className="mt-2 text-sm italic text-orange-300">
            Semoga semua makhluk hidup berbahagia.
          </p>
        </div>
      </div>
    </footer>
  )
}
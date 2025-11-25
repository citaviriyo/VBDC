'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dan Nama Vihara */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="https://z-cdn-media.chatglm.cn/files/1b0e9596-1f2a-4e10-99eb-cd854c9fe890_logo%20vbdc.png?auth_key=1864058688-be79ca02eb584e29a49158e278be615b-0-2e9acf7b4a82f93a48dfaa932467e856" 
                alt="Vihara Buddha Dharma Citaviriyo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-semibold text-gray-800">Vihara Buddha Dharma Citaviriyo</span>
            </div>
            <div className="sm:hidden">
              <span className="text-sm font-semibold text-gray-800">VBDC</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Beranda
            </Link>
            <Link 
              href="/kegiatan" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Kegiatan
            </Link>
            <Link 
              href="/tentang" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Tentang Kami
            </Link>
            <Link 
              href="/kontak" 
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
            >
              Kontak
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/kegiatan" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Kegiatan
              </Link>
              <Link 
                href="/tentang" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
              <Link 
                href="/kontak" 
                className="block px-3 py-2 text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
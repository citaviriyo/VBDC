'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/kegiatan', label: 'Kegiatan' },
    { href: '/tentang', label: 'Tentang Kami' },
    { href: '/kontak', label: 'Kontak' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-orange-100/70 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo dan Nama Vihara */}
          <div className="flex items-center space-x-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-orange-100 sm:h-11 sm:w-11">
              <Image
                src="/vbdc-logo.PNG"
                alt="Vihara Buddha Dharma Citaviriyo"
                fill
                className="object-contain"
                sizes="44px"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-semibold tracking-tight text-gray-800 md:text-lg">
                Vihara Buddha Dharma Citaviriyo
              </span>
            </div>
            <div className="sm:hidden">
              <span className="text-sm font-semibold tracking-tight text-gray-800">VBDC</span>
            </div>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex md:items-center md:gap-2 lg:gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-5 ${
                    isActive
                      ? 'bg-orange-100 text-orange-700 shadow-sm'
                      : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Menu Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 bg-white text-gray-700 shadow-sm transition-colors duration-200 hover:text-orange-500"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="border-t border-orange-100 bg-white pb-4 pt-2 md:hidden">
            <div className="space-y-1 px-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
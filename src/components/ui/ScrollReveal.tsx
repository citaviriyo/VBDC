'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (revealElements.length === 0) {
      return
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => {
        element.classList.add('is-revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const delay = element.dataset.revealDelay

            if (delay) {
              element.style.transitionDelay = `${delay}ms`
            }

            element.classList.add('is-revealed')
            observer.unobserve(element)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}
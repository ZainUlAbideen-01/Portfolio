'use client'

import { useEffect, useState } from 'react'

// Each section registers its background type.
// The navbar listens and swaps text color accordingly.
type ColorMode = 'dark' | 'light'

export function useScrollColor(): ColorMode {
  const [mode, setMode] = useState<ColorMode>('dark')

  useEffect(() => {
    // Sections with data-nav-color="light" have light backgrounds
    // (About Me section) — navbar text should be dark there
    const sections = document.querySelectorAll<HTMLElement>('[data-nav-color]')

    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      const sectionColor = section.dataset.navColor as ColorMode

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMode(sectionColor)
          }
        },
        {
          // Trigger when section top edge crosses the navbar (top ~80px)
          rootMargin: '-80px 0px -80% 0px',
          threshold: 0,
        }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  return mode
}

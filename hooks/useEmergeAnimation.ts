'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface EmergeOptions {
  delay?: number
  duration?: number
  start?: string
}

export function useEmergeAnimation<T extends HTMLElement>(
  options: EmergeOptions = {}
) {
  const { delay = 0, duration = 0.9, start = 'top 85%' } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Set initial state
    gsap.set(el, {
      clipPath: 'inset(100% 0 0 0)',
      scaleY: 0.5,
      transformOrigin: 'bottom center',
    })

    const anim = gsap.to(el, {
      clipPath: 'inset(0% 0 0 0)',
      scaleY: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill()
      })
    }
  }, [delay, duration, start])

  return ref
}

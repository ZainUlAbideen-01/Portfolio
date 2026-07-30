'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export function useMagneticHover<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // quickTo creates a reusable setter that smoothly animates to a target
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onEnter = () => {
      gsap.fromTo(
        el,
        {
          rotation: -3,
          transformOrigin: '50% 50%',
        },
        {
          rotation: 3,
          duration: 0.07,
          repeat: 2,
          yoyo: true,
          ease: 'none',
          onComplete: () => {
            gsap.set(el, { rotation: 0 })
          },
        }
      )
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      xTo((e.clientX - cx) * strength)
      yTo((e.clientY - cy) * strength)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}

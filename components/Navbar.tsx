'use client'

import Link from 'next/link'
import { useMagneticHover } from '@/hooks/useMagneticHover'
import { useScrollColor } from '@/hooks/useScrollColor'

function MagneticLink({
  href,
  children,
  className,
  style,
}: {
  href: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useMagneticHover<HTMLAnchorElement>(0.35)

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      style={style}
    >
      {children}
    </a>
  )
}

function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const ref = useMagneticHover<HTMLButtonElement>(0.4)
  return (
    <button ref={ref} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default function Navbar() {
  const colorMode = useScrollColor()
  const isDark = colorMode === 'dark'

  const textColor = isDark ? '#ffffff' : '#0a0a0a'
  const borderColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)'

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        height: '72px',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        backgroundColor: isDark
          ? 'rgba(10,10,10,0.3)'
          : 'rgba(255,255,255,0.4)',
        borderBottom: `1px solid ${borderColor}`,
        transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
        color: textColor,
      }}
    >
      {/* Logo */}
      <MagneticLink
        href="/"
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          color: textColor,
          textDecoration: 'none',
          transition: 'color 0.3s ease',
        } as React.CSSProperties}
      >
        Zain.Ul.Abideen
      </MagneticLink>

      {/* Center nav links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {[
          { label: '01 Projects', href: '#projects' },
          { label: '02 About', href: '#about' },
          { label: '03 Skills', href: '#skills' },
        ].map(({ label, href }) => (
          <MagneticLink
            key={label}
            href={href}
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '12px',
              letterSpacing: '0.08em',
              color: textColor,
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'color 0.3s ease, opacity 0.2s ease',
            } as React.CSSProperties}
          >
            {label}
          </MagneticLink>
        ))}
      </div>

      {/* Right: CTA buttons */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <MagneticLink
          href="#contact"
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            color: textColor,
            textDecoration: 'none',
            padding: '8px 18px',
            border: `1px solid ${borderColor}`,
            borderRadius: '4px',
            transition: 'color 0.3s ease, border-color 0.3s ease',
          } as React.CSSProperties}
        >
          Get in touch
        </MagneticLink>

        <MagneticLink
          href="/resume.pdf"
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '12px',
            letterSpacing: '0.06em',
            color: isDark ? '#ffffff' : '#0a0a0a',
            textDecoration: 'none',
            transition: 'color 0.3s ease, background 0.3s ease',
          } as React.CSSProperties}
        >
          Résumé
        </MagneticLink>
      </div>
    </nav>
  )
}

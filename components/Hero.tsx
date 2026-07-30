'use client'

import Image from 'next/image'
import ParticleNetwork from './ParticleNetwork'

export default function Hero() {
  return (
    <section
      id="hero"
      data-nav-color="light"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 70% 80% at 50% 60%, #b4b4b4ff 0%, #ffffff 65%)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Particle Network Animation */}
      <ParticleNetwork />

      {/* Background Text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          fontFamily: "'Bungee Outline', cursive, sans-serif",
          color: 'rgba(10,10,10,0.9)',
          fontSize: 'clamp(32px, 10vw, 100px)',
          textAlign: 'center',
          lineHeight: '1.15',
          whiteSpace: 'nowrap',
          marginTop: '-15vh',
          pointerEvents: 'none',
        }}
      >
        <div>FULL STACK WEB</div>
        <div>AND AI DEVELOPER</div>
      </div>

      {/* Profile photo — above canvas */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '100vh',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '420px',
            height: '640px',
            marginBottom: '50px',
          }}
        >
          {/*
            Replace src with your actual image path: /images/profile.png
            Use a transparent PNG for best layering over the particle text.
          */}
          <Image
            src="/images/profile.png"
            alt="Zain Ul Abideen"
            fill
            sizes="340px"
            style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            priority
          />
        </div>
      </div>

      {/* Wave SVG divider — dark to light */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          lineHeight: 0,
        }}
      >
        <svg width="100%" viewBox="0 0 680 120" xmlns="http://www.w3.org/2000/svg">

          <path
            d="M0,52 C120,75 220,75 340,55 C460,35 560,32 680,45 L680,120 L0,120 Z"
            fill="#737373"
          />


          <path
            d="M0,55
       C120,78 220,78 340,58
       C460,43 560,47 680,60
       L680,120 L0,120 Z"
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  )
}

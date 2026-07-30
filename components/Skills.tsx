'use client'

import { useState } from 'react'
import SkillsList from './skills/SkillsList'

export default function Skills() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <>
      <div style={{ lineHeight: 0, overflow: 'hidden' }}>
        <svg
          width="100%"
          viewBox="0 0 680 120"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '120px' }}
        >
          <path
            d="M0,55
           C120,78 220,78 340,58
           C460,43 560,47 680,60
           L680,120 L0,120 Z"
            fill="#717171"
          />
        </svg>
      </div>
      <section
        id="skills"
        style={{
         padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px) 0',
          background: '#717171',
          minHeight: '400px'
        }}
      >
        <div style={{}}>
          <h2
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: 'clamp(18px, 4vw, 32px)',
            }}
          >
            Skills
          </h2>

          <SkillsList selectedId={selectedId} onSelect={setSelectedId} />
        </div>
      </section>
      <div style={{ lineHeight: 0, overflow: 'hidden' }}>
        <svg
          width="100%"
          viewBox="0 0 680 120"
          preserveAspectRatio="none"
          transform="scale(-1, -1)"
          style={{ display: 'block', width: '100%', height: '120px' }}
        >
          <path
            d="M0,55
           C120,78 220,78 340,58
           C460,43 560,47 680,60
           L680,120 L0,120 Z"
            fill="#717171"
          />
        </svg>
      </div>
    </>
  )
}
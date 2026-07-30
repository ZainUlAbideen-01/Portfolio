'use client'

import { useEmergeAnimation } from '@/hooks/useEmergeAnimation'
import { useTypewriter } from '@/hooks/useTypewriter'

const ABOUT_TEXT = `Hi, I'm Zain Ul Abideen, a final-year Computer Science student and aspiring software engineer with a passion for building meaningful digital experiences. I have hands-on experience developing full-stack web applications, designing intuitive user interfaces, and working with AI technologies to solve real-world problems. I enjoy turning complex ideas into scalable, user-friendly solutions while continuously learning new tools and technologies that help me grow as a developer.`

export default function AboutMe() {
  const headingRef = useEmergeAnimation<HTMLHeadingElement>({ duration: 0.9 })
  const { ref: bodyRef, displayed, done } = useTypewriter(ABOUT_TEXT, 22)

  return (
    <section
      id="about"
      data-nav-color="dark"
      style={{
        background: '#000',
        padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
        }}
      >
        <h2
          ref={headingRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#fff',
            marginBottom: 'clamp(20px, 3vw, 32px)',
            lineHeight: 1,
          }}
        >
          ABOUT ME
        </h2>
      </div>

      {/* Full-width paragraph */}
      <div
        style={{
          width: '100%',
        }}
      >
        <p
          ref={bodyRef as React.RefObject<HTMLParagraphElement>}
          className={`typewriter-cursor${done ? ' done' : ''}`}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            fontWeight: 100,
            lineHeight: 1.8,
            color: '#9E9E9E',
            width: '100%',
            minHeight: 'clamp(180px, 20vw, 200px)',
            margin: 0,
          }}
        >
          {displayed}
        </p>
      </div>
    </section>
  )
}
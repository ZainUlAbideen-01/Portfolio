'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useEmergeAnimation } from '@/hooks/useEmergeAnimation'
import { useTypewriter } from '@/hooks/useTypewriter'
import { useMagneticHover } from '@/hooks/useMagneticHover'

const OTHER_PROJECTS = [
  {
    id: 'sushi-store',
    name: 'SUSHI THEMED STORE',
    description:
      'A fully responsive e-commerce storefront for a Japanese restaurant. Cart management, animations, and a clean UI.',
    image: '/images/other-projects/sushi.png',
    tags: ['JavaScript', 'React', 'CSS', 'Node.js', 'MongoDB'],
    href: 'https://github.com/ZainUlAbideen',
    website: 'sushiman.com',
  },
  {
    id: 'weather-app',
    name: 'WEATHER DASHBOARD',
    description:
      'Real-time weather with location search, 7-day forecasts, and animated weather icons pulled from OpenWeather API.',
    image: '/images/other-projects/weather.png',
    tags: ['TypeScript', 'Next.js', 'Tailwind', 'REST API'],
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'chat-app',
    name: 'REAL-TIME CHAT APP',
    description:
      'WebSocket-powered chat with rooms, typing indicators, read receipts, and end-to-end encrypted messages.',
    image: '/images/other-projects/chat.png',
    tags: ['Socket.io', 'Express', 'React', 'PostgreSQL'],
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'expense-tracker',
    name: 'EXPENSE TRACKER',
    description:
      'Personal finance manager with category breakdowns, monthly charts, and CSV export functionality.',
    image: '/images/other-projects/expense.png',
    tags: ['React', 'Chart.js', 'Firebase', 'Tailwind'],
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'ai-resume',
    name: 'AI RESUME BUILDER',
    description:
      'GPT-powered resume generator that tailors content to job descriptions and exports pixel-perfect PDFs.',
    image: '/images/other-projects/resume.png',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'url-shortener',
    name: 'URL SHORTENER',
    description:
      'High-throughput link shortener with analytics dashboard, custom slugs, and QR code generation.',
    image: '/images/other-projects/url.png',
    tags: ['Go', 'Redis', 'React', 'PostgreSQL'],
    href: 'https://github.com/ZainUlAbideen',
  },
]

// Marquee row for tech tags
function Marquee({ tags }: { tags: string[] }) {
  // Duplicate tags for seamless loop
  const doubled = [...tags, ...tags]
  return (
    <div className="marquee-wrapper" style={{ marginBottom: '12px' }}>
      <div className="marquee-track">
        {doubled.map((tag, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: '#717171',
              background: '#1e1e1e',
              padding: '4px 10px',
              borderRadius: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// Individual other project card
function OtherProjectCard({
  project,
  index,
}: {
  project: (typeof OTHER_PROJECTS)[number]
  index: number
}) {
  const cardRef = useMagneticHover<HTMLDivElement>(0.15)
  const linkRef = useMagneticHover<HTMLAnchorElement>(0.35)
  const headingRef = useEmergeAnimation<HTMLHeadingElement>({
    duration: 0.7,
    delay: index * 0.05,
  })
  const { ref: descRef, displayed, done } = useTypewriter(project.description, 18)

  return (
    <div
      ref={cardRef}
      style={{
        background: '#111111',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Browser Mockup */}
      <div
        style={{
          width: '100%',
          padding: '12px',
          background: '#000000ff',
        }}
      >
        <div
          style={{
            borderRadius: '18px',
            overflow: 'hidden',
            border: '1px solid #2b2b2b',
            boxShadow: '0 18px 40px rgba(0,0,0,.45)',
            background: '#2d2d2d',
          }}
        >

          {/* Browser Top Bar */}
          <div
            style={{
              height: '34px',
              background: '#3b3b3b',
              display: 'flex',
              alignItems: 'center',
              padding: '0 14px',
            }}
          >
            {/* Left side */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                flex: 1,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
              </div>

              {project.website && (
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: '#b5b5b5',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {project.website}
                </span>
              )}
            </div>
          </div>

          {/* Screenshot */}
          <div
            style={{
              position: 'relative',
              height: '190px',
              background: '#fff',

            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                border: "2px solid #939393"
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '16px' }}>
        <Marquee tags={project.tags} />

        <h3
          ref={headingRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '15px',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '10px',
            display: 'block',
          }}
        >
          {project.name}
        </h3>

        <p
          ref={descRef as React.RefObject<HTMLParagraphElement>}
          className={`typewriter-cursor${done ? ' done' : ''}`}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            fontWeight: 300,
            color: '#717171',
            lineHeight: 1.6,
            marginBottom: '14px',
            minHeight: '70px',
          }}
        >
          {displayed}
        </p>

        <a
          ref={linkRef}
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '11px',
            letterSpacing: '0.06em',
            color: '#ffffff',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          See Details
          <Image
            src="/svgs/arrow.svg"
            alt="arrow"
            width={12}
            height={12}
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </a>
      </div>
    </div>
  )
}

// Animated divider lines
function OtherProjectsDivider() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    gsap.set([leftRef.current, rightRef.current], { scaleX: 0 })

    tl.to(leftRef.current, {
      scaleX: 1,
      duration: 10,
      ease: 'power3.out',
      transformOrigin: 'right center',
    }).to(
      rightRef.current,
      {
        scaleX: 1,
        duration: 10,
        ease: 'power3.out',
        transformOrigin: 'left center',
      },
      '<'
    )

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === wrapRef.current) st.kill()
      })
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '60px',
      }}
    >
      <div
        ref={leftRef}
        style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255)' }}
      />
      <span
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: '30px',
          color: '#717171',
          fontWeight: '800',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
        }}
      >
        Other Projects
      </span>
      <div
        ref={rightRef}
        style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255)' }}
      />
    </div>
  )
}

export default function OtherProjects() {
  return (
    <section
      id="other-projects"
      data-nav-color="dark"
      style={{
        background: '#0a0a0a',
        padding: '0 80px 120px',
        paddingBottom: '30px'
      }}
    >
      <OtherProjectsDivider />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
      >
        {OTHER_PROJECTS.map((project, i) => (
          <OtherProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

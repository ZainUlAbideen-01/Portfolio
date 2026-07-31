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
      'A fully responsive e-commerce storefront for a Japanese sushi themed restaurant with clean animations.',
    image: '/images/other-projects/sushi.png',
    tags: ['HTML', 'TailwindCSS', 'JavaScript', 'Animate-On-Scroll', 'Netlify'],
    href: 'https://github.com/ZainUlAbideen',
    website: 'sushistore826.netlify.app',
  },
    {
    id: 'zmovies',
    name: 'ZMOVIES',
    description: 'A movie browsing website that lets users explore movies, view details, and save their favorite titles for easy access.',
    image: '/images/other-projects/zmovies.png',
    tags: ['React','JavaScript','TailwindCSS', 'TMDB API', 'Redux Toolkit', 'Lucide React', 'Netlify'],
    href: 'https://github.com/ZainUlAbideen/ZMovies',
    website: 'zmovies826.netlify.app',
  },
    {
    id: 'spacesync',
    name: 'SPACE SYNC RESOURCE MANAGER',
    description: 'A resource management platform for organizations to manage users, access groups, spaces, and administrative permissions.',
    image: '/images/other-projects/spacesync.png',
    tags: ['NextJs', 'MongoDB', 'JWT', 'Express' , 'shadcn/ui', 'TailwindCSS', 'Lucide React', 'TypeScript', 'REST APIs'],
    href: 'https://github.com/ZainUlAbideen',
    website: '',
  },
    {
    id: 'tunely',
    name: 'TUNELY',
    description: 'A Spotify-style music streaming website where users can explore albums, browse songs, and enjoy the music.',
    image: '/images/other-projects/tunely.png',
    tags: ['HTML','CSS','JavaScript', 'Netlify'],
    href: 'https://github.com/ZainUlAbideen/ZMovies',
    website: 'tunely826.netlify.app',
  },
    {
    id: 'jumper-game',
    name: 'SUPER JUMPER GAME',
    description: 'A Mario-style 2D platformer game built with .NET Windows Forms, featuring three levels, enemies and obstacles.',
    image: '/images/other-projects/jumper.png',
    tags: ['C#','.NET'],
    href: 'https://github.com/ZainUlAbideen',
    website: '',
  },
    {
    id: 'cosmetics-store',
    name: 'COSMETICS STORE',
    description: 'A .NET-based cosmetics booking management system for managing customer, bookings, and products.',
    image: '/images/other-projects/cosmetics.png',
    tags: ['MySql', 'SSMS','C#','.NET'],
    href: 'https://github.com/ZainUlAbideen',
    website: '',
  },
  {
    id: 'gym-fitness',
    name: 'GYM FITNESS TRACKER',
    description: 'A computer vision-based fitness tracker that counts workout reps and sets in real time, with an integrated AI chatbot.',
    image: '/images/other-projects/gym.png',
    tags: ['Python', 'Html','Css','Javascript', 'MediaPipe Hands', 'Gemini API', 'MediaPipe Pose'],
    href: 'https://github.com/ZainUlAbideen',
    website: '',
  },

]

// Marquee row for tech tags
function Marquee({ tags }: { tags: string[] }) {
  // Duplicate tags for seamless loop
  const doubled = [...tags, ...tags]
  return (
    <div className="marquee-wrapper" style={{ marginBottom: 'clamp(6px, 1.5vw, 12px)' }}>
      <div className="marquee-track">
        {doubled.map((tag, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontSize: 'clamp(8px, 1.6vw, 10px)',
              letterSpacing: '0.08em',
              color: '#717171',
              background: '#1e1e1e',
              padding: 'clamp(3px, 0.8vw, 4px) clamp(6px, 1.8vw, 10px)',
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
        minWidth: 0,
      }}
    >
      {/* Browser Mockup */}
      <div
        style={{
          width: '100%',
          padding: 'clamp(6px, 1.6vw, 12px)',
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
              height: 'clamp(22px, 4.5vw, 34px)',
              background: '#3b3b3b',
              display: 'flex',
              alignItems: 'center',
              padding: '0 clamp(7px, 1.8vw, 14px)',
            }}
          >
            {/* Left side */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(5px, 1.3vw, 10px)',
                flex: 1,
                minWidth: 0,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 'clamp(4px, 1vw, 8px)',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 'clamp(6px, 1.6vw, 12px)',
                    height: 'clamp(6px, 1.6vw, 12px)',
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
                <div
                  style={{
                    width: 'clamp(6px, 1.6vw, 12px)',
                    height: 'clamp(6px, 1.6vw, 12px)',
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
                <div
                  style={{
                    width: 'clamp(6px, 1.6vw, 12px)',
                    height: 'clamp(6px, 1.6vw, 12px)',
                    borderRadius: '50%',
                    background: '#6a6a6a',
                  }}
                />
              </div>

              {project.website && (
                <a
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: 'clamp(9px, 2vw, 12px)',
                    letterSpacing: '0.08em',
                    color: '#b5b5b5',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {project.website}
                </a>
              )}
            </div>
          </div>

          {/* Screenshot */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '340 / 190',
              background: '#fff',
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 900px) 50vw, 33vw"
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
      <div style={{ padding: 'clamp(10px, 2.5vw, 16px)' }}>
        <Marquee tags={project.tags} />

        <h3
          ref={headingRef}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(11px, 2.6vw, 15px)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 'clamp(6px, 1.5vw, 10px)',
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
            fontSize: 'clamp(10px, 2.2vw, 14px)',
            fontWeight: 300,
            color: '#717171',
            lineHeight: 1.6,
            marginBottom: 'clamp(8px, 2vw, 14px)',
            minHeight: 'clamp(50px, 12vw, 70px)',
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
            fontSize: 'clamp(9px, 1.8vw, 11px)',
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
              width: 'clamp(8px, 1.6vw, 12px)',
              height: 'clamp(8px, 1.6vw, 12px)',
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
        gap: 'clamp(10px, 2.5vw, 20px)',
        marginBottom: 'clamp(28px, 6vw, 60px)',
      }}
    >
      <div
        ref={leftRef}
        style={{ flex: 1, height: '1px', background: 'rgba(255, 255, 255)' }}
      />
      <span
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'clamp(16px, 4vw, 30px)',
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
      className="other-projects-section"
      style={{
        background: '#0a0a0a',
        padding: '0 clamp(16px, 6vw, 80px) 120px',
        paddingBottom: '30px',
      }}
    >
      <OtherProjectsDivider />

      <div
        className="other-projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'clamp(10px, 3vw, 24px)',
        }}
      >
        {OTHER_PROJECTS.map((project, i) => (
          <OtherProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <style jsx>{`
        /* Below this width, 3 columns get too cramped — drop to 2, never to 1 */
        @media (max-width: 900px) {
          .other-projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
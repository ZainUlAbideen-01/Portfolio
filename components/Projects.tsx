'use client'

import Image from 'next/image'
import { useEmergeAnimation } from '@/hooks/useEmergeAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'
import { useTypewriter } from '@/hooks/useTypewriter'

const PROJECTS = [
  {
    id: 'unison',
    name: 'UNISON',
    description:
      'A collaborative learning platform that connects students and mentors in real time. Built with Next.js, WebSockets, and PostgreSQL.',
    image: '/images/unison.png',
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'image-hoster',
    name: 'IMAGE HOSTER',
    description:
      'A fast, privacy-first image hosting service with shareable links, drag-and-drop upload, and automatic compression.',
    image: '/images/image-hoster.png',
    href: 'https://github.com/ZainUlAbideen',
  },
  {
    id: 'pneumonia-detector',
    name: 'PNEUMONIA DETECTION SYSTEM',
    description:
      'A CNN-based deep learning model that classifies chest X-rays for pneumonia detection with 94% accuracy, deployed as a web app.',
    image: '/images/pneumonia.png',
    href: 'https://github.com/ZainUlAbideen',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number]
  index: number
}) {
  const cardRef = useMagneticHover<HTMLAnchorElement>(0.2)

  const headingRef = useEmergeAnimation<HTMLHeadingElement>({
    duration: 0.7,
    delay: index * 0.08,
  })

  const {
    ref: descRef,
    displayed,
    done,
  } = useTypewriter(project.description, 18)

  return (
    <a
      ref={cardRef}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        borderRight: '2px solid white',
        alignItems: 'center',
        gap: '24px',
        borderRadius: '9px',
        margin: '28px 0',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: '280px',
          height: '160px',
          borderRadius: '8px',
          overflow: 'hidden',
          flexShrink: 0,
          background: '#000000',
          position: 'relative',
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            marginBottom: '8px',
          }}
        >
          <h3
            ref={headingRef}
            style={{
              flex: 1,
              margin: 0,
              fontFamily: 'var(--font-poppins)',
              fontSize: '28px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '0.02em',
            }}
          >
            {project.name}
          </h3>

          <Image
            src="/svgs/arrow.svg"
            alt="arrow"
            width={24}
            height={24}
            style={{ flexShrink: 0, marginRight: "20px" }}
          />
        </div>

        <p
          ref={descRef as React.RefObject<HTMLParagraphElement>}
          className={`typewriter-cursor${done ? ' done' : ''}`}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px',
            fontWeight: 300,
            color: '#888',
            lineHeight: 1.6,
            maxWidth: '680px',
            minHeight: '80px',
          }}
        >
          {displayed}
        </p>
      </div>



    </a>
  )
}
export default function Projects() {
  const headingRef = useEmergeAnimation<HTMLHeadingElement>({ duration: 0.9 })

  return (
    <section
      id="projects"
      data-nav-color="dark"
      style={{
        background: '#000000',
        padding: '80px 80px 120px',
        paddingTop: '30px',
        paddingBottom: '30px',
      }}
    >
      <h2
        ref={headingRef}
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'clamp(40px, 6vw, 72px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: '8px',
          display: 'block',
        }}
      >
        PROJECTS
      </h2>

      {/* First card has top border too */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

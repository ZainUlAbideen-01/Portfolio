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
      'UNISON is a social networking platform that connects university students and alumni, enabling networking, mentorship, career opportunities, and community engagement through a centralized platform.',
    image: '/images/unison.png',
    href: 'https://github.com/ZainUlAbideen',
    tags: ['Next.js', 'WebSockets', 'Neo4j', 'Lucide React', 'shadcn/ui', 'NestJs', 'TailwindCSS', 'TypeScript', 'GraphQL', 'JWT'],
  },
  {
    id: 'image-hoster',
    name: 'IMAGE HOSTER',
    description:
      'A full-stack image management platform where users can upload, store, and manage images using Cloudinary, with secure user authentication and cloud-based media handling.',
    image: '/images/image-hoster.png',
    href: 'https://github.com/ZainUlAbideen',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT', 'TailwindCSS', 'TypeScript'],
  },
  {
    id: 'pneumonia-detector',
    name: 'PNEUMONIA DETECTION SYSTEM',
    description:
      'A CNN-based deep learning model that classifies chest X-rays for pneumonia detection with 99% accuracy with ResNet-18.',
    image: '/images/pneumonia.png',
    href: 'https://github.com/ZainUlAbideen',
    tags: ['ResNet-18', 'Python', 'Streamlit', 'Sklearn', 'Torch', 'Matplotlib', 'Numpy'],
  },
]

function Marquee({ tags }: { tags: string[] }) {
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
        flexWrap: 'nowrap',
        borderRight: '2px solid white',
        alignItems: 'center',
        gap: 'clamp(12px, 3vw, 24px)',
        borderRadius: '9px',
        margin: 'clamp(14px, 4vw, 28px) 0',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 'clamp(90px, 24vw, 280px)',
          aspectRatio: '280 / 160',
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
          sizes="(max-width: 768px) 24vw, 280px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(8px, 2vw, 16px)',
            marginBottom: 'clamp(4px, 1vw, 8px)',
          }}
        >
          <h3
            ref={headingRef}
            style={{
              flex: 1,
              minWidth: 0,
              margin: 0,
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(14px, 3.2vw, 28px)',
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
            style={{
              flexShrink: 0,
              width: 'clamp(14px, 2.4vw, 24px)',
              height: 'clamp(14px, 2.4vw, 24px)',
              marginRight: 'clamp(6px, 1.6vw, 20px)',
            }}
          />
        </div>
        <Marquee tags={project.tags} />
        <p
          ref={descRef as React.RefObject<HTMLParagraphElement>}
          className={`typewriter-cursor${done ? ' done' : ''}`}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(10px, 1.8vw, 16px)',
            fontWeight: 300,
            color: '#888',
            lineHeight: 1.6,
            maxWidth: '680px',
            minHeight: 'clamp(40px, 8vw, 80px)',
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
        padding: 'clamp(16px, 6vw, 80px)',
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
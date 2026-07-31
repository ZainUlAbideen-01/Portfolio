'use client'

import { useState } from 'react'
import { useEmergeAnimation } from '@/hooks/useEmergeAnimation'
import { useMagneticHover } from '@/hooks/useMagneticHover'

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    handle: 'linkedin.com/in/zainulabideencs23',
    href: 'https://linkedin.com/in/zainulabideencs23',
    icon: (
      <img src="/svgs/linkedin.svg" alt="LinkedIn" />
    ),
  },
  {
    id: 'github',
    label: 'GITHUB',
    handle: 'github.com/ZainUlAbideen-01',
    href: 'https://github.com/ZainUlAbideen-01',
    icon: (
      <img src="/svgs/github.svg" alt="Github" />
    ),
  },
  {
    id: 'gmail',
    label: 'GMAIL',
    handle: 'zain.ijaz12334@gmail.com',
    href: 'mailto:zain.ijaz12334@gmail.com',
    icon: (
      <img src="/svgs/gmail.svg" alt="Gmail" />
    ),
  },
]

function SocialLink({
  link,
}: {
  link: (typeof SOCIAL_LINKS)[number]
}) {
  const ref = useMagneticHover<HTMLAnchorElement>(0.3)
  return (
    <a
      ref={ref}
      href={link.href}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(14px, 3vw, 24px)',
        margin: 'clamp(14px, 3vw, 25px) 0',
        textDecoration: 'none',
        color: 'inherit',
        borderRight: '2px solid #ffffffff',
        borderRadius: '8px'
      }}
    >
      <div
        style={{
          width: 'clamp(30px, 6vw, 40px)',
          height: 'clamp(30px, 6vw, 40px)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#aaa',
          flexShrink: 0,
        }}
      >
        {link.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            marginBottom: '2px',
          }}
        >
          <p
            style={{
              margin: 0,
              flex: 1,
              minWidth: 0,
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(12px, 2.4vw, 15px)',
              fontWeight: 800,
              color: '#ffffff',
            }}
          >
            {link.label}
          </p>

          <img
            src="/svgs/arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
            style={{ flexShrink: 0, marginRight: 'clamp(8px, 2vw, 20px)', width: 'clamp(14px, 2.8vw, 20px)', height: 'clamp(14px, 2.8vw, 20px)' }}
          />
        </div>

        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-poppins)',
            fontSize: 'clamp(11px, 2vw, 13px)',
            fontWeight: 300,
            color: '#ffffff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {link.handle}
        </p>
      </div>

    </a>
  )
}

export default function Contact() {
  const heading1Ref = useEmergeAnimation<HTMLHeadingElement>({ duration: 1 })
  const heading2Ref = useEmergeAnimation<HTMLHeadingElement>({
    duration: 1,
    delay: 0.15,
  })
  const sendBtnRef = useMagneticHover<HTMLButtonElement>(0.4)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
        id="contact"
        data-nav-color="dark"
        className="contact-section"
        style={{
          background: '#717171',
          padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 80px) clamp(50px, 9vw, 100px)',
        }}
      >
        {/* Headings */}
        <div style={{ marginBottom: 'clamp(36px, 8vw, 72px)' }}>
          <h2
            ref={heading1Ref}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(50px, 9vw, 120px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              lineHeight: 0.95,
              display: 'block',
            }}
          >
            LET'S WORK
          </h2>
          <h2
            ref={heading2Ref}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(50px, 9vw, 120px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#3F3F3F',
              lineHeight: 0.95,
              display: 'block',
            }}
          >
            TOGETHER
          </h2>
        </div>

        {/* Two columns: form + social — stacks to one column on mobile, form first */}
        <div
          className="contact-columns"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 6vw, 80px)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <div>
            <div
              className="contact-name-email"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(14px, 3vw, 24px)',
                marginBottom: 'clamp(14px, 3vw, 24px)',
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: 'clamp(12px, 2.2vw, 15px)',
                    fontWeight: 100,
                    letterSpacing: '0.1em',
                    color: '#ffffffff',

                  }}
                >
                  Name
                </label>

                <input
                  id="name"
                  className="contact-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  style={{ backgroundColor: '#D9D9D9', color: '#717171', borderRadius: '5px', width: '100%' }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontFamily: 'var(--font-poppins)',
                    fontSize: 'clamp(12px, 2.2vw, 15px)',
                    fontWeight: 100,
                    letterSpacing: '0.1em',
                    color: '#ffffffff',
                  }}
                >
                  Email
                </label>

                <input
                  id="email"
                  className="contact-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  style={{ backgroundColor: '#D9D9D9', color: '#717171', borderRadius: '5px', width: '100%' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 'clamp(14px, 3vw, 24px)' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-poppins)',
                  fontSize: 'clamp(12px, 2.2vw, 15px)',
                  fontWeight: 100,
                  letterSpacing: '0.1em',
                  color: '#ffffffff',
                }}
              >
                Message
              </label>

              <textarea
                id="message"
                className="contact-input"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                style={{ resize: 'none', backgroundColor: '#D9D9D9', color: '#717171', borderRadius: '5px', width: '100%' }}
              />
            </div>



            <button
              ref={sendBtnRef}
              onClick={handleSubmit}
              disabled={status === 'sending'}
              style={{
                width: '100%',
                display: 'block',

                fontFamily: 'var(--font-geist-mono)',
                fontWeight: 200,
                fontSize: 'clamp(12px, 2vw, 14px)',
                letterSpacing: '0.08em',
                color: 'white',
                background: '#3F3F3F',
                border: 'none',
                padding: 'clamp(12px, 2.5vw, 16px) clamp(20px, 4vw, 40px)',
                borderRadius: '5px',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                opacity: status === 'sending' ? 0.6 : 1,
                transition: 'opacity 0.2s ease',
              }}
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'sent'
                  ? 'Sent ✓'
                  : 'Send'}
            </button>

            {status === 'error' && (
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontSize: '13px',
                  color: '#ff4444',
                  marginTop: '12px',
                }}
              >
                Something went wrong. Try emailing directly at zain.ijaz12334@gmail.com
              </p>
            )}
          </div>

          {/* Social links */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(20px, 4vw, 28px)',
                fontWeight: 800,
                color: '#ffffffff',
                marginBottom: '8px',
              }}
            >
              Connect with me on
            </p>
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.id} link={link} />
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Below this width, the form and social columns no longer fit side by side —
           stack into one column. Form markup comes first in the DOM, so it naturally
           lands above "Connect with me". */
        @media (max-width: 900px) {
          .contact-columns {
            grid-template-columns: 1fr !important;
          }
        }

        /* On very small screens, name/email side-by-side gets too cramped — stack those too */
        @media (max-width: 480px) {
          .contact-name-email {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
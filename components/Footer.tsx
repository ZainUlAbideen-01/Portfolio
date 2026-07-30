export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(18px, 3vw, 28px) clamp(20px, 6vw, 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 'clamp(9px, 1.2vw, 12px)',
          letterSpacing: '0.08em',
          color: '#ffffffff',
          whiteSpace: 'nowrap',
        }}
      >
        Made By Zain.Ul.Abideen
      </span>

      <span
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 'clamp(9px, 1.2vw, 12px)',
          letterSpacing: '0.08em',
          color: '#ffffffff',
          whiteSpace: 'nowrap',
        }}
      >
        Web &amp; AI Developer
      </span>
    </footer>
  )
}
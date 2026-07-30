export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '28px 80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: '#ffffffff',
        }}
      >
        Made By Zain.Ul.Abideen
      </span>
      <span
        style={{
          fontFamily: 'var(--font-geist-mono)',
          fontSize: '12px',
          letterSpacing: '0.08em',
          color: '#ffffffff',
        }}
      >
        Web &amp; AI Developer
      </span>
    </footer>
  )
}

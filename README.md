# Zain Ul Abideen — Portfolio Website Plan

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14** (App Router) | SSG/SSR, perfect for portfolios; you're already familiar |
| Language | **TypeScript** | Type-safe throughout |
| Styling | **Tailwind CSS v3** + custom CSS for animations | Utility-first; custom CSS for complex keyframes |
| Animations | **GSAP** (GreenSock) + **ScrollTrigger** | Industry-standard for animations and scroll effects |

| Fonts | Google Fonts: **Geist Mono**, **Bungee Outline**, **Poppins** | Loaded via `next/font/google` |
| Email | **Resend** + `react-email` | Clean API, generous free tier, works in Next.js API routes |
| Deployment | **Vercel** | Zero-config for Next.js |

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, sticky nav
│   ├── page.tsx             # Single-page composition (all sections)
│   └── api/
│       └── contact/
│           └── route.ts     # POST handler → Resend email
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutMe.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── OtherProjects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useMagneticHover.ts  # Magnetic + shake effect hook
│   └── useScrollColor.ts    # Navbar text color on scroll
├── lib/
│   └── gsap.ts              # GSAP + ScrollTrigger registration
├── public/
│   ├── images/              # Your photos, project screenshots
│   └── fonts/               # If self-hosting anything
└── styles/
    └── globals.css          # Base styles, CSS custom props, keyframes
```

---

## Section-by-Section Spec

### 1. Navbar

**Font:** Geist Mono  
**Behavior:**
- `position: sticky; top: 0; z-index: 50`
- Background: `transparent` with `backdrop-filter: blur(12px)` — anything scrolling behind it blurs
- Text color transitions: white on dark sections (Hero, Skills, Contact), black/dark on light sections (About, Projects)
- Detect section background using `IntersectionObserver` on each section; swap a `.navbar--light` / `.navbar--dark` class accordingly

**Implementation:**
```ts
// hooks/useScrollColor.ts
// IntersectionObserver watches each section's top edge
// When a dark-bg section crosses the navbar threshold → add 'text-white'
// When a light-bg section crosses → add 'text-black'
```

All nav links + "Get in touch" button + "Résumé" button → **magnetic hover effect** (see Shared Effects).

---

### 2. Hero Section

**Layout:** Full viewport height, black background. Your photo centered/right-aligned. Behind it, the large Bungee Outline text.

**The big text:** `FULL STACK WEB AND AI DEVELOPER`
- Font: Bungee Outline
- Positioned behind the photo using `z-index` layering

---

### 3. About Me

**Background:** White / light  
**Heading "ABOUT ME":**
- Font: Poppins, bold, uppercase
- **Extrusion emerge animation:** Text appears already at its final position but "grows upward from its own baseline" — as if being extruded out of the surface
- Implementation: `clip-path: inset(100% 0 0 0)` → `clip-path: inset(0% 0 0 0)` on scroll trigger. Combined with a subtle `scaleY` transform from `0.6` → `1` with `transform-origin: bottom center`. This gives the "emerging from surface" feel with slight compression relaxing as it rises.
- Trigger: ScrollTrigger when heading enters viewport

```css
/* Starting state */
.heading-emerge {
  clip-path: inset(100% 0 0 0);
  transform: scaleY(0.6);
  transform-origin: bottom center;
}
/* End state (GSAP animates to this) */
.heading-emerge.visible {
  clip-path: inset(0% 0 0 0);
  transform: scaleY(1);
}
```

**Body text (About Me content):**
- Typed-in animation when scrolled into view
- Use a custom hook with `IntersectionObserver` + interval-based character appending
- No blinking cursor needed (or optionally add one that disappears after typing completes)

```ts
// hooks/useTypewriter.ts
// Watch element with IntersectionObserver
// On intersection: start interval appending characters one by one
// Speed: ~30ms per character feels natural
```

---

### 4. Skills

**Background:** Dark/black (matches Figma)  
**Heading "SKILLS":** Same extrusion emerge animation as About Me  
**Content:** Leave empty for now — just the heading + placeholder space

---

### 5. Projects (Featured)

**Background:** Dark  
**Heading "PROJECTS":** Same extrusion emerge animation  
**Project cards (UNISON, IMAGE HOSTER, PNEUMONIA DETECTOR):**
- Each card: project thumbnail (you provide image), project name, short description, arrow-link icon
- On hover: **magnetic hover + initial shake** (see Shared Effects)
- On click: external link or modal

---

### 6. Other Projects

**Background:** Dark  
**"OTHER PROJECTS" divider:**
- Two horizontal lines on either side of the text
- Animation: lines start at `width: 0` and extend outward from center using CSS transitions triggered by ScrollTrigger
- Implementation: `scaleX(0)` → `scaleX(1)` with `transform-origin: center`

**Project card headings (white text):**
- Same extrusion emerge animation as main section headings

**Project descriptions:**
- Typewriter animation (same as About Me body text)

**Technology tags / stack badges:**
- Marquee scroll animation: use **`react-marquee-slider`** or a pure CSS infinite scroll
- Pure CSS approach (simpler, no dependency):

```css
.marquee-track {
  display: flex;
  gap: 12px;
  animation: marquee 8s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); } /* duplicate items so loop is seamless */
}
```

**Each other project card:**
- Magnetic hover + shake on the card itself and the "See Details →" link

---

### 7. Let's Work Together / Contact

**Background:** Light or dark (match Figma)  
**"LET'S WORK" heading:** Extrusion emerge animation  
**"TOGETHER" heading:** Same, slight delay (stagger after LET'S WORK)  
**Form fields (Name, Email, Message):** Standard inputs  
**"Send" button:** Magnetic hover + shake  
**Connect links (LinkedIn, GitHub, Gmail):** Magnetic hover + shake  

**Form submission:**
```ts
// app/api/contact/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'zain.gd234@gmail.com',
    subject: `Portfolio contact from ${name}`,
    text: message,
  })
  return Response.json({ ok: true })
}
```

---

### 8. Footer

Simple: "Made By Zain.Ul.Abideen" — "Web & AI Developer"  
No animations needed.

---

## Shared Effects

### Magnetic Hover + Initial Shake

Every clickable element (nav buttons, project cards, other project cards, send button, social links) gets this effect.

**How it works:**
1. On `mouseenter`: play a quick shake keyframe (rapid small x/y oscillation for ~300ms)
2. While mouse is over the element: track cursor position relative to element center, apply a subtle `translate(x, y)` toward the cursor using GSAP quickTo for smooth following
3. On `mouseleave`: animate back to `translate(0, 0)`

```ts
// hooks/useMagneticHover.ts
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useMagneticHover(strength = 0.3) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' })

    const onEnter = () => {
      // Initial shake
      gsap.fromTo(el,
        { x: -4 },
        { x: 4, yoyo: true, repeat: 5, duration: 0.05, ease: 'none',
          onComplete: () => gsap.set(el, { x: 0 }) }
      )
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      xTo((e.clientX - cx) * strength)
      yTo((e.clientY - cy) * strength)
    }

    const onLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
```

Usage:
```tsx
function NavButton({ children }: { children: React.ReactNode }) {
  const ref = useMagneticHover(0.4)
  return <button ref={ref as any}>{children}</button>
}
```

---

### Extrusion Emerge Heading Animation

Used on: About Me, Skills, Projects, Other Projects card headings, Let's Work, Together

```ts
// In each component, register with ScrollTrigger
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

gsap.fromTo(headingRef.current,
  {
    clipPath: 'inset(100% 0 0 0)',
    scaleY: 0.5,
    transformOrigin: 'bottom center',
  },
  {
    clipPath: 'inset(0% 0 0 0)',
    scaleY: 1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: headingRef.current,
      start: 'top 85%',
    }
  }
)
```

---

### Typewriter Animation

Used on: About Me body, Other Projects descriptions

```ts
// hooks/useTypewriter.ts
import { useEffect, useRef, useState } from 'react'

export function useTypewriter(text: string, speed = 28) {
  const [displayed, setDisplayed] = useState('')
  const ref = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let i = 0
        const interval = setInterval(() => {
          setDisplayed(text.slice(0, ++i))
          if (i >= text.length) clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.3 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [text, speed])

  return { ref, displayed }
}
```

---

## Animation Library Decisions

| Effect | Library / Approach | Notes |
|---|---|---|
| Particle disintegration | Canvas2D API + GSAP tweens | Raw canvas = no dep bloat; GSAP handles easing |
| Magnetic hover + shake | GSAP `quickTo` | Buttery smooth, no jank |
| Extrusion emerge | GSAP + ScrollTrigger | `clip-path` + `scaleY` |
| Typewriter | Custom hook, vanilla JS | No library needed |
| Marquee | Pure CSS `@keyframes` | Simplest reliable approach |
| Lines extending outward | GSAP ScrollTrigger + `scaleX` | Clean and controllable |
| Navbar blur | CSS `backdrop-filter` | Native browser, zero JS |
| Navbar text color swap | `IntersectionObserver` | Watches section boundaries |

---

## Build Order (Recommended)

1. **Setup** — Next.js 14 project, TypeScript, Tailwind, install GSAP, configure fonts via `next/font/google`
2. **Navbar** — sticky, blur, placeholder links
3. **Hero** — layout with photo + Bungee Outline text
4. **About Me** — layout + emerge heading + typewriter body
5. **Skills** — heading only for now
6. **Projects** — card layout + links
7. **Other Projects** — lines animation + marquee tags + typewriter + emerge headings
8. **Contact** — form + API route + social links
9. **Footer** — simple
10. **Magnetic hover** — apply `useMagneticHover` hook to all clickable elements
11. **Navbar color swap** — implement IntersectionObserver logic
12. **Particle disintegration** — last, since it's the most complex and isolated

---

## Environment Variables

```env
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

---

## Key Dependencies

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "gsap": "^3.12.5",
    "resend": "^3.2.0"
  }
}
```



---

## Notes on Assets I'll Provide for now just use names ill replace it
- `/public/images/profile.jpg` — your photo (remove or keep background, your call; a transparent PNG lets you layer more freely over the Bungee Outline text)
- `/public/images/unison.png` — UNISON project screenshot
- `/public/images/image-hoster.png` — Image Hoster screenshot  
- `/public/images/pneumonia.png` — Pneumonia Detector screenshot
- `/public/images/other-projects/*.png` — thumbnails for the 6 other project cards

---
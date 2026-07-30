import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Bungee Outline and Geist Mono aren't in this version of next/font/google
// They are loaded via Google Fonts link in the head

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zain Ul Abideen',
  description:
    'Portfolio of Zain Ul Abideen — a full-stack web and AI developer building meaningful digital experiences.',
  openGraph: {
    title: 'Zain Ul Abideen — Full Stack & AI Developer',
    description:
      'Full-stack web and AI developer. Building scalable, user-friendly solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(poppins.variable, "font-sans", /*geist.variable*/)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Outline&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

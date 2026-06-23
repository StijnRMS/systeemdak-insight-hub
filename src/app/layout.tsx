import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'De Daker Daksystemen — Gratis dakscan & premium dakrenovatie',
  description:
    'Verlaag je energierekening met een nieuw, perfect geïsoleerd dak. Joris Ide JI Slate sandwichpanelen. Snelle uitvoering, maximale isolatie. Vraag je gratis dakscan aan.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

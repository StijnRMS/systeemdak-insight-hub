import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Systeemdak — Alles over geïsoleerde daksystemen',
  description:
    'Ontdek alles over geïsoleerde sandwichdaksystemen: Joris Ide Slate en Permapan. Onafhankelijke productinformatie, vergelijkingen en advies voor uw dakrenovatie.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

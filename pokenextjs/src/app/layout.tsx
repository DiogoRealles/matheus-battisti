import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer/Index';
import Navbar from '@/components/navbar/Index';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'PokeNextJS - Home',
    template: 'PokeNextJS - %s'
  },
  description: 'Projeto PokeNextJS criado no curso Hora de Codar - NextJS',
  keywords: 'PokeNextJS, NextJS, Hora de Codar, Diogo Realles, Diogo, Realles'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

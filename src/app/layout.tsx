import './globals.css'
import { NavbarDefault } from './navbar/page'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'team haxxar',
  description: 'team haxxar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDefault/>
        {children}</body>
    </html>
  )
}
